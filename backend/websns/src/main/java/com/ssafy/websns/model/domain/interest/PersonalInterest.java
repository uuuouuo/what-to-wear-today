package com.ssafy.websns.model.domain.interest;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.domain.user.User;
import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
@ApiModel(value = "개인 관심사",description = "개인 관심사를 나타냅니다.")
public class PersonalInterest {

  @Id
  @GeneratedValue
  @Column(name = "PERSONAL_INTEREST_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User user;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "INTEREST_NO")
  private Interest interest;

}
