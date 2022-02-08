package com.ssafy.websns.service;

import com.ssafy.websns.model.dto.feed.FeedDto.CreateReq;
import com.ssafy.websns.model.dto.feed.FeedDto.CreateRes;
import com.ssafy.websns.model.dto.feed.PhotoDto;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.Photo;
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
  public CreateRes postFeed(CreateReq request) {

    Feed feed = new Feed();
    Region region = regionRepository.findByRegionNameContaining(request.getRegion()).get(0);

    feed.createFeed(request.getUser(), request.getContent(), region,
        request.getPhotoDate(), request.getWeather(), request.getPrivateMode());

    System.out.println(request.getUser());

    List<Photo> photos = request.getImages().stream().map(image -> new Photo(image, feed))
        .collect(Collectors.toList());

//    List<Photo> phoptos2 = new ArrayList<>();
//    for (String image : request.getImages()) {
//      Photo photo = new Photo(image,feed);
//      photos.add(photo);
//    }

    feedRepository.save(feed);
    List<Photo> savedPhoto = photoRepository.saveAll(photos);
    List<PhotoDto> photoDtos = savedPhoto.stream()
        .map(photo -> new PhotoDto(photo.getNo(), photo.getImgUrl(), photo.getFeed().getNo()))
        .collect(Collectors.toList());

    CreateRes response = new CreateRes(feed.getNo(), feed.getUser(), feed.getContent(),
        feed.getPhotoDate(), feed.getCreateAt(), feed.getUpdateAt(), feed.getWeather(),
        feed.getPrivateMode(),photoDtos);

    return response;
  }
}

