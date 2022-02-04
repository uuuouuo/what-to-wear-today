package com.ssafy.websns.model.dto;

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
  private Region region;
  private String weather;
  private LocalDateTime createAt;
  private boolean privateMode;

  List<String> images = new ArrayList<>();

  public CreateFeedDto() {
  }

}
