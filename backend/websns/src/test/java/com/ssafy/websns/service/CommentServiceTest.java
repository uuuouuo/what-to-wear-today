package com.ssafy.websns.service;

import com.ssafy.websns.model.dto.feed.CommentDto.CommentRes;
import com.ssafy.websns.model.entity.feed.Comment;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.feed.CommentRepository;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.feed.ImageRepository;
import com.ssafy.websns.repository.region.RegionRepository;
import com.ssafy.websns.repository.user.UserRepository;
import com.ssafy.websns.service.feed.CommentService;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import javax.persistence.EntityManager;
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
  @Autowired
  CommentRepository commentRepository;
  @Autowired
  ImageRepository imageRepository;
  @Autowired
  EntityManager em;

  @Test
  void 유저로댓글찾기확인() throws Exception {
    // given
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.M.d.HH:mm");
    String photoDateString = LocalDateTime.now().format(formatter);
    LocalDateTime photoDate = LocalDateTime.parse(photoDateString, formatter);

    User user = new User("a123412341234", "jdb4497@nate.com", 1, "20 - 30", true, false);
    userRepository.save(user);
    em.flush();
    em.clear();
    Region region = new Region("서울", 100);
    regionRepository.save(region);
    Feed feed = new Feed(user, region, "오늘 덥네요 ;", photoDate, "핵더움", false, false);
    feedRepository.save(feed);
    Comment comment1 = new Comment(user, feed, null, "ㅇㅈ", false, false);
    commentRepository.save(comment1);
    Comment comment2 = new Comment(user, feed, null, "ㅇㅈ", false, false);
    commentRepository.save(comment2);

    // when
    List<CommentRes> commentRes = commentService.showCommentsById(user.getUserId());

    // then
    Assertions.assertThat(commentRes.size()).isEqualTo(2);

  }

//  @Test
//  void 댓글생성확인() throws Exception {
//    // given
//    LocalDateTime createdAt = LocalDateTime.now();
//
//    User user = new User();
//    user.setNo("1234");
//    userRepository.save(user);
//
//    /**
//     * feed.setNo(1); -> 자동생성이라 안돼
//     */
//
//    Feed feed = new Feed();
//    feed.setContent("너무 더워요;");
//    feedRepository.save(feed);
//
//    CreateReq req = new CreateReq(1, "1234", -1, "장다빈", false, false);
//
//    // when
//    CommentRes res = commentService.postComment(feed.getNo(), req);
//
//    // then
//    assertThat(res.getContent()).isEqualTo("장다빈");
//
//    }
//
//    @Test
//    void 댓글수정확인() throws Exception {
//      // given
//      Comment comment = new Comment();
//      comment.setContent("이상한 소리 아니야");
//      commentRepository.save(comment);
//
//      LocalDateTime updateAt = LocalDateTime.now();
//      UpdateReq req = new UpdateReq("장다빈 만나는 여자 다 첫사랑", false, updateAt);
//
//      // when
//      UpdateRes res = commentService.editComment(comment.getNo(), req);
//
//      // then
//      assertThat(comment.getContent()).isEqualTo(res.getContent());
//
//    }
//
//    @Test
//    void 댓글삭제확인() throws Exception {
//      // given
//      Comment comment = new Comment();
//      comment.setContent("장다빈 나쁜놈");
//      Comment save = commentRepository.save(comment);
//
//      // when
//      commentService.cancelComment(comment.getNo());
//      Optional<Comment> find = commentRepository.findByNo(save.getNo());
//      Comment c = find.get();
//      // then
//      assertThat(c.getDeleteMode()).isTrue();
//
//      }
//
//      @Test
//      void 댓글조회확인() throws Exception {
//        // given
//        Feed feed = new Feed();
//        feed.setContent("장다빈 뱃살 봤다");
//        feedRepository.save(feed);
//
//        Comment comment1 = new Comment();
//        comment1.setContent("장다빈 나쁜놈");
//        comment1.setFeed(feed);
//        commentRepository.save(comment1);
//
//        Comment comment2 = new Comment();
//        comment2.setContent("장다빈 ㄹㅇ 나쁜놈");
//        comment2.setFeed(feed);
//        commentRepository.save(comment2);
//
//        // when
//        List<CommentRes> res = commentService.searchComments(feed.getNo());
//        for (CommentRes r : res) {
//          System.out.println(r);
//        }
//
//        // then
//        assertThat(res.size()).isEqualTo(2);
//
//        }

}
