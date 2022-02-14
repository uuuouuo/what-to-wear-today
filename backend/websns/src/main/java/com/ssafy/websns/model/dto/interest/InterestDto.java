package com.ssafy.websns.model.dto.interest;

import com.ssafy.websns.model.entity.interest.PersonalInterest;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class InterestDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class InterestReq {
    private List<String> interestNames;

    public InterestReq(List<String> interestNames) {
      this.interestNames = interestNames;
    }

  }

  @Getter
  public static class InterestRes {
    private List<PersonalInterest> interests;

    public InterestRes(List<PersonalInterest> interests) {
      this.interests = interests;
    }

  }


}
