package com.ssafy.websns.repository.user;

import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.model.entity.user.UserProfile;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProfileRepository extends JpaRepository<UserProfile,String> {

  Optional<UserProfile> findByUser(User user);

}
