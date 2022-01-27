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
@ApiModel(value = "회원 프로필 정보", description = "회원 프로필 정보를 나타낸다.")
public class UserProfile {

  @ApiParam(value = "회원no", example = "P123456789012")
  @Id
  @OneToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User user;

  @ApiParam(value = "닉네임",example = "육슈충")
  private String nickName;

  @ApiParam(value = "프로필이미지",example = "C:\\SSAFY\\공통프로젝트\\profile\\img1.jpg")
  @Column(name = "PROFILE_IMG")
  private String profileImg;

}
