package com.ssafy.websns.model.entity.feed;

import static javax.persistence.FetchType.LAZY;

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
@ApiModel(value = "피드에 있는 태그정보", description = "피드에 있는 태그정보를 나타냅니다.")
public class Tag {

  @Id
  @GeneratedValue
  @Column(name = "TAG_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO")
  private Feed feed;

  @ManyToOne(fetch = LAZY)
  private TagList tagNo;

}
