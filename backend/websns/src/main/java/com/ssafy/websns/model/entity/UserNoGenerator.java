package com.ssafy.websns.model.entity;

import java.io.Serializable;
import java.util.Random;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

public class UserNoGenerator implements IdentifierGenerator {

  @Override
  public Serializable generate(SharedSessionContractImplementor session, Object object)
      throws HibernateException {

    String l = String.valueOf(System.currentTimeMillis());
    long seed = System.currentTimeMillis();
    Random rand = new Random(seed);
    int i = rand.nextInt(9000) + 1000;

    return String.valueOf(l) + String.valueOf(i);
  }
}
