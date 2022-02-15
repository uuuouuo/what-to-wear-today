package com.ssafy.websns.repository.faq;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ssafy.websns.model.entity.faq.Faq;
public interface FaqRepository extends JpaRepository<Faq,Integer> {

  Optional<Faq> findByNo(Integer faqNo);

  List<Faq> findBy();
}
