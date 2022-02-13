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
@ApiModel(value = "회원 프로필", description = "회원 프로필 정보를 나타냅니다.")
public class UserProfile {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "USER_PROFILE_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User user;

  private String nickname;

  private String profileImg;
  
  public void createUserProfile(User user,String nickname,String profileImg) {
    this.user = user;
    this.nickname = nickname;
    this.profileImg = profileImg;
  }

}
