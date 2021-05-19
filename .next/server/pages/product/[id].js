module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("PZbu");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "PZbu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("n84q");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("kG9d");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);








const product = props => {
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const modalRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const cookies = Object(nookies__WEBPACK_IMPORTED_MODULE_5__["parseCookies"])();
  const user = cookies.user ? JSON.parse(cookies.user) : "";
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    M.Modal.init(modalRef.current); //here modal agar triiger p work krana toh initialise karna padata h uske refrence se jo tiriger k bad display hoga
  }, []);

  if (router.isFallback) {
    //agar use static props krte and and fallback true h then agar wo page already build nhi h toh server se fetch
    //krenge jisme time lgta h toh tb tak ham loading a option dekha sakte h.
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
      children: "...Loading"
    });
  } // console.log(props);


  const getModal = () => {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      id: "modal1",
      className: "modal",
      ref: modalRef,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "modal-content",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
          children: "Modal Header"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
          children: "Are u sure to delete this item"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "modal-footer",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
          onClick: () => deleteProduct(),
          className: "btn waves-effect waves-light  #d50000 red accent-4",
          style: {
            margin: "5px"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("b", {
            children: "Delete"
          }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: "material-icons",
            children: "delete"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
          className: "btn waves-effect waves-light #4a148c purple darken-4",
          style: {
            margin: "5px"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("b", {
            children: "Cancel"
          }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
            className: "material-icons",
            children: "cancel"
          })]
        })]
      })]
    });
  };

  const deleteProduct = async () => {
    console.log("del method");
    console.log(props.value._id);
    fetch(`${_helper_baseURL__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]}/api/product/${props.value._id}`, {
      method: "DELETE"
    }).then(res => res.json()).then(res2 => console.log(res2));
    router.push('/');
  };

  const AddtoCart = async () => {
    const res = await fetch(`${_helper_baseURL__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]}/api/cart`, {
      method: "PUT",
      headers: {
        'Content-Type': "application/json",
        "Authorization": cookies.token
      },
      body: JSON.stringify({
        quantity: quantity,
        productId: props.value._id
      })
    });
    const res2 = await res.json();
    console.log(res2);
    M.toast({
      html: res2.message,
      classes: "green"
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "container center-align ",
    style: {
      marginBottom: "20px"
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
      children: props.value.name
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      src: props.value.mediaURL,
      style: {
        "width": "35%",
        "height": "400px"
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("b", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        children: ["RS ", props.value.price]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
      type: "number",
      style: {
        width: "50%",
        textAlign: "center"
      },
      min: "1",
      placeholder: "Quantity",
      value: quantity,
      onChange: e => setQuantity(Number(e.target.value))
    }), user ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
      className: " btn waves-effect waves-light ",
      onClick: () => AddtoCart(),
      children: ["Add ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
        className: "material-icons",
        children: "add"
      })]
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
      className: " btn waves-effect waves-light ",
      onClick: () => router.push('/login'),
      children: "Login to Add"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: props.value.description
    }), user.role != "user" && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
      "data-target": "modal1",
      className: " btn modal-trigger waves-effect waves-light  #d50000 red accent-4 ",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("b", {
        children: "Delete"
      }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
        className: "material-icons",
        children: "delete"
      })]
    }) //if the user is an admin then only u should give the delete button otherwise no need for delete button
    , getModal()]
  });
};

async function getServerSideProps(context) {
  //since by using serverside props it can work fine but when the traffic is more it can decrease its performance
  //since the page is static one so we can use getstatic props also for better performance.
  //here in getserever side props context contains the params as obj and inside it id as another object {id:...}
  const id = context.params.id;
  const data = await fetch(`${_helper_baseURL__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]}/api/product/${id}`).then(res => res.json()); // console.log(data);

  return {
    props: {
      value: data
    }
  };
} // export async function getStaticProps(context) {
//    //since by using serverside props it can work fine but when the traffic is more it can decrease its performance
//    //since the page is static one so we can use getstatic props also for better performance.
//    const id= context.params.id;
//    const data=await fetch(`${baseURL}/api/product/${id}`).then(res=>res.json());
//    //console.log(data);
//    return{
//        props:{
//            value:data
//        }
//    }
// }       
//first getstatic paths will run during build to build the sattic page with the givven id only
//baki agar fallback false h toh other pages k liye pagenot found ayga but agar fall back true h toh jo id exist nhi krti at
//build time then network request jese hoga on getstatic props
// export async function getStaticPaths() {
//     return {
//       paths: [
//         { params: { id:"5f977b791efe90be048d25af"} } 
//         //lets say we have a largee number of products then what should we doo hame har static path ko build time par hi build 
//         //kar sakte h
//       ],
//       fallback: true 
//     };
//   }

/* harmony default export */ __webpack_exports__["default"] = (product);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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