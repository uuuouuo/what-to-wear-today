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
@ApiModel(value = "유저 팔로우/팔로잉 수",description = "유저 팔로우/팔로잉 수를 나타냅니다.")
public class UserFollowCnt {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "FOLLOW_CNT_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO", nullable = false)
  private User user;

  @Column(nullable = false)
  private Integer followerCnt;

  @Column(nullable = false)
  private Integer followingCnt;

  public void createFollowCnt(User user) {
    this.user = user; // 나
    this.followingCnt = 0; // 내가
    this.followerCnt = 0; // 나를
  }

  public void plusFollower() {
    this.followerCnt++;
  }

  public void plusFollowing() {
    this.followingCnt++;
  }

  public void minusFollower() {
    this.followerCnt--;
  }

  public void minusFollowing() {
    this.followingCnt--;
  }

}
