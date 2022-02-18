import styled from '@emotion/styled';

const NotificationLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  background-color: #dedede;
  padding-top: 3.5vh;
`;

const Container = styled.div`
  overflow-y: auto;
`;

const Delete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fe7b45;
  margin-bottom: 3.5vh;
  padding: 1vh;
  box-sizing: border-box;
`;

export default { NotificationLayout, MainContent, Container, Delete };
