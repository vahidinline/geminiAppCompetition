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

/***/ "./components/MDBadgeDot/index.js":
/*!****************************************!*\
  !*** ./components/MDBadgeDot/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_MDBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/MDBox */ \"./components/MDBox/index.js\");\n/* harmony import */ var _components_MDTypography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/MDTypography */ \"./components/MDTypography/index.js\");\n\n\n// prop-types is a library for typechecking of props\n\n// NextJS Material Dashboard 2 PRO components\n\n\nconst MDBadgeDot = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = (param, ref)=>{\n    let { variant, color, size, badgeContent, font, ...rest } = param;\n    let finalSize;\n    let fontSize;\n    let padding;\n    if (size === \"sm\") {\n        finalSize = \"0.5rem\";\n        fontSize = \"caption\";\n        padding = \"0.45em 0.775em\";\n    } else if (size === \"lg\") {\n        finalSize = \"0.625rem\";\n        fontSize = \"body2\";\n        padding = \"0.85em 1.375em\";\n    } else if (size === \"md\") {\n        finalSize = \"0.5rem\";\n        fontSize = \"button\";\n        padding = \"0.65em 1em\";\n    } else {\n        finalSize = \"0.375rem\";\n        fontSize = \"caption\";\n        padding = \"0.45em 0.775em\";\n    }\n    const validColors = [\n        \"primary\",\n        \"secondary\",\n        \"info\",\n        \"success\",\n        \"warning\",\n        \"error\",\n        \"light\",\n        \"dark\"\n    ];\n    const validColorIndex = validColors.findIndex((el)=>el === color);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        ref: ref,\n        display: \"flex\",\n        alignItems: \"center\",\n        p: padding,\n        ...rest,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                component: \"i\",\n                display: \"inline-block\",\n                width: finalSize,\n                height: finalSize,\n                borderRadius: \"50%\",\n                bgColor: validColors[validColorIndex],\n                variant: variant,\n                mr: 1\n            }, void 0, false, {\n                fileName: \"/Users/vahidafshari/geminiAppCompetition/components/MDBadgeDot/index.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MDTypography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: fontSize,\n                fontWeight: font.weight ? font.weight : \"regular\",\n                color: font.color ? font.color : \"dark\",\n                sx: {\n                    lineHeight: 0\n                },\n                children: badgeContent\n            }, void 0, false, {\n                fileName: \"/Users/vahidafshari/geminiAppCompetition/components/MDBadgeDot/index.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vahidafshari/geminiAppCompetition/components/MDBadgeDot/index.js\",\n        lineNumber: 48,\n        columnNumber: 7\n    }, undefined);\n});\n_c1 = MDBadgeDot;\n// Setting default values for the props of MDBadgeDot\nMDBadgeDot.defaultProps = {\n    variant: \"contained\",\n    color: \"dark\",\n    size: \"xs\",\n    font: {}\n};\n// Typechecking props of the MDBadgeDot\nMDBadgeDot.propTypes = {\n    variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([\n        \"contained\",\n        \"gradient\"\n    ]),\n    color: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([\n        \"primary\",\n        \"secondary\",\n        \"info\",\n        \"success\",\n        \"warning\",\n        \"error\",\n        \"light\",\n        \"dark\"\n    ]),\n    size: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([\n        \"xs\",\n        \"sm\",\n        \"md\",\n        \"lg\"\n    ]),\n    badgeContent: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string).isRequired,\n    font: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({\n        color: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),\n        weight: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)\n    })\n};\nMDBadgeDot.displayName = \"MDBadgeDot\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (MDBadgeDot);\nvar _c, _c1;\n$RefreshReg$(_c, \"MDBadgeDot$forwardRef\");\n$RefreshReg$(_c1, \"MDBadgeDot\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01EQmFkZ2VEb3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtQztBQUVuQyxvREFBb0Q7QUFDakI7QUFFbkMsNkNBQTZDO0FBQ1A7QUFDYztBQUVwRCxNQUFNSSwyQkFBYUosaURBQVVBLE1BQzNCLFFBQXdESztRQUF2RCxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLElBQUksRUFBRSxHQUFHQyxNQUFNO0lBQ3BELElBQUlDO0lBQ0osSUFBSUM7SUFDSixJQUFJQztJQUVKLElBQUlOLFNBQVMsTUFBTTtRQUNqQkksWUFBWTtRQUNaQyxXQUFXO1FBQ1hDLFVBQVU7SUFDWixPQUFPLElBQUlOLFNBQVMsTUFBTTtRQUN4QkksWUFBWTtRQUNaQyxXQUFXO1FBQ1hDLFVBQVU7SUFDWixPQUFPLElBQUlOLFNBQVMsTUFBTTtRQUN4QkksWUFBWTtRQUNaQyxXQUFXO1FBQ1hDLFVBQVU7SUFDWixPQUFPO1FBQ0xGLFlBQVk7UUFDWkMsV0FBVztRQUNYQyxVQUFVO0lBQ1o7SUFFQSxNQUFNQyxjQUFjO1FBQ2xCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU1DLGtCQUFrQkQsWUFBWUUsU0FBUyxDQUFDLENBQUNDLEtBQU9BLE9BQU9YO0lBRTdELHFCQUNFLDhEQUFDTCx5REFBS0E7UUFBQ0csS0FBS0E7UUFBS2MsU0FBUTtRQUFPQyxZQUFXO1FBQVNDLEdBQUdQO1FBQVUsR0FBR0gsSUFBSTs7MEJBQ3RFLDhEQUFDVCx5REFBS0E7Z0JBQ0pvQixXQUFVO2dCQUNWSCxTQUFRO2dCQUNSSSxPQUFPWDtnQkFDUFksUUFBUVo7Z0JBQ1JhLGNBQWE7Z0JBQ2JDLFNBQVNYLFdBQVcsQ0FBQ0MsZ0JBQWdCO2dCQUNyQ1YsU0FBU0E7Z0JBQ1RxQixJQUFJOzs7Ozs7MEJBRU4sOERBQUN4QixnRUFBWUE7Z0JBQ1hHLFNBQVNPO2dCQUNUZSxZQUFZbEIsS0FBS21CLE1BQU0sR0FBR25CLEtBQUttQixNQUFNLEdBQUc7Z0JBQ3hDdEIsT0FBT0csS0FBS0gsS0FBSyxHQUFHRyxLQUFLSCxLQUFLLEdBQUc7Z0JBQ2pDdUIsSUFBSTtvQkFBRUMsWUFBWTtnQkFBRTswQkFDbkJ0Qjs7Ozs7Ozs7Ozs7O0FBSVQ7O0FBR0YscURBQXFEO0FBQ3JETCxXQUFXNEIsWUFBWSxHQUFHO0lBQ3hCMUIsU0FBUztJQUNUQyxPQUFPO0lBQ1BDLE1BQU07SUFDTkUsTUFBTSxDQUFDO0FBQ1Q7QUFFQSx1Q0FBdUM7QUFDdkNOLFdBQVc2QixTQUFTLEdBQUc7SUFDckIzQixTQUFTTCx1REFBZSxDQUFDO1FBQUM7UUFBYTtLQUFXO0lBQ2xETSxPQUFPTix1REFBZSxDQUFDO1FBQ3JCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUNETyxNQUFNUCx1REFBZSxDQUFDO1FBQUM7UUFBTTtRQUFNO1FBQU07S0FBSztJQUM5Q1EsY0FBY1IsMERBQWdCLENBQUNtQyxVQUFVO0lBQ3pDMUIsTUFBTVQsdURBQWUsQ0FBQztRQUNwQk0sT0FBT04sMERBQWdCO1FBQ3ZCNEIsUUFBUTVCLDBEQUFnQjtJQUMxQjtBQUNGO0FBRUFHLFdBQVdrQyxXQUFXLEdBQUc7QUFDekIsK0RBQWVsQyxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTURCYWRnZURvdC9pbmRleC5qcz83ZmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5cbi8vIHByb3AtdHlwZXMgaXMgYSBsaWJyYXJ5IGZvciB0eXBlY2hlY2tpbmcgb2YgcHJvcHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIE5leHRKUyBNYXRlcmlhbCBEYXNoYm9hcmQgMiBQUk8gY29tcG9uZW50c1xuaW1wb3J0IE1EQm94IGZyb20gJy9jb21wb25lbnRzL01EQm94JztcbmltcG9ydCBNRFR5cG9ncmFwaHkgZnJvbSAnL2NvbXBvbmVudHMvTURUeXBvZ3JhcGh5JztcblxuY29uc3QgTURCYWRnZURvdCA9IGZvcndhcmRSZWYoXG4gICh7IHZhcmlhbnQsIGNvbG9yLCBzaXplLCBiYWRnZUNvbnRlbnQsIGZvbnQsIC4uLnJlc3QgfSwgcmVmKSA9PiB7XG4gICAgbGV0IGZpbmFsU2l6ZTtcbiAgICBsZXQgZm9udFNpemU7XG4gICAgbGV0IHBhZGRpbmc7XG5cbiAgICBpZiAoc2l6ZSA9PT0gJ3NtJykge1xuICAgICAgZmluYWxTaXplID0gJzAuNXJlbSc7XG4gICAgICBmb250U2l6ZSA9ICdjYXB0aW9uJztcbiAgICAgIHBhZGRpbmcgPSAnMC40NWVtIDAuNzc1ZW0nO1xuICAgIH0gZWxzZSBpZiAoc2l6ZSA9PT0gJ2xnJykge1xuICAgICAgZmluYWxTaXplID0gJzAuNjI1cmVtJztcbiAgICAgIGZvbnRTaXplID0gJ2JvZHkyJztcbiAgICAgIHBhZGRpbmcgPSAnMC44NWVtIDEuMzc1ZW0nO1xuICAgIH0gZWxzZSBpZiAoc2l6ZSA9PT0gJ21kJykge1xuICAgICAgZmluYWxTaXplID0gJzAuNXJlbSc7XG4gICAgICBmb250U2l6ZSA9ICdidXR0b24nO1xuICAgICAgcGFkZGluZyA9ICcwLjY1ZW0gMWVtJztcbiAgICB9IGVsc2Uge1xuICAgICAgZmluYWxTaXplID0gJzAuMzc1cmVtJztcbiAgICAgIGZvbnRTaXplID0gJ2NhcHRpb24nO1xuICAgICAgcGFkZGluZyA9ICcwLjQ1ZW0gMC43NzVlbSc7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRDb2xvcnMgPSBbXG4gICAgICAncHJpbWFyeScsXG4gICAgICAnc2Vjb25kYXJ5JyxcbiAgICAgICdpbmZvJyxcbiAgICAgICdzdWNjZXNzJyxcbiAgICAgICd3YXJuaW5nJyxcbiAgICAgICdlcnJvcicsXG4gICAgICAnbGlnaHQnLFxuICAgICAgJ2RhcmsnLFxuICAgIF07XG5cbiAgICBjb25zdCB2YWxpZENvbG9ySW5kZXggPSB2YWxpZENvbG9ycy5maW5kSW5kZXgoKGVsKSA9PiBlbCA9PT0gY29sb3IpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNREJveCByZWY9e3JlZn0gZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgcD17cGFkZGluZ30gey4uLnJlc3R9PlxuICAgICAgICA8TURCb3hcbiAgICAgICAgICBjb21wb25lbnQ9XCJpXCJcbiAgICAgICAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcbiAgICAgICAgICB3aWR0aD17ZmluYWxTaXplfVxuICAgICAgICAgIGhlaWdodD17ZmluYWxTaXplfVxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjUwJVwiXG4gICAgICAgICAgYmdDb2xvcj17dmFsaWRDb2xvcnNbdmFsaWRDb2xvckluZGV4XX1cbiAgICAgICAgICB2YXJpYW50PXt2YXJpYW50fVxuICAgICAgICAgIG1yPXsxfVxuICAgICAgICAvPlxuICAgICAgICA8TURUeXBvZ3JhcGh5XG4gICAgICAgICAgdmFyaWFudD17Zm9udFNpemV9XG4gICAgICAgICAgZm9udFdlaWdodD17Zm9udC53ZWlnaHQgPyBmb250LndlaWdodCA6ICdyZWd1bGFyJ31cbiAgICAgICAgICBjb2xvcj17Zm9udC5jb2xvciA/IGZvbnQuY29sb3IgOiAnZGFyayd9XG4gICAgICAgICAgc3g9e3sgbGluZUhlaWdodDogMCB9fT5cbiAgICAgICAgICB7YmFkZ2VDb250ZW50fVxuICAgICAgICA8L01EVHlwb2dyYXBoeT5cbiAgICAgIDwvTURCb3g+XG4gICAgKTtcbiAgfVxuKTtcblxuLy8gU2V0dGluZyBkZWZhdWx0IHZhbHVlcyBmb3IgdGhlIHByb3BzIG9mIE1EQmFkZ2VEb3Rcbk1EQmFkZ2VEb3QuZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiAnY29udGFpbmVkJyxcbiAgY29sb3I6ICdkYXJrJyxcbiAgc2l6ZTogJ3hzJyxcbiAgZm9udDoge30sXG59O1xuXG4vLyBUeXBlY2hlY2tpbmcgcHJvcHMgb2YgdGhlIE1EQmFkZ2VEb3Rcbk1EQmFkZ2VEb3QucHJvcFR5cGVzID0ge1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydjb250YWluZWQnLCAnZ3JhZGllbnQnXSksXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdwcmltYXJ5JyxcbiAgICAnc2Vjb25kYXJ5JyxcbiAgICAnaW5mbycsXG4gICAgJ3N1Y2Nlc3MnLFxuICAgICd3YXJuaW5nJyxcbiAgICAnZXJyb3InLFxuICAgICdsaWdodCcsXG4gICAgJ2RhcmsnLFxuICBdKSxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnXSksXG4gIGJhZGdlQ29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBmb250OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHdlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG59O1xuXG5NREJhZGdlRG90LmRpc3BsYXlOYW1lID0gJ01EQmFkZ2VEb3QnO1xuZXhwb3J0IGRlZmF1bHQgTURCYWRnZURvdDtcbiJdLCJuYW1lcyI6WyJmb3J3YXJkUmVmIiwiUHJvcFR5cGVzIiwiTURCb3giLCJNRFR5cG9ncmFwaHkiLCJNREJhZGdlRG90IiwicmVmIiwidmFyaWFudCIsImNvbG9yIiwic2l6ZSIsImJhZGdlQ29udGVudCIsImZvbnQiLCJyZXN0IiwiZmluYWxTaXplIiwiZm9udFNpemUiLCJwYWRkaW5nIiwidmFsaWRDb2xvcnMiLCJ2YWxpZENvbG9ySW5kZXgiLCJmaW5kSW5kZXgiLCJlbCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicCIsImNvbXBvbmVudCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYmdDb2xvciIsIm1yIiwiZm9udFdlaWdodCIsIndlaWdodCIsInN4IiwibGluZUhlaWdodCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm9uZU9mIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwiZGlzcGxheU5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MDBadgeDot/index.js\n"));

/***/ })

});