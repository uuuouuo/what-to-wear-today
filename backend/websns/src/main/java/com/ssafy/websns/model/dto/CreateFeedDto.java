package com.ssafy.websns.model.dto;

import com.ssafy.websns.model.entity.feed.Photo;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.model.entity.user.User;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import lombok.Data;

@Data
public class CreateFeedDto {

  private User user;
  private String content;
  private String region;
  private String weather;
  private String createAt;
  private boolean privateMode;

  List<String> images = new ArrayList<>();

  public CreateFeedDto() {
  }

  public CreateFeedDto(User user, String content, String region, String weather,
      String createAt, boolean privateMode, List<String> images) {
    this.user = user;
    this.content = content;
    this.region = region;
    this.weather = weather;
    this.createAt = createAt;
    this.privateMode = privateMode;
    this.images = images;
  }
}
