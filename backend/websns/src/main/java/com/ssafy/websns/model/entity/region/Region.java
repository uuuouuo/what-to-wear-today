package com.ssafy.websns.model.entity.region;

import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Getter;

@Entity
@Getter
@ApiModel(value = "지역 정보", description = "지역 정보를 나타낸다")
public class Region {

  @Id
  @GeneratedValue
  @Column(name = "REGION_NO")
  private Integer no;

  private String regionName;

  private Integer pointCode;

  public Region() {
  }

  public Region(String regionName, Integer pointCode) {
    this.regionName = regionName;
    this.pointCode = pointCode;
  }
}
