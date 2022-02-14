package com.ssafy.websns.controller;

import com.ssafy.websns.model.dto.feed.CommentDto.CommentRes;
import com.ssafy.websns.model.dto.feed.CommentDto.CreateReq;
import com.ssafy.websns.model.dto.feed.CommentDto.UpdateReq;
import com.ssafy.websns.model.dto.feed.CommentDto.UpdateRes;
import com.ssafy.websns.service.feed.CommentService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comment")
@RequiredArgsConstructor
public class CommentController {

  private final CommentService commentService;

  @PostMapping
  public ResponseEntity<CommentRes> createComment(@RequestBody Integer feedNo, @RequestBody CreateReq request){

    CommentRes response = commentService.postComment(feedNo, request);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @PutMapping("/{commentNo}")
  public ResponseEntity<UpdateRes> updateComment(@PathVariable("commentNo") Integer commentNo,
      @RequestBody UpdateReq request) {

    UpdateRes response = commentService.editComment(commentNo, request);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @DeleteMapping("/{commentNo}")
  public void deleteComment(@PathVariable("commentNo") Integer commentNo) {

    commentService.cancelComment(commentNo);

  }

  @GetMapping("/{feedNo}")
  public ResponseEntity<List<CommentRes>> getCommentListByFeed(@PathVariable("feedNo") Integer feedNo) {

    List<CommentRes> response = commentService.searchComments(feedNo);
    return new ResponseEntity<>(response, HttpStatus.OK);
  }

  @GetMapping("/mypage")
  public ResponseEntity<List<CommentRes>> getCommentListById(@RequestParam String userId) {

    List<CommentRes> response = commentService.showCommentsById(userId);
    return new ResponseEntity<>(response, HttpStatus.OK);
  }

}
