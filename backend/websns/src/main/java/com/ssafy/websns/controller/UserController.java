package com.ssafy.websns.controller;

import com.ssafy.websns.model.entity.user.User;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@Api("회원 관리")
public class UserController {

  private static final String SUCCESS = "success";
  private static final String FAIL = "fail";

  @ApiOperation(value = "로그인", notes = "Access-token과 로그인 결과 메세지를 반환한다.", response = Map.class)
  @PostMapping("/login")
  public ResponseEntity<Map<String, Object>> login(
      @RequestBody @ApiParam(value = "로그인 시 필요한 회원정보(아이디, 비밀번호).", required = true) User user) {
    Map<String, Object> resultMap = new HashMap<>();

//    resultMap.put("access-token", token);
//    resultMap.put("message", SUCCESS);
//    String jwtToken;
    return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
  }


}
