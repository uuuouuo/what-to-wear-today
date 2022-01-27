package com.ssafy.websns.model.domain.feed;

import static javax.persistence.FetchType.LAZY;

import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import lombok.Getter;

@Entity
@Getter
@ApiModel(value = "피드 좋아요 수", description = "피드 좋아요 수를 나타냅니다.")
public class FeedLikeCnt {

  @Id
  @OneToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO")
  private Feed feed;

  @Column(name = "LIKE_CNT")
  private Integer likeCnt;

}
