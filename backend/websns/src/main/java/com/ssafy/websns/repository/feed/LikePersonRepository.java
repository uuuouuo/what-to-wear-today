package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.LikePerson;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikePersonRepository extends JpaRepository<LikePerson, Integer> {

}
