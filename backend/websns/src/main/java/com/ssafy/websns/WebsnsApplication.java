package com.ssafy.websns;


import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class WebsnsApplication {

  public static void main(String[] args) throws IOException {

    SpringApplication.run(WebsnsApplication.class, args);
  }

}