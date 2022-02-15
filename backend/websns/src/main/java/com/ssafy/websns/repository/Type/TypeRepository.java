package com.ssafy.websns.repository.Type;

import com.ssafy.websns.model.entity.type.Type;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepository extends JpaRepository<Type,Integer> {

  Optional<Type> findByNo(Integer typeNo);

}
