package com.ssafy.websns.config.oauth.provider;

public interface OAuth2UserInfo {

  String getProviderId();

  String getProvider();

  String getGender();

  String getAgeRange();

  /*
  google
  profile { "sub" : adfasdf12312 , "email" : dfafdsfsdf@dasfdf.com , "sex" : female }

  kakao
  profile{ "id" : adfasdf12312 , "email" : dfafdsfsdf@dasfdf.com, "gender" : female }
   */

}
