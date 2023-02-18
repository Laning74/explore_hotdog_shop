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

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_addHotdogShop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/addHotdogShop */ \"./components/addHotdogShop.js\");\n/* harmony import */ var _components_adminHotdogShop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/adminHotdogShop */ \"./components/adminHotdogShop.js\");\n/* harmony import */ var _pages_HotdogContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/HotdogContext */ \"./pages/HotdogContext.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst admin = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [alertType, setAlertType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"success\");\n    const [alertMessage, setAlertMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [hotdogShop, sethotdogShop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name_shop: \"\",\n        location: \"\",\n        rating_stars: \"\",\n        image: \"\",\n        latitude: \"\",\n        longitude: \"\"\n    });\n    const showAlert = (type, msg)=>{\n        setAlertType(type);\n        setAlertMessage(msg);\n        setOpen(true);\n    };\n    const handleClose = (reason)=>{\n        if (reason === \"clickaway\") {\n            return;\n        }\n        setOpen(false);\n    };\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    if (status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            variant: \"body1\",\n                            color: \"text.secondary\",\n                            children: [\n                                \"Velkommen, \",\n                                session.user.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            variant: \"contained\",\n                            sx: {\n                                mt: 3,\n                                margin: 1\n                            },\n                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                            children: \"Sign Out\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_HotdogContext__WEBPACK_IMPORTED_MODULE_5__.HotdogContext.Provider, {\n                    value: {\n                        showAlert,\n                        hotdogShop,\n                        sethotdogShop\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Container, {\n                        maxWidth: \"sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Snackbar, {\n                                anchorOrigin: {\n                                    vertical: \"bottom\",\n                                    horizontal: \"center\"\n                                },\n                                open: open,\n                                autoHideDuration: 3000,\n                                onClose: handleClose,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Alert, {\n                                    onClose: handleClose,\n                                    severity: alertType,\n                                    sx: {\n                                        width: \"100%\"\n                                    },\n                                    children: alertMessage\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_addHotdogShop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_adminHotdogShop__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, undefined);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Du er ikke innlogget!\"\n            }, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.js\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/pages/admin.js\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, undefined);\n    }\n};\n_s(admin, \"dTmlNSZnkVusaKU1468MQ+XNPMY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (admin);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNTO0FBQ2lCO0FBQ087QUFDVjtBQUNJO0FBQ0w7QUFDTDtBQUVsRCxNQUFNWSxRQUFRLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3RDLE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNnQixjQUFjQyxnQkFBZ0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2tCLFlBQVlDLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFDO1FBQzNDb0IsV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLGNBQWM7UUFDZEMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLFdBQVc7SUFDYjtJQUNBLE1BQU1DLFlBQVksQ0FBQ0MsTUFBTUMsTUFBUTtRQUMvQmIsYUFBYVk7UUFDYlYsZ0JBQWdCVztRQUNoQmYsUUFBUSxJQUFJO0lBQ2Q7SUFDQSxNQUFNZ0IsY0FBYyxDQUFDQyxTQUFXO1FBQzlCLElBQUlBLFdBQVcsYUFBYTtZQUMxQjtRQUNGLENBQUM7UUFFRGpCLFFBQVEsS0FBSztJQUNmO0lBRUEsTUFBTSxFQUFFa0IsTUFBTUMsUUFBTyxFQUFFQyxPQUFNLEVBQUUsR0FBRzVCLDJEQUFVQTtJQUU1QyxJQUFJNEIsV0FBVyxpQkFBaUI7UUFDOUIscUJBQ0UsOERBQUNDOzs4QkFDQyw4REFBQ0E7O3NDQUNDLDhEQUFDeEIsZ0VBQVVBOzRCQUFDeUIsU0FBUTs0QkFBUUMsT0FBTTs7Z0NBQWlCO2dDQUNyQ0osUUFBUUssSUFBSSxDQUFDQyxJQUFJOzs7Ozs7O3NDQUUvQiw4REFBQ3JDLDREQUFNQTs0QkFDTGtDLFNBQVE7NEJBQ1JJLElBQUk7Z0NBQUVDLElBQUk7Z0NBQUdDLFFBQVE7NEJBQUU7NEJBQ3ZCQyxTQUFTLElBQU1wQyx3REFBT0E7c0NBQ3ZCOzs7Ozs7Ozs7Ozs7OEJBSUgsOERBQUNHLHdFQUFzQjtvQkFDckJtQyxPQUFPO3dCQUFFbEI7d0JBQVdSO3dCQUFZQztvQkFBYzs4QkFFOUMsNEVBQUNoQixvREFBU0E7d0JBQUMwQyxVQUFTOzswQ0FDbEIsOERBQUN6QyxtREFBUUE7Z0NBQ1AwQyxjQUFjO29DQUFFQyxVQUFVO29DQUFVQyxZQUFZO2dDQUFTO2dDQUN6RHBDLE1BQU1BO2dDQUNOcUMsa0JBQWtCO2dDQUNsQkMsU0FBU3JCOzBDQUVULDRFQUFDM0IsZ0RBQUtBO29DQUNKZ0QsU0FBU3JCO29DQUNUc0IsVUFBVXJDO29DQUNWeUIsSUFBSTt3Q0FBRWEsT0FBTztvQ0FBTzs4Q0FFbkJwQzs7Ozs7Ozs7Ozs7MENBR0wsOERBQUNULGlFQUFhQTs7Ozs7MENBQ2QsOERBQUNDLG1FQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUsxQixPQUFPO1FBQ0wscUJBQ0UsOERBQUMwQjtzQkFDQyw0RUFBQ21COzBCQUFFOzs7Ozs7Ozs7OztJQUdULENBQUM7QUFDSDtHQXpFTTFDOztRQXlCOEJOLHVEQUFVQTs7OztBQWdFOUMsK0RBQWVNLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4uanM/ODVjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCB7IEFsZXJ0LCBDb250YWluZXIsIFNuYWNrYmFyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQsIGdldFNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgQWRkSG90ZG9nU2hvcCBmcm9tIFwiLi4vY29tcG9uZW50cy9hZGRIb3Rkb2dTaG9wXCI7XG5pbXBvcnQgQWRtaW5Ib3Rkb2dTaG9wIGZyb20gXCIuLi9jb21wb25lbnRzL2FkbWluSG90ZG9nU2hvcFwiO1xuaW1wb3J0IHsgSG90ZG9nQ29udGV4dCB9IGZyb20gXCIuLi9wYWdlcy9Ib3Rkb2dDb250ZXh0XCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5cbmNvbnN0IGFkbWluID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbGVydFR5cGUsIHNldEFsZXJ0VHlwZV0gPSB1c2VTdGF0ZShcInN1Y2Nlc3NcIik7XG4gIGNvbnN0IFthbGVydE1lc3NhZ2UsIHNldEFsZXJ0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2hvdGRvZ1Nob3AsIHNldGhvdGRvZ1Nob3BdID0gdXNlU3RhdGUoe1xuICAgIG5hbWVfc2hvcDogXCJcIixcbiAgICBsb2NhdGlvbjogXCJcIixcbiAgICByYXRpbmdfc3RhcnM6IFwiXCIsXG4gICAgaW1hZ2U6IFwiXCIsXG4gICAgbGF0aXR1ZGU6IFwiXCIsXG4gICAgbG9uZ2l0dWRlOiBcIlwiLFxuICB9KTtcbiAgY29uc3Qgc2hvd0FsZXJ0ID0gKHR5cGUsIG1zZykgPT4ge1xuICAgIHNldEFsZXJ0VHlwZSh0eXBlKTtcbiAgICBzZXRBbGVydE1lc3NhZ2UobXNnKTtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDbG9zZSA9IChyZWFzb24pID0+IHtcbiAgICBpZiAocmVhc29uID09PSBcImNsaWNrYXdheVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcblxuICBpZiAoc3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIFZlbGtvbW1lbiwge3Nlc3Npb24udXNlci5uYW1lfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIHN4PXt7IG10OiAzLCBtYXJnaW46IDEgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaWduIE91dFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEhvdGRvZ0NvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgICB2YWx1ZT17eyBzaG93QWxlcnQsIGhvdGRvZ1Nob3AsIHNldGhvdGRvZ1Nob3AgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiPlxuICAgICAgICAgICAgPFNuYWNrYmFyXG4gICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJib3R0b21cIiwgaG9yaXpvbnRhbDogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXszMDAwfVxuICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgc2V2ZXJpdHk9e2FsZXJ0VHlwZX1cbiAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthbGVydE1lc3NhZ2V9XG4gICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICA8L1NuYWNrYmFyPlxuICAgICAgICAgICAgPEFkZEhvdGRvZ1Nob3AgLz5cbiAgICAgICAgICAgIDxBZG1pbkhvdGRvZ1Nob3AgLz5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9Ib3Rkb2dDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+RHUgZXIgaWtrZSBpbm5sb2dnZXQhPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL2xvZ2luXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBzZXNzaW9uIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZG1pbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQWxlcnQiLCJDb250YWluZXIiLCJTbmFja2JhciIsInVzZVNlc3Npb24iLCJzaWduT3V0IiwiQWRkSG90ZG9nU2hvcCIsIkFkbWluSG90ZG9nU2hvcCIsIkhvdGRvZ0NvbnRleHQiLCJUeXBvZ3JhcGh5IiwiYWRtaW4iLCJvcGVuIiwic2V0T3BlbiIsImFsZXJ0VHlwZSIsInNldEFsZXJ0VHlwZSIsImFsZXJ0TWVzc2FnZSIsInNldEFsZXJ0TWVzc2FnZSIsImhvdGRvZ1Nob3AiLCJzZXRob3Rkb2dTaG9wIiwibmFtZV9zaG9wIiwibG9jYXRpb24iLCJyYXRpbmdfc3RhcnMiLCJpbWFnZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwic2hvd0FsZXJ0IiwidHlwZSIsIm1zZyIsImhhbmRsZUNsb3NlIiwicmVhc29uIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJkaXYiLCJ2YXJpYW50IiwiY29sb3IiLCJ1c2VyIiwibmFtZSIsInN4IiwibXQiLCJtYXJnaW4iLCJvbkNsaWNrIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIm1heFdpZHRoIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiYXV0b0hpZGVEdXJhdGlvbiIsIm9uQ2xvc2UiLCJzZXZlcml0eSIsIndpZHRoIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin.js\n"));

/***/ })

});