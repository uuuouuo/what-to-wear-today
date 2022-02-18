package com.ssafy.websns.config.auth.jwt;

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

    final String authorizationHeader = request.getHeader("JWT");


    if(authorizationHeader == null) {
      request.setAttribute("exception", ErrorCode.NON_LOGIN.getCode());
      filterChain.doFilter(request,response);
    }

    if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
      String jwtToken = authorizationHeader.replace("Bearer ", "");

      try{
        if (tokenProvider.validate(jwtToken)) {
          Authentication authentication = tokenProvider.getAuthentication(jwtToken);
          SecurityContextHolder.getContext().setAuthentication(authentication);
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

    }

  }

}