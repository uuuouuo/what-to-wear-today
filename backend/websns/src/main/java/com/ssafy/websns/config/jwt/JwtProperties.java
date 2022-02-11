package com.ssafy.websns.config.jwt;

public interface JwtProperties {
  String SECRET = "Quokkacola";
  int EXPIRATION_TIME = 1000 * 60 * 10;
  String TOKEN_PREFIX = "Bearer ";
  String HEADER_STRING = "Authorization";
}