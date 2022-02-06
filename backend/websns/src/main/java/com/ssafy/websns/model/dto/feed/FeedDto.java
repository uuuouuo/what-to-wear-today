package com.ssafy.websns.model.dto.feed;

import com.ssafy.websns.model.dto.feed.ImageDto.CreateImage;
import com.ssafy.websns.model.entity.user.User;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class FeedDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class CreateReq {

    private User user;
    private String content;
    private String region;
    private String weather;
    private String photoDate;
    private Boolean privateMode;
    private List<String> imageNames;

    public CreateReq(User user, String content, String region, String weather,
        String photoDate, Boolean privateMode, List<String> imageNames) {
      this.user = user;
      this.content = content;
      this.region = region;
      this.weather = weather;
      this.photoDate = photoDate;
      this.privateMode = privateMode;
      this.imageNames = imageNames;
    }

  }

    @Getter
    public static class Res {

      private Integer no;
      private User user;
      private String content;
      private LocalDateTime createAt;
      private LocalDateTime photoDate;
      private String weather;
      private Boolean privateMode;
      private List<CreateImage> photos;

      public Res(Integer no, User user, String content, LocalDateTime createAt,
          LocalDateTime photoDate, String weather, Boolean privateMode,
          List<CreateImage> photos) {
        this.no = no;
        this.user = user;
        this.content = content;
        this.createAt = createAt;
        this.photoDate = photoDate;
        this.weather = weather;
        this.privateMode = privateMode;
        this.photos = photos;
      }

    }

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class UpdateReq {

    private String content;
    private String region;
    private String weather;
    private String photoDate;
    private Boolean privateMode;
    private List<String> images;

    public UpdateReq(String content, String region, String weather,
        String photoDate, Boolean privateMode, List<String> images) {
      this.content = content;
      this.region = region;
      this.weather = weather;
      this.photoDate = photoDate;
      this.privateMode = privateMode;
      this.images = images;
    }

  }

  @Getter
  public static class UpdateRes {

    private String content;
    private LocalDateTime photoDate;
    private LocalDateTime updateAt;
    private String weather;
    private Boolean privateMode;
    private List<ImageDto> photos;

    public UpdateRes(String content, LocalDateTime photoDate, LocalDateTime updateDate,
        String weather, Boolean privateMode, List<ImageDto> photos) {
      this.content = content;
      this.photoDate = photoDate;
      this.updateAt = updateDate;
      this.weather = weather;
      this.privateMode = privateMode;
      this.photos = photos;
    }

  }

}
