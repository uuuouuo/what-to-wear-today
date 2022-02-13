package com.ssafy.websns.service.user;

import com.ssafy.websns.config.jwt.JwtTokenProvider;
import com.ssafy.websns.model.dto.user.UserProfileDto.CreateReq;
import com.ssafy.websns.model.dto.user.UserProfileDto.UserProfileRes;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.model.entity.user.UserProfile;
import com.ssafy.websns.repository.user.UserProfileRepository;
import com.ssafy.websns.repository.user.UserRepository;
import com.ssafy.websns.service.validation.ValidateExist;
import java.io.File;
import java.io.IOException;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class UserProfileService {

  private final UserRepository userRepository;
  private final UserProfileRepository userProfileRepository;
  private final JwtTokenProvider jwtTokenProvider;

  private ValidateExist validateExist = new ValidateExist();

  public void signUp(CreateReq request) {

    String jwtToken = request.getJwtToken();
    String userId = jwtTokenProvider.getUserId(jwtToken.replace("Bearer ",""));
    Optional<User> userOptional = userRepository.findByUserId(userId);

    User user = validateExist.findUser(userOptional);
    String nickname = request.getNickname();

    MultipartFile image = request.getImage();
    String imageUrl = "";
    if(image.isEmpty()){
      imageUrl = "C://images/profile/basic_profile.png";
    }
    else {
      String fileName = "C://images/profile/" + userId + image.getOriginalFilename();
      File dest = new File(fileName);
      try {
        image.transferTo(dest);
        imageUrl = fileName;
      } catch (IllegalStateException e) {
        e.printStackTrace();
      } catch (IOException e) {
        e.printStackTrace();
      }
    }
    UserProfile userProfile = new UserProfile();
    userProfile.createUserProfile(user,nickname,imageUrl);
    userProfileRepository.save(userProfile);

  }

  public UserProfileRes searchUserProfile(String userId) {

    Optional<User> userOptional = userRepository.findByUserId(userId);
    User user = validateExist.findUser(userOptional);

    Optional<UserProfile> profileOptional = userProfileRepository.findByUser(user);
    UserProfile userProfile = validateExist.findUserProfile(profileOptional);

    UserProfileRes userProfileRes = new UserProfileRes(userProfile);
    return userProfileRes;

  }

  public void editUserProfile(String userId) {


  }

}
