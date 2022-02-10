import styled from '@emotion/styled';

const DetailPageLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const TopArea = styled.div`
  margin-bottom: 3vh;
`;

const ArticleArea = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  padding: 0vh 0vw 1vh 0vw;
  border-bottom: 1px solid black;
  background-color: rgb(240, 240, 240);
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
  DetailPageLayout,
  ArticleArea,
  UserId,
  ArticleContent,
  TopArea,
  UserInfoArea,
  DateLine,
};
