package com.ssafy.websns.service;

import static org.assertj.core.api.Assertions.assertThat;

import com.ssafy.websns.model.dto.feed.CommentDto.CreateReq;
import com.ssafy.websns.model.dto.feed.CommentDto.CreateRes;
import com.ssafy.websns.model.dto.feed.CommentDto.UpdateReq;
import com.ssafy.websns.model.dto.feed.CommentDto.UpdateRes;
import com.ssafy.websns.model.entity.feed.Comment;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.feed.CommentRepository;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.region.RegionRepository;
import com.ssafy.websns.repository.user.UserRepository;
import java.time.LocalDateTime;
import java.util.Optional;
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

  @Test
  void 댓글생성확인() throws Exception {
    // given
    LocalDateTime createAt = LocalDateTime.now();

    User user = new User();
    user.setNo("1234");
    userRepository.save(user);

    /**
     * feed.setNo(1); -> 자동생성이라 안돼
     */

    Feed feed = new Feed();
    feed.setContent("너무 더워요;");
    feedRepository.save(feed);

    CreateReq req = new CreateReq(1, "1234", -1, "장다빈", false, false, createAt);

    // when
    CreateRes res = commentService.postComment(feed.getNo(), req);

    // then
    assertThat(res.getContent()).isEqualTo("장다빈");

    }

    @Test
    void 댓글수정확인() throws Exception {
      // given
      Comment comment = new Comment();
      comment.setContent("이상한 소리 아니야");
      commentRepository.save(comment);

      LocalDateTime updateAt = LocalDateTime.now();
      UpdateReq req = new UpdateReq("장다빈 만나는 여자 다 첫사랑", false, updateAt);

      // when
      UpdateRes res = commentService.editComment(comment.getNo(), req);

      // then
      assertThat(comment.getContent()).isEqualTo(res.getContent());

    }

    @Test
    void 댓글삭제확인() throws Exception {
      // given
      Comment comment = new Comment();
      comment.setContent("장다빈 나쁜놈");
      Comment save = commentRepository.save(comment);

      // when
      commentService.cancelComment(comment.getNo());
      Optional<Comment> find = commentRepository.findByNo(save.getNo());
      Comment c = find.get();
      // then
      assertThat(c.getDeleteMode()).isTrue();

      }

}
