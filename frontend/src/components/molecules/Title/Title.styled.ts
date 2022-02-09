import styled from '@emotion/styled';
import { Text as BaseText } from '@/components/atoms';

const Text = styled(BaseText)`
  font-weight: 500;
  letter-spacing: 0.7rem;
  filter: drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.15));
`;

export default { Text };
