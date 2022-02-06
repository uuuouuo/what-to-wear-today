package com.ssafy.websns.model.entity.feed;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.entity.BaseEntity;
import com.ssafy.websns.model.entity.user.User;
import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
@ApiModel(value = "댓글 정보", description = "댓글 정보를 나타냅니다.")
public class Comment extends BaseEntity {

  @Id
  @GeneratedValue
  @Column(name = "COMMENT_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User user;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO")
  private Feed feed;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "PARENT_NO")
  private Comment parent;

  private String content;

  private Boolean privateMode;

  private Boolean deleteMode;

  public void createComment(Integer no, User user, Feed feed, Comment parent, String content,
      Boolean privateMode, Boolean deleteMode) {
    this.no = no;
    this.user = user;
    this.feed = feed;
    this.parent = parent;
    this.content = content;
    this.privateMode = privateMode;
    this.deleteMode = deleteMode;
  }

  public void updateComment(String content,
      Boolean privateMode) {
    this.content = content;
    this.privateMode = privateMode;
  }

  public void deleteComment() {
    this.deleteMode = true;
  }
}
