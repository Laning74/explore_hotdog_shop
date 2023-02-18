"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_Map_map_js",{

/***/ "./components/Map/map.js":
/*!*******************************!*\
  !*** ./components/Map/map.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.js\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Map() {\n    var _shops_, _shops_1;\n    _s();\n    const [shops, setShops] = useState([]);\n    useEffect(()=>{\n        const getShops = async ()=>{\n            const shopsCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"hotdogShop\");\n            const shopsSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(shopsCollection);\n            const shopsList = shopsSnapshot.docs.map((doc)=>({\n                    id: doc.id,\n                    ...doc.data()\n                }));\n            setShops(shopsList);\n        };\n        getShops();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.MapContainer, {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().map),\n        center: [\n            ((_shops_ = shops[0]) === null || _shops_ === void 0 ? void 0 : _shops_.latitude) || 0,\n            ((_shops_1 = shops[0]) === null || _shops_1 === void 0 ? void 0 : _shops_1.longitude) || 0\n        ],\n        zoom: 14,\n        scrollWheelZoom: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {\n                attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n            }, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/Map/map.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            shops.map((shop)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Marker, {\n                    position: [\n                        shop.latitude,\n                        shop.longitude\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.Popup, {\n                        children: [\n                            shop.name_shop,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/Map/map.js\",\n                                lineNumber: 41,\n                                columnNumber: 30\n                            }, this),\n                            \" \",\n                            shop.location\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/Map/map.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                }, shop.id, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/Map/map.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/Map/map.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Map, \"AGMboizx9feJkEUMFKJSK0/MHWk=\");\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC9tYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNTO0FBQzJDO0FBQ3BDO0FBQ087QUFDckI7QUFFbUM7QUFFeEQsU0FBU1EsTUFBTTtRQW9CZkMsU0FBeUJBOztJQW5CdEMsTUFBTSxDQUFDQSxPQUFPQyxTQUFTLEdBQUdDLFNBQVMsRUFBRTtJQUVyQ0MsVUFBVSxJQUFNO1FBQ2QsTUFBTUMsV0FBVyxVQUFZO1lBQzNCLE1BQU1DLGtCQUFrQmIsOERBQVVBLENBQUNFLHlDQUFFQSxFQUFFO1lBQ3ZDLE1BQU1ZLGdCQUFnQixNQUFNYiwyREFBT0EsQ0FBQ1k7WUFDcEMsTUFBTUUsWUFBWUQsY0FBY0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBUztvQkFDakRDLElBQUlELElBQUlDLEVBQUU7b0JBQ1YsR0FBR0QsSUFBSUUsSUFBSSxFQUFFO2dCQUNmO1lBQ0FYLFNBQVNNO1FBQ1g7UUFFQUg7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1QsdURBQVlBO1FBQ1hrQixXQUFXdEIsb0VBQVU7UUFDckJ1QixRQUFRO1lBQUNkLENBQUFBLENBQUFBLFVBQUFBLEtBQUssQ0FBQyxFQUFFLGNBQVJBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFVZSxRQUFRLEtBQUk7WUFBR2YsQ0FBQUEsQ0FBQUEsV0FBQUEsS0FBSyxDQUFDLEVBQUUsY0FBUkEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVnQixTQUFTLEtBQUk7U0FBRTtRQUMzREMsTUFBTTtRQUNOQyxpQkFBaUIsSUFBSTs7MEJBRXJCLDhEQUFDdEIsb0RBQVNBO2dCQUNSdUIsYUFBWTtnQkFDWkMsS0FBSTs7Ozs7O1lBRUxwQixNQUFNUyxHQUFHLENBQUMsQ0FBQ1kscUJBQ1YsOERBQUN4QixpREFBTUE7b0JBQUN5QixVQUFVO3dCQUFDRCxLQUFLTixRQUFRO3dCQUFFTSxLQUFLTCxTQUFTO3FCQUFDOzhCQUMvQyw0RUFBQ2xCLGdEQUFLQTs7NEJBQ0h1QixLQUFLRSxTQUFTOzRCQUFDOzBDQUFDLDhEQUFDQzs7Ozs7NEJBQUs7NEJBQUVILEtBQUtJLFFBQVE7Ozs7Ozs7bUJBRmNKLEtBQUtWLEVBQUU7Ozs7Ozs7Ozs7O0FBUXZFLENBQUM7R0FyQ3VCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcC9tYXAuanM/MzA2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3NcIjtcbmltcG9ydCBcImxlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eVwiO1xuaW1wb3J0IFwibGVhZmxldC1kZWZhdWx0aWNvbi1jb21wYXRpYmlsaXR5L2Rpc3QvbGVhZmxldC1kZWZhdWx0aWNvbi1jb21wYXRpYmlsaXR5LmNzc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZ2V0RG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlXCI7XG5cbmltcG9ydCB7IE1hcENvbnRhaW5lciwgVGlsZUxheWVyLCBNYXJrZXIsIFBvcHVwIH0gZnJvbSBcInJlYWN0LWxlYWZsZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwKCkge1xuICBjb25zdCBbc2hvcHMsIHNldFNob3BzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFNob3BzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qgc2hvcHNDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgXCJob3Rkb2dTaG9wXCIpO1xuICAgICAgY29uc3Qgc2hvcHNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3Moc2hvcHNDb2xsZWN0aW9uKTtcbiAgICAgIGNvbnN0IHNob3BzTGlzdCA9IHNob3BzU25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcbiAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcbiAgICAgIH0pKTtcbiAgICAgIHNldFNob3BzKHNob3BzTGlzdCk7XG4gICAgfTtcblxuICAgIGdldFNob3BzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxNYXBDb250YWluZXJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hcH1cbiAgICAgIGNlbnRlcj17W3Nob3BzWzBdPy5sYXRpdHVkZSB8fCAwLCBzaG9wc1swXT8ubG9uZ2l0dWRlIHx8IDBdfVxuICAgICAgem9vbT17MTR9XG4gICAgICBzY3JvbGxXaGVlbFpvb209e3RydWV9XG4gICAgPlxuICAgICAgPFRpbGVMYXllclxuICAgICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgIC8+XG4gICAgICB7c2hvcHMubWFwKChzaG9wKSA9PiAoXG4gICAgICAgIDxNYXJrZXIgcG9zaXRpb249e1tzaG9wLmxhdGl0dWRlLCBzaG9wLmxvbmdpdHVkZV19IGtleT17c2hvcC5pZH0+XG4gICAgICAgICAgPFBvcHVwPlxuICAgICAgICAgICAge3Nob3AubmFtZV9zaG9wfSA8YnIgLz4ge3Nob3AubG9jYXRpb259XG4gICAgICAgICAgPC9Qb3B1cD5cbiAgICAgICAgPC9NYXJrZXI+XG4gICAgICApKX1cbiAgICA8L01hcENvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsImRiIiwiTWFwQ29udGFpbmVyIiwiVGlsZUxheWVyIiwiTWFya2VyIiwiUG9wdXAiLCJNYXAiLCJzaG9wcyIsInNldFNob3BzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRTaG9wcyIsInNob3BzQ29sbGVjdGlvbiIsInNob3BzU25hcHNob3QiLCJzaG9wc0xpc3QiLCJkb2NzIiwibWFwIiwiZG9jIiwiaWQiLCJkYXRhIiwiY2xhc3NOYW1lIiwiY2VudGVyIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ6b29tIiwic2Nyb2xsV2hlZWxab29tIiwiYXR0cmlidXRpb24iLCJ1cmwiLCJzaG9wIiwicG9zaXRpb24iLCJuYW1lX3Nob3AiLCJiciIsImxvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Map/map.js\n"));

/***/ })

});