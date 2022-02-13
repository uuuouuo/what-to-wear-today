package com.ssafy.websns.service.feed;

import com.ssafy.websns.model.dto.feed.LikePersonDto.LikePersonRes;
import com.ssafy.websns.model.entity.feed.Feed;
import com.ssafy.websns.model.entity.feed.LikePerson;
import com.ssafy.websns.model.entity.user.User;
import com.ssafy.websns.repository.feed.FeedRepository;
import com.ssafy.websns.repository.feed.LikePersonRepository;
import com.ssafy.websns.repository.user.UserRepository;
import com.ssafy.websns.service.validation.ValidateExist;
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

  private ValidateExist validateExist = new ValidateExist();

  @Transactional
  public LikePersonRes createLikeFeed(String userId, Integer feedNo) {

    Optional<User> userOptional = userRepository.findByUserId(userId);
    User user = validateExist.findUser(userOptional);

    Optional<Feed> feedOptional = feedRepository.findByNo(feedNo);
    Feed feed = validateExist.findFeed(feedOptional);

    LikePerson likePerson = new LikePerson();
    likePerson.createLikePerson(user, feed);
    likePersonRepository.save(likePerson);

    LikePersonRes response = new LikePersonRes(likePerson.getNo(),
        likePerson.getUser().getNo(), likePerson.getFeed().getNo());

    return response;

  }

}
