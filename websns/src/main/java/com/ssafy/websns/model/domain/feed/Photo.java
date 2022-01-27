package com.ssafy.websns.model.domain.feed;

import static javax.persistence.FetchType.LAZY;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
public class Photo {

  @Id @GeneratedValue
  @Column(name = "PHOTO_NO")
  private Integer no;

  @Column(name = "IMG_URL")
  private String imgUrl;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO")
  private Feed feed;

}
