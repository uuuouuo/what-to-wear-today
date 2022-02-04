package com.ssafy.websns.service;

import com.ssafy.websns.model.dto.CreateFeedDto;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.Photo;
import com.ssafy.websns.repository.feed.FeedRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FeedService {

  private final FeedRepository feedRepository;

  public void createFeed(CreateFeedDto request) {

    Feed feed = new Feed();
    feed.createFeed(request.getUser(), request.getContent(), request.getRegion(),request.getCreateAt(), request.getWeather(), request.isPrivateMode());

    List<Photo> photos = new ArrayList<>();
    for (String image : request.getImages()) {
      Photo photo = new Photo();
      photos.add(photo);

    }


  }
}
