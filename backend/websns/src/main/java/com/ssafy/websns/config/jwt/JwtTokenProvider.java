package com.ssafy.websns.config.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.ssafy.websns.config.auth.PrincipalDetails;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.user.UserRepository;
import java.util.Date;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class JwtTokenProvider {

  private final UserRepository userRepository;

  public String create(User user) {

    String jwtToken = JWT.create()
        .withSubject("jwt토큰")
        .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
        .withClaim("userId", user.getUserId())
        .sign(Algorithm.HMAC512(JwtProperties.SECRET));
    return jwtToken;

  }

  public String getUserId(String jwtToken) {

    String userId = JWT.require(Algorithm.HMAC512(JwtProperties.SECRET)).build().verify(jwtToken).getClaim("userId").asString();

    return userId;
  }

  public boolean validate(String jwtToken) {
    Date expiresAt = JWT.require(Algorithm.HMAC512(JwtProperties.SECRET)).build().verify(jwtToken)
        .getExpiresAt();
    Date cur = new Date();

    if(expiresAt.compareTo(cur)<0) {
      return false;
    }
    String userId = getUserId(jwtToken);
    Optional<User> userOptional = userRepository.findByUserId(userId);

    if(userOptional.isEmpty()) {
      return false;
    }
    return true;
  }

  public Authentication getAuthentication(String jwtToken) {

    if(validate(jwtToken)) {

      String userId = getUserId(jwtToken);
      Optional<User> userOptional = userRepository.findByUserId(userId);

      User user = null;

      if(userOptional.isPresent()) {
        user = userOptional.get();
      }

      PrincipalDetails principalDetails = new PrincipalDetails(user);
      // 사실상 principal에 저장되는 값은 socialId값과 role뿐(소셜 로그인만 사용하여 password 저장하지 않아 ""로 넣음)
      return new UsernamePasswordAuthenticationToken(principalDetails, jwtToken);
    }
    return null;
  }

}
