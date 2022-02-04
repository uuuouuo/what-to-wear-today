package com.ssafy.websns.controller;

import com.ssafy.websns.model.dto.CreateFeedDto;
import com.ssafy.websns.model.dto.FeedDto;
import com.ssafy.websns.service.FeedService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class FeedRestController {

  private final FeedService feedService;

//  @PostMapping("/feed")
//  public ResponseEntity<FeedDto> createFeed(@RequestBody CreateFeedDto request){
//
//    feedService.createFeed(request);
//
//    return new ResponseEntity<>();
//
//  }

}
