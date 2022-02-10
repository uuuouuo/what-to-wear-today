import styled from '@emotion/styled';
import {
  MainContainer as BaseMainContainer,
  Heading as Heading,
  Text as BaseText,
  FooterContainer as BaseFooterContainer,
} from '@/components/atoms';

import { KakaoButton as BaseKakaoButton } from 'components/molecules';

const MainContainer = styled(BaseMainContainer)`
  text-align: center;
`;

const LogoContainer = styled(Heading)`
  margin-top: 15vh;
`;

const Title = styled(BaseText)`
  display: block;
  margin-top: 8vh;
  letter-spacing: 0.5rem;
  filter: drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.15));
`;

const KakaoButton = styled(BaseKakaoButton)`
  width: 100%;
  padding: 0;
  margin: 5vh;
`;

export default { MainContainer, LogoContainer, Title, KakaoButton };
