package com.ssafy.websns.model.domain.user;

import static javax.persistence.FetchType.LAZY;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiParam;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import lombok.Getter;

@Entity
@Getter
@ApiModel(value = "회원 프로필", description = "회원 프로필 정보를 나타냅니다.")
public class UserProfile {

  @Id
  @OneToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  @ApiParam(value = "회원 번호")
  private User user;

  @ApiParam(value = "닉네임")
  private String nickName;

  @ApiParam(value = "프로필이미지")
  private String profileImg;

}
