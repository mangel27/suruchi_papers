(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6088);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5599);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3100);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2210);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Footer__WEBPACK_IMPORTED_MODULE_1__, _components_Header__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Footer__WEBPACK_IMPORTED_MODULE_1__, _components_Header__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function App({ Component , pageProps  }) {
    const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.extendTheme)(_styles_themes__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: "Suruchi Papers"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ themes)
});

;// CONCATENATED MODULE: ./src/styles/headingStyles.js
const headingStyle = {
    Heading: {
        variants: {
            logoColortext: {
                color: "#e8491d",
                fontSize: [
                    "xl",
                    "2xl",
                    "xl",
                    "3xl"
                ],
                marginLeft: [
                    "10px",
                    "20px",
                    "10px",
                    "20px"
                ]
            },
            logotext: {
                color: "primary_4",
                fontSize: [
                    "xl",
                    "2xl",
                    "xl",
                    "3xl"
                ],
                paddingLeft: "10px"
            },
            herotext: {
                color: "primary_4",
                fontSize: [
                    "3xl",
                    "4xl",
                    "5xl",
                    "7xl"
                ],
                margin: "20px"
            },
            sectionsHead: {
                color: "#000000",
                fontSize: [
                    "2xl",
                    "3xl",
                    "4xl",
                    "5xl"
                ],
                textAlign: "center"
            },
            productHead: {
                color: "#000000",
                fontSize: [
                    "2xl",
                    "3xl",
                    "4xl",
                    "5xl"
                ],
                textAlign: "center",
                marginBottom: [
                    "20px",
                    "40px",
                    "60px"
                ]
            },
            privacyHead: {
                color: "#000000",
                fontSize: [
                    "md",
                    "xl",
                    "2xl",
                    "3xl"
                ],
                textAlign: "left"
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/styles/textStyles.js
const textStyle = {
    Text: {
        variants: {
            navText: {
                fontSize: "md",
                textTransform: "uppercase",
                fontFamily: "Arial",
                color: "primary_4",
                cursor: "pointer",
                _hover: {
                    transform: `scale(1.1)`,
                    color: "#e8491d"
                }
            },
            mobileNvText: {
                fontSize: "xl",
                textTransform: "uppercase",
                fontFamily: "Arial",
                color: "primary_1",
                fontWeight: "600",
                cursor: "pointer",
                _hover: {
                    transform: `scale(1.1)`,
                    color: "#e8491d"
                }
            },
            heroDescription: {
                fontSize: [
                    "sm",
                    "md",
                    "2xl"
                ],
                fontWeight: "400",
                fontFamily: " sansSerif",
                color: "primary_4",
                textAlign: "center",
                lineHeight: "2"
            },
            sectionDesc: {
                fontSize: [
                    "md",
                    "md",
                    "xl"
                ],
                fontFamily: " sansSerif",
                color: "gray.600",
                lineHeight: "1.5",
                paddingTop: "20px"
            },
            productDesc: {
                fontSize: [
                    "md",
                    "md",
                    "md",
                    "2xl"
                ],
                fontFamily: " sansSerif",
                color: "gray.600",
                textAlign: "center"
            },
            footerHeadText: {
                fontWeight: "600",
                fontSize: "xl",
                fontFamily: "sansSerif",
                color: "primary_4"
            },
            footerText: {
                fontSize: [
                    "md",
                    "sm",
                    "sm",
                    "md"
                ],
                fontFamily: "sansSerif",
                color: "primary_4"
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/styles/themes.js


const override = {
    components: {
        ...headingStyle,
        ...textStyle
    },
    colors: {
        primary_1: "#35424a",
        primary_2: "#ff4500",
        primary_3: "#f4f4f4",
        primary_4: "#ffffff"
    },
    fonts: {
        Arial: "Arial",
        Helvetica: "Helvetica",
        sansSerif: "sans-serif"
    }
};
/* harmony default export */ const themes = (override);


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 3094:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6134:
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/icons");;

/***/ }),

/***/ 2210:
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,947], () => (__webpack_exec__(6004)));
module.exports = __webpack_exports__;

})();