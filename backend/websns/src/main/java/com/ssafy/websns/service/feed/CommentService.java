package com.ssafy.websns.service.feed;

import com.ssafy.websns.model.dto.feed.CommentDto.CommentRes;
import com.ssafy.websns.model.dto.feed.CommentDto.CreateReq;
import com.ssafy.websns.model.dto.feed.CommentDto.UpdateReq;
import com.ssafy.websns.model.dto.feed.CommentDto.UpdateRes;
import com.ssafy.websns.model.entity.feed.Comment;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.model.entity.user.UserProfile;
import com.ssafy.websns.repository.feed.CommentRepository;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.user.UserProfileRepository;
import com.ssafy.websns.repository.user.UserRepository;
import com.ssafy.websns.service.validation.ValidateExist;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CommentService {

  private final CommentRepository commentRepository;
  private final FeedRepository feedRepository;
  private final UserRepository userRepository;
  private final UserProfileRepository userProfileRepository;

  private ValidateExist validateExist = new ValidateExist();

  @Transactional
  public CommentRes postComment(Integer feedNo, CreateReq request) {

    Optional<Feed> feedOptional = feedRepository.findByNo(feedNo);
    Optional<User> userOptional = userRepository.findByUserId(request.getUserId());

    User user = validateExist.findUser(userOptional);
    Feed feed = validateExist.findFeed(feedOptional);

    Optional<UserProfile> profileOptional = userProfileRepository.findByUser(user);
    UserProfile userProfile = validateExist.findUserProfile(profileOptional);

    Integer parentNo = request.getParent();
    Comment parentComment = null;

    if (parentNo != -1) {
      Optional<Comment> optional = commentRepository.findByNo(parentNo);
      parentComment = validateExist.findComment(optional);
    }

    Comment comment = new Comment();
    comment.createComment(user, feed, parentComment,
        request.getContent(), request.getPrivateMode(), request.getDeleteMode());

    Comment saveComment = commentRepository.save(comment);

    CommentRes response = new CommentRes(userProfile, saveComment);

    return response;

  }

  @Transactional
  public UpdateRes editComment(Integer commentNo, UpdateReq request) {

    Optional<Comment> optional = commentRepository.findByNo(commentNo);
    Comment comment = validateExist.findComment(optional);
    comment.updateComment(request.getContent(), request.getPrivateMode());

    Optional<UserProfile> profileOptional = userProfileRepository.findByUser(comment.getUser());
    UserProfile userProfile = validateExist.findUserProfile(profileOptional);

    UpdateRes response = new UpdateRes(userProfile, comment);

    return response;

  }

  @Transactional
  public void cancelComment(Integer commentNo) {

    Optional<Comment> optional = commentRepository.findByNo(commentNo);
    Comment comment = validateExist.findComment(optional);

    comment.deleteComment();

  }

  public List<CommentRes> searchComments(Integer feedNo) {

    Optional<Feed> optional = feedRepository.findByNo(feedNo);
    Feed feed = validateExist.findFeed(optional);


    Optional<List<Comment>> commentOptional = commentRepository.findByFeedAndDeleteModeIsFalse(feed);
    List<Comment> comments = validateExist.findComments(commentOptional);

    List<CommentRes> response = new ArrayList<>();
    comments.stream().forEach(comment -> {
        Optional<UserProfile> profileOptional = userProfileRepository.findByUser(comment.getUser());
        UserProfile userProfile = validateExist.findUserProfile(profileOptional);
        CommentRes commentRes = new CommentRes(userProfile, comment);
        response.add(commentRes);
    });

    return response;

  }

  public List<CommentRes> showCommentsById(String userId) {

    Optional<User> userOptional = userRepository.findByUserId(userId);
    User user = validateExist.findUser(userOptional);

    Optional<List<Comment>> commentOptional = commentRepository.findByUserAndDeleteModeIsFalse(user);
    List<Comment> comments = validateExist.findComments(commentOptional);

    List<CommentRes> response = new ArrayList<>();
    comments.stream().forEach(comment -> {
        Optional<UserProfile> profileOptional = userProfileRepository.findByUser(user);
        UserProfile userProfile = validateExist.findUserProfile(profileOptional);
        CommentRes commentRes = new CommentRes(userProfile, comment);
        response.add(commentRes);
    });

    return response;

  }

}
