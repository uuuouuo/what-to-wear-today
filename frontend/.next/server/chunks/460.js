"use strict";
exports.id = 460;
exports.ids = [460];
exports.modules = {

/***/ 2967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P$": () => (/* binding */ LOAD_FEEDS_REQUEST),
/* harmony export */   "g5": () => (/* binding */ LOAD_FEEDS_SUCCESS),
/* harmony export */   "hw": () => (/* binding */ LOAD_FEEDS_FAILURE),
/* harmony export */   "cg": () => (/* binding */ loadFeedsRequest)
/* harmony export */ });
/* unused harmony exports loadFeedsSuccess, loadFeedsFailure */
const LOAD_FEEDS_REQUEST = 'LOAD_FEEDS_REQUEST';
const LOAD_FEEDS_SUCCESS = 'LOAD_FEEDS_SUCCESS';
const LOAD_FEEDS_FAILURE = 'LOAD_FEEDS_FAILURE';
const loadFeedsRequest = (regionNo)=>({
        type: LOAD_FEEDS_REQUEST,
        regionNo: regionNo
    })
;
const loadFeedsSuccess = ()=>({
        type: LOAD_FEEDS_SUCCESS
    })
;
const loadFeedsFailure = ()=>({
        type: LOAD_FEEDS_FAILURE
    })
;


/***/ }),

/***/ 6350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WG": () => (/* binding */ LOAD_MYPAGE_COMMENT_REQUEST),
/* harmony export */   "Qw": () => (/* binding */ LOAD_MYPAGE_COMMENT_SUCCESS),
/* harmony export */   "Kn": () => (/* binding */ LOAD_MYPAGE_COMMENT_FAILURE),
/* harmony export */   "UT": () => (/* binding */ loadMypageCommentsRequest)
/* harmony export */ });
/* unused harmony exports loadMypageCommentsSuccess, loadMypageCommentsFailure */
const LOAD_MYPAGE_COMMENT_REQUEST = 'LOAD_MYPAGE_COMMENT_REQUEST';
const LOAD_MYPAGE_COMMENT_SUCCESS = 'LOAD_MYPAGE_COMMENT_SUCCESS';
const LOAD_MYPAGE_COMMENT_FAILURE = 'LOAD_MYPAGE_COMMENT_FAILURE';
const loadMypageCommentsRequest = (userId)=>({
        type: LOAD_MYPAGE_COMMENT_REQUEST,
        userId
    })
;
const loadMypageCommentsSuccess = ()=>({
        type: LOAD_MYPAGE_COMMENT_SUCCESS
    })
;
const loadMypageCommentsFailure = ()=>({
        type: LOAD_MYPAGE_COMMENT_FAILURE
    })
;


/***/ }),

/***/ 8562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cd": () => (/* binding */ LOAD_MYPAGE_FEED_REQUEST),
/* harmony export */   "uK": () => (/* binding */ LOAD_MYPAGE_FEED_SUCCESS),
/* harmony export */   "aJ": () => (/* binding */ LOAD_MYPAGE_FEED_FAILURE),
/* harmony export */   "PJ": () => (/* binding */ loadMypageFeedsRequest)
/* harmony export */ });
/* unused harmony exports loadMypageFeedsSuccess, loadMypageFeedsFailure */
const LOAD_MYPAGE_FEED_REQUEST = 'LOAD_MYPAGE_Feed_REQUEST';
const LOAD_MYPAGE_FEED_SUCCESS = 'LOAD_MYPAGE_Feed_SUCCESS';
const LOAD_MYPAGE_FEED_FAILURE = 'LOAD_MYPAGE_Feed_FAILURE';
const loadMypageFeedsRequest = (userId)=>({
        type: LOAD_MYPAGE_FEED_REQUEST,
        userId
    })
;
const loadMypageFeedsSuccess = ()=>({
        type: LOAD_MYPAGE_FEED_SUCCESS
    })
;
const loadMypageFeedsFailure = ()=>({
        type: LOAD_MYPAGE_FEED_FAILURE
    })
;


/***/ }),

