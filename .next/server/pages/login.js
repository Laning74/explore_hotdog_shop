"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst login = ()=>{\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    console.log(session);\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Velkommen, \",\n                        session.user.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: session.user.image,\n                    alt: \"\",\n                    style: {\n                        width: \"75px\",\n                        borderRadius: \"50px\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                \"Signed in as \",\n                session.user.email,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                    lineNumber: 17,\n                    columnNumber: 43\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    color: \"inherit\",\n                    href: \"/admin\",\n                    children: \"Admin\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"Not signed in \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                lineNumber: 27,\n                columnNumber: 21\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ29DO0FBQ3BCO0FBRTFDLE1BQU1LLFFBQVEsSUFBTTtJQUNsQixNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRSxHQUFHTiwyREFBVUE7SUFDcENPLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixJQUFJQSxTQUFTO1FBQ1gscUJBQ0U7OzhCQUNFLDhEQUFDRzs7d0JBQUU7d0JBQVlILFFBQVFJLElBQUksQ0FBQ0MsSUFBSTs7Ozs7Ozs4QkFDaEMsOERBQUNDO29CQUNDQyxLQUFLUCxRQUFRSSxJQUFJLENBQUNJLEtBQUs7b0JBQ3ZCQyxLQUFJO29CQUNKQyxPQUFPO3dCQUFFQyxPQUFPO3dCQUFRQyxjQUFjO29CQUFPOzs7Ozs7Z0JBQzdDO2dCQUNZWixRQUFRSSxJQUFJLENBQUNTLEtBQUs7Z0JBQUM7OEJBQUMsOERBQUNDOzs7Ozs4QkFDbkMsOERBQUNDO29CQUFPQyxTQUFTLElBQU1wQix3REFBT0E7OEJBQUk7Ozs7Ozs4QkFDbEMsOERBQUNDLDZEQUFNQTtvQkFBQ29CLE9BQU07b0JBQVVDLE1BQUs7OEJBQVM7Ozs7Ozs7O0lBSzVDLENBQUM7SUFDRCxxQkFDRTs7WUFBRTswQkFDYyw4REFBQ0o7Ozs7OzBCQUNmLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNckIsdURBQU1BOzBCQUFJOzs7Ozs7OztBQUd2QztBQUVBLGlFQUFlRyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwbG9yZV9ob3Rkb2dfc2hvcC8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcblxuY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcbiAgaWYgKHNlc3Npb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPHA+VmVsa29tbWVuLCB7c2Vzc2lvbi51c2VyLm5hbWV9PC9wPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9XG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI3NXB4XCIsIGJvcmRlclJhZGl1czogXCI1MHB4XCIgfX1cbiAgICAgICAgLz5cbiAgICAgICAgU2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXIuZW1haWx9IDxiciAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBocmVmPVwiL2FkbWluXCI+XG4gICAgICAgICAgQWRtaW5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIE5vdCBzaWduZWQgaW4gPGJyIC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfT5TaWduIGluPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0IiwiQnV0dG9uIiwibG9naW4iLCJkYXRhIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJwIiwidXNlciIsIm5hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJlbWFpbCIsImJyIiwiYnV0dG9uIiwib25DbGljayIsImNvbG9yIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();