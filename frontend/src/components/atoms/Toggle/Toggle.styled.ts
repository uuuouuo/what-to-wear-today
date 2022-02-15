import styled from '@emotion/styled';

const Toggle = styled.button`
  margin: 0 0.5rem;
  padding: 0;
  position: relative;
  border: none;
  height: 2.5rem;
  width: 5rem;
  border-radius: 2.5rem;
  color: #6b7381;
  background: #bdc1c8;
  font-size: 1.75rem;
  display: inline-block;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  transition: all 0.2s ease-in-out;

  &.active {
    background-color: #000;
  }

  &:before,
  &:after {
    line-height: 2.5rem;
    width: 1rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    position: absolute;
    bottom: 0;
    transition: opacity 0.25s;
    color: #fff;
    left: 0.6875rem;
    width: 3.875rem;
  }

  &:before {
    text-align: right;
    content: 'Off';
  }

  &:after {
    text-align: left;
    opacity: 0;
    content: 'On';
  }

  &.active {
    transition: background-color 0.25s;
    &:before {
      opacity: 0;
    }
    &:after {
      opacity: 1;
    }
  }
`;

const Handle = styled.div`
  position: absolute;
  top: 0.3125rem;
  left: 0.3125rem;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  background: #fff;
  transition: left 0.25s;

  &.active {
    left: 2.8125rem;
  }
`;

export default { Toggle, Handle };
