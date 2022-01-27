package com.ssafy.websns.model.domain.feed;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.domain.user.User;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
public class Comment {

  @Id @GeneratedValue
  @Column(name = "COMMENT_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User userNo;

  private String content;

  @Column(name = "CREATE_AT")
  private LocalDateTime createAt;

  @Column(name = "UPDATE_AT")
  private LocalDateTime updateAt;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO")
  private Feed feed;

  @Column(name = "PRIVATE_MODE")
  private Boolean privateMode;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "PARENT_NO")
  private Comment parentNo;

  @Column(name = "DELETE_MODE")
  private Boolean deleteMode;

}
