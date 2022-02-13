package com.ssafy.websns.config.jwt;

import com.ssafy.websns.config.auth.PrincipalDetails;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.user.UserRepository;
import java.io.IOException;
import java.util.Optional;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

// 인증이나 권한이 필요한 주소요청이 있을 때 해당 필터를 타게 됨.
public class JwtAuthorizationFilter extends BasicAuthenticationFilter {


  private UserRepository userRepository;
  private JwtTokenProvider jwtTokenProvider;

  public JwtAuthorizationFilter(
      AuthenticationManager authenticationManager) {
    super(authenticationManager);
  }

  public JwtAuthorizationFilter(
      AuthenticationManager authenticationManager,
      UserRepository userRepository, JwtTokenProvider jwtTokenProvider) {
    super(authenticationManager);
    this.userRepository = userRepository;
    this.jwtTokenProvider = jwtTokenProvider;
  }

  // 인증이나 권한이 필요한 주소요청이 있을 때 해당 필터를 타게 됨.
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
      FilterChain chain) throws IOException, ServletException {
    System.out.println("인증나 권한이 필요한 주소가 요청됨 ");

    String jwtHeader = request.getHeader("JWT");
    System.out.println("jwtHeader : "+jwtHeader);

    // header가 있는지 확인
    if(jwtHeader == null || !jwtHeader.startsWith("Bearer")) {
      chain.doFilter(request,response);
      return;
    }
    // JWT 토큰을 검증해서 정상적인 사용자인지 확인
    String jwtToken = request.getHeader("JWT").replace("Bearer ","");
    String userId = jwtTokenProvider.getUserId(jwtToken);

    // 서명이 정상적으로 됨
    if(userId != null) {
      Optional<User> userEntity = userRepository.findByUserId(userId);

      PrincipalDetails principalDetails = new PrincipalDetails(userEntity.get());

      // Jwt 토큰 서명을 통해서 서명이 정상이면 Authentication 객체를 만들어준다
      Authentication authentication = new UsernamePasswordAuthenticationToken(principalDetails,null, principalDetails.getAuthorities());

      // 강제로 시큐리티의 세션에 접근하여 Authentication 객체를 저장.
      SecurityContextHolder.getContext().setAuthentication(authentication);

      chain.doFilter(request,response);

    }

  }
}
