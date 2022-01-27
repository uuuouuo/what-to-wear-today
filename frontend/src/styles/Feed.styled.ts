import styled from '@emotion/styled';

const FeedLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const FeedHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border: 1px solid black;
`;

const FeedNavbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border: 1px solid green;
`;

const FeedFilter = styled.div`
  border: 1px solid purple;
`;

const FeedContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border: 1px solid orange;
`;

export default { FeedLayout, FeedHeader, FeedNavbar, FeedFilter, FeedContent };
