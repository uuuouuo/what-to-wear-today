package com.ssafy.websns.model.domain.feed;

import static javax.persistence.FetchType.LAZY;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
public class Tag {

  @Id
  @GeneratedValue
  @Column(name = "TAG_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO")
  private Feed feedNo;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "TAG_NO")
  private Tag tagNo;

}
