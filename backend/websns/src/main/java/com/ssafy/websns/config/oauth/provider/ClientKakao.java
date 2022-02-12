package com.ssafy.websns.config.oauth.provider;

import com.ssafy.websns.model.entity.user.User;
import java.util.Map;
import lombok.Data;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

@Component
public class ClientKakao implements ClientProxy{

  // TODO ADMIN 유저 생성 시 getAdminUserData 메소드 생성 필요
  public User getUserData(String accessToken) {

    System.out.println("access : " + accessToken);
    UserResponse userResponse = WebClient.builder().build().get()
        .uri("https://kapi.kakao.com/v2/user/me") // KAKAO의 유저 정보 받아오는 url
        .headers(h -> h.setBearerAuth(accessToken)) // JWT 토큰을 Bearer 토큰으로 지정
        .retrieve()
        //     아래의 onStatus는 error handling
        .bodyToMono(UserResponse.class) // KAKAO의 유저 정보를 넣을 Dto 클래스
        .block();

    User user = new User();
    user.createKakaoUser(userResponse);

    return user;
  }

  public void logout(String accessToken) {

    System.out.println("access : " + accessToken);
    UserResponse userResponse = WebClient.builder().baseUrl("kapi.kakao.com").build().post()
        .uri("https://kapi.kakao.com/v1/user/logout")
        .headers(h -> h.setBearerAuth(accessToken)) // JWT 토큰을 Bearer 토큰으로 지정
        .retrieve()
        //     아래의 onStatus는 error handling
        .bodyToMono(UserResponse.class) // KAKAO의 유저 정보를 넣을 Dto 클래스
        .block();
  }


  @Data
  public static class UserResponse {
    String id;
    Map<String,Object> kakao_account;

  }
}
