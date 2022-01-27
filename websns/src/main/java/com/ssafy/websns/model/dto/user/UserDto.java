package com.ssafy.websns.model.dto.user;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import lombok.Builder;
import lombok.Getter;

public class UserDto {

  @Getter
  public static class userProfile {

    @Valid
    private String no;
    @NotEmpty
    private String nickname;
    private String profileImg;

    @Builder
    public userProfile(String no, String nickname, String profileImg) {
      this.no = no;
      this.nickname = nickname;
      this.profileImg = profileImg;
    }

  }

}
