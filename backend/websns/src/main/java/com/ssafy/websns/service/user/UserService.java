package com.ssafy.websns.service.user;

import com.ssafy.websns.model.dto.user.UserProfileDto.UserProfileRes;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.model.entity.user.UserProfile;
import com.ssafy.websns.repository.user.UserProfileRepository;
import com.ssafy.websns.repository.user.UserRepository;
import com.ssafy.websns.service.validation.ValidateExist;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository userRepository;
  private final UserProfileRepository userProfileRepository;

  private ValidateExist validateExist = new ValidateExist();

  public UserProfileRes searchUser(String userId) {

    Optional<User> userOptional = userRepository.findByUserId(userId);
    User user = validateExist.findUser(userOptional);

    Optional<UserProfile> profileOptional = userProfileRepository.findByUser(user);
    UserProfile userProfile = validateExist.findUserProfile(profileOptional);

    userProfile.createUserProfile(user, userProfile.getNickname());
//    UserProfileRes userProfileRes = new UserProfileRes(user, userProfile.getNickname());
//    return userProfileRes;
    return null;
  }

}
