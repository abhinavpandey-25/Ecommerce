webpackHotUpdate_N_E("pages/create",{

/***/ "./helper/baseURL.js":
/*!***************************!*\
  !*** ./helper/baseURL.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {//depending on the environment ki whether hamara project deployed h(production env) m h ya nhi we will decide the url
var baseURL = process.env === 'production' ? "https://mystore_abhi.vercel.app" : "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseURL);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVyL2Jhc2VVUkwuanMiXSwibmFtZXMiOlsiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0EsSUFBTUEsT0FBTyxHQUFDQyxPQUFPLENBQUNDLEdBQVIsS0FBYyxZQUFkLEdBQTJCLGlDQUEzQixHQUE2RCx1QkFBM0U7QUFDZUYsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY3JlYXRlLjJhMDFjY2Y4Njg1ZDUwYjQyNzM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RlcGVuZGluZyBvbiB0aGUgZW52aXJvbm1lbnQga2kgd2hldGhlciBoYW1hcmEgcHJvamVjdCBkZXBsb3llZCBoKHByb2R1Y3Rpb24gZW52KSBtIGggeWEgbmhpIHdlIHdpbGwgZGVjaWRlIHRoZSB1cmxcclxuY29uc3QgYmFzZVVSTD1wcm9jZXNzLmVudj09PSdwcm9kdWN0aW9uJz9cImh0dHBzOi8vbXlzdG9yZV9hYmhpLnZlcmNlbC5hcHBcIjpcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5leHBvcnQgZGVmYXVsdCBiYXNlVVJMOyAiXSwic291cmNlUm9vdCI6IiJ9