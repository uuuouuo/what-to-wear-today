package com.ssafy.websns.model.domain.feed;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.domain.region.Region;
import com.ssafy.websns.model.domain.user.User;
import io.swagger.annotations.ApiModel;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import lombok.Getter;

@Entity
@Getter
@ApiModel(value = "피드 정보", description = "피드를 나타낸다.")
public class Feed {

  @Id
  @GeneratedValue
  @Column(name = "FEED_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User userNo;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "REGION_NO")
  private Region regionNo;

  @Column(name = "CONTENT")
  private String content;

  @Column(name = "REG_DATE")
  private LocalDateTime regDate;

  @Column(name = "CREATE_AT")
  private LocalDateTime createAt;

  @Column(name = "UPDATE_AT")
  private LocalDateTime updateAt;

  @Column(name = "WEATHER")
  private String weather;

  @Column(name = "PRIVATE_MODE")
  private Boolean privateMode;

  @Column(name = "DELETE_MODE")
  private Boolean deleteMode;

}
