"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst login = ()=>{\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    console.log(session);\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n                maxWidth: \"sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"h4\",\n                        color: \"text.secondary \",\n                        children: [\n                            \"Welkome, \",\n                            session.user.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: session.user.image,\n                        alt: \"\",\n                        style: {\n                            width: \"75px\",\n                            borderRadius: \"50px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"body1\",\n                        color: \"text.secondary\",\n                        children: [\n                            \"Signed in as \",\n                            session.user.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"body1\",\n                        color: \"text.secondary\",\n                        children: \"Go to the Admin page to manage Hotdog Shops\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        variant: \"contained\",\n                        sx: {\n                            mt: 3,\n                            margin: 1\n                        },\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        variant: \"contained\",\n                        sx: {\n                            mt: 3,\n                            margin: 1\n                        },\n                        href: \"/admin\",\n                        children: \"Admin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            maxWidth: \"sm\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    variant: \"h4\",\n                    color: \"text.secondary \",\n                    children: \"Not signed in\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    variant: \"contained\",\n                    sx: {\n                        mt: 3,\n                        margin: 1\n                    },\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/login.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(login, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0M7QUFDZjtBQUNMO0FBQ1E7QUFFbEQsTUFBTVEsUUFBUSxJQUFNOztJQUNsQixNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRSxHQUFHVCwyREFBVUE7SUFDcENVLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixJQUFJQSxTQUFTO1FBQ1gscUJBQ0U7c0JBQ0UsNEVBQUNOLG9EQUFTQTtnQkFBQ1MsVUFBUzs7a0NBRWxCLDhEQUFDTixnRUFBVUE7d0JBQUNPLFNBQVE7d0JBQUtDLE9BQU07OzRCQUFtQjs0QkFDdENMLFFBQVFNLElBQUksQ0FBQ0MsSUFBSTs7Ozs7OztrQ0FFN0IsOERBQUNDO3dCQUNDQyxLQUFLVCxRQUFRTSxJQUFJLENBQUNJLEtBQUs7d0JBQ3ZCQyxLQUFJO3dCQUNKQyxPQUFPOzRCQUFFQyxPQUFPOzRCQUFRQyxjQUFjO3dCQUFPOzs7Ozs7a0NBRS9DLDhEQUFDakIsZ0VBQVVBO3dCQUFDTyxTQUFRO3dCQUFRQyxPQUFNOzs0QkFBaUI7NEJBQ25DTCxRQUFRTSxJQUFJLENBQUNTLEtBQUs7Ozs7Ozs7a0NBRWxDLDhEQUFDQzs7Ozs7a0NBQ0QsOERBQUNuQixnRUFBVUE7d0JBQUNPLFNBQVE7d0JBQVFDLE9BQU07a0NBQWlCOzs7Ozs7a0NBR25ELDhEQUFDVzs7Ozs7a0NBQ0QsOERBQUNwQiw0REFBTUE7d0JBQ0xRLFNBQVE7d0JBQ1JhLElBQUk7NEJBQUVDLElBQUk7NEJBQUdDLFFBQVE7d0JBQUU7d0JBQ3ZCQyxTQUFTLElBQU0zQix3REFBT0E7a0NBQ3ZCOzs7Ozs7a0NBR0QsOERBQUNHLDREQUFNQTt3QkFBQ1EsU0FBUTt3QkFBWWEsSUFBSTs0QkFBRUMsSUFBSTs0QkFBR0MsUUFBUTt3QkFBRTt3QkFBR0UsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OztJQU81RSxDQUFDO0lBQ0QscUJBQ0U7a0JBQ0UsNEVBQUMzQixvREFBU0E7WUFBQ1MsVUFBUzs7OEJBQ2xCLDhEQUFDTixnRUFBVUE7b0JBQUNPLFNBQVE7b0JBQUtDLE9BQU07OEJBQW1COzs7Ozs7OEJBR2xELDhEQUFDVzs7Ozs7OEJBQ0QsOERBQUNwQiw0REFBTUE7b0JBQ0xRLFNBQVE7b0JBQ1JhLElBQUk7d0JBQUVDLElBQUk7d0JBQUdDLFFBQVE7b0JBQUU7b0JBQ3ZCQyxTQUFTLElBQU01Qix1REFBTUE7OEJBQ3RCOzs7Ozs7Ozs7Ozs7O0FBTVQ7R0F4RE1NOztRQUNzQlAsdURBQVVBOzs7QUF5RHRDLCtEQUFlTyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3ggfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcblxuY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcbiAgaWYgKHNlc3Npb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XG4gICAgICAgICAgey8qIDxCb3ggYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+ICovfVxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnkgIFwiPlxuICAgICAgICAgICAgV2Vsa29tZSwge3Nlc3Npb24udXNlci5uYW1lfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3Nlc3Npb24udXNlci5pbWFnZX1cbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI3NXB4XCIsIGJvcmRlclJhZGl1czogXCI1MHB4XCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIFNpZ25lZCBpbiBhcyB7c2Vzc2lvbi51c2VyLmVtYWlsfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICBHbyB0byB0aGUgQWRtaW4gcGFnZSB0byBtYW5hZ2UgSG90ZG9nIFNob3BzXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgc3g9e3sgbXQ6IDMsIG1hcmdpbjogMSB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gb3V0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgc3g9e3sgbXQ6IDMsIG1hcmdpbjogMSB9fSBocmVmPVwiL2FkbWluXCI+XG4gICAgICAgICAgICBBZG1pblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIHsvKiA8L0JveD4gKi99XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeSAgXCI+XG4gICAgICAgICAgTm90IHNpZ25lZCBpblxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgc3g9e3sgbXQ6IDMsIG1hcmdpbjogMSB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfVxuICAgICAgICA+XG4gICAgICAgICAgU2lnbiBpblxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIkNvbnRhaW5lciIsIkJveCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJsb2dpbiIsImRhdGEiLCJzZXNzaW9uIiwiY29uc29sZSIsImxvZyIsIm1heFdpZHRoIiwidmFyaWFudCIsImNvbG9yIiwidXNlciIsIm5hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJlbWFpbCIsImJyIiwic3giLCJtdCIsIm1hcmdpbiIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});