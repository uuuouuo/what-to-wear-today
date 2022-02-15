package com.ssafy.websns.model.dto.user;

import com.ssafy.websns.model.entity.user.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class FollowDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class FollowReq {

    private User userFollowerNo;
    private User userFollowingNo;

    public FollowReq(User userFollowerNo, User userFollowingNo) {
      this.userFollowerNo = userFollowerNo;
      this.userFollowingNo = userFollowingNo;
    }

  }

  @Getter
  public static class FollowRes {

    private User userFollowerNo;
    private User userFollowingNo;
    private Integer followCnt;

    public FollowRes(User userFollowerNo, User userFollowingNo, Integer followCnt) {
      this.userFollowerNo = userFollowerNo;
      this.userFollowingNo = userFollowingNo;
      this.followCnt = followCnt;
    }

  }

}