/***/ 2702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f9": () => (/* binding */ LOAD_SEARCH_FEEDS_REQUEST),
/* harmony export */   "_1": () => (/* binding */ LOAD_SEARCH_FEEDS_SUCCESS),
/* harmony export */   "BP": () => (/* binding */ LOAD_SEARCH_FEEDS_FAILURE),
/* harmony export */   "Ee": () => (/* binding */ loadSearchFeedsRequest)
/* harmony export */ });
/* unused harmony exports loadSearchFeedsSuccess, loadSearchFeedsFailure */
const LOAD_SEARCH_FEEDS_REQUEST = 'LOAD_SEARCH_FEEDS_REQUEST';
const LOAD_SEARCH_FEEDS_SUCCESS = 'LOAD_SEARCH_FEEDS_SUCCESS';
const LOAD_SEARCH_FEEDS_FAILURE = 'LOAD_SEARCH_FEEDS_FAILURE';
const loadSearchFeedsRequest = (searchUrl)=>({
        type: LOAD_SEARCH_FEEDS_REQUEST,
        searchUrl
    })
;
const loadSearchFeedsSuccess = ()=>({
        type: LOAD_SEARCH_FEEDS_SUCCESS
    })
;
const loadSearchFeedsFailure = ()=>({
        type: LOAD_SEARCH_FEEDS_FAILURE
    })
;


/***/ }),

/***/ 2460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ store_configureStore)
});

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(6695);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(5648);
// EXTERNAL MODULE: ./src/action/userAction.ts
var userAction = __webpack_require__(5979);
;// CONCATENATED MODULE: ./src/reducers/user.ts

// type 설정 필요
const initialState = {
    newUser: null,
    isMember: false,
    myInfo: null,
    kakaoLoginLoading: false,
    kakaoLoginDone: false,
    kakaoLoginError: null,
    kakaoSignupLoading: false,
    kakaoSignupDone: false,
    kakaoSignupError: null
};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case userAction/* KAKAO_LOGIN_REQUEST */.j1:
            return {
                ...state,
                kakaoLoginLoading: true,
                kakaoLoginError: null,
                kakaoLoginDone: false
            };
        case userAction/* KAKAO_LOGIN_SUCCESS */.qq:
            return {
                ...state,
                kakaoLoginLoading: false,
                isMember: action.data.isMember,
                kakaoLoginDone: true
            };
        case userAction/* KAKAO_LOGIN_FAILURE */.Dq:
            return {
                ...state,
                kakaoLoginLoading: false,
                kakaoLoginError: action.error
            };
        case userAction/* CREATE_USER_PROFILE */.ne:
            return {
                ...state,
                newUser: {
                    imageName: action.profile,
                    nickname: action.nickname
                }
            };
        case userAction/* CREATE_USER_INTEREST */.NU:
            return {
                ...state,
                newUser: {
                    ...state.newUser,
                    interestNos: action.interestNos
                }
            };
        case userAction/* CREATE_USER_TYPE */.ln:
            return {
                ...state,
                newUser: {
                    ...state.newUser,
                    typeNos: action.typeNos
                }
            };
        case userAction/* CREATE_KAKAO_USER_REQUEST */.cz:
            return {
                ...state,
                kakaoSignupLoading: true,
                kakaoSignupError: null,
                kakaoSignupDone: false
            };
        case userAction/* CREATE_KAKAO_USER_SUCCESS */.FR:
            return {
                ...state,
                kakaoSignupLoading: false,
                kakaoSignupDone: true
            };
        case userAction/* CREATE_KAKAO_USER_FAILURE */.BH:
            return {
                ...state,
                kakaoSignupLoading: false,
                kakaoSignupError: action.error
            };
        default:
            return state;
    }
};
/* harmony default export */ const user = (reducer);

// EXTERNAL MODULE: ./src/action/commentAction.ts
var commentAction = __webpack_require__(7170);
;// CONCATENATED MODULE: ./src/reducers/comment.ts

