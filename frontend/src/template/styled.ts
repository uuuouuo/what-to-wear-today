import styled from '@emotion/styled';
import { MainContainer as BaseMainContainer } from '@/components/atoms';

const MainContainer = styled(BaseMainContainer)`
  padding-top: 0;
`;

const FeedNavbar = styled.div`
  background-color: #fff;
`;

const FeedContent = styled.div`
  flex: 1;
  background-color: #efefef;
  overflow: auto;
  padding: 3vw;
  display: flex;
  flex-direction: column;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export default { MainContainer, FeedNavbar, FeedContent };
