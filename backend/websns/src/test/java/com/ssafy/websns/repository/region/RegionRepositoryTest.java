//package com.ssafy.websns.repository.region;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//import com.ssafy.websns.model.entity.region.Region;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.transaction.annotation.Transactional;
//
//@SpringBootTest
//@Transactional
//class RegionRepositoryTest {
//
//  @Autowired RegionRepository regionRepository;
//
//  @Test
//  public void testFind() throws Exception {
//    //given
////    Optional<Region> findRegion =
//    Region region = regionRepository.findByRegionName("서울특별시 관악구 중앙동");
//
//    Region findRegion = null;
//
//    if(region != null)
//      findRegion = region;
//
//    //when
//
//    //then
////    assertThat(findRegion).isTrue();
//    assertThat(findRegion.getRegionName()).isEqualTo("서울특별시 관악구 중앙동");
////    assertThat(findRegion.get().getPointCode()).isEqualTo(273);
//
//  }
//
//}