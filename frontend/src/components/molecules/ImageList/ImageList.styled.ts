import styled from '@emotion/styled';
import { Button as BaseButton } from '@/components/atoms';
import { ImageUpload as BaseImageUpload } from '@/components/molecules';

const SwipeableItem = styled.div`
  position: relative;
`;

const ImageUpload = styled(BaseImageUpload)`
  color: #fff;
  width: 350px;
  height: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 255px;
  z-index: 100;
`;

const Button = styled(BaseButton)`
  position: absolute;
  top: 0;
  right: 0;
`;

export default {
  SwipeableItem,
  ImageUpload,
  Container,
  Button,
};
