package com.ssafy.websns.model.domain.user;

import static javax.persistence.FetchType.LAZY;

import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
@ApiModel(value = "팔로우한 회원 ", description = "팔로우한 회원을 나타냅니다.")
public class Follow {

  @Id
  @GeneratedValue
  @Column(name = "FOLLOW_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  private User userFollowerNo;

  @ManyToOne(fetch = LAZY)
  private User userFollowingNo;

}
