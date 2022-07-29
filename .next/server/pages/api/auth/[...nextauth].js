"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    session: {\n        strategy: \"jwt\",\n        secret: \"ayC5ej+5fmSNxGt61XXH2uSa61wQgCr2dUwmAoDUzXs=\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            name: \"Custom Provider\",\n            async authorize (credentials) {\n                let { email , password  } = credentials;\n                console.log(credentials, \"for credentials\");\n                let data = {\n                    email: email,\n                    password: password\n                };\n                console.log(data, \"form email and password\");\n                let response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(\"http://192.168.1.5:2000/api/v1/auth/userLogIn\", data);\n                console.log(response, \"response\");\n                let user = response.data;\n                // console.log(user, \"data for user\")\n                let token = response.data.data;\n                // console.log(token, 'for token')\n                if (!token) {\n                    throw new Error(\"Invalid token\");\n                }\n                if (!(response.status == 200)) {\n                    throw new Error(\"Invalid Credentials\");\n                }\n                if (response.status == 200) {\n                    return user = {\n                        name: token,\n                        email: email\n                    };\n                }\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUNrQztBQUVuRSxpRUFBZUMsZ0RBQVEsQ0FBQztJQUN0QkUsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDREMsU0FBUyxFQUFFO1FBQ1RKLHNFQUFvQixDQUFDO1lBQ25CSyxJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLE1BQU1DLFNBQVMsRUFBQ0MsV0FBVyxFQUFFO2dCQUMzQixJQUFJLEVBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdGLFdBQVc7Z0JBQ3JDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osV0FBVyxFQUFFLGlCQUFpQixDQUFDLENBQUM7Z0JBQzVDLElBQUlLLElBQUksR0FBRztvQkFBRUosS0FBSyxFQUFFQSxLQUFLO29CQUFFQyxRQUFRLEVBQUVBLFFBQVE7aUJBQUU7Z0JBQy9DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLHlCQUF5QixDQUFDLENBQUM7Z0JBQzdDLElBQUlDLFFBQVEsR0FBRyxNQUFNZixpREFBVSxDQUM3QiwrQ0FBK0MsRUFDL0NjLElBQUksQ0FDTDtnQkFDREYsT0FBTyxDQUFDQyxHQUFHLENBQUNFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDbEMsSUFBSUUsSUFBSSxHQUFHRixRQUFRLENBQUNELElBQUk7Z0JBQ3hCLHFDQUFxQztnQkFDckMsSUFBSUksS0FBSyxHQUFHSCxRQUFRLENBQUNELElBQUksQ0FBQ0EsSUFBSTtnQkFDOUIsa0NBQWtDO2dCQUVsQyxJQUFJLENBQUNJLEtBQUssRUFBRTtvQkFDVixNQUFNLElBQUlDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztpQkFDbEM7Z0JBQ0QsSUFBSSxDQUFDLENBQUNKLFFBQVEsQ0FBQ0ssTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUFFO29CQUM3QixNQUFNLElBQUlELEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2lCQUN4QztnQkFDRCxJQUFJSixRQUFRLENBQUNLLE1BQU0sSUFBSSxHQUFHLEVBQUU7b0JBQzFCLE9BQVFILElBQUksR0FBRzt3QkFDYlYsSUFBSSxFQUFFVyxLQUFLO3dCQUNYUixLQUFLLEVBQUVBLEtBQUs7cUJBQ2IsQ0FBRTtpQkFDSjthQUNGO1NBQ0YsQ0FBQztLQUNIO0NBQ0YsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhbHRoaS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICAgIHNlY3JldDogXCJheUM1ZWorNWZtU054R3Q2MVhYSDJ1U2E2MXdRZ0NyMmRVd21Bb0RVelhzPVwiLFxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVycyh7XG4gICAgICBuYW1lOiBcIkN1c3RvbSBQcm92aWRlclwiLFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGxldCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gY3JlZGVudGlhbHM7XG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWRlbnRpYWxzLCBcImZvciBjcmVkZW50aWFsc1wiKTtcbiAgICAgICAgbGV0IGRhdGEgPSB7IGVtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEsIFwiZm9ybSBlbWFpbCBhbmQgcGFzc3dvcmRcIik7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgXCJodHRwOi8vMTkyLjE2OC4xLjU6MjAwMC9hcGkvdjEvYXV0aC91c2VyTG9nSW5cIixcbiAgICAgICAgICBkYXRhXG4gICAgICAgICk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCBcInJlc3BvbnNlXCIpO1xuICAgICAgICBsZXQgdXNlciA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXIsIFwiZGF0YSBmb3IgdXNlclwiKVxuICAgICAgICBsZXQgdG9rZW4gPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRva2VuLCAnZm9yIHRva2VuJylcblxuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0b2tlblwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQ3JlZGVudGlhbHNcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICByZXR1cm4gKHVzZXIgPSB7XG4gICAgICAgICAgICBuYW1lOiB0b2tlbixcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVycyIsInNlc3Npb24iLCJzdHJhdGVneSIsInNlY3JldCIsInByb3ZpZGVycyIsIm5hbWUiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3BvbnNlIiwicG9zdCIsInVzZXIiLCJ0b2tlbiIsIkVycm9yIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();