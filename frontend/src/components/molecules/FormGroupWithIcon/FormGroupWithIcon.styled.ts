import styled from '@emotion/styled';
import { Label as BaseLabel } from '@/components/atoms';

const FormGroupWithIcon = styled.div`
  padding: 2vh;
`;

const Label = styled(BaseLabel)`
  display: flex;
  align-items: center;
`;

export default { FormGroupWithIcon, Label };
