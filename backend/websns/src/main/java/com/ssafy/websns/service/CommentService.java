package com.ssafy.websns.service;

import com.ssafy.websns.model.dto.feed.CommentDto.CreateReq;
import com.ssafy.websns.model.dto.feed.CommentDto.Res;
import com.ssafy.websns.model.dto.feed.CommentDto.UpdateReq;
import com.ssafy.websns.model.dto.feed.CommentDto.UpdateRes;
import com.ssafy.websns.model.entity.feed.Comment;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.feed.CommentRepository;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.user.UserRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
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

  @Transactional
  public Res postComment(Integer feedNo, CreateReq request) {

    User user = userRepository.findByNo(request.getUserNo());

    Feed feed = feedRepository.findByNo(feedNo);

    Integer parentNo = request.getParent();
    Comment parentComment = null;

    if (parentNo != -1) {
      parentComment = validateExistComment(parentNo);
    }

    Comment comment = new Comment();
    comment.createComment(request.getNo(), user, feed, parentComment,
        request.getContent(), request.getPrivateMode(), request.getDeleteMode());

    commentRepository.save(comment);

    Res response = new Res(comment.getUser(), comment.getFeed().getNo(), comment.getParent(),
        comment.getContent(), comment.getCreateAt());

    return response;

  }

  @Transactional
  public UpdateRes editComment(Integer commentNo, UpdateReq request) {

    Comment comment = validateExistComment(commentNo);
    ;
    comment.updateComment(request.getContent(), request.getPrivateMode());

    UpdateRes response = new UpdateRes(comment.getContent(), comment.getPrivateMode(),
        comment.getUpdateAt());

    return response;

  }

  public void cancelComment(Integer commentNo) {

    Comment comment = validateExistComment(commentNo);
    comment.deleteComment();
  }

  public List<Res> searchComments(Integer feedNo) {

    Feed feed = feedRepository.findByNo(feedNo);
    Optional<List<Comment>> optional = commentRepository.findByFeed(feed);
    List<Res> comments = null;

    if (optional.isPresent()) {
      comments = optional.get().stream().map(Res::new)
          .collect(Collectors.toList());
    }

    return comments;

  }

  public Comment validateExistComment(Integer commentNo) {

    Comment comment = null;
    Optional<Comment> optional = commentRepository.findByNo(commentNo);

    if (optional.isPresent()) {
      comment = optional.get();
    } else {
      throw new IllegalStateException("존재하지 않은 댓글입니다.");
    }

    return comment;

  }

}
