package com.ssafy.websns.model.dto.feed;

import com.ssafy.websns.model.dto.feed.ImageDto.CreateImage;
import com.ssafy.websns.model.entity.feed.Feed;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class FeedDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class CreateReq {

    private String userId;
    private String content;
    private String region;
    private String weather;
    private String photoDate;
    private Boolean privateMode;
    private Boolean deleteMode;
    private List<String> imageNames;
    private List<String> tags;


    public CreateReq(String userId, String content, String region, String weather,
        String photoDate, Boolean privateMode, Boolean deleteMode, List<String> imageNames, List<String> tags) {
      this.userId = userId;
      this.content = content;
      this.region = region;
      this.weather = weather;
      this.photoDate = photoDate;
      this.privateMode = privateMode;
      this.deleteMode = deleteMode;
      this.imageNames = imageNames;
      this.tags = tags;
    }

    public CreateReq(String userId, String content, String region, String weather,
        String photoDate, Boolean privateMode, Boolean deleteMode, List<String> imageNames) {
      this.userId = userId;
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
    private String userId;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime photoDate;
    private String weather;
    private Boolean privateMode;
    private List<CreateImage> images;
    private List<String> tags;

    public FeedRes(Feed feed, List<CreateImage> images, List<String> tags) {
      this.no = feed.getNo();
      this.userId = feed.getUser().getUserId();
      this.content = feed.getContent();
      this.createdAt = feed.getCreatedAt();
      this.photoDate = feed.getPhotoDate();
      this.weather = feed.getWeather();
      this.privateMode = feed.getPrivateMode();
      this.images = images;
      this.tags = tags;
    }

    public FeedRes(Feed feed, List<CreateImage> images) {
      this.no = feed.getNo();
      this.userId = feed.getUser().getUserId();
      this.content = feed.getContent();
      this.createdAt = feed.getCreatedAt();
      this.photoDate = feed.getPhotoDate();
      this.weather = feed.getWeather();
      this.privateMode = feed.getPrivateMode();
      this.images = images;
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
    private List<String> tags;

    public UpdateReq(String content, String region, String weather,
        String photoDate, Boolean privateMode, List<String> imageNames, List<String> tags) {
      this.content = content;
      this.region = region;
      this.weather = weather;
      this.photoDate = photoDate;
      this.privateMode = privateMode;
      this.imageNames = imageNames;
      this.tags = tags;
    }

  }

  @Getter
  public static class UpdateRes {

    private Integer no;
    private String content;
    private Integer regionNo;
    private String weather;
    private LocalDateTime photoDate;
    private LocalDateTime updateAt;
    private Boolean privateMode;
    private List<CreateImage> images;
    private List<String> tags;

    public UpdateRes(Feed feed, List<CreateImage> images, List<String> tags) {
      this.no = feed.getNo();
      this.content = feed.getContent();
      this.regionNo = feed.getRegion().getNo();
      this.photoDate = feed.getPhotoDate();
      this.updateAt = feed.getUpdatedAt();
      this.weather = feed.getWeather();
      this.privateMode = feed.getPrivateMode();
      this.images = images;
      this.tags = tags;
    }

  }

}
