package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.dto.feed.FeedDto.SearchDto;
import com.ssafy.websns.model.entity.feed.Feed;
import java.util.List;
import org.springframework.data.domain.Pageable;

public interface CustomFeedRepository {

  public List<Feed> search(SearchDto searchCondition, Pageable pageable);

}
