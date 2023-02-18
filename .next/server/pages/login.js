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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst login = ()=>{\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    console.log(session);\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                maxWidth: \"sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        variant: \"h4\",\n                        color: \"text.secondary \",\n                        children: [\n                            \"Welcome, \",\n                            session.user.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: session.user.image,\n                        alt: \"\",\n                        style: {\n                            width: \"75px\",\n                            borderRadius: \"50px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        variant: \"body1\",\n                        color: \"text.secondary\",\n                        children: [\n                            \"Signed in as \",\n                            session.user.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        variant: \"body1\",\n                        color: \"text.secondary\",\n                        children: \"Go to the Admin page to manage Hotdog Shops\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        variant: \"contained\",\n                        sx: {\n                            mt: 3,\n                            margin: 1\n                        },\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        variant: \"contained\",\n                        sx: {\n                            mt: 3,\n                            margin: 1\n                        },\n                        href: \"/admin\",\n                        children: \"Admin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            maxWidth: \"sm\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    variant: \"h4\",\n                    color: \"text.secondary \",\n                    children: \"Not signed in\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    variant: \"contained\",\n                    sx: {\n                        mt: 3,\n                        margin: 1\n                    },\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNvQztBQUNmO0FBQ0w7QUFDUTtBQUVsRCxNQUFNUSxRQUFRLElBQU07SUFDbEIsTUFBTSxFQUFFQyxNQUFNQyxRQUFPLEVBQUUsR0FBR1QsMkRBQVVBO0lBQ3BDVSxRQUFRQyxHQUFHLENBQUNGO0lBQ1osSUFBSUEsU0FBUztRQUNYLHFCQUNFO3NCQUNFLDRFQUFDTixvREFBU0E7Z0JBQUNTLFVBQVM7O2tDQUVsQiw4REFBQ04saUVBQVVBO3dCQUFDTyxTQUFRO3dCQUFLQyxPQUFNOzs0QkFBbUI7NEJBQ3RDTCxRQUFRTSxJQUFJLENBQUNDLElBQUk7Ozs7Ozs7a0NBRTdCLDhEQUFDQzt3QkFDQ0MsS0FBS1QsUUFBUU0sSUFBSSxDQUFDSSxLQUFLO3dCQUN2QkMsS0FBSTt3QkFDSkMsT0FBTzs0QkFBRUMsT0FBTzs0QkFBUUMsY0FBYzt3QkFBTzs7Ozs7O2tDQUUvQyw4REFBQ2pCLGlFQUFVQTt3QkFBQ08sU0FBUTt3QkFBUUMsT0FBTTs7NEJBQWlCOzRCQUNuQ0wsUUFBUU0sSUFBSSxDQUFDUyxLQUFLOzs7Ozs7O2tDQUVsQyw4REFBQ0M7Ozs7O2tDQUNELDhEQUFDbkIsaUVBQVVBO3dCQUFDTyxTQUFRO3dCQUFRQyxPQUFNO2tDQUFpQjs7Ozs7O2tDQUduRCw4REFBQ1c7Ozs7O2tDQUNELDhEQUFDcEIsNkRBQU1BO3dCQUNMUSxTQUFRO3dCQUNSYSxJQUFJOzRCQUFFQyxJQUFJOzRCQUFHQyxRQUFRO3dCQUFFO3dCQUN2QkMsU0FBUyxJQUFNM0Isd0RBQU9BO2tDQUN2Qjs7Ozs7O2tDQUdELDhEQUFDRyw2REFBTUE7d0JBQUNRLFNBQVE7d0JBQVlhLElBQUk7NEJBQUVDLElBQUk7NEJBQUdDLFFBQVE7d0JBQUU7d0JBQUdFLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7SUFPNUUsQ0FBQztJQUNELHFCQUNFO2tCQUNFLDRFQUFDM0Isb0RBQVNBO1lBQUNTLFVBQVM7OzhCQUNsQiw4REFBQ04saUVBQVVBO29CQUFDTyxTQUFRO29CQUFLQyxPQUFNOzhCQUFtQjs7Ozs7OzhCQUdsRCw4REFBQ1c7Ozs7OzhCQUNELDhEQUFDcEIsNkRBQU1BO29CQUNMUSxTQUFRO29CQUNSYSxJQUFJO3dCQUFFQyxJQUFJO3dCQUFHQyxRQUFRO29CQUFFO29CQUN2QkMsU0FBUyxJQUFNNUIsdURBQU1BOzhCQUN0Qjs7Ozs7Ozs7Ozs7OztBQU1UO0FBRUEsaUVBQWVNLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBsb3JlX2hvdGRvZ19zaG9wLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuXG5jb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnNvbGUubG9nKHNlc3Npb24pO1xuICBpZiAoc2Vzc2lvbikge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cbiAgICAgICAgICB7LyogPEJveCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj4gKi99XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeSAgXCI+XG4gICAgICAgICAgICBXZWxjb21lLCB7c2Vzc2lvbi51c2VyLm5hbWV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17c2Vzc2lvbi51c2VyLmltYWdlfVxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjc1cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjUwcHhcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxuICAgICAgICAgICAgU2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXIuZW1haWx9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIEdvIHRvIHRoZSBBZG1pbiBwYWdlIHRvIG1hbmFnZSBIb3Rkb2cgU2hvcHNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBzeD17eyBtdDogMywgbWFyZ2luOiAxIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2lnbiBvdXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzeD17eyBtdDogMywgbWFyZ2luOiAxIH19IGhyZWY9XCIvYWRtaW5cIj5cbiAgICAgICAgICAgIEFkbWluXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgey8qIDwvQm94PiAqL31cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5ICBcIj5cbiAgICAgICAgICBOb3Qgc2lnbmVkIGluXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBzeD17eyBtdDogMywgbWFyZ2luOiAxIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKCl9XG4gICAgICAgID5cbiAgICAgICAgICBTaWduIGluXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJzaWduT3V0IiwiQ29udGFpbmVyIiwiQm94IiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsImxvZ2luIiwiZGF0YSIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwibWF4V2lkdGgiLCJ2YXJpYW50IiwiY29sb3IiLCJ1c2VyIiwibmFtZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImVtYWlsIiwiYnIiLCJzeCIsIm10IiwibWFyZ2luIiwib25DbGljayIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

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