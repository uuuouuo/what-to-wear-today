package com.ssafy.websns.repository.region;

import com.ssafy.websns.model.entity.region.Region;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegionRepository extends JpaRepository<Region,Integer> {

  Optional<Region> findByRegionNameContaining(String regionName);

}
