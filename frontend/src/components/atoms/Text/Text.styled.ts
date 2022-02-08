import styled from '@emotion/styled';

interface Props {
  color: string;
  theme: {
    fontSize: string;
    fontWeight: string | number;
  };
}

const Text = styled.span`
  color: ${(props: Props) => props.color};
  font-size: ${(props: Props) => props.theme.fontSize};
  font-weight: ${(props: Props) => props.theme.fontWeight};
`;

export default { Text };
