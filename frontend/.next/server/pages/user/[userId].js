"use strict";
(() => {
var exports = {};
exports.id = 132;
exports.ids = [132];
exports.modules = {

/***/ 4825:
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
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./src/components/atoms/index.ts + 22 modules
var atoms = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/components/molecules/index.ts + 53 modules
var molecules = __webpack_require__(9205);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(8308);
;// CONCATENATED MODULE: ./src/template/user/styled.ts




const MainContainer = styled_default()(atoms/* MainContainer */.tz)`
  text-align: center;
  justify-content: start;
  position: relative;
`;
const DrawerMenu = styled_default()(molecules/* DrawerMenu */.ON)`
  position: absolute;
  top: 0;
  right: 0;
  & button {
    padding-right: 0;
    color: #fff;
  }
`;
const ProfileContainer = (styled_default()).div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 3vh 8vw 0 8vw;
  position: relative;
  background-color: #d5d5d3;
  filter: drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.1));
`;
const useStyles = (0,styles_.makeStyles)({
    root: {
        zIndex: 1,
        transform: 'translate(-2vh, 0.5vh)',
        filter: ' drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.1))'
    }
});
const UserInfo = (styled_default()).div`
  transform: translate(6vh, -3vh);
  background-color: #fff;
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.1));
  padding: 3vh;
  width: 90%;
`;
const UserInfoHeader = (styled_default()).div`
  display: flex;
  margin-bottom: 1vh;
  align-items: center;

  & .username {
    flex: 9;
  }

  & .btn {
    flex: 1;
  }
`;
const UserInfoFooter = (styled_default()).div`
  margin-top: 1vh;
  display: flex;

  & div {
    flex: 1;
  }
`;
const Button = styled_default()(atoms/* Button */.zx)`
  &.follow {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    padding: 1vh;
  }

  &.unfollow {
    background-color: #000;
    color: #fff;
    padding: 1vh;
  }
`;
const TabContainer = (styled_default()).div`
  background-color: #fff;
`;
const ContentContainer = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
const TabPanel = (styled_default()).div`
  width: 100%;
  height: 49.5vh;
  overflow-y: auto;
`;
/* harmony default export */ const styled = ({
    MainContainer,
    DrawerMenu,
    ProfileContainer,
    useStyles,
    UserInfo,
    UserInfoHeader,
    UserInfoFooter,
    ContentContainer,
    Button,
    TabContainer,
    TabPanel
});

// EXTERNAL MODULE: ./src/components/organisms/index.ts + 8 modules
var organisms = __webpack_require__(2762);
// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
;// CONCATENATED MODULE: external "@mui/icons-material/Settings"
const Settings_namespaceObject = require("@mui/icons-material/Settings");
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_namespaceObject);
// EXTERNAL MODULE: ./src/libs/axios.ts
var axios = __webpack_require__(7056);
;// CONCATENATED MODULE: ./src/template/user/index.tsx









const UserTemplate = ({ userId  })=>{
    const classes = styled.useStyles();
    const [value, setValue] = external_react_default().useState(0);
    const { 0: followers , 1: setFollowers  } = (0,external_react_.useState)([]);
    const { 0: followings , 1: setFollowings  } = (0,external_react_.useState)([]);
    const { 0: follow , 1: setFollow  } = (0,external_react_.useState)(false);
    const authApi = (0,axios/* authInstance */.et)();
    const api = (0,axios/* apiInstance */.bL)();
    const modifyProfile = ()=>{
        console.log('회원정보 수정');
    };
    const handleFollow = async ()=>{
        if (follow) {
            await authApi.delete(`/follow?userid=${1234}&followingid=${userId}`);
        } else {
            await authApi.post('/follow', {
                userId: '1234',
                followingId: userId
            });
        }
        setFollow(!follow);
    };
    (0,external_react_.useEffect)(()=>{
        api.get(`/follower/${userId}`).then((res)=>{
            setFollowers(res.data);
        });
        api.get(`/following/${userId}`).then((res)=>{
            setFollowings(res.data);
        });
        api.get(`/following/1234`).then((res)=>{
            if (res.data.find((obj)=>obj.userId === userId
            )) {
                setFollow(true);
            }
        });
    }, [
        follow
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled.MainContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(styled.DrawerMenu, {
                userId: userId
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(molecules/* Title */.Dx, {
                value: "PROFILE"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled.ProfileContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                        classes: {
                            root: classes.root
                        },
                        src: "/images/icon/blank_user.png",
                        sx: {
                            width: 100,
                            height: 100
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled.UserInfo, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled.UserInfoHeader, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                                        className: "username",
                                        size: "1.3rem",
                                        weight: "600",
                                        value: userId
                                    }),
                                    userId === '1234' ? /*#__PURE__*/ jsx_runtime_.jsx(styled.Button, {
                                        className: "btn setting",
                                        onClick: modifyProfile,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Settings_default()), {})
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(styled.Button, {
                                        className: "btn follow",
                                        onClick: handleFollow,
                                        children: follow ? /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                                            value: "Unfollow"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                                            value: "Follow"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                                    color: "#777",
                                    value: "얼죽아"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled.UserInfoFooter, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(molecules/* FollowingModal */.yd, {
                                        title: "팔로워",
                                        arr: followers
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(molecules/* FollowingModal */.yd, {
                                        title: "팔로잉",
                                        arr: followings
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(styled.TabContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(molecules/* TabMenu */.d0, {
                            tabList: [
                                'FEEDS',
                                'COMMENTS'
                            ],
                            value: value,
                            setValue: setValue
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled.ContentContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(styled.TabPanel, {
                                role: "tabpanel",
                                hidden: value !== 0,
                                id: "simple-tabpanel-0",
                                "aria-labelledby": "simple-tab-0",
                                children: userId !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx(organisms/* MypageFeeds */.M6, {}) : null
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(styled.TabPanel, {
                                role: "tabpanel",
                                hidden: value !== 1,
                                id: "simple-tabpanel-1",
                                "aria-labelledby": "simple-tab-1",
                                children: userId !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx(organisms/* MypageComments */.Jo, {}) : null
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(molecules/* FooterNavbar */.Zj, {})
        ]
    }));
};
/* harmony default export */ const user = (UserTemplate);

// EXTERNAL MODULE: ./src/store/configureStore.ts + 16 modules
var configureStore = __webpack_require__(2460);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(6537);
// EXTERNAL MODULE: ./src/action/myPageFeedAction.ts
var myPageFeedAction = __webpack_require__(8562);
// EXTERNAL MODULE: ./src/action/myPageCommentAction.ts
var myPageCommentAction = __webpack_require__(6350);
;// CONCATENATED MODULE: ./src/pages/user/[userId].tsx







const User = ({ userId  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(user, {
        userId: userId
    }));
};
const getServerSideProps = configureStore/* default.getServerSideProps */.Z.getServerSideProps((store)=>async ({ req , res , params  })=>{
        const data = params.userId;
        if (typeof data !== 'string') return {
            props: {
                userId: null
            }
        };
        store.dispatch((0,myPageFeedAction/* loadMypageFeedsRequest */.PJ)(data));
        store.dispatch((0,myPageCommentAction/* loadMypageCommentsRequest */.UT)(data));
        store.dispatch(external_redux_saga_.END);
        await store.sagaTask.toPromise();
        return {
            props: {
                userId: data
            }
        };
    }
);
/* harmony default export */ const _userId_ = (User);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,594,173,216,979,460,762], () => (__webpack_exec__(4825)));
module.exports = __webpack_exports__;

})();