const comment_initialState = {
    comments: [],
    createCommentAdding: false,
    createCommentDone: false,
    createCommentError: null,
    deleteCommentDeleting: false,
    loadCommentsLoading: false,
    loadCommentsDone: false,
    loadCommentsError: null,
    updateCommentUpdating: false,
    updateCommentDone: false,
    updateCommentError: null,
    deleteCommentDone: false,
    deleteCommentError: null
};
const comment_reducer = (state = comment_initialState, action)=>{
    switch(action.type){
        case commentAction/* CREATE_COMMENT_REQUEST */.be:
            return {
                ...state,
                createCommentsAdding: true,
                createCommentError: null,
                createCommentDone: false
            };
        case commentAction/* CREATE_COMMENT_SUCCESS */.xj:
            return {
                ...state,
                createCommentsAdding: false,
                comments: [
                    ...state.comments,
                    action.data
                ],
                createCommentDone: true
            };
        case commentAction/* CREATE_COMMENT_FAILURE */.xD:
            return {
                ...state,
                createCommentsAdding: false,
                createCommentError: action.error
            };
        case commentAction/* LOAD_COMMENTS_REQUEST */.Jq:
            return {
                ...state,
                loadCommentsLoading: true,
                loadCommentsError: null,
                loadCommentsDone: false
            };
        case commentAction/* LOAD_COMMENTS_SUCCESS */.G7:
            return {
                ...state,
                loadCommentsLoading: false,
                comments: action.data,
                loadCommentsDone: true
            };
        case commentAction/* LOAD_COMMENTS_FAILURE */.Qv:
            return {
                ...state,
                loadCommentsLoading: false,
                loadCommentsError: action.error
            };
        case commentAction/* UPDATE_COMMENT_REQUEST */.R2:
            return {
                ...state,
                updateCommentUpdating: true,
                updateCommentDone: false,
                updateCommentError: null
            };
        case commentAction/* UPDATE_COMMENT_SUCCESS */.MQ:
            return {
                ...state,
                comments: state.comments.map((comment)=>{
                    if (comment.no === action.data.no) {
                        return {
                            ...comment,
                            ...action.data
                        };
                    }
                    return comment;
                }),
                updateCommentUpdating: false,
                updateCommentDone: true
            };
        case commentAction/* UPDATE_COMMENT_FAILURE */.SI:
            return {
                ...state,
                updateCommentUpdating: false,
                updateCommentError: action.error
            };
        case commentAction/* DELETE_COMMENT_REQUEST */.gc:
            return {
                ...state,
                deleteCommentDeleting: true,
                deleteCommentDone: false,
                deleteCommentError: null
            };
        case commentAction/* DELETE_COMMENT_SUCCESS */.B$:
            return {
                ...state,
                comments: state.comments.filter((comment)=>comment.no != action.data
                ),
                deleteCommentDeleting: false,
                deleteCommentDone: true
            };
        case commentAction/* DELETE_COMMENT_FAILURE */.uN:
            return {
                ...state,
                deleteCommentDeleting: false,
                deleteCommentError: action.error
            };
        default:
            return state;
    }
};
/* harmony default export */ const comment = (comment_reducer);

// EXTERNAL MODULE: ./src/action/feedAction.ts
var feedAction = __webpack_require__(6953);
;// CONCATENATED MODULE: ./src/reducers/feed.ts

const feed_initialState = {
    feed: null,
    createFeedCreating: false,
    createFeedDone: false,
    createFeedError: null,
    loadFeedLoading: false,
    loadFeedDone: false,
    loadFeedError: null,
    updateFeedUpdating: false,
    updateFeedDone: false,
    updateFeedError: null,
    deleteFeedDeleting: false,
    deleteFeedDone: false,
    deleteFeedError: null
};
const feed_reducer = (state = feed_initialState, action)=>{
    switch(action.type){
        case feedAction/* CREATE_FEED_REQUEST */.bO:
            return {
                ...state,
                createFeedCreating: true,
                createFeedDone: false,
                createFeedError: null
            };
        case feedAction/* CREATE_FEED_SUCCESS */.kC:
            return {
                ...state,
                loadFeedDone: true,
                createFeedCreating: false,
                createFeedDone: true,
                feed: action.data
            };
        case feedAction/* CREATE_FEED_FAILURE */._D:
            return {
                ...state,
                createFeedCreating: false,
                createFeedError: action.error
            };
        case feedAction/* LOAD_FEED_REQUEST */.aY:
            return {
                ...state,
                loadFeedLoading: true,
                loadFeedError: null,
                loadFeedDone: false
            };
        case feedAction/* LOAD_FEED_SUCCESS */.gM:
            return {
                ...state,
                loadFeedLoading: false,
                feed: action.data,
                loadFeedDone: true
            };
        case feedAction/* LOAD_FEED_FAILURE */.CW:
            return {
                ...state,
                loadFeedLoading: false,
                loadFeedError: action.error
            };
        case feedAction/* UPDATE_FEED_REQUEST */.Bu:
            return {
                ...state,
                updateFeedUpdating: true,
                updateFeedError: null,
                updateFeedDone: false
            };
        case feedAction/* UPDATE_FEED_SUCCESS */.RS:
            return {
                ...state,
                updateFeedUpdating: false,
                updateFeedDone: true,
                feed: action.data
            };
        case feedAction/* UPDATE_FEED_FAILURE */.gA:
            return {
                ...state,
                updateFeedUpdating: false,
                updateFeedError: action.error
            };
        case feedAction/* DELETE_FEED_REQUEST */.CD:
            return {
                ...state,
                deleteFeedDeleting: true,
                deleteFeedError: null,
                deleteFeedDone: false
            };
        case feedAction/* DELETE_FEED_SUCCESS */.Qz:
            return {
                ...state,
                deleteFeedDeleting: false,
                deleteFeedDone: true,
                feed: action.data
            };
        case feedAction/* DELETE_FEED_FAILURE */.qh:
            return {
                ...state,
                deleteFeedDeleting: false,
                deleteFeedError: action.error
            };
        default:
            return state;
    }
};
/* harmony default export */ const feed = (feed_reducer);

