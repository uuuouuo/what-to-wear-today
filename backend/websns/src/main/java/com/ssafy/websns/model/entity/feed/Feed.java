package com.ssafy.websns.model.entity.feed;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.entity.BaseEntity;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.model.entity.user.User;
import io.swagger.annotations.ApiModel;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(value = "피드 정보", description = "피드를 나타낸다.")
public class Feed extends BaseEntity {

  @Id
  @GeneratedValue
  @Column(name = "FEED_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User user;

  @ManyToOne(fetch = LAZY)
  private Region regionNo;

  private String content;

  private LocalDateTime photoDate;

  private String weather;

  private Boolean privateMode;

  private Boolean deleteMode;

  public void createFeed(User user, String content,Region regionNo, String createAt, String weather, Boolean privateMode){
    this.user = user;
    this.content = content;
    this.regionNo = regionNo;
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.M.d.HH:mm");
    LocalDateTime dateTime = LocalDateTime.parse(createAt, formatter);
    this.photoDate = dateTime;
    this.weather = weather;
    this.privateMode = privateMode;

  }

  public void updateFeed(String content,Region regionNo, String createAt, String weather, Boolean privateMode){
    this.content = content;
    this.regionNo = regionNo;
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.M.d.HH:mm");
    LocalDateTime dateTime = LocalDateTime.parse(createAt, formatter);
    this.photoDate = dateTime;
    this.weather = weather;
    this.privateMode = privateMode;

  }

}
