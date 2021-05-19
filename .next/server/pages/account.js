module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cdae");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cdae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "nookies"
var external_nookies_ = __webpack_require__("kG9d");

// EXTERNAL MODULE: ./helper/baseURL.js
var baseURL = __webpack_require__("n84q");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/userRoles.js






function UserRoles() {
  const {
    token
  } = Object(external_nookies_["parseCookies"])();
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const res = await fetch(`${baseURL["a" /* default */]}/api/users`, {
      headers: {
        "Authorization": token
      }
    });
    const res2 = await res.json();
    console.log(res2);
    setUser(res2);
  };

  const handleRole = async (id, role) => {
    const res = await fetch(`${baseURL["a" /* default */]}/api/users`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({
        _id: id,
        role: role
      })
    });
    const res2 = await res.json();
    console.log(res2); //map function returns an array

    const updatedUser = user.map(person => {
      if (res2._id == person._id) {
        return res2;
      } else {
        return person;
      }
    });
    setUser(updatedUser);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("table", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("thead", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            children: "Name"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            children: "Email"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            children: "Role"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
        children: user.map(item => {
          return (
            /*#__PURE__*/
            //alt+shift+downkey is used to copy the current line to the next line
            Object(jsx_runtime_["jsxs"])("tr", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                children: item.name
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
                children: item.email
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("td", {
                children: [item.role, /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                  className: "btn danger",
                  style: {
                    marginLeft: "20px"
                  },
                  onClick: () => handleRole(item._id, item.role),
                  children: "Toggle role"
                })]
              })]
            }, item._id)
          );
        })
      })]
    })
  });
}

/* harmony default export */ var userRoles = (UserRoles);
// CONCATENATED MODULE: ./pages/account.js








const Account = props => {
  const cookie = Object(external_nookies_["parseCookies"])();
  const orderCard = Object(external_react_["useRef"])(null);
  const user = cookie.user ? JSON.parse(cookie.user) : "";
  console.log("account");
  console.log(user);

  if (props.orders.length === 0) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: " container center-align",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        children: " You have no order history"
      })
    });
  }

  Object(external_react_["useEffect"])(() => {
    M.Collapsible.init(orderCard.current);
  }, []);

  const OrderHistory = () => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      className: "collapsible",
      ref: orderCard,
      children: props.orders.map(item => {
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "collapsible-header",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
              className: "material-icons",
              children: "folder"
            }), " ", item.createdAt, " "]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "collapsible-body",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
              children: ["Total \u20B9 ", item.total]
            }), item.products.map(products => {
              return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h5", {
                  children: [products.product.name, " x ", products.quantity]
                })
              });
            })]
          })]
        });
      })
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "center-align",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        children: user.name
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        children: user.email
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      children: "Order History"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(OrderHistory, {}), user.role == "root" && /*#__PURE__*/Object(jsx_runtime_["jsx"])(userRoles, {})]
  });
}; //since we want that agar user k pass token nhi h mtlb wo login nhi h toh server se alg se account
//page ki request par it show not show the account
//jab tak m login hu tb tk m account page dekh sku agr logout kar diya ya signup nhi kiya tb tak ur not allowed to see
//the account page
//ab jab bhi wo account ki request krega toh woh redirect ho jyga to login page


async function getServerSideProps(ctx) {
  console.log("ji");
  const {
    token
  } = Object(external_nookies_["parseCookies"])(ctx);

  if (!token) {
    //status code for redirecting 302
    const {
      res
    } = ctx;
    res.writeHead(302, {
      Location: "/login"
    });
    res.end();
  }

  const res = await fetch(`${baseURL["a" /* default */]}/api/orders`, {
    headers: {
      "Authorization": token
    }
  });
  const res2 = await res.json();
  console.log(res2);
  console.log("done");
  return {
    props: {
      orders: res2
    }
  };
}
/* harmony default export */ var account = __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "kG9d":
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "n84q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//depending on the environment ki whether hamara project deployed h(production env) m h ya nhi we will decide the url
const baseURL = process.env === 'production' ? "https://mystoreAbhi25.vercel.app" : "http://localhost:3000";
/* harmony default export */ __webpack_exports__["a"] = (baseURL);

/***/ })

/******/ });