"use strict";
exports.id = 216;
exports.ids = [216];
exports.modules = {

/***/ 8096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ atoms_Input_Input)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/atoms/Input/Input.styled.ts

const Input = (styled_default()).input`
  letter-spacing: 1px;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 1.5vh 0.7vh;
  width: 100%;
`;
/* harmony default export */ const Input_styled = ({
    Input
});

;// CONCATENATED MODULE: ./src/components/atoms/Input/Input.tsx



const Input_Input = ({ className , placeholder ='' , value , type ='text' , onChange ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Input_styled.Input, {
        className: className,
        type: type,
        placeholder: placeholder,
        value: value,
        onChange: onChange
    }));
};
/* harmony default export */ const atoms_Input_Input = (Input_Input);


/***/ }),

/***/ 3871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ atoms_Text_Text)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/atoms/Text/Text.styled.ts

const Text = (styled_default()).span`
  color: ${(props)=>props.color
};
  font-size: ${(props)=>props.theme.fontSize
};
  font-weight: ${(props)=>props.theme.fontWeight
};
`;
/* harmony default export */ const Text_styled = ({
    Text
});

;// CONCATENATED MODULE: ./src/components/atoms/Text/Text.tsx



const Text_Text = ({ className , value , color ='inherit' , size ='inherit' , weight ='inherit' ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Text_styled.Text, {
        className: className,
        color: color,
        theme: {
            fontSize: size,
            fontWeight: weight
        },
        children: value
    }));
};
/* harmony default export */ const atoms_Text_Text = (Text_Text);


/***/ }),

/***/ 4541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ atoms_Button_Button),
  "BT": () => (/* reexport */ atoms_CheckInput_CheckInput),
  "S2": () => (/* reexport */ atoms_FileInput_FileInput),
  "bk": () => (/* reexport */ FooterContainer_FooterContainer),
  "X6": () => (/* reexport */ atoms_Heading_Heading),
  "Ee": () => (/* reexport */ Image_Image),
  "II": () => (/* reexport */ Input/* default */.Z),
  "__": () => (/* reexport */ atoms_Label_Label),
  "tz": () => (/* reexport */ atoms_MainContainer_MainContainer),
  "Vp": () => (/* reexport */ atoms_Tag_Tag),
  "xv": () => (/* reexport */ Text/* default */.Z),
  "gx": () => (/* reexport */ Textarea_Textarea),
  "ZD": () => (/* reexport */ atoms_Toggle_Toggle)
});

// UNUSED EXPORTS: Dropdown

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/atoms/Button/Button.styled.ts

const Button = styled_default()('button')`
  border: none;
  outline: none;
  background-color: ${(props)=>props.theme.bgColor
};
`;
/* harmony default export */ const Button_styled = ({
    Button
});

;// CONCATENATED MODULE: ./src/components/atoms/Button/Button.tsx



const Button_Button = ({ children , className , type ='button' , onClick , disabled =false , bgColor ='#fff' ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Button_styled.Button, {
        theme: {
            bgColor
        },
        type: type,
        onClick: onClick,
        className: className,
        disabled: disabled,
        children: children
    }));
};
/* harmony default export */ const atoms_Button_Button = (Button_Button);

// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
// EXTERNAL MODULE: external "@mui/material/Menu"
var Menu_ = __webpack_require__(8125);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
// EXTERNAL MODULE: external "@mui/icons-material/MoreHoriz"
var MoreHoriz_ = __webpack_require__(5453);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/atoms/Dropdown/Dropdown.tsx







const options = (/* unused pure expression or super */ null && ([
    '수정',
    '삭제'
]));
const ITEM_HEIGHT = 35;
const Dropdown = ()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    return(/*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx(IconButton, {
                "aria-label": "more",
                id: "long-button",
                "aria-controls": open ? 'long-menu' : undefined,
                "aria-expanded": open ? 'true' : undefined,
                "aria-haspopup": "true",
                onClick: handleClick,
                children: /*#__PURE__*/ _jsx(MoreHorizIcon, {})
            }),
            /*#__PURE__*/ _jsx(Menu, {
                id: "long-menu",
                MenuListProps: {
                    'aria-labelledby': 'long-button'
                },
                anchorEl: anchorEl,
                open: open,
                onClose: handleClose,
                PaperProps: {
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20vw'
                    }
                },
                children: options.map((option)=>/*#__PURE__*/ _jsx(MenuItem, {
                        selected: option === 'Pyxis',
                        onClick: handleClose,
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: option
                        })
                    }, option)
                )
            })
        ]
    }));
};
/* harmony default export */ const Dropdown_Dropdown = ((/* unused pure expression or super */ null && (Dropdown)));

;// CONCATENATED MODULE: ./src/components/atoms/CheckInput/CheckInput.styled.ts

const CheckInput = (styled_default()).input`
  display: none;
`;
/* harmony default export */ const CheckInput_styled = ({
    CheckInput
});

;// CONCATENATED MODULE: ./src/components/atoms/CheckInput/CheckInput.tsx



const CheckInput_CheckInput = ({ className , type , value , checked , name , onChange ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(CheckInput_styled.CheckInput, {
        className: className,
        type: type,
        checked: checked,
        value: value,
        name: name,
        onChange: onChange
    }));
};
/* harmony default export */ const atoms_CheckInput_CheckInput = (CheckInput_CheckInput);

;// CONCATENATED MODULE: ./src/components/atoms/FileInput/FileInput.styled.ts

const FileInput = (styled_default()).input`
  display: none;
`;
/* harmony default export */ const FileInput_styled = ({
    FileInput
});

;// CONCATENATED MODULE: ./src/components/atoms/FileInput/FileInput.tsx



const FileInput_FileInput = ({ className , accept , onChange , multiple =false  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(FileInput_styled.FileInput, {
        className: className,
        type: "file",
        accept: accept,
        onChange: onChange,
        multiple: multiple
    }));
};
/* harmony default export */ const atoms_FileInput_FileInput = (FileInput_FileInput);

;// CONCATENATED MODULE: ./src/components/atoms/FooterContainer/FooterContainer.styled.ts

const FooterContainer = (styled_default()).div`
  display: flex;
  width: 100%;

  & button {
    flex: 1;
  }
`;
/* harmony default export */ const FooterContainer_styled = ({
    FooterContainer
});

;// CONCATENATED MODULE: ./src/components/atoms/FooterContainer/FooterContainer.tsx



const FooterContainer_FileInput = ({ className , children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(FooterContainer_styled.FooterContainer, {
        className: className,
        children: children
    }));
};
/* harmony default export */ const FooterContainer_FooterContainer = (FooterContainer_FileInput);

;// CONCATENATED MODULE: ./src/components/atoms/Heading/Heading.styled.ts

const Heading = (styled_default()).h1`
  margin: 0;
  font-weight: 700;
  color: ${(props)=>props.color
};
  text-align: center;
`;
/* harmony default export */ const Heading_styled = ({
    Heading
});

;// CONCATENATED MODULE: ./src/components/atoms/Heading/Heading.tsx



const Heading_Heading = ({ level , as: Component = `h${level}` , className , children , color ='inherit' ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Heading_styled.Heading, {
        as: Component,
        className: className,
        color: color,
        children: children
    }));
};
/* harmony default export */ const atoms_Heading_Heading = (Heading_Heading);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/components/atoms/Image/Image.tsx



const Image = ({ className , src , width ='100' , height ='100' , alt ='' ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
        className: className,
        src: src,
        width: width,
        height: height,
        alt: alt
    }));
};
/* harmony default export */ const Image_Image = (Image);

// EXTERNAL MODULE: ./src/components/atoms/Input/Input.tsx + 1 modules
var Input = __webpack_require__(8096);
;// CONCATENATED MODULE: ./src/components/atoms/Label/Label.styled.ts

const Label = (styled_default()).label`
  display: inline-block;
  font-size: 1rem;
  letter-spacing: 2px;
  color: ${(props)=>props.color
};
  margin: 1.5vh 0;
`;
/* harmony default export */ const Label_styled = ({
    Label
});

;// CONCATENATED MODULE: ./src/components/atoms/Label/Label.tsx



const Label_Label = ({ className , children , color  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Label_styled.Label, {
        className: className,
        color: color,
        children: children
    }));
};
/* harmony default export */ const atoms_Label_Label = (Label_Label);

;// CONCATENATED MODULE: ./src/components/atoms/MainContainer/MainContainer.styled.ts

