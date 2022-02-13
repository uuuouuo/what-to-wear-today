package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Tag;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag,Integer> {

  Optional<Tag> findByTagName(String tagName);

}
