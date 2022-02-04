package com.ssafy.websns.repository.region;

import static org.assertj.core.api.Assertions.assertThat;

import com.ssafy.websns.model.entity.region.Region;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
class RegionRepositoryTest {

  @Autowired RegionRepository regionRepository;

  @Test
  public void testFind() throws Exception {
    //given
//    Optional<Region> findRegion =
    List<Region> regions = regionRepository.findByRegionNameContaining("서울특별시 관악구 중앙동");

    Region findRegion = null;

    if(regions != null)
      findRegion = regions.get(0);

    //when

    //then
//    assertThat(findRegion).isTrue();
    assertThat(findRegion.getRegionName()).isEqualTo("서울특별시 관악구 중앙동");
//    assertThat(findRegion.get().getPointCode()).isEqualTo(273);

  }

}