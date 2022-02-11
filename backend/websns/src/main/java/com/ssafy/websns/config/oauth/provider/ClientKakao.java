package com.ssafy.websns.config.oauth.provider;

import com.ssafy.websns.model.entity.user.User;
import lombok.Data;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Component
public class ClientKakao implements ClientProxy{

  private WebClient webClient = new WebClient();
  // TODO ADMIN 유저 생성 시 getAdminUserData 메소드 생성 필요
  public User getUserData(String accessToken) {

    UserResponse userResponse = webClient.get()
        .uri("https://kapi.kakao.com/v2/user/me") // KAKAO의 유저 정보 받아오는 url
        .headers(h -> h.setBearerAuth(accessToken)) // JWT 토큰을 Bearer 토큰으로 지정
        .retrieve()
        .bodyToMono(UserResponse.class) // KAKAO의 유저 정보를 넣을 Dto 클래스
        .block();

    User user = new User();
    user.createKakaoUser(userResponse);

    return user;
  }

  @Data
  public static class UserResponse {
    String id;
    String gender;
    String ageRange;

  }
}
