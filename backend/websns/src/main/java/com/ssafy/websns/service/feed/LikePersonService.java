package com.ssafy.websns.service.feed;

import com.ssafy.websns.model.dto.feed.LikePersonDto.LikePeopleRes;
import com.ssafy.websns.model.dto.feed.LikePersonDto.LikePersonRes;
import com.ssafy.websns.model.dto.user.UserProfileDto.UserProfileRes;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.FeedLikeCnt;
import com.ssafy.websns.model.entity.feed.LikePerson;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.model.entity.user.UserProfile;
import com.ssafy.websns.repository.feed.FeedLikeCntRepository;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.feed.LikePersonRepository;
import com.ssafy.websns.repository.user.UserProfileRepository;
import com.ssafy.websns.repository.user.UserRepository;
import com.ssafy.websns.service.validation.ValidateExist;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LikePersonService {

  private final LikePersonRepository likePersonRepository;
  private final FeedRepository feedRepository;
  private final UserRepository userRepository;
  private final UserProfileRepository userProfileRepository;
  private final FeedLikeCntRepository feedLikeCntRepository;

  private ValidateExist validateExist = new ValidateExist();

  @Transactional
  public LikePersonRes createLike(String userId, Integer feedNo) {

    Optional<User> userOptional = userRepository.findByUserId(userId);
    User user = validateExist.findUser(userOptional);

    Optional<Feed> feedOptional = feedRepository.findByNo(feedNo);
    Feed feed = validateExist.findFeed(feedOptional);

    FeedLikeCnt feedLikeCnt = feedLikeCntRepository.findByFeed(feed);
    feedLikeCnt.increaseFeedLikeCnt();

    LikePerson likePerson = new LikePerson();
    likePerson.createLikePerson(user, feed);
    likePersonRepository.save(likePerson);

    LikePersonRes response = new LikePersonRes(likePerson, feedLikeCnt.getLikeCnt());

    return response;

  }

  @Transactional
  public Integer cancelLike(Integer likeNo) {

    Optional<LikePerson> optional = likePersonRepository.findByNo(likeNo);
    LikePerson likePerson = validateExist.findLike(optional);

    FeedLikeCnt feedLikeCnt = feedLikeCntRepository.findByFeed(likePerson.getFeed());
    feedLikeCnt.decreaseFeedLikeCnt();

    Integer likeCnt = feedLikeCnt.getLikeCnt();
    if(likeCnt < 0) {
      likeCnt = 0;
    }
    return likeCnt;

  }

  public LikePeopleRes showLikePeople(Integer feedNo) {

    Optional<Feed> feedOptional = feedRepository.findByNo(feedNo);
    Feed feed = validateExist.findFeed(feedOptional);
    FeedLikeCnt feedLikeCnt = feedLikeCntRepository.findByFeed(feed);
    List<UserProfileRes> userProfiles = getUserProfiles(feed);

    LikePeopleRes response = new LikePeopleRes(userProfiles, feedLikeCnt.getLikeCnt());

    return response;

  }

  private List<UserProfileRes> getUserProfiles(Feed feed) {

    Optional<List<LikePerson>> optional = likePersonRepository.findByFeed(feed);

    List<LikePerson> likePeople;
    List<UserProfileRes> userProfiles = new ArrayList<>();

    if(optional.isPresent()) {
      likePeople = optional.get();

      if(!likePeople.isEmpty()) {
        likePeople.stream().forEach(likePerson -> {
          User user = likePerson.getUser();
          Optional<UserProfile> userProfileOptional = userProfileRepository.findByUser(user);
          UserProfile userProfile = validateExist.findUserProfile(userProfileOptional);
          userProfiles.add(new UserProfileRes(userProfile));
        });
      }
    }

    return userProfiles;

  }

}
