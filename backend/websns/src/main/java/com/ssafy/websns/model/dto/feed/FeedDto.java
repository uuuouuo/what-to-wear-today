package com.ssafy.websns.model.dto.feed;

import com.ssafy.websns.model.entity.user.User;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FeedDto {

  private Integer no;

  private User user;

  private String content;

  private LocalDateTime createAt;

  private LocalDateTime photoDate;

  private LocalDateTime updateAt;

  private String weather;

  private Boolean privateMode;

  private List<PhotoDto> photos;

  public FeedDto(Integer no, User user, String content, LocalDateTime createAt,
      LocalDateTime photoDate, LocalDateTime updateDate, String weather, Boolean privateMode,List<PhotoDto> photos) {
    this.no = no;
    this.user = user;
    this.content = content;
    this.createAt = createAt;
    this.photoDate = photoDate;
    this.updateAt = updateDate;
    this.weather = weather;
    this.privateMode = privateMode;
    this.photos = photos;
  }
}