const MainContainer = (styled_default()).div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding-top: 5vh;
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.15));
  background-image: linear-gradient(135deg, #ad6bff 0%, #74bcf7 100%);
  box-sizing: border-box;
`;
/* harmony default export */ const MainContainer_styled = ({
    MainContainer
});

;// CONCATENATED MODULE: ./src/components/atoms/MainContainer/MainContainer.tsx



const MainContainer_MainContainer = ({ className , children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(MainContainer_styled.MainContainer, {
        className: className,
        children: children
    }));
};
/* harmony default export */ const atoms_MainContainer_MainContainer = (MainContainer_MainContainer);

;// CONCATENATED MODULE: ./src/components/atoms/Tag/Tag.styled.ts

const Tag = (styled_default()).span`
  border-radius: 0.3rem;
  color: #dd3345;
  background-color: #f4f4f8;
  margin: 0.5vh 2vw;
  padding: 2px 4px;
`;
/* harmony default export */ const Tag_styled = ({
    Tag
});

;// CONCATENATED MODULE: ./src/components/atoms/Tag/Tag.tsx



const Tag_Tag = ({ className , value  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Tag_styled.Tag, {
        className: className,
        children: value
    }));
};
/* harmony default export */ const atoms_Tag_Tag = (Tag_Tag);

// EXTERNAL MODULE: ./src/components/atoms/Text/Text.tsx + 1 modules
var Text = __webpack_require__(3871);
;// CONCATENATED MODULE: ./src/components/atoms/Textarea/Textarea.styled.ts

const Textarea = (styled_default()).textarea`
  letter-spacing: 1px;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 1.5vh 0.7vh;
  width: 100%;
  resize: none;
  line-height: 1.5rem;
`;
/* harmony default export */ const Textarea_styled = ({
    Textarea
});

;// CONCATENATED MODULE: ./src/components/atoms/Textarea/Textarea.tsx



const Textarea_textarea = ({ className , value , onChange  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Textarea_styled.Textarea, {
        className: className,
        value: value,
        onChange: onChange
    }));
};
/* harmony default export */ const Textarea_Textarea = (Textarea_textarea);

;// CONCATENATED MODULE: ./src/components/atoms/Toggle/Toggle.styled.ts

const Toggle = (styled_default()).button`
  margin: 0 0.5rem;
  padding: 0;
  position: relative;
  border: none;
  height: 2.5rem;
  width: 5rem;
  border-radius: 2.5rem;
  color: #6b7381;
  background: #bdc1c8;
  font-size: 1.75rem;
  display: inline-block;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  transition: all 0.2s ease-in-out;

  &.active {
    background-color: #000;
  }

  &:before,
  &:after {
    line-height: 2.5rem;
    width: 1rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    position: absolute;
    bottom: 0;
    transition: opacity 0.25s;
    color: #fff;
    left: 0.6875rem;
    width: 3.875rem;
  }

  &:before {
    text-align: right;
    content: 'Off';
  }

  &:after {
    text-align: left;
    opacity: 0;
    content: 'On';
  }

  &.active {
    transition: background-color 0.25s;
    &:before {
      opacity: 0;
    }
    &:after {
      opacity: 1;
    }
  }
`;
const Handle = (styled_default()).div`
  position: absolute;
  top: 0.3125rem;
  left: 0.3125rem;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  background: #fff;
  transition: left 0.25s;

  &.active {
    left: 2.8125rem;
  }
`;
/* harmony default export */ const Toggle_styled = ({
    Toggle,
    Handle
});

;// CONCATENATED MODULE: ./src/components/atoms/Toggle/Toggle.tsx



const Toggle_Toggle = ({ className , value , setValue  })=>{
    const onClick = (e)=>{
        setValue(!value);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(Toggle_styled.Toggle, {
        "data-toggle": "button",
        className: `${className} ${value ? 'active' : ''}`,
        onClick: onClick,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Toggle_styled.Handle, {
            className: value ? 'active' : ''
        })
    }));
};
/* harmony default export */ const atoms_Toggle_Toggle = (Toggle_Toggle);

;// CONCATENATED MODULE: ./src/components/atoms/index.ts

















/***/ }),

/***/ 3380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NotificationContent_NotificationContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/molecules/index.ts + 53 modules
var molecules = __webpack_require__(9205);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/molecules/NotificationContent/NotificationContent.styled.ts

const Notification = (styled_default()).div`
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.15));
  background-color: #ffffff;
  display: flex;
  padding: 2vh 2vw;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 3.5vh 3.5vh;
`;
const ContentContainer = (styled_default()).div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  margin-left: 1vh;
`;
const UserName = (styled_default()).a`
  font-weight: bold;
`;
const Content = (styled_default()).div`
  margin-top: 1vh;
  color: #888;
`;
/* harmony default export */ const NotificationContent_styled = ({
    Notification,
    ContentContainer,
    UserName,
    Content
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/molecules/NotificationContent/NotificationContent.tsx





const NotificationContent = ({ className , notification  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(NotificationContent_styled.Notification, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(molecules/* UserProfile */.Iw, {
                user: notification.sender
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NotificationContent_styled.ContentContainer, {
                children: notification.comment ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/feed/${notification.comment.feedNo}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NotificationContent_styled.UserName, {
                                children: notification.sender.nickname
                            })
                        }),
                        "님이 댓글을 작성했습니다.",
                        /*#__PURE__*/ jsx_runtime_.jsx(NotificationContent_styled.Content, {
                            children: notification.comment.content
                        })
                    ]
                }) : notification.feed ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/feed/${notification.feed.no}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NotificationContent_styled.UserName, {
                                children: notification.sender.nickname
                            })
                        }),
                        "님이 피드를 좋아합니다.",
                        /*#__PURE__*/ jsx_runtime_.jsx(NotificationContent_styled.Content, {
                            children: notification.feed.content
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/user/${notification.sender.userId}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NotificationContent_styled.UserName, {
                                children: notification.sender.nickname
                            })
                        }),
                        "님이 팔로우하기 시작했습니다."
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const NotificationContent_NotificationContent = (NotificationContent);


/***/ }),

/***/ 9205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Se": () => (/* reexport */ ArticleImage_ArticleImage),
  "q3": () => (/* reexport */ molecules_CheckInputFormGroup_CheckInputFormGroup),
  "sv": () => (/* reexport */ Comment_Comment),
  "EQ": () => (/* reexport */ CommentForm_CommentForm),
  "ON": () => (/* reexport */ DrawerMenu),
  "Fu": () => (/* reexport */ molecules_FeedHeader_FeedHeader),
  "ye": () => (/* reexport */ FeedRegion_FeedRegion),
  "yd": () => (/* reexport */ FollowingModal_FollowingModal),
  "Zj": () => (/* reexport */ FooterNavbar_FooterNavbar),
  "cw": () => (/* reexport */ molecules_FormGroup_FormGroup),
  "K1": () => (/* reexport */ molecules_FormGroupWithIcon_FormGroupWithIcon),
  "h4": () => (/* reexport */ molecules_Header_Header),
  "Y": () => (/* reexport */ ImageList),
  "Ur": () => (/* reexport */ ImageUpload_ImageUpload),
  "im": () => (/* reexport */ KakaoButton_KakaoButton),
  "u_": () => (/* reexport */ molecules_Modal_Modal),
  "Q2": () => (/* reexport */ RegionFeed_RegionFeed),
  "BG": () => (/* reexport */ RegionSearch_RegionSearch),
  "qo": () => (/* reexport */ SuccessBadge_SuccessBadge),
  "d0": () => (/* reexport */ TabMenu_TabMenu),
  "H4": () => (/* reexport */ molecules_TextEditor_TextEditor),
  "Dx": () => (/* reexport */ Title_Title),
  "Iw": () => (/* reexport */ UserProfile_UserProfile),
  "HO": () => (/* reexport */ UserProfileWithInfo_UserProfileWithInfo),
  "yO": () => (/* reexport */ Weather_Weather)
});

// UNUSED EXPORTS: ButtonModal, ImageEditor, NotificationContent, ReportForm, TagList

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "react-swipeable-views"
var external_react_swipeable_views_ = __webpack_require__(9980);
var external_react_swipeable_views_default = /*#__PURE__*/__webpack_require__.n(external_react_swipeable_views_);
// EXTERNAL MODULE: external "@mui/material/MobileStepper"
var MobileStepper_ = __webpack_require__(8261);
var MobileStepper_default = /*#__PURE__*/__webpack_require__.n(MobileStepper_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "@material-ui/core/styles"
var core_styles_ = __webpack_require__(8308);
;// CONCATENATED MODULE: ./src/components/molecules/ArticleImage/ArticleImage.styled.ts


const Stepper = (styled_default()).div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;
const useStyles = (0,core_styles_.makeStyles)({
    dot: {
        width: '5px',
        height: '5px',
        margin: '0 5px'
    },
    dotActive: {
        background: '#000'
    }
});
/* harmony default export */ const ArticleImage_styled = ({
    Stepper,
    useStyles
});

;// CONCATENATED MODULE: ./src/components/molecules/ArticleImage/ArticleImage.tsx







const ArticleImage = ({ images  })=>{
    const MAX_STEPS = images.length;
    const theme = (0,styles_.useTheme)();
    const classes = ArticleImage_styled.useStyles();
    const [activeStep, setActiveStep] = external_react_default().useState(0);
    const handleStepChange = (step)=>{
        setActiveStep(step);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            maxWidth: 350,
            flexGrow: 1
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_swipeable_views_default()), {
                axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
                index: activeStep,
                onChangeIndex: handleStepChange,
                enableMouseEvents: true,
                children: images.map((step, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: Math.abs(activeStep - index) <= 2 ? /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            component: "img",
                            sx: {
                                height: 255,
                                display: 'block',
                                maxWidth: 350,
                                overflow: 'hidden',
                                width: '100%'
                            },
                            src: step,
                            alt: "feed image"
                        }) : null
                    }, step)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ArticleImage_styled.Stepper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx((MobileStepper_default()), {
                    classes: {
                        dot: classes.dot,
                        dotActive: classes.dotActive
                    },
                    steps: MAX_STEPS,
                    position: "static",
                    activeStep: activeStep,
                    backButton: "",
                    nextButton: ""
                })
            })
        ]
    }));
};
/* harmony default export */ const ArticleImage_ArticleImage = (ArticleImage);

