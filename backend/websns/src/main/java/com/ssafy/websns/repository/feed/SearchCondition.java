package com.ssafy.websns.repository.feed;

import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.tomcat.jni.Local;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SearchCondition {

  private String keyword;
  private List<String> tag;
  private LocalDateTime startDate;
  private LocalDateTime endDate;
  private String region;
  private String temperature;
  private String sort;


}
