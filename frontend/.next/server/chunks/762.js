"use strict";
exports.id = 762;
exports.ids = [762];
exports.modules = {

/***/ 2762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fR": () => (/* reexport */ organisms_Feed_Feed),
  "Uv": () => (/* reexport */ organisms_FeedDetail_FeedDetail),
  "Jo": () => (/* reexport */ MypageComments_MypageComments),
  "M6": () => (/* reexport */ MypageFeeds_MypageFeeds)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "@mui/icons-material/FavoriteBorder"
var FavoriteBorder_ = __webpack_require__(6910);
var FavoriteBorder_default = /*#__PURE__*/__webpack_require__.n(FavoriteBorder_);
// EXTERNAL MODULE: external "@mui/icons-material/ChatBubbleOutline"
var ChatBubbleOutline_ = __webpack_require__(7521);
var ChatBubbleOutline_default = /*#__PURE__*/__webpack_require__.n(ChatBubbleOutline_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./src/components/atoms/index.ts + 22 modules
var atoms = __webpack_require__(4541);
;// CONCATENATED MODULE: ./src/components/organisms/Feed/Feed.styled.ts


const Feed = (styled_default()).div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 2vh 1vw 2vh 1vw;
  padding: 1.5vh;
  background-color: #fff;
  filter: drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.15));
`;
const FeedContent = (styled_default()).div`
  width: 100%;
  text-align: left;
  padding: 5vh 0;
  cursor: pointer;

  & .hashtag {
    border-radius: 0.3rem;
    color: #dd3345;
    background-color: #f4f4f8;
  }
`;
const TagContainer = (styled_default()).div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 1vh 0;
`;
const Button = styled_default()(atoms/* Button */.zx)`
  margin: 0;
  padding: 1vh;
`;
/* harmony default export */ const Feed_styled = ({
    Feed,
    FeedContent,
    TagContainer,
    Button
});

// EXTERNAL MODULE: ./src/components/molecules/index.ts + 53 modules
var molecules = __webpack_require__(9205);
// EXTERNAL MODULE: external "@mui/icons-material/LocalOfferOutlined"
var LocalOfferOutlined_ = __webpack_require__(7555);
var LocalOfferOutlined_default = /*#__PURE__*/__webpack_require__.n(LocalOfferOutlined_);
;// CONCATENATED MODULE: ./src/components/organisms/Feed/Feed.tsx









