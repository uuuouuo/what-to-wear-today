package com.ssafy.websns.model.dto.user;

import com.ssafy.websns.model.entity.user.User;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class UserDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class UserReq {

    private String no;
    private String userId;
    private String password;
    private String platform;
    private String ageRange;
    private Boolean gender;
    private Boolean deleteMode;

    public UserReq(String no, String userId, String password, String platform,
        String ageRange, Boolean gender, Boolean deleteMode) {
      this.no = no;
      this.userId = userId;
      this.password = password;
      this.platform = platform;
      this.ageRange = ageRange;
      this.gender = gender;
      this.deleteMode = deleteMode;
    }

  }

  @Getter
  public static class UserRes {

    private String userId;
    private String ageRange;
    private Boolean gender;

    public UserRes(User user) {
      this.userId = user.getUserId();
      this.ageRange = user.getAgeRange();
      this.gender = user.getGender();
    }
  }

  @Data
  public static class LoginRes {

    private String jwtToken;
    private Boolean isMember;
  }


}
