package com.ssafy.websns.model.domain.feed;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Getter;

@Entity
@Getter
public class TagList {

  @Id @GeneratedValue
  @Column(name = "TAG_NO")
  private Integer no;

  @Column(name = "TAG_NAME")
  private String tagName;

}
