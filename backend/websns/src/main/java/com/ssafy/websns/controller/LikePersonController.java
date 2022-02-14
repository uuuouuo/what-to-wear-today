package com.ssafy.websns.controller;

import com.ssafy.websns.model.dto.feed.LikePersonDto.LikePersonRes;
import com.ssafy.websns.service.feed.LikePersonService;
import java.util.List;
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

  @PostMapping(value = "/{userId}/{feedNo}")
  public ResponseEntity<LikePersonRes> createLike(@RequestBody String userId, @RequestBody Integer feedNo) {

    LikePersonRes response = likePersonService.createLike(userId, feedNo);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @DeleteMapping(value = "/{likeNo}")
  public void deleteLike(@PathVariable("likeNo") Integer likeNo) {

    likePersonService.cancelLike(likeNo);

  }

  @GetMapping(value = "/{feedNo}")
  public List<String> findLikePeople(@PathVariable("feedNo") Integer feedNo) {

    likePersonService.showLikePeople(feedNo);
  }

}
