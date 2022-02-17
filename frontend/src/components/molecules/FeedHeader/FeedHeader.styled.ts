import styled from '@emotion/styled';

const FeedHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1vh;
`;

const Container = styled.div`
  display: flex;
`;

const MoreButtonContainer = styled.div`
  position: relative;
  margin-left: 1vw;
`;

const MoreContent = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  bottom: -7vh;
  border: 2px solid #ccc;
  padding: 1vh;
  background-color: #fff;

  &::before {
    content: '';
    border-top: 2px solid #ccc;
    border-left: 2px solid #ccc;
    position: absolute;
    top: -7px;
    right: 1vh;
    width: 10px;
    height: 10px;
    background-color: #fff;
    transform: rotate(45deg);
  }

  & button {
    padding: 1vw;
    width: 10vw;
  }
`;

export default { FeedHeader, Container, MoreButtonContainer, MoreContent };
