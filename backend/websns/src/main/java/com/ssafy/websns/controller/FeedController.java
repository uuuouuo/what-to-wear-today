package com.ssafy.websns.controller;

import com.ssafy.websns.model.dto.feed.FeedDto.CreateReq;
import com.ssafy.websns.model.dto.feed.FeedDto.FeedRes;
import com.ssafy.websns.model.dto.feed.FeedDto.UpdateReq;
import com.ssafy.websns.model.dto.feed.FeedDto.UpdateRes;
import com.ssafy.websns.service.feed.FeedService;
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
public class FeedController {

  private final FeedService feedService;

  @PostMapping("/feed")
  public ResponseEntity<FeedRes> createFeed(@RequestBody CreateReq request){

    FeedRes response = feedService.postFeed(request);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @PutMapping("/feed/{feedNo}")
  public ResponseEntity<UpdateRes> updateFeed(@PathVariable("feedNo")Integer feedNo,
      @RequestBody UpdateReq request) {

    UpdateRes response = feedService.editFeed(feedNo, request);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @DeleteMapping("/feed/{feedNo}")
  public void deleteComment(@PathVariable("feedNo")Integer feedNo) {

    feedService.cancelFeed(feedNo);

  }

}
