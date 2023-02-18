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

/***/ "./components/addHotdogShop.js":
/*!*************************************!*\
  !*** ./components/addHotdogShop.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/firestore */ \"./node_modules/@firebase/firestore/dist/index.esm2017.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _pages_HotdogContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/HotdogContext */ \"./pages/HotdogContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AddHotdogShop = ()=>{\n    _s();\n    const inputAreaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const { showAlert , hotdogShop , sethotdogShop  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_HotdogContext__WEBPACK_IMPORTED_MODULE_4__.HotdogContext);\n    const onSubmit = async ()=>{\n        if (hotdogShop === null || hotdogShop === void 0 ? void 0 : hotdogShop.id) {\n            const docRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"hotdogShop\", hotdogShop.id);\n            const hotdogShopUpdated = {\n                ...hotdogShop\n            };\n            delete hotdogShopUpdated.id;\n            await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docRef, hotdogShopUpdated);\n            sethotdogShop({\n                name_shop: \"\",\n                location: \"\",\n                rating_stars: \"\",\n                image: \"\",\n                latitude: \"\",\n                longitude: \"\"\n            });\n            showAlert(\"info\", \"Hotdog shop with id \".concat(hotdogShop.id, \" updated successfully\"));\n        } else {\n            const collectionRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"hotdogShop\");\n            const docRef = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(collectionRef, {\n                ...hotdogShop\n            });\n            sethotdogShop({\n                name_shop: \"\",\n                location: \"\",\n                rating_stars: \"\",\n                image: \"\",\n                latitude: \"\",\n                longitude: \"\"\n            });\n            showAlert(\"success\", \"Hotdog shop with id \".concat(docRef.id, \" is added successfully\"));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const checkIfClickedOutside = (e)=>{\n            if (!inputAreaRef.current.contains(e.target)) {\n                console.log(\"Outside input area\");\n                sethotdogShop({\n                    name_shop: \"\",\n                    location: \"\",\n                    rating_stars: \"\",\n                    image: \"\",\n                    latitude: \"\",\n                    longitude: \"\"\n                });\n            } else {\n                console.log(\"Inside input area\");\n            }\n        };\n        document.addEventListener(\"mousedown\", checkIfClickedOutside);\n        return ()=>{\n            document.removeEventListener(\"mousedown\", checkIfClickedOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: inputAreaRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                fullWidth: true,\n                label: \"name_shop\",\n                margin: \"normal\",\n                value: hotdogShop.name_shop,\n                onChange: (e)=>sethotdogShop({\n                        ...hotdogShop,\n                        name_shop: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/addHotdogShop.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                fullWidth: true,\n                label: \"location\",\n                margin: \"normal\",\n                value: hotdogShop.location,\n                onChange: (e)=>sethotdogShop({\n                        ...hotdogShop,\n                        location: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/addHotdogShop.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                fullWidth: true,\n                label: \"rating_stars\",\n                margin: \"normal\",\n                value: hotdogShop.rating_stars,\n                onChange: (e)=>sethotdogShop({\n                        ...hotdogShop,\n                        rating_stars: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/addHotdogShop.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                fullWidth: true,\n                label: \"image Unsplash URL\",\n                multiline: true,\n                maxRows: 4,\n                margin: \"normal\",\n                value: hotdogShop.image,\n                onChange: (e)=>sethotdogShop({\n                        ...hotdogShop,\n                        image: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/addHotdogShop.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                fullWidth: true,\n                label: \"latitude\",\n                margin: \"normal\",\n                value: hotdogShop.latitude,\n                onChange: (e)=>sethotdogShop({\n                        ...hotdogShop,\n                        latitude: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/addHotdogShop.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                fullWidth: true,\n                label: \"longitude\",\n                margin: \"normal\",\n                value: hotdogShop.longitude,\n                onChange: (e)=>sethotdogShop({\n                        ...hotdogShop,\n                        longitude: e.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/addHotdogShop.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                onClick: onSubmit,\n                variant: \"contained\",\n                sx: {\n                    mt: 3\n                },\n                children: hotdogShop.id ? \"Update hotdogshop\" : \"Add a new hotdog shop\"\n            }, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/addHotdogShop.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/addHotdogShop.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddHotdogShop, \"MgUsGNStzpsMrawvZQJmest+O38=\");\n_c = AddHotdogShop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddHotdogShop);\nvar _c;\n$RefreshReg$(_c, \"AddHotdogShop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JBQUM7Ozs7OzswQkFHaEUsOERBQUNyQyxvREFBU0E7Z0JBQ1JrQyxTQUFTO2dCQUNUQyxPQUFNO2dCQUNOSSxTQUFTO2dCQUNUQyxTQUFTO2dCQUNUSixRQUFPO2dCQUNQQyxPQUFPNUIsV0FBV1MsS0FBSztnQkFDdkJvQixVQUFVLENBQUNmLElBQ1RiLGNBQWM7d0JBQUUsR0FBR0QsVUFBVTt3QkFBRVMsT0FBT0ssRUFBRUcsTUFBTSxDQUFDVyxLQUFLO29CQUFDOzs7Ozs7MEJBR3pELDhEQUFDckMsb0RBQVNBO2dCQUNSa0MsU0FBUztnQkFDVEMsT0FBTTtnQkFDTkMsUUFBTztnQkFDUEMsT0FBTzVCLFdBQVdVLFFBQVE7Z0JBQzFCbUIsVUFBVSxDQUFDZixJQUNUYixjQUFjO3dCQUFFLEdBQUdELFVBQVU7d0JBQUVVLFVBQVVJLEVBQUVHLE1BQU0sQ0FBQ1csS0FBSztvQkFBQzs7Ozs7OzBCQUc1RCw4REFBQ3JDLG9EQUFTQTtnQkFDUmtDLFNBQVM7Z0JBQ1RDLE9BQU07Z0JBQ05DLFFBQU87Z0JBQ1BDLE9BQU81QixXQUFXVyxTQUFTO2dCQUMzQmtCLFVBQVUsQ0FBQ2YsSUFDVGIsY0FBYzt3QkFBRSxHQUFHRCxVQUFVO3dCQUFFVyxXQUFXRyxFQUFFRyxNQUFNLENBQUNXLEtBQUs7b0JBQUM7Ozs7OzswQkFHN0QsOERBQUN0QyxpREFBTUE7Z0JBQUMwQyxTQUFTOUI7Z0JBQVUrQixTQUFRO2dCQUFZQyxJQUFJO29CQUFFQyxJQUFJO2dCQUFFOzBCQUN4RG5DLFdBQVdHLEVBQUUsR0FBRyxzQkFBc0IsdUJBQXVCOzs7Ozs7Ozs7Ozs7QUFJdEU7R0EvSE1OO0tBQUFBO0FBaUlOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRkSG90ZG9nU2hvcC5qcz80ZTY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZERvYywgY29sbGVjdGlvbiwgdXBkYXRlRG9jLCBkb2MgfSBmcm9tIFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBIb3Rkb2dDb250ZXh0IH0gZnJvbSBcIi4uL3BhZ2VzL0hvdGRvZ0NvbnRleHRcIjtcblxuY29uc3QgQWRkSG90ZG9nU2hvcCA9ICgpID0+IHtcbiAgY29uc3QgaW5wdXRBcmVhUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgeyBzaG93QWxlcnQsIGhvdGRvZ1Nob3AsIHNldGhvdGRvZ1Nob3AgfSA9IHVzZUNvbnRleHQoSG90ZG9nQ29udGV4dCk7XG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChob3Rkb2dTaG9wPy5pZCkge1xuICAgICAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCBcImhvdGRvZ1Nob3BcIiwgaG90ZG9nU2hvcC5pZCk7XG4gICAgICBjb25zdCBob3Rkb2dTaG9wVXBkYXRlZCA9IHsgLi4uaG90ZG9nU2hvcCB9O1xuICAgICAgZGVsZXRlIGhvdGRvZ1Nob3BVcGRhdGVkLmlkO1xuICAgICAgYXdhaXQgdXBkYXRlRG9jKGRvY1JlZiwgaG90ZG9nU2hvcFVwZGF0ZWQpO1xuICAgICAgc2V0aG90ZG9nU2hvcCh7XG4gICAgICAgIG5hbWVfc2hvcDogXCJcIixcbiAgICAgICAgbG9jYXRpb246IFwiXCIsXG4gICAgICAgIHJhdGluZ19zdGFyczogXCJcIixcbiAgICAgICAgaW1hZ2U6IFwiXCIsXG4gICAgICAgIGxhdGl0dWRlOiBcIlwiLFxuICAgICAgICBsb25naXR1ZGU6IFwiXCIsXG4gICAgICB9KTtcbiAgICAgIHNob3dBbGVydChcbiAgICAgICAgXCJpbmZvXCIsXG4gICAgICAgIGBIb3Rkb2cgc2hvcCB3aXRoIGlkICR7aG90ZG9nU2hvcC5pZH0gdXBkYXRlZCBzdWNjZXNzZnVsbHlgXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihkYiwgXCJob3Rkb2dTaG9wXCIpO1xuICAgICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb25SZWYsIHtcbiAgICAgICAgLi4uaG90ZG9nU2hvcCxcbiAgICAgIH0pO1xuICAgICAgc2V0aG90ZG9nU2hvcCh7XG4gICAgICAgIG5hbWVfc2hvcDogXCJcIixcbiAgICAgICAgbG9jYXRpb246IFwiXCIsXG4gICAgICAgIHJhdGluZ19zdGFyczogXCJcIixcbiAgICAgICAgaW1hZ2U6IFwiXCIsXG4gICAgICAgIGxhdGl0dWRlOiBcIlwiLFxuICAgICAgICBsb25naXR1ZGU6IFwiXCIsXG4gICAgICB9KTtcbiAgICAgIHNob3dBbGVydChcbiAgICAgICAgXCJzdWNjZXNzXCIsXG4gICAgICAgIGBIb3Rkb2cgc2hvcCB3aXRoIGlkICR7ZG9jUmVmLmlkfSBpcyBhZGRlZCBzdWNjZXNzZnVsbHlgXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrSWZDbGlja2VkT3V0c2lkZSA9IChlKSA9PiB7XG4gICAgICBpZiAoIWlucHV0QXJlYVJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk91dHNpZGUgaW5wdXQgYXJlYVwiKTtcbiAgICAgICAgc2V0aG90ZG9nU2hvcCh7XG4gICAgICAgICAgbmFtZV9zaG9wOiBcIlwiLFxuICAgICAgICAgIGxvY2F0aW9uOiBcIlwiLFxuICAgICAgICAgIHJhdGluZ19zdGFyczogXCJcIixcbiAgICAgICAgICBpbWFnZTogXCJcIixcbiAgICAgICAgICBsYXRpdHVkZTogXCJcIixcbiAgICAgICAgICBsb25naXR1ZGU6IFwiXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnNpZGUgaW5wdXQgYXJlYVwiKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2hlY2tJZkNsaWNrZWRPdXRzaWRlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjaGVja0lmQ2xpY2tlZE91dHNpZGUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtpbnB1dEFyZWFSZWZ9PlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgbGFiZWw9XCJuYW1lX3Nob3BcIlxuICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICB2YWx1ZT17aG90ZG9nU2hvcC5uYW1lX3Nob3B9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICBzZXRob3Rkb2dTaG9wKHsgLi4uaG90ZG9nU2hvcCwgbmFtZV9zaG9wOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgbGFiZWw9XCJsb2NhdGlvblwiXG4gICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgIHZhbHVlPXtob3Rkb2dTaG9wLmxvY2F0aW9ufVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgc2V0aG90ZG9nU2hvcCh7IC4uLmhvdGRvZ1Nob3AsIGxvY2F0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgbGFiZWw9XCJyYXRpbmdfc3RhcnNcIlxuICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICB2YWx1ZT17aG90ZG9nU2hvcC5yYXRpbmdfc3RhcnN9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICBzZXRob3Rkb2dTaG9wKHsgLi4uaG90ZG9nU2hvcCwgcmF0aW5nX3N0YXJzOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgbGFiZWw9XCJpbWFnZSBVbnNwbGFzaCBVUkxcIlxuICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgbWF4Um93cz17NH1cbiAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgdmFsdWU9e2hvdGRvZ1Nob3AuaW1hZ2V9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICBzZXRob3Rkb2dTaG9wKHsgLi4uaG90ZG9nU2hvcCwgaW1hZ2U6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBsYWJlbD1cImxhdGl0dWRlXCJcbiAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgdmFsdWU9e2hvdGRvZ1Nob3AubGF0aXR1ZGV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICBzZXRob3Rkb2dTaG9wKHsgLi4uaG90ZG9nU2hvcCwgbGF0aXR1ZGU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBsYWJlbD1cImxvbmdpdHVkZVwiXG4gICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgIHZhbHVlPXtob3Rkb2dTaG9wLmxvbmdpdHVkZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgIHNldGhvdGRvZ1Nob3AoeyAuLi5ob3Rkb2dTaG9wLCBsb25naXR1ZGU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fSB2YXJpYW50PVwiY29udGFpbmVkXCIgc3g9e3sgbXQ6IDMgfX0+XG4gICAgICAgIHtob3Rkb2dTaG9wLmlkID8gXCJVcGRhdGUgaG90ZG9nc2hvcFwiIDogXCJBZGQgYSBuZXcgaG90ZG9nIHNob3BcIn1cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkSG90ZG9nU2hvcDtcbiJdLCJuYW1lcyI6WyJhZGREb2MiLCJjb2xsZWN0aW9uIiwidXBkYXRlRG9jIiwiZG9jIiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwidXNlQ29udGV4dCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImRiIiwiSG90ZG9nQ29udGV4dCIsIkFkZEhvdGRvZ1Nob3AiLCJpbnB1dEFyZWFSZWYiLCJzaG93QWxlcnQiLCJob3Rkb2dTaG9wIiwic2V0aG90ZG9nU2hvcCIsIm9uU3VibWl0IiwiaWQiLCJkb2NSZWYiLCJob3Rkb2dTaG9wVXBkYXRlZCIsIm5hbWVfc2hvcCIsImxvY2F0aW9uIiwicmF0aW5nX3N0YXJzIiwiaW1hZ2UiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvbGxlY3Rpb25SZWYiLCJjaGVja0lmQ2xpY2tlZE91dHNpZGUiLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJyZWYiLCJmdWxsV2lkdGgiLCJsYWJlbCIsIm1hcmdpbiIsInZhbHVlIiwib25DaGFuZ2UiLCJtdWx0aWxpbmUiLCJtYXhSb3dzIiwib25DbGljayIsInZhcmlhbnQiLCJzeCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/addHotdogShop.js\n"));

/***/ })

});