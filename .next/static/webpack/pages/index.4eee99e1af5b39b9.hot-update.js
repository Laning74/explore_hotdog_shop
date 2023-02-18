"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/cardFirebase.js":
/*!************************************!*\
  !*** ./components/cardFirebase.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardFirebase\": function() { return /* binding */ CardFirebase; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Rating */ \"./node_modules/@mui/material/Rating/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n\n\n\n\n\n\n\n\n\n\nconst CardFirebase = (param)=>{\n    let { props  } = param;\n    let docRef;\n    if (typeof id === \"string\") {\n        docRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, \"hotdogShop\", id);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        maxWidth: false,\n        sx: {\n            padding: 5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            container: true,\n            spacing: {\n                xs: 2,\n                md: 3\n            },\n            columns: {\n                xs: 4,\n                sm: 8,\n                md: 12\n            },\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            children: props === null || props === void 0 ? void 0 : props.map((ev)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    sx: {\n                        maxWidth: 345,\n                        margin: 0.7\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                gutterBottom: true,\n                                variant: \"h5\",\n                                component: \"div\",\n                                children: ev.name_shop\n                            }, void 0, false, {\n                                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/cardFirebase.js\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                variant: \"body2\",\n                                color: \"text.secondary\",\n                                children: ev.location\n                            }, void 0, false, {\n                                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/cardFirebase.js\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Rating__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                value: ev.rating_stars\n                            }, void 0, false, {\n                                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/cardFirebase.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/cardFirebase.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/cardFirebase.js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/cardFirebase.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, index, false, {\n        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/cardFirebase.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CardFirebase;\nvar _c;\n$RefreshReg$(_c, \"CardFirebase\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRGaXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNFO0FBQ1M7QUFDSjtBQUNBO0FBQ1U7QUFDSTtBQUNWO0FBQ1E7QUFFM0MsTUFBTVMsZUFBZSxTQUFlO1FBQWQsRUFBRUMsTUFBSyxFQUFFO0lBQ3BDLElBQUlDO0lBRUosSUFBSSxPQUFPQyxPQUFPLFVBQVU7UUFDMUJELFNBQVNULHdEQUFHQSxDQUFDRCx5Q0FBRUEsRUFBRSxjQUFjVztJQUNqQyxDQUFDO0lBRUQscUJBQ0UsOERBQUNQLCtEQUFTQTtRQUFDUSxVQUFVLEtBQUs7UUFBRUMsSUFBSTtZQUFFQyxTQUFTO1FBQUU7a0JBQzNDLDRFQUFDWiwwREFBSUE7WUFDSGEsU0FBUztZQUNUQyxTQUFTO2dCQUFFQyxJQUFJO2dCQUFHQyxJQUFJO1lBQUU7WUFDeEJDLFNBQVM7Z0JBQUVGLElBQUk7Z0JBQUdHLElBQUk7Z0JBQUdGLElBQUk7WUFBRztZQUNoQ0csWUFBVztZQUNYQyxnQkFBZTtzQkFFZGIsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPYyxHQUFHLENBQUMsQ0FBQ0MsbUJBQ1gsOERBQUNyQiwwREFBSUE7b0JBQUNVLElBQUk7d0JBQUVELFVBQVU7d0JBQUthLFFBQVE7b0JBQUk7OEJBQ3JDLDRFQUFDcEIsaUVBQVdBOzswQ0FDViw4REFBQ0UsZ0VBQVVBO2dDQUFDbUIsWUFBWTtnQ0FBQ0MsU0FBUTtnQ0FBS0MsV0FBVTswQ0FDN0NKLEdBQUdLLFNBQVM7Ozs7OzswQ0FFZiw4REFBQ3RCLGdFQUFVQTtnQ0FBQ29CLFNBQVE7Z0NBQVFHLE9BQU07MENBQy9CTixHQUFHTyxRQUFROzs7Ozs7MENBRWQsOERBQUN6Qiw0REFBTUE7Z0NBQUMwQixPQUFPUixHQUFHUyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BakJhQzs7Ozs7QUF3QnpELEVBQUU7S0FoQ1cxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRGaXJlYmFzZS5qcz81YWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IGRvYyB9IGZyb20gXCJAZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCI7XG5pbXBvcnQgUmF0aW5nIGZyb20gXCJAbXVpL21hdGVyaWFsL1JhdGluZ1wiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuXG5leHBvcnQgY29uc3QgQ2FyZEZpcmViYXNlID0gKHsgcHJvcHMgfSkgPT4ge1xuICBsZXQgZG9jUmVmO1xuXG4gIGlmICh0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIpIHtcbiAgICBkb2NSZWYgPSBkb2MoZGIsIFwiaG90ZG9nU2hvcFwiLCBpZCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9e2ZhbHNlfSBzeD17eyBwYWRkaW5nOiA1IH19IGtleT17aW5kZXh9PlxuICAgICAgPEdyaWRcbiAgICAgICAgY29udGFpbmVyXG4gICAgICAgIHNwYWNpbmc9e3sgeHM6IDIsIG1kOiAzIH19XG4gICAgICAgIGNvbHVtbnM9e3sgeHM6IDQsIHNtOiA4LCBtZDogMTIgfX1cbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAge3Byb3BzPy5tYXAoKGV2KSA9PiAoXG4gICAgICAgICAgPENhcmQgc3g9e3sgbWF4V2lkdGg6IDM0NSwgbWFyZ2luOiAwLjcgfX0+XG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgICAgICB7ZXYubmFtZV9zaG9wfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICB7ZXYubG9jYXRpb259XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFJhdGluZyB2YWx1ZT17ZXYucmF0aW5nX3N0YXJzfSAvPlxuICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImRiIiwiZG9jIiwiR3JpZCIsIkNhcmQiLCJDb250YWluZXIiLCJDYXJkQ29udGVudCIsIlJhdGluZyIsIlR5cG9ncmFwaHkiLCJDYXJkRmlyZWJhc2UiLCJwcm9wcyIsImRvY1JlZiIsImlkIiwibWF4V2lkdGgiLCJzeCIsInBhZGRpbmciLCJjb250YWluZXIiLCJzcGFjaW5nIiwieHMiLCJtZCIsImNvbHVtbnMiLCJzbSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1hcCIsImV2IiwibWFyZ2luIiwiZ3V0dGVyQm90dG9tIiwidmFyaWFudCIsImNvbXBvbmVudCIsIm5hbWVfc2hvcCIsImNvbG9yIiwibG9jYXRpb24iLCJ2YWx1ZSIsInJhdGluZ19zdGFycyIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cardFirebase.js\n"));

/***/ })

});