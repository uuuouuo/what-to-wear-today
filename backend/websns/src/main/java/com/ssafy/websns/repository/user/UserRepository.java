package com.ssafy.websns.repository.user;

import com.ssafy.websns.model.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,String> {

  User findByNo(String userNo);

}
