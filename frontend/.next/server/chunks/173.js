"use strict";
exports.id = 173;
exports.ids = [173];
exports.modules = {

/***/ 7170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "be": () => (/* binding */ CREATE_COMMENT_REQUEST),
/* harmony export */   "xj": () => (/* binding */ CREATE_COMMENT_SUCCESS),
/* harmony export */   "xD": () => (/* binding */ CREATE_COMMENT_FAILURE),
/* harmony export */   "Jq": () => (/* binding */ LOAD_COMMENTS_REQUEST),
/* harmony export */   "G7": () => (/* binding */ LOAD_COMMENTS_SUCCESS),
/* harmony export */   "Qv": () => (/* binding */ LOAD_COMMENTS_FAILURE),
/* harmony export */   "R2": () => (/* binding */ UPDATE_COMMENT_REQUEST),
/* harmony export */   "MQ": () => (/* binding */ UPDATE_COMMENT_SUCCESS),
/* harmony export */   "SI": () => (/* binding */ UPDATE_COMMENT_FAILURE),
/* harmony export */   "gc": () => (/* binding */ DELETE_COMMENT_REQUEST),
/* harmony export */   "B$": () => (/* binding */ DELETE_COMMENT_SUCCESS),
/* harmony export */   "uN": () => (/* binding */ DELETE_COMMENT_FAILURE),
/* harmony export */   "Th": () => (/* binding */ createCommentRequest),
/* harmony export */   "dC": () => (/* binding */ updateCommentRequest),
/* harmony export */   "sv": () => (/* binding */ deleteCommentRequest)
/* harmony export */ });
/* unused harmony exports createCommentSuccess, createCommentFailure, loadCommentsRequest, loadCommentsSuccess, loadCommentsFailure, updateCommentSuccess, updateCommentFailure, deleteCommentSuccess, deleteCommentFailure */
const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';
const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';
const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST';
const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE';
const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';
const createCommentRequest = (content, feedNo)=>({
        type: CREATE_COMMENT_REQUEST,
        feedNo,
        request: {
            userId: '1234',
            parent: -1,
            content,
            privateMode: 0,
            deleteMode: 0
        }
    })
;
const createCommentSuccess = ()=>({
        type: CREATE_COMMENT_SUCCESS
    })
;
const createCommentFailure = ()=>({
        type: CREATE_COMMENT_FAILURE
    })
;
const loadCommentsRequest = (feedNo)=>({
        type: LOAD_COMMENTS_REQUEST,
        feedNo
    })
;
const loadCommentsSuccess = ()=>({
        type: LOAD_COMMENTS_SUCCESS
    })
;
const loadCommentsFailure = ()=>({
        type: LOAD_COMMENTS_FAILURE
    })
;
const updateCommentRequest = (commentNo, content)=>({
        type: UPDATE_COMMENT_REQUEST,
        commentNo,
        request: {
            content,
            privateMode: false
        }
    })
;
const updateCommentSuccess = ()=>({
        type: UPDATE_COMMENT_SUCCESS
    })
;
const updateCommentFailure = ()=>({
        type: UPDATE_COMMENT_FAILURE
    })
;
const deleteCommentRequest = (commentNo)=>({
        type: DELETE_COMMENT_REQUEST,
        commentNo
    })
;
const deleteCommentSuccess = ()=>({
        type: DELETE_COMMENT_SUCCESS
    })
;
const deleteCommentFailure = ()=>({
        type: DELETE_COMMENT_FAILURE
    })
;


/***/ }),

