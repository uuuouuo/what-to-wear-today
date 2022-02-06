package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Comment;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

  Optional<Comment> findByNo(Integer commentNo);

}
