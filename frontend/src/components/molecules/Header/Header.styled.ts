import styled from '@emotion/styled';
import { Heading as BaseHeading } from '@/components/atoms';

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1vh;
  background-image: linear-gradient(135deg, #ad6bff 0%, #74bcf7 100%);
`;

const LeftSide = styled.div`
  text-align: center;
  width: 10vw;
`;

const RightSide = styled.div`
  text-align: center;
  width: 10vw;
`;

const Heading = styled(BaseHeading)`
  display: flex;
  height: 30px;
  align-items: center;
`;

export default { Header, LeftSide, RightSide, Heading };
