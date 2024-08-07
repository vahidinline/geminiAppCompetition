"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pages/users/new-user",{

/***/ "./pagesComponents/pages/users/new-user/schemas/form.js":
/*!**************************************************************!*\
  !*** ./pagesComponents/pages/users/new-user/schemas/form.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst form = {\n    formId: \"new-user-form\",\n    formField: {\n        patientID: {\n            name: \"patientID\",\n            label: \"Patient ID\",\n            type: \"text\",\n            errorMsg: \"Patient ID is required.\",\n            default: \"123456\"\n        },\n        firstName: {\n            name: \"firstName\",\n            label: \"First Name\",\n            type: \"text\",\n            errorMsg: \"First name is required.\",\n            default: \"John\"\n        },\n        lastName: {\n            name: \"lastName\",\n            label: \"Last Name\",\n            type: \"text\",\n            errorMsg: \"Last name is required.\",\n            default: \"Doe\"\n        },\n        weight: {\n            name: \"weight\",\n            label: \"Weight\",\n            type: \"text\",\n            errorMsg: \"Weight is required.\",\n            default: \"95 kg\"\n        },\n        height: {\n            name: \"height\",\n            label: \"Height\",\n            type: \"text\",\n            errorMsg: \"Height is required.\",\n            default: \"180 cm\"\n        },\n        dateOfBirth: {\n            name: \"dateOfBirth\",\n            label: \"Date of Birth\",\n            type: \"date\",\n            errorMsg: \"Date of birth is required\",\n            default: \"1990-01-01\"\n        },\n        email: {\n            name: \"email\",\n            label: \"Email\",\n            type: \"email\",\n            errorMsg: \"Email is required\",\n            default: \"johndoe@example.com\"\n        },\n        sex: {\n            name: \"sex\",\n            label: \"Sex\",\n            type: \"text\",\n            errorMsg: \"Sex is required\",\n            default: \"Male\"\n        },\n        phone: {\n            name: \"phone\",\n            label: \"Phone\",\n            type: \"text\",\n            errorMsg: \"Phone is required\",\n            default: \"123-456-7890\"\n        },\n        emergencyContact: {\n            name: \"emergencyContact\",\n            label: \"Emergency Contact\",\n            type: \"text\",\n            errorMsg: \"Emergency Contact is required\",\n            default: \"Jane Doe\"\n        },\n        emergencyPhone: {\n            name: \"emergencyPhone\",\n            label: \"Emergency Phone\",\n            type: \"text\",\n            errorMsg: \"Emergency Phone is required\",\n            default: \"098-765-4321\"\n        },\n        insuranceInformation: {\n            name: \"insuranceInformation\",\n            label: \"Insurance Information\",\n            type: \"text\",\n            errorMsg: \"Insurance Information is required\",\n            default: \"Provider X - Policy 1234\"\n        },\n        previousDiagnoses: {\n            name: \"previousDiagnoses\",\n            label: \"Previous Diagnoses\",\n            type: \"text\",\n            errorMsg: \"Previous Diagnoses is required\",\n            default: \"None\"\n        },\n        pastSurgeries: {\n            name: \"pastSurgeries\",\n            label: \"Past Surgeries\",\n            type: \"text\",\n            errorMsg: \"Past Surgeries is required\",\n            default: \"Appendectomy\"\n        },\n        currentMedications: {\n            name: \"currentMedications\",\n            label: \"Current Medications\",\n            type: \"text\",\n            errorMsg: \"Current Medications is required\",\n            default: \"Ibuprofen\"\n        },\n        allergies: {\n            name: \"allergies\",\n            label: \"Allergies\",\n            type: \"text\",\n            errorMsg: \"Allergies is required\",\n            default: \"None\"\n        },\n        medicalNotes: {\n            name: \"medicalNotes\",\n            label: \"Medical Notes\",\n            type: \"text\",\n            errorMsg: \"Medical Notes is required\",\n            default: \"N/A\"\n        },\n        reasonOfHospitalization: {\n            name: \"reasonOfHospitalization\",\n            label: \"Reason of Hospitalization\",\n            type: \"text\",\n            errorMsg: \"Reason of Hospitalization is required\",\n            default: \"Routine Checkup\"\n        },\n        dateOfAdmission: {\n            name: \"dateOfAdmission\",\n            label: \"Date of Admission\",\n            type: \"date\",\n            errorMsg: \"Date of Admission is required\",\n            default: \"2024-07-01\"\n        },\n        dateOfDischarge: {\n            name: \"dateOfDischarge\",\n            label: \"Date of Discharge\",\n            type: \"date\",\n            errorMsg: \"Date of Discharge is required\",\n            default: \"2024-07-10\"\n        },\n        lengthOfStay: {\n            name: \"lengthOfStay\",\n            label: \"Length of Stay\",\n            type: \"text\",\n            errorMsg: \"Length of Stay is required\",\n            default: \"10 days\"\n        },\n        prcedurePerformed: {\n            name: \"prcedurePerformed\",\n            label: \"Procedure Performed\",\n            type: \"text\",\n            errorMsg: \"Procedure Performed is required\",\n            default: \"None\"\n        },\n        hospitalDischargeSummary: {\n            name: \"hospitalDischargeSummary\",\n            label: \"Hospital Discharge Summary\",\n            type: \"text\",\n            errorMsg: \"Hospital Discharge Summary is required\",\n            default: \"Patient stable\"\n        },\n        followUpInstructions: {\n            name: \"followUpInstructions\",\n            label: \"Follow Up Instructions\",\n            type: \"text\",\n            errorMsg: \"Follow Up Instructions is required\",\n            default: \"Follow up in 6 months\"\n        },\n        diet: {\n            name: \"diet\",\n            label: \"Diet\",\n            type: \"text\",\n            errorMsg: \"Diet is required\",\n            default: \"Balanced diet\"\n        },\n        activityLevel: {\n            name: \"activityLevel\",\n            label: \"Activity Level\",\n            type: \"text\",\n            errorMsg: \"Activity Level is required\",\n            default: \"Moderate\"\n        },\n        exerciseRoutine: {\n            name: \"exerciseRoutine\",\n            label: \"Exercise Routine\",\n            type: \"text\",\n            errorMsg: \"Exercise Routine is required\",\n            default: \"Jogging 3 times a week\"\n        },\n        smokingHabits: {\n            name: \"smokingHabits\",\n            label: \"Smoking Habits\",\n            type: \"text\",\n            errorMsg: \"Smoking Habits is required\",\n            default: \"Non-smoker\"\n        },\n        alcoholConsumption: {\n            name: \"alcoholConsumption\",\n            label: \"Alcohol Consumption\",\n            type: \"text\",\n            errorMsg: \"Alcohol Consumption is required\",\n            default: \"Occasional\"\n        },\n        otherLifestyleFactors: {\n            name: \"otherLifestyleFactors\",\n            label: \"Other Lifestyle Factors\",\n            type: \"text\",\n            errorMsg: \"Other Lifestyle Factors is required\",\n            default: \"None\"\n        }\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (form);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlc0NvbXBvbmVudHMvcGFnZXMvdXNlcnMvbmV3LXVzZXIvc2NoZW1hcy9mb3JtLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPO0lBQ1hDLFFBQVE7SUFDUkMsV0FBVztRQUNUQyxXQUFXO1lBQ1RDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0FDLFdBQVc7WUFDVEwsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7UUFDQUUsVUFBVTtZQUNSTixNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFNBQVM7UUFDWDtRQUNBRyxRQUFRO1lBQ05QLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0FJLFFBQVE7WUFDTlIsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7UUFDQUssYUFBYTtZQUNYVCxNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFNBQVM7UUFDWDtRQUNBTSxPQUFPO1lBQ0xWLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0FPLEtBQUs7WUFDSFgsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7UUFDQVEsT0FBTztZQUNMWixNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFNBQVM7UUFDWDtRQUNBUyxrQkFBa0I7WUFDaEJiLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0FVLGdCQUFnQjtZQUNkZCxNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFNBQVM7UUFDWDtRQUNBVyxzQkFBc0I7WUFDcEJmLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0FZLG1CQUFtQjtZQUNqQmhCLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0FhLGVBQWU7WUFDYmpCLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0FjLG9CQUFvQjtZQUNsQmxCLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0FlLFdBQVc7WUFDVG5CLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0FnQixjQUFjO1lBQ1pwQixNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFNBQVM7UUFDWDtRQUNBaUIseUJBQXlCO1lBQ3ZCckIsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7UUFDQWtCLGlCQUFpQjtZQUNmdEIsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7UUFDQW1CLGlCQUFpQjtZQUNmdkIsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7UUFDQW9CLGNBQWM7WUFDWnhCLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0FxQixtQkFBbUI7WUFDakJ6QixNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFNBQVM7UUFDWDtRQUNBc0IsMEJBQTBCO1lBQ3hCMUIsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7UUFDQXVCLHNCQUFzQjtZQUNwQjNCLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0F3QixNQUFNO1lBQ0o1QixNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFNBQVM7UUFDWDtRQUNBeUIsZUFBZTtZQUNiN0IsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7UUFDQTBCLGlCQUFpQjtZQUNmOUIsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7UUFDQTJCLGVBQWU7WUFDYi9CLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsU0FBUztRQUNYO1FBQ0E0QixvQkFBb0I7WUFDbEJoQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFNBQVM7UUFDWDtRQUNBNkIsdUJBQXVCO1lBQ3JCakMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1FBQ1g7SUFDRjtBQUNGO0FBRUEsK0RBQWVSLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXNDb21wb25lbnRzL3BhZ2VzL3VzZXJzL25ldy11c2VyL3NjaGVtYXMvZm9ybS5qcz85NzIxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSB7XG4gIGZvcm1JZDogJ25ldy11c2VyLWZvcm0nLFxuICBmb3JtRmllbGQ6IHtcbiAgICBwYXRpZW50SUQ6IHtcbiAgICAgIG5hbWU6ICdwYXRpZW50SUQnLFxuICAgICAgbGFiZWw6ICdQYXRpZW50IElEJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGVycm9yTXNnOiAnUGF0aWVudCBJRCBpcyByZXF1aXJlZC4nLFxuICAgICAgZGVmYXVsdDogJzEyMzQ1NicsXG4gICAgfSxcbiAgICBmaXJzdE5hbWU6IHtcbiAgICAgIG5hbWU6ICdmaXJzdE5hbWUnLFxuICAgICAgbGFiZWw6ICdGaXJzdCBOYW1lJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGVycm9yTXNnOiAnRmlyc3QgbmFtZSBpcyByZXF1aXJlZC4nLFxuICAgICAgZGVmYXVsdDogJ0pvaG4nLFxuICAgIH0sXG4gICAgbGFzdE5hbWU6IHtcbiAgICAgIG5hbWU6ICdsYXN0TmFtZScsXG4gICAgICBsYWJlbDogJ0xhc3QgTmFtZScsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBlcnJvck1zZzogJ0xhc3QgbmFtZSBpcyByZXF1aXJlZC4nLFxuICAgICAgZGVmYXVsdDogJ0RvZScsXG4gICAgfSxcbiAgICB3ZWlnaHQ6IHtcbiAgICAgIG5hbWU6ICd3ZWlnaHQnLFxuICAgICAgbGFiZWw6ICdXZWlnaHQnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZXJyb3JNc2c6ICdXZWlnaHQgaXMgcmVxdWlyZWQuJyxcbiAgICAgIGRlZmF1bHQ6ICc5NSBrZycsXG4gICAgfSxcbiAgICBoZWlnaHQ6IHtcbiAgICAgIG5hbWU6ICdoZWlnaHQnLFxuICAgICAgbGFiZWw6ICdIZWlnaHQnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZXJyb3JNc2c6ICdIZWlnaHQgaXMgcmVxdWlyZWQuJyxcbiAgICAgIGRlZmF1bHQ6ICcxODAgY20nLFxuICAgIH0sXG4gICAgZGF0ZU9mQmlydGg6IHtcbiAgICAgIG5hbWU6ICdkYXRlT2ZCaXJ0aCcsXG4gICAgICBsYWJlbDogJ0RhdGUgb2YgQmlydGgnLFxuICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgZXJyb3JNc2c6ICdEYXRlIG9mIGJpcnRoIGlzIHJlcXVpcmVkJyxcbiAgICAgIGRlZmF1bHQ6ICcxOTkwLTAxLTAxJyxcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgbGFiZWw6ICdFbWFpbCcsXG4gICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgZXJyb3JNc2c6ICdFbWFpbCBpcyByZXF1aXJlZCcsXG4gICAgICBkZWZhdWx0OiAnam9obmRvZUBleGFtcGxlLmNvbScsXG4gICAgfSxcbiAgICBzZXg6IHtcbiAgICAgIG5hbWU6ICdzZXgnLFxuICAgICAgbGFiZWw6ICdTZXgnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZXJyb3JNc2c6ICdTZXggaXMgcmVxdWlyZWQnLFxuICAgICAgZGVmYXVsdDogJ01hbGUnLFxuICAgIH0sXG4gICAgcGhvbmU6IHtcbiAgICAgIG5hbWU6ICdwaG9uZScsXG4gICAgICBsYWJlbDogJ1Bob25lJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGVycm9yTXNnOiAnUGhvbmUgaXMgcmVxdWlyZWQnLFxuICAgICAgZGVmYXVsdDogJzEyMy00NTYtNzg5MCcsXG4gICAgfSxcbiAgICBlbWVyZ2VuY3lDb250YWN0OiB7XG4gICAgICBuYW1lOiAnZW1lcmdlbmN5Q29udGFjdCcsXG4gICAgICBsYWJlbDogJ0VtZXJnZW5jeSBDb250YWN0JyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGVycm9yTXNnOiAnRW1lcmdlbmN5IENvbnRhY3QgaXMgcmVxdWlyZWQnLFxuICAgICAgZGVmYXVsdDogJ0phbmUgRG9lJyxcbiAgICB9LFxuICAgIGVtZXJnZW5jeVBob25lOiB7XG4gICAgICBuYW1lOiAnZW1lcmdlbmN5UGhvbmUnLFxuICAgICAgbGFiZWw6ICdFbWVyZ2VuY3kgUGhvbmUnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZXJyb3JNc2c6ICdFbWVyZ2VuY3kgUGhvbmUgaXMgcmVxdWlyZWQnLFxuICAgICAgZGVmYXVsdDogJzA5OC03NjUtNDMyMScsXG4gICAgfSxcbiAgICBpbnN1cmFuY2VJbmZvcm1hdGlvbjoge1xuICAgICAgbmFtZTogJ2luc3VyYW5jZUluZm9ybWF0aW9uJyxcbiAgICAgIGxhYmVsOiAnSW5zdXJhbmNlIEluZm9ybWF0aW9uJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGVycm9yTXNnOiAnSW5zdXJhbmNlIEluZm9ybWF0aW9uIGlzIHJlcXVpcmVkJyxcbiAgICAgIGRlZmF1bHQ6ICdQcm92aWRlciBYIC0gUG9saWN5IDEyMzQnLFxuICAgIH0sXG4gICAgcHJldmlvdXNEaWFnbm9zZXM6IHtcbiAgICAgIG5hbWU6ICdwcmV2aW91c0RpYWdub3NlcycsXG4gICAgICBsYWJlbDogJ1ByZXZpb3VzIERpYWdub3NlcycsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBlcnJvck1zZzogJ1ByZXZpb3VzIERpYWdub3NlcyBpcyByZXF1aXJlZCcsXG4gICAgICBkZWZhdWx0OiAnTm9uZScsXG4gICAgfSxcbiAgICBwYXN0U3VyZ2VyaWVzOiB7XG4gICAgICBuYW1lOiAncGFzdFN1cmdlcmllcycsXG4gICAgICBsYWJlbDogJ1Bhc3QgU3VyZ2VyaWVzJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGVycm9yTXNnOiAnUGFzdCBTdXJnZXJpZXMgaXMgcmVxdWlyZWQnLFxuICAgICAgZGVmYXVsdDogJ0FwcGVuZGVjdG9teScsXG4gICAgfSxcbiAgICBjdXJyZW50TWVkaWNhdGlvbnM6IHtcbiAgICAgIG5hbWU6ICdjdXJyZW50TWVkaWNhdGlvbnMnLFxuICAgICAgbGFiZWw6ICdDdXJyZW50IE1lZGljYXRpb25zJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGVycm9yTXNnOiAnQ3VycmVudCBNZWRpY2F0aW9ucyBpcyByZXF1aXJlZCcsXG4gICAgICBkZWZhdWx0OiAnSWJ1cHJvZmVuJyxcbiAgICB9LFxuICAgIGFsbGVyZ2llczoge1xuICAgICAgbmFtZTogJ2FsbGVyZ2llcycsXG4gICAgICBsYWJlbDogJ0FsbGVyZ2llcycsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBlcnJvck1zZzogJ0FsbGVyZ2llcyBpcyByZXF1aXJlZCcsXG4gICAgICBkZWZhdWx0OiAnTm9uZScsXG4gICAgfSxcbiAgICBtZWRpY2FsTm90ZXM6IHtcbiAgICAgIG5hbWU6ICdtZWRpY2FsTm90ZXMnLFxuICAgICAgbGFiZWw6ICdNZWRpY2FsIE5vdGVzJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGVycm9yTXNnOiAnTWVkaWNhbCBOb3RlcyBpcyByZXF1aXJlZCcsXG4gICAgICBkZWZhdWx0OiAnTi9BJyxcbiAgICB9LFxuICAgIHJlYXNvbk9mSG9zcGl0YWxpemF0aW9uOiB7XG4gICAgICBuYW1lOiAncmVhc29uT2ZIb3NwaXRhbGl6YXRpb24nLFxuICAgICAgbGFiZWw6ICdSZWFzb24gb2YgSG9zcGl0YWxpemF0aW9uJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGVycm9yTXNnOiAnUmVhc29uIG9mIEhvc3BpdGFsaXphdGlvbiBpcyByZXF1aXJlZCcsXG4gICAgICBkZWZhdWx0OiAnUm91dGluZSBDaGVja3VwJyxcbiAgICB9LFxuICAgIGRhdGVPZkFkbWlzc2lvbjoge1xuICAgICAgbmFtZTogJ2RhdGVPZkFkbWlzc2lvbicsXG4gICAgICBsYWJlbDogJ0RhdGUgb2YgQWRtaXNzaW9uJyxcbiAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgIGVycm9yTXNnOiAnRGF0ZSBvZiBBZG1pc3Npb24gaXMgcmVxdWlyZWQnLFxuICAgICAgZGVmYXVsdDogJzIwMjQtMDctMDEnLFxuICAgIH0sXG4gICAgZGF0ZU9mRGlzY2hhcmdlOiB7XG4gICAgICBuYW1lOiAnZGF0ZU9mRGlzY2hhcmdlJyxcbiAgICAgIGxhYmVsOiAnRGF0ZSBvZiBEaXNjaGFyZ2UnLFxuICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgZXJyb3JNc2c6ICdEYXRlIG9mIERpc2NoYXJnZSBpcyByZXF1aXJlZCcsXG4gICAgICBkZWZhdWx0OiAnMjAyNC0wNy0xMCcsXG4gICAgfSxcbiAgICBsZW5ndGhPZlN0YXk6IHtcbiAgICAgIG5hbWU6ICdsZW5ndGhPZlN0YXknLFxuICAgICAgbGFiZWw6ICdMZW5ndGggb2YgU3RheScsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBlcnJvck1zZzogJ0xlbmd0aCBvZiBTdGF5IGlzIHJlcXVpcmVkJyxcbiAgICAgIGRlZmF1bHQ6ICcxMCBkYXlzJyxcbiAgICB9LFxuICAgIHByY2VkdXJlUGVyZm9ybWVkOiB7XG4gICAgICBuYW1lOiAncHJjZWR1cmVQZXJmb3JtZWQnLFxuICAgICAgbGFiZWw6ICdQcm9jZWR1cmUgUGVyZm9ybWVkJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGVycm9yTXNnOiAnUHJvY2VkdXJlIFBlcmZvcm1lZCBpcyByZXF1aXJlZCcsXG4gICAgICBkZWZhdWx0OiAnTm9uZScsXG4gICAgfSxcbiAgICBob3NwaXRhbERpc2NoYXJnZVN1bW1hcnk6IHtcbiAgICAgIG5hbWU6ICdob3NwaXRhbERpc2NoYXJnZVN1bW1hcnknLFxuICAgICAgbGFiZWw6ICdIb3NwaXRhbCBEaXNjaGFyZ2UgU3VtbWFyeScsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBlcnJvck1zZzogJ0hvc3BpdGFsIERpc2NoYXJnZSBTdW1tYXJ5IGlzIHJlcXVpcmVkJyxcbiAgICAgIGRlZmF1bHQ6ICdQYXRpZW50IHN0YWJsZScsXG4gICAgfSxcbiAgICBmb2xsb3dVcEluc3RydWN0aW9uczoge1xuICAgICAgbmFtZTogJ2ZvbGxvd1VwSW5zdHJ1Y3Rpb25zJyxcbiAgICAgIGxhYmVsOiAnRm9sbG93IFVwIEluc3RydWN0aW9ucycsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBlcnJvck1zZzogJ0ZvbGxvdyBVcCBJbnN0cnVjdGlvbnMgaXMgcmVxdWlyZWQnLFxuICAgICAgZGVmYXVsdDogJ0ZvbGxvdyB1cCBpbiA2IG1vbnRocycsXG4gICAgfSxcbiAgICBkaWV0OiB7XG4gICAgICBuYW1lOiAnZGlldCcsXG4gICAgICBsYWJlbDogJ0RpZXQnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZXJyb3JNc2c6ICdEaWV0IGlzIHJlcXVpcmVkJyxcbiAgICAgIGRlZmF1bHQ6ICdCYWxhbmNlZCBkaWV0JyxcbiAgICB9LFxuICAgIGFjdGl2aXR5TGV2ZWw6IHtcbiAgICAgIG5hbWU6ICdhY3Rpdml0eUxldmVsJyxcbiAgICAgIGxhYmVsOiAnQWN0aXZpdHkgTGV2ZWwnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZXJyb3JNc2c6ICdBY3Rpdml0eSBMZXZlbCBpcyByZXF1aXJlZCcsXG4gICAgICBkZWZhdWx0OiAnTW9kZXJhdGUnLFxuICAgIH0sXG4gICAgZXhlcmNpc2VSb3V0aW5lOiB7XG4gICAgICBuYW1lOiAnZXhlcmNpc2VSb3V0aW5lJyxcbiAgICAgIGxhYmVsOiAnRXhlcmNpc2UgUm91dGluZScsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBlcnJvck1zZzogJ0V4ZXJjaXNlIFJvdXRpbmUgaXMgcmVxdWlyZWQnLFxuICAgICAgZGVmYXVsdDogJ0pvZ2dpbmcgMyB0aW1lcyBhIHdlZWsnLFxuICAgIH0sXG4gICAgc21va2luZ0hhYml0czoge1xuICAgICAgbmFtZTogJ3Ntb2tpbmdIYWJpdHMnLFxuICAgICAgbGFiZWw6ICdTbW9raW5nIEhhYml0cycsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBlcnJvck1zZzogJ1Ntb2tpbmcgSGFiaXRzIGlzIHJlcXVpcmVkJyxcbiAgICAgIGRlZmF1bHQ6ICdOb24tc21va2VyJyxcbiAgICB9LFxuICAgIGFsY29ob2xDb25zdW1wdGlvbjoge1xuICAgICAgbmFtZTogJ2FsY29ob2xDb25zdW1wdGlvbicsXG4gICAgICBsYWJlbDogJ0FsY29ob2wgQ29uc3VtcHRpb24nLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZXJyb3JNc2c6ICdBbGNvaG9sIENvbnN1bXB0aW9uIGlzIHJlcXVpcmVkJyxcbiAgICAgIGRlZmF1bHQ6ICdPY2Nhc2lvbmFsJyxcbiAgICB9LFxuICAgIG90aGVyTGlmZXN0eWxlRmFjdG9yczoge1xuICAgICAgbmFtZTogJ290aGVyTGlmZXN0eWxlRmFjdG9ycycsXG4gICAgICBsYWJlbDogJ090aGVyIExpZmVzdHlsZSBGYWN0b3JzJyxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGVycm9yTXNnOiAnT3RoZXIgTGlmZXN0eWxlIEZhY3RvcnMgaXMgcmVxdWlyZWQnLFxuICAgICAgZGVmYXVsdDogJ05vbmUnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtO1xuIl0sIm5hbWVzIjpbImZvcm0iLCJmb3JtSWQiLCJmb3JtRmllbGQiLCJwYXRpZW50SUQiLCJuYW1lIiwibGFiZWwiLCJ0eXBlIiwiZXJyb3JNc2ciLCJkZWZhdWx0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ3ZWlnaHQiLCJoZWlnaHQiLCJkYXRlT2ZCaXJ0aCIsImVtYWlsIiwic2V4IiwicGhvbmUiLCJlbWVyZ2VuY3lDb250YWN0IiwiZW1lcmdlbmN5UGhvbmUiLCJpbnN1cmFuY2VJbmZvcm1hdGlvbiIsInByZXZpb3VzRGlhZ25vc2VzIiwicGFzdFN1cmdlcmllcyIsImN1cnJlbnRNZWRpY2F0aW9ucyIsImFsbGVyZ2llcyIsIm1lZGljYWxOb3RlcyIsInJlYXNvbk9mSG9zcGl0YWxpemF0aW9uIiwiZGF0ZU9mQWRtaXNzaW9uIiwiZGF0ZU9mRGlzY2hhcmdlIiwibGVuZ3RoT2ZTdGF5IiwicHJjZWR1cmVQZXJmb3JtZWQiLCJob3NwaXRhbERpc2NoYXJnZVN1bW1hcnkiLCJmb2xsb3dVcEluc3RydWN0aW9ucyIsImRpZXQiLCJhY3Rpdml0eUxldmVsIiwiZXhlcmNpc2VSb3V0aW5lIiwic21va2luZ0hhYml0cyIsImFsY29ob2xDb25zdW1wdGlvbiIsIm90aGVyTGlmZXN0eWxlRmFjdG9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pagesComponents/pages/users/new-user/schemas/form.js\n"));

/***/ })

});