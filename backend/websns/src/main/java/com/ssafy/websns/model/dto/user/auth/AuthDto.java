package com.ssafy.websns.model.dto.user.auth;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class AuthDto {

  @Getter
  @Setter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class LoginAuthReq{
    String code;

    public LoginAuthReq(String accessToken) {
      this.code = accessToken;
    }
  }

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class AuthReq {
    String userId;

    public AuthReq(String userId) {
      this.userId = userId;
    }
  }

  @Getter
  @NoArgsConstructor
  public static class AuthRes {
    boolean isMember;

    public AuthRes(boolean isMember) {
      this.isMember = isMember;
    }

  }
}