// EXTERNAL MODULE: external "@mui/material/Dialog"
var Dialog_ = __webpack_require__(8611);
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);
;// CONCATENATED MODULE: ./src/components/molecules/ButtonModal/ButtonModal.styled.ts


const Dialog = styled_default()((Dialog_default()))`
  & .MuiPaper-rounded {
    border-radius: 0;
  }
`;
/* harmony default export */ const ButtonModal_styled = ({
    Dialog
});

;// CONCATENATED MODULE: ./src/components/molecules/ButtonModal/ButtonModal.tsx



const ButtonModal_Modal = ({ className , children , open  })=>{
    return(/*#__PURE__*/ _jsx(Styled.Dialog, {
        className: className,
        open: open,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        children: children
    }));
};
/* harmony default export */ const ButtonModal = ((/* unused pure expression or super */ null && (ButtonModal_Modal)));

// EXTERNAL MODULE: ./src/components/atoms/index.ts + 22 modules
var atoms = __webpack_require__(4541);
;// CONCATENATED MODULE: ./src/components/molecules/CheckInputFormGroup/CheckInputFormGroup.styled.ts


const CheckInputFormGroup = styled_default()(atoms/* Label */.__)`
  padding: 2vh;
  cursor: pointer;

  &.checked {
    background-color: #000 !important;
    color: #fff;
  }
`;
/* harmony default export */ const CheckInputFormGroup_styled = ({
    CheckInputFormGroup
});

;// CONCATENATED MODULE: ./src/components/molecules/CheckInputFormGroup/CheckInputFormGroup.tsx




const CheckInputFormGroup_CheckInputFormGroup = ({ className , type , value , checked , name , children , onChange ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(CheckInputFormGroup_styled.CheckInputFormGroup, {
        className: `${className} ${checked ? 'checked' : ''}`,
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(atoms/* CheckInput */.BT, {
                value: value,
                type: type,
                checked: checked,
                name: name,
                onChange: onChange
            })
        ]
    }));
};
/* harmony default export */ const molecules_CheckInputFormGroup_CheckInputFormGroup = (CheckInputFormGroup_CheckInputFormGroup);

;// CONCATENATED MODULE: ./src/components/molecules/Comment/Comment.styled.ts

const Container = (styled_default()).div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  margin: 2vh;
  padding: 1.5vh;
  background-color: #fff;
`;
const ButtonContainer = (styled_default()).div`
  position: absolute;
  top: 0;
  right: 0;

  & button {
    padding: 1vh 1vw;
  }

  & button:nth-child(1) {
    margin-right: 0.5vh;
  }
`;
const ContentContainer = (styled_default()).div`
  margin: 1vh;
`;
/* harmony default export */ const Comment_styled = ({
    Container,
    ButtonContainer,
    ContentContainer
});

// EXTERNAL MODULE: ./src/hooks/index.ts + 4 modules
var hooks = __webpack_require__(7249);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/action/commentAction.ts
var commentAction = __webpack_require__(7170);
// EXTERNAL MODULE: external "javascript-time-ago"
var external_javascript_time_ago_ = __webpack_require__(9062);
var external_javascript_time_ago_default = /*#__PURE__*/__webpack_require__.n(external_javascript_time_ago_);
// EXTERNAL MODULE: ./node_modules/javascript-time-ago/locale/en.json
var en = __webpack_require__(7946);
;// CONCATENATED MODULE: ./src/libs/makeTimeString.ts


external_javascript_time_ago_default().addLocale(en);
const timeAgo = new (external_javascript_time_ago_default())('en-US');
/* harmony default export */ const makeTimeString = ((pastTime)=>{
    const pastDateTime = new Date(pastTime);
    const timeString = timeAgo.format(pastDateTime, 'round');
    return typeof timeString !== 'string' ? timeString[0] : timeString;
});

;// CONCATENATED MODULE: ./src/components/molecules/Comment/Comment.tsx









const Comment = ({ className , comment  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const [display, , openDisplay, closeDisplay] = (0,hooks/* useDisplay */.AW)(true);
    const [commentValue, setCommentValue, onCommentValueChange] = (0,hooks/* useChange */.AU)(comment.content);
    const updateComment = (e)=>{
        e.preventDefault();
        openDisplay();
        dispatch((0,commentAction/* updateCommentRequest */.dC)(comment.no, commentValue));
    };
    const showEdit = (e)=>{
        setCommentValue(comment.content);
        closeDisplay();
    };
    const closeEdit = (e)=>{
        openDisplay();
    };
    const deleteComment = (e)=>{
        dispatch((0,commentAction/* deleteCommentRequest */.sv)(comment.no));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Comment_styled.Container, {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(UserProfileWithInfo_UserProfileWithInfo, {
                user: {
                    userId: comment.userId,
                    nickname: comment.nickname,
                    profileImage: comment.profileImage
                },
                sub: makeTimeString(comment.createdAt)
            }),
            display ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Comment_styled.ButtonContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Button */.zx, {
                                bgColor: "#000",
                                onClick: showEdit,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                                    color: "#fff",
                                    value: "수정"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Button */.zx, {
                                bgColor: "#fe7b45",
                                onClick: deleteComment,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                                    color: "#fff",
                                    value: "삭제"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Comment_styled.ContentContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                            color: "#000",
                            value: comment.content
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Comment_styled.ButtonContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Button */.zx, {
                            bgColor: "#fe7b45",
                            onClick: closeEdit,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                                color: "#fff",
                                value: "취소"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CommentForm_CommentForm, {
                        value: commentValue,
                        onChange: onCommentValueChange,
                        onClick: updateComment
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Comment_Comment = (Comment);

;// CONCATENATED MODULE: ./src/components/molecules/CommentForm/CommentForm.styled.ts


const Form = (styled_default()).form`
  display: flex;
  background-color: '#fff';
  margin: 1vh 0;
`;
const CommentForm_styled_Button = styled_default()(atoms/* Button */.zx)`
  flex: 1;
  background-color: #000;
  color: #fff;
  margin-left: 1vw;
`;
const Textarea = styled_default()(atoms/* Textarea */.gx)`
  flex: 9;
  border: 2px solid #000;
  padding: 0.5vh;
