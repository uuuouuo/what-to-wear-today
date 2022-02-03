import styled from '@emotion/styled';

interface Props {
  theme: {
    fontSize: string;
    fontWeight: string | number;
  };
}

const Text = styled('span')<Props>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
`;

export default { Text };
