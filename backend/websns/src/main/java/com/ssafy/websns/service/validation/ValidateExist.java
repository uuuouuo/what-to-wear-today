package com.ssafy.websns.service.validation;

import com.ssafy.websns.model.dto.feed.CommentDto.CommentRes;
import com.ssafy.websns.model.entity.feed.Comment;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.FeedTag;
import com.ssafy.websns.model.entity.feed.Image;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class ValidateExist {

  public Feed findFeedByNo(Optional<Feed> optional) {

    Feed feed = new Feed();

    if(optional.isPresent()) {
      feed = optional.get();
    } else {
      throw new IllegalStateException("존재하지 않은 게시물입니다.");
    }

    return feed;

  }

  public Tag findTag(Optional<Tag> optional) {

    Tag tag;

  public Comment findComment(Optional<Comment> optional) {

    Comment comment = new Comment();

    if (optional.isPresent()) {
      comment = optional.get();
    } else {
      throw new IllegalStateException("존재하지 않은 댓글입니다.");
    }

    return comment;

  }

  public List<CommentRes> findComments(Optional<List<Comment>> optional) {

    List<CommentRes> comments = null;

    if (optional.isPresent()) {
      comments = optional.get().stream().map(CommentRes::new)
          .collect(Collectors.toList());
    }

    return comments;

  }

  public List<Feed> findFeeds(Optional<List<Feed>> optional) {

    List<Feed> feeds = null;

    if(optional.isPresent()) {
      feeds = optional.get();
    }

    return feeds;

  }

  public List<Image> findImages(Optional<List<Image>> optional) {

    List<Image> images = null;

    if(optional.isPresent()) {
      images = optional.get();
    }

    return images;

  }

  public List<FeedTag> findFeedTags(Optional<List<FeedTag>> optional) {

    List<FeedTag> feedTags = null;

    if(optional.isPresent()) {
      feedTags = optional.get();
    }

    return feedTags;

  }

}
