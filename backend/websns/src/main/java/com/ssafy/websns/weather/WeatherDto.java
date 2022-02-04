package com.ssafy.websns.weather;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Data
@ToString
public class WeatherDto {

  private Integer regionNo;

  private String monHour; //일.시
  private String curWeather; //현재 날씨
  private String cloudiness; //운량
  private String lowerCloudiness; //중하운량


  private String temperatures;  //기온
  private String dewPointTemp; //이슬점 온도
  private String sensibleTemp;  //체감온도

  private String dayPrecipitation; //일강수
  private String daySnow; //일적설
  private String humidity; //습도

  private String windDirection; //풍향
  private String windSpeed; //풍속

  public WeatherDto() {
  }
}
