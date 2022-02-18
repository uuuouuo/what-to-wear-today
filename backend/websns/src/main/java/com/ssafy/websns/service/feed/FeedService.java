package com.ssafy.websns.service.feed;

import com.ssafy.websns.model.dto.feed.FeedDto.CreateReq;
import com.ssafy.websns.model.dto.feed.FeedDto.FeedRes;
import com.ssafy.websns.model.dto.feed.FeedDto.SearchDto;
import com.ssafy.websns.model.dto.feed.FeedDto.UpdateReq;
import com.ssafy.websns.model.dto.feed.FeedDto.UpdateRes;
import com.ssafy.websns.model.dto.feed.ImageDto.ImageFile;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.FeedLikeCnt;
import com.ssafy.websns.model.entity.feed.FeedTag;
import com.ssafy.websns.model.entity.feed.Image;
import com.ssafy.websns.model.entity.feed.Tag;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.model.entity.user.UserProfile;
import com.ssafy.websns.repository.feed.CustomFeedRepositoryImpl;
import com.ssafy.websns.repository.feed.FeedLikeCntRepository;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.feed.FeedTagRepository;
import com.ssafy.websns.repository.feed.ImageRepository;
import com.ssafy.websns.repository.feed.TagRepository;
import com.ssafy.websns.repository.region.RegionRepository;
import com.ssafy.websns.repository.user.UserProfileRepository;
import com.ssafy.websns.repository.user.UserRepository;
import com.ssafy.websns.service.validation.ValidateExist;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
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
  private final UserProfileRepository userProfileRepository;
  private final FeedTagRepository feedTagRepository;
  private final FeedLikeCntRepository feedLikeCntRepository;
  private final CustomFeedRepositoryImpl customFeedRepository;

  private ValidateExist validateExist = new ValidateExist();

  @Transactional
  public FeedRes postFeed(CreateReq request) {

    Region region = regionRepository.findByRegionName(request.getRegion());

    Optional<User> userOptional = userRepository.findByUserId(request.getUserId());
    User user = validateExist.findUser(userOptional);

    Optional<UserProfile> profileOptional = userProfileRepository.findByUser(user);
    UserProfile userProfile = validateExist.findUserProfile(profileOptional);

    Feed feed = new Feed();
    feed.createFeed(user, request.getContent(), region,
        request.getPhotoDate(), request.getWeather(), request.getPrivateMode(),
        request.getDeleteMode());

    Feed savedFeed = feedRepository.save(feed);

    FeedLikeCnt feedLikeCnt = new FeedLikeCnt();
    feedLikeCnt.createFeedLikeCnt(feed);
    feedLikeCntRepository.save(feedLikeCnt);

    List<MultipartFile> imageNames = request.getImageNames();

    Date date = new Date();
    StringBuilder sb = new StringBuilder();
    List<Image> imageList = new ArrayList<>();

    if (!imageNames.isEmpty()) {
      for (MultipartFile imageName : imageNames) {
        sb.append(date.getTime());
        sb.append(imageName.getOriginalFilename());
//        String fileName = "C://images/feed/" + sb.toString();
        String fileName = "/home/ubuntu/images/feed/" + sb.toString();
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

    List<String> tagNames = request.getTags();
    List<FeedTag> feedTags = new ArrayList<>();

    tagNames.stream().forEach(tagName -> {
      Optional<Tag> tagOptional = tagRepository.findByTagName(tagName);
      Tag tag = validateExist.findTag(tagOptional);

      if (tag == null) {
        tag = tagRepository.save(new Tag(tagName));
      }
        FeedTag saveFeedTag = feedTagRepository.save(new FeedTag(savedFeed, tag));
        feedTags.add(saveFeedTag);

    });

    List<ImageFile> resImages = savedImages.stream()
        .map(ImageFile::new).collect(Collectors.toList());

    List<String> resTags = feedTags.stream().map(tag -> tag.getTagNo().getTagName())
        .collect(Collectors.toList());

    FeedRes response = new FeedRes(userProfile, feed, resTags);

    return response;

  }

  @Transactional
  public UpdateRes editFeed(Integer feedNo, UpdateReq request) {

    Optional<Feed> optional = feedRepository.findByNo(feedNo);
    Feed feed = validateExist.findFeed(optional);

    Region region = regionRepository.findByRegionName(request.getRegion());

    Optional<UserProfile> profileOptional = userProfileRepository.findByUser(feed.getUser());
    UserProfile userProfile = validateExist.findUserProfile(profileOptional);

    feed.updateFeed(request.getContent(), region, request.getPhotoDate(),
        request.getWeather(), request.getPrivateMode());

    imageRepository.deleteByFeed(feed);
    feedTagRepository.deleteFeedTagByFeed(feed);

    List<MultipartFile> imageNames = request.getImageNames();

    Date date = new Date();
    StringBuilder sb = new StringBuilder();

    List<Image> imageList = new ArrayList<>();

    if (!imageNames.isEmpty()) {
      for (MultipartFile imageName : imageNames) {
        sb.append(date.getTime());
        sb.append(imageName.getOriginalFilename());
//        String fileName = "C://images/feed/" + sb.toString();
        String fileName = "/home/ubuntu/images/feed/" + sb.toString();
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

    List<String> tagNames = request.getTags();
    List<FeedTag> feedTags = new ArrayList<>();

    tagNames.stream().forEach(tagName -> {
      Optional<Tag> tagOptional = tagRepository.findByTagName(tagName);
      Tag tag = validateExist.findTag(tagOptional);

      FeedTag saveFeedTag;
      if (tag == null) {
        tag = tagRepository.save(new Tag(tagName));
      }

      saveFeedTag = feedTagRepository.save(new FeedTag(feed, tag));
      feedTags.add(saveFeedTag);

    });

    List<ImageFile> resImages = savedImages.stream()
        .map(ImageFile::new).collect(Collectors.toList());

    List<String> resTags = feedTags.stream().map(tag -> tag.getTagNo().getTagName())
        .collect(Collectors.toList());

    UpdateRes response = new UpdateRes(userProfile, feed, resImages, resTags);

    return response;

  }

  @Transactional
  public void cancelFeed(Integer feedNo) {

    Optional<Feed> optional = feedRepository.findByNo(feedNo);
    Feed feed = validateExist.findFeed(optional);

    feed.deleteFeed();

  }

  public List<FeedRes> showFeedsByRegion(Integer regionNo, Pageable pageable) {

    Page<Feed> feeds = feedRepository.findAllByRegion(regionNo, pageable);


    List<FeedRes> response = new ArrayList<>();

    feeds.stream().forEach(feed -> {
      FeedRes feedRes = getFeedRes(feed);
      response.add(feedRes);
    });

    return response;

  }

  public List<FeedRes> showFeedsById(String userId) {

    Optional<User> userOptional = userRepository.findByUserId(userId);
    User user = validateExist.findUser(userOptional);

    Optional<List<Feed>> feedOptional = feedRepository.findByUser(user);
    List<Feed> feeds = validateExist.findFeeds(feedOptional);

    List<FeedRes> response = new ArrayList<>();

    feeds.stream().forEach(feed -> {
      FeedRes feedRes = getFeedRes(feed);
      response.add(feedRes);
    });

    return response;

  }

  public FeedRes showFeedDetailByNo(Integer feedNo) {

    Optional<Feed> feedOptional = feedRepository.findByNo(feedNo);
    Feed feed = validateExist.findFeed(feedOptional);

    FeedRes feedRes = getFeedRes(feed);

    return feedRes;

  }

  private FeedRes getFeedRes(Feed feed) {

    Optional<List<Image>> imagesOptional = imageRepository.findByFeed(feed);
    List<Image> images = validateExist.findImages(imagesOptional);
    List<String> imgs = new ArrayList<>();

    images.stream().forEach(img -> {
      imgs.add(img.getImgUrl());
    });

    List<ImageFile> resImages = images.stream()
        .map(ImageFile::new).collect(Collectors.toList());

    Optional<List<FeedTag>> feedTagOptional = feedTagRepository.findByFeed(feed);
    List<FeedTag> feedTags = validateExist.findFeedTags(feedTagOptional);
    List<String> resTags = feedTags.stream().map(tag -> tag.getTagNo().getTagName())
        .collect(Collectors.toList());

    Optional<UserProfile> profileOptional = userProfileRepository.findByUser(feed.getUser());
    UserProfile userProfile = validateExist.findUserProfile(profileOptional);

    FeedRes feedRes = new FeedRes(userProfile, feed, resTags);
    feedRes.setImages(imgs);
    return feedRes;

  }

  public List<FeedRes> searchFeeds(SearchDto searchDto) {

    List<Feed> feeds = customFeedRepository.search(searchDto);

    List<FeedRes> response = new ArrayList<>();

    feeds.stream().forEach(feed -> {
      FeedRes feedRes = getFeedRes(feed);
      response.add(feedRes);
    });

    return response;

  }

}