// EXTERNAL MODULE: ./src/action/feedsAction.ts
var feedsAction = __webpack_require__(2967);
;// CONCATENATED MODULE: ./src/reducers/feeds.ts

const feeds_initialState = {
    feeds: [],
    loadFeedsLoading: false,
    loadFeedsDone: false,
    loadFeedsError: null
};
const feeds_reducer = (state = feeds_initialState, action)=>{
    switch(action.type){
        case feedsAction/* LOAD_FEEDS_REQUEST */.P$:
            return {
                ...state,
                loadFeedsLoading: true,
                loadFeedsError: null,
                loadFeedsDone: false
            };
        case feedsAction/* LOAD_FEEDS_SUCCESS */.g5:
            return {
                ...state,
                loadFeedsLoading: false,
                feeds: [
                    ...state.feeds,
                    ...action.data.content
                ],
                loadFeedsDone: true
            };
        case feedsAction/* LOAD_FEEDS_FAILURE */.hw:
            return {
                ...state,
                loadFeedsLoading: false,
                loadFeedsError: action.error
            };
        default:
            return state;
    }
};
/* harmony default export */ const feeds = (feeds_reducer);

// EXTERNAL MODULE: ./src/action/myPageFeedAction.ts
var myPageFeedAction = __webpack_require__(8562);
;// CONCATENATED MODULE: ./src/reducers/myPageFeeds.ts

const myPageFeeds_initialState = {
    myFeeds: [],
    loadMyFeedsLoading: false,
    loadMyFeedsDone: false,
    loadMyFeedsError: null
};
const myPageFeeds_reducer = (state = myPageFeeds_initialState, action)=>{
    switch(action.type){
        case myPageFeedAction/* LOAD_MYPAGE_FEED_REQUEST */.Cd:
            return {
                ...state,
                loadMyFeedsLoading: true,
                loadMyFeedsError: null,
                loadMyFeedsDone: false
            };
        case myPageFeedAction/* LOAD_MYPAGE_FEED_SUCCESS */.uK:
            return {
                ...state,
                loadMyFeedsLoading: false,
                myFeeds: action.data,
                loadMyFeedsDone: true
            };
        case myPageFeedAction/* LOAD_MYPAGE_FEED_FAILURE */.aJ:
            return {
                ...state,
                loadMyFeedsLoading: false,
                loadMyFeedsError: action.error
            };
        default:
            return state;
    }
};
/* harmony default export */ const myPageFeeds = (myPageFeeds_reducer);

// EXTERNAL MODULE: ./src/action/myPageCommentAction.ts
var myPageCommentAction = __webpack_require__(6350);
;// CONCATENATED MODULE: ./src/reducers/myPageComments.ts

