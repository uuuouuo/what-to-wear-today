package com.ssafy.websns.model.entity.report;

import static javax.persistence.FetchType.LAZY;

import com.ssafy.websns.model.entity.user.User;
import io.swagger.annotations.ApiModel;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Entity
@Getter
@ApiModel(value = "회원 신고", description = "회원 신고를 나타냅니다.")
public class UserReport {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "USER_REPORT_NO")
  private Integer no;

  @ManyToOne(fetch = LAZY)
  @JoinColumn
  private User reporter;

  private String comment;

  private LocalDateTime createdAt;

  @ManyToOne(fetch = LAZY)
  @JoinColumn
  private User target;

}
