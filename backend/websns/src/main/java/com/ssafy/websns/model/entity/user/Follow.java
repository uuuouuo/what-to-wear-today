package com.ssafy.websns.model.entity.user;

import static javax.persistence.FetchType.LAZY;

import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
@ApiModel(value = "팔로우한 회원 ", description = "팔로우한 회원을 나타냅니다.")
public class Follow {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "FOLLOW_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User userFollowerNo;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User userFollowingNo;

  public void createFollow(Integer no, User userFollowerNo, User userFollowingNo) {
    this.no = no;
    this.userFollowerNo = userFollowerNo;
    this.userFollowingNo = userFollowingNo;
  }
}
