package com.ssafy.websns.controller;

import com.ssafy.websns.config.jwt.JwtTokenProvider;
import com.ssafy.websns.config.oauth.KakaoAuthService;
import com.ssafy.websns.model.dto.Auth.AuthDto;
import com.ssafy.websns.model.dto.Auth.AuthDto.AuthReq;
import com.ssafy.websns.model.dto.Auth.AuthDto.AuthRes;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.user.UserRepository;
import java.util.Optional;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {

  private final KakaoAuthService kakaoAuthService;
  private final JwtTokenProvider jwtTokenProvider;
  private final UserRepository userRepository;
  /**
   * KAKAO 소셜 로그인 기능
   * @return ResponseEntity<AuthResponse>
   */
  @PostMapping(value = "/user/login/kakao")
  public ResponseEntity<String> kakaoAuthRequest(@RequestBody AuthReq authRequest, HttpServletResponse res) {

    String jwtToken = kakaoAuthService.login(authRequest);

    res.addHeader("Authorization", jwtToken);

    return ResponseEntity.ok().body("jwt 토큰은 Authorization 헤더에 있습니다.");

  }


  /**
   * appToken 갱신
   * @return ResponseEntity<AuthResponse>
   */
//  @ApiOperation(value = "appToken 갱신", notes = "appToken 갱신")
//  @GetMapping("/refresh")
//  public ResponseEntity<AuthDto> refreshToken (HttpServletRequest request) {
//    String appToken = JwtHeaderUtil.getAccessToken(request);
//    AuthToken authToken = authTokenProvider.convertAuthToken(appToken);
//    if (!authToken.validate()) { // 형식에 맞지 않는 token
//      return ApiResponse.forbidden(null); // body에 담은 것 없이, 403 HTTP code return
//    }
//
//    AuthDto authResponse = authService.updateToken(authToken);
//    if (authResponse == null) { // token 만료
//      return ApiResponse.forbidden(null); // body에 담은 것 없이, 403 HTTP code return
//    }
//    return ApiResponse.success(authResponse);
//  }
}
