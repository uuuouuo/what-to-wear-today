package com.ssafy.websns.model.dto;

import com.ssafy.websns.model.entity.user.User;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;

@Data
public class FeedDto {

  private Integer no;

  private String userId;

  private String content;

  private LocalDateTime createAt;

  private LocalDateTime regDate;

  private LocalDateTime updateAt;

  private String weather;

  private Boolean privateMode;

  private List<PhotoDto> photos;

  public FeedDto() {
  }

  public FeedDto(Integer no, String userId, String content, LocalDateTime createAt,
      LocalDateTime regDate, LocalDateTime updateDate, String weather, Boolean privateMode,List<PhotoDto> photos) {
    this.no = no;
    this.userId = userId;
    this.content = content;
    this.createAt = createAt;
    this.regDate = regDate;
    this.updateAt = updateDate;
    this.weather = weather;
    this.privateMode = privateMode;
    this.photos = photos;
  }
}
