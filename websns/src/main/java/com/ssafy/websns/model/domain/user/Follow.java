package com.ssafy.websns.model.domain.user;

import static javax.persistence.FetchType.LAZY;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
public class Follow {

  @Id
  @GeneratedValue
  @Column(name = "FOLLOW_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @Column(name = "USER_FOLLOWER_NO")
  private User userFollowerNo;

  @ManyToOne(fetch = LAZY)
  @Column(name = "USER_FOLLWER_NO")
  private User userFollwingNo;

}
