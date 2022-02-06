package com.ssafy.websns.controller;

import com.ssafy.websns.model.dto.feed.FeedDto.CreateReq;
import com.ssafy.websns.model.dto.feed.FeedDto.CreateRes;
import com.ssafy.websns.service.FeedService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class FeedController {

  private final FeedService feedService;

  @PostMapping("/feed")
  public ResponseEntity<CreateRes> createFeed(@RequestBody CreateReq request){

    CreateRes response = feedService.postFeed(request);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

//  @PutMapping("/feed/{feedNo}")
//  public ResponseEntity<UpdateRes> updateComment(@PathVariable("feedNo")Integer feedNo,
//      @RequestBody UpdateReq request) {
//
//    UpdateRes response = feedService.editFeed(feedNo, request);
//    return new ResponseEntity<>(response, HttpStatus.OK);
//
//  }

//  @DeleteMapping("/comment/{commentNo}")
//  public void deleteComment(@PathVariable("commentNo") Integer commentNo) {
//
//    feedService.cancelComment(commentNo);
//
//  }

}
