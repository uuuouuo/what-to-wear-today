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

@Entity
@Getter
@ApiModel(value = "피드 좋아요 수", description = "피드 좋아요 수를 나타냅니다.")
public class FeedLikeCnt {

  @Id
  @Column(name = "FEED_LIKE_NO")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO", nullable = false)
  private Feed feed;

  @Column(nullable = false)
  private Integer likeCnt;

  public void createFeedLikeCnt(Feed feed) {
    this.feed = feed;
    this.likeCnt = 0;
  }

  public void increaseFeedLikeCnt() {
    this.likeCnt++;
  }

  public void decreaseFeedLikeCnt() {
    this.likeCnt--;
  }
}
