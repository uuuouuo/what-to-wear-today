package com.ssafy.websns.repository.user;

import com.ssafy.websns.model.entity.user.Follow;
import com.ssafy.websns.model.entity.user.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FollowRepository extends JpaRepository<Follow, Integer> {

  Follow findByNo(Integer followNo);

  List<Follow> findByUserFollowingNo(User user);

  List<Follow> findByUserFollowerNo(User user);

  @Query("delete from Follow f where f.userFollowerNo = :userNo and f.userFollowingNo = :followingUserNo")
  void deleteByUserFollowerNoAndAndUserFollowingNo(@Param("userNo") User userNo, @Param("followingUserNo") User followingUserNo);

}
