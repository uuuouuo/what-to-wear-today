package com.ssafy.websns.service;

import com.ssafy.websns.model.dto.feed.CommentDto.CreateReq;
import com.ssafy.websns.model.dto.feed.CommentDto.CreateRes;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.region.RegionRepository;
import com.ssafy.websns.repository.user.UserRepository;
import java.time.LocalDateTime;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
@Rollback(false)
public class CommentServiceTest {

  @Autowired
  UserRepository userRepository;
  @Autowired
  FeedRepository feedRepository;
  @Autowired
  RegionRepository regionRepository;
  @Autowired
  CommentService commentService;

  @Test
  void postComment() throws Exception {
    // given
    LocalDateTime createAt = LocalDateTime.now();
    LocalDateTime photoDate = LocalDateTime.now();

    User user = new User("1","jdb4497",1,"20-30",true,false);
    userRepository.save(user);
//    Region region = new Region(1,"광주", 100);
//    regionRepository.save(region);
//    Feed feed = new Feed(1, user, region, "오늘 추워용", photoDate, "개추움", false, false);
    Feed feed = new Feed();
    feed.setNo(2);
    feedRepository.save(feed);

    CreateReq req = new CreateReq(1, "1", 0, "장다빈", false, false, createAt);

    // when
    CreateRes res = commentService.postComment(2, req);

    // then
    Assertions.assertThat(res.getContent()).isEqualTo("장다빈");

    }

}