`;
/* harmony default export */ const CommentForm_styled = ({
    Form,
    Button: CommentForm_styled_Button,
    Textarea
});

// EXTERNAL MODULE: external "@mui/icons-material/Send"
var Send_ = __webpack_require__(4731);
var Send_default = /*#__PURE__*/__webpack_require__.n(Send_);
;// CONCATENATED MODULE: ./src/components/molecules/CommentForm/CommentForm.tsx




const CommentForm = ({ value , onChange , onClick  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(CommentForm_styled.Form, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CommentForm_styled.Textarea, {
                value: value,
                onChange: onChange
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CommentForm_styled.Button, {
                type: "submit",
                onClick: onClick,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Send_default()), {})
            })
        ]
    }));
};
/* harmony default export */ const CommentForm_CommentForm = (CommentForm);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(7898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(3365);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
;// CONCATENATED MODULE: ./src/components/molecules/DrawerMenu/DrawerMenu.tsx










const TemporaryDrawer = ({ className , userId  })=>{
    const [state, setState] = external_react_default().useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });
    const toggleDrawer = (anchor, open)=>(event)=>{
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
            setState({
                ...state,
                [anchor]: open
            });
        }
    ;
    const nextFunction = (event)=>{
        const target = event.target;
        if (target.innerHTML === '지역설정') {
            router_default().push(`/region/${userId}`);
        }
    };
    const list = (anchor)=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250
            },
            role: "presentation",
            onClick: toggleDrawer(anchor, false),
            onKeyDown: toggleDrawer(anchor, false),
            children: /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                children: [
                    '지역설정',
                    '고객센터',
                    '로그아웃'
                ].map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                        button: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                            onClick: nextFunction,
                            primary: text
                        })
                    }, text)
                )
            })
        })
    ;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: className,
        children: [
            'right'
        ].map((anchor)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        onClick: toggleDrawer(anchor, true),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                            fontSize: "large"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                        anchor: anchor,
                        open: state[anchor],
                        onClose: toggleDrawer(anchor, false),
                        children: list(anchor)
                    })
                ]
            }, anchor)
        )
    }));
};
/* harmony default export */ const DrawerMenu = (TemporaryDrawer);

;// CONCATENATED MODULE: ./src/components/molecules/FeedHeader/FeedHeader.styled.ts

const FeedHeader = (styled_default()).div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1vh;
`;
const FeedHeader_styled_Container = (styled_default()).div`
  display: flex;
`;
const MoreButtonContainer = (styled_default()).div`
  position: relative;
  margin-left: 1vw;
`;
const MoreContent = (styled_default()).div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  bottom: -13vh;
  border: 2px solid #ccc;
  padding: 1vh;
  background-color: #fff;

  &::before {
    content: '';
    border-top: 2px solid #ccc;
    border-left: 2px solid #ccc;
    position: absolute;
    top: -7px;
    right: 1vh;
    width: 10px;
    height: 10px;
    background-color: #fff;
    transform: rotate(45deg);
  }

  & button {
    padding: 3vw;
    width: 18vw;
  }
`;
/* harmony default export */ const FeedHeader_styled = ({
    FeedHeader,
    Container: FeedHeader_styled_Container,
    MoreButtonContainer,
    MoreContent
});

// EXTERNAL MODULE: ./src/action/feedAction.ts
var feedAction = __webpack_require__(6953);
// EXTERNAL MODULE: external "@mui/icons-material/MoreVert"
var MoreVert_ = __webpack_require__(6952);
var MoreVert_default = /*#__PURE__*/__webpack_require__.n(MoreVert_);
;// CONCATENATED MODULE: ./src/components/molecules/FeedHeader/FeedHeader.tsx











const FeedHeader_FeedHeader = ({ className , user , createdAt , weather , feedNo  })=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: isUser , 1: setIsUser  } = (0,external_react_.useState)(true);
    const { 0: isDetail , 1: setIsDetail  } = (0,external_react_.useState)(true);
    const viewUDBtn = isDetail && isUser;
    const [display, setDisplay] = (0,hooks/* useDisplay */.AW)(false);
    const toggleDisplay = (e)=>{
        setDisplay(!display);
    };
    const deleteFeedAction = (e)=>{
        dispatch((0,feedAction/* deleteFeedRequest */.Q2)(feedNo));
        router_default().push('/');
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(FeedHeader_styled.FeedHeader, {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(UserProfileWithInfo_UserProfileWithInfo, {
                user: user,
                sub: makeTimeString(createdAt)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FeedHeader_styled.Container, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Weather_Weather, {
                        weather: weather
                    }),
                    viewUDBtn ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FeedHeader_styled.MoreButtonContainer, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Button */.zx, {
                                    onClick: toggleDisplay,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((MoreVert_default()), {})
                                }),
                                display ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FeedHeader_styled.MoreContent, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Button */.zx, {
                                            bgColor: "#000",
                                            onClick: (e)=>{
                                                router_default().push(`/feed/feedUpdate/${feedNo}`);
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                                                color: "#fff",
                                                value: "수정"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Button */.zx, {
                                            bgColor: "#fe7b45",
                                            onClick: deleteFeedAction,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                                                color: "#fff",
                                                value: "삭제"
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                            ]
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                ]
            })
        ]
    }));
};
/* harmony default export */ const molecules_FeedHeader_FeedHeader = (FeedHeader_FeedHeader);

;// CONCATENATED MODULE: ./src/components/molecules/FeedRegion/FeedRegion.styled.ts

const SwiperSlideContainer = (styled_default()).div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh;
`;
/* harmony default export */ const FeedRegion_styled = ({
    SwiperSlideContainer
});

// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(3630);
// EXTERNAL MODULE: external "swiper"
var external_swiper_ = __webpack_require__(2770);
var external_swiper_default = /*#__PURE__*/__webpack_require__.n(external_swiper_);
// EXTERNAL MODULE: ./node_modules/swiper/swiper-bundle.min.css
var swiper_bundle_min = __webpack_require__(1631);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.min.css
var swiper_min = __webpack_require__(8722);
;// CONCATENATED MODULE: ./src/components/molecules/FeedRegion/FeedRegion.tsx









external_swiper_default().use([
    external_swiper_.Pagination
]);
const FeedRegion = ({ interestRegions  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
        direction: "vertical",
        centeredSlides: true,
        pagination: {
            clickable: true,
            type: 'custom'
        },
        style: {
            height: '7vh'
        },
        children: interestRegions.map((region)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.SwiperSlide, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FeedRegion_styled.SwiperSlideContainer, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                            value: region.regionName
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Weather_Weather, {
                            weather: region.weather
                        })
                    ]
                })
            }, region.no)
        )
    }));
};
/* harmony default export */ const FeedRegion_FeedRegion = (FeedRegion);

// EXTERNAL MODULE: external "@mui/material/DialogActions"
var DialogActions_ = __webpack_require__(9404);
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);
// EXTERNAL MODULE: external "@mui/material/DialogContent"
var DialogContent_ = __webpack_require__(1094);
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);
// EXTERNAL MODULE: external "@mui/material/DialogContentText"
var DialogContentText_ = __webpack_require__(2268);
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);
// EXTERNAL MODULE: external "@mui/material/DialogTitle"
var DialogTitle_ = __webpack_require__(2468);
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);
;// CONCATENATED MODULE: ./src/components/molecules/FollowingModal/FollowingModal.styled.ts


const MainContainer = styled_default()(atoms/* MainContainer */.tz)`
  text-align: center;
  justify-content: start;
`;
const ProfileContainer = (styled_default()).div`
  margin: 45px 20px 30px;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  /* transform: translateY(-5vh); */
  /* margin: 5vh; */
`;
const RowContainer = (styled_default()).div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  width: 100%;
`;
const ColumnContainer = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const FollowingModal_styled_ContentContainer = (styled_default()).div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
/* harmony default export */ const FollowingModal_styled = ({
    MainContainer,
    ProfileContainer,
    RowContainer,
    ColumnContainer,
    ContentContainer: FollowingModal_styled_ContentContainer
});

// EXTERNAL MODULE: external "@mui/material/Avatar"
var Avatar_ = __webpack_require__(2120);
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);
// EXTERNAL MODULE: ./src/components/atoms/Text/Text.tsx + 1 modules
var Text_Text = __webpack_require__(3871);
;// CONCATENATED MODULE: ./src/components/molecules/FollowingModal/FollowingModal.tsx











const FollowingModal = ({ title , arr  })=>{
    const [open, setOpen] = external_react_default().useState(false);
    const [scroll, setScroll] = external_react_default().useState('paper');
    const handleClickOpen = (scrollType)=>()=>{
            setOpen(true);
            setScroll(scrollType);
        }
    ;
    const handleClose = ()=>{
        setOpen(false);
    };
    const descriptionElementRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        if (open) {
            const { current: descriptionElement  } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [
        open
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                onClick: handleClickOpen('paper'),
                children: [
                    title,
                    " ",
                    arr.length
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Dialog_default()), {
                open: open,
                onClose: handleClose,
                scroll: scroll,
                "aria-labelledby": "scroll-dialog-title",
                "aria-describedby": "scroll-dialog-description",
                fullScreen: true,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                        id: "scroll-dialog-title",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                        dividers: scroll === 'paper',
                        children: /*#__PURE__*/ jsx_runtime_.jsx((DialogContentText_default()), {
                            id: "scroll-dialog-description",
                            ref: descriptionElementRef,
                            tabIndex: -1,
                            children: arr.map((person)=>{
                                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(FollowingModal_styled.RowContainer, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
                                            src: person.profileImg,
                                            sx: {
                                                width: 50,
                                                height: 50
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Text_Text/* default */.Z, {
                                            value: person.nickname
                                        })
                                    ]
                                }, person.userId));
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((DialogActions_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                            onClick: handleClose,
                            children: "Cancel"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const FollowingModal_FollowingModal = (FollowingModal);

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/Favorite"
var Favorite_ = __webpack_require__(7372);
var Favorite_default = /*#__PURE__*/__webpack_require__.n(Favorite_);
// EXTERNAL MODULE: external "@mui/icons-material/Home"
var Home_ = __webpack_require__(3467);
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);
// EXTERNAL MODULE: external "@mui/icons-material/Search"
var Search_ = __webpack_require__(8017);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);
// EXTERNAL MODULE: external "@mui/icons-material/AddCircle"
var AddCircle_ = __webpack_require__(4984);
var AddCircle_default = /*#__PURE__*/__webpack_require__.n(AddCircle_);
// EXTERNAL MODULE: external "@mui/icons-material/Person"
var Person_ = __webpack_require__(1939);
var Person_default = /*#__PURE__*/__webpack_require__.n(Person_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@mui/material/BottomNavigationAction"
var BottomNavigationAction_ = __webpack_require__(7307);
var BottomNavigationAction_default = /*#__PURE__*/__webpack_require__.n(BottomNavigationAction_);
;// CONCATENATED MODULE: ./src/components/molecules/FooterNavbar/FooterNavbar.styled.ts


const BottomNavigationAction = styled_default()((BottomNavigationAction_default()))`
  color: silver;
  &.Mui-selected {
    color: #000;
  }
