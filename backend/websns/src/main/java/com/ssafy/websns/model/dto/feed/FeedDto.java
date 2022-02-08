package com.ssafy.websns.model.dto.feed;

import com.ssafy.websns.model.dto.feed.ImageDto.CreateImage;
import com.ssafy.websns.model.entity.feed.Feed;
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

    private Integer no;
    private User user;
    private String content;
    private String region;
    private String weather;
    private String photoDate;
    private Boolean privateMode;
    private Boolean deleteMode;
    private List<String> imageNames;

    public CreateReq(Integer no, User user, String content, String region, String weather,
        String photoDate, Boolean privateMode, Boolean deleteMode, List<String> imageNames) {
      this.no = no;
      this.user = user;
      this.content = content;
      this.region = region;
      this.weather = weather;
      this.photoDate = photoDate;
      this.privateMode = privateMode;
      this.deleteMode = deleteMode;
      this.imageNames = imageNames;
    }

  }

    @Getter
    public static class FeedRes {

      private Integer no;
      private User user;
      private String content;
      private LocalDateTime createAt;
      private LocalDateTime photoDate;
      private String weather;
      private Boolean privateMode;
      private List<CreateImage> images;

      public FeedRes(Integer no, User user, String content, LocalDateTime createAt,
          LocalDateTime photoDate, String weather, Boolean privateMode,
          List<CreateImage> images) {
        this.no = no;
        this.user = user;
        this.content = content;
        this.createAt = createAt;
        this.photoDate = photoDate;
        this.weather = weather;
        this.privateMode = privateMode;
        this.images = images;
      }

      public FeedRes(Feed feed) {
        this.no = feed.getNo();
        this.user = feed.getUser();
        this.content = feed.getContent();
        this.createAt = feed.getCreatedAt();
        this.photoDate = feed.getPhotoDate();
        this.weather = feed.getWeather();
        this.privateMode = feed.getPrivateMode();
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
    private List<String> imageNames;

    public UpdateReq(String content, String region, String weather,
        String photoDate, Boolean privateMode, List<String> imageNames) {
      this.content = content;
      this.region = region;
      this.weather = weather;
      this.photoDate = photoDate;
      this.privateMode = privateMode;
      this.imageNames = imageNames;
    }

  }

  @Getter
  public static class UpdateRes {

    private String content;
    private Integer regionNo;
    private String weather;
    private LocalDateTime photoDate;
    private LocalDateTime updateAt;
    private Boolean privateMode;
    private List<CreateImage> images;

    public UpdateRes(String content, Integer regionNo, LocalDateTime photoDate, LocalDateTime updateDate,
        String weather, Boolean privateMode, List<CreateImage> images) {
      this.content = content;
      this.regionNo = regionNo;
      this.photoDate = photoDate;
      this.updateAt = updateDate;
      this.weather = weather;
      this.privateMode = privateMode;
      this.images = images;
    }

  }

}
