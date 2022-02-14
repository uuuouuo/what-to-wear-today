package com.ssafy.websns.config.jwt;

import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.ssafy.websns.exception.ErrorCode;
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

    if(authorizationHeader == null) {
      request.setAttribute("exception", ErrorCode.NON_LOGIN.getCode());
      filterChain.doFilter(request,response);
    }

    if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) { // JWT 토큰이 존재하는지 확인
//      String tokenStr = JwtHeaderUtil.getAccessToken(request); // Bearer로 시작하는 값에서 Bearer를 제거한 accessToken(appToken) 반환
      String jwtToken = authorizationHeader.replace("Bearer ", "");
//      AuthToken token = tokenProvider.convertAuthToken(tokenStr); // String to AuthToken

//      if(!tokenProvider.validateExpired(jwtToken)) {
//        request.setAttribute("exception", ErrorCode.EXPIRED_TOKEN.getCode());
//        filterChain.doFilter(request, response);
//      }
//      else if(!tokenProvider.validateForm(jwtToken)) {
//        request.setAttribute("exception", ErrorCode.INVALID_TOKEN.getCode());
//        filterChain.doFilter(request, response);
//      }
//      else
      try{
        if (tokenProvider.validate(jwtToken)) { // token이 유효한지 확인
          Authentication authentication = tokenProvider.getAuthentication(jwtToken);
          SecurityContextHolder.getContext().setAuthentication(authentication); // token에 존재하는 authentication 정보 삽입
          System.out.println("로그아웃 여기 들어옴");
          filterChain.doFilter(request, response);
        }
      } catch(TokenExpiredException e) {
        e.printStackTrace();
        request.setAttribute("exception", ErrorCode.EXPIRED_TOKEN.getCode());
        filterChain.doFilter(request, response);
      } catch(SignatureVerificationException e) {
        e.printStackTrace();
        request.setAttribute("exception", ErrorCode.INVALID_TOKEN.getCode());
        filterChain.doFilter(request, response);
      }
 //      else if (tokenProvider.validateForm(jwtToken) && !tokenProvider.validateExpired(jwtToken)) {
//        String newJwtToken = tokenProvider.update(jwtToken);
//        Authentication authentication = tokenProvider.getAuthentication(newJwtToken);
//        SecurityContextHolder.getContext().setAuthentication(authentication); // token에 존재하는 authentication 정보 삽입
//        System.out.println("토큰 다시 만듬");
//      }
    }

    System.out.println("로그아웃 여기 들어옴3");
  }

}