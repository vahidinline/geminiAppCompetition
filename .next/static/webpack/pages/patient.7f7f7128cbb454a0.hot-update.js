"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/patient",{

/***/ "./pagesComponents/pages/profile/components/Header/index.js":
/*!******************************************************************!*\
  !*** ./pagesComponents/pages/profile/components/Header/index.js ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _components_MDBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/MDBox */ \"./components/MDBox/index.js\");\n/* harmony import */ var _components_MDTypography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/MDTypography */ \"./components/MDTypography/index.js\");\n/* harmony import */ var _components_MDAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/MDAvatar */ \"./components/MDAvatar/index.js\");\n/* harmony import */ var _assets_theme_base_breakpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/theme/base/breakpoints */ \"./assets/theme/base/breakpoints.js\");\n/* harmony import */ var _assets_images_bruce_mars_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/images/bruce-mars.jpg */ \"./assets/images/bruce-mars.jpg\");\n/* harmony import */ var _assets_images_bg_profile_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/images/bg-profile.jpeg */ \"./assets/images/bg-profile.jpeg\");\n/**\n=========================================================\n* NextJS Material Dashboard 2 PRO - v2.2.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro\n* Copyright 2023 Creative Tim (https://www.creative-tim.com)\n\nCoded by www.creative-tim.com\n\n =========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n*/ \nvar _s = $RefreshSig$();\n\n// prop-types is a library for typechecking of props.\n\n// @mui material components\n\n\n\n\n\n\n// NextJS Material Dashboard 2 PRO components\n\n\n\n// NextJS Material Dashboard 2 PRO base styles\n\n// Images\n\n\nfunction Header(param) {\n    let { children, name, limitations } = param;\n    _s();\n    const [tabsOrientation, setTabsOrientation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"horizontal\");\n    const [tabValue, setTabValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // A function that sets the orientation state of the tabs.\n        function handleTabsOrientation() {\n            return window.innerWidth < _assets_theme_base_breakpoints__WEBPACK_IMPORTED_MODULE_5__[\"default\"].values.sm ? setTabsOrientation(\"vertical\") : setTabsOrientation(\"horizontal\");\n        }\n        /**\n     The event listener that's calling the handleTabsOrientation function when resizing the window.\n    */ window.addEventListener(\"resize\", handleTabsOrientation);\n        // Call the handleTabsOrientation function to set the state with the initial value.\n        handleTabsOrientation();\n        // Remove event listener on cleanup\n        return ()=>window.removeEventListener(\"resize\", handleTabsOrientation);\n    }, [\n        tabsOrientation\n    ]);\n    const handleSetTabValue = (event, newValue)=>setTabValue(newValue);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        position: \"relative\",\n        mb: 5,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            sx: {\n                position: \"relative\",\n                mt: -8,\n                mx: 3,\n                py: 2,\n                px: 2\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    container: true,\n                    spacing: 3,\n                    alignItems: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        item: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            height: \"100%\",\n                            mt: 0.5,\n                            lineHeight: 1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDTypography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    variant: \"h5\",\n                                    fontWeight: \"medium\",\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"/Users/vahidafshari/geminiAppCompetition/pagesComponents/pages/profile/components/Header/index.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDTypography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    variant: \"button\",\n                                    color: \"text\",\n                                    fontWeight: \"regular\",\n                                    children: [\n                                        \"Limitation: \",\n                                        limitations\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vahidafshari/geminiAppCompetition/pagesComponents/pages/profile/components/Header/index.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vahidafshari/geminiAppCompetition/pagesComponents/pages/profile/components/Header/index.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vahidafshari/geminiAppCompetition/pagesComponents/pages/profile/components/Header/index.js\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/vahidafshari/geminiAppCompetition/pagesComponents/pages/profile/components/Header/index.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vahidafshari/geminiAppCompetition/pagesComponents/pages/profile/components/Header/index.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vahidafshari/geminiAppCompetition/pagesComponents/pages/profile/components/Header/index.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"brKRezq+ARsWtuNNIEHQ7ytvdp4=\");\n_c = Header;\n// Setting default props for the Header\nHeader.defaultProps = {\n    children: \"\"\n};\n// Typechecking props for the Header\nHeader.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().node)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlc0NvbXBvbmVudHMvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQWFBOztBQUU0QztBQUU1QyxxREFBcUQ7QUFDbEI7QUFFbkMsMkJBQTJCO0FBQ1c7QUFDQTtBQUNJO0FBQ0o7QUFDRjtBQUNFO0FBRXRDLDZDQUE2QztBQUNQO0FBQ2M7QUFDUjtBQUU1Qyw4Q0FBOEM7QUFDVztBQUV6RCxTQUFTO0FBQzZDO0FBQ087QUFFN0QsU0FBU2UsT0FBTyxLQUErQjtRQUEvQixFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFLEdBQS9COztJQUNkLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ3FCLFVBQVVDLFlBQVksR0FBR3RCLCtDQUFRQSxDQUFDO0lBRXpDQyxnREFBU0EsQ0FBQztRQUNSLDBEQUEwRDtRQUMxRCxTQUFTc0I7WUFDUCxPQUFPQyxPQUFPQyxVQUFVLEdBQUdiLDZFQUFrQixDQUFDZSxFQUFFLEdBQzVDUCxtQkFBbUIsY0FDbkJBLG1CQUFtQjtRQUN6QjtRQUVBOztJQUVBLEdBQ0FJLE9BQU9JLGdCQUFnQixDQUFDLFVBQVVMO1FBRWxDLG1GQUFtRjtRQUNuRkE7UUFFQSxtQ0FBbUM7UUFDbkMsT0FBTyxJQUFNQyxPQUFPSyxtQkFBbUIsQ0FBQyxVQUFVTjtJQUNwRCxHQUFHO1FBQUNKO0tBQWdCO0lBRXBCLE1BQU1XLG9CQUFvQixDQUFDQyxPQUFPQyxXQUFhVixZQUFZVTtJQUUzRCxxQkFDRSw4REFBQ3ZCLHlEQUFLQTtRQUFDd0IsVUFBUztRQUFXQyxJQUFJO2tCQUM3Qiw0RUFBQy9CLDBEQUFJQTtZQUNIZ0MsSUFBSTtnQkFDRkYsVUFBVTtnQkFDVkcsSUFBSSxDQUFDO2dCQUNMQyxJQUFJO2dCQUNKQyxJQUFJO2dCQUNKQyxJQUFJO1lBQ047OzhCQUNBLDhEQUFDbkMsMERBQUlBO29CQUFDb0MsU0FBUztvQkFBQ0MsU0FBUztvQkFBR0MsWUFBVzs4QkFTckMsNEVBQUN0QywwREFBSUE7d0JBQUN1QyxJQUFJO2tDQUNSLDRFQUFDbEMseURBQUtBOzRCQUFDbUMsUUFBTzs0QkFBT1IsSUFBSTs0QkFBS1MsWUFBWTs7OENBQ3hDLDhEQUFDbkMsZ0VBQVlBO29DQUFDb0MsU0FBUTtvQ0FBS0MsWUFBVzs4Q0FDbkM5Qjs7Ozs7OzhDQUVILDhEQUFDUCxnRUFBWUE7b0NBQUNvQyxTQUFRO29DQUFTRSxPQUFNO29DQUFPRCxZQUFXOzt3Q0FBVTt3Q0FDbEQ3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBc0NwQkY7Ozs7Ozs7Ozs7OztBQUlUO0dBN0ZTRDtLQUFBQTtBQStGVCx1Q0FBdUM7QUFDdkNBLE9BQU9rQyxZQUFZLEdBQUc7SUFDcEJqQyxVQUFVO0FBQ1o7QUFFQSxvQ0FBb0M7QUFDcENELE9BQU9tQyxTQUFTLEdBQUc7SUFDakJsQyxVQUFVZCx5REFBYztBQUMxQjtBQUVBLCtEQUFlYSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzQ29tcG9uZW50cy9wYWdlcy9wcm9maWxlL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzP2VlOGQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCAyIFBSTyAtIHYyLjIuMFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC1wcm9cbiogQ29weXJpZ2h0IDIwMjMgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxuXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxuXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qL1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBwcm9wLXR5cGVzIGlzIGEgbGlicmFyeSBmb3IgdHlwZWNoZWNraW5nIG9mIHByb3BzLlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLy8gQG11aSBtYXRlcmlhbCBjb21wb25lbnRzXG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJzJztcbmltcG9ydCBUYWIgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWInO1xuaW1wb3J0IEljb24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uJztcblxuLy8gTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCAyIFBSTyBjb21wb25lbnRzXG5pbXBvcnQgTURCb3ggZnJvbSAnL2NvbXBvbmVudHMvTURCb3gnO1xuaW1wb3J0IE1EVHlwb2dyYXBoeSBmcm9tICcvY29tcG9uZW50cy9NRFR5cG9ncmFwaHknO1xuaW1wb3J0IE1EQXZhdGFyIGZyb20gJy9jb21wb25lbnRzL01EQXZhdGFyJztcblxuLy8gTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCAyIFBSTyBiYXNlIHN0eWxlc1xuaW1wb3J0IGJyZWFrcG9pbnRzIGZyb20gJy9hc3NldHMvdGhlbWUvYmFzZS9icmVha3BvaW50cyc7XG5cbi8vIEltYWdlc1xuaW1wb3J0IGJ1cmNlTWFycyBmcm9tICcvYXNzZXRzL2ltYWdlcy9icnVjZS1tYXJzLmpwZyc7XG5pbXBvcnQgYmFja2dyb3VuZEltYWdlIGZyb20gJy9hc3NldHMvaW1hZ2VzL2JnLXByb2ZpbGUuanBlZyc7XG5cbmZ1bmN0aW9uIEhlYWRlcih7IGNoaWxkcmVuLCBuYW1lLCBsaW1pdGF0aW9ucyB9KSB7XG4gIGNvbnN0IFt0YWJzT3JpZW50YXRpb24sIHNldFRhYnNPcmllbnRhdGlvbl0gPSB1c2VTdGF0ZSgnaG9yaXpvbnRhbCcpO1xuICBjb25zdCBbdGFiVmFsdWUsIHNldFRhYlZhbHVlXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQSBmdW5jdGlvbiB0aGF0IHNldHMgdGhlIG9yaWVudGF0aW9uIHN0YXRlIG9mIHRoZSB0YWJzLlxuICAgIGZ1bmN0aW9uIGhhbmRsZVRhYnNPcmllbnRhdGlvbigpIHtcbiAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aCA8IGJyZWFrcG9pbnRzLnZhbHVlcy5zbVxuICAgICAgICA/IHNldFRhYnNPcmllbnRhdGlvbigndmVydGljYWwnKVxuICAgICAgICA6IHNldFRhYnNPcmllbnRhdGlvbignaG9yaXpvbnRhbCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICBUaGUgZXZlbnQgbGlzdGVuZXIgdGhhdCdzIGNhbGxpbmcgdGhlIGhhbmRsZVRhYnNPcmllbnRhdGlvbiBmdW5jdGlvbiB3aGVuIHJlc2l6aW5nIHRoZSB3aW5kb3cuXG4gICAgKi9cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlVGFic09yaWVudGF0aW9uKTtcblxuICAgIC8vIENhbGwgdGhlIGhhbmRsZVRhYnNPcmllbnRhdGlvbiBmdW5jdGlvbiB0byBzZXQgdGhlIHN0YXRlIHdpdGggdGhlIGluaXRpYWwgdmFsdWUuXG4gICAgaGFuZGxlVGFic09yaWVudGF0aW9uKCk7XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlVGFic09yaWVudGF0aW9uKTtcbiAgfSwgW3RhYnNPcmllbnRhdGlvbl0pO1xuXG4gIGNvbnN0IGhhbmRsZVNldFRhYlZhbHVlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4gc2V0VGFiVmFsdWUobmV3VmFsdWUpO1xuXG4gIHJldHVybiAoXG4gICAgPE1EQm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBtYj17NX0+XG4gICAgICA8Q2FyZFxuICAgICAgICBzeD17e1xuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIG10OiAtOCxcbiAgICAgICAgICBteDogMyxcbiAgICAgICAgICBweTogMixcbiAgICAgICAgICBweDogMixcbiAgICAgICAgfX0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgey8qIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8TURBdmF0YXJcbiAgICAgICAgICAgICAgc3JjPXtidXJjZU1hcnMuc3JjfVxuICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlLWltYWdlXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInhsXCJcbiAgICAgICAgICAgICAgc2hhZG93PVwic21cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+ICovfVxuICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICA8TURCb3ggaGVpZ2h0PVwiMTAwJVwiIG10PXswLjV9IGxpbmVIZWlnaHQ9ezF9PlxuICAgICAgICAgICAgICA8TURUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGZvbnRXZWlnaHQ9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9NRFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxNRFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiIGNvbG9yPVwidGV4dFwiIGZvbnRXZWlnaHQ9XCJyZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgTGltaXRhdGlvbjoge2xpbWl0YXRpb25zfVxuICAgICAgICAgICAgICA8L01EVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvTURCb3g+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIHsvKiA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9IGxnPXs0fSBzeD17eyBtbDogJ2F1dG8nIH19PlxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uPXt0YWJzT3JpZW50YXRpb259XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RhYlZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZXRUYWJWYWx1ZX0+XG4gICAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBcHBcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGZvbnRTaXplPVwic21hbGxcIiBzeD17eyBtdDogLTAuMjUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgaG9tZVxuICAgICAgICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGFiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGZvbnRTaXplPVwic21hbGxcIiBzeD17eyBtdDogLTAuMjUgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgICAgPEljb24gZm9udFNpemU9XCJzbWFsbFwiIHN4PXt7IG10OiAtMC4yNSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgPC9HcmlkPiAqL31cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NhcmQ+XG4gICAgPC9NREJveD5cbiAgKTtcbn1cblxuLy8gU2V0dGluZyBkZWZhdWx0IHByb3BzIGZvciB0aGUgSGVhZGVyXG5IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogJycsXG59O1xuXG4vLyBUeXBlY2hlY2tpbmcgcHJvcHMgZm9yIHRoZSBIZWFkZXJcbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb3BUeXBlcyIsIkNhcmQiLCJHcmlkIiwiQXBwQmFyIiwiVGFicyIsIlRhYiIsIkljb24iLCJNREJveCIsIk1EVHlwb2dyYXBoeSIsIk1EQXZhdGFyIiwiYnJlYWtwb2ludHMiLCJidXJjZU1hcnMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJIZWFkZXIiLCJjaGlsZHJlbiIsIm5hbWUiLCJsaW1pdGF0aW9ucyIsInRhYnNPcmllbnRhdGlvbiIsInNldFRhYnNPcmllbnRhdGlvbiIsInRhYlZhbHVlIiwic2V0VGFiVmFsdWUiLCJoYW5kbGVUYWJzT3JpZW50YXRpb24iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidmFsdWVzIiwic20iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNldFRhYlZhbHVlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsInBvc2l0aW9uIiwibWIiLCJzeCIsIm10IiwibXgiLCJweSIsInB4IiwiY29udGFpbmVyIiwic3BhY2luZyIsImFsaWduSXRlbXMiLCJpdGVtIiwiaGVpZ2h0IiwibGluZUhlaWdodCIsInZhcmlhbnQiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJub2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pagesComponents/pages/profile/components/Header/index.js\n"));

/***/ })

});