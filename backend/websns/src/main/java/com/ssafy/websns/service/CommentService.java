package com.ssafy.websns.service;

import com.ssafy.websns.model.dto.feed.CommentDto.CreationReq;
import com.ssafy.websns.model.dto.feed.CommentDto.Res;
import com.ssafy.websns.model.entity.feed.Comment;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.feed.CommentRepository;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentService {

  private final CommentRepository commentRepository;
  private final FeedRepository feedRepository;
  private final UserRepository userRepository;

  public Res postComment(CreationReq request) {

    // 회원 정보 가져오기
    User user = userRepository.findByNo(request.getUserNo());

    // 피드 정보 가져오기
    Feed feed = feedRepository.findByNo(request.getFeedNo());

    // 부모 댓글 가져오기
    Comment parentComment = commentRepository.findByNo(request.getParent());

    // 댓글 생성
    Comment comment = new Comment();
    comment.createComment(request.getNo(), user, feed, parentComment
        , request.getContent(), request.getPrivateMode(),request.getDeleteMode());

    commentRepository.save(comment);

    Res response = new Res(comment.getUser(), comment.getFeed().getNo(), comment.getParent(),
        comment.getContent(), comment.getCreateAt());

    return response;

  }

}
