package com.ssafy.websns.controller;

import com.ssafy.websns.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/auth")
@RestController
public class AuthController {

//  private final AuthenticationManager authenticationManager;
//  private UserRepository userRepository;
//  private BCryptPasswordEncoder passwordEncoder;

//  @PostMapping("/login")
//  public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
//
//    Authentication authentication = authenticationManager.authenticate(
//        new UsernamePasswordAuthenticationToken(
//            loginRequest.getEmail(),
//            loginRequest.getPassword()
//        )
//    );
//
//    SecurityContextHolder.getContext().setAuthentication(authentication);
//
//    String token = tokenProvider.createToken(authentication);
//    return ResponseEntity.ok(new AuthResponse(token));
//  }

}
