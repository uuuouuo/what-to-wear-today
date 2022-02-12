package com.ssafy.websns.config.jwt;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

  private final JwtTokenProvider tokenProvider;

  @Override
  protected void doFilterInternal(
      HttpServletRequest request,
      HttpServletResponse response,
      FilterChain filterChain)  throws ServletException, IOException {

    final String authorizationHeader = request.getHeader("JWT"); // Authorization 헤더 꺼냄
    System.out.println("header token : " + authorizationHeader);
    if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) { // JWT 토큰이 존재하는지 확인
//      String tokenStr = JwtHeaderUtil.getAccessToken(request); // Bearer로 시작하는 값에서 Bearer를 제거한 accessToken(appToken) 반환
      String jwtToken = authorizationHeader.replace("Bearer ", "");
//      AuthToken token = tokenProvider.convertAuthToken(tokenStr); // String to AuthToken

      if (tokenProvider.validate(jwtToken)) { // token이 유효한지 확인
        Authentication authentication = tokenProvider.getAuthentication(jwtToken);
        SecurityContextHolder.getContext().setAuthentication(authentication); // token에 존재하는 authentication 정보 삽입
      }
      filterChain.doFilter(request, response);
    }
    else if(authorizationHeader == null || authorizationHeader.equals("null")){

      filterChain.doFilter(request,response);

    }
  }
}