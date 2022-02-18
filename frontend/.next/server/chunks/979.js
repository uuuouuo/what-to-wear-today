"use strict";
exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 5979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j1": () => (/* binding */ KAKAO_LOGIN_REQUEST),
/* harmony export */   "qq": () => (/* binding */ KAKAO_LOGIN_SUCCESS),
/* harmony export */   "Dq": () => (/* binding */ KAKAO_LOGIN_FAILURE),
/* harmony export */   "ne": () => (/* binding */ CREATE_USER_PROFILE),
/* harmony export */   "NU": () => (/* binding */ CREATE_USER_INTEREST),
/* harmony export */   "ln": () => (/* binding */ CREATE_USER_TYPE),
/* harmony export */   "cz": () => (/* binding */ CREATE_KAKAO_USER_REQUEST),
/* harmony export */   "FR": () => (/* binding */ CREATE_KAKAO_USER_SUCCESS),
/* harmony export */   "BH": () => (/* binding */ CREATE_KAKAO_USER_FAILURE),
/* harmony export */   "SX": () => (/* binding */ kakaoLoginRequest),
/* harmony export */   "xv": () => (/* binding */ createUserProfile),
/* harmony export */   "sL": () => (/* binding */ createUserInterest),
/* harmony export */   "rO": () => (/* binding */ createUserType),
/* harmony export */   "iS": () => (/* binding */ createKakaoUserRequest)
/* harmony export */ });
/* unused harmony exports kakaoLoginSuccess, kakaoLoginFailure, createKakaoUserSuccess, createKakaoUserFailure */
const KAKAO_LOGIN_REQUEST = 'KAKAO_LOGIN_REQUEST';
const KAKAO_LOGIN_SUCCESS = 'KAKAO_LOGIN_SUCCESS';
const KAKAO_LOGIN_FAILURE = 'KAKAO_LOGIN_FAILURE';
const CREATE_USER_PROFILE = 'CREATE_USER_PROFILE';
const CREATE_USER_INTEREST = 'CREATE_USER_INTEREST';
const CREATE_USER_TYPE = 'CREATE_USER_TYPE';
const CREATE_KAKAO_USER_REQUEST = 'CREATE_KAKAO_USER_REQUEST';
const CREATE_KAKAO_USER_SUCCESS = 'CREATE_KAKAO_USER_SUCCESS';
const CREATE_KAKAO_USER_FAILURE = 'CREATE_KAKAO_USER_FAILURE';
const kakaoLoginRequest = (code)=>({
        type: KAKAO_LOGIN_REQUEST,
        code
    })
;
const kakaoLoginSuccess = (isMember)=>({
        type: KAKAO_LOGIN_SUCCESS,
        isMember
    })
;
const kakaoLoginFailure = ()=>({
        type: KAKAO_LOGIN_FAILURE
    })
;
const createUserProfile = (profile, nickname)=>({
        type: CREATE_USER_PROFILE,
        profile,
        nickname
    })
;
const createUserInterest = (interestNos)=>({
        type: CREATE_USER_INTEREST,
        interestNos
    })
;
const createUserType = (typeNos)=>({
        type: CREATE_USER_TYPE,
        typeNos
    })
;
const createKakaoUserRequest = (request)=>({
        type: CREATE_KAKAO_USER_REQUEST,
        request
    })
;
const createKakaoUserSuccess = ()=>({
        type: KAKAO_LOGIN_SUCCESS
    })
;
const createKakaoUserFailure = ()=>({
        type: CREATE_KAKAO_USER_FAILURE
    })
;


/***/ })

};
;