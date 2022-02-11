//package com.ssafy.websns.config.oauth.provider;
//
//import com.ssafy.websns.exception.OAuth2AuthenticationProcessingException;
//import com.ssafy.websns.model.entity.user.AuthProvider;
//import java.util.Map;
//
//public class OAuth2UserInfoFactory {
//
//  public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
//    if(registrationId.equalsIgnoreCase(AuthProvider.kakao.toString())) {
//      return new KakaoUserInfo(attributes);
//    } else {
//      throw new OAuth2AuthenticationProcessingException(registrationId + " 로그인은 지원하지 않습니다.");
//    }
//  }
//
//}
