package com.ssafy.websns.model.dto.feed;

import com.ssafy.websns.model.entity.feed.Comment;
import com.ssafy.websns.model.entity.user.User;
import java.time.LocalDateTime;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class CommentDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class CreateReq {

    private Integer no;
    private String userNo;
    private Integer parent;
    private String content;
    private Boolean privateMode;
    private Boolean deleteMode;

    public CreateReq(Integer no, String userNo, Integer parent, String content,
        Boolean privateMode, Boolean deleteMode) {
      this.no = no;
      this.userNo = userNo;
      this.parent = parent;
      this.content = content;
      this.privateMode = privateMode;
      this.deleteMode = deleteMode;
    }

  }

  @Getter
  public static class CommentRes {

    private User user;
    private String content;
    private Integer feedNo;
    private Comment parent;
    private LocalDateTime createAt;

    public CommentRes(User user, Integer feedNo, Comment parent, String content,
        LocalDateTime createAt) {
      this.user = user;
      this.feedNo = feedNo;
      this.parent = parent;
      this.content = content;
      this.createAt = createAt;
    }

    public CommentRes(Comment comment){
      this.user = comment.getUser();
      this.feedNo = comment.getNo();
      this.parent = comment.getParent();
      this.content= comment.getContent();
      this.createAt = comment.getCreatedAt();
    }

  }

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class UpdateReq {

    private String content;
    private Boolean privateMode;
    private LocalDateTime updateAt;

    public UpdateReq(String content,
        Boolean privateMode, LocalDateTime updateAt) {
      this.content = content;
      this.privateMode = privateMode;
      this.updateAt = updateAt;
    }

  }

  @Getter
  public static class UpdateRes {
    
    private String content;
    private Boolean privateMode;
    private LocalDateTime updateAt;

    public UpdateRes(String content,
        Boolean privateMode, LocalDateTime updateAt) {
      this.content = content;
      this.privateMode = privateMode;
      this.updateAt = updateAt;
    }

  }

}
