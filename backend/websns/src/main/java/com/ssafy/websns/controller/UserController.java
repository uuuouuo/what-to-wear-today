package com.ssafy.websns.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  private static final String SUCCESS = "success";
  private static final String FAIL = "fail";

//  @PostMapping("/login")
//  public ResponseEntity<Map<String, Object>> login(
//      @RequestBody @ApiParam(value = "로그인 시 필요한 회원정보(아이디, 비밀번호).", required = true) User user) {
//    Map<String, Object> resultMap = new HashMap<>();
//
////    resultMap.put("access-token", token);
////    resultMap.put("message", SUCCESS);
////    String jwtToken;
//    return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
//  }

  @GetMapping("/test/oauth/login")
  public @ResponseBody
  String testOAuthLogin(Authentication authentication
      ,@AuthenticationPrincipal OAuth2User oauth){ //DI 의존성 주입
    System.out.println("test/oauth/login====================");
    OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
    System.out.println("authentication : " + oAuth2User.getAttributes());

    System.out.println("userDetails : "+oauth.getAttributes());
    return "세션 정보 확인하기";
  }

  @GetMapping("/check")
  public String testOAuthLo13123gin(){
    return "로그인 완료";
  }
  

}
