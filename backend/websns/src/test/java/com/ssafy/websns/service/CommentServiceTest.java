package com.ssafy.websns.service;

import com.ssafy.websns.model.dto.feed.CommentDto.CreationReq;
import com.ssafy.websns.model.dto.feed.CommentDto.Res;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.feed.CommentRepository;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.user.UserRepository;
import java.time.LocalDateTime;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
public class CommentServiceTest {

  @Autowired
  UserRepository userRepository;
  @Autowired
  FeedRepository feedRepository;
  @Autowired
  CommentService commentService;

  @Test
  void postComment() throws Exception {
    // given
    User user = new User("123412341324","jdb",1,"20-30",true,false);
    userRepository.save(user);

    LocalDateTime createAt = LocalDateTime.now();

    CreationReq req = new CreationReq(0, "123412341234", 1, 2, "장다빈", false, true,createAt);

    // when
    Res res = commentService.postComment(req);

    // then
    Assertions.assertThat(res.getContent()).isEqualTo("장다빈");

    }

}
