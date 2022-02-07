package com.ssafy.websns.weather;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class WeatherDto {

  public LocalDateTime date;
  public Integer stn;

  public WeatherDto(LocalDateTime date, Integer stn) {
    this.date = date;
    this.stn = stn;
  }

  public Weather crawling() {

    Weather weather = new Weather();
    LocalDateTime date = this.date;
    Integer stn = this.stn;

    String searchDate = date.format(DateTimeFormatter.ofPattern("yyyy.M.d.H:mm"));
    String formatDate = date.format(DateTimeFormatter.ofPattern("d.H")) + "H";
    String url = "https://www.weather.go.kr/w/obs-climate/land/city-obs.do?tm=" + searchDate
        + "&type=t99&mode=0&reg=100&auto_man=m&stn=" + stn;
    
    Connection conn = Jsoup.connect(url);

    try {
      Document doc = conn.get();
      Elements elements = doc.getElementsByClass("table-col");

      for (Element e : elements) {

        for (Element tr : e.getElementsByTag("tr")) {

          String href = tr.select("a").text();

          if (href != null && href.equals(formatDate)) {
            Elements tds = tr.select("td");

            for (int i = 0; i < 12; i++) {
              String tmp = tds.get(i).text();
              if (i == 0) {
                weather.setMonHour(tmp);
              }
              if (i == 1) {
                weather.setCurWeather(tmp);
              }
              if (i == 2) {
                weather.setCloudiness(tmp);
              }
              if (i == 3) {
                weather.setLowerCloudiness(tmp);
              }
              if (i == 4) {
                weather.setTemperatures(tmp);
              }
              if (i == 5) {
                weather.setDewPointTemp(tmp);
              }
              if (i == 6) {
                weather.setSensibleTemp(tmp);
              }
              if (i == 7) {
                weather.setDayPrecipitation(tmp);
              }
              if (i == 8) {
                weather.setDaySnow(tmp);
              }
              if (i == 9) {
                weather.setHumidity(tmp);
              }
              if (i == 10) {
                weather.setWindDirection(tmp);
              }

            }
            Elements scripts = tr.getElementsByTag("script");
            String s = "";
            for (Element script : scripts) {
              s = script.toString().split("'")[1];
            }
            weather.setWindSpeed(s);

            break;
          }
        }
      }
    } catch (IOException e) {
      e.printStackTrace();
    }

    weather.setRegionNo(stn);
    return weather;
  }

}
