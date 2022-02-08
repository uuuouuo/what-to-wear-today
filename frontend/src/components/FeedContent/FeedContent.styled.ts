import styled from '@emotion/styled';

const Feed_content_box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Feed_content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 2vh 1vw 2vh 1vw;
  border: 1px solid black;
`;

const Feed_content_top = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  width: 100%;
  background: linear-gradient(45deg, #e5deff, #eadbff);
`;

const Feed_content_bottom = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  width: 100%;
  background-color: #d4cef2;
`;

const Feed_content_user = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  margin-left: 2vw;
  font-size: 13px;
`;

const Feed_ArticleArea = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
  margin: 0vh 0vw 0vh 5vw;
`;

const SpaceBetween = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 94%;
  margin-bottom: 1vh;
`;

export default {
  Feed_content_box,
  Feed_content,
  Feed_content_top,
  Feed_content_bottom,
  Feed_content_user,
  Feed_ArticleArea,
  SpaceBetween,
};
