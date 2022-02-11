package com.ssafy.websns.model.entity.user;

import com.ssafy.websns.config.oauth.provider.ClientKakao.UserResponse;
import io.swagger.annotations.ApiModel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.util.Random;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
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

  public void createUser(String userId, String platform, String ageRange,
      String gender, Boolean deleteMode) {
    this.userId = userId;
    this.platform = platform;
    this.ageRange = ageRange;
    this.gender = gender.equals("female") ? true : false;
    this.deleteMode = deleteMode;
  }

  public void createKakaoUser(UserResponse userResponse) {
    this.userId = String.valueOf(userResponse.getId());
    this.platform = "kakao";
    this.ageRange = userResponse.getAgeRange();
    this.gender = userResponse.getGender().equals("female") ? true : false;
    this.deleteMode = false;
  }

}
