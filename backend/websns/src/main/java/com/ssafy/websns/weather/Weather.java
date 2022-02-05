package com.ssafy.websns.weather;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class Weather {

  public LocalDateTime date;
  public Integer stn;

  public Weather() {

    this.date = LocalDateTime.now();
    this.stn = 0;

  }

  public Weather(LocalDateTime date) {
    this.date = date;
  }

  public Weather(Integer stn) {
    this.stn = stn;
  }

  public Weather(LocalDateTime date, Integer stn) {
    this.date = date;
    this.stn = stn;
  }

  public WeatherDto crawling() {

    LocalDateTime date = this.date;
    Integer stn = this.stn;

    String searchDate = date.format(DateTimeFormatter.ofPattern("yyyy.M.d.H:mm"));
    final String url = "https://www.weather.go.kr/w/obs-climate/land/city-obs.do?tm=" + searchDate
        + "&type=t99&mode=0&reg=100&auto_man=m&stn=" + Integer.toString(stn);

    String formatDate = date.format(DateTimeFormatter.ofPattern("d.H")) + "H";

    WeatherDto weatherDto = new WeatherDto();

    // Connection 생성
    Connection conn = Jsoup.connect(url);
    // HTML 파싱
    try {
      Document doc = conn.get();
//      System.out.println(doc.toString());
      Elements elements = doc.getElementsByClass("table-col");

      for (Element e : elements) {

        for (Element tr : e.getElementsByTag("tr")) {
          String href = tr.select("a").text();
          if (href != null && href.equals(formatDate)) {
            Elements tds = tr.select("td");
            for (int i = 0; i < 12; i++) {
              String tmp = tds.get(i).text();
              if (i == 0) {
                weatherDto.setMonHour(tmp);
              }
              if (i == 1) {
                weatherDto.setCurWeather(tmp);
              }
              if (i == 2) {
                weatherDto.setCloudiness(tmp);
              }
              if (i == 3) {
                weatherDto.setLowerCloudiness(tmp);
              }
              if (i == 4) {
                weatherDto.setTemperatures(tmp);
              }
              if (i == 5) {
                weatherDto.setDewPointTemp(tmp);
              }
              if (i == 6) {
                weatherDto.setSensibleTemp(tmp);
              }
              if (i == 7) {
                weatherDto.setDayPrecipitation(tmp);
              }
              if (i == 8) {
                weatherDto.setDaySnow(tmp);
              }
              if (i == 9) {
                weatherDto.setHumidity(tmp);
              }
              if (i == 10) {
                weatherDto.setWindDirection(tmp);
              }

            }
            Elements scripts = tr.getElementsByTag("script");
            String s = "";
            for (Element script : scripts) {
              s = script.toString().split("'")[1];
            }
            weatherDto.setWindSpeed(s);

            break;
          }
        }
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
//    System.out.println(weatherDto);
    weatherDto.setRegionNo(stn);
    return weatherDto;
  }

}
