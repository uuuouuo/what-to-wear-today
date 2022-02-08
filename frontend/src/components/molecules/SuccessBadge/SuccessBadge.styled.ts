import styled from '@emotion/styled';

const Action = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 300px;
  height: 25vw;
  max-width: 300px;
  width: 25vw;

  .common {
    z-index: -1;
    position: absolute;
    height: 50px;
    width: 10px;
    border-radius: 10px;
    animation-fill-mode: forwards;
    animation-duration: 0.75s;
    animation-iteration-count: 1;
    transform-origin: center middle;
    opacity: 0;
  }

  .confetti {
    top: 0;
    left: calc(50% - 5px);
    background-color: #ffea00;
    animation-name: fly--up;
    animation-delay: 0.35s;

    &.two {
      top: auto;
      bottom: 0;
      animation-name: fly--down;
    }

    &.three,
    &.four {
      top: calc(50% - 5px);
      left: calc(50% - 25px);
      height: 10px;
      width: 50px;
      animation-name: fly--left;
    }

    &.four {
      animation-name: fly--right;
    }

    &--purple {
      background-color: #6200ea;
      animation-name: fly--up--left;
      transform: rotate(135deg);
      animation-delay: 0.5s;
      left: 20%;
      top: 20%;

      &.two {
        animation-name: fly--up--right;
        left: auto;
        right: 20%;
        transform: rotate(45deg);
      }

      &.three {
        top: auto;
        bottom: 20%;
        transform: rotate(45deg);
        animation-name: fly--down--left;
      }

      &.four {
        top: auto;
        bottom: 20%;
        left: auto;
        right: 20%;
        transform: rotate(135deg);
        animation-name: fly--down--right;
      }
    }
  }

  @keyframes fly--up {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    80% {
      transform: translateY(-20vw);
    }
    100% {
      transform: translateY(-15vw);
      opacity: 0;
    }
  }

  @keyframes fly--down {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    80% {
      transform: translateY(20vw);
    }
    100% {
      transform: translateY(15vw);
      opacity: 0;
    }
  }

  @keyframes fly--left {
    0% {
      transform: translateX(10px);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    80% {
      transform: translateX(-35vw);
    }
    100% {
      transform: translateX(-180px);
      opacity: 0;
    }
  }

  @keyframes fly--right {
    0% {
      transform: translateX(-10px);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    80% {
      transform: translateX(35vw);
    }
    100% {
      transform: translateX(180px);
      opacity: 0;
    }
  }

  @keyframes fly--up--left {
    0% {
      transform: rotate(135deg) translate(0vw, 0vw);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: rotate(135deg) translate(-3vw, 20vw);
      opacity: 0;
    }
  }

  @keyframes fly--up--right {
    0% {
      transform: rotate(45deg);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: rotate(45deg) translate(-3vw, -20vw);
      opacity: 0;
    }
  }

  @keyframes fly--down--left {
    0% {
      transform: rotate(45deg) translate(0vw, 0vw);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: rotate(45deg) translate(-3vw, 20vw);
      opacity: 0;
    }
  }

  @keyframes fly--down--right {
    0% {
      transform: rotate(135deg) translate(0vw, 0vw);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: rotate(135deg) translate(0vw, -20vw);
      opacity: 0;
    }
  }
`;

const Trophy = styled.div`
  z-index: 1;
  background-color: #fff;
  height: 100%;
  width: 100%;
  border-radius: 100%;
  animation: trophy 0.5s 1 forwards;

  @keyframes trophy {
    0% {
      transform: translateY(500px);
      opacity: 0;
    }
    35% {
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default { Action, Trophy };
