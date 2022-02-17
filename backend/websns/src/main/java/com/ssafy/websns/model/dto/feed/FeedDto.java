package com.ssafy.websns.model.dto.feed;

import com.ssafy.websns.model.dto.feed.CommentDto.CommentRes;
import com.ssafy.websns.model.dto.feed.ImageDto.ImageFile;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.user.UserProfile;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

public class FeedDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class FeedReq {

    private String userId;
    private String content;
    private String region;
    private String weather;
    private String photoDate;
    private Boolean privateMode;
    private Boolean deleteMode;
    private List<String> tags;

    public FeedReq(String userId, String content, String region, String weather,
        String photoDate, Boolean privateMode, Boolean deleteMode, List<String> tags) {
      this.userId = userId;
      this.content = content;
      this.region = region;
      this.weather = weather;
      this.photoDate = photoDate;
      this.privateMode = privateMode;
      this.deleteMode = deleteMode;
      this.tags = tags;
    }
  }

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
    private List<String> tags;
    private List<MultipartFile> imageNames;

    public CreateReq(FeedReq feedReq,MultipartFile[] images){

      this.userId = feedReq.getUserId();
      this.content = feedReq.getContent();
      this.region = feedReq.getRegion();
      this.weather = feedReq.getWeather();
      this.photoDate = feedReq.getPhotoDate();
      this.privateMode = feedReq.getPrivateMode();
      this.deleteMode = feedReq.getDeleteMode();
      this.tags = feedReq.getTags();
      this.imageNames = Arrays.asList(images);

    }

  }

  @Getter
  @Setter
  public static class FeedRes {

    private Integer no;
    private String userId;
    private String nickname;
    private String profileImg;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime photoDate;
    private String weather;
    private Boolean privateMode;
    private List<String> tags;
    private List<String> images;

    public FeedRes(UserProfile userProfile, Feed feed, List<String> tags) {
      this.no = feed.getNo();
      this.userId = feed.getUser().getUserId();
      this.nickname = userProfile.getNickname();
      this.profileImg = userProfile.getProfileImg();
      this.content = feed.getContent();
      this.createdAt = feed.getCreatedAt();
      this.photoDate = feed.getPhotoDate();
      this.weather = feed.getWeather();
      this.privateMode = feed.getPrivateMode();
      this.tags = tags;
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
    private List<MultipartFile> imageNames;
    private List<String> tags;

    public UpdateReq(FeedReq request, MultipartFile[] images) {
      this.content = request.getContent();
      this.region = request.getRegion();
      this.weather = request.getWeather();
      this.photoDate = request.photoDate;
      this.privateMode = request.getPrivateMode();
      this.imageNames = Arrays.asList(images);
      this.tags = request.getTags();
    }

    public UpdateReq(String content, String region, String weather,
        String photoDate, Boolean privateMode, List<MultipartFile> imageNames, List<String> tags) {
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
    private String nickname;
    private String profileImg;
    private String content;
    private Integer regionNo;
    private String weather;
    private LocalDateTime photoDate;
    private LocalDateTime updateAt;
    private Boolean privateMode;
    private List<ImageFile> images;
    private List<String> tags;

    public UpdateRes(UserProfile userProfile, Feed feed, List<ImageFile> images, List<String> tags) {
      this.no = feed.getNo();
      this.nickname = userProfile.getNickname();
      this.profileImg = userProfile.getProfileImg();
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

  @Getter
  public static class FeedDetailRes {

    private FeedRes feedRes;
    private List<CommentRes> commentRes;

    public FeedDetailRes(FeedRes feedRes, List<CommentRes> commentRes) {
      this.feedRes = feedRes;
      this.commentRes = commentRes;
    }

  }

  @Data
  @NoArgsConstructor
  @AllArgsConstructor
  public static class SearchDto {

    private List<String> tag;
    private String startDate;
    private String endDate;
    private String region;
    private String temperature;

    public void create(List<String> tag, String startDate, String endDate, String region, String temperature) {
      this.tag = tag;
      this.startDate = startDate;
      this.endDate = endDate;
      this.region = region;
      this.temperature = temperature;
    }

  }

}
