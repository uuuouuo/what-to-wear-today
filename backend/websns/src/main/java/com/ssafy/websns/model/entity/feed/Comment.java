package com.ssafy.websns.model.entity.feed;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.entity.BaseEntity;
import com.ssafy.websns.model.entity.user.User;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Comment extends BaseEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
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

  // test
  public Comment(User user, Feed feed, Comment parent, String content, Boolean privateMode,
      Boolean deleteMode) {
    this.user = user;
    this.feed = feed;
    this.parent = parent;
    this.content = content;
    this.privateMode = privateMode;
    this.deleteMode = deleteMode;
  }

  public void createComment(User user, Feed feed, Comment parent, String content,
      Boolean privateMode, Boolean deleteMode) {
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
