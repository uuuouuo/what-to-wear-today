package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

  Comment findByNo(Integer commentNo);

}
