package com.ssafy.websns.model;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "유저 정보", description = "회원의 상세 정보를 나타낸다.")
public class User {

  @ApiParam(value = "유저no",example = "1")
  private int no;
  @ApiParam(value = "유저id",example = "1234567")
  private String id;
  @ApiParam(value = "닉네임",example = "육슈츙")
  private String nickName;
  @ApiParam(value = "프로필이미지",example = "C:\\SSAFY\\공통프로젝트\\profile\\img1.jpg")
  private String profileImg;
  @ApiParam(value = "로그인 플랫폼",example = "1")
  private int platform;
  @ApiParam(value = "연령층",example = "20-25")
  private String ageRange;
  @ApiParam(value = "성별",example = "true")
  private boolean gender;
  @ApiParam(value = "팔로워수",example = "1234")
  private int followerCnt;
  @ApiParam(value = "팔로잉수",example = "1234")
  private int followingCnt;


}
