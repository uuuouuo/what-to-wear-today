package com.ssafy.websns.model.dto.type;

import com.ssafy.websns.model.entity.type.Type;
import lombok.Getter;

public class TypeDto {

  @Getter
  public static class TypeRes {
    private Integer no;
    private String constitution;
    private String description;

    public TypeRes(Type type) {
      this.no = type.getNo();
      this.constitution = type.getConstitution();
      this.description = type.getDescription();
    }

  }

}
