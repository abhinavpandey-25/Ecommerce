webpackHotUpdate_N_E("pages/create",{

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helper/baseURL */ "./helper/baseURL.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ECommerce\\mystore\\pages\\create.js",
    _this = undefined,
    _s = $RefreshSig$();





var create = function create() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); //this create page should be accesed by onlly the admin as user cannnort add the items in the website

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      price = _useState2[0],
      setPrice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      media = _useState3[0],
      setMedia = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      description = _useState4[0],
      setDescription = _useState4[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var location, res, res2;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log("submit");
              _context.next = 4;
              return fileUpload();

            case 4:
              location = _context.sent;
              _context.next = 7;
              return fetch("".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_4__["default"], "/api/products"), {
                method: "POST" //hame header bhi specify krna padega ki frontend se kis type ka data bheja jyga from the frontend\
                ,
                headers: {
                  'Content-Type': 'application/json' //server apne aap isko dekh k toh sari incoming request ko json m parse kr dega

                },
                //when sending the data to the server the data has to be a string
                //whne receving data from a wev server the data is always a string then parse the data to become a js obj
                body: JSON.stringify({
                  name: name,
                  price: price,
                  media: location,
                  //for storing image ham image phele upload krenge on cloudinary and then woh url save krenge and use access krenge
                  description: description
                })
              });

            case 7:
              res = _context.sent;
              _context.next = 10;
              return res.json();

            case 10:
              res2 = _context.sent;

              if (res2.error) {
                M.toast({
                  html: res2.error,
                  classes: "red"
                });
              } else {
                M.toast({
                  html: "Info saved successfully",
                  classes: "green"
                });
              }

              router.push('/');

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var fileUpload = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var formData, res, res2;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              formData = new FormData();
              formData.append('file', media);
              formData.append('upload_preset', 'mystore2');
              formData.append('cloud_name', 'storagearea');
              _context2.next = 6;
              return fetch('https://api.cloudinary.com/v1_1/storagearea/image/upload', {
                method: "POST",
                body: formData
              });

            case 6:
              res = _context2.sent;
              _context2.next = 9;
              return res.json();

            case 9:
              res2 = _context2.sent;
              return _context2.abrupt("return", res2.url);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fileUpload() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
    className: "container",
    onSubmit: function onSubmit(e) {
      return handleSubmit(e);
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
      type: "text",
      placeholder: "Enter Name",
      value: name,
      onChange: function onChange(e) {
        // console.log(e.target.value);    
        setName(function () {
          return e.target.value;
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
      type: "text",
      value: price,
      placeholder: "Enter Price",
      onChange: function onChange(e) {
        setPrice(function () {
          return e.target.value;
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "file-field input-field",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "btn",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          children: "File"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
          type: "file",
          placeholder: "Choose",
          onChange: function onChange(e) {
            setMedia(function () {
              return e.target.files[0];
            });
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        className: "responsive-img ",
        src: media ? URL.createObjectURL(media) : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("textarea", {
      value: description,
      placeholder: "add some description",
      className: "materialize-textarea",
      onChange: function onChange(e) {
        return setDescription(function () {
          return e.target.value;
        });
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      type: "submit",
      className: "waves-effect waves-light btn",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
        className: "material-icons left",
        children: "send"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 68
      }, _this), "Submit"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
}; //ctx me server se jo bhi a rha tha jese ham ne server se token and user in which i passed user role user email and user
//user password  and ye data server p stringify m tha so we nned to parse the object to json


_s(create, "OoK0qcCMLk8Bjg3o4yg6+eBXpA8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (create);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJwcmljZSIsInNldFByaWNlIiwibWVkaWEiLCJzZXRNZWRpYSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZmlsZVVwbG9hZCIsImxvY2F0aW9uIiwiZmV0Y2giLCJiYXNlVXJsIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsInJlczIiLCJlcnJvciIsIk0iLCJ0b2FzdCIsImh0bWwiLCJjbGFzc2VzIiwicHVzaCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ1cmwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsTUFBTSxHQUFDLFNBQVBBLE1BQU8sR0FBSTtBQUFBOztBQUNmLE1BQU1DLE1BQU0sR0FBQ0MsNkRBQVMsRUFBdEIsQ0FEZSxDQUVmOztBQUZlLGtCQUdRQyxzREFBUSxDQUFDLEVBQUQsQ0FIaEI7QUFBQSxNQUdOQyxJQUhNO0FBQUEsTUFHREMsT0FIQzs7QUFBQSxtQkFJVUYsc0RBQVEsQ0FBQyxFQUFELENBSmxCO0FBQUEsTUFJTkcsS0FKTTtBQUFBLE1BSUFDLFFBSkE7O0FBQUEsbUJBS1NKLHNEQUFRLENBQUMsRUFBRCxDQUxqQjtBQUFBLE1BS1BLLEtBTE87QUFBQSxNQUtEQyxRQUxDOztBQUFBLG1CQU1zQk4sc0RBQVEsQ0FBQyxFQUFELENBTjlCO0FBQUEsTUFNTk8sV0FOTTtBQUFBLE1BTU1DLGNBTk47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QUFzQixlQUFTLEVBQUMsOEJBQWhDO0FBQUEsOEJBQStEO0FBQUcsaUJBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREE7QUFzQkgsQ0F4RUQsQyxDQTBFQTtBQUNBOzs7R0EzRU14QyxNO1VBQ1NFLHFEOzs7O0FBNkZBRixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jcmVhdGUuMGFhMjc1YmVkZGU1YzAxNjUwMjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi4vaGVscGVyL2Jhc2VVUkwnXHJcbmltcG9ydCB7cGFyc2VDb29raWVzfSBmcm9tICdub29raWVzJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmNvbnN0IGNyZWF0ZT0oKT0+e1xyXG4gIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKVxyXG4gIC8vdGhpcyBjcmVhdGUgcGFnZSBzaG91bGQgYmUgYWNjZXNlZCBieSBvbmxseSB0aGUgYWRtaW4gYXMgdXNlciBjYW5ubm9ydCBhZGQgdGhlIGl0ZW1zIGluIHRoZSB3ZWJzaXRlXHJcbiAgICBjb25zdCBbbmFtZSxzZXROYW1lXT11c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3ByaWNlLHNldFByaWNlXT11c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3RbbWVkaWEsc2V0TWVkaWFdPXVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sc2V0RGVzY3JpcHRpb25dPXVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQ9YXN5bmMoZSk9PntcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKFwic3VibWl0XCIpXHJcbiAgICBjb25zdCBsb2NhdGlvbj1hd2FpdCBmaWxlVXBsb2FkKCk7XHJcbiAgICBjb25zdCByZXM9ICBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvcHJvZHVjdHNgLHtcclxuICAgICAgICBtZXRob2Q6XCJQT1NUXCJcclxuICAgICAgICAvL2hhbWUgaGVhZGVyIGJoaSBzcGVjaWZ5IGtybmEgcGFkZWdhIGtpIGZyb250ZW5kIHNlIGtpcyB0eXBlIGthIGRhdGEgYmhlamEganlnYSBmcm9tIHRoZSBmcm9udGVuZFxcXHJcbiAgICAgICAgLGhlYWRlcnM6e1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAvL3NlcnZlciBhcG5lIGFhcCBpc2tvIGRla2ggayB0b2ggc2FyaSBpbmNvbWluZyByZXF1ZXN0IGtvIGpzb24gbSBwYXJzZSBrciBkZWdhXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL3doZW4gc2VuZGluZyB0aGUgZGF0YSB0byB0aGUgc2VydmVyIHRoZSBkYXRhIGhhcyB0byBiZSBhIHN0cmluZ1xyXG4gICAgICAgIC8vd2huZSByZWNldmluZyBkYXRhIGZyb20gYSB3ZXYgc2VydmVyIHRoZSBkYXRhIGlzIGFsd2F5cyBhIHN0cmluZyB0aGVuIHBhcnNlIHRoZSBkYXRhIHRvIGJlY29tZSBhIGpzIG9ialxyXG4gICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgbmFtZTpuYW1lLFxyXG4gICAgICAgICAgcHJpY2U6cHJpY2UsXHJcbiAgICAgICAgICBtZWRpYTpsb2NhdGlvbixcclxuICAgICAgICAgIC8vZm9yIHN0b3JpbmcgaW1hZ2UgaGFtIGltYWdlIHBoZWxlIHVwbG9hZCBrcmVuZ2Ugb24gY2xvdWRpbmFyeSBhbmQgdGhlbiB3b2ggdXJsIHNhdmUga3JlbmdlIGFuZCB1c2UgYWNjZXNzIGtyZW5nZVxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ZGVzY3JpcHRpb25cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgY29uc3QgcmVzMj1hd2FpdCByZXMuanNvbigpO1xyXG4gICAgaWYocmVzMi5lcnJvcil7XHJcbiAgICAgIE0udG9hc3Qoe2h0bWw6IHJlczIuZXJyb3IsY2xhc3NlczpcInJlZFwifSlcclxuICAgIH0gICAgXHJcbiAgICBlbHNle1xyXG4gICAgICBNLnRvYXN0KHtodG1sOiBcIkluZm8gc2F2ZWQgc3VjY2Vzc2Z1bGx5XCIsY2xhc3NlczpcImdyZWVuXCJ9KVxyXG4gICAgfVxyXG4gICAgcm91dGVyLnB1c2goJy8nKVxyXG5cclxuIH1cclxuICBjb25zdCBmaWxlVXBsb2FkPWFzeW5jKCk9PntcclxuICAgIGNvbnN0IGZvcm1EYXRhPW5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJyxtZWRpYSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3VwbG9hZF9wcmVzZXQnLCdteXN0b3JlMicpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdjbG91ZF9uYW1lJywnc3RvcmFnZWFyZWEnKTtcclxuICAgIGNvbnN0IHJlcz1hd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY2xvdWRpbmFyeS5jb20vdjFfMS9zdG9yYWdlYXJlYS9pbWFnZS91cGxvYWQnLHtcclxuICAgICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgICBib2R5OmZvcm1EYXRhXHJcbiAgICB9KVxyXG4gICAgY29uc3QgcmVzMj1hd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHJlczIudXJsXHJcbiAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgb25TdWJtaXQ9eyhlKT0+aGFuZGxlU3VibWl0KGUpfT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIE5hbWVcIiAgIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpPT57XHJcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpOyAgICBcclxuICAgICAgICAgc2V0TmFtZSgoKT0+ZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19Lz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cHJpY2V9IHBsYWNlaG9sZGVyPVwiRW50ZXIgUHJpY2VcIiBvbkNoYW5nZT17KGUpPT57XHJcbiAgICAgICAgICAgIHNldFByaWNlKCgpPT5lLnRhcmdldC52YWx1ZSlcclxuICAgICAgICB9fS8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWZpZWxkIGlucHV0LWZpZWxkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XHJcbiAgICAgICAgPHNwYW4+RmlsZTwvc3Bhbj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBwbGFjZWhvbGRlcj1cIkNob29zZVwiIG9uQ2hhbmdlPXsoZSk9PntzZXRNZWRpYSgoKT0+ZS50YXJnZXQuZmlsZXNbMF0pfX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGltZyBjbGFzc05hbWU9XCJyZXNwb25zaXZlLWltZyBcIiAgc3JjPXttZWRpYT9VUkwuY3JlYXRlT2JqZWN0VVJMKG1lZGlhKTpcIlwifS8+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICB7LyogdG8gZ2V0IHRoZSBpbWFnZSBhZnRlciB1cGxvYWQgKi99XHJcbiAgICA8dGV4dGFyZWEgIHZhbHVlPXtkZXNjcmlwdGlvbn0gcGxhY2Vob2xkZXI9e1wiYWRkIHNvbWUgZGVzY3JpcHRpb25cIn0gY2xhc3NOYW1lPVwibWF0ZXJpYWxpemUtdGV4dGFyZWFcIiBvbkNoYW5nZT17KGUpPT5zZXREZXNjcmlwdGlvbigoKT0+ZS50YXJnZXQudmFsdWUpfT48L3RleHRhcmVhPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0blwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIGxlZnRcIj5zZW5kPC9pPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG4vL2N0eCBtZSBzZXJ2ZXIgc2Ugam8gYmhpIGEgcmhhIHRoYSBqZXNlIGhhbSBuZSBzZXJ2ZXIgc2UgdG9rZW4gYW5kIHVzZXIgaW4gd2hpY2ggaSBwYXNzZWQgdXNlciByb2xlIHVzZXIgZW1haWwgYW5kIHVzZXJcclxuLy91c2VyIHBhc3N3b3JkICBhbmQgeWUgZGF0YSBzZXJ2ZXIgcCBzdHJpbmdpZnkgbSB0aGEgc28gd2Ugbm5lZCB0byBwYXJzZSB0aGUgb2JqZWN0IHRvIGpzb25cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpe1xyXG4gICAgICBjb25zdCBjb29raWU9cGFyc2VDb29raWVzKGN0eCk7XHJcbiAgICAgIGNvbnN0IHVzZXI9Y29va2llLnVzZXI/SlNPTi5wYXJzZShjb29raWUudXNlcik6XCJcIjtcclxuICAgICAgaWYodXNlci5yb2xlIT1cInJvb3RcIiYmdXNlci5yb2xlIT1cImFkbWluXCIpe1xyXG4gICAgICAgICAgY29uc3Qge3Jlc309Y3R4O1xyXG4gICAgICAgICAgLy90aGUgc3RhdHVzIGNvZGUgZm9yIHJlZGlyZWN0IGlzIDMwMlxyXG4gICAgICAgICAgcmVzLndyaXRlSGVhZCgzMDIse0xvY2F0aW9uOlwiL1wifSk7XHJcbiAgICAgICAgICByZXMuZW5kKCk7IFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL3BhcnNlY29va2llcyBzYXJpIGNvb2tpZXMgcmV0dXJuIGtydGEgXHJcbiAgICAgIC8vc3RhdHVzIGNvZGUgZm9yIHJlZGlyZWN0aW5nIDMwMlxyXG4gIFxyXG4gIHJldHVybntcclxuICAgICAgcHJvcHM6e31cclxuICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZTsiXSwic291cmNlUm9vdCI6IiJ9