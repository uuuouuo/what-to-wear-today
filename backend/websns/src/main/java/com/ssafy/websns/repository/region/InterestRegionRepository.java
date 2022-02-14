package com.ssafy.websns.repository.region;

import com.ssafy.websns.model.entity.region.InterestRegion;
import com.ssafy.websns.model.entity.region.Region;
import com.ssafy.websns.model.entity.user.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterestRegionRepository extends JpaRepository<InterestRegion,Integer> {

  List<Region> findByUser(User user);

  void deleteByUser(User user);

}
