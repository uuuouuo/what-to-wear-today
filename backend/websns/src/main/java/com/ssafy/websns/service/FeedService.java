package com.ssafy.websns.service;

import com.ssafy.websns.model.dto.feed.FeedDto.CreateReq;
import com.ssafy.websns.model.dto.feed.FeedDto.Res;
import com.ssafy.websns.model.dto.feed.ImageDto.CreateImage;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.Image;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.feed.PhotoRepository;
import com.ssafy.websns.repository.region.RegionRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeedService {

  private final FeedRepository feedRepository;
  private final PhotoRepository photoRepository;
  private final RegionRepository regionRepository;

  @Transactional
  public Res postFeed(CreateReq request) {

    Feed feed = new Feed();
    Region region = regionRepository.findByRegionNameContaining(request.getRegion()).get(0);

    feed.createFeed(request.getUser(), request.getContent(), region,
        request.getPhotoDate(), request.getWeather(), request.getPrivateMode());

    List<Image> images = request.getImageNames().stream().map(image -> new Image(image, feed))
        .collect(Collectors.toList());

    feedRepository.save(feed);

    List<Image> savedImages = photoRepository.saveAll(images);
    List<CreateImage> resImages = savedImages.stream()
        .map(CreateImage::new).collect(Collectors.toList());

    Res response = new Res(feed.getNo(), feed.getUser(), feed.getContent(),
        feed.getPhotoDate(), feed.getUpdateAt(), feed.getWeather(),
        feed.getPrivateMode(),resImages);

    return response;
  }


//  public UpdateRes editFeed(Integer feedNo, UpdateReq request) {
//    Feed feed = feedRepository.findByNo(feedNo);
//    regionRepository.
//    feed.updateFeed(request.getContent(), request.getRegion(), request.getPhotoDate(),
//        request.getWeather(),request.getPrivateMode());
//  }
//
}

