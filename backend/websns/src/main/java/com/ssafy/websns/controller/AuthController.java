package com.ssafy.websns.controller;

import com.ssafy.websns.config.jwt.JwtProperties;
import com.ssafy.websns.config.jwt.JwtTokenProvider;
import com.ssafy.websns.config.oauth.KakaoAuthService;
import com.ssafy.websns.model.dto.user.auth.AuthDto.AuthReq;
import com.ssafy.websns.model.dto.user.auth.AuthDto.RefreshAuthReq;
import com.ssafy.websns.repository.user.UserRepository;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class AuthController {

  private final KakaoAuthService kakaoAuthService;
  private final JwtTokenProvider jwtTokenProvider;
  private final UserRepository userRepository;
  /**
   * KAKAO 소셜 로그인 기능
   * @return ResponseEntity<AuthResponse>
   */
  @PostMapping(value = "/login/kakao")
  public ResponseEntity<String> kakaoAuthRequest(@RequestBody AuthReq authRequest, HttpServletResponse response) {
//    System.out.println("req : " + req.getAttributeNames());
//    Enumeration<String> paramKeys = request.getParameterNames();
//    while (paramKeys.hasMoreElements()) {
//      String key = paramKeys.nextElement();
//      System.out.println(key+":"+request.getParameter(key));
//    }
//    authRequest.setAccessToken("vQhoiOYRgHoBYPpZ64j8gISCC1tUS3y7KPNr3worDR4AAAF-645k9Q");
    String jwtToken = kakaoAuthService.login(authRequest);
    response.addHeader(JwtProperties.HEADER_STRING,JwtProperties.TOKEN_PREFIX +jwtToken);

    System.out.println("jwt 토큰 " + jwtToken);
    return ResponseEntity.ok().body("JWT 생성 완료.");

  }

  @PostMapping(value = "/logout")
  public ResponseEntity<String> logout(@RequestBody AuthReq authRequest, HttpServletResponse response) {

    kakaoAuthService.logout(authRequest);
    response.addHeader(JwtProperties.HEADER_STRING,"");

    return ResponseEntity.ok().body("로그아웃 완료");

  }

  @PostMapping("/refresh")
  public ResponseEntity<String> getRefreshToken (@RequestBody RefreshAuthReq userId, HttpServletResponse response) {

    System.out.println("1: "+userId);
    String newJwtToken = kakaoAuthService.updateToken(userId.getUserId());
    response.addHeader(JwtProperties.HEADER_STRING,JwtProperties.TOKEN_PREFIX +newJwtToken);
    return ResponseEntity.ok().body("JWT 재생성 완료.");
    //    String appToken = JwtHeaderUtil.getAccessToken(request);
//
//
//    String jwtToken = request.getHeader("JWT");
//
//    if (!jwtTokenProvider.validateForm(jwtToken)) { // 형식에 맞지 않는 token
//      return new ResponseEntity<>("올바른 JWT 형식이 아닙니다", HttpStatus.FORBIDDEN); // body에 담은 것 없이, 403 HTTP code return
//    }
//
//    Object jwt = request.getAttribute("JWT");
//    System.out.println(jwt.toString());
////    String newJwtToken = kakaoAuthService.updateToken(jwtToken);
////    res.addHeader(JwtProperties.HEADER_STRING,JwtProperties.TOKEN_PREFIX +newJwtToken);
//
  }

  @GetMapping("/{userId}")
  public ResponseEntity<String> findUser (@PathVariable("userId") String userId) {
    return null;
  }
}