/***/ 6953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bO": () => (/* binding */ CREATE_FEED_REQUEST),
/* harmony export */   "kC": () => (/* binding */ CREATE_FEED_SUCCESS),
/* harmony export */   "_D": () => (/* binding */ CREATE_FEED_FAILURE),
/* harmony export */   "aY": () => (/* binding */ LOAD_FEED_REQUEST),
/* harmony export */   "gM": () => (/* binding */ LOAD_FEED_SUCCESS),
/* harmony export */   "CW": () => (/* binding */ LOAD_FEED_FAILURE),
/* harmony export */   "Bu": () => (/* binding */ UPDATE_FEED_REQUEST),
/* harmony export */   "RS": () => (/* binding */ UPDATE_FEED_SUCCESS),
/* harmony export */   "gA": () => (/* binding */ UPDATE_FEED_FAILURE),
/* harmony export */   "CD": () => (/* binding */ DELETE_FEED_REQUEST),
/* harmony export */   "Qz": () => (/* binding */ DELETE_FEED_SUCCESS),
/* harmony export */   "qh": () => (/* binding */ DELETE_FEED_FAILURE),
/* harmony export */   "iR": () => (/* binding */ createFeedRequest),
/* harmony export */   "E4": () => (/* binding */ loadFeedRequest),
/* harmony export */   "zz": () => (/* binding */ updateFeedRequest),
/* harmony export */   "Q2": () => (/* binding */ deleteFeedRequest)
/* harmony export */ });
/* unused harmony exports createFeedSuccess, createFeedFailure, loadFeedSuccess, loadFeedFailure, updateFeedSuccess, updateFeedFailure, deleteFeedSuccess, deleteFeedFailure */
const CREATE_FEED_REQUEST = 'CREATE_FEED_REQUEST';
const CREATE_FEED_SUCCESS = 'CREATE_FEED_SUCCESS';
const CREATE_FEED_FAILURE = 'CREATE_FEED_FAILURE';
const LOAD_FEED_REQUEST = 'LOAD_FEED_REQUEST';
const LOAD_FEED_SUCCESS = 'LOAD_FEED_SUCCESS';
const LOAD_FEED_FAILURE = 'LOAD_FEED_FAILURE';
const UPDATE_FEED_REQUEST = 'UPDATE_FEED_REQUEST';
const UPDATE_FEED_SUCCESS = 'UPDATE_FEED_SUCCESS';
const UPDATE_FEED_FAILURE = 'UPDATE_FEED_FAILURE';
const DELETE_FEED_REQUEST = 'DELETE_FEED_REQUEST';
const DELETE_FEED_SUCCESS = 'DELETE_FEED_SUCCESS';
const DELETE_FEED_FAILURE = 'DELETE_FEED_FAILURE';
const createFeedRequest = (value, region, temperature, privateMode, date, files)=>({
        type: CREATE_FEED_REQUEST,
        request: {
            content: value,
            region,
            weather: temperature,
            privateMode,
            photoDate: date,
            imageNames: files,
            userId: '1234',
            deleteMode: 0,
            tags: []
        }
    })
;
const createFeedSuccess = ()=>({
        type: CREATE_FEED_SUCCESS
    })
;
const createFeedFailure = ()=>({
        type: CREATE_FEED_FAILURE
    })
;
/// /
const loadFeedRequest = (feedNo)=>({
        type: LOAD_FEED_REQUEST,
        feedNo
    })
;
const loadFeedSuccess = ()=>({
        type: LOAD_FEED_SUCCESS
    })
;
const loadFeedFailure = ()=>({
        type: LOAD_FEED_FAILURE
    })
;
/// /
const updateFeedRequest = (feedNo, value, region, temperature, date, privateMode, images)=>({
        type: UPDATE_FEED_REQUEST,
        feedNo,
        request: {
            userId: '1234',
            content: value,
            region,
            weather: temperature,
            photoDate: date,
            privateMode,
            deleteMode: 0,
            tags: [],
            imageNames: images
        }
    })
;
const updateFeedSuccess = ()=>({
        type: UPDATE_FEED_SUCCESS
    })
;
const updateFeedFailure = ()=>({
        type: UPDATE_FEED_FAILURE
    })
;
/// /
const deleteFeedRequest = (feedNo)=>({
        type: DELETE_FEED_REQUEST,
        feedNo
    })
;
const deleteFeedSuccess = ()=>({
        type: DELETE_FEED_SUCCESS
    })
;
const deleteFeedFailure = ()=>({
        type: DELETE_FEED_FAILURE
    })
;


/***/ }),

/***/ 3206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CT": () => (/* binding */ API_BASE_URL),
/* harmony export */   "fB": () => (/* binding */ KAKAO_CALLBACK_URL),
/* harmony export */   "BE": () => (/* binding */ KAKAO_MAP_APIKEY)
/* harmony export */ });
const API_BASE_URL = 'http://localhost:8080';
const KAKAO_CALLBACK_URL = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=beb77160d5b0e9d94c528d637f815ea5&redirect_uri=http://localhost:3000/callback/kakao" || 0;
const KAKAO_MAP_APIKEY = "KakaoAK 39e2904a8ec248d9db91d79d53358ab1";



/***/ }),

/***/ 7056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bL": () => (/* binding */ apiInstance),
/* harmony export */   "et": () => (/* binding */ authInstance),
/* harmony export */   "Fz": () => (/* binding */ fileInstance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3206);


function apiInstance() {
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: _config__WEBPACK_IMPORTED_MODULE_1__/* .API_BASE_URL */ .CT,
        headers: {
            'Content-type': 'application/json'
        }
    });
    return instance;
}
function authInstance() {
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: _config__WEBPACK_IMPORTED_MODULE_1__/* .API_BASE_URL */ .CT,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return instance;
}
function fileInstance() {
    const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
        baseURL: _config__WEBPACK_IMPORTED_MODULE_1__/* .API_BASE_URL */ .CT,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return instance;
}



/***/ })

};
;