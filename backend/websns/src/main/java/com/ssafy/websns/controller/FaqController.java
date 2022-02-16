package com.ssafy.websns.controller;

import com.ssafy.websns.model.dto.faq.FaqDto.FaqRes;
import com.ssafy.websns.repository.faq.FaqRepository;
import com.ssafy.websns.model.entity.faq.Faq;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/faq")
@RequiredArgsConstructor
public class FaqController {

  private final FaqRepository faqRepository;

  @GetMapping("/{FAQNo}")
  public ResponseEntity<FaqRes> getFaq(@PathVariable("FAQNo") Integer FAQNo){

    Optional<Faq> faqOptional = faqRepository.findByNo(FAQNo);
    FaqRes faqRes = new FaqRes();
    if(faqOptional.isPresent()) {
      Faq faq = faqOptional.get();
      faqRes.create(faq);
    }
    return new ResponseEntity<>(faqRes, HttpStatus.OK);
  }

  @GetMapping
  public ResponseEntity<List<Faq>> getFaqList(){

    List<Faq> faqList = faqRepository.findBy();

    return new ResponseEntity<>(faqList, HttpStatus.OK);
  }

}
