package com.ssafy.websns.repository.interest;

import com.ssafy.websns.model.entity.interest.Interest;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterestRepository extends JpaRepository<Interest,Integer> {

  Optional<Interest> findByNo(Integer interestNo);
  Optional<Interest> findByInterestName(String interestName);

}
