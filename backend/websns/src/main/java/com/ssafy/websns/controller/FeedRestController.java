package com.ssafy.websns.controller;

import com.ssafy.websns.model.dto.CreateFeedDto;
import com.ssafy.websns.model.dto.FeedDto;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.Photo;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.service.FeedService;
import com.ssafy.websns.weather.WeatherDto;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class FeedRestController {

  private final FeedService feedService;

  @PostMapping("/feed")
  public ResponseEntity<FeedDto> createFeed(@RequestBody CreateFeedDto request){

    feedService.createFeed(request);

    return new ResponseEntity<>();

  }
}
