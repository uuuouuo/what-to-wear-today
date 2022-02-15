package com.ssafy.websns.service.user.auth;

import com.ssafy.websns.config.auth.jwt.JwtTokenProvider;
import com.ssafy.websns.config.auth.provider.ClientKakao;
import com.ssafy.websns.model.dto.user.UserDto.LoginRes;
import com.ssafy.websns.model.dto.user.auth.AuthDto.LoginAuthReq;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.model.entity.user.UserProfile;
import com.ssafy.websns.repository.user.UserProfileRepository;
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
  private final UserProfileRepository userProfileRepository;
  @Transactional
  public LoginRes login(LoginAuthReq authRequest) {

    User user = clientKakao.getUserData(authRequest.getCode()); // userData 담기

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

    LoginRes loginRes = new LoginRes();
    loginRes.setJwtToken(jwtToken);

    if (findUser.isEmpty()) {
      userRepository.save(user);
      loginRes.setIsMember(false);
    }
    else {

      Optional<UserProfile> userProfileOptional = userProfileRepository.findByUser(findUser.get());
      if(userProfileOptional.isEmpty()) {
        loginRes.setIsMember(false);
      }
      else {
        loginRes.setIsMember(true);
      }
    }
    return loginRes;
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

  public String logout(String userId) {

    Optional<User> userOptional = userRepository.findByUserId(userId);

    String newJwtToken = null;
    System.out.println("2 : " + userOptional.isPresent());
    if(userOptional.isPresent()) {
      User user = userOptional.get();
      newJwtToken = jwtTokenProvider.logout(user);
    }
    return newJwtToken;

//    clientKakao.logout(authRequest.getAccessToken());

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
