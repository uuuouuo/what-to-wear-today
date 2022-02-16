package com.ssafy.websns.controller;

import com.ssafy.websns.model.dto.feed.CommentDto.CommentRes;
import com.ssafy.websns.model.dto.feed.FeedDto.CreateReq;
import com.ssafy.websns.model.dto.feed.FeedDto.FeedDetailRes;
import com.ssafy.websns.model.dto.feed.FeedDto.FeedReq;
import com.ssafy.websns.model.dto.feed.FeedDto.FeedRes;
import com.ssafy.websns.model.dto.feed.FeedDto.SearchDto;
import com.ssafy.websns.model.dto.feed.FeedDto.UpdateReq;
import com.ssafy.websns.model.dto.feed.FeedDto.UpdateRes;
import com.ssafy.websns.service.feed.CommentService;
import com.ssafy.websns.service.feed.FeedService;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/feed")
@RequiredArgsConstructor
public class FeedController {

  private final FeedService feedService;
  private final CommentService commentService;

  @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
  public ResponseEntity<FeedRes> createFeed(
      @RequestPart(value="request") FeedReq request,
      @RequestPart(value="imageNames")List<MultipartFile> images){

    CreateReq createReq = new CreateReq(request,images);

    FeedRes response = feedService.postFeed(createReq);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @PutMapping("/{feedNo}")
  public ResponseEntity<UpdateRes> updateFeed(@PathVariable("feedNo") Integer feedNo,
      @RequestBody UpdateReq request) {

    UpdateRes response = feedService.editFeed(feedNo, request);
    return new ResponseEntity<>(response, HttpStatus.OK);

  }

  @DeleteMapping("/{feedNo}")
  public void deleteFeed(@PathVariable("feedNo") Integer feedNo) {

    feedService.cancelFeed(feedNo);

  }

  @GetMapping("/{regionNo}")
  public ResponseEntity<Page<FeedRes>> findFeedsByRegion(@PathVariable("regionNo") Integer regionNo, @PageableDefault(size = 20) Pageable pageable) {

    List<FeedRes> feeds = feedService.showFeedsByRegion(regionNo, pageable);
    Page<FeedRes> pageRes = new PageImpl<>(feeds, pageable, feeds.size());

    return new ResponseEntity<>(pageRes, HttpStatus.OK);

  }

  @GetMapping("/details/{feedNo}")
  public ResponseEntity<FeedDetailRes> showFeedByNo(@PathVariable("feedNo") Integer feedNo) {

    FeedRes feed = feedService.showFeedDetailByNo(feedNo);
    List<CommentRes> comments = commentService.searchComments(feedNo);

    FeedDetailRes feedDetails = new FeedDetailRes(feed,comments);

    return new ResponseEntity<>(feedDetails, HttpStatus.OK);

  }

  @GetMapping("/mypage")
  public ResponseEntity<List<FeedRes>> showFeedById(@RequestParam String userId) {

    List<FeedRes> feedRes = feedService.showFeedsById(userId);

    return new ResponseEntity<>(feedRes, HttpStatus.OK);

  }


  @GetMapping
  public ResponseEntity<Page<FeedRes>> searchFeed(
      @RequestParam(value="tag") String[] tag,
      @RequestParam(value = "startDate") String startDate,
      @RequestParam(value = "endDate") String endDate,
      @RequestParam(value = "region") String region,
      @RequestParam(value = "temperature") String temperature,
      @PageableDefault(size = 20) Pageable pageable) {


    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.M.d.HH:mm");
    LocalDateTime startDateTime = LocalDateTime.parse(startDate, formatter);
    LocalDateTime endDateTime = LocalDateTime.parse(endDate, formatter);

    SearchDto searchDto = new SearchDto();

    searchDto.create(Arrays.asList(tag),startDateTime,endDateTime,region,temperature);
    List<FeedRes> feeds = feedService.searchFeeds(searchDto, pageable);
    Page<FeedRes> pageRes = new PageImpl<>(feeds, pageable, feeds.size());

    return new ResponseEntity<>(pageRes,HttpStatus.OK);

  }

}

