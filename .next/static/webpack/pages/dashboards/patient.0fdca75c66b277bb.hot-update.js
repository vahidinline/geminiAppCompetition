"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboards/patient",{

/***/ "./examples/Tables/DataTable/DataTableHeadCell.js":
/*!********************************************************!*\
  !*** ./examples/Tables/DataTable/DataTableHeadCell.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_MDBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/MDBox */ \"./components/MDBox/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context */ \"./context/index.js\");\n/**\n=========================================================\n* NextJS Material Dashboard 2 PRO - v2.2.0\n=========================================================\n\n* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro\n* Copyright 2023 Creative Tim (https://www.creative-tim.com)\n\nCoded by www.creative-tim.com\n\n =========================================================\n\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n*/ // prop-types is a library for typechecking of props\n\nvar _s = $RefreshSig$();\n\n// @mui material components\n\n// NextJS Material Dashboard 2 PRO components\n\n// NextJS Material Dashboard 2 PRO contexts\n\nfunction DataTableHeadCell(param) {\n    let { width, children, sorted, align, ...rest } = param;\n    _s();\n    const [controller] = (0,_context__WEBPACK_IMPORTED_MODULE_2__.useMaterialUIController)();\n    const { darkMode } = controller;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        component: \"th\",\n        width: width,\n        py: 1.5,\n        px: 3,\n        sx: (param)=>{\n            let { palette: { light }, borders: { borderWidth } } = param;\n            return {\n                borderBottom: \"\".concat(borderWidth[1], \" solid \").concat(light.main)\n            };\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            ...rest,\n            position: \"relative\",\n            textAlign: align,\n            color: darkMode ? \"white\" : \"secondary\",\n            opacity: 0.7,\n            sx: (param)=>{\n                let { typography: { size, fontWeightBold } } = param;\n                return {\n                    fontSize: size.xxs,\n                    fontWeight: fontWeightBold,\n                    //font Family\n                    textTransform: \"uppercase\",\n                    cursor: sorted && \"pointer\",\n                    userSelect: sorted && \"none\"\n                };\n            },\n            children: [\n                children,\n                sorted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    position: \"absolute\",\n                    top: 0,\n                    right: align !== \"right\" ? \"16px\" : 0,\n                    left: align === \"right\" ? \"-5px\" : \"unset\",\n                    sx: (param)=>{\n                        let { typography: { size } } = param;\n                        return {\n                            fontSize: size.lg\n                        };\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Tables/DataTable/DataTableHeadCell.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Tables/DataTable/DataTableHeadCell.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vahidafshari/geminiAppCompetition/examples/Tables/DataTable/DataTableHeadCell.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(DataTableHeadCell, \"s0n8bwZXGOuz7un3Pl1FvVzqqsQ=\", false, function() {\n    return [\n        _context__WEBPACK_IMPORTED_MODULE_2__.useMaterialUIController\n    ];\n});\n_c = DataTableHeadCell;\n// Setting default values for the props of DataTableHeadCell\nDataTableHeadCell.defaultProps = {\n    width: \"auto\",\n    sorted: \"none\",\n    align: \"left\"\n};\n// Typechecking props for the DataTableHeadCell\nDataTableHeadCell.propTypes = {\n    width: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([\n        (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),\n        (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)\n    ]),\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node).isRequired,\n    sorted: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf([\n        false,\n        \"none\",\n        \"asce\",\n        \"desc\"\n    ]),\n    align: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf([\n        \"left\",\n        \"right\",\n        \"center\"\n    ])\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataTableHeadCell);\nvar _c;\n$RefreshReg$(_c, \"DataTableHeadCell\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9leGFtcGxlcy9UYWJsZXMvRGF0YVRhYmxlL0RhdGFUYWJsZUhlYWRDZWxsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQWFBLEdBRUEsb0RBQW9EOzs7QUFDakI7QUFFbkMsMkJBQTJCO0FBQ1c7QUFFdEMsNkNBQTZDO0FBQ1A7QUFFdEMsMkNBQTJDO0FBQ1E7QUFFbkQsU0FBU0ksa0JBQWtCLEtBQTJDO1FBQTNDLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHQyxNQUFNLEdBQTNDOztJQUN6QixNQUFNLENBQUNDLFdBQVcsR0FBR1AsaUVBQXVCQTtJQUM1QyxNQUFNLEVBQUVRLFFBQVEsRUFBRSxHQUFHRDtJQUVyQixxQkFDRSw4REFBQ1IseURBQUtBO1FBQ0pVLFdBQVU7UUFDVlAsT0FBT0E7UUFDUFEsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7Z0JBQUMsRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUUsRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUUsRUFBRTttQkFBTTtnQkFDekRDLGNBQWMsR0FBMkJILE9BQXhCRSxXQUFXLENBQUMsRUFBRSxFQUFDLFdBQW9CLE9BQVhGLE1BQU1JLElBQUk7WUFDckQ7UUFBQTtrQkFDQSw0RUFBQ25CLHlEQUFLQTtZQUNILEdBQUdPLElBQUk7WUFDUmEsVUFBUztZQUNUQyxXQUFXZjtZQUNYZ0IsT0FBT2IsV0FBVyxVQUFVO1lBQzVCYyxTQUFTO1lBQ1RWLElBQUk7b0JBQUMsRUFBRVcsWUFBWSxFQUFFQyxJQUFJLEVBQUVDLGNBQWMsRUFBRSxFQUFFO3VCQUFNO29CQUNqREMsVUFBVUYsS0FBS0csR0FBRztvQkFDbEJDLFlBQVlIO29CQUNaLGFBQWE7b0JBRWJJLGVBQWU7b0JBQ2ZDLFFBQVExQixVQUFVO29CQUNsQjJCLFlBQVkzQixVQUFVO2dCQUN4QjtZQUFBOztnQkFDQ0Q7Z0JBQ0FDLHdCQUNDLDhEQUFDTCx5REFBS0E7b0JBQ0pvQixVQUFTO29CQUNUYSxLQUFLO29CQUNMQyxPQUFPNUIsVUFBVSxVQUFVLFNBQVM7b0JBQ3BDNkIsTUFBTTdCLFVBQVUsVUFBVSxTQUFTO29CQUNuQ08sSUFBSTs0QkFBQyxFQUFFVyxZQUFZLEVBQUVDLElBQUksRUFBRSxFQUFFOytCQUFNOzRCQUNqQ0UsVUFBVUYsS0FBS1csRUFBRTt3QkFDbkI7b0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1o7R0ExQ1NsQzs7UUFDY0QsNkRBQXVCQTs7O0tBRHJDQztBQTRDVCw0REFBNEQ7QUFDNURBLGtCQUFrQm1DLFlBQVksR0FBRztJQUMvQmxDLE9BQU87SUFDUEUsUUFBUTtJQUNSQyxPQUFPO0FBQ1Q7QUFFQSwrQ0FBK0M7QUFDL0NKLGtCQUFrQm9DLFNBQVMsR0FBRztJQUM1Qm5DLE9BQU9MLDJEQUFtQixDQUFDO1FBQUNBLDBEQUFnQjtRQUFFQSwwREFBZ0I7S0FBQztJQUMvRE0sVUFBVU4sd0RBQWMsQ0FBQzZDLFVBQVU7SUFDbkN0QyxRQUFRUCx1REFBZSxDQUFDO1FBQUM7UUFBTztRQUFRO1FBQVE7S0FBTztJQUN2RFEsT0FBT1IsdURBQWUsQ0FBQztRQUFDO1FBQVE7UUFBUztLQUFTO0FBQ3BEO0FBRUEsK0RBQWVJLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9leGFtcGxlcy9UYWJsZXMvRGF0YVRhYmxlL0RhdGFUYWJsZUhlYWRDZWxsLmpzPzU3M2IiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCAyIFBSTyAtIHYyLjIuMFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC1wcm9cbiogQ29weXJpZ2h0IDIwMjMgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxuXG5Db2RlZCBieSB3d3cuY3JlYXRpdmUtdGltLmNvbVxuXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qL1xuXG4vLyBwcm9wLXR5cGVzIGlzIGEgbGlicmFyeSBmb3IgdHlwZWNoZWNraW5nIG9mIHByb3BzXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBAbXVpIG1hdGVyaWFsIGNvbXBvbmVudHNcbmltcG9ydCBJY29uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbic7XG5cbi8vIE5leHRKUyBNYXRlcmlhbCBEYXNoYm9hcmQgMiBQUk8gY29tcG9uZW50c1xuaW1wb3J0IE1EQm94IGZyb20gJy9jb21wb25lbnRzL01EQm94JztcblxuLy8gTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCAyIFBSTyBjb250ZXh0c1xuaW1wb3J0IHsgdXNlTWF0ZXJpYWxVSUNvbnRyb2xsZXIgfSBmcm9tICcvY29udGV4dCc7XG5cbmZ1bmN0aW9uIERhdGFUYWJsZUhlYWRDZWxsKHsgd2lkdGgsIGNoaWxkcmVuLCBzb3J0ZWQsIGFsaWduLCAuLi5yZXN0IH0pIHtcbiAgY29uc3QgW2NvbnRyb2xsZXJdID0gdXNlTWF0ZXJpYWxVSUNvbnRyb2xsZXIoKTtcbiAgY29uc3QgeyBkYXJrTW9kZSB9ID0gY29udHJvbGxlcjtcblxuICByZXR1cm4gKFxuICAgIDxNREJveFxuICAgICAgY29tcG9uZW50PVwidGhcIlxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgcHk9ezEuNX1cbiAgICAgIHB4PXszfVxuICAgICAgc3g9eyh7IHBhbGV0dGU6IHsgbGlnaHQgfSwgYm9yZGVyczogeyBib3JkZXJXaWR0aCB9IH0pID0+ICh7XG4gICAgICAgIGJvcmRlckJvdHRvbTogYCR7Ym9yZGVyV2lkdGhbMV19IHNvbGlkICR7bGlnaHQubWFpbn1gLFxuICAgICAgfSl9PlxuICAgICAgPE1EQm94XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgdGV4dEFsaWduPXthbGlnbn1cbiAgICAgICAgY29sb3I9e2RhcmtNb2RlID8gJ3doaXRlJyA6ICdzZWNvbmRhcnknfVxuICAgICAgICBvcGFjaXR5PXswLjd9XG4gICAgICAgIHN4PXsoeyB0eXBvZ3JhcGh5OiB7IHNpemUsIGZvbnRXZWlnaHRCb2xkIH0gfSkgPT4gKHtcbiAgICAgICAgICBmb250U2l6ZTogc2l6ZS54eHMsXG4gICAgICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodEJvbGQsXG4gICAgICAgICAgLy9mb250IEZhbWlseVxuXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgY3Vyc29yOiBzb3J0ZWQgJiYgJ3BvaW50ZXInLFxuICAgICAgICAgIHVzZXJTZWxlY3Q6IHNvcnRlZCAmJiAnbm9uZScsXG4gICAgICAgIH0pfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7c29ydGVkICYmIChcbiAgICAgICAgICA8TURCb3hcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgdG9wPXswfVxuICAgICAgICAgICAgcmlnaHQ9e2FsaWduICE9PSAncmlnaHQnID8gJzE2cHgnIDogMH1cbiAgICAgICAgICAgIGxlZnQ9e2FsaWduID09PSAncmlnaHQnID8gJy01cHgnIDogJ3Vuc2V0J31cbiAgICAgICAgICAgIHN4PXsoeyB0eXBvZ3JhcGh5OiB7IHNpemUgfSB9KSA9PiAoe1xuICAgICAgICAgICAgICBmb250U2l6ZTogc2l6ZS5sZyxcbiAgICAgICAgICAgIH0pfT48L01EQm94PlxuICAgICAgICApfVxuICAgICAgPC9NREJveD5cbiAgICA8L01EQm94PlxuICApO1xufVxuXG4vLyBTZXR0aW5nIGRlZmF1bHQgdmFsdWVzIGZvciB0aGUgcHJvcHMgb2YgRGF0YVRhYmxlSGVhZENlbGxcbkRhdGFUYWJsZUhlYWRDZWxsLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6ICdhdXRvJyxcbiAgc29ydGVkOiAnbm9uZScsXG4gIGFsaWduOiAnbGVmdCcsXG59O1xuXG4vLyBUeXBlY2hlY2tpbmcgcHJvcHMgZm9yIHRoZSBEYXRhVGFibGVIZWFkQ2VsbFxuRGF0YVRhYmxlSGVhZENlbGwucHJvcFR5cGVzID0ge1xuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgc29ydGVkOiBQcm9wVHlwZXMub25lT2YoW2ZhbHNlLCAnbm9uZScsICdhc2NlJywgJ2Rlc2MnXSksXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlciddKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFUYWJsZUhlYWRDZWxsO1xuIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsIkljb24iLCJNREJveCIsInVzZU1hdGVyaWFsVUlDb250cm9sbGVyIiwiRGF0YVRhYmxlSGVhZENlbGwiLCJ3aWR0aCIsImNoaWxkcmVuIiwic29ydGVkIiwiYWxpZ24iLCJyZXN0IiwiY29udHJvbGxlciIsImRhcmtNb2RlIiwiY29tcG9uZW50IiwicHkiLCJweCIsInN4IiwicGFsZXR0ZSIsImxpZ2h0IiwiYm9yZGVycyIsImJvcmRlcldpZHRoIiwiYm9yZGVyQm90dG9tIiwibWFpbiIsInBvc2l0aW9uIiwidGV4dEFsaWduIiwiY29sb3IiLCJvcGFjaXR5IiwidHlwb2dyYXBoeSIsInNpemUiLCJmb250V2VpZ2h0Qm9sZCIsImZvbnRTaXplIiwieHhzIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJjdXJzb3IiLCJ1c2VyU2VsZWN0IiwidG9wIiwicmlnaHQiLCJsZWZ0IiwibGciLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJub2RlIiwiaXNSZXF1aXJlZCIsIm9uZU9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./examples/Tables/DataTable/DataTableHeadCell.js\n"));

/***/ })

});