package com.ssafy.websns.model.domain.user;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiParam;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ApiModel(value = "회원 정보", description = "회원의 상세 정보를 나타냅니다.")
public class User {

  @Id
  @Column(name = "USER_NO")
  private String no;

  private String id;

  private Integer platform;

  private String ageRange;

  private Boolean gender;

  private Boolean deleteMode;

}
