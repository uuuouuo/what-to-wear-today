import styled from '@emotion/styled';
import { MainContainer as BaseMainContainer } from '@/components/atoms';

const MainContainer = styled(BaseMainContainer)`
  text-align: center;
  justify-content: start;
`;

const ProfileContainer = styled.div`
  margin: 45px 20px 30px;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  /* transform: translateY(-5vh); */
  /* margin: 5vh; */
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  width: 100%;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentContainer = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default { MainContainer, ProfileContainer, RowContainer, ColumnContainer, ContentContainer };
