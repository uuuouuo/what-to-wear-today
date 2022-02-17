package com.ssafy.websns.model.entity.type;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.entity.user.User;
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
public class TypeInfo {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "TYPE_INFO_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO", nullable = false)
  private User user;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "TYPE_NO", nullable = false)
  private Type type;

  public void createTypeInfo(User user, Type type) {
    this.user = user;
    this.type = type;
  }

}