const myPageComments_initialState = {
    myComments: [],
    loadMyCommentsLoading: false,
    loadMyCommentsDone: false,
    loadMyCommentsError: null
};
const myPageComments_reducer = (state = myPageComments_initialState, action)=>{
    switch(action.type){
        case myPageCommentAction/* LOAD_MYPAGE_COMMENT_REQUEST */.WG:
            return {
                ...state,
                loadMyCommentsLoading: true,
                loadMyCommentsError: null,
                loadMyCommentsDone: false
            };
        case myPageCommentAction/* LOAD_MYPAGE_COMMENT_SUCCESS */.Qw:
            return {
                ...state,
                loadMyCommentsLoading: false,
                myComments: action.data,
                loadMyCommentsDone: true
            };
        case myPageCommentAction/* LOAD_MYPAGE_COMMENT_FAILURE */.Kn:
            return {
                ...state,
                loadMyCommentsLoading: false,
                loadMyCommentsError: action.error
            };
        default:
            return state;
    }
};
/* harmony default export */ const myPageComments = (myPageComments_reducer);

// EXTERNAL MODULE: ./src/action/searchFeedsAction.ts
var searchFeedsAction = __webpack_require__(2702);
;// CONCATENATED MODULE: ./src/reducers/searchedFeeds.ts

const searchedFeeds_initialState = {
    searchedFeeds: [],
    loadSearchedFeedsLoading: false,
    loadSearchedFeedsDone: false,
    loadSearchedFeedsError: null
};
const searchedFeeds_reducer = (state = searchedFeeds_initialState, action)=>{
    switch(action.type){
        case searchFeedsAction/* LOAD_SEARCH_FEEDS_REQUEST */.f9:
            return {
                ...state,
                loadSearchedFeedsLoading: true,
                loadSearchedFeedsError: null,
                loadSearchedFeedsDone: false
            };
        case searchFeedsAction/* LOAD_SEARCH_FEEDS_SUCCESS */._1:
            return {
                ...state,
                loadSearchedFeedsLoading: false,
                searchedFeeds: action.data.content,
                loadSearchedFeedsDone: true
            };
        case searchFeedsAction/* LOAD_SEARCH_FEEDS_FAILURE */.BP:
            return {
                ...state,
                loadSearchedFeedsLoading: false,
                loadSearchedFeedsError: action.error
            };
        default:
            return state;
    }
};
/* harmony default export */ const searchedFeeds = (searchedFeeds_reducer);

;// CONCATENATED MODULE: ./src/reducers/index.ts









const rootReducer = (state1, action)=>{
    switch(action.type){
        case external_next_redux_wrapper_.HYDRATE:
            return {
                ...action.payload
            };
        default:
            {
                const combineReducer = (0,external_redux_.combineReducers)({
                    index: (state = {}, action)=>state
                    ,
                    user: user,
                    comment: comment,
                    feed: feed,
                    feeds: feeds,
                    myPageFeeds: myPageFeeds,
                    myPageComments: myPageComments,
                    searchedFeeds: searchedFeeds
                });
                return combineReducer(state1, action);
            }
    }
};
/* harmony default export */ const reducers = (rootReducer);

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(6537);
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(6477);
// EXTERNAL MODULE: ./src/libs/axios.ts
var axios = __webpack_require__(7056);
;// CONCATENATED MODULE: ./src/sagas/user.ts



const api = (0,axios/* apiInstance */.bL)();
function kakaoLoginAPI(code) {
    return api.post(`/user/login/kakao`, code);
}
function* kakaoLogin(action) {
    try {
        const result = yield (0,effects_.call)(kakaoLoginAPI, action.code);
        // cookie.save('JWT', result.headers.jwt);
        yield (0,effects_.put)({
            type: userAction/* KAKAO_LOGIN_SUCCESS */.qq,
            data: result.data
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: userAction/* KAKAO_LOGIN_FAILURE */.Dq,
            error: err
        });
    }
}
function kakaoSignupAPI(request) {
    const formData = new FormData();
    return api.post(`/user/kakao`, request);
}
function* kakaoSignup(action) {
    try {
        const result = yield (0,effects_.call)(kakaoSignupAPI, action.request);
        yield (0,effects_.put)({
            type: userAction/* CREATE_KAKAO_USER_SUCCESS */.FR,
            data: result.data
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: userAction/* CREATE_KAKAO_USER_FAILURE */.BH,
            error: err.response
        });
    }
}
function* watchKakaoLogin() {
    yield (0,effects_.takeLatest)(userAction/* KAKAO_LOGIN_REQUEST */.j1, kakaoLogin);
}
function* watchKakaoSignup() {
    yield (0,effects_.takeLatest)(userAction/* CREATE_KAKAO_USER_REQUEST */.cz, kakaoSignup);
}
function* userSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(watchKakaoLogin),
        (0,effects_.fork)(watchKakaoSignup)
    ]);
};

