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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("I16Y");


/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "I16Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("usZV");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RIw8");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tMJi");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helper_initDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("sywl");
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ggnL");






Object(_helper_initDb__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])();
const stripe = stripe__WEBPACK_IMPORTED_MODULE_0___default()(process.env.STRIPE_SECRET);
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    paymentInfo
  } = req.body;
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
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.verify(authorization, process.env.JWT_SECRET);
    const cart = await _models_Cart__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].findOne({
      user: userid
    }).populate("products.product");
    let price = 0;
    cart.products.forEach(items => {
      price = price + items.quantity * items.product.price;
    }); //check kki customer pehle payment kar chuka ki a ni

    let newCustomer;
    const prevCustomer = await stripe.customers.list({
      email: paymentInfo.email
    });
    const ExistingCustomer = prevCustomer.data.length > 0;

    if (!ExistingCustomer) {
      newCustomer = await stripe.customers.create({
        email: paymentInfo.email,
        source: paymentInfo.id
      });
    }

    await stripe.charges.create({
      currency: "INR",
      amount: price * 100,
      receipt_email: paymentInfo.email,
      customer: ExistingCustomer ? prevCustomer.data[0].id : newCustomer.id,
      description: `Your payment succesfull |${paymentInfo.email}`
    }, {
      idempotencyKey: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])()
    });
    await new _models_Order__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]({
      user: userid,
      email: paymentInfo.email,
      total: price * 100,
      products: cart.products
    }).save();
    await _models_Cart__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].findOneAndUpdate({
      _id: cart._id
    }, {
      $set: {
        products: []
      }
    });
    res.status(200).json({
      message: "payment was successful"
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: "login please"
    });
  }
});

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

/***/ "ggnL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  ObjectId
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const orderSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  user: {
    type: ObjectId,
    ref: "User"
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
  }],
  email: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["a"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Order || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Order", orderSchema));

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

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

/***/ }),

/***/ "usZV":
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ })

/******/ });