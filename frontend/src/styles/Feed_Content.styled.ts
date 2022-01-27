import styled from '@emotion/styled';

const Feed_Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 100%;
`;

const Feed_Content_Top = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
`;

const Feed_Content_Bottom = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 100%;
`;

const Feed_Content_User = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
`;

export default { Feed_Content, Feed_Content_Top, Feed_Content_Bottom, Feed_Content_User };
