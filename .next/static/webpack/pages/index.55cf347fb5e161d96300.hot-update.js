webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");



var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ECommerce\\mystore\\pages\\index.js",
    _this = undefined;

//next Js is SeO friendly kyuki react me hame content nahi pta rhta so Seo friendly nahi h whi next js m server side rendering hoti h
// so seo friendly kyki insepect element me u can see the loaded content


 //get static props is used when we use the page that is not user specific like website kholte hi jo items ka page show
//hoga wo user ki reqauest se pehle hi build krke rakhte h .wo tab hoga jb hm get static props ka use krenge
//if we use getserver side props toh req server p jygi phir server response krega ie cN BE used in user specific page
//toh thoda slow hoga ye.

var Home = function Home(props) {
  var productlist = props.products.map(function (value) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: " card center-align productcard ",
      style: {
        margin: "15px",
        borderStyle: 'solid'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "card small ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-image",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: value.mediaURL
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "card-title",
            children: value.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-content",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: value.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 7
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card-action",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: '/product/[id]',
            as: "/product/".concat(value._id),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: "View Product"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 68
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5
      }, _this)
    }, Math.random(), false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }, _this);
  });
  console.log(props); // const [text,setdata]=useState('..load');
  // useEffect(()=>{
  //   fetch('http://localhost:3000/api/test').then(res=>res.json()).then(data=>{
  //     setdata(data.message);
  //   })
  // },[])

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "Heading",
      children: ["  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "medium material-icons",
        children: "shopping_cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 30
      }, _this), " CartDriver"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 3
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "rootcard",
      children: ["  ", productlist]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }, _this)]
  }, void 0, true);
}; //ye function api se request kr rha h for the data and yhi pehle execute hoh rha h and isi k andar connection with data
//base bhi setup h


