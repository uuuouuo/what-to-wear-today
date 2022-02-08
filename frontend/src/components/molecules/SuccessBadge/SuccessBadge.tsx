import React, { FunctionComponent } from 'react';
import Styled from './SuccessBadge.styled';

interface Props {
  className?: string;
}

const SuccessBadge: FunctionComponent<Props> = ({ className }) => {
  return (
    <Styled.Action>
      <Styled.Trophy>
        <svg fill="#FFD600" width="100%" height="100%" viewBox="0 0 24 24">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
        </svg>
      </Styled.Trophy>
      <div className="common confetti"></div>
      <div className="common confetti two"></div>
      <div className="common confetti three"></div>
      <div className="common confetti four"></div>
      <div className="common confetti--purple"></div>
      <div className="common confetti--purple two"></div>
      <div className="common confetti--purple three"></div>
      <div className="common confetti--purple four"></div>
    </Styled.Action>
  );
};

export default SuccessBadge;
