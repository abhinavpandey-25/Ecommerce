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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aIwK");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "aIwK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("n84q");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("kG9d");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);







const create = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(); //this create page should be accesed by onlly the admin as user cannnort add the items in the website

  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: price,
    1: setPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: media,
    1: setMedia
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("submit");
    const location = await fileUpload();
    const res = await fetch(`${_helper_baseURL__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]}/api/products`, {
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
    const res2 = await res.json();

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
  };

  const fileUpload = async () => {
    const formData = new FormData();
    formData.append('file', media);
    formData.append('upload_preset', 'mystore2');
    formData.append('cloud_name', 'storagearea');
    const res = await fetch('https://api.cloudinary.com/v1_1/storagearea/image/upload', {
      method: "POST",
      body: formData
    });
    const res2 = await res.json();
    return res2.url;
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
    className: "container",
    onSubmit: e => handleSubmit(e),
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
      type: "text",
      placeholder: "Enter Name",
      value: name,
      onChange: e => {
        // console.log(e.target.value);    
        setName(() => e.target.value);
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
      type: "text",
      value: price,
      placeholder: "Enter Price",
      onChange: e => {
        setPrice(() => e.target.value);
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "file-field input-field",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "btn",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          children: "File"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
          type: "file",
          placeholder: "Choose",
          onChange: e => {
            setMedia(() => e.target.files[0]);
          }
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
        className: "responsive-img ",
        src: media ? URL.createObjectURL(media) : ""
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("textarea", {
      value: description,
      placeholder: "add some description",
      className: "materialize-textarea",
      onChange: e => setDescription(() => e.target.value)
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
      type: "submit",
      className: "waves-effect waves-light btn",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
        className: "material-icons left",
        children: "send"
      }), "Submit"]
    })]
  });
}; //ctx me server se jo bhi a rha tha jese ham ne server se token and user in which i passed user role user email and user
//user password  and ye data server p stringify m tha so we nned to parse the object to json


async function getServerSideProps(ctx) {
  const cookie = Object(nookies__WEBPACK_IMPORTED_MODULE_3__["parseCookies"])(ctx);
  const user = cookie.user ? JSON.parse(cookie.user) : "";

  if (user.role != "root" && user.role != "admin") {
    const {
      res
    } = ctx; //the status code for redirect is 302

    res.writeHead(302, {
      Location: "/"
    });
    res.end();
  } //parsecookies sari cookies return krta 
  //status code for redirecting 302


  return {
    props: {}
  };
}
/* harmony default export */ __webpack_exports__["default"] = (create);

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