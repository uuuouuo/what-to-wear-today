package com.ssafy.websns.model.entity.region;

import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@ApiModel(value = "지역 정보", description = "지역 정보를 나타낸다")
public class Region {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "REGION_NO")
  private Integer no;

  @Column(nullable = false, length = 45)
  private String regionName;

  @Column(nullable = false)
  private Integer pointCode;

  public Region(String regionName, Integer pointCode) {
    this.regionName = regionName;
    this.pointCode = pointCode;
  }

}
