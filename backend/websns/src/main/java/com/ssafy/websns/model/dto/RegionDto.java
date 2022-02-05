package com.ssafy.websns.model.dto;

import lombok.Data;

public class RegionDto {

  private String name;
  private Integer pointCode;

  public RegionDto() {
  }

  public RegionDto(String name, Integer pointCode) {
    this.name = name;
    this.pointCode = pointCode;
  }
}
