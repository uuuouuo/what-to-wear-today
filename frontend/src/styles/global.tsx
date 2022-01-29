import React from 'react';
import { Global, css } from '@emotion/core';
import reset from 'emotion-reset';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}

      @font-face {
        font-family: 'IBMPlexSansKR';
        src: url('/fonts/IBMPlexSansKR/IBMPlexSansKR-Regular.ttf');
      }

      html {
        font-size: 16px;
        margin: 0 auto;
      }

      body {
        font-family: 'IBMPlexSansKR';
      }

      a {
        text-decoration: none;
        color: currentColor;
      }

      button {
        cursor: pointer;
      }
    `}
  />
);

export default GlobalStyle;
