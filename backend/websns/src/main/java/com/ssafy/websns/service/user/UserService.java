package com.ssafy.websns.service.user;

import com.ssafy.websns.model.dto.user.UserDto.UserRes;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.user.UserRepository;
import com.ssafy.websns.service.validation.ValidateExist;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

  private final UserRepository userRepository;
  private ValidateExist validateExist = new ValidateExist();

  public UserRes searchUser(String userId) {

    Optional<User> userOptional = userRepository.findByUserId(userId);
    User user = validateExist.findUser(userOptional);

    user.createUser(user);

    UserRes userRes = new UserRes(user);

    return userRes;

  }
}
