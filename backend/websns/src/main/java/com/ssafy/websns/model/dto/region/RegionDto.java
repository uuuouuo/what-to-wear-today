package com.ssafy.websns.model.dto.region;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class RegionDto {

  private String name;
  private Integer pointCode;

  public RegionDto(String name, Integer pointCode) {
    this.name = name;
    this.pointCode = pointCode;
  }
}