const Feed_Feed = ({ feed  })=>{
    const moveFeedDetail = (e)=>{
        router_default().push(`/feed/${feed.no}`);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Feed_styled.Feed, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(molecules/* FeedHeader */.Fu, {
                user: {
                    userId: feed.userId,
                    nickname: feed.nickname,
                    profileImage: feed.profileImage
                },
                createdAt: feed.createdAt,
                weather: feed.weather,
                feedNo: feed.no
            }),
            feed.images ? /*#__PURE__*/ jsx_runtime_.jsx(molecules/* ArticleImage */.Se, {
                images: feed.images
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Feed_styled.FeedContent, {
                onClick: moveFeedDetail,
                children: feed.content
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Feed_styled.TagContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((LocalOfferOutlined_default()), {}),
                    feed.tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx(atoms/* Tag */.Vp, {
                            value: tag
                        }, tag)
                    )
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(atoms/* FooterContainer */.bk, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Feed_styled.Button, {
                        onClick: moveFeedDetail,
                        bgColor: "transparent",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ChatBubbleOutline_default()), {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Feed_styled.Button, {
                        onClick: moveFeedDetail,
                        bgColor: "transparent",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((FavoriteBorder_default()), {})
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const organisms_Feed_Feed = (Feed_Feed);

;// CONCATENATED MODULE: ./src/components/organisms/FeedDetail/FeedDetail.styled.ts


const FeedDetail = (styled_default()).div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5vh;
  background-color: #fff;
`;
const FeedDetail_styled_FeedContent = (styled_default()).div`
  width: 100%;
  text-align: left;
  margin: 2.5vh 0;
`;
const FeedDetail_styled_TagContainer = (styled_default()).div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 1vh 0;
`;
const FeedDetail_styled_Button = styled_default()(atoms/* Button */.zx)`
  margin: 0;
  padding: 1vh;
`;
const fixButton = styled_default()(atoms/* Button */.zx)`
  margin: 0;
  padding: 1vh;
  background-color: #000;
  color: #fff;
`;
/* harmony default export */ const FeedDetail_styled = ({
    FeedDetail,
    FeedContent: FeedDetail_styled_FeedContent,
    TagContainer: FeedDetail_styled_TagContainer,
    Button: FeedDetail_styled_Button,
    fixButton
});

;// CONCATENATED MODULE: ./src/components/organisms/FeedDetail/FeedDetail.tsx









const FeedDetail_FeedDetail = ({ feed  })=>{
    (0,external_react_.useEffect)(()=>{
        if (window.location.href === `http://i6c106.p.ssafy.io:3000/feed/${feed.no}`) {
            setIsDetail(true);
        } else {
            setIsDetail(false);
        }
    }, []);
    const { 0: isDetail , 1: setIsDetail  } = (0,external_react_.useState)(false);
    const moveFeedDetail = (e)=>{
        if (isDetail) {
            e.preventDefault();
        } else {
            router_default().push(`feed/${feed.no}`);
        }
    };
    // const likeClick = (e: React.MouseEvent) => {
    //   e.preventDefault();
    //   const feedNo = Number(feed.no);
    //   dispatch(feedNo);
    // };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(FeedDetail_styled.FeedDetail, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(molecules/* FeedHeader */.Fu, {
                user: {
                    userId: feed.userId,
                    nickname: feed.nickname,
                    profileImage: feed.profileImage
                },
                createdAt: feed.createdAt,
                weather: feed.weather,
                feedNo: feed.no
            }),
            feed.images ? /*#__PURE__*/ jsx_runtime_.jsx(molecules/* ArticleImage */.Se, {
                images: feed.images
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(FeedDetail_styled.FeedContent, {
                children: feed.content
            }),
            feed.tags ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FeedDetail_styled.TagContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((LocalOfferOutlined_default()), {}),
                    feed.tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx(atoms/* Tag */.Vp, {
                            value: tag
                        }, tag)
                    )
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(atoms/* FooterContainer */.bk, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(FeedDetail_styled.Button, {
                            onClick: moveFeedDetail,
                            bgColor: "transparent",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ChatBubbleOutline_default()), {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FeedDetail_styled.Button, {
                            onClick: moveFeedDetail,
                            bgColor: "transparent",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((FavoriteBorder_default()), {})
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const organisms_FeedDetail_FeedDetail = (FeedDetail_FeedDetail);

;// CONCATENATED MODULE: ./src/components/organisms/MypageComments/MypageComments.styled.ts

const ContentContainer = (styled_default()).div`
  padding: 1vh;
  & .comment {
    margin: 1vh;
    box-sizing: border-box;
  }
`;
/* harmony default export */ const MypageComments_styled = ({
    ContentContainer
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/components/organisms/MypageComments/MypageComments.tsx





const MypageComments = ()=>{
    const { myComments  } = (0,external_react_redux_.useSelector)((state)=>state.myPageComments
    );
    return(/*#__PURE__*/ jsx_runtime_.jsx(MypageComments_styled.ContentContainer, {
        children: myComments.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(molecules/* Comment */.sv, {
                className: "comment",
                comment: item
            }, item.no)
        )
    }));
};
/* harmony default export */ const MypageComments_MypageComments = (MypageComments);

;// CONCATENATED MODULE: ./src/components/organisms/MypageFeeds/MypageFeeds.styled.ts

const MypageFeeds_styled_ContentContainer = (styled_default()).div`
  padding: 1vh;
  height: 100%;
  overflow-y: auto;
`;
/* harmony default export */ const MypageFeeds_styled = ({
    ContentContainer: MypageFeeds_styled_ContentContainer
});

;// CONCATENATED MODULE: ./src/components/organisms/MypageFeeds/MypageFeeds.tsx





const MypageFeeds = ()=>{
    const { myFeeds  } = (0,external_react_redux_.useSelector)((state)=>state.myPageFeeds
    );
    return(/*#__PURE__*/ jsx_runtime_.jsx(MypageFeeds_styled.ContentContainer, {
        children: myFeeds.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(organisms_Feed_Feed, {
                feed: item
            }, item.no)
        )
    }));
};
/* harmony default export */ const MypageFeeds_MypageFeeds = (MypageFeeds);

;// CONCATENATED MODULE: ./src/components/organisms/index.ts







/***/ })

};
;