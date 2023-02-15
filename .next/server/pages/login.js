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

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst login = ()=>{\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    console.log(session);\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Velkommen, \",\n                        session.user.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: session.user.image,\n                    alt: \"\",\n                    style: {\n                        width: \"75px\",\n                        borderRadius: \"50px\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                \"Signed in as \",\n                session.user.email,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 43\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    color: \"inherit\",\n                    href: \"/admin\",\n                    children: \"Admin\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"Not signed in \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.jsx\",\n                lineNumber: 27,\n                columnNumber: 21\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNvQztBQUNwQjtBQUUxQyxNQUFNSyxRQUFRLElBQU07SUFDbEIsTUFBTSxFQUFFQyxNQUFNQyxRQUFPLEVBQUUsR0FBR04sMkRBQVVBO0lBQ3BDTyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osSUFBSUEsU0FBUztRQUNYLHFCQUNFOzs4QkFDRSw4REFBQ0c7O3dCQUFFO3dCQUFZSCxRQUFRSSxJQUFJLENBQUNDLElBQUk7Ozs7Ozs7OEJBQ2hDLDhEQUFDQztvQkFDQ0MsS0FBS1AsUUFBUUksSUFBSSxDQUFDSSxLQUFLO29CQUN2QkMsS0FBSTtvQkFDSkMsT0FBTzt3QkFBRUMsT0FBTzt3QkFBUUMsY0FBYztvQkFBTzs7Ozs7O2dCQUM3QztnQkFDWVosUUFBUUksSUFBSSxDQUFDUyxLQUFLO2dCQUFDOzhCQUFDLDhEQUFDQzs7Ozs7OEJBQ25DLDhEQUFDQztvQkFBT0MsU0FBUyxJQUFNcEIsd0RBQU9BOzhCQUFJOzs7Ozs7OEJBQ2xDLDhEQUFDQyw2REFBTUE7b0JBQUNvQixPQUFNO29CQUFVQyxNQUFLOzhCQUFTOzs7Ozs7OztJQUs1QyxDQUFDO0lBQ0QscUJBQ0U7O1lBQUU7MEJBQ2MsOERBQUNKOzs7OzswQkFDZiw4REFBQ0M7Z0JBQU9DLFNBQVMsSUFBTXJCLHVEQUFNQTswQkFBSTs7Ozs7Ozs7QUFHdkM7QUFFQSxpRUFBZUcsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGxvcmVfaG90ZG9nX3Nob3AvLi9wYWdlcy9sb2dpbi5qc3g/OWVlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuXG5jb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnNvbGUubG9nKHNlc3Npb24pO1xuICBpZiAoc2Vzc2lvbikge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8cD5WZWxrb21tZW4sIHtzZXNzaW9uLnVzZXIubmFtZX08L3A+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3Nlc3Npb24udXNlci5pbWFnZX1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjc1cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjUwcHhcIiB9fVxuICAgICAgICAvPlxuICAgICAgICBTaWduZWQgaW4gYXMge3Nlc3Npb24udXNlci5lbWFpbH0gPGJyIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5TaWduIG91dDwvYnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCIvYWRtaW5cIj5cbiAgICAgICAgICBBZG1pblxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgTm90IHNpZ25lZCBpbiA8YnIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKCl9PlNpZ24gaW48L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJCdXR0b24iLCJsb2dpbiIsImRhdGEiLCJzZXNzaW9uIiwiY29uc29sZSIsImxvZyIsInAiLCJ1c2VyIiwibmFtZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImVtYWlsIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIiwiY29sb3IiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.jsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/login.jsx"));
module.exports = __webpack_exports__;

})();