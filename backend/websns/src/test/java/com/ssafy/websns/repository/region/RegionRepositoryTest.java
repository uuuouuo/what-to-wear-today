package com.ssafy.websns.repository.region;

import static org.assertj.core.api.Assertions.assertThat;

import com.ssafy.websns.model.entity.region.Region;
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
    Optional<Region> findRegion = regionRepository.findByRegionNameContaining("경상북도 문경시 점촌1동");
    //when

    //then
    assertThat(findRegion.isPresent()).isTrue();
    assertThat(findRegion.get().getRegionName()).isEqualTo("경상북도 문경시 점촌1동");
    assertThat(findRegion.get().getPointCode()).isEqualTo(273);

  }

}