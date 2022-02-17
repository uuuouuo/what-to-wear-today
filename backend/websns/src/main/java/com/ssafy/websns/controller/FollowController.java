package com.ssafy.websns.controller;

import com.ssafy.websns.model.dto.user.FollowDto.DeleteFollowRes;
import com.ssafy.websns.model.dto.user.FollowDto.FollowReq;
import com.ssafy.websns.model.dto.user.FollowDto.FollowRes;
import com.ssafy.websns.model.dto.user.UserProfileDto.UserProfileRes;
import com.ssafy.websns.service.user.FollowService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class FollowController {

  private final FollowService followService;

  @PostMapping("/follow")
  public ResponseEntity<FollowRes> createFollow(@RequestBody FollowReq request) {

    FollowRes response = followService.createFollow(request);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @DeleteMapping("/follow")
  public ResponseEntity<DeleteFollowRes> deleteFollow(@RequestParam(value = "userid") String userId, @RequestParam(value = "followingid") String followingId) {

    DeleteFollowRes response = followService.cancelFollow(userId,followingId);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @GetMapping("/follower/{userId}")
  public ResponseEntity<List<UserProfileRes>> findFollowers(@PathVariable("userId") String userId) {

    List<UserProfileRes> response = followService.searchFollower(userId);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @GetMapping("/following/{userId}")
  public ResponseEntity<List<UserProfileRes>> findFollowings(@PathVariable("userId") String userId) {

    List<UserProfileRes> response = followService.searchFollowing(userId);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

}
