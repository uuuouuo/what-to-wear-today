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
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@NoArgsConstructor
public class Feed extends BaseEntity {

  @Id
  @GeneratedValue
  @Column(name = "FEED_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User user;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "REGION_NO")
  private Region region;

  private String content;

  private LocalDateTime photoDate;

  private String weather;

  private Boolean privateMode;

  private Boolean deleteMode;

  public void createFeed(Integer no, User user, String content, Region region, String createAt,
      String weather, Boolean privateMode, Boolean deleteMode){

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.M.d.HH:mm");
    LocalDateTime dateTime = LocalDateTime.parse(createAt, formatter);

    this.no = no;
    this.user = user;
    this.content = content;
    this.region = region;
    this.photoDate = dateTime;
    this.weather = weather;
    this.privateMode = privateMode;
    this.deleteMode = deleteMode;
  }

  public void updateFeed(String content, Region region, String createAt, String weather, Boolean privateMode){

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.M.d.HH:mm");
    LocalDateTime dateTime = LocalDateTime.parse(createAt, formatter);

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
