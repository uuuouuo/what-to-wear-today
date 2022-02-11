package com.ssafy.websns.controller;

import com.ssafy.websns.model.entity.user.User;
import io.swagger.annotations.ApiParam;
import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
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

  @GetMapping("/loginform")
  public String loginForm(){
    return "login-form";
  }

  @GetMapping
  public String index(){
    return "home";
  }

}
