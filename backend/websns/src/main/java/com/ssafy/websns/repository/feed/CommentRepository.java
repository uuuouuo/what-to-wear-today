package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Comment;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.user.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

  Optional<Comment> findByNo(Integer commentNo);

  Optional<List<Comment>> findByFeedAndDeleteModeIsFalse(Feed feed);

}
