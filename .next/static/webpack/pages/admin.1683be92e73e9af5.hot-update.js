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

/***/ "./components/hotdogShops.js":
/*!***********************************!*\
  !*** ./components/hotdogShops.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _pages_HotdogContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/HotdogContext */ \"./pages/HotdogContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HotdogShops = (param)=>{\n    let { id , name_shop , location , rating_stars , image  } = param;\n    _s();\n    const { showAlert , sethotdogShop  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_pages_HotdogContext__WEBPACK_IMPORTED_MODULE_3__.HotdogContext);\n    const deleteHotdogShop = async (id, e)=>{\n        e.stopPropagation();\n        const docRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, \"hotdogShop\", id);\n        await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(docRef);\n        showAlert(\"error\", \"Hotdog shop with id \".concat(id, \" deleted successfully\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n        onClick: ()=>sethotdogShop({\n                id,\n                name_shop,\n                location\n            }),\n        sx: {\n            mt: 3,\n            boxShadow: 3\n        },\n        style: {\n            backgroundColor: \"#FAFAFA\"\n        },\n        secondaryAction: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.IconButton, {\n                onClick: (e)=>deleteHotdogShop(id, e),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, void 0, void 0)\n            }, void 0, false, void 0, void 0)\n        }, void 0, false),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {\n            primary: name_shop,\n            secondary: \"\".concat(location).concat(rating_stars, \"n/\").concat(image)\n        }, void 0, false, {\n            fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/hotdogShops.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/hotdogShops.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HotdogShops, \"TuaDdd59jcvjoMHoy3DhPOxo7VM=\");\n_c = HotdogShops;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HotdogShops);\nvar _c;\n$RefreshReg$(_c, \"HotdogShops\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvdGRvZ1Nob3BzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRTtBQUNmO0FBQ0M7QUFDcEI7QUFDc0I7QUFDcEI7QUFFbkMsTUFBTVMsY0FBYyxTQUFzRDtRQUFyRCxFQUFFQyxHQUFFLEVBQUVDLFVBQVMsRUFBRUMsU0FBUSxFQUFFQyxhQUFZLEVBQUVDLE1BQUssRUFBRTs7SUFDbkUsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLGNBQWEsRUFBRSxHQUFHUixpREFBVUEsQ0FBQ0QsK0RBQWFBO0lBRTdELE1BQU1VLG1CQUFtQixPQUFPUCxJQUFJUSxJQUFNO1FBQ3hDQSxFQUFFQyxlQUFlO1FBRWpCLE1BQU1DLFNBQVNmLHdEQUFHQSxDQUFDQyx5Q0FBRUEsRUFBRSxjQUFjSTtRQUNyQyxNQUFNTiw4REFBU0EsQ0FBQ2dCO1FBQ2hCTCxVQUFVLFNBQVMsdUJBQTBCLE9BQUhMLElBQUc7SUFDL0M7SUFFQSxxQkFDRSw4REFBQ1QsbURBQVFBO1FBQ1BvQixTQUFTLElBQU1MLGNBQWM7Z0JBQUVOO2dCQUFJQztnQkFBV0M7WUFBUztRQUN2RFUsSUFBSTtZQUFFQyxJQUFJO1lBQUdDLFdBQVc7UUFBRTtRQUMxQkMsT0FBTztZQUFFQyxpQkFBaUI7UUFBVTtRQUNwQ0MsK0JBQ0U7c0JBQ0UsNEVBQUMzQixxREFBVUE7Z0JBQUNxQixTQUFTLENBQUNILElBQU1ELGlCQUFpQlAsSUFBSVE7MEJBQy9DLDRFQUFDZixrRUFBVUE7OztrQkFLakIsNEVBQUNELHVEQUFZQTtZQUNYMEIsU0FBU2pCO1lBQ1RrQixXQUFXLEdBQWNoQixPQUFYRCxVQUE0QkUsT0FBakJELGNBQWEsTUFBVSxPQUFOQzs7Ozs7Ozs7Ozs7QUFJbEQ7R0E5Qk1MO0tBQUFBO0FBZ0NOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG90ZG9nU2hvcHMuanM/MjczZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uQnV0dG9uLCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZVwiO1xuaW1wb3J0IHsgZGVsZXRlRG9jLCBkb2MgfSBmcm9tIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IEhvdGRvZ0NvbnRleHQgfSBmcm9tIFwiLi4vcGFnZXMvSG90ZG9nQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIb3Rkb2dTaG9wcyA9ICh7IGlkLCBuYW1lX3Nob3AsIGxvY2F0aW9uLCByYXRpbmdfc3RhcnMsIGltYWdlIH0pID0+IHtcbiAgY29uc3QgeyBzaG93QWxlcnQsIHNldGhvdGRvZ1Nob3AgfSA9IHVzZUNvbnRleHQoSG90ZG9nQ29udGV4dCk7XG5cbiAgY29uc3QgZGVsZXRlSG90ZG9nU2hvcCA9IGFzeW5jIChpZCwgZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwiaG90ZG9nU2hvcFwiLCBpZCk7XG4gICAgYXdhaXQgZGVsZXRlRG9jKGRvY1JlZik7XG4gICAgc2hvd0FsZXJ0KFwiZXJyb3JcIiwgYEhvdGRvZyBzaG9wIHdpdGggaWQgJHtpZH0gZGVsZXRlZCBzdWNjZXNzZnVsbHlgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMaXN0SXRlbVxuICAgICAgb25DbGljaz17KCkgPT4gc2V0aG90ZG9nU2hvcCh7IGlkLCBuYW1lX3Nob3AsIGxvY2F0aW9uIH0pfVxuICAgICAgc3g9e3sgbXQ6IDMsIGJveFNoYWRvdzogMyB9fVxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNGQUZBRkFcIiB9fVxuICAgICAgc2Vjb25kYXJ5QWN0aW9uPXtcbiAgICAgICAgPD5cbiAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gZGVsZXRlSG90ZG9nU2hvcChpZCwgZSl9PlxuICAgICAgICAgICAgPERlbGV0ZUljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgcHJpbWFyeT17bmFtZV9zaG9wfVxuICAgICAgICBzZWNvbmRhcnk9e2Ake2xvY2F0aW9ufSR7cmF0aW5nX3N0YXJzfW4vJHtpbWFnZX1gfVxuICAgICAgLz5cbiAgICA8L0xpc3RJdGVtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG90ZG9nU2hvcHM7XG4iXSwibmFtZXMiOlsiSWNvbkJ1dHRvbiIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1UZXh0IiwiRGVsZXRlSWNvbiIsImRlbGV0ZURvYyIsImRvYyIsImRiIiwiSG90ZG9nQ29udGV4dCIsInVzZUNvbnRleHQiLCJIb3Rkb2dTaG9wcyIsImlkIiwibmFtZV9zaG9wIiwibG9jYXRpb24iLCJyYXRpbmdfc3RhcnMiLCJpbWFnZSIsInNob3dBbGVydCIsInNldGhvdGRvZ1Nob3AiLCJkZWxldGVIb3Rkb2dTaG9wIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImRvY1JlZiIsIm9uQ2xpY2siLCJzeCIsIm10IiwiYm94U2hhZG93Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWNvbmRhcnlBY3Rpb24iLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/hotdogShops.js\n"));

/***/ })

});