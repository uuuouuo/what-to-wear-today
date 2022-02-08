package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Feed;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FeedRepository extends JpaRepository<Feed,Integer> {

  Optional<Feed> findByNo(Integer feedNo);
//  Optional<List<Feed>> findByContentContaining(String content);
//  Optional<List<Feed>> findByContentContainingAndDeleteModeIsFalse(String content);
  @Query("select f from Feed f where f.content like %:content% and f.deleteMode = false")
  Optional<List<Feed>> findFeedsByContent(@Param("content") String content);

}
