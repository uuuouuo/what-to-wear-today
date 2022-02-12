package com.ssafy.websns.config.oauth.provider;

import com.ssafy.websns.model.entity.user.User;
import org.springframework.context.annotation.Configuration;

@Configuration
public interface ClientProxy {


  public User getUserData(String accessToken);

}
