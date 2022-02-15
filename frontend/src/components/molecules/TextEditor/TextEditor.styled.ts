import styled from '@emotion/styled';

const Container = styled.div`
  filter: drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.15));
`;

const TextEditor = styled.textarea`
  font-family: inherit;
  font-size: 1rem;
  letter-spacing: 1px;
  box-sizing: border-box;
  padding: 1vh;
  line-height: 1.7rem;
  resize: none;
  border: none;

  width: 100%;
  height: 100%;
  overflow-y: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
export default { Container, TextEditor };
