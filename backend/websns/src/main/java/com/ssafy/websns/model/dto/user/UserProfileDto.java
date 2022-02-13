package com.ssafy.websns.model.dto.user;

import com.ssafy.websns.model.entity.user.UserProfile;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

public class UserProfileDto {


  @Getter
  @NoArgsConstructor
  public static class UserProfileReq {

    String nickname;

    public UserProfileReq(String nickname) {
      this.nickname = nickname;
    }

  }

  @Getter
  @NoArgsConstructor
  public static class CreateReq {
    private String nickname;
    private MultipartFile image;
    private String jwtToken;

    public CreateReq(String nickname, MultipartFile image, String jwtToken) {
      this.nickname = nickname;
      this.image = image;
      this.jwtToken = jwtToken;
    }

  }

  @Getter
  public static class UserProfileRes {

    String userId;
    String nickName;
    String profileImg;

    public UserProfileRes(UserProfile userProfile) {
      this.userId = userProfile.getUser().getUserId();
      this.nickName = userProfile.getNickname();
      this.profileImg = userProfile.getProfileImg();
    }

  }

}
