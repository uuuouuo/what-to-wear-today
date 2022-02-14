package com.ssafy.websns.model.entity.interest;

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

@Entity
@Getter
@ApiModel(value = "개인 관심사",description = "개인 관심사를 나타냅니다.")
public class PersonalInterest {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "PERSONAL_INTEREST_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User userNo;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "INTEREST_NO")
  private Interest interest;

  public void createPersonalInterest(User user, Interest interest) {
    this.userNo = user;
    this.interest = interest;
  }

}
