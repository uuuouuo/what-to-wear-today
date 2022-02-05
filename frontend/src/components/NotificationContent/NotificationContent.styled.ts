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

export default { NotificationContainer };
