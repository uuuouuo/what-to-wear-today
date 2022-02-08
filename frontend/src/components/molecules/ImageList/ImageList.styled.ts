import styled from '@emotion/styled';

const ImageList = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ImageContainer = styled.div`
  flex: 1 0 100%;
  margin: 0 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default { ImageList, ImageContainer };
