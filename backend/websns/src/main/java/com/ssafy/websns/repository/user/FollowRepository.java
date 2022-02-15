package com.ssafy.websns.repository.user;

import com.ssafy.websns.model.entity.user.Follow;
import com.ssafy.websns.model.entity.user.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FollowRepository extends JpaRepository<Follow, Integer> {

  Follow findByNo(Integer followNo);

  List<Follow> findByUserFollowingNo(User user);

  List<Follow> findByUserFollowerNo(User user);

}
