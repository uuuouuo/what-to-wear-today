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
@ApiModel(value = "피드 댓글 수", description = "피드 댓글의 수를 나타냅니다.")
public class FeedCommentCnt {

  @Id
  @OneToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO")
  private Feed feed;

  private Integer commentCnt;

}