;// CONCATENATED MODULE: ./src/sagas/comment.ts



const comment_api = (0,axios/* apiInstance */.bL)();
const authApi = (0,axios/* authInstance */.et)();
function loadCommentsAPI(feedNo) {
    return comment_api.get(`/comment/${feedNo}`);
}
function createCommentsAPI(action) {
    return authApi.post(`/comment/${action.feedNo}`, action.request);
}
function deleteCommentsAPI(commentNo) {
    return authApi.delete(`/comment/${commentNo}`);
}
function updateCommentsAPI(action) {
    return authApi.put(`/comment/${action.commentNo}`, action.request);
}
function* loadComments(action) {
    try {
        const result = yield (0,effects_.call)(loadCommentsAPI, action.feedNo);
        yield (0,effects_.put)({
            type: commentAction/* LOAD_COMMENTS_SUCCESS */.G7,
            data: result.data
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: commentAction/* LOAD_COMMENTS_FAILURE */.Qv,
            error: err.response
        });
    }
}
function* deleteComment(action) {
    try {
        const result = yield (0,effects_.call)(deleteCommentsAPI, action.commentNo);
        yield (0,effects_.put)({
            type: commentAction/* DELETE_COMMENT_SUCCESS */.B$,
            data: action.commentNo
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: commentAction/* DELETE_COMMENT_FAILURE */.uN,
            error: err.response
        });
    }
}
function* updateComment(action) {
    try {
        const result = yield (0,effects_.call)(updateCommentsAPI, action);
        yield (0,effects_.put)({
            type: commentAction/* UPDATE_COMMENT_SUCCESS */.MQ,
            data: result.data
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: commentAction/* UPDATE_COMMENT_FAILURE */.SI,
            error: err.response
        });
    }
}
function* createComment(action) {
    try {
        const result = yield (0,effects_.call)(createCommentsAPI, action);
        yield (0,effects_.put)({
            type: commentAction/* CREATE_COMMENT_SUCCESS */.xj,
            data: result.data
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: commentAction/* CREATE_COMMENT_FAILURE */.xD,
            error: err.response
        });
    }
}
function* watchCreateComment() {
    yield (0,effects_.takeLatest)(commentAction/* CREATE_COMMENT_REQUEST */.be, createComment);
}
function* watchLoadComments() {
    yield (0,effects_.takeLatest)(commentAction/* LOAD_COMMENTS_REQUEST */.Jq, loadComments);
}
function* watchUpdateComment() {
    yield (0,effects_.takeLatest)(commentAction/* UPDATE_COMMENT_REQUEST */.R2, updateComment);
}
function* watchDeleteComment() {
    yield (0,effects_.takeLatest)(commentAction/* DELETE_COMMENT_REQUEST */.gc, deleteComment);
}
function* commentSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(watchCreateComment),
        (0,effects_.fork)(watchLoadComments),
        (0,effects_.fork)(watchUpdateComment),
        (0,effects_.fork)(watchDeleteComment), 
    ]);
};

;// CONCATENATED MODULE: ./src/sagas/feed.ts
/* eslint-disable no-unused-expressions */ 



