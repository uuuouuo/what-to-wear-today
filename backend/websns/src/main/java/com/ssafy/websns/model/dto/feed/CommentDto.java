package com.ssafy.websns.model.dto.feed;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.entity.feed.Comment;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.user.User;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class CommentDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class CreationReq {

    private Integer no;
    private String userNo;
    private Integer feedNo;
    private Integer parent;
    private String content;
    private Boolean privateMode;
    private Boolean deleteMode;
    private LocalDateTime createAt;

    public CreationReq(Integer no, String userNo, Integer feedNo, Integer parent, String content,
        Boolean privateMode, Boolean deleteMode, LocalDateTime createAt) {
      this.no = no;
      this.userNo = userNo;
      this.feedNo = feedNo;
      this.parent = parent;
      this.content = content;
      this.privateMode = privateMode;
      this.deleteMode = deleteMode;
      this.createAt = createAt;
    }

  }

  @Getter
  public static class Res {

    private User user;
    private String content;
    private Integer feedNo;
    private Comment parent;
    private LocalDateTime createAt;

    public Res(User user, Integer feedNo, Comment parent, String content,
        LocalDateTime createAt) {
      this.user = user;
      this.feedNo = feedNo;
      this.parent = parent;
      this.content = content;
      this.createAt = createAt;
    }

  }

}
