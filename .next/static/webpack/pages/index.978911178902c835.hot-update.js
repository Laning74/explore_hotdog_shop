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

/***/ "./components/topstarCard.js":
/*!***********************************!*\
  !*** ./components/topstarCard.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Rating */ \"./node_modules/@mui/material/Rating/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst topstarsCard = ()=>{\n    _s();\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getCards = async ()=>{\n            const cardsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"hotdogShop\");\n            const cardsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(cardsCollection);\n            const cardsList = cardsSnapshot.docs.map((doc)=>({\n                    id: doc.id,\n                    ...doc.data()\n                })).filter((card)=>card.rating_stars === \"5\");\n            setCards(cardsList);\n        };\n        getCards();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        maxWidth: false,\n        sx: {\n            padding: 5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            container: true,\n            spacing: {\n                xs: 2,\n                md: 3\n            },\n            columns: {\n                xs: 4,\n                sm: 8,\n                md: 12\n            },\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            children: cards.map((card)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    sx: {\n                        backgroundColor: \"#fffde7\",\n                        maxWidth: 345,\n                        margin: 0.7\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                width: 300,\n                                height: 200,\n                                alt: card.name_shop,\n                                src: card.image\n                            }, void 0, false, {\n                                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/topstarCard.js\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/topstarCard.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    gutterBottom: true,\n                                    variant: \"h5\",\n                                    component: \"div\",\n                                    children: card.name_shop\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/topstarCard.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    variant: \"body2\",\n                                    color: \"text.secondary\",\n                                    children: card.location\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/topstarCard.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Rating__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    value: parseFloat(card.rating_stars),\n                                    sx: {\n                                        marginTop: \"1rem\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/topstarCard.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/topstarCard.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, card.id, true, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/topstarCard.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/topstarCard.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/topstarCard.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(topstarsCard, \"M51NroWgc5aUEHiqsZiaQ+7WeWA=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (topstarsCard);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvcHN0YXJDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ007QUFDeEI7QUFDSztBQUNjO0FBQ0o7QUFDVjtBQUNJO0FBQ1E7QUFDbkI7QUFFL0IsTUFBTWEsZUFBZSxJQUFNOztJQUN6QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1jLFdBQVcsVUFBWTtZQUMzQixNQUFNQyxrQkFBa0JkLDhEQUFVQSxDQUFDRSx5Q0FBRUEsRUFBRTtZQUN2QyxNQUFNYSxnQkFBZ0IsTUFBTWQsMkRBQU9BLENBQUNhO1lBQ3BDLE1BQU1FLFlBQVlELGNBQWNFLElBQUksQ0FDakNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFTO29CQUNiQyxJQUFJRCxJQUFJQyxFQUFFO29CQUNWLEdBQUdELElBQUlFLElBQUksRUFBRTtnQkFDZixJQUNDQyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsWUFBWSxLQUFLO1lBQzFDWixTQUFTSTtRQUNYO1FBRUFIO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNSLCtEQUFTQTtRQUFDb0IsVUFBVSxLQUFLO1FBQUVDLElBQUk7WUFBRUMsU0FBUztRQUFFO2tCQUMzQyw0RUFBQ3JCLDBEQUFJQTtZQUNIc0IsU0FBUztZQUNUQyxTQUFTO2dCQUFFQyxJQUFJO2dCQUFHQyxJQUFJO1lBQUU7WUFDeEJDLFNBQVM7Z0JBQUVGLElBQUk7Z0JBQUdHLElBQUk7Z0JBQUdGLElBQUk7WUFBRztZQUNoQ0csWUFBVztZQUNYQyxnQkFBZTtzQkFFZHhCLE1BQU1PLEdBQUcsQ0FBQyxDQUFDSyxxQkFDViw4REFBQ3BCLDBEQUFJQTtvQkFFSHVCLElBQUk7d0JBQUVVLGlCQUFpQjt3QkFBV1gsVUFBVTt3QkFBS1ksUUFBUTtvQkFBSTs7c0NBRTdELDhEQUFDQztzQ0FDQyw0RUFBQzdCLG1EQUFLQTtnQ0FDSjhCLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JDLEtBQUtsQixLQUFLbUIsU0FBUztnQ0FDbkJDLEtBQUtwQixLQUFLcUIsS0FBSzs7Ozs7Ozs7Ozs7c0NBR25CLDhEQUFDeEMsaUVBQVdBOzs4Q0FDViw4REFBQ0ksZ0VBQVVBO29DQUFDcUMsWUFBWTtvQ0FBQ0MsU0FBUTtvQ0FBS0MsV0FBVTs4Q0FDN0N4QixLQUFLbUIsU0FBUzs7Ozs7OzhDQUVqQiw4REFBQ2xDLGdFQUFVQTtvQ0FBQ3NDLFNBQVE7b0NBQVFFLE9BQU07OENBQy9CekIsS0FBSzBCLFFBQVE7Ozs7Ozs4Q0FFaEIsOERBQUMxQyw2REFBTUE7b0NBQ0wyQyxPQUFPQyxXQUFXNUIsS0FBS0MsWUFBWTtvQ0FDbkNFLElBQUk7d0NBQUUwQixXQUFXO29DQUFPOzs7Ozs7Ozs7Ozs7O21CQXBCdkI3QixLQUFLSCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUE0QnhCO0dBMURNVjtBQTRETiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RvcHN0YXJDYXJkLmpzP2FkOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi9maXJlYmFzZVwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiO1xuaW1wb3J0IFJhdGluZyBmcm9tIFwiQG11aS9tYXRlcmlhbC9SYXRpbmdcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCB0b3BzdGFyc0NhcmQgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0Q2FyZHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjYXJkc0NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKGRiLCBcImhvdGRvZ1Nob3BcIik7XG4gICAgICBjb25zdCBjYXJkc1NuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjYXJkc0NvbGxlY3Rpb24pO1xuICAgICAgY29uc3QgY2FyZHNMaXN0ID0gY2FyZHNTbmFwc2hvdC5kb2NzXG4gICAgICAgIC5tYXAoKGRvYykgPT4gKHtcbiAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgIC4uLmRvYy5kYXRhKCksXG4gICAgICAgIH0pKVxuICAgICAgICAuZmlsdGVyKChjYXJkKSA9PiBjYXJkLnJhdGluZ19zdGFycyA9PT0gXCI1XCIpO1xuICAgICAgc2V0Q2FyZHMoY2FyZHNMaXN0KTtcbiAgICB9O1xuXG4gICAgZ2V0Q2FyZHMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD17ZmFsc2V9IHN4PXt7IHBhZGRpbmc6IDUgfX0+XG4gICAgICA8R3JpZFxuICAgICAgICBjb250YWluZXJcbiAgICAgICAgc3BhY2luZz17eyB4czogMiwgbWQ6IDMgfX1cbiAgICAgICAgY29sdW1ucz17eyB4czogNCwgc206IDgsIG1kOiAxMiB9fVxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICB7Y2FyZHMubWFwKChjYXJkKSA9PiAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIGtleT17Y2FyZC5pZH1cbiAgICAgICAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogXCIjZmZmZGU3XCIsIG1heFdpZHRoOiAzNDUsIG1hcmdpbjogMC43IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgICBhbHQ9e2NhcmQubmFtZV9zaG9wfVxuICAgICAgICAgICAgICAgIHNyYz17Y2FyZC5pbWFnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAgICAgICAge2NhcmQubmFtZV9zaG9wfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICB7Y2FyZC5sb2NhdGlvbn1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8UmF0aW5nXG4gICAgICAgICAgICAgICAgdmFsdWU9e3BhcnNlRmxvYXQoY2FyZC5yYXRpbmdfc3RhcnMpfVxuICAgICAgICAgICAgICAgIHN4PXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvcHN0YXJzQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJkYiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNvbnRhaW5lciIsIkdyaWQiLCJSYXRpbmciLCJUeXBvZ3JhcGh5IiwiSW1hZ2UiLCJ0b3BzdGFyc0NhcmQiLCJjYXJkcyIsInNldENhcmRzIiwiZ2V0Q2FyZHMiLCJjYXJkc0NvbGxlY3Rpb24iLCJjYXJkc1NuYXBzaG90IiwiY2FyZHNMaXN0IiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwiZGF0YSIsImZpbHRlciIsImNhcmQiLCJyYXRpbmdfc3RhcnMiLCJtYXhXaWR0aCIsInN4IiwicGFkZGluZyIsImNvbnRhaW5lciIsInNwYWNpbmciLCJ4cyIsIm1kIiwiY29sdW1ucyIsInNtIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwiZGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJuYW1lX3Nob3AiLCJzcmMiLCJpbWFnZSIsImd1dHRlckJvdHRvbSIsInZhcmlhbnQiLCJjb21wb25lbnQiLCJjb2xvciIsImxvY2F0aW9uIiwidmFsdWUiLCJwYXJzZUZsb2F0IiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/topstarCard.js\n"));

/***/ })

});