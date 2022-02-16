package com.ssafy.websns.model.entity.feed;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.entity.BaseEntity;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.model.entity.user.User;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Feed extends BaseEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "FEED_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO", nullable = false)
  private User user;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "REGION_NO", nullable = false)
  private Region region;


  @Column(nullable = false, length = 1000)
  private String content;

  @Column(columnDefinition = " TIMESTAMP NULL DEFAULT NULL")
  private LocalDateTime photoDate;

  @Column(nullable = false, length = 45)
  private String weather;

  @Column(nullable = false)
  private Boolean privateMode;

  @Column(nullable = false)
  private Boolean deleteMode;

  // test
  public Feed(User user, Region region, String content, LocalDateTime photoDate,
      String weather, Boolean privateMode, Boolean deleteMode) {
    this.user = user;
    this.region = region;
    this.content = content;
    this.photoDate = photoDate;
    this.weather = weather;
    this.privateMode = privateMode;
    this.deleteMode = deleteMode;
  }

  public void createFeed(User user, String content, Region region, String photoDate,
      String weather, Boolean privateMode, Boolean deleteMode){

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.M.d.HH:mm");
    LocalDateTime dateTime = LocalDateTime.parse(photoDate, formatter);

    this.user = user;
    this.content = content;
    this.region = region;
    this.photoDate = dateTime;
    this.weather = weather;
    this.privateMode = privateMode;
    this.deleteMode = deleteMode;
  }

  public void updateFeed(String content, Region region, String createdAt, String weather, Boolean privateMode){

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.M.d.HH:mm");
    LocalDateTime dateTime = LocalDateTime.parse(createdAt, formatter);

    this.content = content;
    this.region = region;
    this.photoDate = dateTime;
    this.weather = weather;
    this.privateMode = privateMode;
  }

  public void deleteFeed() {
    this.deleteMode = true;
  }

}
