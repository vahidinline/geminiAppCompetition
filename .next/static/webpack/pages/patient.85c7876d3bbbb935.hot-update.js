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

/***/ "./examples/Lists/CategoriesList/index.js":
/*!************************************************!*\
  !*** ./examples/Lists/CategoriesList/index.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _components_MDBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/MDBox */ \"./components/MDBox/index.js\");\n/* harmony import */ var _components_MDTypography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/MDTypography */ \"./components/MDTypography/index.js\");\n/**\n=========================================================\n* NextJS Material Dashboard 2 PRO - v2.2.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro\n* Copyright 2023 Creative Tim (https://www.creative-tim.com)\n\nCoded by www.creative-tim.com\n\n =========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n*/ \n\n// prop-types is a library for typechecking of props\n\n// @mui material components\n\n\n// NextJS Material Dashboard 2 PRO components\n\n\nfunction CategoriesList(param) {\n    let { title, activityPlan, shadow } = param;\n    const renderActivityPlan = activityPlan.map((param)=>/*#__PURE__*/ {\n        let { day, exercises, i } = param;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            component: \"li\",\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            borderRadius: \"lg\",\n            py: 1,\n            pr: 2,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDTypography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    variant: \"h3\",\n                    color: \"text\",\n                    children: [\n                        \"day\",\n                        day\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    children: exercises.map((exercise)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDTypography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    variant: \"h3\",\n                                    color: \"text\",\n                                    children: exercise.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDTypography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    variant: \"caption\",\n                                    color: \"text\",\n                                    children: [\n                                        \"description: \",\n                                        exercise.description\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDTypography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    variant: \"caption\",\n                                    color: \"text\",\n                                    children: [\n                                        \"notes: \",\n                                        exercise.notes\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, exercise.id, true, {\n                            fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    display: \"flex\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDTypography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        //  component={Link}\n                        variant: \"button\",\n                        // color={color}\n                        // href={route}\n                        sx: {\n                            lineHeight: 0,\n                            transition: \"all 0.2s cubic-bezier(.34,1.61,.7,1.3)\",\n                            p: 0.5,\n                            \"&:hover, &:focus\": {\n                                transform: \"translateX(5px)\"\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n                    lineNumber: 58,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, i, true, {\n            fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n            lineNumber: 31,\n            columnNumber: 5\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                pt: 2,\n                px: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDTypography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    variant: \"h6\",\n                    fontWeight: \"medium\",\n                    textTransform: \"capitalize\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                p: 2,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    component: \"ul\",\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    p: 0,\n                    m: 0,\n                    children: renderActivityPlan\n                }, void 0, false, {\n                    fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Lists/CategoriesList/index.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_c = CategoriesList;\n// Typechecking props for the CategoriesList\nCategoriesList.propTypes = {\n    title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired,\n    categories: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoriesList);\nvar _c;\n$RefreshReg$(_c, \"CategoriesList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leGFtcGxlcy9MaXN0cy9DYXRlZ29yaWVzTGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUU2QjtBQUU3QixvREFBb0Q7QUFDakI7QUFFbkMsMkJBQTJCO0FBQ1c7QUFDQTtBQUV0Qyw2Q0FBNkM7QUFDUDtBQUNjO0FBRXBELFNBQVNNLGVBQWUsS0FBK0I7UUFBL0IsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLE1BQU0sRUFBRSxHQUEvQjtJQUN0QixNQUFNQyxxQkFBcUJGLGFBQWFHLEdBQUcsQ0FBQztZQUFDLEVBQUVDLEdBQUcsRUFBRUMsU0FBUyxFQUFFQyxDQUFDLEVBQUU7ZUFDaEUsOERBQUNWLHlEQUFLQTtZQUVKVyxXQUFVO1lBQ1ZDLFNBQVE7WUFDUkMsZ0JBQWU7WUFDZkMsWUFBVztZQUNYQyxjQUFhO1lBQ2JDLElBQUk7WUFDSkMsSUFBSTs7OEJBQ0osOERBQUNoQixnRUFBWUE7b0JBQUNpQixTQUFRO29CQUFLQyxPQUFNOzt3QkFBTzt3QkFDbENYOzs7Ozs7OzhCQUVOLDhEQUFDUix5REFBS0E7b0JBQUNZLFNBQVE7b0JBQU9RLGVBQWM7OEJBQ2pDWCxVQUFVRixHQUFHLENBQUMsQ0FBQ2MseUJBQ2QsOERBQUNyQix5REFBS0E7OzhDQUNKLDhEQUFDQyxnRUFBWUE7b0NBQUNpQixTQUFRO29DQUFLQyxPQUFNOzhDQUM5QkUsU0FBU0MsSUFBSTs7Ozs7OzhDQUVoQiw4REFBQ3JCLGdFQUFZQTtvQ0FBQ2lCLFNBQVE7b0NBQVVDLE9BQU07O3dDQUFPO3dDQUM3QkUsU0FBU0UsV0FBVzs7Ozs7Ozs4Q0FFcEMsOERBQUN0QixnRUFBWUE7b0NBQUNpQixTQUFRO29DQUFVQyxPQUFNOzt3Q0FBTzt3Q0FDbkNFLFNBQVNHLEtBQUs7Ozs7Ozs7OzJCQVJkSCxTQUFTSSxFQUFFOzs7Ozs7Ozs7OzhCQWEzQiw4REFBQ3pCLHlEQUFLQTtvQkFBQ1ksU0FBUTs4QkFDYiw0RUFBQ1gsZ0VBQVlBO3dCQUNYLG9CQUFvQjt3QkFDcEJpQixTQUFRO3dCQUNSLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZlEsSUFBSTs0QkFDRkMsWUFBWTs0QkFDWkMsWUFBWTs0QkFDWkMsR0FBRzs0QkFFSCxvQkFBb0I7Z0NBQ2xCQyxXQUFXOzRCQUNiO3dCQUNGOzs7Ozs7Ozs7Ozs7V0F4Q0NwQjs7Ozs7SUEwQ0E7SUFHVCxxQkFDRSw4REFBQ1osMERBQUlBOzswQkFDSCw4REFBQ0UseURBQUtBO2dCQUFDK0IsSUFBSTtnQkFBR0MsSUFBSTswQkFDaEIsNEVBQUMvQixnRUFBWUE7b0JBQ1hpQixTQUFRO29CQUNSZSxZQUFXO29CQUNYQyxlQUFjOzhCQUNiL0I7Ozs7Ozs7Ozs7OzBCQUdMLDhEQUFDSCx5REFBS0E7Z0JBQUM2QixHQUFHOzBCQUNSLDRFQUFDN0IseURBQUtBO29CQUFDVyxXQUFVO29CQUFLQyxTQUFRO29CQUFPUSxlQUFjO29CQUFTUyxHQUFHO29CQUFHTSxHQUFHOzhCQUNsRTdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0tBakVTSjtBQW1FVCw0Q0FBNEM7QUFDNUNBLGVBQWVrQyxTQUFTLEdBQUc7SUFDekJqQyxPQUFPTiwwREFBZ0IsQ0FBQ3lDLFVBQVU7SUFDbENDLFlBQVkxQyx5REFBaUIsQ0FBQ0EsMERBQWdCLEVBQUV5QyxVQUFVO0FBQzVEO0FBRUEsK0RBQWVwQyxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2V4YW1wbGVzL0xpc3RzL0NhdGVnb3JpZXNMaXN0L2luZGV4LmpzP2I2OGYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCAyIFBSTyAtIHYyLjIuMFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC1wcm9cbiogQ29weXJpZ2h0IDIwMjMgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxuXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxuXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qL1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG4vLyBwcm9wLXR5cGVzIGlzIGEgbGlicmFyeSBmb3IgdHlwZWNoZWNraW5nIG9mIHByb3BzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBAbXVpIG1hdGVyaWFsIGNvbXBvbmVudHNcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XG5pbXBvcnQgSWNvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb24nO1xuXG4vLyBOZXh0SlMgTWF0ZXJpYWwgRGFzaGJvYXJkIDIgUFJPIGNvbXBvbmVudHNcbmltcG9ydCBNREJveCBmcm9tICcvY29tcG9uZW50cy9NREJveCc7XG5pbXBvcnQgTURUeXBvZ3JhcGh5IGZyb20gJy9jb21wb25lbnRzL01EVHlwb2dyYXBoeSc7XG5cbmZ1bmN0aW9uIENhdGVnb3JpZXNMaXN0KHsgdGl0bGUsIGFjdGl2aXR5UGxhbiwgc2hhZG93IH0pIHtcbiAgY29uc3QgcmVuZGVyQWN0aXZpdHlQbGFuID0gYWN0aXZpdHlQbGFuLm1hcCgoeyBkYXksIGV4ZXJjaXNlcywgaSB9KSA9PiAoXG4gICAgPE1EQm94XG4gICAgICBrZXk9e2l9XG4gICAgICBjb21wb25lbnQ9XCJsaVwiXG4gICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICBib3JkZXJSYWRpdXM9XCJsZ1wiXG4gICAgICBweT17MX1cbiAgICAgIHByPXsyfT5cbiAgICAgIDxNRFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY29sb3I9XCJ0ZXh0XCI+XG4gICAgICAgIGRheXtkYXl9XG4gICAgICA8L01EVHlwb2dyYXBoeT5cbiAgICAgIDxNREJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAge2V4ZXJjaXNlcy5tYXAoKGV4ZXJjaXNlKSA9PiAoXG4gICAgICAgICAgPE1EQm94IGtleT17ZXhlcmNpc2UuaWR9PlxuICAgICAgICAgICAgPE1EVHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBjb2xvcj1cInRleHRcIj5cbiAgICAgICAgICAgICAge2V4ZXJjaXNlLm5hbWV9XG4gICAgICAgICAgICA8L01EVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxNRFR5cG9ncmFwaHkgdmFyaWFudD1cImNhcHRpb25cIiBjb2xvcj1cInRleHRcIj5cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHtleGVyY2lzZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvTURUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPE1EVHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiIGNvbG9yPVwidGV4dFwiPlxuICAgICAgICAgICAgICBub3Rlczoge2V4ZXJjaXNlLm5vdGVzfVxuICAgICAgICAgICAgPC9NRFR5cG9ncmFwaHk+XG4gICAgICAgICAgPC9NREJveD5cbiAgICAgICAgKSl9XG4gICAgICA8L01EQm94PlxuICAgICAgPE1EQm94IGRpc3BsYXk9XCJmbGV4XCI+XG4gICAgICAgIDxNRFR5cG9ncmFwaHlcbiAgICAgICAgICAvLyAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICAgIHZhcmlhbnQ9XCJidXR0b25cIlxuICAgICAgICAgIC8vIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAvLyBocmVmPXtyb3V0ZX1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgbGluZUhlaWdodDogMCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4ycyBjdWJpYy1iZXppZXIoLjM0LDEuNjEsLjcsMS4zKScsXG4gICAgICAgICAgICBwOiAwLjUsXG5cbiAgICAgICAgICAgICcmOmhvdmVyLCAmOmZvY3VzJzoge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDVweCknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fT48L01EVHlwb2dyYXBoeT5cbiAgICAgIDwvTURCb3g+XG4gICAgPC9NREJveD5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxNREJveCBwdD17Mn0gcHg9ezJ9PlxuICAgICAgICA8TURUeXBvZ3JhcGh5XG4gICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICBmb250V2VpZ2h0PVwibWVkaXVtXCJcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtPVwiY2FwaXRhbGl6ZVwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9NRFR5cG9ncmFwaHk+XG4gICAgICA8L01EQm94PlxuICAgICAgPE1EQm94IHA9ezJ9PlxuICAgICAgICA8TURCb3ggY29tcG9uZW50PVwidWxcIiBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBwPXswfSBtPXswfT5cbiAgICAgICAgICB7cmVuZGVyQWN0aXZpdHlQbGFufVxuICAgICAgICA8L01EQm94PlxuICAgICAgPC9NREJveD5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG5cbi8vIFR5cGVjaGVja2luZyBwcm9wcyBmb3IgdGhlIENhdGVnb3JpZXNMaXN0XG5DYXRlZ29yaWVzTGlzdC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNhdGVnb3JpZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzTGlzdDtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUHJvcFR5cGVzIiwiQ2FyZCIsIkljb24iLCJNREJveCIsIk1EVHlwb2dyYXBoeSIsIkNhdGVnb3JpZXNMaXN0IiwidGl0bGUiLCJhY3Rpdml0eVBsYW4iLCJzaGFkb3ciLCJyZW5kZXJBY3Rpdml0eVBsYW4iLCJtYXAiLCJkYXkiLCJleGVyY2lzZXMiLCJpIiwiY29tcG9uZW50IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJvcmRlclJhZGl1cyIsInB5IiwicHIiLCJ2YXJpYW50IiwiY29sb3IiLCJmbGV4RGlyZWN0aW9uIiwiZXhlcmNpc2UiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJub3RlcyIsImlkIiwic3giLCJsaW5lSGVpZ2h0IiwidHJhbnNpdGlvbiIsInAiLCJ0cmFuc2Zvcm0iLCJwdCIsInB4IiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJtIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImNhdGVnb3JpZXMiLCJhcnJheU9mIiwib2JqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./examples/Lists/CategoriesList/index.js\n"));

/***/ })

});