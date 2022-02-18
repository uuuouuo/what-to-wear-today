"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/core"
const core_namespaceObject = require("@emotion/core");
;// CONCATENATED MODULE: external "emotion-reset"
const external_emotion_reset_namespaceObject = require("emotion-reset");
var external_emotion_reset_default = /*#__PURE__*/__webpack_require__.n(external_emotion_reset_namespaceObject);
;// CONCATENATED MODULE: ./src/styles/global.tsx




const GlobalStyle = ()=>/*#__PURE__*/ jsx_runtime_.jsx(core_namespaceObject.Global, {
        styles: core_namespaceObject.css`
      ${(external_emotion_reset_default())}

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
        letter-spacing: 0.08rem;
      }

      a {
        text-decoration: none;
        color: currentColor;
      }

      button {
        cursor: pointer;
      }
    `
    })
;
/* harmony default export */ const global = (GlobalStyle);

// EXTERNAL MODULE: ./src/store/configureStore.ts + 16 modules
var configureStore = __webpack_require__(2460);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(global, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (configureStore/* default.withRedux */.Z.withRedux(MyApp));


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 6537:
/***/ ((module) => {

module.exports = require("redux-saga");

/***/ }),

/***/ 6477:
/***/ ((module) => {

module.exports = require("redux-saga/effects");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [173,979,460], () => (__webpack_exec__(7057)));
module.exports = __webpack_exports__;

})();