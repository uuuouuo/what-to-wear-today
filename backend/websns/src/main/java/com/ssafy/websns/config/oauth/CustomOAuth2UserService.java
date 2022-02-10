package com.ssafy.websns.config.oauth;

import com.ssafy.websns.config.auth.PrincipalDetails;
import com.ssafy.websns.config.oauth.provider.OAuth2UserInfo;
import com.ssafy.websns.config.oauth.provider.OAuth2UserInfoFactory;
import com.ssafy.websns.exception.OAuth2AuthenticationProcessingException;
import com.ssafy.websns.model.entity.user.AuthProvider;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

  private final UserRepository userRepository;

  @Override
  public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
    System.out.println("getClientRegistration: "+userRequest.getClientRegistration()); // registrationId로 어떤 OAuth로 로그인했는지 알 수 있음
    System.out.println("getAccessToken: "+userRequest.getAccessToken().getTokenValue()); // 구글로그인 버튼 클릭 -> 구글로그인창 -> 로그인 완료 -> code를 리턴(OAuth2-Client라이브러리)-> AccessToken요청

    OAuth2User oAuth2User = super.loadUser(userRequest);

    System.out.println("principalDetails: "+oAuth2User.getAttributes());

    String provider = userRequest.getClientRegistration().getRegistrationId();
    System.out.println("getClientId: "+ provider);

    try{
      return processOAuth2User(userRequest, oAuth2User);
    } catch (AuthenticationException ex) {
      throw ex;
    } catch (Exception ex) {
      throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
    }
  }

  private OAuth2User processOAuth2User(OAuth2UserRequest userRequest, OAuth2User oAuth2User) {

    OAuth2UserInfo oAuth2UserInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(userRequest.getClientRegistration().getRegistrationId(), oAuth2User.getAttributes());
//    if(isEmpty(oAuth2UserInfo.getEmail())) {
//      throw new OAuth2AuthenticationProcessingException("OAuth2 공급자(구글, 네이버, ...) 에서 이메일을 찾을 수 없습니다.");
//    }
    System.out.println(oAuth2UserInfo);

    User user = userRepository.findByUserId(oAuth2UserInfo.getProviderId());

    if(user != null) {
      if(!user.getPlatform().equals(AuthProvider.valueOf(userRequest.getClientRegistration().getRegistrationId()))) {
        throw new OAuth2AuthenticationProcessingException(
            user.getPlatform() + "계정을 사용하기 위해서 로그인을 해야합니다.");
      }
//      user = updateExistingUser(user, oAuth2UserInfo);
    } else {
      user = registerNewUser(userRequest, oAuth2UserInfo);
    }

    return new PrincipalDetails(user, oAuth2User.getAttributes());

  }

  private boolean isEmpty(String str) {
    return (str == null || "".equals(str));
  }

  private User registerNewUser(OAuth2UserRequest oAuth2UserRequest, OAuth2UserInfo oAuth2UserInfo) {

    User user = new User();

    user.createUser(oAuth2UserInfo.getProviderId(),oAuth2UserInfo.getProvider(),oAuth2UserInfo.getAgeRange(), oAuth2UserInfo.getGender());
//    return userRepository.save(User.builder()
//        .name(oAuth2UserInfo.getName())
//        .email(oAuth2UserInfo.getEmail())
//        .imageUrl(oAuth2UserInfo.getImageUrl())
//        .provider(AuthProvider.valueOf(oAuth2UserRequest.getClientRegistration().getRegistrationId()))
//        .providerId(oAuth2UserInfo.getId())
//        .build()
//    );
    return user;
  }

//  private User updateExistingUser(User existingUser, OAuth2UserInfo oAuth2UserInfo) {
//
//    return userRepository.save(existingUser
//        .update(
//            oAuth2UserInfo.getName(),
//            oAuth2UserInfo.getImageUrl()
//        )
//    );
//  }

}
