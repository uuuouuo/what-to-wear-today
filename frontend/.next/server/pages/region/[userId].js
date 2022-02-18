"use strict";
(() => {
var exports = {};
exports.id = 978;
exports.ids = [978];
exports.modules = {

/***/ 6407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _userId_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./src/components/atoms/index.ts + 22 modules
var atoms = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/components/molecules/index.ts + 53 modules
var molecules = __webpack_require__(9205);
;// CONCATENATED MODULE: ./src/template/region/styled.ts



const MainContainer = styled_default()(atoms/* MainContainer */.tz)`
  text-align: center;
  justify-content: start;
`;
const FormGroup = styled_default()(molecules/* FormGroup */.cw)`
  /* filter: drop-shadow(0px -20px 25px rgba(0, 0, 0, 0.05))
    drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.1)); */
  background-color: #fff;
  box-sizing: border-box;
  height: 12vh;
  width: 40vh;
`;
const SearchContainer = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(-5vh);
  margin: 5vh;
  margin-top: 10vh;
`;
const Button = styled_default()(atoms/* Button */.zx)`
  width: 100vw;
  padding: 3vh;
  letter-spacing: 5px;
  box-sizing: border-box;
  height: 12vh;
  width: 3vh;
`;
const RegionBox = (styled_default()).div`
  margin-top: 1vh;
  background-color: #fff;
  height: 5vh;
  width: 30vh;
  border-radius: 5px;
`;
const ColumnContainer = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
/* harmony default export */ const styled = ({
    MainContainer,
    FormGroup,
    SearchContainer,
    Button,
    RegionBox,
    ColumnContainer
});

;// CONCATENATED MODULE: ./src/template/region/index.tsx




const RegionTemplate = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled.MainContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(molecules/* Title */.Dx, {
                value: "관심 지역 설정"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(styled.SearchContainer, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(molecules/* RegionSearch */.BG, {})
            })
        ]
    }));
};
/* harmony default export */ const region = (RegionTemplate);

;// CONCATENATED MODULE: ./src/pages/region/[userId].tsx



const Region = ({ userId  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(region, {}));
};
const getServerSideProps = async ({ params  })=>{
    const data = params.userId;
    return {
        props: {
            userId: data
        }
    };
};
/* harmony default export */ const _userId_ = (Region);


/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 8308:
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ 4984:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddCircle");

/***/ }),

/***/ 3982:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddCircleOutlineOutlined");

/***/ }),

/***/ 3622:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBack");

/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Favorite");

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 5453:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MoreHoriz");

/***/ }),

/***/ 6952:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MoreVert");

/***/ }),

/***/ 1567:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Notifications");

/***/ }),

/***/ 1939:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Person");

/***/ }),

/***/ 276:
/***/ ((module) => {

module.exports = require("@mui/icons-material/RemoveCircle");

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 4731:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Send");

/***/ }),

/***/ 6377:
/***/ ((module) => {

module.exports = require("@mui/icons-material/WbSunny");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 2311:
/***/ ((module) => {

module.exports = require("@mui/material/Autocomplete");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 7307:
/***/ ((module) => {

module.exports = require("@mui/material/BottomNavigationAction");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8369:
/***/ ((module) => {

module.exports = require("@mui/material/Chip");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 9404:
/***/ ((module) => {

module.exports = require("@mui/material/DialogActions");

/***/ }),

/***/ 1094:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContent");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("@mui/material/DialogContentText");

/***/ }),

/***/ 2468:
/***/ ((module) => {

module.exports = require("@mui/material/DialogTitle");

/***/ }),

/***/ 7898:
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 8261:
/***/ ((module) => {

module.exports = require("@mui/material/MobileStepper");

/***/ }),

/***/ 9564:
/***/ ((module) => {

module.exports = require("@mui/material/Modal");

/***/ }),

/***/ 8742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 1307:
/***/ ((module) => {

module.exports = require("@mui/material/Tab");

/***/ }),

/***/ 8544:
/***/ ((module) => {

module.exports = require("@mui/material/Tabs");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9062:
/***/ ((module) => {

module.exports = require("javascript-time-ago");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 9980:
/***/ ((module) => {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2770:
/***/ ((module) => {

module.exports = require("swiper");

/***/ }),

/***/ 3630:
/***/ ((module) => {

module.exports = require("swiper/react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,594,173,216], () => (__webpack_exec__(6407)));
module.exports = __webpack_exports__;

})();