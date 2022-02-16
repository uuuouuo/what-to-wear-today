package com.ssafy.websns.model.entity.feed;

import static javax.persistence.FetchType.LAZY;

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
@ApiModel(value = "피드에 있는 태그정보", description = "피드에 있는 태그정보를 나타냅니다.")
public class FeedTag {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "FEED_TAG_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO", nullable = false)
  private Feed feed;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "TAG_NO", nullable = false)
  private Tag tagNo;

  public FeedTag(Feed feed,Tag tagNo){
    this.feed = feed;
    this.tagNo = tagNo;
  }

}
