package com.ssafy.websns.service.feed;

import com.ssafy.websns.model.dto.feed.CommentDto.CommentRes;
import com.ssafy.websns.model.dto.feed.CommentDto.CreateReq;
import com.ssafy.websns.model.dto.feed.CommentDto.UpdateReq;
import com.ssafy.websns.model.dto.feed.CommentDto.UpdateRes;
import com.ssafy.websns.model.entity.feed.Comment;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.feed.CommentRepository;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.user.UserRepository;
import com.ssafy.websns.service.validation.ValidateExist;
import java.util.List;
import java.util.Optional;
import javax.persistence.EntityManager;
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

  private ValidateExist validateExist = new ValidateExist();

//  private CommentService(CommentRepository commentRepository, FeedRepository feedRepository, UserRepository userRepository){
//    this.commentRepository = commentRepository;
//    this.feedRepository = feedRepository;
//    this.userRepository = userRepository;
//  }

  @Transactional
  public CommentRes postComment(Integer feedNo, CreateReq request) {

//    ValidateExist validateExist = new ValidateExist(commentRepository, feedRepository, null);

    Optional<Feed> feedOptional = feedRepository.findByNo(feedNo);
    User user = userRepository.findByUserId(request.getUserId());
    Feed feed = validateExist.findFeedByNo(feedOptional);

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

    CommentRes response = new CommentRes(saveComment);

    return response;

  }

  @Transactional
  public UpdateRes editComment(Integer commentNo, UpdateReq request) {

//    ValidateExist validateExist = new ValidateExist(commentRepository, feedRepository, null);

    Optional<Comment> optional = commentRepository.findByNo(commentNo);

    Comment comment = validateExist.findComment(optional);
    comment.updateComment(request.getContent(), request.getPrivateMode());

    UpdateRes response = new UpdateRes(comment.getNo(), comment.getContent(), comment.getPrivateMode(),
        comment.getUpdatedAt());

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
    Feed feed = validateExist.findFeedByNo(optional);
    
    Optional<List<Comment>> commentOptional = commentRepository.findByFeedAndDeleteModeIsFalse(feed);
    List<CommentRes> comments = validateExist.findComments(commentOptional);

    return comments;

  }

}
