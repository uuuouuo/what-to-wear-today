package com.ssafy.websns.model.domain.report;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.domain.feed.Feed;
import com.ssafy.websns.model.domain.user.User;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
public class FeedReport {

  @Id @GeneratedValue
  @Column(name = "FEED_REPORT_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User reporter;

  private String comment;

  @Column(name = "CREATE_AT")
  private LocalDateTime createdAt;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO")
  private Feed feedNo;

}
