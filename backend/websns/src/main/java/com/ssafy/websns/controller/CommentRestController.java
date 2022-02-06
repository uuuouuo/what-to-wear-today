package com.ssafy.websns.controller;

import com.ssafy.websns.model.dto.feed.CommentDto.CreateReq;
import com.ssafy.websns.model.dto.feed.CommentDto.CreateRes;
import com.ssafy.websns.model.dto.feed.CommentDto.UpdateReq;
import com.ssafy.websns.model.dto.feed.CommentDto.UpdateRes;
import com.ssafy.websns.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CommentRestController {

  private final CommentService commentService;

  @PostMapping("/comment/{feedNo}")
  public ResponseEntity<CreateRes> createComment(@PathVariable("feedNo") Integer feedNo, @RequestBody CreateReq request){

    CreateRes response = commentService.postComment(feedNo, request);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @PutMapping("/comment/{commentNo}")
  public ResponseEntity<UpdateRes> updateComment(@PathVariable("commentNo")Integer commentNo,
      @RequestBody UpdateReq request) {

    UpdateRes response = commentService.editComment(commentNo, request);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @DeleteMapping("/comment/{commentNo}")
  public void deleteComment(@PathVariable("commentNo") Integer commentNo) {
     commentService.cancelComment(commentNo);
  }

}
