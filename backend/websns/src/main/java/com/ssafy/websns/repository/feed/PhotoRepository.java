package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Photo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhotoRepository extends JpaRepository<Photo,Integer> {

}
