package com.ssafy.websns.service;

import com.ssafy.websns.model.dto.CreateFeedDto;
import com.ssafy.websns.model.dto.FeedDto;
import com.ssafy.websns.model.dto.PhotoDto;
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

  public FeedDto createFeed(CreateFeedDto request) {

    Feed feed = new Feed();
    Region region = regionRepository.findByRegionNameContaining(request.getRegion()).get(0);

    feed.createFeed(request.getUser(), request.getContent(), region,
        request.getCreateAt(), request.getWeather(), request.isPrivateMode());

    System.out.println(request.getUser());

    List<Photo> photos = request.getImages().stream().map(image -> new Photo(image, feed))
        .collect(Collectors.toList());

//    List<Photo> phoptos2 = new ArrayList<>();
//    for (String image : request.getImages()) {
//      Photo photo = new Photo(image,feed);
//      photos.add(photo);
//    }

    Feed savedFeed = feedRepository.save(feed);
    List<Photo> savedPhoto = photoRepository.saveAll(photos);
    List<PhotoDto> photoDtos = savedPhoto.stream()
        .map(photo -> new PhotoDto(photo.getNo(), photo.getImgUrl(), photo.getFeed().getNo()))
        .collect(Collectors.toList());

    FeedDto feedDto = new FeedDto(feed.getNo(), feed.getUser(), feed.getContent(),
        feed.getCreateAt(), feed.getRegDate(), feed.getUpdateAt(), feed.getWeather(),
        feed.getPrivateMode(),photoDtos);

    return feedDto;
  }
}

