package com.ssafy.websns.model.entity.feed;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.entity.BaseEntity;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.weather.WeatherDto;
import io.swagger.annotations.ApiModel;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
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

  private LocalDateTime createAt;

  private String weather;

  private Boolean privateMode;

  private Boolean deleteMode;

  public Integer createFeed(User user, String content,Region regionNo, LocalDateTime createAt, String weather, Boolean privateMode){
    this.user = user;
    this.content = content;
    this.regionNo = regionNo;
    this.createAt = createAt;
    this.weather = weather;
    this.privateMode = privateMode;

    return this.no;
  }

}
