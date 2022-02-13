package com.ssafy.websns.controller;

import com.ssafy.websns.model.entity.user.User;
import io.swagger.annotations.ApiParam;
import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

  private static final String SUCCESS = "success";
  private static final String FAIL = "fail";

  @PostMapping("/login")
  public ResponseEntity<Map<String, Object>> login(
      @RequestBody @ApiParam(value = "로그인 시 필요한 회원정보(아이디, 비밀번호).", required = true) User user) {
    Map<String, Object> resultMap = new HashMap<>();

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
