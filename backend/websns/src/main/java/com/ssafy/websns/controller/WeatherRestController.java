package com.ssafy.websns.controller;

import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.repository.region.RegionRepository;
import com.ssafy.websns.weather.Weather;
import com.ssafy.websns.weather.WeatherDto;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class WeatherRestController {

  private final RegionRepository regionRepository;

  @GetMapping("/weather")
  public ResponseEntity<WeatherDto> weather(@RequestParam(value = "region") String region, @RequestParam(value = "date") String date){

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.M.d.HH:mm");
    LocalDateTime dateTime = LocalDateTime.parse(date, formatter);

    System.out.println(dateTime.toString());

    List<Region> regionList = regionRepository.findByRegionNameContaining(region);

    WeatherDto weatherDto = null;
    if(regionList != null){
      Region region1 = regionList.get(0);
      Weather weather = new Weather(dateTime,region1.getPointCode());
      weatherDto = weather.crawlling();
    }
    else{

    }

    return new ResponseEntity<>(weatherDto, HttpStatus.OK);
  }


}
