package com.ssafy.websns.model.entity.feed;

import static javax.persistence.FetchType.LAZY;

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
public class Image {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "IMAGE_NO")
  private Integer no;

  private String imgUrl;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO")
  private Feed feed;

  public Image(String imgUrl, Feed feed) {
    this.imgUrl = imgUrl;
    this.feed = feed;
  }

  public void createImage(String imgUrl, Feed feed) {
    this.imgUrl = imgUrl;
    this.feed = feed;
  }

  public void updateImage(String imgUrl) {
    this.imgUrl = imgUrl;
  }


}
