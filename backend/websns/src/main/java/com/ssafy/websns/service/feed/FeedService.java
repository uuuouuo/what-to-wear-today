package com.ssafy.websns.service.feed;

import com.ssafy.websns.model.dto.feed.FeedDto.CreateReq;
import com.ssafy.websns.model.dto.feed.FeedDto.FeedRes;
import com.ssafy.websns.model.dto.feed.FeedDto.UpdateReq;
import com.ssafy.websns.model.dto.feed.FeedDto.UpdateRes;
import com.ssafy.websns.model.dto.feed.ImageDto.CreateImage;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.FeedTag;
import com.ssafy.websns.model.entity.feed.Image;
import com.ssafy.websns.model.entity.feed.Tag;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.feed.FeedTagRepository;
import com.ssafy.websns.repository.feed.ImageRepository;
import com.ssafy.websns.repository.feed.TagRepository;
import com.ssafy.websns.repository.region.RegionRepository;
import com.ssafy.websns.repository.user.UserRepository;
import com.ssafy.websns.service.validation.ValidateExist;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeedService {

  private final FeedRepository feedRepository;
  private final ImageRepository imageRepository;
  private final RegionRepository regionRepository;
  private final TagRepository tagRepository;
  private final UserRepository userRepository;
  private final FeedTagRepository feedTagRepository;
  private final EntityManager em;

  private ValidateExist validateExist = new ValidateExist();

  @Transactional
  public FeedRes postFeed(CreateReq request) {

    Feed feed = new Feed();
    Region region = regionRepository.findByRegionNameContaining(request.getRegion()).get(0);

    Optional<User> userOptional = userRepository.findByUserId(request.getUserId());
    User user = validateExist.findUser(userOptional);

    feed.createFeed(user, request.getContent(), region,
        request.getPhotoDate(), request.getWeather(), request.getPrivateMode(),
        request.getDeleteMode());

    Feed savedFeed = feedRepository.save(feed);

    List<MultipartFile> imageNames = request.getImageNames();

    Date date = new Date();
    StringBuilder sb = new StringBuilder();

    List<Image> imageList = new ArrayList<>();

    // file image 가 없을 경우
    if (!imageNames.isEmpty()) {
      for (MultipartFile imageName : imageNames) {
        sb.append(date.getTime());
        sb.append(imageName.getOriginalFilename());
        String fileName = "C://images/feed/" + sb.toString();
        File dest = new File(fileName);
        try {
          imageName.transferTo(dest);
          imageList.add(new Image(fileName, feed));
        } catch (IllegalStateException e) {
          e.printStackTrace();
        } catch (IOException e) {
          e.printStackTrace();
        }
      }
    }

    List<Image> savedImages = imageRepository.saveAll(imageList);

    List<String> feedTags = request.getTags();
    List<FeedTag> tags = new ArrayList<>();

    feedTags.stream().forEach(tag -> {
      Optional<Tag> byTagName = tagRepository.findByTagName(tag);
      if (byTagName.isEmpty()) {
        Tag saveTag = tagRepository.save(new Tag(tag));
        FeedTag save = feedTagRepository.save(new FeedTag(savedFeed, saveTag));
        tags.add(save);
      } else {
        FeedTag save = feedTagRepository.save(new FeedTag(savedFeed, byTagName.get()));
        tags.add(save);
      }
    });

    List<CreateImage> resImages = savedImages.stream()
        .map(CreateImage::new).collect(Collectors.toList());

    List<String> resTags = tags.stream().map(tag -> tag.getTagNo().getTagName())
        .collect(Collectors.toList());

    FeedRes response = new FeedRes(feed, resImages, resTags);

    return response;

  }

  @Transactional
  public UpdateRes editFeed(Integer feedNo, UpdateReq request) {

    Optional<Feed> optional = feedRepository.findByNo(feedNo);

    // 피드 정보 찾기
    Feed feed = validateExist.findFeed(optional);
    // 피드에 수정된 지역 정보 찾기
    Region region = regionRepository.findByRegionNameContaining(request.getRegion()).get(0);

    // 수정된 내용 저장
    feed.updateFeed(request.getContent(), region, request.getPhotoDate(),
        request.getWeather(), request.getPrivateMode());

    // 원래 이미지 삭제
    imageRepository.deleteByFeed(feed);
    feedTagRepository.deleteFeedTagByFeed(feed);

    // 수정된 이미지 이름 리스트
    List<MultipartFile> imageNames = request.getImageNames();

    Date date = new Date();
    StringBuilder sb = new StringBuilder();

    List<Image> imageList = new ArrayList<>();

    // file image 가 없을 경우
    if (!imageNames.isEmpty()) {
      for (MultipartFile imageName : imageNames) {
        sb.append(date.getTime());
        sb.append(imageName.getOriginalFilename());
        String fileName = "C://images/feed/" + sb.toString();
        File dest = new File(fileName);
        try {
          imageName.transferTo(dest);
          imageList.add(new Image(fileName, feed));
        } catch (IllegalStateException e) {
          e.printStackTrace();
        } catch (IOException e) {
          e.printStackTrace();
        }
      }
    }

    // 수정된 이미지 저장
    List<Image> savedImages = imageRepository.saveAll(imageList);

    List<String> feedTags = request.getTags();
    List<FeedTag> tags = new ArrayList<>();

    feedTags.stream().forEach(tag -> {
      // vaildExist 함수 생성 하기 !
      Optional<Tag> byTagName = tagRepository.findByTagName(tag);

      if (byTagName.isEmpty()) {
        Tag saveTag = tagRepository.save(new Tag(tag));
        FeedTag save = feedTagRepository.save(new FeedTag(feed, saveTag));
        tags.add(save);
      } else {
        FeedTag save = feedTagRepository.save(new FeedTag(feed, byTagName.get()));
        tags.add(save);
      }
    });

    List<CreateImage> resImages = savedImages.stream()
        .map(CreateImage::new).collect(Collectors.toList());

    List<String> resTags = tags.stream().map(tag -> tag.getTagNo().getTagName())
        .collect(Collectors.toList());

    // response DTO 에 담기
    UpdateRes response = new UpdateRes(feed, resImages, resTags);

    return response;

  }

  @Transactional
  public void cancelFeed(Integer feedNo) {

    Optional<Feed> optional = feedRepository.findByNo(feedNo);
    Feed feed = validateExist.findFeed(optional);

    feed.deleteFeed();
  }

  public List<FeedRes> searchFeeds(String keyword) {

    Optional<List<Feed>> optionalFeed = feedRepository.findFeedsByContent(keyword);
    List<Feed> feeds = validateExist.findFeeds(optionalFeed);

    List<FeedRes> response = new ArrayList<>();

    feeds.stream().forEach(feed -> {
      Optional<List<Image>> optional = imageRepository.findByFeed(feed);
      List<CreateImage> resImages = validateExist.findImages(optional).stream()
          .map(CreateImage::new).collect(Collectors.toList());

      FeedRes feedRes = new FeedRes(feed, resImages);

      response.add(feedRes);
    });

    return response;

  }

  public List<FeedRes> showFeedsByRegion(Integer regionNo, Pageable pageable) {

    Page<Feed> feeds = feedRepository.findAllByRegion(regionNo, pageable);

    List<FeedRes> response = new ArrayList<>();

    feeds.stream().forEach(feed -> {
      Optional<List<Image>> imagesOptional = imageRepository.findByFeed(feed);
      List<CreateImage> resImages = validateExist.findImages(imagesOptional).stream()
          .map(CreateImage::new).collect(Collectors.toList());

      Optional<List<FeedTag>> feedTagOptional = feedTagRepository.findByFeed(feed);
      List<FeedTag> feedTags = validateExist.findFeedTags(feedTagOptional);
      List<String> resTags = feedTags.stream().map(tag -> tag.getTagNo().getTagName())
          .collect(Collectors.toList());

      FeedRes feedRes = new FeedRes(feed, resImages, resTags);

      response.add(feedRes);
    });

    return response;

  }

  public FeedRes searchFeedByNo(Integer feedNo) {

    Optional<Feed> feedOptional = feedRepository.findByNo(feedNo);
    Feed feed = validateExist.findFeed(feedOptional);

    Optional<List<Image>> imagesOptional = imageRepository.findByFeed(feed);
    List<Image> images = validateExist.findImages(imagesOptional);
    List<CreateImage> resImages = images.stream()
        .map(CreateImage::new).collect(Collectors.toList());

    Optional<List<FeedTag>> feedTagOptional = feedTagRepository.findByFeed(feed);
    List<FeedTag> feedTags = validateExist.findFeedTags(feedTagOptional);
    List<String> resTags = feedTags.stream().map(tag -> tag.getTagNo().getTagName())
          .collect(Collectors.toList());

    FeedRes feedRes = new FeedRes(feed, resImages, resTags);

    return feedRes;

  }

  public List<FeedRes> showFeedsById(String userId) {

    Optional<User> userOptional = userRepository.findByUserId(userId);
    User user = validateExist.findUser(userOptional);

    Optional<List<Feed>> feedOptional = feedRepository.findByUser(user);
    List<Feed> feeds = validateExist.findFeeds(feedOptional);

    List<FeedRes> response = new ArrayList<>();

    feeds.stream().forEach(feed -> {
      Optional<List<Image>> imagesOptional = imageRepository.findByFeed(feed);
      List<Image> images = validateExist.findImages(imagesOptional);
      List<CreateImage> resImages = images.stream()
          .map(CreateImage::new).collect(Collectors.toList());

      Optional<List<FeedTag>> feedTagOptional = feedTagRepository.findByFeed(feed);
      List<FeedTag> feedTags = validateExist.findFeedTags(feedTagOptional);
      List<String> resTags = feedTags.stream().map(tag -> tag.getTagNo().getTagName())
          .collect(Collectors.toList());

      FeedRes feedRes = new FeedRes(feed, resImages, resTags);
      response.add(feedRes);

    });
    
    return response;

  }

}

