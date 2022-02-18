package com.ssafy.websns.model.dto.user;

import com.ssafy.websns.model.entity.user.UserProfile;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

public class UserProfileDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class CreateReq {
    private String nickname;
    private MultipartFile image;
    private String jwtToken;
    private List<Integer> interestNos;
    private List<Integer> typeNos;

    public CreateReq(SignUpReq signUpReq, MultipartFile image,String jwtToken) {
      this.nickname = signUpReq.getNickname();
      this.image = image;
      this.jwtToken = jwtToken;
      this.interestNos = signUpReq.getInterestNos();
      this.typeNos = signUpReq.getTypeNos();
    }

  }

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class SignUpReq {

    String nickname;
    List<Integer> interestNos;
    List<Integer> typeNos;

    public SignUpReq(String nickname, List<Integer> interestNos,
        List<Integer> typeNos) {
      this.nickname = nickname;
      this.interestNos = interestNos;
      this.typeNos = typeNos;
    }
  }

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class UserProfileReq {

    String nickname;

    public UserProfileReq(String nickname) {
      this.nickname = nickname;
    }
  }

  @Getter
  public static class UserProfileRes {

    String userId;
    String nickname;
    String profileImg;

    public UserProfileRes(UserProfile userProfile) {
      this.userId = userProfile.getUser().getUserId();
      this.nickname = userProfile.getNickname();
      this.profileImg = userProfile.getProfileImg();
    }

  }


}
