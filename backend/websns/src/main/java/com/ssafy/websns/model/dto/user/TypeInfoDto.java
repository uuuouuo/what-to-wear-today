package com.ssafy.websns.model.dto.user;

import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class TypeInfoDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class UpdateTypeReq {
    private List<Integer> typeNos;

    public UpdateTypeReq(List<Integer> typeNos) {
      this.typeNos = typeNos;
    }

  }

  @Getter
  public static class UpdateTypeRes {
    private String userId;
    private Integer typeNo;

    public UpdateTypeRes(String userId, Integer typeNo) {
      this.userId = userId;
      this.typeNo = typeNo;
    }

  }

}
