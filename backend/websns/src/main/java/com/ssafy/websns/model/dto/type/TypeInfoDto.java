package com.ssafy.websns.model.dto.type;

import com.ssafy.websns.model.dto.type.TypeDto.TypeRes;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class TypeInfoDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class UpdateTypeInfoReq {
    private List<Integer> typeNos;

    public UpdateTypeInfoReq(List<Integer> typeNos) {
      this.typeNos = typeNos;
    }

  }

  @Getter
  public static class UpdateTypeRes {
    private String userId;
    private List<TypeRes> typeNo;

    public UpdateTypeRes(String userId, List<TypeRes> typeNo) {
      this.userId = userId;
      this.typeNo = typeNo;
    }

  }

}
