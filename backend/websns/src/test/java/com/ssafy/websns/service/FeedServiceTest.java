//package com.ssafy.websns.service;
//
//
//import com.ssafy.websns.model.dto.feed.FeedDto.FeedRes;
//import com.ssafy.websns.repository.feed.FeedRepository;
//import com.ssafy.websns.repository.feed.ImageRepository;
//import com.ssafy.websns.repository.region.RegionRepository;
//import com.ssafy.websns.repository.user.UserRepository;
//import com.ssafy.websns.service.feed.FeedService;
//import java.util.List;
//import javax.persistence.EntityManager;
//import org.assertj.core.api.Assertions;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.annotation.Rollback;
//import org.springframework.transaction.annotation.Transactional;
//
//@SpringBootTest
//@Transactional
//@Rollback(false)
//class FeedServiceTest {
//
//  @Autowired
//  FeedService feedService;
//  @Autowired
//  UserRepository userRepository;
//  @Autowired
//  RegionRepository regionRepository;
//  @Autowired
//  FeedRepository feedRepository;
//  @Autowired
//  ImageRepository imageRepository;
//
//  @Autowired
//  EntityManager em;
//
//  @Test
//  void 유저로피드찾기확인() throws Exception {
//    // given
////    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.M.d.HH:mm");
////    String photoDateString = LocalDateTime.now().format(formatter);
////    LocalDateTime photoDate = LocalDateTime.parse(photoDateString, formatter);
//
////    User user = new User("a12341234123", "jdb4497@gmail.com", "12341234", "kakao", "20 - 30", true, false);
////    userRepository.save(user);
////    em.flush();
////    em.clear();
////    Region region = new Region("서울", 100);
////    regionRepository.save(region);
////    Feed feed1 = new Feed(user, region, "오늘 덥네요 ;", photoDate, "핵더움", false, false);
////    Feed feed2 = new Feed(user, region, "오늘 덥네요 ;", photoDate, "핵더움", false, false);
////    feedRepository.save(feed1);
////    feedRepository.save(feed2);
//
//    // when
//    List<FeedRes> feeds = feedService.showFeedsById("jdb4497@gmail.com");
//
//    // then
//    Assertions.assertThat(feeds.size()).isEqualTo(5);
//
//  }
//
////
//////  @Test
//////  void 피드생성확인() throws Exception {
//////    //given
//////    User user = new User();
//////    user.setNo("1234");
//////    userRepository.save(user);
//////
//////    String createdAt = LocalDateTime.now().toString();
//////    List<String> images = new ArrayList<>(Arrays.asList("c:\\hi","c:\\hi2"));
//////    CreateReq request = new CreateReq(1, user,"hello","서울특별시 관악구 중앙동",
//////        "맑음-5도",createdAt,false, false, images);
//////
//////    //when
//////    feedService.postFeed(request);
//////
//////    //then
//////
//////  }
////
////  @Test
////  void 피드수정확인() throws Exception {
////    // given
////    //2022-02-08T11:29:55.5494298
////    //2022.02.08.11:29
////    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.M.d.HH:mm");
////    String photoDateString = LocalDateTime.now().format(formatter);
////    LocalDateTime photoDate = LocalDateTime.parse(photoDateString, formatter);
////
////    User user = new User("a123412341234", "jdb4497@nate.com", 1, "20 - 30", true, false);
////    userRepository.save(user);
////    em.flush();
////    em.clear();
////    Region region = new Region("서울", 100);
////    regionRepository.save(region);
////    Feed feed = new Feed(user, region, "오늘 덥네요 ;", photoDate, "핵더움", false, false);
////    feedRepository.save(feed);
////
////
////    Image image1 = new Image("장다빈_뱃살.png", feed);
////    Image image2 = new Image("장다빈_섹_시_우_먼.png", feed);
////    List<Image> createImages = new ArrayList<>();
////    createImages.add(image1);
////    createImages.add(image2);
////    imageRepository.saveAll(createImages);
////
////    Image reqImage1 = new Image("장다빈_근육남.png", feed);
////    Image reqImage2 = new Image("장다빈_핸섬가이.png", feed);
////    Image reqImage3 = new Image("장다빈_순수남.png", feed);
////    List<String> images = new ArrayList<>();
////    images.add(reqImage1.getImgUrl());
////    images.add(reqImage2.getImgUrl());
////    images.add(reqImage3.getImgUrl());
////
//
////
////    UpdateReq updateReq = new UpdateReq("추운거 같기도 하고", "서울", "맑음",
////        photoDateString, false, images);
////
//
////    // when
////    UpdateRes updateRes = feedService.editFeed(feed.getNo(), updateReq);
////    List<Image> testImages = imageRepository.findByFeed(feed).get();
////
////    // then
////    assertThat(feed.getContent()).isEqualTo(updateRes.getContent());
////    assertThat(testImages.size()).isEqualTo(3);
////    testImages.stream().forEach(System.out::println);
//
////
////    }
////
////
////    @Test
////    void 피드삭제확인() throws Exception {
////
////      // when
////      feedService.cancelFeed(49);
////      Feed feed = feedRepository.findByNo(49).get();
////
////      // then
////      assertThat(feed.getDeleteMode()).isTrue();
////
////      }
//
////      @Test
////      void 피드검색확인() throws Exception {
////        // given
////
////        // when
////        List<FeedRes> feeds = feedService.searchFeeds("추운거");
////
////        // then
////        assertThat(feeds.size()).isEqualTo(2);
////
////        feeds.stream().forEach(System.out::println);
////
////        }
////
//}
