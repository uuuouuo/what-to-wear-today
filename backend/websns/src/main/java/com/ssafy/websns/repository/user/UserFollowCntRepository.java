package com.ssafy.websns.repository.user;

import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.model.entity.user.UserFollowCnt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserFollowCntRepository extends JpaRepository<UserFollowCnt, Integer> {

  UserFollowCnt findByUser(User user);


}
