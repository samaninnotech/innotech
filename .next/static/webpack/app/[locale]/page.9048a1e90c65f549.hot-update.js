"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/page",{

/***/ "(app-pages-browser)/./src/components/common/Navbar/Navbar.styled.ts":
/*!*******************************************************!*\
  !*** ./src/components/common/Navbar/Navbar.styled.ts ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainNavbarStyled: function() { return /* binding */ MainNavbarStyled; },\n/* harmony export */   NavbarInnerWrapper: function() { return /* binding */ NavbarInnerWrapper; },\n/* harmony export */   NavbarWrapper: function() { return /* binding */ NavbarWrapper; },\n/* harmony export */   SecondaryNavbarStyled: function() { return /* binding */ SecondaryNavbarStyled; }\n/* harmony export */ });\n/* harmony import */ var _themes_media_breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/themes/media-breakpoints */ \"(app-pages-browser)/./src/themes/media-breakpoints.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nconst NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Navbar.styled__NavbarWrapper\",\n    componentId: \"sc-bc08bb74-0\"\n})([\n    \"display:flex;justify-content:center;width:100%;\"\n]);\nconst NavbarInnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Navbar.styled__NavbarInnerWrapper\",\n    componentId: \"sc-bc08bb74-1\"\n})([\n    \"width:100%;display:flex;justify-content:space-between;align-items:center;\",\n    \"{max-width:720px;}\",\n    \"{max-width:940px;}\",\n    \"{max-width:1188px;}\"\n], _themes_media_breakpoints__WEBPACK_IMPORTED_MODULE_0__.mediaRules.sm, _themes_media_breakpoints__WEBPACK_IMPORTED_MODULE_0__.mediaRules.md, _themes_media_breakpoints__WEBPACK_IMPORTED_MODULE_0__.mediaRules.lg);\nconst MainNavbarStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header.withConfig({\n    displayName: \"Navbar.styled__MainNavbarStyled\",\n    componentId: \"sc-bc08bb74-2\"\n})([\n    \"position:fixed;top:60px;left:0;width:100%;background-color:transparent;color:white;transition:opacity 0.3s ease-in-out,top 0.3s ease-in-out;z-index:50;display:\",\n    \";justify-content:center;align-items:center;height:60px;\"\n], (param)=>{\n    let { isVisible } = param;\n    return isVisible ? \"flex\" : \"none\";\n});\nconst SecondaryNavbarStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header.withConfig({\n    displayName: \"Navbar.styled__SecondaryNavbarStyled\",\n    componentId: \"sc-bc08bb74-3\"\n})([\n    \"position:fixed;top:\",\n    \";left:0;width:100%;background-color:white;color:black;transition:top 0.5s ease-in-out;z-index:50;display:flex;justify-content:center;align-items:center;height:80px;\"\n], (param)=>{\n    let { isVisible } = param;\n    return isVisible ? \"0\" : \"-100px\";\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9OYXZiYXIvTmF2YmFyLnN0eWxlZC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0Q7QUFDakI7QUFFaEMsTUFBTUUsZ0JBQWdCRCx5REFBTUEsQ0FBQ0UsR0FBRzs7Ozs7R0FJckM7QUFFSyxNQUFNQyxxQkFBcUJILHlEQUFNQSxDQUFDRSxHQUFHOzs7Ozs7OztHQU14Q0gsaUVBQVVBLENBQUNLLEVBQUUsRUFJYkwsaUVBQVVBLENBQUNNLEVBQUUsRUFJYk4saUVBQVVBLENBQUNPLEVBQUUsRUFNZjtBQUVLLE1BQU1DLG1CQUFtQlAseURBQU1BLENBQUNRLE1BQU07Ozs7OztHQVNoQztRQUFDLEVBQUVDLFNBQVMsRUFBRTtXQUFNQSxZQUFZLFNBQVM7R0FJcEQ7QUFFSyxNQUFNQyx3QkFBd0JWLHlEQUFNQSxDQUFDUSxNQUFNOzs7Ozs7R0FFekM7UUFBQyxFQUFFQyxTQUFTLEVBQUU7V0FBTUEsWUFBWSxNQUFNO0dBVzdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9OYXZiYXIvTmF2YmFyLnN0eWxlZC50cz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lZGlhUnVsZXMgfSBmcm9tIFwiQC90aGVtZXMvbWVkaWEtYnJlYWtwb2ludHNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBOYXZiYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZiYXJJbm5lcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICR7bWVkaWFSdWxlcy5zbX0ge1xuICAgIG1heC13aWR0aDogNzIwcHg7XG4gIH1cblxuICAke21lZGlhUnVsZXMubWR9IHtcbiAgICBtYXgtd2lkdGg6IDk0MHB4O1xuICB9XG5cbiAgJHttZWRpYVJ1bGVzLmxnfSB7XG4gICAgbWF4LXdpZHRoOiAxMTg4cHg7XG4gIH1cblxuICAvKiBDZW50ZXJpbmcgdGhlIGlubmVyIGNvbnRlbnQgKi9cbiAgLy8gbWFyZ2luOiAwIGF1dG87XG5gO1xuXG5leHBvcnQgY29uc3QgTWFpbk5hdmJhclN0eWxlZCA9IHN0eWxlZC5oZWFkZXI8eyBpc1Zpc2libGU6IGJvb2xlYW4gfT5gXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0LCB0b3AgMC4zcyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogNTA7XG4gIGRpc3BsYXk6ICR7KHsgaXNWaXNpYmxlIH0pID0+IChpc1Zpc2libGUgPyAnZmxleCcgOiAnbm9uZScpfTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWNvbmRhcnlOYXZiYXJTdHlsZWQgPSBzdHlsZWQuaGVhZGVyPHsgaXNWaXNpYmxlOiBib29sZWFuIH0+YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogJHsoeyBpc1Zpc2libGUgfSkgPT4gKGlzVmlzaWJsZSA/ICcwJyA6ICctMTAwcHgnKX07IC8qIFNsaWRlIGRvd24gZWZmZWN0ICovXG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiB0b3AgMC41cyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogNTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG5gO1xuIl0sIm5hbWVzIjpbIm1lZGlhUnVsZXMiLCJzdHlsZWQiLCJOYXZiYXJXcmFwcGVyIiwiZGl2IiwiTmF2YmFySW5uZXJXcmFwcGVyIiwic20iLCJtZCIsImxnIiwiTWFpbk5hdmJhclN0eWxlZCIsImhlYWRlciIsImlzVmlzaWJsZSIsIlNlY29uZGFyeU5hdmJhclN0eWxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/common/Navbar/Navbar.styled.ts\n"));

/***/ })

});