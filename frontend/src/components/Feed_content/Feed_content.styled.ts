import styled from '@emotion/styled';

const Feed_content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 100%;
`;

const Feed_content_top = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
`;

const Feed_content_bottom = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 100%;
`;

const Feed_content_user = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
`;

export default { Feed_content, Feed_content_top, Feed_content_bottom, Feed_content_user };
