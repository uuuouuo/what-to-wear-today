package com.ssafy.websns.config;

import com.ssafy.websns.config.auth.jwt.JwtAuthenticationFilter;
import com.ssafy.websns.config.auth.jwt.JwtAuthorizationFilter;
import com.ssafy.websns.config.auth.jwt.JwtTokenProvider;
import com.ssafy.websns.exception.CustomAuthenticationEntryPoint;
import com.ssafy.websns.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsUtils;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  private final CorsFilter corsFilter;
  private final UserRepository userRepository;
  private final JwtTokenProvider jwtTokenProvider;

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.csrf().disable();

    http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
        .and()
        .addFilter(corsFilter)
        .formLogin().disable()
        .httpBasic().disable()
        .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider),
            UsernamePasswordAuthenticationFilter.class) //AuthenticationManager
        .addFilter(new JwtAuthorizationFilter(authenticationManager(),
            userRepository,jwtTokenProvider))
        .authorizeRequests()
        .antMatchers("/**")
        .permitAll()
        .and()
        .oauth2Login()
        .and()
        .exceptionHandling()
        .authenticationEntryPoint(new CustomAuthenticationEntryPoint());

  }
}
