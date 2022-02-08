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
  margin-bottom: 1vh;
  border-bottom: 1px solid black;
`;

const UserInfoArea = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const UserId = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const ArticleContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border-bottom: 1px solid black;
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
