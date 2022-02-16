//package com.ssafy.websns.repository.feed;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.transaction.annotation.Transactional;
//
//@SpringBootTest
//@Transactional
//class ImageRepositoryTest {
//
//  @Autowired
//  FeedRepository feedRepository;
//  @Autowired
//  ImageRepository imageRepository;
//
////  @Test
////  void 이미지삭제확인() throws Exception {
////    // given
////    Feed feed = new Feed();
////    feed.setContent("장다빈 뱃살 노출 사진 모음");
////
////    Image image1 = new Image("asd", feed);
////    Image image2 = new Image("qwe", feed);
////    Image image3 = new Image("qwe", feed);
////
////    Feed saveFeed = feedRepository.save(feed);
////    imageRepository.save(image1);
////    imageRepository.save(image2);
////    imageRepository.save(image3);
////
////    // when
////    imageRepository.deleteByFeed(saveFeed);
////    List<Image> images = imageRepository.findByFeed(saveFeed).get();
////
////    // then
////    Assertions.assertThat(images.size()).isEqualTo(0);
////
////    }
//
//}