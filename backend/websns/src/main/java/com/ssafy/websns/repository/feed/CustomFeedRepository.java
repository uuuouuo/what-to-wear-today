package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Feed;
import java.util.List;

public interface CustomFeedRepository {

  public List<Feed> search(SearchCondition searchCondtion);

}
