package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Feed;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedRepository extends JpaRepository<Feed,Integer> {

  Optional<Feed> findByNo(Integer feedNo);
  Optional<List<Feed>> findByContentContaining(String content);

}
