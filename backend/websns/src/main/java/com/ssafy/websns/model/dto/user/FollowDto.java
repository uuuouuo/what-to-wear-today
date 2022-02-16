package com.ssafy.websns.model.dto.user;

import com.ssafy.websns.model.entity.user.UserFollowCnt;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class FollowDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class FollowReq {

    private String userId; // 나
    private String followingId; // 내가 한 사람

    public FollowReq(String userId, String followingId) {
      this.userId = userId;
      this.followingId = followingId;
    }

  }

  @Getter
  public static class FollowRes {

    private UserFollowCnt followerUser;
    private UserFollowCnt followingUser;

    public FollowRes(UserFollowCnt followerUser, UserFollowCnt followingUser) {
      this.followerUser = followerUser;
      this.followingUser = followingUser;
    }

  }

  @Getter
  public static class DeleteFollowRes {

    private String followerId;
    private String followingId;

    public DeleteFollowRes(String followerId, String followingId) {
      this.followerId = followerId;
      this.followingId = followingId;
    }

  }

}
