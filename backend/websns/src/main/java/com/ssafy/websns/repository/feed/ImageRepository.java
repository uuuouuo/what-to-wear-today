package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.Image;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image,Integer> {

  Optional<List<Image>> findByFeed(Feed feed);

  void deleteByFeed(Feed feed);

}
