package com.ssafy.websns.config.auth.provider;

import com.ssafy.websns.model.entity.user.User;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
public class ClientKakao implements ClientProxy {


  @Data
  @NoArgsConstructor
  @AllArgsConstructor
  public class Req {
    String grant_type;
    String client_id;
    String redirect_id;
    String code;
  }

  @Data
  @NoArgsConstructor
  @AllArgsConstructor
  public class Res {
    String accessToken;
  }
  // TODO ADMIN 유저 생성 시 getAdminUserData 메소드 생성 필요
  public User getUserData(String code) {

//    System.out.println("access : " + accessToken);

    Req req = new Req("authorization_code","4ca88cff70d82a3237621b0b3da584a7","http://localhost:8080/login/oauth2/code/kakao",code);


    Res res = WebClient.builder().baseUrl("kauth.kakao.com").build().post()
        .uri("https://kauth.kakao.com/oauth/token")
        .body(Mono.just(req),Req.class)
        .retrieve()
        //     아래의 onStatus는 error handling
        .bodyToMono(Res.class) // KAKAO의 유저 정보를 넣을 Dto 클래스
        .block();

    System.out.println("Asdfadsf : " +res.accessToken);
    String accessToken = res.getAccessToken();

    UserResponse userResponse = WebClient.builder().build().get()
        .uri("https://kapi.kakao.com/v2/user/me") // KAKAO의 유저 정보 받아오는 url
        .headers(h -> h.setBearerAuth(accessToken)) // JWT 토큰을 Bearer 토큰으로 지정
        .retrieve()
        //     아래의 onStatus는 error handling
        .bodyToMono(UserResponse.class) // KAKAO의 유저 정보를 넣을 Dto 클래스
        .block();

    User user = new User();
    user.createKakaoUser(userResponse);

//    Map<String, Object> kakao_account = userResponse.getKakao_account();
//
//    Map<String,String> profile = (HashMap<String,String>)userResponse.getKakao_account().get("profile");

//    UserData userData = new UserData(user, profile.get("nickname"));

    return user;

  }

//  public void logout(String accessToken) {
//    System.out.println("access 들어옴: " + accessToken);
//    WebClient.builder().baseUrl("kapi.kakao.com").build().post()
//        .uri("https://kapi.kakao.com/v1/user/logout")
//        .headers(h -> h.setBearerAuth(accessToken)) // JWT 토큰을 Bearer 토큰으로 지정
//        .retrieve()
//        //     아래의 onStatus는 error handling
//        .bodyToMono(UserResponse.class) // KAKAO의 유저 정보를 넣을 Dto 클래스
//        .block();
//  }

  @Data
  public static class UserResponse {

    String id;
    Map<String, Object> kakao_account;

  }
}
