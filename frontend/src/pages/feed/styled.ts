import styled from '@emotion/styled';

const FeedLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.15));
  background-image: linear-gradient(135deg, #ad6bff 0%, #74bcf7 100%);
`;

const FeedNavbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid green;
`;

const FeedFilter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  border: 1px solid purple;
`;

const FeedContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid orange;
  word-break: break-all;
  background-color: white;
  overflow: auto;
`;

export default { FeedLayout, FeedNavbar, FeedFilter, FeedContent };