const feed_api = (0,axios/* apiInstance */.bL)();
const feed_authApi = (0,axios/* authInstance */.et)();
const fileApi = (0,axios/* fileInstance */.Fz)();
function* createFeed(action) {
    try {
        const result = yield (0,effects_.call)(createFeedAPI, action);
        yield (0,effects_.put)({
            type: feedAction/* CREATE_FEED_SUCCESS */.kC,
            data: result
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: feedAction/* CREATE_FEED_FAILURE */._D,
            error: err
        });
    }
}
function createFeedAPI(action) {
    const formData = new FormData();
    action.request.imageNames.length === 0 ? formData.append('imageNames', '') : action.request.imageNames.forEach((file)=>formData.append('imageNames', file)
    );
    const request = {
        userId: action.request.userId,
        content: action.request.content,
        region: action.request.region,
        weather: action.request.weather,
        photoDate: action.request.photoDate,
        privateMode: action.request.privateMode,
        deleteMode: action.request.deleteMode,
        tags: action.request.tags
    };
    formData.append('request', new Blob([
        JSON.stringify(request)
    ], {
        type: 'application/json'
    }));
    return fileApi.post(`/feed`, formData);
}
function* loadFeed(action) {
    try {
        const result = yield (0,effects_.call)(loadFeedAPI, action.feedNo);
        yield (0,effects_.put)({
            type: feedAction/* LOAD_FEED_SUCCESS */.gM,
            data: result.data.feedRes
        });
        yield (0,effects_.put)({
            type: commentAction/* LOAD_COMMENTS_SUCCESS */.G7,
            data: result.data.commentRes
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: feedAction/* LOAD_FEED_FAILURE */.CW,
            error: err.name
        });
    }
}
function loadFeedAPI(feedNo) {
    return feed_api.get(`/feed/details/${feedNo}`);
}
function* updateFeed(action) {
    try {
        const result = yield (0,effects_.call)(updateFeedAPI, action);
        yield (0,effects_.put)({
            type: feedAction/* UPDATE_FEED_SUCCESS */.RS,
            data: result
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: feedAction/* UPDATE_FEED_FAILURE */.gA,
            error: err.response
        });
    }
}
function updateFeedAPI(action) {
    const formData = new FormData();
    action.request.imageNames.forEach((file)=>formData.append('imageNames', file)
    );
    const request = {
        userId: action.request.userId,
        content: action.request.content,
        region: action.request.region,
        weather: action.request.weather,
        photoDate: action.request.photoDate,
        privateMode: action.request.privateMode,
        deleteMode: action.request.deleteMode,
        tags: action.request.tags
    };
    formData.append('request', new Blob([
        JSON.stringify(request)
    ], {
        type: 'application/json'
    }));
    return fileApi.put(`/feed/${action.feedNo}`, formData);
}
function* deleteFeed(action) {
    try {
        const result = yield (0,effects_.call)(deleteFeedAPI, action);
        yield (0,effects_.put)({
            type: feedAction/* DELETE_FEED_SUCCESS */.Qz,
            data: result
        });
        const history = yield (0,effects_.getContext)('history');
        history.push('/');
    } catch (err) {
        yield (0,effects_.put)({
            type: feedAction/* DELETE_FEED_FAILURE */.qh,
            error: err.response
        });
    }
}
function deleteFeedAPI(action) {
    return feed_authApi.delete(`/feed/${action.feedNo}`);
}
function* watchCreateFeed() {
    yield (0,effects_.takeLatest)(feedAction/* CREATE_FEED_REQUEST */.bO, createFeed);
}
function* watchLoadFeed() {
    yield (0,effects_.takeLatest)(feedAction/* LOAD_FEED_REQUEST */.aY, loadFeed);
}
function* watchUpdateFeed() {
    yield (0,effects_.takeLatest)(feedAction/* UPDATE_FEED_REQUEST */.Bu, updateFeed);
}
function* watchDeleteFeed() {
    yield (0,effects_.takeLatest)(feedAction/* DELETE_FEED_REQUEST */.CD, deleteFeed);
}
function* feedSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(watchCreateFeed),
        (0,effects_.fork)(watchLoadFeed),
        (0,effects_.fork)(watchUpdateFeed),
        (0,effects_.fork)(watchDeleteFeed), 
    ]);
};

;// CONCATENATED MODULE: ./src/sagas/feeds.ts



const feeds_api = (0,axios/* apiInstance */.bL)();
function* loadFeeds(action) {
    try {
        const result = yield (0,effects_.call)(loadFeedsAPI, action.regionNo);
        yield (0,effects_.put)({
            type: feedsAction/* LOAD_FEEDS_SUCCESS */.g5,
            data: result.data
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: feedsAction/* LOAD_FEEDS_FAILURE */.hw,
            error: err.name
        });
    }
}
function loadFeedsAPI(regionNo) {
    return feeds_api.get(`/feed/${regionNo}`);
}
function* watchLoadFeeds() {
    yield (0,effects_.takeLatest)(feedsAction/* LOAD_FEEDS_REQUEST */.P$, loadFeeds);
}
function* feedsSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(watchLoadFeeds)
    ]);
};

