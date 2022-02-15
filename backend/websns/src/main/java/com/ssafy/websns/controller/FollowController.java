package com.ssafy.websns.controller;

import com.ssafy.websns.model.dto.user.FollowDto.FollowReq;
import com.ssafy.websns.model.dto.user.FollowDto.FollowRes;
import com.ssafy.websns.service.user.FollowService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/follow")
@RequiredArgsConstructor
public class FollowController {

  private final FollowService followService;

  @PostMapping
  public ResponseEntity<FollowRes> createFollow(@RequestBody FollowReq request) {

    FollowRes response = followService.createFollow(request);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

}
