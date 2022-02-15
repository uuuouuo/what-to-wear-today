package com.ssafy.websns.service.user;

import com.ssafy.websns.model.dto.user.FollowDto.FollowReq;
import com.ssafy.websns.model.dto.user.FollowDto.FollowRes;
import org.springframework.stereotype.Service;

@Service
public class FollowService {

  public FollowRes createFollow(FollowReq request) {

    request.getUserFollowerNo();
    request.getUserFollowingNo();

    return null;


  }

}
