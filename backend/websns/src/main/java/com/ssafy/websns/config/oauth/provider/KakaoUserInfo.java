//package com.ssafy.websns.config.oauth.provider;
//
//import java.util.HashMap;
//import java.util.Map;
//
//public class KakaoUserInfo implements OAuth2UserInfo {
//
//  private Map<String,Object> attributes;
//  private HashMap<String,String> accountMap;
//  public KakaoUserInfo() {
//  }
//
//  public KakaoUserInfo(Map<String, Object> attributes) {
//    this.attributes = attributes;
//    this.accountMap = (HashMap<String, String>) attributes.get("kakao_account");
//  }
//
//  @Override
//  public String getProviderId() {
////    System.out.println("asdfsfadfasdf : " + (Map) attributes.get("kakao_account"));
//    return String.valueOf(attributes.get("id"));
//  }
//
//  @Override
//  public String getProvider() {
//    return "kakao";
//  }
//
//  @Override
//  public String getGender() {
//    return (String) accountMap.get("gender");
//  }
//
//  @Override
//  public String getAgeRange() {
//    return (String) accountMap.get("age_range");
//  }
//}
