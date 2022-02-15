package com.ssafy.websns.model.dto.region;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class RegionDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public class CreateRegion {

    private String name;
    private Integer pointCode;

    public CreateRegion(String name, Integer pointCode) {
      this.name = name;
      this.pointCode = pointCode;
    }

  }

}
