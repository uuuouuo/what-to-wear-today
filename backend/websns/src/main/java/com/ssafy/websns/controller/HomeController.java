package com.ssafy.websns.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/home")
public class HomeController {

//  @GetMapping("/")
//  public ResponseEntity<Void> home(){
//    return new ResponseEntity<>(HttpStatus.OK);
//  }

  @GetMapping("/login")
  public String home2(){
    return "로그인 완료";
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
