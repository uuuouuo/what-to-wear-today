package com.ssafy.websns.model.domain.feed;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.domain.user.User;
import io.swagger.annotations.ApiModel;
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
@ApiModel(value = "FAQ", description = "FAQ를 나타냅니다.")
public class Comment {

  @Id
  @GeneratedValue
  @Column(name = "COMMENT_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User user;

  private String content;

  private LocalDateTime createAt;

  private LocalDateTime updateAt;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO")
  private Feed feed;

  private Boolean privateMode;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "PARENT_NO")
  private Comment parent;

  private Boolean deleteMode;

}
