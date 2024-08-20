"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[locale]/[slug]/page",{

/***/ "(app-pages-browser)/./src/components/common/Navbar/Navbar.styled.ts":
/*!*******************************************************!*\
  !*** ./src/components/common/Navbar/Navbar.styled.ts ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MainNavbarStyled: function() { return /* binding */ MainNavbarStyled; },\n/* harmony export */   NavbarWrapper: function() { return /* binding */ NavbarWrapper; },\n/* harmony export */   SecondaryNavbarStyled: function() { return /* binding */ SecondaryNavbarStyled; }\n/* harmony export */ });\n/* harmony import */ var _themes_media_breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/themes/media-breakpoints */ \"(app-pages-browser)/./src/themes/media-breakpoints.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nconst NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"Navbar.styled__NavbarWrapper\",\n    componentId: \"sc-e73d7246-0\"\n})([\n    \"display:flex;justify-content:space-between;\"\n]);\nconst MainNavbarStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header.withConfig({\n    displayName: \"Navbar.styled__MainNavbarStyled\",\n    componentId: \"sc-e73d7246-1\"\n})([\n    \"position:fixed;top:60px;width:100%;background-color:transparent;color:white;transition:opacity 0.3s ease-in-out,top 0.3s ease-in-out;z-index:50;display:\",\n    \";justify-content:center;align-items:center;height:60px;\",\n    \"{max-width:720px;}\",\n    \"{max-width:940px;}\",\n    \"{max-width:1400px;}\"\n], (param)=>{\n    let { isVisible } = param;\n    return isVisible ? \"flex\" : \"none\";\n}, _themes_media_breakpoints__WEBPACK_IMPORTED_MODULE_0__.mediaRules.sm, _themes_media_breakpoints__WEBPACK_IMPORTED_MODULE_0__.mediaRules.md, _themes_media_breakpoints__WEBPACK_IMPORTED_MODULE_0__.mediaRules.lg);\nconst SecondaryNavbarStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header.withConfig({\n    displayName: \"Navbar.styled__SecondaryNavbarStyled\",\n    componentId: \"sc-e73d7246-2\"\n})([\n    \"position:fixed;top:\",\n    \";left:0;width:100%;background-color:white;color:black;transition:top 0.5s ease-in-out;z-index:50;display:flex;justify-content:center;align-items:center;height:80px;\",\n    \"{max-width:720px;}\",\n    \"{max-width:940px;}\",\n    \"{max-width:1400px;}\"\n], (param)=>{\n    let { isVisible } = param;\n    return isVisible ? \"0\" : \"-100px\";\n}, _themes_media_breakpoints__WEBPACK_IMPORTED_MODULE_0__.mediaRules.sm, _themes_media_breakpoints__WEBPACK_IMPORTED_MODULE_0__.mediaRules.md, _themes_media_breakpoints__WEBPACK_IMPORTED_MODULE_0__.mediaRules.lg);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9OYXZiYXIvTmF2YmFyLnN0eWxlZC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUNqQjtBQUVoQyxNQUFNRSxnQkFBZ0JELHlEQUFNQSxDQUFDRSxHQUFHOzs7OztHQUdyQztBQUVLLE1BQU1DLG1CQUFtQkgseURBQU1BLENBQUNJLE1BQU07Ozs7Ozs7OztHQVNoQztRQUFDLEVBQUVDLFNBQVMsRUFBRTtXQUFNQSxZQUFZLFNBQVM7R0FLbEROLGlFQUFVQSxDQUFDTyxFQUFFLEVBR2JQLGlFQUFVQSxDQUFDUSxFQUFFLEVBR2JSLGlFQUFVQSxDQUFDUyxFQUFFLEVBR2Y7QUFFSyxNQUFNQyx3QkFBd0JULHlEQUFNQSxDQUFDSSxNQUFNOzs7Ozs7Ozs7R0FFekM7UUFBQyxFQUFFQyxTQUFTLEVBQUU7V0FBTUEsWUFBWSxNQUFNO0dBWTNDTixpRUFBVUEsQ0FBQ08sRUFBRSxFQUdiUCxpRUFBVUEsQ0FBQ1EsRUFBRSxFQUdiUixpRUFBVUEsQ0FBQ1MsRUFBRSxFQUdmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9OYXZiYXIvTmF2YmFyLnN0eWxlZC50cz8xYmI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lZGlhUnVsZXMgfSBmcm9tIFwiQC90aGVtZXMvbWVkaWEtYnJlYWtwb2ludHNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBOYXZiYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1haW5OYXZiYXJTdHlsZWQgPSBzdHlsZWQuaGVhZGVyPHsgaXNWaXNpYmxlOiBib29sZWFuIH0+YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDtcbiAgLy8gbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dCwgdG9wIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDUwO1xuICBkaXNwbGF5OiAkeyh7IGlzVmlzaWJsZSB9KSA9PiAoaXNWaXNpYmxlID8gJ2ZsZXgnIDogJ25vbmUnKX07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG5cbiAgJHttZWRpYVJ1bGVzLnNtfSB7XG4gICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgfVxuICAke21lZGlhUnVsZXMubWR9IHtcbiAgICBtYXgtd2lkdGg6IDk0MHB4O1xuICB9XG4gICR7bWVkaWFSdWxlcy5sZ30ge1xuICAgIG1heC13aWR0aDogMTQwMHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5TmF2YmFyU3R5bGVkID0gc3R5bGVkLmhlYWRlcjx7IGlzVmlzaWJsZTogYm9vbGVhbiB9PmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6ICR7KHsgaXNWaXNpYmxlIH0pID0+IChpc1Zpc2libGUgPyAnMCcgOiAnLTEwMHB4Jyl9OyAvKiBTbGlkZSBkb3duIGVmZmVjdCAqL1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogdG9wIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDUwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuXG4gICR7bWVkaWFSdWxlcy5zbX0ge1xuICAgIG1heC13aWR0aDogNzIwcHg7XG4gIH1cbiAgJHttZWRpYVJ1bGVzLm1kfSB7XG4gICAgbWF4LXdpZHRoOiA5NDBweDtcbiAgfVxuICAke21lZGlhUnVsZXMubGd9IHtcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJtZWRpYVJ1bGVzIiwic3R5bGVkIiwiTmF2YmFyV3JhcHBlciIsImRpdiIsIk1haW5OYXZiYXJTdHlsZWQiLCJoZWFkZXIiLCJpc1Zpc2libGUiLCJzbSIsIm1kIiwibGciLCJTZWNvbmRhcnlOYXZiYXJTdHlsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/common/Navbar/Navbar.styled.ts\n"));

/***/ })

});