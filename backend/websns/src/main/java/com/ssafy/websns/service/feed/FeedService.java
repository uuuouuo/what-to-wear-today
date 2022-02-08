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
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

  private ValidateExist validateExist = new ValidateExist();

//  private FeedService(FeedRepository feedRepository,ImageRepository imageRepository, RegionRepository regionRepository,
//      UserRepository userRepository, TagListRepository tagListRepository){
//    this.feedRepository = feedRepository;
//    this.imageRepository = imageRepository;
//    this.regionRepository = regionRepository;
//    this.tagListRepository = tagListRepository;
//    this.userRepository = userRepository;
//  }

  @Transactional
  public FeedRes postFeed(CreateReq request) {

    Feed feed = new Feed();
    Region region = regionRepository.findByRegionNameContaining(request.getRegion()).get(0);
    User user = userRepository.findByUserId(request.getUserId()); // 리팩토링 *

    feed.createFeed(user, request.getContent(), region,
        request.getPhotoDate(), request.getWeather(), request.getPrivateMode(),
        request.getDeleteMode());

    Feed savedFeed = feedRepository.save(feed);

    List<Image> imageNames = request.getImageNames().stream()
        .map(image -> new Image(image, feed))
        .collect(Collectors.toList());

    List<Image> savedImages = imageRepository.saveAll(imageNames);

    List<String> feedTags = request.getTags();
    List<FeedTag> tags = new ArrayList<>();

    feedTags.stream().forEach(tag -> {
      Optional<Tag> byTagName = tagRepository.findByTagName(tag);
      if(byTagName.isEmpty()){
        Tag saveTag = tagRepository.save(new Tag(tag));
        FeedTag save = feedTagRepository.save(new FeedTag(savedFeed, saveTag));
        tags.add(save);
      }
      else{
        FeedTag save = feedTagRepository.save(new FeedTag(savedFeed, byTagName.get()));
        tags.add(save);
      }
    });



    List<CreateImage> resImages = savedImages.stream()
        .map(CreateImage::new).collect(Collectors.toList());

    List<String> resTags = tags.stream().map(tag -> tag.getTagNo().getTagName())
        .collect(Collectors.toList());

    FeedRes response = new FeedRes(feed, resImages,resTags);

    return response;

  }

  @Transactional
  public UpdateRes editFeed(Integer feedNo, UpdateReq request) {

    Optional<Feed> optional = feedRepository.findByNo(feedNo);

    // 피드 정보 찾기
    Feed feed = validateExist.findFeedByNo(optional);
    // 피드에 수정된 지역 정보 찾기
    Region region = regionRepository.findByRegionNameContaining(request.getRegion()).get(0);

    // 수정된 내용 저장
    feed.updateFeed(request.getContent(), region, request.getPhotoDate(),
        request.getWeather(), request.getPrivateMode());

    // 원래 이미지 삭제
    imageRepository.deleteByFeed(feed);
    feedTagRepository.deleteFeedTagByFeed(feed);

    // 수정된 이미지 이름 리스트
    List<Image> imageNames = request.getImageNames().stream().
        map(image -> new Image(image, feed)).collect(Collectors.toList());

    // 수정된 이미지 저장
    List<Image> savedImages = imageRepository.saveAll(imageNames);

    List<String> feedTags = request.getTags();
    List<FeedTag> tags = new ArrayList<>();

    feedTags.stream().forEach(tag -> {
      Optional<Tag> byTagName = tagRepository.findByTagName(tag);
      if(byTagName.isEmpty()){
        Tag saveTag = tagRepository.save(new Tag(tag));
        FeedTag save = feedTagRepository.save(new FeedTag(feed, saveTag));
        tags.add(save);
      }
      else{
        FeedTag save = feedTagRepository.save(new FeedTag(feed, byTagName.get()));
        tags.add(save);
      }
    });

    List<CreateImage> resImages = savedImages.stream()
        .map(CreateImage::new).collect(Collectors.toList());

    List<String> resTags = tags.stream().map(tag -> tag.getTagNo().getTagName())
        .collect(Collectors.toList());

    // response DTO 에 담기
    UpdateRes response = new UpdateRes(feed, resImages,resTags);

    return response;

  }

  public void cancelFeed(Integer feedNo) {

    Optional<Feed> optional = feedRepository.findByNo(feedNo);
    Feed feed = validateExist.findFeedByNo(optional);

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

//  public List<FeedRes> showFeeds(Integer regionNo) {
//
//    Optional<List<Feed>> optional = feedRepository.findAllByRegion(regionNo);
//    List<Feed> feeds = validateExist.findFeeds(feeds);
//
//    List<FeedRes> response = new ArrayList<>();
//
//    feeds.stream().forEach(feed -> {
//      Optional<List<Image>> imagesOptional = imageRepository.findByFeed(feed);
//      List<CreateImage> resImages = validateExist.findImages(imagesOptional).stream()
//          .map(CreateImage::new).collect(Collectors.toList());
//
//      FeedRes feedRes = new FeedRes(feed, resImages);
//
//      response.add(feedRes);
//    });
//
//    return response;
//
//  }

  public List<FeedRes> showFeedsWithPage(Integer regionNo, Pageable pageable) {

    Page<Feed> feeds = feedRepository.findAllByRegion(regionNo,pageable);

    List<FeedRes> response = new ArrayList<>();

//    Page<FeedRes> resPage;

    feeds.stream().forEach(feed -> {
      Optional<List<Image>> imagesOptional = imageRepository.findByFeed(feed);
      List<CreateImage> resImages = validateExist.findImages(imagesOptional).stream()
          .map(CreateImage::new).collect(Collectors.toList());

      Optional<List<FeedTag>> allByFeed = feedTagRepository.findAllByFeed(feed);
      List<String> resTags = null;
      if(allByFeed.isPresent()){
        resTags = allByFeed.get().stream().map(tag -> tag.getTagNo().getTagName())
            .collect(Collectors.toList());
      }

      FeedRes feedRes = new FeedRes(feed, resImages, resTags);

      response.add(feedRes);
    });

//    Page<FeedRes> pageRes = new PageImpl<User>(response);

    return response;

  }

}

