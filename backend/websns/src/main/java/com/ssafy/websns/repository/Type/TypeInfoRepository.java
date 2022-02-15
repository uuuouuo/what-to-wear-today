package com.ssafy.websns.repository.Type;


import com.ssafy.websns.model.entity.type.Type;
import com.ssafy.websns.model.entity.type.TypeInfo;
import com.ssafy.websns.model.entity.user.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeInfoRepository extends JpaRepository<TypeInfo,Integer> {

  void deleteByUser(User user);
  List<Type> findByUser(User user);

}
