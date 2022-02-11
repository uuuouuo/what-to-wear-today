package com.ssafy.websns.config.oauth;

import com.ssafy.websns.config.jwt.JwtTokenProvider;
import com.ssafy.websns.config.oauth.provider.ClientKakao;
import com.ssafy.websns.model.dto.Auth.AuthDto.AuthRes;
import com.ssafy.websns.model.dto.Auth.AuthDto.AuthReq;
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

    Optional<User> findUser = userRepository.findById(socialId);


    //JWT 토큰 생성
//    String jwtToken = JWT.create()
//        .withSubject("cos토큰")
//        .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
//        .withClaim("id", principalDetails.getUser().getUserId())
//        .withClaim("password", principalDetails.getUser().getPassword())
//        .sign(Algorithm.HMAC512(JwtProperties.SECRET));

    String jwtToken = jwtTokenProvider.create(user);

//    AuthToken appToken = authTokenProvider.createUserAppToken(socialId); // 신규 토큰 생성
    AuthRes authRes = new AuthRes();

    if (findUser.isEmpty()) {
      userRepository.save(user);
    }
    return jwtToken;
  }
}