_c = Home;
// export async function getStaticProps(context){
//   const data= await fetch(`${baseURL}/api/products`).then(res=>res.json());
//   return{
//     props:{
//        products:data
//     }
//   }
// }  
//is below function ke maddad se server pr message already prerender hho chuka tha ans on  req reso m html diya
//get static props works at the server side only
// export async function getStaticProps(context) {
//   const data=await fetch('http://localhost:3000/api/test').then(res=>res.json());
//   console.log(data);
//   return {
//     props: {message:data.message}, // will be passed to the page component as props
//   }
// }
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwicHJvZHVjdGxpc3QiLCJwcm9kdWN0cyIsIm1hcCIsInZhbHVlIiwibWFyZ2luIiwiYm9yZGVyU3R5bGUiLCJtZWRpYVVSTCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIl9pZCIsIk1hdGgiLCJyYW5kb20iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Q0FFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxJQUFJLEdBQUMsU0FBTEEsSUFBSyxDQUFDQyxLQUFELEVBQVM7QUFDbEIsTUFBTUMsV0FBVyxHQUFDRCxLQUFLLENBQUNFLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFBQyxLQUFLLEVBQUU7QUFDMUMsd0JBQ0Y7QUFBSyxlQUFTLEVBQUMsaUNBQWY7QUFBaUQsV0FBSyxFQUFFO0FBQUNDLGNBQU0sRUFBQyxNQUFSO0FBQWVDLG1CQUFXLEVBQUM7QUFBM0IsT0FBeEQ7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0U7QUFBSyxlQUFHLEVBQUVGLEtBQUssQ0FBQ0c7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0scUJBQVMsRUFBQyxZQUFoQjtBQUFBLHNCQUE4QkgsS0FBSyxDQUFDSTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsaUNBQ0U7QUFBQSxzQkFBSUosS0FBSyxDQUFDSztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBUUU7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUUsZUFBWjtBQUE2QixjQUFFLHFCQUFjTCxLQUFLLENBQUNNLEdBQXBCLENBQS9CO0FBQUEsbUNBQTJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQWtHQyxJQUFJLENBQUNDLE1BQUwsRUFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURFO0FBaUJELEdBbEJpQixDQUFsQjtBQW1CQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlkLEtBQVosRUFwQmtCLENBcUJsQjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0Ysc0JBQ0U7QUFBQSw0QkFDQTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsb0NBQTJCO0FBQUcsaUJBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUVBO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSx1QkFBNkJDLFdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZBO0FBQUEsa0JBREY7QUFlQyxDQTNDRCxDLENBNENBO0FBQ0E7OztLQTdDTUYsSTtBQXNETjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNlQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NWNmMzQ3ZmI1ZTE2MWQ5NjMwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9uZXh0IEpzIGlzIFNlTyBmcmllbmRseSBreXVraSByZWFjdCBtZSBoYW1lIGNvbnRlbnQgbmFoaSBwdGEgcmh0YSBzbyBTZW8gZnJpZW5kbHkgbmFoaSBoIHdoaSBuZXh0IGpzIG0gc2VydmVyIHNpZGUgcmVuZGVyaW5nIGhvdGkgaFxuLy8gc28gc2VvIGZyaWVuZGx5IGt5a2kgaW5zZXBlY3QgZWxlbWVudCBtZSB1IGNhbiBzZWUgdGhlIGxvYWRlZCBjb250ZW50XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGJhc2VVUkwgZnJvbSAnLi4vaGVscGVyL2Jhc2VVUkwnO1xuaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInXG4vL2dldCBzdGF0aWMgcHJvcHMgaXMgdXNlZCB3aGVuIHdlIHVzZSB0aGUgcGFnZSB0aGF0IGlzIG5vdCB1c2VyIHNwZWNpZmljIGxpa2Ugd2Vic2l0ZSBraG9sdGUgaGkgam8gaXRlbXMga2EgcGFnZSBzaG93XG4vL2hvZ2Egd28gdXNlciBraSByZXFhdWVzdCBzZSBwZWhsZSBoaSBidWlsZCBrcmtlIHJha2h0ZSBoIC53byB0YWIgaG9nYSBqYiBobSBnZXQgc3RhdGljIHByb3BzIGthIHVzZSBrcmVuZ2Vcbi8vaWYgd2UgdXNlIGdldHNlcnZlciBzaWRlIHByb3BzIHRvaCByZXEgc2VydmVyIHAganlnaSBwaGlyIHNlcnZlciByZXNwb25zZSBrcmVnYSBpZSBjTiBCRSB1c2VkIGluIHVzZXIgc3BlY2lmaWMgcGFnZVxuLy90b2ggdGhvZGEgc2xvdyBob2dhIHllLlxuY29uc3QgSG9tZT0ocHJvcHMpPT57XG4gIGNvbnN0IHByb2R1Y3RsaXN0PXByb3BzLnByb2R1Y3RzLm1hcCh2YWx1ZT0+e1xuICAgIHJldHVybiAoICAgIFxuICA8ZGl2IGNsYXNzTmFtZT1cIiBjYXJkIGNlbnRlci1hbGlnbiBwcm9kdWN0Y2FyZCBcIiBzdHlsZT17e21hcmdpbjpcIjE1cHhcIixib3JkZXJTdHlsZTonc29saWQnfX0ga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc21hbGwgXCIgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCIgID5cbiAgICAgICAgPGltZyBzcmM9e3ZhbHVlLm1lZGlhVVJMfS8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dmFsdWUubmFtZX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgIDxwPnt2YWx1ZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cbiAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9kdWN0L1tpZF0nfSBhcz17YC9wcm9kdWN0LyR7dmFsdWUuX2lkfWB9ID48YSA+VmlldyBQcm9kdWN0PC9hPjwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBcbjwvZGl2PlxuICAgIClcbiAgfSlcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICAvLyBjb25zdCBbdGV4dCxzZXRkYXRhXT11c2VTdGF0ZSgnLi5sb2FkJyk7XG4gIC8vIHVzZUVmZmVjdCgoKT0+e1xuICAvLyAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Rlc3QnKS50aGVuKHJlcz0+cmVzLmpzb24oKSkudGhlbihkYXRhPT57XG4gICAgICBcbiAgLy8gICAgIHNldGRhdGEoZGF0YS5tZXNzYWdlKTtcbiAgLy8gICB9KVxuICAvLyB9LFtdKVxucmV0dXJuIChcbiAgPD5cbiAgPGRpdiBjbGFzc05hbWU9XCJIZWFkaW5nXCI+ICA8aSBjbGFzc05hbWU9XCJtZWRpdW0gbWF0ZXJpYWwtaWNvbnNcIj5zaG9wcGluZ19jYXJ0PC9pPiBDYXJ0RHJpdmVyPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwicm9vdGNhcmRcIj4gIHtwcm9kdWN0bGlzdH08L2Rpdj5cbiAgey8qIDxoMj57cHJvcHMubWVzc2FnZX08L2gyPiAqL31cbiAgey8qIDxzdHlsZSBqc3g+XG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICBgaDJ7XG4gICAgICBjb2xvcjogXG4gICAgICB9YFxuICAgIH1cbiAgPC9zdHlsZT4gKi99XG4gIHsvKiA8TGluayBocmVmPScvcHJvZHVjdCc+PGE+R28gdG8gUHJvZHVjdHM8L2E+PC9MaW5rPiAqL31cbiAgPC8+XG4pXG59XG4vL3llIGZ1bmN0aW9uIGFwaSBzZSByZXF1ZXN0IGtyIHJoYSBoIGZvciB0aGUgZGF0YSBhbmQgeWhpIHBlaGxlIGV4ZWN1dGUgaG9oIHJoYSBoIGFuZCBpc2kgayBhbmRhciBjb25uZWN0aW9uIHdpdGggZGF0YVxuLy9iYXNlIGJoaSBzZXR1cCBoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xuICBjb25zdCBkYXRhPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfS9hcGkvcHJvZHVjdHNgKS50aGVuKHJlcz0+cmVzLmpzb24oKSk7XG4gIHJldHVybntcbiAgICBwcm9wczp7XG4gICAgICAgcHJvZHVjdHM6ZGF0YVxuICAgIH1cbiAgfVxufSAgXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCl7XG4vLyAgIGNvbnN0IGRhdGE9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9L2FwaS9wcm9kdWN0c2ApLnRoZW4ocmVzPT5yZXMuanNvbigpKTtcbi8vICAgcmV0dXJue1xuLy8gICAgIHByb3BzOntcbi8vICAgICAgICBwcm9kdWN0czpkYXRhXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9ICBcblxuXG4vL2lzIGJlbG93IGZ1bmN0aW9uIGtlIG1hZGRhZCBzZSBzZXJ2ZXIgcHIgbWVzc2FnZSBhbHJlYWR5IHByZXJlbmRlciBoaG8gY2h1a2EgdGhhIGFucyBvbiAgcmVxIHJlc28gbSBodG1sIGRpeWFcbi8vZ2V0IHN0YXRpYyBwcm9wcyB3b3JrcyBhdCB0aGUgc2VydmVyIHNpZGUgb25seVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbi8vICAgY29uc3QgZGF0YT1hd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90ZXN0JykudGhlbihyZXM9PnJlcy5qc29uKCkpO1xuLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge21lc3NhZ2U6ZGF0YS5tZXNzYWdlfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4vLyAgIH1cbi8vIH1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==