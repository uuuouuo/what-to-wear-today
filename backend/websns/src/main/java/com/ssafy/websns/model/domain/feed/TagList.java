package com.ssafy.websns.model.domain.feed;

import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Getter;

@Entity
@Getter
@ApiModel(value = "태그 리스트", description = "태그 리스트를 나타냅니다.")
public class TagList {

  @Id
  @GeneratedValue
  @Column(name = "TAG_NO")
  private Integer no;

  private String tagName;

}
