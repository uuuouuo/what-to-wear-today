package com.ssafy.websns.model.domain.region;

import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Entity
@Getter
@ApiModel(value = "지역 정보", description = "지역 정보를 나타낸다")
public class Region {

  @Id
  @GeneratedValue
  @Column(name = "REGION_NO")
  private Integer no;

  @Column(name = "REGION_NAME")
  private String regionName;

  @Column(name = "POINT_CODE")
  private Integer pointCode;

}
