package com.ssafy.websns.model.domain.report;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.domain.user.User;
import io.swagger.annotations.ApiModel;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
@ApiModel(value = "회원 신고", description = "회원 신고를 나타냅니다.")
public class UserReport {

  @Id
  @GeneratedValue
  @Column(name = "USER_REPORT_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User reporter;

  private String comment;

  private LocalDateTime createdAt;

  @ManyToOne(fetch = LAZY)
  @JoinColumn(name = "USER_NO")
  private User target;

}
