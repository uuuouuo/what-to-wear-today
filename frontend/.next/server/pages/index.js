"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
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
;// CONCATENATED MODULE: ./src/template/styled.ts


const MainContainer = styled_default()(atoms/* MainContainer */.tz)`
  padding-top: 0;
`;
const FeedNavbar = (styled_default()).div`
  background-color: #fff;
`;
const FeedContent = (styled_default()).div`
  flex: 1;
  background-color: #efefef;
  overflow: auto;
  padding: 3vw;
  display: flex;
  flex-direction: column;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
/* harmony default export */ const styled = ({
    MainContainer,
    FeedNavbar,
    FeedContent
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/action/feedsAction.ts
var feedsAction = __webpack_require__(2967);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(3206);
// EXTERNAL MODULE: ./src/components/molecules/index.ts + 53 modules
var molecules = __webpack_require__(9205);
// EXTERNAL MODULE: ./src/components/organisms/index.ts + 8 modules
var organisms = __webpack_require__(2762);
;// CONCATENATED MODULE: ./src/template/index.tsx






// key값 env에 넣기



const interestRegions = [
    {
        no: 1,
        regionName: 'seoul',
        weather: '맑음'
    },
    {
        no: 2,
        regionName: 'gwangju',
        weather: '맑음'
    },
    {
        no: 3,
        regionName: 'ahnyang',
        weather: '맑음'
    },
    {
        no: 4,
        regionName: 'daejeon',
        weather: '맑음'
    },
    {
        no: 5,
        regionName: 'busan',
        weather: '맑음'
    }, 
];
const Home = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { feeds , loadFeedsLoading  } = (0,external_react_redux_.useSelector)((state)=>state.feeds
    );
    const { 0: pageNum , 1: setPageNum  } = (0,external_react_.useState)(2);
    const viewport = (0,external_react_.useRef)(null);
    const target = (0,external_react_.useRef)(null);
    const { 0: region , 1: setRegion  } = (0,external_react_.useState)('');
    const getTime = ()=>{
        const today = new Date();
        const year = today.getFullYear();
        const month = `0${today.getMonth() + 1}`.slice(-2);
        const day = `0${today.getDate()}`.slice(-2);
        const hours = `0${today.getHours()}`.slice(-2);
        const minutes = `0${today.getMinutes()}`.slice(-2);
        const datetime = `${year}.${month}.${day}.${hours}:${minutes}`;
        return datetime;
    };
    (0,external_react_.useEffect)(()=>{
        if (navigator) {
            navigator.geolocation.getCurrentPosition((position)=>{
                const { latitude  } = position.coords;
                const { longitude  } = position.coords;
                external_axios_default()({
                    method: 'get',
                    url: `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`,
                    headers: {
                        Authorization: `${config/* KAKAO_MAP_APIKEY */.BE}`
                    }
                }).then((response)=>setRegion(response.data.documents[1].address_name)
                );
            });
        }
        if (region) {
            external_axios_default()({
                method: 'get',
                url: `https://localhost:8080/weather`,
                params: {
                    region,
                    date: getTime()
                }
            });
        }
        console.log(feeds);
    }, []);
    (0,external_react_.useEffect)(()=>{
        const options = {
            root: viewport.current,
            threshold: 0.3
        };
        const handleIntersection = (entries, observer)=>{
            entries.forEach((entry)=>{
                if (entry.intersectionRatio > 0.6) {
                    return;
                }
                if (!entry.isIntersecting && !loadFeedsLoading) {
                    return;
                }
                if (!loadFeedsLoading) {
                    dispatch({
                        type: feedsAction/* LOAD_FEEDS_REQUEST */.P$,
                        regionNo: pageNum
                    });
                    // 유저의 지역 값 불러와 적용해야함
                    setPageNum(pageNum + 1);
                    observer.unobserve(entry.target);
                }
            });
        };
        const io = new IntersectionObserver(handleIntersection, options);
        if (target.current) {
            io.observe(target.current);
        }
        return ()=>io && io.disconnect()
        ;
    }, [
        viewport,
        target,
        loadFeedsLoading,
        feeds
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled.MainContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(molecules/* Header */.h4, {
                leftSide: "logo",
                name: "오늘 뭐 입지?",
                rightSide: "notification"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(styled.FeedNavbar, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(molecules/* FeedRegion */.ye, {
                    interestRegions: interestRegions
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(styled.FeedContent, {
                ref: viewport,
                children: feeds.map((feed, idx)=>{
                    const lastEl = idx === feeds.length - 1;
                    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: lastEl ? target : null,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(organisms/* Feed */.fR, {
                            feed: feed
                        })
                    }, feed.no));
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(molecules/* FooterNavbar */.Zj, {})
        ]
    }));
};
/* harmony default export */ const template = (Home);

// EXTERNAL MODULE: ./src/store/configureStore.ts + 16 modules
var configureStore = __webpack_require__(2460);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(6537);
;// CONCATENATED MODULE: ./src/pages/index.tsx






const pages_Home = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(template, {}));
};
const getServerSideProps = configureStore/* default.getServerSideProps */.Z.getServerSideProps((store)=>async ({ req , res , params  })=>{
        const data = 1; // region_no 값
        store.dispatch((0,feedsAction/* loadFeedsRequest */.cg)(data));
        store.dispatch(external_redux_saga_.END);
        await store.sagaTask.toPromise();
        return {
            props: {}
        };
    }
);
/* harmony default export */ const pages = (pages_Home);


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

/***/ 7521:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChatBubbleOutline");

/***/ }),

/***/ 7372:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Favorite");

/***/ }),

/***/ 6910:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FavoriteBorder");

/***/ }),

/***/ 3467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 7555:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LocalOfferOutlined");

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

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,594,173,216,979,460,762], () => (__webpack_exec__(6300)));
module.exports = __webpack_exports__;

})();