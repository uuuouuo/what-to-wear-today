package com.ssafy.websns.repository.feed;

import com.ssafy.websns.model.entity.feed.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhotoRepository extends JpaRepository<Image,Integer> {

}