`;
/* harmony default export */ const FooterNavbar_styled = ({
    BottomNavigationAction
});

;// CONCATENATED MODULE: ./src/components/molecules/FooterNavbar/FooterNavbar.tsx











const FooterNavbar = ()=>{
    const current = (0,router_.useRouter)().asPath;
    const [value, setValue] = external_react_default().useState(0);
    (0,external_react_.useEffect)(()=>{
        if (current === '/') {
            setValue(0);
        } else if (current.includes('search')) {
            setValue(1);
        } else if (current.includes('write')) {
            setValue(2);
        } else if (current.includes('like')) {
            setValue(3);
        } else if (current.includes('user')) {
            setValue(4);
        } else {
            setValue(10);
        }
    }, [
        current
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(material_.Paper, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.BottomNavigation, {
            showLabels: true,
            value: value,
            onChange: (event, newValue)=>{
                setValue(newValue);
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(FooterNavbar_styled.BottomNavigationAction, {
                    sx: {
                        pt: 0,
                        pb: 0
                    },
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Home_default()), {})
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(FooterNavbar_styled.BottomNavigationAction, {
                    sx: {
                        pt: 0,
                        pb: 0
                    },
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/search",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {})
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(FooterNavbar_styled.BottomNavigationAction, {
                    sx: {
                        pt: 0,
                        pb: 0
                    },
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/feed/write",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((AddCircle_default()), {})
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(FooterNavbar_styled.BottomNavigationAction, {
                    sx: {
                        pt: 0,
                        pb: 0
                    },
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/feed/like",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Favorite_default()), {})
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(FooterNavbar_styled.BottomNavigationAction, {
                    sx: {
                        pt: 0,
                        pb: 0
                    },
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/user/1234",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Person_default()), {})
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const FooterNavbar_FooterNavbar = (FooterNavbar);

;// CONCATENATED MODULE: ./src/components/molecules/FormGroup/FormGroup.styled.ts


const FormGroup = (styled_default()).div`
  padding: 2vh;
`;
const FormGroup_styled_Text = styled_default()(atoms/* Text */.xv)`
  display: block;
  padding: 0.7vh;
`;
/* harmony default export */ const FormGroup_styled = ({
    FormGroup,
    Text: FormGroup_styled_Text
});

;// CONCATENATED MODULE: ./src/components/molecules/FormGroup/FormGroup.tsx




const FormGroup_FormGroup = ({ className , placeholder ='' , value , type ='text' , onChange , label ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(FormGroup_styled.FormGroup, {
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(atoms/* Label */.__, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(FormGroup_styled.Text, {
                    value: label
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Input */.II, {
                    placeholder: placeholder,
                    value: value,
                    type: type,
                    onChange: onChange
                })
            ]
        })
    }));
};
/* harmony default export */ const molecules_FormGroup_FormGroup = (FormGroup_FormGroup);

;// CONCATENATED MODULE: ./src/components/molecules/FormGroupWithIcon/FormGroupWithIcon.styled.ts


const FormGroupWithIcon = (styled_default()).div`
  padding: 2vh;
`;
const Label = styled_default()(atoms/* Label */.__)`
  display: flex;
  align-items: center;
`;
/* harmony default export */ const FormGroupWithIcon_styled = ({
    FormGroupWithIcon,
    Label
});

// EXTERNAL MODULE: ./src/components/atoms/Input/Input.tsx + 1 modules
var Input = __webpack_require__(8096);
;// CONCATENATED MODULE: ./src/components/molecules/FormGroupWithIcon/FormGroupWithIcon.tsx




const FormGroupWithIcon_FormGroupWithIcon = ({ className , placeholder ='' , value , type ='text' , onChange , children ,  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(FormGroupWithIcon_styled.FormGroupWithIcon, {
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FormGroupWithIcon_styled.Label, {
            children: [
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                    placeholder: placeholder,
                    value: value,
                    type: type,
                    onChange: onChange
                })
            ]
        })
    }));
};
/* harmony default export */ const molecules_FormGroupWithIcon_FormGroupWithIcon = (FormGroupWithIcon_FormGroupWithIcon);

;// CONCATENATED MODULE: ./src/components/molecules/Header/Header.styled.ts


const Header = (styled_default()).header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1vh;
  background-image: linear-gradient(135deg, #ad6bff 0%, #74bcf7 100%);
`;
const LeftSide = (styled_default()).div`
  text-align: center;
  width: 10vw;
`;
const RightSide = (styled_default()).div`
  text-align: center;
  width: 10vw;
`;
const Heading = styled_default()(atoms/* Heading */.X6)`
  display: flex;
  height: 30px;
  align-items: center;
`;
/* harmony default export */ const Header_styled = ({
    Header,
    LeftSide,
    RightSide,
    Heading
});

// EXTERNAL MODULE: external "@mui/icons-material/Notifications"
var Notifications_ = __webpack_require__(1567);
var Notifications_default = /*#__PURE__*/__webpack_require__.n(Notifications_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowBack"
var ArrowBack_ = __webpack_require__(3622);
var ArrowBack_default = /*#__PURE__*/__webpack_require__.n(ArrowBack_);
;// CONCATENATED MODULE: ./src/components/molecules/Header/Header.tsx








const Header_Header = ({ leftSide , name , rightSide  })=>{
    let rIcon = null;
    if (rightSide === 'notification') {
        rIcon = /*#__PURE__*/ jsx_runtime_.jsx(Header_styled.RightSide, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/notification",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Notifications_default()), {})
            })
        });
    } else rIcon = /*#__PURE__*/ jsx_runtime_.jsx("div", {});
    const moveBack = (e)=>{
        router_default().back();
    };
    let lType = null;
    if (leftSide === 'logo') {
        lType = /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Image */.Ee, {
            src: "/images/icon/Logo.png",
            width: 20,
            height: 20,
            alt: "Logo"
        });
    } else if (leftSide === 'pointer') {
        lType = /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Button */.zx, {
            type: "button",
            bgColor: "transparent",
            onClick: moveBack,
            children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowBack_default()), {})
        });
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Header_styled.Header, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header_styled.LeftSide, {
                children: lType
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header_styled.Heading, {
                level: 1,
                children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                    value: name
                })
            }),
            rIcon
        ]
    }));
};
/* harmony default export */ const molecules_Header_Header = (Header_Header);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: ./src/components/molecules/ImageEditor/ImageEditor.tsx



