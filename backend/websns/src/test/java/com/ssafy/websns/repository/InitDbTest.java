//package com.ssafy.websns.repository;
//
//import com.ssafy.websns.model.entity.region.Region;
//import com.ssafy.websns.repository.region.RegionRepository;
//import java.util.ArrayList;
//import java.util.List;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.transaction.annotation.Transactional;
//
//@SpringBootTest
//@Transactional
//class InitDbTest {
//
//  @Autowired
//  RegionRepository initDb;
//
//  @Test
//  public void initTest() throws Exception {
//    //given
//    List<Region> regions = new ArrayList<>();
//    Region region = new Region("경상북도 문경시 점촌1동",Integer.parseInt("273"));
//    Region region1 = new Region("경기도 광주시 송정동",Integer.parseInt("202"));
//    Region region2 = new Region("충청남도 천안시 동남구 봉명동",Integer.parseInt("232"));
//    Region region3 = new Region("경기도 성남시 수정구 복정동",Integer.parseInt("108"));
//    Region region4 = new Region("충청남도 논산시 벌곡면",Integer.parseInt("133"));
//    regions.add(region);
//    regions.add(region1);
//    regions.add(region2);
//    regions.add(region3);
//    regions.add(region4);
//
//    //when
//    initDb.save(region);
//    initDb.save(region1);
//    initDb.save(region2);
//    initDb.save(region3);
//    initDb.save(region4);
//
//    List<Region> regions1 = initDb.saveAll(regions);
//    //then
//    for (Region region5 : regions1) {
//      System.out.println(region5.getNo()+" : "+region5.getRegionName() +" : "+region5.getPointCode());
//    }
//  }
//
//}