;// CONCATENATED MODULE: ./src/sagas/myPageFeeds.ts



const myPageFeeds_api = (0,axios/* apiInstance */.bL)();
function loadMyFeedsAPI(userId) {
    return myPageFeeds_api.get(`/feed/mypage?userId=${userId}`);
}
// todo: type 설정 필요
function* loadMyFeeds(action) {
    try {
        const result = yield (0,effects_.call)(loadMyFeedsAPI, action.userId);
        yield (0,effects_.put)({
            type: myPageFeedAction/* LOAD_MYPAGE_FEED_SUCCESS */.uK,
            data: result.data
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: myPageFeedAction/* LOAD_MYPAGE_FEED_FAILURE */.aJ,
            error: err.response
        });
    }
}
function* watchLoadMyFeeds() {
    yield (0,effects_.takeLatest)(myPageFeedAction/* LOAD_MYPAGE_FEED_REQUEST */.Cd, loadMyFeeds);
}
function* myFeedsSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(watchLoadMyFeeds)
    ]);
};

;// CONCATENATED MODULE: ./src/sagas/myPageComments.ts



const myPageComments_api = (0,axios/* apiInstance */.bL)();
function loadMyCommentsAPI(userId) {
    return myPageComments_api.get(`/comment/mypage?userId=${userId}`);
}
function* loadMyComments(action) {
    try {
        const result = yield (0,effects_.call)(loadMyCommentsAPI, action.userId);
        yield (0,effects_.put)({
            type: myPageCommentAction/* LOAD_MYPAGE_COMMENT_SUCCESS */.Qw,
            data: result.data
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: myPageCommentAction/* LOAD_MYPAGE_COMMENT_FAILURE */.Kn,
            error: err.response
        });
    }
}
function* watchLoadMyComments() {
    yield (0,effects_.takeLatest)(myPageCommentAction/* LOAD_MYPAGE_COMMENT_REQUEST */.WG, loadMyComments);
}
function* myCommentsSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(watchLoadMyComments)
    ]);
};

;// CONCATENATED MODULE: ./src/sagas/searchedFeeds.ts



const searchedFeeds_api = (0,axios/* apiInstance */.bL)();
function* loadSearchedFeeds(action) {
    try {
        const result = yield (0,effects_.call)(loadSearchedFeedsAPI, action.searchUrl);
        yield (0,effects_.put)({
            type: searchFeedsAction/* LOAD_SEARCH_FEEDS_SUCCESS */._1,
            data: result.data
        });
    } catch (err) {
        yield (0,effects_.put)({
            type: searchFeedsAction/* LOAD_SEARCH_FEEDS_FAILURE */.BP,
            error: err.name
        });
    }
}
function loadSearchedFeedsAPI(searchUrl) {
    return searchedFeeds_api.get(`${searchUrl}`);
}
function* watchLoadSearchedFeeds() {
    yield (0,effects_.takeLatest)(searchFeedsAction/* LOAD_SEARCH_FEEDS_REQUEST */.f9, loadSearchedFeeds);
}
function* searchedFeedsSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(watchLoadSearchedFeeds)
    ]);
};

;// CONCATENATED MODULE: ./src/sagas/index.ts








function* rootSaga() {
    yield (0,effects_.all)([
        (0,effects_.fork)(userSaga),
        (0,effects_.fork)(commentSaga),
        (0,effects_.fork)(feedSaga),
        (0,effects_.fork)(feedsSaga),
        (0,effects_.fork)(myFeedsSaga),
        (0,effects_.fork)(myCommentsSaga),
        (0,effects_.fork)(searchedFeedsSaga), 
    ]);
};

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(173);
;// CONCATENATED MODULE: ./src/store/configureStore.ts







const configureStore = ()=>{
    const sagaMiddleware = external_redux_saga_default()();
    const middlewares = [
        sagaMiddleware
    ];
    const enhancer =  true ? (0,external_redux_.compose)((0,external_redux_.applyMiddleware)(...middlewares)) : 0;
    const store = (0,external_redux_.createStore)(reducers, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(configureStore, {
    debug: "production" === 'development'
});
/* harmony default export */ const store_configureStore = (wrapper);


/***/ })

};
;