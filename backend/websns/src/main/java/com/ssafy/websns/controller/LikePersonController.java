package com.ssafy.websns.controller;

import com.ssafy.websns.model.dto.feed.LikePersonDto.LikePeopleRes;
import com.ssafy.websns.model.dto.feed.LikePersonDto.LikePersonReq;
import com.ssafy.websns.model.dto.feed.LikePersonDto.LikePersonRes;
import com.ssafy.websns.service.feed.LikePersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/like")
@RequiredArgsConstructor
public class LikePersonController {

  private final LikePersonService likePersonService;

  @PostMapping(value = "/{feedNo}")
  public ResponseEntity<LikePersonRes> createLike(@RequestBody LikePersonReq request, @PathVariable("feedNo") Integer feedNo) {

    LikePersonRes response = likePersonService.createLike(request.getUserId(), feedNo);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @DeleteMapping(value = "/{likeNo}")
  public Integer deleteLike(@PathVariable("likeNo") Integer likeNo) {

    Integer response = likePersonService.cancelLike(likeNo);
    return response;

  }

  @GetMapping(value = "/{feedNo}")
  public ResponseEntity<LikePeopleRes> findLikePeople(@PathVariable("feedNo") Integer feedNo) {

    LikePeopleRes response = likePersonService.showLikePeople(feedNo);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

}
