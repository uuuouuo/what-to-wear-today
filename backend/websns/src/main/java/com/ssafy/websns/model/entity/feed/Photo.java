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
@ApiModel(value = "사진", description = "사진 정보를 나타냅니다.")
public class Photo {

  @Id
  @GeneratedValue
  @Column(name = "PHOTO_NO")
  private Integer no;

  private String imgUrl;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "FEED_NO")
  private Feed feed;

  public Photo() {
  }

  public Photo(String imgUrl, Feed feed) {
    this.imgUrl = imgUrl;
    this.feed = feed;
  }

  public void createPhoto(String imgUrl,Feed feed){
    this.imgUrl = imgUrl;
    this.feed = feed;
  }

}
