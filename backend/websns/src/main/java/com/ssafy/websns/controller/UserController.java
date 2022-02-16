package com.ssafy.websns.controller;

import com.ssafy.websns.config.auth.jwt.JwtProperties;
import com.ssafy.websns.model.dto.interest.InterestDto.InterestReq;
import com.ssafy.websns.model.dto.interest.InterestDto.InterestRes;
import com.ssafy.websns.model.dto.region.RegionDto.UpdateRegionReq;
import com.ssafy.websns.model.dto.region.RegionDto.UpdateRegionRes;
import com.ssafy.websns.model.dto.type.TypeInfoDto.UpdateTypeInfoReq;
import com.ssafy.websns.model.dto.type.TypeInfoDto.UpdateTypeRes;
import com.ssafy.websns.model.dto.user.UserDto.LoginRes;
import com.ssafy.websns.model.dto.user.UserProfileDto.CreateReq;
import com.ssafy.websns.model.dto.user.UserProfileDto.SignUpReq;
import com.ssafy.websns.model.dto.user.UserProfileDto.UserProfileReq;
import com.ssafy.websns.model.dto.user.UserProfileDto.UserProfileRes;
import com.ssafy.websns.model.dto.user.auth.AuthDto.AuthReq;
import com.ssafy.websns.model.dto.user.auth.AuthDto.LoginAuthReq;
import com.ssafy.websns.service.user.UserService;
import com.ssafy.websns.service.user.auth.KakaoAuthService;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

  private final KakaoAuthService kakaoAuthService;
  private final UserService userService;

  @PostMapping(value = "/login/kakao")
  public ResponseEntity<Map<String,Boolean>> kakaoAuthRequest(@RequestBody LoginAuthReq authRequest, HttpServletResponse response) {

    LoginRes loginRes = kakaoAuthService.login(authRequest);

    response.addHeader(JwtProperties.HEADER_STRING,JwtProperties.TOKEN_PREFIX +loginRes.getJwtToken());
    Map<String,Boolean> map = new HashMap<>();
    map.put("isMember",loginRes.getIsMember());

    return ResponseEntity.ok().body(map);

  }

  @PostMapping(value = "/kakao",consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
  @ResponseStatus(value = HttpStatus.OK)
  public void signup(@RequestPart(value="request") SignUpReq signUpReq,
      @RequestPart(value="imageName") MultipartFile image, HttpServletRequest request) {

    String jwtToken = request.getHeader("JWT");
    CreateReq createReq = new CreateReq(signUpReq, image,jwtToken);
    userService.signUp(createReq);

  }

  @PostMapping(value = "/logout")
  public ResponseEntity<String> logout(@RequestBody AuthReq authRequest, HttpServletResponse response) {

    String jwtToken = kakaoAuthService.logout(authRequest.getUserId());
    response.addHeader(JwtProperties.HEADER_STRING,JwtProperties.TOKEN_PREFIX +jwtToken);

    System.out.println("jwt 토큰 " + jwtToken);

    return ResponseEntity.ok().body("로그아웃 완료");

  }

  @PostMapping(value = "/refresh")
  public ResponseEntity<String> refresh(@RequestBody AuthReq authRequest, HttpServletResponse response) {

    String jwtToken = kakaoAuthService.updateToken(authRequest.getUserId());
    response.addHeader(JwtProperties.HEADER_STRING,JwtProperties.TOKEN_PREFIX +jwtToken);

    return ResponseEntity.ok().body("JWT 재생성 완료");

  }

  @GetMapping(value = "/{userId}")
  public ResponseEntity<UserProfileRes> findUser (@PathVariable("userId") String userId) {

    UserProfileRes userProfileRes = userService.searchUserProfile(userId);
    return new ResponseEntity<>(userProfileRes, HttpStatus.OK);

  }

  @PutMapping(value = "/{userId}", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
  public ResponseEntity<UserProfileRes> updateUser (
      @PathVariable("userId") String userId,
      @RequestPart(value="request") UserProfileReq request,
      @RequestPart(value="imageName") MultipartFile image) {

    UserProfileRes userProfileRes = userService.editUserProfile(userId, request, image);
    return new ResponseEntity<>(userProfileRes, HttpStatus.OK);

  }

  @PutMapping(value = "/type/{userId}")
  public ResponseEntity<UpdateTypeRes> updateType(@PathVariable("userId") String userId,
      @RequestBody UpdateTypeInfoReq updateTypeInfoReq) {

    UpdateTypeRes updateTypeRes = userService.editType(userId, updateTypeInfoReq);
    return new ResponseEntity<>(updateTypeRes, HttpStatus.OK);

  }

  @PutMapping(value = "/region/{userId}")
  public ResponseEntity<UpdateRegionRes> updateRegion(@PathVariable("userId") String userId,
      @RequestBody UpdateRegionReq updateRegionReq) {

    UpdateRegionRes response = userService.setupRegion(userId, updateRegionReq);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @PutMapping(value = "/interest/{userId}")
  public ResponseEntity<InterestRes> updateInterest(@PathVariable("userId") String userId,
      @RequestBody InterestReq request) {

    InterestRes updateTypeRes = userService.setupInterest(userId, request);
    return new ResponseEntity<>(updateTypeRes, HttpStatus.OK);

  }

}

