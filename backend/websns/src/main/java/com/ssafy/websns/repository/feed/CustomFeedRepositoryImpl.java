package com.ssafy.websns.repository.feed;

import static com.ssafy.websns.model.entity.feed.QFeed.feed;
import static com.ssafy.websns.model.entity.feed.QFeedTag.feedTag;
import static com.ssafy.websns.model.entity.feed.QTag.tag;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.websns.model.dto.feed.FeedDto.SearchDto;
import com.ssafy.websns.model.entity.feed.Feed;
import java.time.LocalDateTime;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
public class CustomFeedRepositoryImpl extends QuerydslRepositorySupport implements CustomFeedRepository {

  private JPAQueryFactory queryFactory;

  public CustomFeedRepositoryImpl(JPAQueryFactory queryFactory) {

    super(Feed.class);
    this.queryFactory = queryFactory;

  }

  @Override
  public List<Feed> search(SearchDto searchCondition, Pageable pageable) {

    JPAQuery<Feed> query = queryFactory
        .selectFrom(feed)
        .innerJoin(feedTag.feed)
        .fetchJoin()
        .where(isSearchable(searchCondition.getTag(),
            searchCondition.getStartDate(), searchCondition.getEndDate(),
            searchCondition.getRegion(), searchCondition.getTemperature()));

    List<Feed> queryPage = getQuerydsl().applyPagination(pageable,query).fetch();

    return queryPage;
  }

  private BooleanBuilder isSearchable(List<String> tag, LocalDateTime startDate,
      LocalDateTime endDate,
      String region, String temperature) {

    BooleanBuilder booleanBuilder = new BooleanBuilder();

    if (!tag.isEmpty()) {

      List<Feed> subQuery = createSubQuery(tag);
      booleanBuilder.and(feed.in(subQuery));

    }
    if (StringUtils.isNotEmpty(startDate.toString())) {
      booleanBuilder.and(feed.photoDate.between(startDate, endDate));
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

    List<Feed> fetch = queryFactory.select(feedTag.feed)
        .from(feedTag)
        .innerJoin(tag)
        .fetchJoin()
        .where(tag.tagName.in(contents))
        .fetch();

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
