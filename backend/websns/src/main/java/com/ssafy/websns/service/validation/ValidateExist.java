package com.ssafy.websns.service.validation;

import com.ssafy.websns.model.entity.feed.Comment;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.FeedTag;
import com.ssafy.websns.model.entity.feed.Image;
import com.ssafy.websns.model.entity.feed.LikePerson;
import com.ssafy.websns.model.entity.feed.Tag;
import com.ssafy.websns.model.entity.interest.Interest;
import com.ssafy.websns.model.entity.type.Type;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.model.entity.user.UserProfile;
import java.util.List;
import java.util.Optional;

public class ValidateExist {

  public User findUser(Optional<User> optional) {

    User user;
    if (optional.isPresent()) {
      user = optional.get();
    } else {
      throw new IllegalStateException("존재하지 않은 회원입니다.");
    }
    return user;
  }

  public UserProfile findUserProfile(Optional<UserProfile> optional) {

    UserProfile userProfile;

    if (optional.isPresent()) {
      userProfile = optional.get();
    } else {
      throw new IllegalStateException("존재하지 않은 프로필입니다.");
    }
    return userProfile;
  }

  public Feed findFeed(Optional<Feed> optional) {

    Feed feed;

    if(optional.isPresent()) {
      feed = optional.get();
    } else {
      throw new IllegalStateException("존재하지 않은 게시물입니다.");
    }

    return feed;

  }

  public LikePerson findLike(Optional<LikePerson> optional) {

    LikePerson likePerson;
    if (optional.isPresent()) {
      likePerson = optional.get();
    } else {
      throw new IllegalStateException("존재하지 않은 좋아요입니다.");
    }
    return likePerson;
  }

  public Tag findTag(Optional<Tag> optional) {

    Tag tag;

    if(optional.isPresent()) {
      tag = optional.get();
      return tag;
    } else {
      return null;
    }

  }

  public Comment findComment(Optional<Comment> optional) {

    Comment comment;

    if (optional.isPresent()) {
      comment = optional.get();
    } else {
      throw new IllegalStateException("존재하지 않은 댓글입니다.");
    }

    return comment;

  }

  public Type findTypeNo(Optional<Type> optional) {

    Type type = null;

    if(optional.isPresent()) {
      type = optional.get();
    }

    return type;

  }

  public Interest findInterest(Optional<Interest> optional) {

    Interest interest = null;

    if(optional.isPresent()) {
      interest = optional.get();
    } else {
      throw new IllegalStateException("존재하지 않은 관심사입니다.");
    }

    return interest;

  }

  public List<Comment> findComments(Optional<List<Comment>> optional) {

    List<Comment> comments = null;

    if (optional.isPresent()) {
      comments = optional.get();
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
