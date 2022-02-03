package com.ssafy.websns.weather;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class CurrentWeather {

  public static void main(String[] args) {
    // 수집 대상 url
//    String date = "2022.2.3.13:00";
    String stn ="156";
    LocalDateTime date = LocalDateTime.now();
//    System.out.println(date.format(DateTimeFormatter.ofPattern("yyyy.M.d.H")));
    String searchDate = date.format(DateTimeFormatter.ofPattern("yyyy.M.d.H:"))+"00";
    String formatDate = date.format(DateTimeFormatter.ofPattern("d.HH"))+"H";
//    System.out.println(searchDate);
//    System.out.println(formatDate);
    final String url = "https://www.weather.go.kr/w/obs-climate/land/city-obs.do?tm="+formatDate+"&type=t99&mode=0&reg=100&auto_man=m&stn="+stn;
    // Connection 생성
    Connection conn = Jsoup.connect(url);
    // HTML 파싱
    try {
      Document doc = conn.get();
//      System.out.println(doc.toString());
      Elements elements = doc.getElementsByClass("table-col");

      for (Element e : elements) {
//        System.out.println(e);
//        String title = e.select("td").text();
//        System.out.println(title);
//        Elements table_header2 = e.select("#table_header2>th");
//        for (Element element : table_header2) {
//          System.out.println(element.text());
//        }
        for (Element tr : e.getElementsByTag("tr")) {
//          System.out.println("==============================================");
//          System.out.println(tr);
          String href = tr.select("a").text();
//          System.out.println(href+ " : "+formatDate+" = "+href.equals(formatDate));
          if(href!=null && href.equals(formatDate)){
//            String title = tr.select("td").text();
            Elements tds = tr.select("td");
            System.out.println(tds.size());
            String temperatures;  //기온
            String sensibleTemp;  //체감온도
            String precipitation; //강수량
            String windDirection; //풍향
            String windSpeed; //풍속
            for(int i=0;i<tds.size();i++){
//
              String temp = tds.get(i).toString();
              System.out.println(temp);
            }
            Elements scripts = tr.getElementsByTag("script");
            String s = "";
            for (Element script : scripts) {
              s = script.toString().split("'")[1];
            }
//            System.out.println(title);
//            System.out.println(s);

            break;
          }
//          String temp = s.split("'")[1];
//          Elements tds = tr.getElementsByTag("td");
//          for (Element td : tds) {
//              String title = td.select("td").text();
//              System.out.println(title);
//          }
        }
      }
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}