package com.ssafy.websns.model.dto.feed;

import com.ssafy.websns.model.entity.feed.Image;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.apache.commons.io.IOUtils;

public class ImageDto {

  @Getter
  @NoArgsConstructor(access = AccessLevel.PROTECTED)
  public static class ImageFile {

    private Integer no;
    private String imgUrl;
    private byte[] imgFile;
    private Integer feedNo;

    public CreateImage(Image image) {
      this.no = image.getNo();
      this.imgUrl = image.getImgUrl();
      this.feedNo = image.getFeed().getNo();
      this.imgFile = loadImg(image.getImgUrl());
    }

    public byte[] loadImg(String imgUrl){
      InputStream imageStream = null;
      byte[] imageByteArray = null;
      try {
        imageStream = new FileInputStream(imgUrl);
        imageByteArray = IOUtils.toByteArray(imageStream);
        imageStream.close();

      } catch (FileNotFoundException e) {
        e.printStackTrace();
      } catch (IOException e) {
        e.printStackTrace();
      }

      return imageByteArray;
    }

  }

}
