package com.ssafy.websns.model.dto.feed;

import com.ssafy.websns.model.entity.feed.Image;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class ImageDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class CreateImage {

    private Integer no;
    private String imgUrl;
    private Integer feedNo;

    public CreateImage(Integer no, String imgUrl, Integer feedNo) {
      this.no = no;
      this.imgUrl = imgUrl;
      this.feedNo = feedNo;
    }

    public CreateImage(Image image) {
      this.no = image.getNo();
      this.imgUrl = image.getImgUrl();
      this.feedNo = image.getFeed().getNo();
    }

  }

}
