package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.FeedLikeCnt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedLikeCntRepository extends JpaRepository<FeedLikeCnt, Integer> {

  FeedLikeCnt findByFeed(Feed feed);

}
