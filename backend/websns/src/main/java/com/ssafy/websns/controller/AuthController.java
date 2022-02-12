package com.ssafy.websns.controller;

import com.ssafy.websns.config.jwt.JwtProperties;
import com.ssafy.websns.config.oauth.KakaoAuthService;
import com.ssafy.websns.model.dto.user.UserDto.UserRes;
import com.ssafy.websns.model.dto.user.auth.AuthDto.AuthReq;
import com.ssafy.websns.model.dto.user.auth.AuthDto.LoginAuthReq;
import com.ssafy.websns.service.user.UserService;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
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
  private final UserService userService;

  @PostMapping(value = "/login/kakao")
  public ResponseEntity<String> kakaoAuthRequest(@RequestBody LoginAuthReq authRequest, HttpServletResponse response) {

    String jwtToken = kakaoAuthService.login(authRequest);
    response.addHeader(JwtProperties.HEADER_STRING,JwtProperties.TOKEN_PREFIX +jwtToken);

    System.out.println("jwt 토큰 " + jwtToken);
    return ResponseEntity.ok().body("JWT 생성 완료.");

  }

  @PostMapping(value = "/logout")
  public ResponseEntity<String> logout(@RequestBody AuthReq authRequest, HttpServletResponse response) {

    String jwtToken = kakaoAuthService.logout(authRequest.getUserId());
    response.addHeader(JwtProperties.HEADER_STRING,JwtProperties.TOKEN_PREFIX +jwtToken);

    System.out.println("jwt 토큰 " + jwtToken);

    return ResponseEntity.ok().body("로그아웃 완료");

  }

  @PostMapping("/refresh")
  public ResponseEntity<String> getRefreshToken (@RequestBody AuthReq userId, HttpServletResponse response) {

    String newJwtToken = kakaoAuthService.updateToken(userId.getUserId());
    response.addHeader(JwtProperties.HEADER_STRING,JwtProperties.TOKEN_PREFIX +newJwtToken);
    return ResponseEntity.ok().body("JWT 재생성 완료.");

  }

  @GetMapping("/{userId}")
  public ResponseEntity<UserRes> findUser (@PathVariable("userId") String userId) {

    UserRes userRes = userService.searchUser(userId);

    return new ResponseEntity<>(userRes, HttpStatus.OK);

  }

}
