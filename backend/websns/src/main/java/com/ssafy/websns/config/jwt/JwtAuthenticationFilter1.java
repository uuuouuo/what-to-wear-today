//package com.ssafy.websns.config.jwt;
//
//import com.auth0.jwt.JWT;
//import com.auth0.jwt.algorithms.Algorithm;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.ssafy.websns.config.auth.PrincipalDetails;
//import com.ssafy.websns.model.entity.user.User;
//import java.io.IOException;
//import java.util.Date;
//import java.util.Enumeration;
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
//import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
//import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//@RequiredArgsConstructor
//public class JwtAuthenticationFilter1 extends OAuth2LoginAuthenticationFilter {
//
//  private final AuthenticationManager authenticationManager;
//
//
//
//  public JwtAuthenticationFilter1(
//      ClientRegistrationRepository clientRegistrationRepository,
//      OAuth2AuthorizedClientService authorizedClientService) {
//    super(clientRegistrationRepository, authorizedClientService);
//  }
//
//  @Override
//  public Authentication attemptAuthentication(HttpServletRequest request,
//      HttpServletResponse response) throws AuthenticationException {
//    System.out.println("JwtAuthenticationFilter : 로그인 시도중");
//
//    // 1.username, password 받아서
//
//    Enumeration params = request.getParameterNames();
//    while (params.hasMoreElements()) {
//      String name = (String) params.nextElement();
//      System.out.print(name + " : " + request.getParameter(name) + " ");
//    }
//
//    User user = null;
//    UsernamePasswordAuthenticationToken authenticationToken =
//        new UsernamePasswordAuthenticationToken(user.getUserId(), null);
//
//    // 2.정상인지 로그인 시도를 해봄. authenticationManager로 로그인 시도를 하면 PrincipalDetailsService가 호출
//    // PrincipalDetailsService에 loadUserByUsername() 함수가 실행
//    // 정상이면 authentication이 리턴됨 => DB에 있는 username과 password가 일치함
//    Authentication authentication = authenticationManager.authenticate(authenticationToken);
//
//    // 3.PrincipalDetails를 세션에 담고 (권한 관리를 위해서, 권한 관리 필요없으면 할 필요 없음)
//    // authentication 객체가 session 영역에 저장됨 => 로그인이 되었다는 뜻
////      PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
////      System.out.println("로그인 완료 " + principalDetails.getUser().getUserId()); // 로그인 정상적으로 되었음
//    // authentication 객체가 session 영역에 저장을 해야하고 그 방법이 return 해주면 됨
//    // 리턴의 이유는 권한 관리를 security가 대신 해주기 때문에 편하려고 하는 거임
//    // 굳이 JWT 토큰을 사용하면서 세션을 만들 이유가 없음. 근데 단지 권한 처리 때문에 session 넣어줌
//
//    return authentication;
//
//
//  }
//
//  // 4.JWT토큰을 만들어서 응답을 줌
//  // attempAuthentication 실행 후 인증이 정상적으로 되었으면 실행됨
//  // JWT 토큰을 만들어서 request를 요청한 사용자에게 JWT토큰을 response 해주면 됨.
//  @Override
//  protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
//      FilterChain chain, Authentication authResult) throws IOException, ServletException {
//    System.out.println("successfulAuthentication 실행됨 : 인증이 완료되었다는 뜻");
//
//    PrincipalDetails principalDetails = (PrincipalDetails) authResult.getPrincipal();
//
//    String jwtToken = JWT.create()
//        .withSubject("cos토큰")
//        .withExpiresAt(new Date(System.currentTimeMillis() + JwtProperties.EXPIRATION_TIME))
//        .withClaim("id", principalDetails.getUser().getUserId())
//        .withClaim("password", principalDetails.getUser().getPassword())
//        .sign(Algorithm.HMAC512(JwtProperties.SECRET));
//
//    response.addHeader(JwtProperties.HEADER_STRING, JwtProperties.TOKEN_PREFIX + jwtToken);
//
//  }
//}
