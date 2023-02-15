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
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
exports.modules = {

/***/ "./pages/admin.jsx":
/*!*************************!*\
  !*** ./pages/admin.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst admin = ()=>{\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    if (status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Velkommen, \",\n                        session.user.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                    children: \"Sign Out\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Du er ikke innlogget!\"\n            }, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined);\n    }\n};\nconst getServerSideProps = async (context)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/login\"\n            }\n        };\n    }\n    return {\n        props: {\n            session\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (admin);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3dDO0FBRWxFLE1BQU1JLFFBQVEsSUFBTTtJQUNsQixNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRUMsT0FBTSxFQUFFLEdBQUdOLDJEQUFVQTtJQUU1QyxJQUFJTSxXQUFXLGlCQUFpQjtRQUM5QixxQkFDRSw4REFBQ0M7OzhCQUNDLDhEQUFDQzs7d0JBQUU7d0JBQVlILFFBQVFJLElBQUksQ0FBQ0MsSUFBSTs7Ozs7Ozs4QkFDaEMsOERBQUNDO29CQUFPQyxTQUFTLElBQU1YLHdEQUFPQTs4QkFBSTs7Ozs7Ozs7Ozs7O0lBR3hDLE9BQU87UUFDTCxxQkFDRSw4REFBQ007c0JBQ0MsNEVBQUNDOzBCQUFFOzs7Ozs7Ozs7OztJQUdULENBQUM7QUFDSDtBQUVPLE1BQU1LLHFCQUFxQixPQUFPQyxVQUFZO0lBQ25ELE1BQU1ULFVBQVUsTUFBTUgsMkRBQVVBLENBQUNZO0lBQ2pDLElBQUksQ0FBQ1QsU0FBUztRQUNaLE9BQU87WUFDTFUsVUFBVTtnQkFDUkMsYUFBYTtZQUNmO1FBQ0Y7SUFDRixDQUFDO0lBQ0QsT0FBTztRQUNMQyxPQUFPO1lBQUVaO1FBQVE7SUFDbkI7QUFDRixFQUFFO0FBRUYsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBsb3JlX2hvdGRvZ19zaG9wLy4vcGFnZXMvYWRtaW4uanN4P2VjYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbk91dCwgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcblxuY29uc3QgYWRtaW4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJhdXRoZW50aWNhdGVkXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+VmVsa29tbWVuLCB7c2Vzc2lvbi51c2VyLm5hbWV9PC9wPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2lnbiBPdXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPkR1IGVyIGlra2UgaW5ubG9nZ2V0ITwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9sb2dpblwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgc2Vzc2lvbiB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRtaW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTZXNzaW9uIiwic2lnbk91dCIsImdldFNlc3Npb24iLCJhZG1pbiIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiZGl2IiwicCIsInVzZXIiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin.jsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/admin.jsx"));
module.exports = __webpack_exports__;

})();