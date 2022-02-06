package com.ssafy.websns.model.entity.user;

import static javax.persistence.FetchType.LAZY;

import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import lombok.Getter;

@Entity
@Getter
@IdClass(FollowId.class)
@ApiModel(value = "유저 팔로우/팔로잉 수",description = "유저 팔로우/팔로잉 수를 나타냅니다.")
public class UserFollowCnt {

  @Id
  @OneToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User user;

  @Id
  @Column(name = "FOLLOW_ID")
  private String followId;

  private Integer followingCnt;

  private Integer followerCnt;
}
