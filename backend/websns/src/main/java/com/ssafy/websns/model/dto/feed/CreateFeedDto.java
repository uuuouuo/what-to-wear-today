package com.ssafy.websns.model.dto.feed;

import com.ssafy.websns.model.entity.feed.Photo;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.model.entity.user.User;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateFeedDto {

  private User user;
  private String content;
  private String region;
  private String weather;
  private String photoDate;
  private boolean privateMode;

  List<String> images = new ArrayList<>();

  public CreateFeedDto(User user, String content, String region, String weather,
      String photoDate, boolean privateMode, List<String> images) {
    this.user = user;
    this.content = content;
    this.region = region;
    this.weather = weather;
    this.photoDate = photoDate;
    this.privateMode = privateMode;
    this.images = images;
  }
}
