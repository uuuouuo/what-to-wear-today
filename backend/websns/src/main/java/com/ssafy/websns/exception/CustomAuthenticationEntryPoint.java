package com.ssafy.websns.exception;

import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

  @Override
  public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
    String exception = (String)request.getAttribute("exception");
    ErrorCode errorCode;

    if(exception == null) {
      return;
    }

    if(exception.equals(ErrorCode.NON_LOGIN.getCode())) {
      errorCode = ErrorCode.NON_LOGIN;
      setResponse(response, errorCode);
      return;
    }


    if(exception.equals(ErrorCode.EXPIRED_TOKEN.getCode())) {
      errorCode = ErrorCode.EXPIRED_TOKEN;
      setResponse(response, errorCode);
      return;
    }

    if(exception.equals(ErrorCode.INVALID_TOKEN.getCode())) {
      errorCode = ErrorCode.INVALID_TOKEN;
      setResponse(response, errorCode);
    }
  }


  private void setResponse(HttpServletResponse response, ErrorCode errorCode) throws IOException {
    response.setContentType("application/json;charset=UTF-8");
    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
    response.getWriter().println("{ \"message\" : \"" + errorCode.getMessage()
        + "\", \"code\" : \"" +  errorCode.getCode()
        + "\", \"status\" : " + errorCode.getStatus()
        + ", \"errors\" : [ ] }");
  }


}
