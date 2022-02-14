package com.ssafy.websns.service.user;

import com.ssafy.websns.config.auth.jwt.JwtTokenProvider;
import com.ssafy.websns.model.dto.region.RegionDto.UpdateRegionReq;
import com.ssafy.websns.model.dto.region.RegionDto.UpdateRegionRes;
import com.ssafy.websns.model.dto.user.TypeInfoDto.UpdateTypeReq;
import com.ssafy.websns.model.dto.user.TypeInfoDto.UpdateTypeRes;
import com.ssafy.websns.model.dto.user.UserProfileDto.CreateReq;
import com.ssafy.websns.model.dto.user.UserProfileDto.UserProfileReq;
import com.ssafy.websns.model.dto.user.UserProfileDto.UserProfileRes;
import com.ssafy.websns.model.entity.interest.Interest;
import com.ssafy.websns.model.entity.interest.PersonalInterest;
import com.ssafy.websns.model.entity.region.InterestRegion;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.model.entity.type.Type;
import com.ssafy.websns.model.entity.type.TypeInfo;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.model.entity.user.UserProfile;
import com.ssafy.websns.repository.Type.TypeInfoRepository;
import com.ssafy.websns.repository.Type.TypeRepository;
import com.ssafy.websns.repository.interest.InterestRepository;
import com.ssafy.websns.repository.interest.PersonalInterestRepsitory;
import com.ssafy.websns.repository.region.InterestRegionRepository;
import com.ssafy.websns.repository.region.RegionRepository;
import com.ssafy.websns.repository.user.UserProfileRepository;
import com.ssafy.websns.repository.user.UserRepository;
import com.ssafy.websns.service.validation.ValidateExist;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository userRepository;
  private final UserProfileRepository userProfileRepository;
  private final JwtTokenProvider jwtTokenProvider;
  private final TypeInfoRepository typeInfoRepository;
  private final PersonalInterestRepsitory personalInterestRepository;
  private final TypeRepository typeRepository;
  private final InterestRepository interestRepository;
  private final InterestRegionRepository interestRegionRepository;
  private final RegionRepository regionRepository;

  private ValidateExist validateExist = new ValidateExist();

  public void signUp(CreateReq request) {

    String jwtToken = request.getJwtToken();
    String userId = jwtTokenProvider.getUserId(jwtToken.replace("Bearer ",""));
    List<Integer> interestNos = request.getInterestNos();
    List<Integer> typeNos = request.getTypeNos();

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

    if(!typeNos.isEmpty()) {
      typeNos.stream().forEach(typeNo -> {
        Optional<Type> typeOptional = typeRepository.findByNo(typeNo);
        Type type = validateExist.findTypeNo(typeOptional);

        TypeInfo typeInfo = new TypeInfo();
        typeInfo.createTypeInfo(user,type);
        typeInfoRepository.save(typeInfo);
      });
    }

    interestNos.stream().forEach(interestNo -> {
      Optional<Interest> interestOptional = interestRepository.findByNo(interestNo);
      if(interestOptional.isPresent()) {
        PersonalInterest personalInterest = new PersonalInterest();
        Interest interest = interestOptional.get();
        personalInterest.createPersonalInterest(user,interest);
        personalInterestRepository.save(personalInterest);
      }
    });

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

  public UserProfileRes editUserProfile(String userId, UserProfileReq userProfileReq, MultipartFile image) {

    Optional<User> userOptional = userRepository.findByUserId(userId);
    User user = validateExist.findUser(userOptional);

    Optional<UserProfile> profileOptional = userProfileRepository.findByUser(user);
    UserProfile userProfile = validateExist.findUserProfile(profileOptional);

    userProfileRepository.deleteByNo(userProfile.getNo());

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

    userProfile.createUserProfile(user, userProfileReq.getNickname(), imageUrl);
    UserProfileRes userProfileRes = new UserProfileRes(userProfile);

    return userProfileRes;

  }

  public UpdateTypeRes editType(String userId, UpdateTypeReq updateTypeReq) {

    Optional<User> userOptional = userRepository.findByUserId(userId);
    User user = validateExist.findUser(userOptional);

    typeInfoRepository.deleteByUser(user);

    List<Integer> typeNos = updateTypeReq.getTypeNos();
    if(!typeNos.isEmpty()) {
      typeNos.stream().forEach(typeNo -> {
        Optional<Type> typeOptional = typeRepository.findByNo(typeNo);
        Type type = validateExist.findTypeNo(typeOptional);

        TypeInfo typeInfo = new TypeInfo();
        typeInfo.createTypeInfo(user,type);
        typeInfoRepository.save(typeInfo);
      });
    }

    List<Type> types = typeInfoRepository.findByUser(user);
    UpdateTypeRes updateTypeRes = new UpdateTypeRes(userId, types);

    return updateTypeRes;

  }

  public UpdateRegionRes setupRegion(String userId, UpdateRegionReq request) {

    Optional<User> userOptional = userRepository.findByUserId(userId);
    User user = validateExist.findUser(userOptional);

    interestRegionRepository.deleteByUser(user);

    List<String> regionNames = request.getRegions();
    if(!regionNames.isEmpty()) {
      regionNames.stream().forEach(regionName -> {
        Region region = regionRepository.findByRegionNameContaining(regionName).get(0);

        InterestRegion interestRegion = new InterestRegion();
        interestRegion.createInterestRegion(user, region);
        interestRegionRepository.save(interestRegion);
      });
    }

    List<Region> interestRegions = interestRegionRepository.findByUser(user);

    UpdateRegionRes response = new UpdateRegionRes(interestRegions);

    return response;

  }

}
