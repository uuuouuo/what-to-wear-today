import styled from '@emotion/styled';
import { MainContainer as BaseMainContainer } from '@/components/atoms';

const MainContainer = styled(BaseMainContainer)`
  padding-top: 0;
  background-color: #dedede;
`;

const FeedLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`;

const FeedNavbar = styled.div`
  background-color: #dedede;
`;

const FeedContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  word-break: break-all;
  background-color: white;
  overflow: auto;
`;

export default { MainContainer, FeedLayout, FeedNavbar, FeedContent };