const TuiImageEditor = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\molecules\\ImageEditor\\ImageEditor.tsx -> " + "./ImageEditorWrapper"
        ]
    },
    ssr: false
});
const ImageEditorWithForwardedRef = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(function TuiImageEditorWithForwardedRef(props, ref) {
    return(/*#__PURE__*/ _jsx(TuiImageEditor, {
        ...props,
        forwardedRef: ref
    }));
})));
const ImageEditor = (props)=>{
    return(/*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx(ImageEditorWithForwardedRef, {
            ...props
        })
    }));
};
/* harmony default export */ const ImageEditor_ImageEditor = ((/* unused pure expression or super */ null && (ImageEditor)));

;// CONCATENATED MODULE: ./src/components/molecules/ImageUpload/ImageUpload.tsx



const ImageUpload = ({ className , onChange , children , multiple =false ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(atoms/* Label */.__, {
        className: className,
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(atoms/* FileInput */.S2, {
                accept: "image/*",
                onChange: onChange,
                multiple: multiple
            })
        ]
    }));
};
/* harmony default export */ const ImageUpload_ImageUpload = (ImageUpload);

;// CONCATENATED MODULE: ./src/components/molecules/ImageList/ImageList.styled.ts



const SwipeableItem = (styled_default()).div`
  position: relative;
`;
const ImageList_styled_ImageUpload = styled_default()(ImageUpload_ImageUpload)`
  color: #fff;
  width: 350px;
  height: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;
const ImageList_styled_Container = (styled_default()).div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 255px;
  z-index: 100;
`;
const ImageList_styled_Button = styled_default()(atoms/* Button */.zx)`
  position: absolute;
  top: 0;
  right: 0;
`;
/* harmony default export */ const ImageList_styled = ({
    SwipeableItem,
    ImageUpload: ImageList_styled_ImageUpload,
    Container: ImageList_styled_Container,
    Button: ImageList_styled_Button
});

// EXTERNAL MODULE: external "@mui/icons-material/RemoveCircle"
var RemoveCircle_ = __webpack_require__(276);
var RemoveCircle_default = /*#__PURE__*/__webpack_require__.n(RemoveCircle_);
// EXTERNAL MODULE: external "@mui/icons-material/AddCircleOutlineOutlined"
var AddCircleOutlineOutlined_ = __webpack_require__(3982);
var AddCircleOutlineOutlined_default = /*#__PURE__*/__webpack_require__.n(AddCircleOutlineOutlined_);
;// CONCATENATED MODULE: ./src/components/molecules/ImageList/ImageList.tsx








const FileList = ({ files , appendFile , removeFile  })=>{
    const theme = (0,styles_.useTheme)();
    const { 0: activeStep , 1: setActiveStep  } = (0,external_react_.useState)(0);
    const handleStepChange = (step)=>{
        setActiveStep(step);
    };
    const removeImage = (file)=>{
        removeFile(file);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: files ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_swipeable_views_default()), {
            style: {
                width: '350px',
                height: '255px',
                zIndex: 100,
                overflow: 'clip'
            },
            axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
            index: activeStep,
            onChangeIndex: handleStepChange,
            enableMouseEvents: true,
            children: [
                files.map((file, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ImageList_styled.SwipeableItem, {
                        children: [
                            Math.abs(activeStep - index) <= 2 ? /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Image */.Ee, {
                                width: 350,
                                height: 255,
                                src: window.URL.createObjectURL(file),
                                alt: "upload image"
                            }) : null,
                            /*#__PURE__*/ jsx_runtime_.jsx(ImageList_styled.Button, {
                                onClick: (e)=>{
                                    removeImage(file);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((RemoveCircle_default()), {})
                            })
                        ]
                    }, `${file.name}${new Date().getTime()}`)
                ),
                /*#__PURE__*/ jsx_runtime_.jsx(ImageList_styled.Container, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ImageList_styled.ImageUpload, {
                        onChange: appendFile,
                        multiple: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((AddCircleOutlineOutlined_default()), {
                            sx: {
                                fontSize: 100
                            }
                        })
                    })
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(ImageList_styled.Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(ImageList_styled.ImageUpload, {
                onChange: appendFile,
                multiple: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx((AddCircleOutlineOutlined_default()), {
                    sx: {
                        fontSize: 100
                    }
                })
            })
        })
    }));
};
/* harmony default export */ const ImageList = (FileList);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/config/index.ts
var config = __webpack_require__(3206);
;// CONCATENATED MODULE: ./src/components/molecules/KakaoButton/KakaoButton.tsx





const KakaoButton = ({ className  })=>{
    const onClick = (0,external_react_.useCallback)((e)=>{
        window.location.replace(config/* KAKAO_CALLBACK_URL */.fB);
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(atoms/* Button */.zx, {
        type: "button",
        className: className,
        onClick: onClick,
        bgColor: "transparent",
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
            src: "/images/kakaoButton/kakao_login_medium_wide.png",
            width: 300,
            height: 45
        })
    }));
};
/* harmony default export */ const KakaoButton_KakaoButton = (KakaoButton);

// EXTERNAL MODULE: ./src/components/molecules/NotificationContent/NotificationContent.tsx + 1 modules
var NotificationContent = __webpack_require__(3380);
// EXTERNAL MODULE: ./src/libs/axios.ts
var axios = __webpack_require__(7056);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/Autocomplete"
var Autocomplete_ = __webpack_require__(2311);
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete_);
;// CONCATENATED MODULE: ./src/components/molecules/RegionFeed/RegionFeed.styled.ts

const RegionFeed_styled_useStyles = (0,core_styles_.makeStyles)({
    root: {
        fontFamily: 'IBMPlexSansKR',
        color: '#fff',
        '& .Mui-focused': {
            color: '#fff'
        },
        '& .Mui-focused:after': {
            borderColor: '#fff'
        }
    }
});
/* harmony default export */ const RegionFeed_styled = ({
    useStyles: RegionFeed_styled_useStyles
});

;// CONCATENATED MODULE: ./src/components/molecules/RegionFeed/RegionFeed.tsx






const RegionFeed = ({ value , onChange  })=>{
    const classes = RegionFeed_styled.useStyles();
    const api = (0,axios/* apiInstance */.bL)();
    const { 0: regionList , 1: setRegionList  } = (0,external_react_.useState)();
    const { 0: interestRegion , 1: setInterestRegion  } = (0,external_react_.useState)('지역을 설정해 주세요');
    (0,external_react_.useEffect)(()=>{
        const region = api.get(`/region`).then((res)=>setRegionList(res.data)
        );
    }, []);
    const onStateChange = (0,external_react_.useCallback)((event, newValue)=>{
        if (newValue) {
            setInterestRegion(newValue);
            onChange(newValue);
        } else {
            setInterestRegion('지역을 설정해 주세요');
        }
    }, []);
    const onInputChange = (0,external_react_.useCallback)((e, newInputValue)=>{
        onChange(newInputValue);
    }, [
        value
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
            onChange: onStateChange,
            onInputChange: onInputChange,
            disablePortal: true,
            id: "combo-box-demo",
            options: regionList,
            sx: {
                width: 300
            },
            inputValue: value,
            renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                    classes: {
                        root: classes.root
                    },
                    InputLabelProps: {
                        shrink: true
                    },
                    ...params,
                    label: "Region...",
                    variant: "standard"
                })
        })
    }));
};
/* harmony default export */ const RegionFeed_RegionFeed = (RegionFeed);

// EXTERNAL MODULE: external "@mui/material/Chip"
var Chip_ = __webpack_require__(8369);
var Chip_default = /*#__PURE__*/__webpack_require__.n(Chip_);
// EXTERNAL MODULE: external "@mui/material/Stack"
var Stack_ = __webpack_require__(8742);
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_);
;// CONCATENATED MODULE: ./src/components/molecules/RegionSearch/RegionSearch.tsx







const RegionSearch = ()=>{
    const api = (0,axios/* apiInstance */.bL)();
    const { 0: regionList , 1: setRegionList  } = (0,external_react_.useState)();
    const { 0: interestRegion , 1: setInterestRegion  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        const region = api.get(`/region`).then((res)=>setRegionList(res.data)
        );
    }, []);
    const onChange = (event, value)=>{
        if (value) {
            setInterestRegion([
                ...interestRegion,
                value
            ]);
        }
    };
    const handleDelete = (event, idx)=>{
        const newRegionList = interestRegion.filter((el, i)=>{
            return idx !== i;
        });
        setInterestRegion(newRegionList);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Autocomplete_default()), {
                onChange: onChange,
                disablePortal: true,
                id: "combo-box-demo",
                options: regionList,
                sx: {
                    width: 300
                },
                renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                        ...params,
                        label: "지역"
                    })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Stack_default()), {
                direction: "column",
                spacing: 1,
                children: interestRegion.map((region, idx)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx((Chip_default()), {
                        label: region,
                        variant: "outlined",
                        onDelete: (e)=>handleDelete(e, idx)
                    }, region));
                })
            })
        ]
    }));
};
/* harmony default export */ const RegionSearch_RegionSearch = (RegionSearch);

;// CONCATENATED MODULE: ./src/components/molecules/Modal/Modal.styled.ts




const Modal_styled_Dialog = styled_default()((Dialog_default()))`
  & .MuiPaper-rounded {
    border-radius: 0;
  }
`;
const DialogActions = styled_default()((DialogActions_default()))`
  padding: 0;
`;
const Modal_styled_Button = styled_default()(atoms/* Button */.zx)`
  flex: 1;
  margin: 0 !important;
  padding: 2vh;

  &.agree {
    background-color: #000;
  }

  &.disagree {
    background-color: #d5d5d3;
  }
`;
/* harmony default export */ const Modal_styled = ({
    Dialog: Modal_styled_Dialog,
    DialogActions,
    Button: Modal_styled_Button
});

;// CONCATENATED MODULE: ./src/components/molecules/Modal/Modal.tsx






