package com.ssafy.websns.model.entity.region;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.entity.user.User;
import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@ApiModel(value = "관심 지역", description = "관심 지역을 나타냅니다.")
public class InterestRegion {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "INTEREST_REGION_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User user;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "REGION_NO")
  private Region region;

  public void createInterestRegion(User user, Region region) {
    this.user = user;
    this.region = region;
  }
}
