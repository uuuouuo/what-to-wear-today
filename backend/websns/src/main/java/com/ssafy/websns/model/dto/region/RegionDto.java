package com.ssafy.websns.model.dto.region;

import com.ssafy.websns.model.entity.region.Region;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class RegionDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class CreateRegionReq {

    private String name;
    private Integer pointCode;

    public CreateRegionReq(String name, Integer pointCode) {
      this.name = name;
      this.pointCode = pointCode;
    }

  }

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class UpdateRegionReq {

    private List<String> regions;

    public UpdateRegionReq(List<String> regions) {
      this.regions = regions;
    }

  }

  @Getter
  public static class UpdateRegionRes {

    private List<Region> interestRegions;

    public UpdateRegionRes(List<Region> interestRegions) {
      this.interestRegions = interestRegions;
    }

  }

}
