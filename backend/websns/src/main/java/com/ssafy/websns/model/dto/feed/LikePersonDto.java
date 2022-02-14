package com.ssafy.websns.model.dto.feed;

import com.ssafy.websns.model.dto.user.UserProfileDto.UserProfileRes;
import com.ssafy.websns.model.entity.feed.LikePerson;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class LikePersonDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class LikePersonReq {

    String userId;

    public LikePersonReq(String userId) {
      this.userId = userId;
    }

  }

  @Getter
  public static class LikePersonRes {

    Integer no;
    String userNo;
    Integer feedNo;
    Integer likeCnt;

    public LikePersonRes(LikePerson likePerson, Integer likeCnt) {
      this.no = likePerson.getNo();
      this.userNo = likePerson.getUser().getNo();
      this.feedNo = likePerson.getFeed().getNo();
      this.likeCnt = likeCnt;
    }

  }

  @Getter
  public static class LikePeopleRes {

    List<UserProfileRes> likePeople;
    Integer likeCnt;

    public LikePeopleRes(List<UserProfileRes> likePeople, Integer likeCnt) {
      this.likePeople = likePeople;
      this.likeCnt = likeCnt;
    }

  }

}