const Modal_Modal = ({ className , title , content , open , agreeFunction , disagreeFunction ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Modal_styled.Dialog, {
        className: className,
        open: open,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        children: [
            title ? /*#__PURE__*/ jsx_runtime_.jsx((DialogTitle_default()), {
                id: "alert-dialog-title",
                children: title
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((DialogContent_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                    value: content
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Modal_styled.DialogActions, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Modal_styled.Button, {
                        className: "disagree",
                        onClick: disagreeFunction,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                            value: "아니오",
                            size: "0.8rem"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Modal_styled.Button, {
                        className: "agree",
                        onClick: agreeFunction,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                            value: "예",
                            color: "#fff",
                            size: "0.8rem"
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const molecules_Modal_Modal = (Modal_Modal);

;// CONCATENATED MODULE: ./src/components/molecules/SuccessBadge/SuccessBadge.styled.ts

const Action = (styled_default()).div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 300px;
  height: 25vw;
  max-width: 300px;
  width: 25vw;

  .common {
    z-index: -1;
    position: absolute;
    height: 50px;
    width: 10px;
    border-radius: 10px;
    animation-fill-mode: forwards;
    animation-duration: 0.75s;
    animation-iteration-count: 1;
    transform-origin: center middle;
    opacity: 0;
  }

  .confetti {
    top: 0;
    left: calc(50% - 5px);
    background-color: #ffea00;
    animation-name: fly--up;
    animation-delay: 0.35s;

    &.two {
      top: auto;
      bottom: 0;
      animation-name: fly--down;
    }

    &.three,
    &.four {
      top: calc(50% - 5px);
      left: calc(50% - 25px);
      height: 10px;
      width: 50px;
      animation-name: fly--left;
    }

    &.four {
      animation-name: fly--right;
    }

    &--purple {
      background-color: #6200ea;
      animation-name: fly--up--left;
      transform: rotate(135deg);
      animation-delay: 0.5s;
      left: 20%;
      top: 20%;

      &.two {
        animation-name: fly--up--right;
        left: auto;
        right: 20%;
        transform: rotate(45deg);
      }

      &.three {
        top: auto;
        bottom: 20%;
        transform: rotate(45deg);
        animation-name: fly--down--left;
      }

      &.four {
        top: auto;
        bottom: 20%;
        left: auto;
        right: 20%;
        transform: rotate(135deg);
        animation-name: fly--down--right;
      }
    }
  }

  @keyframes fly--up {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    80% {
      transform: translateY(-20vw);
    }
    100% {
      transform: translateY(-15vw);
      opacity: 0;
    }
  }

  @keyframes fly--down {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    80% {
      transform: translateY(20vw);
    }
    100% {
      transform: translateY(15vw);
      opacity: 0;
    }
  }

  @keyframes fly--left {
    0% {
      transform: translateX(10px);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    80% {
      transform: translateX(-35vw);
    }
    100% {
      transform: translateX(-180px);
      opacity: 0;
    }
  }

  @keyframes fly--right {
    0% {
      transform: translateX(-10px);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    80% {
      transform: translateX(35vw);
    }
    100% {
      transform: translateX(180px);
      opacity: 0;
    }
  }

  @keyframes fly--up--left {
    0% {
      transform: rotate(135deg) translate(0vw, 0vw);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: rotate(135deg) translate(-3vw, 20vw);
      opacity: 0;
    }
  }

  @keyframes fly--up--right {
    0% {
      transform: rotate(45deg);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: rotate(45deg) translate(-3vw, -20vw);
      opacity: 0;
    }
  }

  @keyframes fly--down--left {
    0% {
      transform: rotate(45deg) translate(0vw, 0vw);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: rotate(45deg) translate(-3vw, 20vw);
      opacity: 0;
    }
  }

  @keyframes fly--down--right {
    0% {
      transform: rotate(135deg) translate(0vw, 0vw);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: rotate(135deg) translate(0vw, -20vw);
      opacity: 0;
    }
  }
`;
const Trophy = (styled_default()).div`
  z-index: 1;
  background-color: #fff;
  height: 100%;
  width: 100%;
  border-radius: 100%;
  animation: trophy 0.5s 1 forwards;

  @keyframes trophy {
    0% {
      transform: translateY(500px);
      opacity: 0;
    }
    35% {
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
/* harmony default export */ const SuccessBadge_styled = ({
    Action,
    Trophy
});

;// CONCATENATED MODULE: ./src/components/molecules/SuccessBadge/SuccessBadge.tsx



const SuccessBadge = ({ className  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(SuccessBadge_styled.Action, {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SuccessBadge_styled.Trophy, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    fill: "#FFD600",
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "common confetti"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "common confetti two"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "common confetti three"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "common confetti four"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "common confetti--purple"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "common confetti--purple two"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "common confetti--purple three"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "common confetti--purple four"
            })
        ]
    }));
};
/* harmony default export */ const SuccessBadge_SuccessBadge = (SuccessBadge);

;// CONCATENATED MODULE: ./src/components/molecules/TabMenu/TabMenu.styled.ts

const TabMenu_styled_useStyles = (0,core_styles_.makeStyles)({
    selected: {
        background: '#000',
        '& span': {
            color: '#fff'
        }
    },
    indicator: {
        background: 'transparent'
    }
});
/* harmony default export */ const TabMenu_styled = ({
    useStyles: TabMenu_styled_useStyles
});

// EXTERNAL MODULE: external "@mui/material/Tabs"
var Tabs_ = __webpack_require__(8544);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(1307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
;// CONCATENATED MODULE: ./src/components/molecules/TabMenu/TabMenu.tsx







function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}
const TabMenu = ({ tabList , value , setValue  })=>{
    const classes = TabMenu_styled.useStyles();
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Tabs_default()), {
            classes: {
                indicator: classes.indicator
            },
            value: value,
            onChange: handleChange,
            "aria-label": "basic tabs example",
            centered: true,
            children: tabList.map((tab, idx)=>/*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                    classes: {
                        selected: classes.selected
                    },
                    label: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                        value: tab
                    }),
                    ...a11yProps(idx)
                }, tab)
            )
        })
    }));
};
/* harmony default export */ const TabMenu_TabMenu = (TabMenu);

;// CONCATENATED MODULE: ./src/components/molecules/TagList/TagList.styled.ts

const TagList = (styled_default()).ul`
  display: none;
  position: absolute;
  border-radius: 0.3rem;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 4px;
  padding: 0;

  top: ${(props)=>props.theme.top
};
  left: ${(props)=>props.theme.left
};

  &.show {
    display: block;
  }
`;
const Item = (styled_default()).li`
  list-style: none;
  padding: 1vh;
  background-color: #fff;

  &.select {
    background-color: #eee;
  }
`;
/* harmony default export */ const TagList_styled = ({
    TagList,
    Item
});

;// CONCATENATED MODULE: ./src/components/molecules/TagList/TagList.tsx



const TagList_TagList = ({ className , display , position , list , currentSelection , setCurrentSelection , tag ,  })=>{
    const TAGS = list.length;
    const keyHandler = (e)=>{
        if (display) {
            switch(e.key){
                case 'ArrowDown':
                    e.preventDefault();
                    setCurrentSelection((currentSelection + 1) % TAGS);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    if (currentSelection === 0) setCurrentSelection(TAGS - 1);
                    else setCurrentSelection(currentSelection - 1);
                    break;
                default:
                    break;
            }
        }
    };
    return(/*#__PURE__*/ _jsx(Styled.TagList, {
        className: `${className} ${display ? 'show' : ''}`,
        theme: {
            top: `${position.top}px`,
            left: `${position.left}px`
        },
        onKeyDown: keyHandler,
        children: list.filter((item)=>item.tagName && tag && item.tagName.toLowerCase().indexOf(tag.toLowerCase()) !== -1
        ).map((item, idx)=>/*#__PURE__*/ _jsx(Styled.Item, {
                className: idx === currentSelection ? 'select' : '',
                children: item.tagName
            }, item.no)
        )
    }));
};
/* harmony default export */ const molecules_TagList_TagList = ((/* unused pure expression or super */ null && (TagList_TagList)));

;// CONCATENATED MODULE: ./src/components/molecules/TextEditor/TextEditor.styled.ts

const TextEditor_styled_Container = (styled_default()).div`
  filter: drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.15));
`;
const TextEditor = (styled_default()).textarea`
  font-family: inherit;
  font-size: 1rem;
  letter-spacing: 1px;
  box-sizing: border-box;
  padding: 1vh;
  line-height: 1.7rem;
  resize: none;
  border: none;

  width: 100%;
  height: 100%;
  overflow-y: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
/* harmony default export */ const TextEditor_styled = ({
    Container: TextEditor_styled_Container,
    TextEditor
});

;// CONCATENATED MODULE: ./src/components/molecules/TextEditor/TextEditor.tsx



const tags = [
    {
        no: 1,
        tagName: 'Charmander'
    },
    {
        no: 2,
        tagName: 'Squirtle'
    },
    {
        no: 3,
        tagName: 'Bulbasaur'
    },
    {
        no: 4,
        tagName: 'Pikachu'
    }, 
];
const TextEditor_TextEditor = ({ className , value , onChange  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(TextEditor_styled.Container, {
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(TextEditor_styled.TextEditor, {
            value: value,
            onChange: onChange
        })
    }));
};
/* harmony default export */ const molecules_TextEditor_TextEditor = (TextEditor_TextEditor);

;// CONCATENATED MODULE: ./src/components/molecules/Title/Title.styled.ts


const Title_styled_Text = styled_default()(atoms/* Text */.xv)`
  font-weight: 500;
  letter-spacing: 0.7rem;
  filter: drop-shadow(0px 50px 25px rgba(0, 0, 0, 0.15));
`;
/* harmony default export */ const Title_styled = ({
    Text: Title_styled_Text
});

;// CONCATENATED MODULE: ./src/components/molecules/Title/Title.tsx




const Title = ({ className , value , color ='#fff'  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(atoms/* Heading */.X6, {
        level: 1,
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Title_styled.Text, {
            value: value,
            color: color,
            size: "1.5rem"
        })
    }));
};
/* harmony default export */ const Title_Title = (Title);

;// CONCATENATED MODULE: ./src/components/molecules/UserProfile/UserProfile.tsx





const UserProfile = ({ className , user  })=>{
    const moveProfile = (e)=>{
        router_default().push(`/user/${user.userId}`);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(atoms/* Button */.zx, {
        className: className,
        onClick: moveProfile,
        bgColor: "transparent",
        children: /*#__PURE__*/ jsx_runtime_.jsx((Avatar_default()), {
            src: user.profileImage
        })
    }));
};
/* harmony default export */ const UserProfile_UserProfile = (UserProfile);

;// CONCATENATED MODULE: ./src/components/molecules/UserProfileWithInfo/UserProfileWithInfo.styled.ts

const UserProfileWithInfo_styled_Container = (styled_default()).div`
  display: flex;
  align-items: center;
`;
const Info = (styled_default()).div`
  display: flex;
  flex-direction: column;
`;
const Sub = (styled_default()).div`
  margin-top: 2px;
`;
/* harmony default export */ const UserProfileWithInfo_styled = ({
    Container: UserProfileWithInfo_styled_Container,
    Info,
    Sub
});

;// CONCATENATED MODULE: ./src/components/molecules/UserProfileWithInfo/UserProfileWithInfo.tsx






const UserProfileWithInfo = ({ className , user , sub  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(UserProfileWithInfo_styled.Container, {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(UserProfile_UserProfile, {
                user: user
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UserProfileWithInfo_styled.Info, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: `/user/${user.userId}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                            value: user.nickname
                        })
                    }),
                    sub ? /*#__PURE__*/ jsx_runtime_.jsx(UserProfileWithInfo_styled.Sub, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(atoms/* Text */.xv, {
                            value: sub,
                            color: "#888",
                            size: "0.7rem"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
                ]
            })
        ]
    }));
};
/* harmony default export */ const UserProfileWithInfo_UserProfileWithInfo = (UserProfileWithInfo);

// EXTERNAL MODULE: external "@mui/material/Modal"
var Modal_ = __webpack_require__(9564);
;// CONCATENATED MODULE: ./src/components/molecules/ReportForm/ReportForm.styled.ts


const FormContainer = (styled_default()).div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
`;
const ReportForm_styled_Button = styled_default()(atoms/* Button */.zx)`
  color: white;
  background-color: red;
  padding: 1vh 3vw 1vh 3vw;
`;
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 320,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3
};
/* harmony default export */ const ReportForm_styled = ({
    FormContainer,
    Button: ReportForm_styled_Button,
    style
});

;// CONCATENATED MODULE: ./src/components/molecules/ReportForm/ReportForm.tsx







const ReportForm = ()=>{
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    const handleOpen = ()=>setOpen(true)
    ;
    const handleClose = ()=>setOpen(false)
    ;
    const handleChange = (event)=>{
        setValue(event.target.value);
    };
    const sendMessage = ()=>{
        console.log('d');
    };
    return(/*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx(Button, {
                onClick: handleOpen,
                children: "신고"
            }),
            /*#__PURE__*/ _jsx(Modal, {
                open: open,
                onClose: handleClose,
                children: /*#__PURE__*/ _jsx(Box, {
                    component: "form",
                    sx: Styled.style,
                    noValidate: true,
                    autoComplete: "off",
                    children: /*#__PURE__*/ _jsxs(Styled.FormContainer, {
                        children: [
                            /*#__PURE__*/ _jsx(TextField, {
                                id: "outlined-textarea",
                                label: "제목",
                                sx: {
                                    mb: 2
                                },
                                multiline: true,
                                maxRows: 4,
                                fullWidth: true
                            }),
                            /*#__PURE__*/ _jsx(TextField, {
                                id: "outlined-textarea",
                                label: "내용",
                                sx: {
                                    mb: 2
                                },
                                multiline: true,
                                maxRows: 13,
                                fullWidth: true
                            }),
                            /*#__PURE__*/ _jsx(Styled.Button, {
                                onClick: sendMessage,
                                children: /*#__PURE__*/ _jsx(Text, {
                                    value: "제출"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const ReportForm_ReportForm = ((/* unused pure expression or super */ null && (ReportForm)));

;// CONCATENATED MODULE: ./src/components/molecules/Weather/Weather.styled.ts


const WeatherArea = (styled_default()).div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Weather_styled_Text = styled_default()(atoms/* Text */.xv)`
  margin-left: 2vw;
`;
/* harmony default export */ const Weather_styled = ({
    WeatherArea,
    Text: Weather_styled_Text
});

// EXTERNAL MODULE: external "@mui/icons-material/WbSunny"
var WbSunny_ = __webpack_require__(6377);
var WbSunny_default = /*#__PURE__*/__webpack_require__.n(WbSunny_);
;// CONCATENATED MODULE: ./src/components/molecules/Weather/Weather.tsx




const Weather = ({ className , weather  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Weather_styled.WeatherArea, {
        className: className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((WbSunny_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Weather_styled.Text, {
                value: weather
            })
        ]
    }));
};
/* harmony default export */ const Weather_Weather = (Weather);

;// CONCATENATED MODULE: ./src/components/molecules/index.ts

































/***/ }),

/***/ 7249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AU": () => (/* reexport */ hooks_useChange),
  "w6": () => (/* reexport */ hooks_useCheck),
  "AW": () => (/* reexport */ hooks_useDisplay),
  "bv": () => (/* reexport */ hooks_useFileChange)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/useChange.ts

const useChange = (initalState)=>{
    const { 0: value , 1: setValue  } = (0,external_react_.useState)(initalState);
    const onChange = (0,external_react_.useCallback)((e)=>{
        setValue(e.target.value);
    }, [
        value
    ]);
    return [
        value,
        setValue,
        onChange
    ];
};
/* harmony default export */ const hooks_useChange = (useChange);

;// CONCATENATED MODULE: ./src/hooks/useCheck.ts

const useCheck = (initalState)=>{
    const { 0: values , 1: setValues  } = (0,external_react_.useState)(initalState);
    const onChange = (0,external_react_.useCallback)((e)=>{
        if (e.target.checked) setValues([
            ...values,
            e.target.value
        ]);
        else setValues(values.filter((value)=>value !== e.target.value
        ));
    }, [
        values
    ]);
    return [
        values,
        setValues,
        onChange
    ];
};
/* harmony default export */ const hooks_useCheck = (useCheck);

;// CONCATENATED MODULE: ./src/hooks/useDisplay.ts

const useDisplay = (initalState)=>{
    const { 0: display , 1: setDisplay  } = (0,external_react_.useState)(initalState);
    const openDisplay = (0,external_react_.useCallback)(()=>{
        setDisplay(true);
    }, []);
    const closeDisplay = (0,external_react_.useCallback)(()=>{
        setDisplay(false);
    }, []);
    return [
        display,
        setDisplay,
        openDisplay,
        closeDisplay
    ];
};
/* harmony default export */ const hooks_useDisplay = (useDisplay);

;// CONCATENATED MODULE: ./src/hooks/useFileChange.ts

const useFileChange = (initalState)=>{
    const { 0: files , 1: setFile  } = (0,external_react_.useState)(initalState === null ? [] : initalState);
    const onChange = (0,external_react_.useCallback)((e)=>{
        setFile([
            ...Array.from(e.target.files)
        ]);
    }, []);
    const appendFile = (0,external_react_.useCallback)((e)=>{
        setFile([
            ...files,
            ...Array.from(e.target.files)
        ]);
    }, [
        files
    ]);
    const removeFile = (0,external_react_.useCallback)((select)=>{
    // setFile(files.filter((file) => file !== select));
    }, []);
    return [
        files,
        setFile,
        onChange,
        appendFile,
        removeFile
    ];
};
/* harmony default export */ const hooks_useFileChange = (useFileChange);

;// CONCATENATED MODULE: ./src/hooks/index.ts







/***/ })

};
;