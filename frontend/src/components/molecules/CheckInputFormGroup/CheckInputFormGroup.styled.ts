import styled from '@emotion/styled';
import { Label } from '@/components/atoms';

const CheckInputFormGroup = styled(Label)`
  padding: 2vh;
  cursor: pointer;

  &.checked {
    background-color: #000 !important;
    color: #fff;
  }
`;

export default { CheckInputFormGroup };
