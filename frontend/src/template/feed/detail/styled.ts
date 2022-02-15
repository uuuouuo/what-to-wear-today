import styled from '@emotion/styled';
import { MainContainer as BaseMainContainer } from '@/components/atoms';

const MainContainer = styled(BaseMainContainer)`
  padding-top: 0;
`;

const ArticleArea = styled.div`
  flex: 1;
  background-color: #efefef;
  overflow: auto;
`;

const UserInfoArea = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const UserId = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-left: 1vw;
`;

const ArticleContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin: 1vh 3vw 1vh 3vw;
  padding: 0vh 0vw 1vh 0vw;
`;

const DateLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export default {
  MainContainer,
  ArticleArea,
  UserId,
  ArticleContent,
  UserInfoArea,
  DateLine,
};
