webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Footer = function Footer() {
  return __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1,
      columnNumber: 22
    }
  }, "\xA9 2020 Rutakeh Limited.");
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/MyLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var layoutStyle = {// margin: 20,
  // padding: 20,
  // background: "#17a2b8",
  // border: "1px solid #DDD"
};

var withLayout = function withLayout(Page) {
  return function () {
    return __jsx("div", {
      style: layoutStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }
    }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }), __jsx(Page, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withLayout);

/***/ })

})
//# sourceMappingURL=index.js.c42e2760b5d86f818260.hot-update.js.map