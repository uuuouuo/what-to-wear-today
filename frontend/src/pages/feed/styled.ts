import styled from '@emotion/styled';

const FeedLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 854px;
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.15));
  background-image: linear-gradient(135deg, #ad6bff 0%, #74bcf7 100%);
`;

const FeedHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  padding: 0 1vw 0 1vw;
`;

const FeedNavbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid green;
  height: 10vh;
`;

const FeedFilter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border: 1px solid purple;
  height: 5vh;
`;

const FeedContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border: 1px solid orange;
  height: 75vh;
  word-break: break-all;
  background-color: white;
`;

export default { FeedLayout, FeedHeader, FeedNavbar, FeedFilter, FeedContent };
