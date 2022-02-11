import styled from '@emotion/styled';

interface Props {
  theme: {
    top: string;
    left: string;
  };
}

const TagList = styled.ul`
  display: none;
  position: absolute;
  border-radius: 0.3rem;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 4px;
  padding: 0;

  top: ${(props: Props) => props.theme.top};
  left: ${(props: Props) => props.theme.left};

  &.show {
    display: block;
  }
`;

const Item = styled.li`
  list-style: none;
  padding: 1vh;
  background-color: #fff;

  &.select {
    background-color: #eee;
  }
`;

export default { TagList, Item };
