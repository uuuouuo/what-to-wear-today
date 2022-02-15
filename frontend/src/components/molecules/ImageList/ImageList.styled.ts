import styled from '@emotion/styled';
import { ImageUpload as BaseImageUpload } from '@/components/molecules';

const SwipeableItem = styled.div``;

const ImageUpload = styled(BaseImageUpload)`
  color: #fff;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 255px;
  background-color: #000;
  z-index: 100;
`;

export default {
  SwipeableItem,
  ImageUpload,
  Container,
};
