package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.LikePerson;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikePersonRepository extends JpaRepository<LikePerson, Integer> {

  void deleteByNo(Integer likeNo);

  Optional<List<LikePerson>> findByFeed(Feed feed);

}
