package com.ssafy.websns.model.entity.feed;

import static javax.persistence.FetchType.LAZY;

import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import lombok.Getter;

@Entity
@Getter
@IdClass(FeedLikeCntId.class)
@ApiModel(value = "피드 좋아요 수", description = "피드 좋아요 수를 나타냅니다.")
public class FeedLikeCnt {

  @Id
  @OneToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO")
  private Feed feed;

  @Id
  @Column(name = "FEED_LIKE_NO")
  private Integer feedLikeNo;

  private Integer likeCnt;

}
