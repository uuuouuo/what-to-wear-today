package com.ssafy.websns.service.feed;

import com.ssafy.websns.model.dto.feed.FeedDto.CreateReq;
import com.ssafy.websns.model.dto.feed.FeedDto.FeedRes;
import com.ssafy.websns.model.dto.feed.FeedDto.UpdateReq;
import com.ssafy.websns.model.dto.feed.FeedDto.UpdateRes;
import com.ssafy.websns.model.dto.feed.ImageDto.CreateImage;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.Image;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.feed.ImageRepository;
import com.ssafy.websns.repository.region.RegionRepository;
import com.ssafy.websns.repository.user.UserRepository;
import com.ssafy.websns.service.validation.ValidateExist;
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
  private final ImageRepository imageRepository;
  private final RegionRepository regionRepository;
  private final UserRepository userRepository;

  @Transactional
  public FeedRes postFeed(CreateReq request) {

    Feed feed = new Feed();
    Region region = regionRepository.findByRegionNameContaining(request.getRegion()).get(0);
    User user = userRepository.findByNo(request.getUser());

    feed.createFeed(user, request.getContent(), region,
        request.getPhotoDate(), request.getWeather(), request.getPrivateMode(),
        request.getDeleteMode());

    List<Image> imageNames = request.getImageNames().stream()
        .map(image -> new Image(image, feed))
        .collect(Collectors.toList());

    feedRepository.save(feed);
    List<Image> savedImages = imageRepository.saveAll(imageNames);

    List<CreateImage> resImages = savedImages.stream()
        .map(CreateImage::new).collect(Collectors.toList());

    FeedRes response = new FeedRes(feed, resImages);

    return response;

  }

  @Transactional
  public UpdateRes editFeed(Integer feedNo, UpdateReq request) {

    ValidateExist validateExist = new ValidateExist(null, feedRepository, null);

    // 피드 정보 찾기
    Feed feed = validateExist.findFeedByNo(feedNo);
    // 피드에 수정된 지역 정보 찾기
    Region region = regionRepository.findByRegionNameContaining(request.getRegion()).get(0);

    // 수정된 내용 저장
    feed.updateFeed(request.getContent(), region, request.getPhotoDate(),
        request.getWeather(), request.getPrivateMode());

    // 원래 이미지 삭제
    imageRepository.deleteByFeed(feed);

    // 수정된 이미지 이름 리스트
    List<Image> imageNames = request.getImageNames().stream().map(image -> new Image(image, feed))
        .collect(Collectors.toList());

    // 수정된 이미지 저장
    List<Image> savedImages = imageRepository.saveAll(imageNames);

    // 이미지 DTO 에 담기
    List<CreateImage> resImages = savedImages.stream()
        .map(CreateImage::new).collect(Collectors.toList());

    // response DTO 에 담기
    UpdateRes response = new UpdateRes(feed, resImages);

    return response;

  }

  public void cancelFeed(Integer feedNo) {

    ValidateExist validateExist = new ValidateExist(null, feedRepository, null);

    Feed feed = validateExist.findFeedByNo(feedNo);
    feed.deleteFeed();

  }

  public List<FeedRes> searchFeeds(String keyword) {

    ValidateExist validateExist = new ValidateExist(null, feedRepository, imageRepository);

    List<Feed> feeds = validateExist.findFeedByNosByKeyword(keyword);

    List<FeedRes> response = null;

    feeds.stream().forEach(feed -> {
      List<CreateImage> resImages = validateExist.findImagesByFeed(feed).stream()
          .map(CreateImage::new).collect(Collectors.toList());

      FeedRes feedRes = new FeedRes(feed, resImages);

      response.add(feedRes);
    });

    return response;

  }

}

