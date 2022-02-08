import styled from '@emotion/styled';
import { Heading as Heading } from '@/components/atoms';

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 1vw 0 1vw;
  background-color: rgb(102, 113, 255);
`;

const LeftSide = styled.div`
  text-align: center;
  width: 10vw;
`;

const RightSide = styled.div`
  text-align: center;
  width: 10vw;
`;

const Center = styled(Heading)`
  display: flex;
  height: 30px;
  align-items: center;
`;

export default { Header, LeftSide, RightSide, Center };
