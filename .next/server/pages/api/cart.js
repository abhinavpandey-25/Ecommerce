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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("sn2T");


/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "RIw8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  ObjectId
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const cartSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  user: {
    type: ObjectId,
    ref: "User" //har ek card se associated ek user hoga

  },
  products: [{
    quantity: {
      type: Number,
      default: 1
    },
    product: {
      type: ObjectId,
      ref: "product"
    }
  }]
});
/* harmony default export */ __webpack_exports__["a"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Cart || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Cart", cartSchema)); //  
// {
//     user:"121323"
//     products:[{product:"laptop",quantity:8},{},----]
// }

/***/ }),

/***/ "XY/b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tMJi");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);


function Authenticated(icomponent) {
  return (req, res) => {
    const {
      authorization
    } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        error: "you must logged in"
      });
    }

    try {
      const {
        userid
      } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(authorization, process.env.JWT_SECRET);
      console.log(userid);
      req.userid = userid;
      return icomponent(req, res);
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        error: "login please"
      });
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Authenticated);

/***/ }),

/***/ "sn2T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tMJi");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("RIw8");
/* harmony import */ var _helper_Authenticated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XY/b");
/* harmony import */ var _helper_initDb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sywl");




Object(_helper_initDb__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await fetchUserCart(req, res);
      break;

    case "PUT":
      await addProduct(req, res);
      break;

    case "DELETE":
      await DeleteProduct(req, res);
      break;
  }
});
const DeleteProduct = Object(_helper_Authenticated__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(async (req, res) => {
  const id = req.body.productId;
  const cart = await _models_Cart__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].findOneAndUpdate({
    user: req.userid
  }, {
    $pull: {
      products: {
        product: id
      }
    }
  }, {
    new: true
  }).populate("products.product");
  res.status(200).json(cart.products);
});
const fetchUserCart = Object(_helper_Authenticated__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(async (req, res) => {
  const cart = await _models_Cart__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].findOne({
    user: req.userid
  }).populate("products.product");
  res.status(200).json(cart.products);
});
const addProduct = Object(_helper_Authenticated__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(async (req, res) => {
  const {
    quantity,
    productId
  } = req.body;
  const cart = await _models_Cart__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].findOne({
    user: req.userid
  });
  const pExist = cart.products.some(pdoc => productId === pdoc.product.toString());

  if (pExist) {
    await _models_Cart__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].findOneAndUpdate({
      _id: cart._id,
      "products.product": productId
    }, {
      $inc: {
        "products.$.quantity": quantity
      }
    });
  } else {
    const newProduct = {
      quantity: quantity,
      product: productId
    };
    await _models_Cart__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].findOneAndUpdate({
      _id: cart._id
    }, {
      $push: {
        products: newProduct
      }
    });
  }

  res.status(200).json({
    message: "product added to cart"
  });
});

/***/ }),

/***/ "sywl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


function initDb() {
  console.log("here");
  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, error => {
    if (!error) {
      console.log("connected");
    } else {
      console.log(error);
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (initDb);

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ })

/******/ });