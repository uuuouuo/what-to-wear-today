package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Feed;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedRepository extends JpaRepository<Feed,Integer> {

}
