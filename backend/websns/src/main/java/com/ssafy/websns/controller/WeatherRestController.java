package com.ssafy.websns.controller;

import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.repository.region.RegionRepository;
import com.ssafy.websns.weather.Weather;
import com.ssafy.websns.weather.WeatherDto;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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

    Optional<Region> OptionalRegion = regionRepository.findByRegionNameContaining(region);
    WeatherDto weatherDto = null;
    if(OptionalRegion.isPresent()){
      Region region1 = OptionalRegion.get();
      Weather weather = new Weather(dateTime,region1.getPointCode());
      weatherDto = weather.crawlling();
    }
    else{

    }

    return new ResponseEntity<>(weatherDto, HttpStatus.OK);
  }


}
