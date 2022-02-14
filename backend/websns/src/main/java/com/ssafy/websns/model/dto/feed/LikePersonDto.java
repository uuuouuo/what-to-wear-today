package com.ssafy.websns.model.dto.feed;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class LikePersonDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class LikePersonReq {

    String userId;
    Integer feedNo;

    public LikePersonReq(String userId, Integer feedNo) {
      this.userId = userId;
      this.feedNo = feedNo;
    }

  }

  @Getter
  public static class LikePersonRes {

    Integer no;
    String userNo;
    Integer feedNo;

    public LikePersonRes(Integer no, String userNo, Integer feedNo) {
      this.no = no;
      this.userNo = userNo;
      this.feedNo = feedNo;
    }

  }

}
