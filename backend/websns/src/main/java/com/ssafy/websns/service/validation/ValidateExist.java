package com.ssafy.websns.service.validation;

import com.ssafy.websns.model.dto.feed.CommentDto.CommentRes;
import com.ssafy.websns.model.entity.feed.Comment;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.Image;
import com.ssafy.websns.repository.feed.CommentRepository;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.feed.ImageRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ValidateExist {

  private final CommentRepository commentRepository;
  private final FeedRepository feedRepository;
  private final ImageRepository imageRepository;

  public Feed findFeedByNo(Integer feedNo) {

    Feed feed = new Feed();
    Optional<Feed> optional = feedRepository.findByNo(feedNo);

    if(optional.isPresent()) {
      feed = optional.get();
    } else {
      throw new IllegalStateException("존재하지 않은 피드 입니다.");
    }

    return feed;

  }


  public Comment findCommentsByNo(Integer commentNo) {

    Comment comment = new Comment();
    Optional<Comment> optional = commentRepository.findByNo(commentNo);

    if (optional.isPresent()) {
      comment = optional.get();
    } else {
      throw new IllegalStateException("존재하지 않은 댓글입니다.");
    }

    return comment;

  }

  public List<CommentRes> findCommentsByFeed(Feed feed) {

    Optional<List<Comment>> optional = commentRepository.findByFeed(feed);
    List<CommentRes> comments = null;

    if (optional.isPresent()) {
      comments = optional.get().stream().map(CommentRes::new)
          .collect(Collectors.toList());
    }

    return comments;

  }

  public List<Feed> findFeedByNosByKeyword(String keyword) {

    Optional<List<Feed>> optional = feedRepository.findByContentContaining(keyword);
    List<Feed> feeds = null;

    if(optional.isPresent()) {
      feeds = optional.get();
    }

    return feeds;

  }

  public List<Image> findImagesByFeed(Feed feed) {
    Optional<List<Image>> optional = imageRepository.findByFeed(feed);
    List<Image> images = null;

    if(optional.isPresent()) {
      images = optional.get();
    }

    return images;

  }

}
