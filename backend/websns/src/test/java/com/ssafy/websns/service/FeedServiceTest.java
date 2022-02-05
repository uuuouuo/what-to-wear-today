package com.ssafy.websns.service;

import com.ssafy.websns.model.dto.feed.CreateFeedDto;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.user.UserRepository;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
@Rollback(false)
class FeedServiceTest {

  @Autowired
  FeedService feedService;
  @Autowired
  UserRepository userRepository;
  //  @Autowired
//  FeedRepository feedRepository;
//  @Autowired
//  PhotoRepository photoRepository;

  @Test
  public void feedService() throws Exception {
    //given
    User user = new User("0","jdb",1,"20-30",true,false);

    userRepository.save(user);

    String createAt = LocalDateTime.now().toString();
    List<String> images = new ArrayList<>(Arrays.asList("c:\\hi","c:\\hi2"));
    CreateFeedDto createFeedDto = new CreateFeedDto(user,"hello","서울특별시 관악구 중앙동","맑음-5도",createAt,false,images);

    //when

    feedService.createFeed(createFeedDto);

    //then



  }


}