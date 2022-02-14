import styled from '@emotion/styled';
import { Button as BaseButton } from '@/components/atoms';

const Feed = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 2vh 1vw 2vh 1vw;
  padding: 1.5vh;
  background-color: #fff;
  filter: drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.15));
`;

const FeedContent = styled.div`
  width: 100%;
  text-align: left;
  margin: 5vh 0;

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
  Feed,
  FeedContent,
  Button,
};
