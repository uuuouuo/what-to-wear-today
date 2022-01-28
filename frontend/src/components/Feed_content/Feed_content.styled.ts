import styled from '@emotion/styled';

const Feed_content_box = styled.div`
  overflow: auto;
`;

const Feed_content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 100%;
  margin: 2vh 1vw 2vh 1vw;
`;

const Feed_content_top = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  background: linear-gradient(45deg, #e5deff, #eadbff);
`;

const Feed_content_bottom = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 100%;
  background-color: #d4cef2;
`;

const Feed_content_user = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
`;

export default {
  Feed_content_box,
  Feed_content,
  Feed_content_top,
  Feed_content_bottom,
  Feed_content_user,
};
