package com.ssafy.websns.model.dto.faq;

import com.ssafy.websns.model.entity.faq.Faq;
import lombok.Data;

public class FaqDto {

  @Data
  public static class FaqRes{
    Integer faqNo;
    String subject;
    String content;

    public void create(Faq faq) {
      this.faqNo = faq.getNo();
      this.subject = faq.getSubject();
      this.content = faq.getContent();
    }
  }
}
