package com.ssafy.websns.config.auth.jwt;

import com.ssafy.websns.config.auth.security.PrincipalDetails;
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

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
      FilterChain chain) throws IOException, ServletException {

    String jwtHeader = request.getHeader("JWT");

    if(jwtHeader == null || !jwtHeader.startsWith("Bearer")) {
      chain.doFilter(request,response);
      return;
    }
    String jwtToken = request.getHeader("JWT").replace("Bearer ","");
    String userId = jwtTokenProvider.getUserId(jwtToken);

    if(userId != null) {
      Optional<User> userEntity = userRepository.findByUserId(userId);

      PrincipalDetails principalDetails = new PrincipalDetails(userEntity.get());

      Authentication authentication = new UsernamePasswordAuthenticationToken(principalDetails,null, principalDetails.getAuthorities());

      SecurityContextHolder.getContext().setAuthentication(authentication);

      chain.doFilter(request,response);

    }

  }
}
