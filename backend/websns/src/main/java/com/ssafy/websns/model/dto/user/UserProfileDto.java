package com.ssafy.websns.model.dto.user;

import com.ssafy.websns.model.entity.user.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class UserProfileDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class UserProfileRes {

    User user;
    String nickName;
    String profileImg;

    public UserProfileRes(User user, String nickName, String profileImg) {
      this.user = user;
      this.nickName = nickName;
      this.profileImg = profileImg;
    }

  }

}
