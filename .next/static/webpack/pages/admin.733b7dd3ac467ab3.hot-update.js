"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/adminHotdogShop.js":
/*!***************************************!*\
  !*** ./components/adminHotdogShop.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _hotdogShops__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hotdogShops */ \"./components/hotdogShops.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AdminHotdogShop = ()=>{\n    _s();\n    const [hotdogShop, sethotdogShop] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const collectionRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"hotdogShop\");\n        const q = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(collectionRef, (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)(\"name_shop\", \"asc\"));\n        const unsubscribe = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)(q, (querySnapshot)=>{\n            sethotdogShop(querySnapshot.docs.map((doc)=>({\n                    ...doc.data(),\n                    id: doc.id\n                })));\n        });\n        return unsubscribe;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: hotdogShop.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hotdogShops__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                id: data.id,\n                name_shop: data.name_shop,\n                location: data.location,\n                rating_stars: data.rating_stars,\n                image: data.image,\n                latitude: data.latitude,\n                longitude: data.longitude\n            }, data.id, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/adminHotdogShop.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/adminHotdogShop.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AdminHotdogShop, \"U6Sy+KxzIwGadmcyDtHhh/xPq7I=\");\n_c = AdminHotdogShop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminHotdogShop);\nvar _c;\n$RefreshReg$(_c, \"AdminHotdogShop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FkbWluSG90ZG9nU2hvcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZFO0FBQ2pDO0FBQ1g7QUFDTztBQUV4QyxNQUFNUSxrQkFBa0IsSUFBTTs7SUFDNUIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0NELGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTyxnQkFBZ0JYLCtEQUFVQSxDQUFDTSx5Q0FBRUEsRUFBRTtRQUVyQyxNQUFNTSxJQUFJVCwwREFBS0EsQ0FBQ1EsZUFBZVQsNERBQU9BLENBQUMsYUFBYTtRQUVwRCxNQUFNVyxjQUFjWiwrREFBVUEsQ0FBQ1csR0FBRyxDQUFDRSxnQkFBa0I7WUFDbkRKLGNBQ0VJLGNBQWNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQVM7b0JBQy9CLEdBQUdBLElBQUlDLElBQUksRUFBRTtvQkFDYkMsSUFBSUYsSUFBSUUsRUFBRTtnQkFDWjtRQUVKO1FBQ0EsT0FBT047SUFDVCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ087a0JBQ0VYLFdBQVdPLEdBQUcsQ0FBQyxDQUFDRSxxQkFDZiw4REFBQ1gsb0RBQVdBO2dCQUVWWSxJQUFJRCxLQUFLQyxFQUFFO2dCQUNYRSxXQUFXSCxLQUFLRyxTQUFTO2dCQUN6QkMsVUFBVUosS0FBS0ksUUFBUTtnQkFDdkJDLGNBQWNMLEtBQUtLLFlBQVk7Z0JBQy9CQyxPQUFPTixLQUFLTSxLQUFLO2dCQUNqQkMsVUFBVVAsS0FBS08sUUFBUTtnQkFDdkJDLFdBQVdSLEtBQUtRLFNBQVM7ZUFQcEJSLEtBQUtDLEVBQUU7Ozs7Ozs7Ozs7QUFZdEI7R0FuQ01YO0tBQUFBO0FBcUNOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRtaW5Ib3Rkb2dTaG9wLmpzP2IwMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sbGVjdGlvbiwgb25TbmFwc2hvdCwgb3JkZXJCeSwgcXVlcnkgfSBmcm9tIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCBIb3Rkb2dTaG9wcyBmcm9tIFwiLi9ob3Rkb2dTaG9wc1wiO1xuXG5jb25zdCBBZG1pbkhvdGRvZ1Nob3AgPSAoKSA9PiB7XG4gIGNvbnN0IFtob3Rkb2dTaG9wLCBzZXRob3Rkb2dTaG9wXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3Rpb25SZWYgPSBjb2xsZWN0aW9uKGRiLCBcImhvdGRvZ1Nob3BcIik7XG5cbiAgICBjb25zdCBxID0gcXVlcnkoY29sbGVjdGlvblJlZiwgb3JkZXJCeShcIm5hbWVfc2hvcFwiLCBcImFzY1wiKSk7XG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uU25hcHNob3QocSwgKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgIHNldGhvdGRvZ1Nob3AoXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcbiAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxuICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdW5zdWJzY3JpYmU7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7aG90ZG9nU2hvcC5tYXAoKGRhdGEpID0+IChcbiAgICAgICAgPEhvdGRvZ1Nob3BzXG4gICAgICAgICAga2V5PXtkYXRhLmlkfVxuICAgICAgICAgIGlkPXtkYXRhLmlkfVxuICAgICAgICAgIG5hbWVfc2hvcD17ZGF0YS5uYW1lX3Nob3B9XG4gICAgICAgICAgbG9jYXRpb249e2RhdGEubG9jYXRpb259XG4gICAgICAgICAgcmF0aW5nX3N0YXJzPXtkYXRhLnJhdGluZ19zdGFyc31cbiAgICAgICAgICBpbWFnZT17ZGF0YS5pbWFnZX1cbiAgICAgICAgICBsYXRpdHVkZT17ZGF0YS5sYXRpdHVkZX1cbiAgICAgICAgICBsb25naXR1ZGU9e2RhdGEubG9uZ2l0dWRlfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZG1pbkhvdGRvZ1Nob3A7XG4iXSwibmFtZXMiOlsiY29sbGVjdGlvbiIsIm9uU25hcHNob3QiLCJvcmRlckJ5IiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImRiIiwiSG90ZG9nU2hvcHMiLCJBZG1pbkhvdGRvZ1Nob3AiLCJob3Rkb2dTaG9wIiwic2V0aG90ZG9nU2hvcCIsImNvbGxlY3Rpb25SZWYiLCJxIiwidW5zdWJzY3JpYmUiLCJxdWVyeVNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJpZCIsImRpdiIsIm5hbWVfc2hvcCIsImxvY2F0aW9uIiwicmF0aW5nX3N0YXJzIiwiaW1hZ2UiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/adminHotdogShop.js\n"));

/***/ })

});