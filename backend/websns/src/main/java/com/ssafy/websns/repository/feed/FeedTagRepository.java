package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.FeedTag;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedTagRepository extends JpaRepository<FeedTag,Integer>{

  void deleteFeedTagByFeed(Feed feed);

  Optional<List<FeedTag>> findAllByFeed(Feed Feed);
}
