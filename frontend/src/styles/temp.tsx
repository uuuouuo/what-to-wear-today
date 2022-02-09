import { jsx, css } from '@emotion/react';

const wrapper = css`
  position: relative;
  height: 100%;
`;

const content = css`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 460px;
`;

const box = css`
  display: block;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 14px 10px 14px;
  box-sizing: border-box;
  background: #fff;
  position: relative;
`;

const int = css`
  display: block;
  position: relative;
  width: 100%;
  height: 29px;
  border: none;
  background: #fff;
  font-size: 15px;
`;

const h3 = css`
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
`;

const btnJoin = css`
  width: 100%;
  padding: 21px 0 17px;

  border: 0;
  cursor: pointer;
  color: #fff;
  background-color: #08a600;
  font-size: 20px;
  font-weight: 400;
  font-family: Dotum, '돋움', Helvetica, sans-serif;
  margin: 30px 0 91px;
`;

const cent = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const imgbox = css`
  display: block;
  width: 100%;
  height: 400px;
  border: solid 1px #dadada;
  padding: 10px 14px 10px 14px;
  box-sizing: border-box;
  background: #fff;
  position: relative;
`;

export { wrapper, content, box, int, h3, btnJoin, cent, imgbox };
