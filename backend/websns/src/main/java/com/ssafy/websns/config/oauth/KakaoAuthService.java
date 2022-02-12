package com.ssafy.websns.config.oauth;

import com.ssafy.websns.config.jwt.JwtTokenProvider;
import com.ssafy.websns.config.oauth.provider.ClientKakao;
import com.ssafy.websns.model.dto.user.auth.AuthDto.AuthReq;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.user.UserRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class KakaoAuthService { // public class GoogleAuthService

  private final ClientKakao clientKakao; // private final ClientGoogle clientGoogle;
  private final JwtTokenProvider jwtTokenProvider;
  private final UserRepository userRepository;

  @Transactional
  public String login(AuthReq authRequest) {

    User user = clientKakao.getUserData(authRequest.getAccessToken()); // userData 담기

    String socialId = user.getUserId();

    System.out.println(socialId);

    Optional<User> findUser = userRepository.findByUserId(socialId);


    //JWT 토큰 생성
//    String jwtToken = JWT.create()
//        .withSubject("cos토큰")
//        .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
//        .withClaim("id", principalDetails.getUser().getUserId())
//        .withClaim("password", principalDetails.getUser().getPassword())
//        .sign(Algorithm.HMAC512(JwtProperties.SECRET));

    String jwtToken = jwtTokenProvider.create(user);
    System.out.println(jwtToken);
//    AuthToken appToken = authTokenProvider.createUserAppToken(socialId); // 신규 토큰 생성

    if (findUser.isEmpty()) {
      userRepository.save(user);
    }
    return jwtToken;
  }

  public String updateToken(String userId) {
    Optional<User> userOptional = userRepository.findByUserId(userId);

    String newJwtToken = null;
    System.out.println("2 : " + userOptional.isPresent());
    if(userOptional.isPresent()) {
      User user = userOptional.get();
      newJwtToken = jwtTokenProvider.create(user);
    }

    return newJwtToken;

  }

//  public String updateToken(String jwtToken) {
//
//    String userId = jwtTokenProvider.getUserId(jwtToken);
//    Optional<User> userOptional = userRepository.findByUserId(userId);
//
//    String newJwtToken = "";
//    if(userOptional.isPresent()) {
//      newJwtToken = jwtTokenProvider.create(userOptional.get());
//    }
//
//    return newJwtToken;
//
//  }
}
