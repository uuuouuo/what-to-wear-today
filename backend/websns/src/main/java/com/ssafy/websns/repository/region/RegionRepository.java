package com.ssafy.websns.repository.region;

import com.ssafy.websns.model.entity.region.Region;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegionRepository extends JpaRepository<Region,Integer> {

  Region findByRegionName(String regionName);

  Region findByPointCode(Integer pointCode);

  List<Region> findBy();
}
