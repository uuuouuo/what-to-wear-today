package com.ssafy.websns.model.dto;

import lombok.Data;

@Data
public class PhotoDto {

  private Integer no;
  private String imgUrl;
  private Integer feedNo;

  public PhotoDto() {
  }

  public PhotoDto(Integer no, String imgUrl, Integer feedNo) {
    this.no = no;
    this.imgUrl = imgUrl;
    this.feedNo = feedNo;
  }
}
