package com.ssafy.websns.model.entity.feed;

import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ApiModel(value = "태그 리스트", description = "태그 리스트를 나타냅니다.")
public class Tag {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "TAG_NO")
  private Integer no;

  private String tagName;

  public Tag(String tag){
    this.tagName = tag;
  }

}
