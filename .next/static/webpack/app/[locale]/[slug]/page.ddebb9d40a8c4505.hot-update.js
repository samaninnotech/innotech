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

/***/ "(app-pages-browser)/./src/components/common/Navbar/Navbar.tsx":
/*!*************************************************!*\
  !*** ./src/components/common/Navbar/Navbar.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar_Links_Navbar_Links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar-Links/Navbar-Links */ \"(app-pages-browser)/./src/components/common/Navbar/Navbar-Links/Navbar-Links.tsx\");\n/* harmony import */ var _Navbar_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.styled */ \"(app-pages-browser)/./src/components/common/Navbar/Navbar.styled.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Navbar = (param)=>{\n    let { slugMapping } = param;\n    _s();\n    const [showSecondaryNavbar, setShowSecondaryNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hideMainNavbar, setHideMainNavbar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollY = window.scrollY;\n            // Hide the main navbar after scrolling 50px\n            setHideMainNavbar(scrollY > 50);\n            // Show the secondary navbar after scrolling 200px\n            setShowSecondaryNavbar(scrollY > 200);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_styled__WEBPACK_IMPORTED_MODULE_3__.MainNavbarStyled, {\n                isVisible: !hideMainNavbar,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_styled__WEBPACK_IMPORTED_MODULE_3__.NavbarWrapper, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_styled__WEBPACK_IMPORTED_MODULE_3__.NavbarInnerWrapper, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_Links_Navbar_Links__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            slugMapping: slugMapping,\n                            logoSrc: \"/site-logo.png\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\innotech-frontend\\\\src\\\\components\\\\common\\\\Navbar\\\\Navbar.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\innotech-frontend\\\\src\\\\components\\\\common\\\\Navbar\\\\Navbar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\coding\\\\innotech-frontend\\\\src\\\\components\\\\common\\\\Navbar\\\\Navbar.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\innotech-frontend\\\\src\\\\components\\\\common\\\\Navbar\\\\Navbar.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_styled__WEBPACK_IMPORTED_MODULE_3__.SecondaryNavbarStyled, {\n                isVisible: showSecondaryNavbar,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_styled__WEBPACK_IMPORTED_MODULE_3__.NavbarWrapper, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_styled__WEBPACK_IMPORTED_MODULE_3__.NavbarInnerWrapper, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_Links_Navbar_Links__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            slugMapping: slugMapping,\n                            logoSrc: \"/site-logo-blue.png\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\coding\\\\innotech-frontend\\\\src\\\\components\\\\common\\\\Navbar\\\\Navbar.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\coding\\\\innotech-frontend\\\\src\\\\components\\\\common\\\\Navbar\\\\Navbar.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\coding\\\\innotech-frontend\\\\src\\\\components\\\\common\\\\Navbar\\\\Navbar.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\coding\\\\innotech-frontend\\\\src\\\\components\\\\common\\\\Navbar\\\\Navbar.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Navbar, \"Mnv7BaHWH/shoBhHTJxvqmRgOO0=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9OYXZiYXIvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVnRDtBQUNNO0FBQ3VEO0FBSzdHLE1BQU1PLFNBQTBCO1FBQUMsRUFBRUMsV0FBVyxFQUFFOztJQUM5QyxNQUFNLENBQUNDLHFCQUFxQkMsdUJBQXVCLEdBQUdULCtDQUFRQSxDQUFDO0lBQy9ELE1BQU0sQ0FBQ1UsZ0JBQWdCQyxrQkFBa0IsR0FBR1gsK0NBQVFBLENBQUM7SUFFckRELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsZUFBZTtZQUNuQixNQUFNQyxVQUFVQyxPQUFPRCxPQUFPO1lBRTlCLDRDQUE0QztZQUM1Q0Ysa0JBQWtCRSxVQUFVO1lBRTVCLGtEQUFrRDtZQUNsREosdUJBQXVCSSxVQUFVO1FBQ25DO1FBRUFDLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU8sSUFBTUUsT0FBT0UsbUJBQW1CLENBQUMsVUFBVUo7SUFDcEQsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUVFLDhEQUFDViw0REFBZ0JBO2dCQUFDZSxXQUFXLENBQUNQOzBCQUM1Qiw0RUFBQ04seURBQWFBOzhCQUNaLDRFQUFDRCw4REFBa0JBO2tDQUNqQiw0RUFBQ0Ysa0VBQVdBOzRCQUFDTSxhQUFhQTs0QkFBYVcsU0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1yRCw4REFBQ2IsaUVBQXFCQTtnQkFBQ1ksV0FBV1Q7MEJBQ2hDLDRFQUFDSix5REFBYUE7OEJBQ1osNEVBQUNELDhEQUFrQkE7a0NBQ2pCLDRFQUFDRixrRUFBV0E7NEJBQUNNLGFBQWFBOzRCQUFhVyxTQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0zRDtHQXhDTVo7S0FBQUE7QUEwQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL05hdmJhci9OYXZiYXIudHN4P2FhODEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2YmFyTGlua3MgZnJvbSBcIi4vTmF2YmFyLUxpbmtzL05hdmJhci1MaW5rc1wiO1xuaW1wb3J0IHsgTWFpbk5hdmJhclN0eWxlZCwgTmF2YmFySW5uZXJXcmFwcGVyLCBOYXZiYXJXcmFwcGVyLCBTZWNvbmRhcnlOYXZiYXJTdHlsZWQgfSBmcm9tIFwiLi9OYXZiYXIuc3R5bGVkXCI7XG5pbXBvcnQgeyBTbHVnTWFwcGluZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIE5hdmJhclByb3BzID0geyBzbHVnTWFwcGluZzogU2x1Z01hcHBpbmcgfTtcblxuY29uc3QgTmF2YmFyOiBGQzxOYXZiYXJQcm9wcz4gPSAoeyBzbHVnTWFwcGluZyB9KSA9PiB7XG4gIGNvbnN0IFtzaG93U2Vjb25kYXJ5TmF2YmFyLCBzZXRTaG93U2Vjb25kYXJ5TmF2YmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hpZGVNYWluTmF2YmFyLCBzZXRIaWRlTWFpbk5hdmJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICAgIC8vIEhpZGUgdGhlIG1haW4gbmF2YmFyIGFmdGVyIHNjcm9sbGluZyA1MHB4XG4gICAgICBzZXRIaWRlTWFpbk5hdmJhcihzY3JvbGxZID4gNTApO1xuXG4gICAgICAvLyBTaG93IHRoZSBzZWNvbmRhcnkgbmF2YmFyIGFmdGVyIHNjcm9sbGluZyAyMDBweFxuICAgICAgc2V0U2hvd1NlY29uZGFyeU5hdmJhcihzY3JvbGxZID4gMjAwKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBNYWluIFRyYW5zcGFyZW50IE5hdmJhciAqL31cbiAgICAgIDxNYWluTmF2YmFyU3R5bGVkIGlzVmlzaWJsZT17IWhpZGVNYWluTmF2YmFyfT5cbiAgICAgICAgPE5hdmJhcldyYXBwZXI+XG4gICAgICAgICAgPE5hdmJhcklubmVyV3JhcHBlcj5cbiAgICAgICAgICAgIDxOYXZiYXJMaW5rcyBzbHVnTWFwcGluZz17c2x1Z01hcHBpbmd9IGxvZ29TcmM9XCIvc2l0ZS1sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgPC9OYXZiYXJJbm5lcldyYXBwZXI+XG4gICAgICAgIDwvTmF2YmFyV3JhcHBlcj5cbiAgICAgIDwvTWFpbk5hdmJhclN0eWxlZD5cblxuICAgICAgey8qIFNlY29uZGFyeSBXaGl0ZSBOYXZiYXIgKi99XG4gICAgICA8U2Vjb25kYXJ5TmF2YmFyU3R5bGVkIGlzVmlzaWJsZT17c2hvd1NlY29uZGFyeU5hdmJhcn0+XG4gICAgICAgIDxOYXZiYXJXcmFwcGVyPlxuICAgICAgICAgIDxOYXZiYXJJbm5lcldyYXBwZXI+XG4gICAgICAgICAgICA8TmF2YmFyTGlua3Mgc2x1Z01hcHBpbmc9e3NsdWdNYXBwaW5nfSBsb2dvU3JjPVwiL3NpdGUtbG9nby1ibHVlLnBuZ1wiIC8+XG4gICAgICAgICAgPC9OYXZiYXJJbm5lcldyYXBwZXI+XG4gICAgICAgIDwvTmF2YmFyV3JhcHBlcj5cbiAgICAgIDwvU2Vjb25kYXJ5TmF2YmFyU3R5bGVkPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2YmFyTGlua3MiLCJNYWluTmF2YmFyU3R5bGVkIiwiTmF2YmFySW5uZXJXcmFwcGVyIiwiTmF2YmFyV3JhcHBlciIsIlNlY29uZGFyeU5hdmJhclN0eWxlZCIsIk5hdmJhciIsInNsdWdNYXBwaW5nIiwic2hvd1NlY29uZGFyeU5hdmJhciIsInNldFNob3dTZWNvbmRhcnlOYXZiYXIiLCJoaWRlTWFpbk5hdmJhciIsInNldEhpZGVNYWluTmF2YmFyIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsWSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNWaXNpYmxlIiwibG9nb1NyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/common/Navbar/Navbar.tsx\n"));

/***/ })

});