//package com.ssafy.websns.config.jwt;
//
//import com.ssafy.websns.config.auth.PrincipalDetails;
//import com.ssafy.websns.model.entity.user.User;
//import com.ssafy.websns.repository.user.UserRepository;
//import java.io.IOException;
//import java.util.Optional;
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
//
//public class JwtAuthorizationFilter extends BasicAuthenticationFilter {
//
//  private UserRepository userRepository;
//  private JwtTokenProvider jwtTokenProvider;
//
//  public JwtAuthorizationFilter(
//      AuthenticationManager authenticationManager,
//      UserRepository userRepository, JwtTokenProvider jwtTokenProvider) {
//    super(authenticationManager);
//    this.userRepository = userRepository;
//    this.jwtTokenProvider = jwtTokenProvider;
//  }
//
//  @Override
//  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
//    System.out.println("JwtCommonAuthorizationFilter의 dofilter탐");
//    // Read the Authorization header, where the JWT token should be
//    String header = request.getHeader("Authorization");
//
//    // If header does not contain BEARER or is null delegate to Spring impl and exit
//    if (header == null || !header.startsWith("Bearer")) {
//      chain.doFilter(request, response);
//      return;
//    }
//    // If header is present, try grab user principal from database and perform authorization
//    Authentication authentication = getUsernamePasswordAuthentication(request);
//    SecurityContextHolder.getContext().setAuthentication(authentication);
//    // Continue filter execution
//    chain.doFilter(request, response);
//  }
//
//  private Authentication getUsernamePasswordAuthentication(HttpServletRequest request) {
//    System.out.println("JwtCommonAuthorizationFilter의 getUsernamePasswordAuthentication탐");
//    String token = request.getHeader("Authorization")
//        .replace("Bearer","");
//    System.out.println("token : " +token);
//
//    if (token != null) {
//      String userId = jwtTokenProvider.getUserId(token);
//      System.out.println("userId : " + userId);
//
//      if (userId != null) {
//        Optional<User> userOptional = userRepository.findByUserId(userId);
//        User user = userOptional.get();
//        PrincipalDetails principal = new PrincipalDetails(user);
//
//        // OAuth 인지 일반 로그인인지 구분할 필요가 없음. 왜냐하면 password를 Authentication이 가질 필요가 없으니!!
//        // JWT가 로그인 프로세스를 가로채서 인증다 해버림. (OAuth2.0이든 그냥 일반 로그인 이든)
//
//        UsernamePasswordAuthenticationToken authentication =
//            new UsernamePasswordAuthenticationToken(principal, null, principal.getAuthorities());
//        SecurityContextHolder.getContext().setAuthentication(authentication); // 세션에 넣기
//        return authentication;
//      }
//    }
//    return null;
//  }
//}
