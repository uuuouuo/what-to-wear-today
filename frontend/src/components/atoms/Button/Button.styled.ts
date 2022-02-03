import styled from '@emotion/styled';

interface Props {
  theme: {
    bgColor: string;
  };
}

const Button = styled('button')<Props>`
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.bgColor};
`;

export default { Button };
