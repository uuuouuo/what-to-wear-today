package com.ssafy.websns.model.entity.interest;

import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;

@Entity
@Getter
@ApiModel(value = "관심사", description = "관심사들을 나타냅니다.")
public class Interest {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "INTEREST_NO")
  private Integer no;

  private String interestName;

  public void creatInterest(String interestName) {
    this.interestName = interestName;
  }
}
