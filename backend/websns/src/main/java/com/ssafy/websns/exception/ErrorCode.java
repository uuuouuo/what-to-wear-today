package com.ssafy.websns.exception;

public enum ErrorCode {

  INVALID_PARAMETER(400, null, "Invalid Request Data"),
  NON_LOGIN(401,"C003","Non Login Status"),
  EXPIRED_TOKEN(401,"C004","EXPIRED_TOKEN"),
  INVALID_TOKEN(401,"C005","Invalid Token");

  private final String code;
  private final String message;
  private final int status;

  public String getCode() {
    return code;
  }

  public String getMessage() {
    return message;
  }

  public int getStatus() {
    return status;
  }

  ErrorCode(final int status, final String code, final String message) {
    this.status = status;
    this.message = message;
    this.code = code;
  }
}
