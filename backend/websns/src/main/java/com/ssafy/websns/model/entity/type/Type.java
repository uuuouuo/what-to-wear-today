package com.ssafy.websns.model.entity.type;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;

@Entity
@Getter
public class Type {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "TYPE_NO")
  private Integer no;

  @Column(nullable = false, length = 45)
  private String constitution;

  @Column(nullable = false, length = 100)
  private String description;

}
