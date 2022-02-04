package com.ssafy.websns.service;

import com.ssafy.websns.model.dto.CreateFeedDto;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.Photo;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.repository.feed.PhotoRepository;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.region.RegionRepository;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FeedService {

  private final FeedRepository feedRepository;
  private final PhotoRepository photoRepository;
  private final RegionRepository regionRepository;

  public void createFeed(CreateFeedDto request) {

    Feed feed = new Feed();
    Region region = regionRepository.findByRegionNameContaining(request.getRegion()).get(0);

    feed.createFeed(request.getUser(), request.getContent(), region,
        request.getCreateAt(), request.getWeather(), request.isPrivateMode());

    List<Photo> photos = request.getImages().stream().map(image -> new Photo(image, feed))
        .collect(Collectors.toList());

//    List<Photo> phoptos2 = new ArrayList<>();
//    for (String image : request.getImages()) {
//      Photo photo = new Photo(image,feed);
//      photos.add(photo);
//    }

    feedRepository.save(feed);
    photoRepository.saveAll(photos);

  }
}

