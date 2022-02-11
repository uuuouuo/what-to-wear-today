package com.ssafy.websns.model.dto.Auth;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class AuthDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class AuthReq{
    String accessToken;

    public AuthReq(String accessToken) {
      this.accessToken = accessToken;
    }
  }

  @Getter
  @Setter
  @NoArgsConstructor
  public static class AuthRes {
    boolean isMember;

    public AuthRes(boolean isMember) {
      this.isMember = isMember;
    }
  }
}
