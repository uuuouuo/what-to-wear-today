package com.ssafy.websns.model.dto.user.auth;


import com.ssafy.websns.model.entity.user.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class ClientDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class UserData{
    User user;
    String nickname;

    public UserData(User user, String nickname) {
      this.user = user;
      this.nickname =  nickname;
    }
  }

}
