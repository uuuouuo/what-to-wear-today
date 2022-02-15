package com.ssafy.websns.repository.user;

import com.ssafy.websns.model.entity.user.Follow;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FollowRepository extends JpaRepository<Follow, Integer> {

}
