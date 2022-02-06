package com.ssafy.websns.controller;

import com.ssafy.websns.model.dto.feed.FeedDto.CreationReq;
import com.ssafy.websns.model.dto.feed.FeedDto.Res;
import com.ssafy.websns.service.FeedService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class FeedRestController {

  private final FeedService feedService;

  @PostMapping("/feed")
  public ResponseEntity<Res> createFeed(@RequestBody CreationReq request){

    Res Res = feedService.postFeed(request);

    return new ResponseEntity<>(Res, HttpStatus.OK);

  }

}
