package com.ssafy.websns.controller;

import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.repository.region.RegionRepository;
import com.ssafy.websns.weather.Weather;
import com.ssafy.websns.weather.WeatherDto;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class WeatherController {

  private final RegionRepository regionRepository;

  @GetMapping("/weather")
  public ResponseEntity<Weather> weather(@RequestParam(value = "region") String regionName, @RequestParam(value = "date") String date){

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.M.d.HH:mm");
    LocalDateTime dateTime = LocalDateTime.parse(date, formatter);

    Region region = regionRepository.findByRegionName(regionName);

    Weather weather = null;
    if(region != null){
      Region region1 = region;
      WeatherDto weatherDto = new WeatherDto(dateTime,region1.getPointCode());
      weather = weatherDto.crawling();
    }
    else{

    }

    return new ResponseEntity<>(weather, HttpStatus.OK);

  }

}
