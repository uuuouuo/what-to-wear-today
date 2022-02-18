import styled from '@emotion/styled';

const Notification = styled.div`
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.15));
  background-color: #ffffff;
  display: flex;
  padding: 2vh 2vw;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 3.5vh 3.5vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  margin-left: 1vh;
`;

const UserName = styled.a`
  font-weight: bold;
`;

const Content = styled.div`
  margin-top: 1vh;
  color: #888;
`;

export default {
  Notification,
  ContentContainer,
  UserName,
  Content,
};
