import styled from '@emotion/styled';

const NotificationContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const UserImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const Notification = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 0.5vh 0;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const UserName = styled.a`
  font-weight: bold;
`;

export default {
  NotificationContainer,
  UserImageContainer,
  Notification,
  ContentContainer,
  UserName,
};
