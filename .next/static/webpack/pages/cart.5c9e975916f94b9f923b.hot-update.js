webpackHotUpdate_N_E("pages/cart",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
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
/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/baseURL */ "./helper/baseURL.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ "./node_modules/nookies/dist/index.js");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-stripe-checkout */ "./node_modules/react-stripe-checkout/dist/main.js");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ECommerce\\mystore\\pages\\cart.js",
    _this = undefined,
    _s = $RefreshSig$();









var cart = function cart(_ref) {
  _s();

  var error = _ref.error,
      products = _ref.products;

  var _parseCookies = Object(nookies__WEBPACK_IMPORTED_MODULE_4__["parseCookies"])(),
      token = _parseCookies.token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(products),
      newCart = _useState[0],
      setCart = _useState[1];

  var price = 0;

  if (!token) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "center-align",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
        children: "Please Login to view your cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          className: "btn",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 33
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }, _this);
  }

  var handleRemove = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(pid) {
      var res, res2;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_3__["default"], "/api/cart"), {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": token
                },
                body: JSON.stringify({
                  productId: pid
                })
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              res2 = _context.sent;
              setCart(res2);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleRemove(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var CartItems = function CartItems() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: newCart.map(function (items) {
        price = price + items.quantity * items.product.price;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "CartImages ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
            src: items.product.mediaURL
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            style: {
              margin: "10px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
              children: [items.product.name, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
              children: ["Quantity : ", items.quantity, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
              children: ["Price : ", items.product.price, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              className: "btn #ff6f00 amber darken-4",
              onClick: function onClick() {
                handleRemove(items.product._id);
              },
              children: "REMOVE"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)]
        }, items._id, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 14
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, _this);
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  if (error) {
    M.toast({
      html: error,
      classes: "red"
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("user");
    js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove("token");
    router.push('/login');
  }

  var handleCheckout = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(paymentInfo) {
      var res, res2;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch("".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_3__["default"], "/api/payment"), {
                method: "POST",
                headers: {
                  "Content-Type": 'application/json',
                  "Authorization": token
                },
                body: JSON.stringify({
                  paymentInfo: paymentInfo
                })
              });

            case 2:
              res = _context2.sent;
              _context2.next = 5;
              return res.json();

            case 5:
              res2 = _context2.sent;
              M.toast({
                html: res2.message,
                classes: "green"
              });
              router.push("/"); // console.log(res2);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleCheckout(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var TotalPrice = function TotalPrice() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "container",
      style: {
        display: "flex",
        justifyContent: "space-around"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h5", {
        children: [" Total Price : \u20B9 ", price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_9___default.a, {
        name: "MyStore",
        amount: price * 100,
        image: products.length > 0 ? products[0].product.mediaURL : "",
        currency: "INR",
        shippingAddress: true,
        zipCode: true,
        billingAddress: true,
        stripeKey: "pk_test_51Hy0XdFCPaJSpKjHAlxmpDRUSYSVFLDBaNdbr75P4HH7ZGxfMT1swPb183nadzpZvZsGi5qj3j71MsjvWVwCIZjx00R8zBNaWq",
        token: function token(paymentInfo) {
          return handleCheckout(paymentInfo);
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
          className: "btn",
          children: "Checkout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, _this);
  };

  if (products.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "center-align",
      children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
        children: "Your Cart Is Empty"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 47
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: "btn",
        onClick: function onClick() {
          router.push("/");
        },
        children: "Add Items in your cart "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 16
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(CartItems, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TotalPrice, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 9
  }, _this);
};

_s(cart, "2x5FXQ+S8oQBTBxtU6tpD8hrL30=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (cart);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJjYXJ0IiwiZXJyb3IiLCJwcm9kdWN0cyIsInBhcnNlQ29va2llcyIsInRva2VuIiwidXNlU3RhdGUiLCJuZXdDYXJ0Iiwic2V0Q2FydCIsInByaWNlIiwiaGFuZGxlUmVtb3ZlIiwicGlkIiwiZmV0Y2giLCJiYXNlVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvZHVjdElkIiwicmVzIiwianNvbiIsInJlczIiLCJDYXJ0SXRlbXMiLCJtYXAiLCJpdGVtcyIsInF1YW50aXR5IiwicHJvZHVjdCIsIm1lZGlhVVJMIiwibWFyZ2luIiwibmFtZSIsIl9pZCIsInJvdXRlciIsInVzZVJvdXRlciIsIk0iLCJ0b2FzdCIsImh0bWwiLCJjbGFzc2VzIiwiY29va2llIiwicmVtb3ZlIiwicHVzaCIsImhhbmRsZUNoZWNrb3V0IiwicGF5bWVudEluZm8iLCJtZXNzYWdlIiwiVG90YWxQcmljZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUMsU0FBTEEsSUFBSyxPQUFvQjtBQUFBOztBQUFBLE1BQWxCQyxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsc0JBRWJDLDREQUFZLEVBRkM7QUFBQSxNQUVwQkMsS0FGb0IsaUJBRXBCQSxLQUZvQjs7QUFBQSxrQkFHSEMsc0RBQVEsQ0FBQ0gsUUFBRCxDQUhMO0FBQUEsTUFHcEJJLE9BSG9CO0FBQUEsTUFHWkMsT0FIWTs7QUFJM0IsTUFBSUMsS0FBSyxHQUFDLENBQVY7O0FBQ0EsTUFBRyxDQUFDSixLQUFKLEVBQVU7QUFDTix3QkFBUTtBQUFL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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VVUkwgZnJvbSAnLi4vaGVscGVyL2Jhc2VVUkwnO1xyXG5pbXBvcnQge3BhcnNlQ29va2llc30gZnJvbSAnbm9va2llcyc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaycgO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdHJpcGVDaGVja291dCBmcm9tICdyZWFjdC1zdHJpcGUtY2hlY2tvdXQnO1xyXG5cclxuY29uc3QgY2FydD0oe2Vycm9yLHByb2R1Y3RzfSk9PntcclxuICAgXHJcbiAgICBjb25zdCB7dG9rZW59PXBhcnNlQ29va2llcygpXHJcbiAgICBjb25zdCBbbmV3Q2FydCxzZXRDYXJ0XT11c2VTdGF0ZShwcm9kdWN0cylcclxuICAgIGxldCBwcmljZT0wO1xyXG4gICAgaWYoIXRva2VuKXtcclxuICAgICAgICByZXR1cm4oIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWFsaWduXCI+XHJcbiAgICAgICAgICAgIDxoMz5QbGVhc2UgTG9naW4gdG8gdmlldyB5b3VyIGNhcnQ8L2gzPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvbG9naW4nPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuXCI+TG9naW48L2J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlPWFzeW5jKHBpZCk9PntcclxuICAgICAgIGNvbnN0IHJlcz0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0vYXBpL2NhcnRgLHtcclxuICAgICAgICAgICAgbWV0aG9kOlwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOnRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkOnBpZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgcmVzMj1hd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldENhcnQocmVzMilcclxuICAgIH1cclxuICAgXHJcbiAgICBcclxuY29uc3QgQ2FydEl0ZW1zPSgpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHtuZXdDYXJ0Lm1hcChpdGVtcz0+e1xyXG4gICAgICAgICAgICBwcmljZT1wcmljZStpdGVtcy5xdWFudGl0eSppdGVtcy5wcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhcnRJbWFnZXMgXCIga2V5PXtpdGVtcy5faWR9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbXMucHJvZHVjdC5tZWRpYVVSTH0vPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOlwiMTBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2l0ZW1zLnByb2R1Y3QubmFtZX0gPC9oMz5cclxuICAgICAgICAgICAgICAgIDxoND5RdWFudGl0eSA6IHtpdGVtcy5xdWFudGl0eX0gPC9oND5cclxuICAgICAgICAgICAgICAgIDxoND5QcmljZSA6IHtpdGVtcy5wcm9kdWN0LnByaWNlfSA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gI2ZmNmYwMCBhbWJlciBkYXJrZW4tNFwiIG9uQ2xpY2s9eygpPT57aGFuZGxlUmVtb3ZlKGl0ZW1zLnByb2R1Y3QuX2lkKX19PlJFTU9WRTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICAgICl9XHJcbiAgICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKCk7XHJcbiAgICBpZihlcnJvcil7XHJcbiAgICAgICAgTS50b2FzdCh7aHRtbDplcnJvcixjbGFzc2VzOlwicmVkXCJ9KVxyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoXCJ1c2VyXCIpO1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoZWNrb3V0PWFzeW5jKHBheW1lbnRJbmZvKT0+e1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJoc2VpXCIpXHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhwYXltZW50SW5mbyk7XHJcbiAgICAgY29uc3QgcmVzPSAgIGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9L2FwaS9wYXltZW50YCx7XHJcbiAgICAgICAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOidhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOnRva2VuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcGF5bWVudEluZm86cGF5bWVudEluZm9cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCByZXMyPWF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgTS50b2FzdCh7aHRtbDpyZXMyLm1lc3NhZ2UsY2xhc3NlczpcImdyZWVuXCJ9KVxyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKVxyXG4gICAgICAgLy8gY29uc29sZS5sb2cocmVzMik7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCBUb3RhbFByaWNlPSgpPT57XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCJ9fSA+XHJcbiAgICAgICAgICAgIDxoNT4gVG90YWwgUHJpY2UgOiDigrkge3ByaWNlfTwvaDU+XHJcbiAgICAgICAgICAgIDxTdHJpcGVDaGVja291dCAgbmFtZT1cIk15U3RvcmVcIlxyXG4gICAgICAgICAgICBhbW91bnQ9e3ByaWNlKjEwMH1cclxuICAgICAgICAgICAgaW1hZ2U9e3Byb2R1Y3RzLmxlbmd0aD4wP3Byb2R1Y3RzWzBdLnByb2R1Y3QubWVkaWFVUkw6XCJcIn1cclxuICAgICAgICAgICAgY3VycmVuY3k9XCJJTlJcIlxyXG4gICAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M9e3RydWV9XHJcbiAgICAgICAgICAgIHppcENvZGU9e3RydWV9XHJcbiAgICAgICAgICAgIGJpbGxpbmdBZGRyZXNzPXt0cnVlfVxyXG4gICAgICAgICAgICBzdHJpcGVLZXk9XCJwa190ZXN0XzUxSHkwWGRGQ1BhSlNwS2pIQWx4bXBEUlVTWVNWRkxEQmFOZGJyNzVQNEhIN1pHeGZNVDFzd1BiMTgzbmFkenBadlpzR2k1cWozajcxTXNqdldWd0NJWmp4MDBSOHpCTmFXcVwiXHJcbiAgICAgICAgICAgIHRva2VuPXsocGF5bWVudEluZm8pPT5oYW5kbGVDaGVja291dChwYXltZW50SW5mbyl9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiPkNoZWNrb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvU3RyaXBlQ2hlY2tvdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYocHJvZHVjdHMubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLWFsaWduXCI+IDxoMj5Zb3VyIENhcnQgSXMgRW1wdHk8L2gyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICAgICAgfX0+QWRkIEl0ZW1zIGluIHlvdXIgY2FydCA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPENhcnRJdGVtcy8+XHJcbiAgICAgICAgICAgIDxUb3RhbFByaWNlLz4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKSAgICAgICBcclxufSAgIFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCl7XHJcbiAgICBjb25zdHt0b2tlbn09cGFyc2VDb29raWVzKGN0eCk7XHJcbiAgICBpZighdG9rZW4pe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOntwcm9kdWN0czpbXX1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmNvbnN0IHJlcz1hd2FpdCBmZXRjaChgJHtiYXNlVVJMfS9hcGkvY2FydGAse1xyXG5oZWFkZXJzOntcclxuICAgIFwiQXV0aG9yaXphdGlvblwiOnRva2VuXHJcbn1cclxufSlcclxuY29uc3QgcHJvZHVjdHM9YXdhaXQgcmVzLmpzb24oKTtcclxuY29uc29sZS5sb2coXCJjYXJ0c1wiKVxyXG5jb25zb2xlLmxvZyhwcm9kdWN0cylcclxuaWYocHJvZHVjdHMuZXJyb3Ipe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7ZXJyb3I6cHJvZHVjdHMuZXJyb3J9XHJcbiAgICB9XHJcbn1cclxucmV0dXJue1xyXG4gICAgcHJvcHM6e3Byb2R1Y3RzfVxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2FydDsiXSwic291cmNlUm9vdCI6IiJ9