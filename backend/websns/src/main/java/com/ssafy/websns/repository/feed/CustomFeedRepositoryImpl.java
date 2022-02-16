package com.ssafy.websns.repository.feed;

import static com.ssafy.websns.model.entity.feed.QFeed.feed;
import static com.ssafy.websns.model.entity.feed.QFeedTag.feedTag;
import static com.ssafy.websns.model.entity.feed.QTag.tag;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.websns.model.dto.feed.FeedDto.SearchDto;
import com.ssafy.websns.model.entity.feed.Feed;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import javax.persistence.EntityManager;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Repository;

@Repository
public class CustomFeedRepositoryImpl implements CustomFeedRepository {

  private JPAQueryFactory queryFactory;
  public CustomFeedRepositoryImpl(EntityManager em) {
    this.queryFactory = new JPAQueryFactory(em);
  }

  @Override
  public List<Feed> search(SearchDto searchCondition) {

    JPAQuery<Feed> query = queryFactory
        .selectDistinct(feed)
        .from(feed)
        .innerJoin(feedTag).on(feed.no.eq(feedTag.feed.no))
        .fetchJoin()
        .where(isSearchable(searchCondition.getTag(),
            searchCondition.getStartDate(), searchCondition.getEndDate(),
            searchCondition.getRegion(), searchCondition.getTemperature()));

    List<Feed> queryPage = query.fetch();

    return queryPage;
  }

  private BooleanBuilder isSearchable(List<String> tag, String startDate,
      String endDate,
      String region, String temperature) {


    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-d");

    BooleanBuilder booleanBuilder = new BooleanBuilder();

    if (tag!=null) {

      List<Feed> subQuery = createSubQuery(tag);
      booleanBuilder.and(feed.in(subQuery));

    }
    if (StringUtils.isNotEmpty(startDate)) {

      startDate = startDate.replace(".","-");
      endDate = endDate.replace(".","-");

      System.out.println("asdfad "+startDate);
      System.out.println("asdfsdf2 " + endDate);

      LocalDateTime startDateTime = LocalDateTime.parse(startDate, formatter);
      LocalDateTime endDateTime = LocalDateTime.parse(endDate, formatter);

      booleanBuilder.and(feed.photoDate.between(startDateTime, endDateTime));
    }

    if (StringUtils.isNotEmpty(temperature)) {
      booleanBuilder.and(feed.weather.eq(temperature));
    }

    if (StringUtils.isNotEmpty(region)) {
      booleanBuilder.and(feed.region.regionName.eq(region));
    }

    return booleanBuilder;
    
  }


  List<Feed> createSubQuery(List<String> contents) {

    List<Feed> fetch = queryFactory.selectDistinct(feedTag.feed)
        .from(feedTag)
        .innerJoin(tag).on(feedTag.tagNo.no.eq(tag.no))
        .fetchJoin()
        .where(tag.tagName.in(contents))
        .fetch();
    System.out.println("===========================================");
    fetch.stream().forEach(System.out::println);
    return fetch;
  }

//  BooleanBuilder regionEq(String content) {
//    return nullSafeBuilder(() -> feed.region.regionName.eq(content));
//  }
//
//
//  BooleanBuilder betweenDate(LocalDateTime startDate, LocalDateTime endDate) {
//    return nullSafeBuilder(() -> feed.photoDate.between(startDate, endDate));
//  }
//
//
//  BooleanBuilder nullSafeBuilder(Supplier<BooleanExpression> f) {
//    try {
//      return new BooleanBuilder(f.get());
//    } catch (Exception e) {
//      return new BooleanBuilder();
//    }
//  }

}
