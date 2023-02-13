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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-defaulticon-compatibility */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.js\");\n/* harmony import */ var leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ \"./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css\");\n/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/data.json */ \"./data/data.json\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/lib/index.js\");\n\n\n\n\n\n\n\n\n\nlet lat = latitude || 0;\nlet lng = longitude || 0;\nlet latLng = new (leaflet__WEBPACK_IMPORTED_MODULE_6___default().LatLng)(lat, lng);\nfunction Map(param) {\n    let { data  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.MapContainer, {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().map),\n        center: [\n            _data_data_json__WEBPACK_IMPORTED_MODULE_5__.hotdog_shops[0].latitude,\n            _data_data_json__WEBPACK_IMPORTED_MODULE_5__.hotdog_shops[0].longitude\n        ],\n        zoom: 14,\n        scrollWheelZoom: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.TileLayer, {\n                attribution: '\\xa9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n                url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n            }, void 0, false, {\n                fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/Map/map.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            _data_data_json__WEBPACK_IMPORTED_MODULE_5__.hotdog_shops.map((shop)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Marker, {\n                    position: [\n                        shop.latitude,\n                        shop.longitude\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Popup, {\n                        children: shop.name_shop\n                    }, void 0, false, {\n                        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/Map/map.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, shop.id, false, {\n                    fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/Map/map.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ingvildlangeland/Gokstad/explore_hotdog_shop/components/Map/map.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC9tYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1A7QUFDUztBQUMyQztBQUNwQztBQUNIO0FBQ3ZCO0FBRStDO0FBRXZFLElBQUlTLE1BQU1DLFlBQVk7QUFDdEIsSUFBSUMsTUFBTUMsYUFBYTtBQUN2QixJQUFJQyxTQUFTLElBQUlULHVEQUFRLENBQUNLLEtBQUtFO0FBRWhCLFNBQVNJLElBQUksS0FBUSxFQUFFO1FBQVYsRUFBRUMsS0FBSSxFQUFFLEdBQVI7SUFDMUIscUJBQ0UsOERBQUNYLHVEQUFZQTtRQUNYWSxXQUFXZixvRUFBVTtRQUNyQmlCLFFBQVE7WUFDTmhCLHFFQUFvQztZQUNwQ0Esc0VBQXFDO1NBQ3RDO1FBQ0RrQixNQUFNO1FBQ05DLGlCQUFpQixJQUFJOzswQkFFckIsOERBQUNoQixvREFBU0E7Z0JBQ1JpQixhQUFZO2dCQUNaQyxLQUFJOzs7Ozs7WUFFTHJCLDZEQUE0QixDQUFDLENBQUNzQixxQkFDN0IsOERBQUNsQixpREFBTUE7b0JBQUNtQixVQUFVO3dCQUFDRCxLQUFLZixRQUFRO3dCQUFFZSxLQUFLYixTQUFTO3FCQUFDOzhCQUMvQyw0RUFBQ0osZ0RBQUtBO2tDQUFFaUIsS0FBS0UsU0FBUzs7Ozs7O21CQURnQ0YsS0FBS0csRUFBRTs7Ozs7Ozs7Ozs7QUFNdkUsQ0FBQztLQXRCdUJiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwL21hcC5qcz8zMDZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcImxlYWZsZXQvZGlzdC9sZWFmbGV0LmNzc1wiO1xuaW1wb3J0IFwibGVhZmxldC1kZWZhdWx0aWNvbi1jb21wYXRpYmlsaXR5XCI7XG5pbXBvcnQgXCJsZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkvZGlzdC9sZWFmbGV0LWRlZmF1bHRpY29uLWNvbXBhdGliaWxpdHkuY3NzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgaG90ZG9nU2hvcHMgZnJvbSBcIi4uLy4uL2RhdGEvZGF0YS5qc29uXCI7XG5pbXBvcnQgTCBmcm9tIFwibGVhZmxldFwiO1xuXG5pbXBvcnQgeyBNYXBDb250YWluZXIsIFRpbGVMYXllciwgTWFya2VyLCBQb3B1cCB9IGZyb20gXCJyZWFjdC1sZWFmbGV0XCI7XG5cbmxldCBsYXQgPSBsYXRpdHVkZSB8fCAwO1xubGV0IGxuZyA9IGxvbmdpdHVkZSB8fCAwO1xubGV0IGxhdExuZyA9IG5ldyBMLkxhdExuZyhsYXQsIGxuZyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCh7IGRhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDxNYXBDb250YWluZXJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hcH1cbiAgICAgIGNlbnRlcj17W1xuICAgICAgICBob3Rkb2dTaG9wcy5ob3Rkb2dfc2hvcHNbMF0ubGF0aXR1ZGUsXG4gICAgICAgIGhvdGRvZ1Nob3BzLmhvdGRvZ19zaG9wc1swXS5sb25naXR1ZGUsXG4gICAgICBdfVxuICAgICAgem9vbT17MTR9XG4gICAgICBzY3JvbGxXaGVlbFpvb209e3RydWV9XG4gICAgPlxuICAgICAgPFRpbGVMYXllclxuICAgICAgICBhdHRyaWJ1dGlvbj0nJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMnXG4gICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgIC8+XG4gICAgICB7aG90ZG9nU2hvcHMuaG90ZG9nX3Nob3BzLm1hcCgoc2hvcCkgPT4gKFxuICAgICAgICA8TWFya2VyIHBvc2l0aW9uPXtbc2hvcC5sYXRpdHVkZSwgc2hvcC5sb25naXR1ZGVdfSBrZXk9e3Nob3AuaWR9PlxuICAgICAgICAgIDxQb3B1cD57c2hvcC5uYW1lX3Nob3B9PC9Qb3B1cD5cbiAgICAgICAgPC9NYXJrZXI+XG4gICAgICApKX1cbiAgICA8L01hcENvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInN0eWxlcyIsImhvdGRvZ1Nob3BzIiwiTCIsIk1hcENvbnRhaW5lciIsIlRpbGVMYXllciIsIk1hcmtlciIsIlBvcHVwIiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJsYXRMbmciLCJMYXRMbmciLCJNYXAiLCJkYXRhIiwiY2xhc3NOYW1lIiwibWFwIiwiY2VudGVyIiwiaG90ZG9nX3Nob3BzIiwiem9vbSIsInNjcm9sbFdoZWVsWm9vbSIsImF0dHJpYnV0aW9uIiwidXJsIiwic2hvcCIsInBvc2l0aW9uIiwibmFtZV9zaG9wIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Map/map.js\n"));

/***/ })

});