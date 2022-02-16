package com.ssafy.websns.repository.feed;

import static com.ssafy.websns.model.entity.feed.QFeed.feed;
import static com.ssafy.websns.model.entity.feed.QFeedTag.feedTag;
import static com.ssafy.websns.model.entity.feed.QTag.tag;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.FeedTag;
import java.time.LocalDateTime;
import java.util.List;
import java.util.function.Supplier;
import javax.persistence.EntityManager;
import org.apache.commons.lang3.StringUtils;

public class CustomFeedRepositoryImpl implements CustomFeedRepository{

  private JPAQueryFactory queryFactory;

  public CustomFeedRepositoryImpl(EntityManager em){
    this.queryFactory = new JPAQueryFactory(em);
  }

  @Override
  public List<Feed> search(SearchCondition searchCondition) {
    return queryFactory
        .selectFrom(feed)
        .innerJoin(feedTag.feed)
        .fetchJoin()
        .where(isSearchable(searchCondition.getKeyword(),searchCondition.getTag(),searchCondition.getStartDate(),searchCondition.getEndDate(),
            searchCondition.getRegion(),searchCondition.getTemperature(),searchCondition.getSort()))
        .fetch();
  }

  private BooleanBuilder isSearchable(String keyword, List<String> tag, LocalDateTime startDate, LocalDateTime endDate,
      String region, String temperature, String sort) {

    BooleanBuilder booleanBuilder = new BooleanBuilder();
    if(StringUtils.isNotEmpty(keyword)) {
      booleanBuilder.and(feed.region.regionName.eq(keyword));
    }

    if(StringUtils.isNotEmpty(startDate.toString())) {
      booleanBuilder.and(feed.photoDate.between(startDate,endDate));
    }

    if(StringUtils.isNotEmpty(temperature)) {
      booleanBuilder.and(feed.weather.eq(temperature));
    }


    return null;
  }



  JPAQuery<FeedTag> createSubQuery(List<String> contents) {

    JPAQuery<FeedTag> subQuery = queryFactory.selectFrom(feedTag)
        .innerJoin(tag)
        .fetchJoin()
        .where(tag.tagName.in(contents));

    return subQuery;
//    return nullSafeBuilder(() -> );
  }

  BooleanBuilder regionEq(String content) {
    return nullSafeBuilder(() -> feed.region.regionName.eq(content));
  }


  BooleanBuilder betweenDate(LocalDateTime startDate, LocalDateTime endDate) {
    return nullSafeBuilder(() -> feed.photoDate.between(startDate,endDate));
  }


  BooleanBuilder nullSafeBuilder(Supplier<BooleanExpression> f) {
    try {
      return new BooleanBuilder(f.get());
    } catch (Exception e) {
      return new BooleanBuilder();
    }
  }

}
