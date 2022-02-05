package com.ssafy.websns.model.entity.faq;

import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Getter;

@Entity
@Getter
@ApiModel(value = "FAQ", description = "FAQ를 나타냅니다.")
public class Faq {

  @Id
  @GeneratedValue
  @Column(name = "FAQ_NO")
  private Integer no;

  private String subject;

  private String content;

}
