import styled from '@emotion/styled';
import { Text as BaseText } from '@/components/atoms';

const WeatherArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled(BaseText)`
  margin-left: 2vw;
`;

export default { WeatherArea, Text };
