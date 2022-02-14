package com.ssafy.websns.config.oauth.provider;

import java.util.Map;

public class KakaoUserInfo implements OAuth2UserInfo {

  private Map<String,Object> attributes;

  public KakaoUserInfo() {
  }

  public KakaoUserInfo(Map<String, Object> attributes) {
    this.attributes = attributes;
  }

  @Override
  public String getProviderId() {
    return (String) attributes.get("id");
  }

  @Override
  public String getProvider() {
    return "kakao";
  }

  @Override
  public String getGender() {
    return (String) attributes.get("gender");
  }

  @Override
  public String getAgeRange() {
    return (String) attributes.get("age_range");
  }
}
