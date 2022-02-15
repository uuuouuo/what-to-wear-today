package com.ssafy.websns.model.entity.user;

import com.ssafy.websns.config.auth.provider.ClientKakao.UserResponse;
import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Getter
@NoArgsConstructor
@ApiModel(value = "회원 정보", description = "회원의 상세 정보를 나타냅니다.")
public class User {

  @Id
  @GeneratedValue(generator = "no")
  @GenericGenerator(name = "no",
      strategy = "com.ssafy.websns.model.entity.UserNoGenerator")
  @Column(name = "USER_NO")
  private String no;

  private String userId;

  private String password;

  private String platform;

  private String ageRange;

  private Boolean gender;

  private Boolean deleteMode;

  public void createUser(User user) {
    this.userId = user.getUserId();
    this.platform = user.getPlatform();
    this.ageRange = user.getAgeRange();
    this.gender = user.getGender().equals("female") ? true : false;
    this.deleteMode = false;
  }

  public void createKakaoUser(UserResponse userResponse) {
    this.userId = String.valueOf(userResponse.getId());
    this.platform = "kakao";
    this.ageRange = userResponse.getKakao_account().get("age_range").toString();
    this.gender = userResponse.getKakao_account().get("gender").equals("female") ? true : false;
    this.deleteMode = false;
  }

}
