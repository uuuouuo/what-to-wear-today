import styled from '@emotion/styled';
import { Button as BaseButton } from '@/components/atoms';

const FeedDetail = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5vh;
  background-color: #fff;
`;

const FeedContent = styled.div`
  width: 100%;
  text-align: left;
  margin: 2.5vh 0;

  & .hashtag {
    border-radius: 0.3rem;
    color: #dd3345;
    background-color: #f4f4f8;
  }
`;

const Button = styled(BaseButton)`
  margin: 0;
  padding: 1vh;
`;

export default {
  FeedDetail,
  FeedContent,
  Button,
};
