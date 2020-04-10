webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HeadTag.js":
/*!*******************************!*\
  !*** ./components/HeadTag.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/HeadTag.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var HeadTag = function HeadTag() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Hello")));
};

/* harmony default export */ __webpack_exports__["default"] = (HeadTag);

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
/* harmony import */ var _HeadTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeadTag */ "./components/HeadTag.js");
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
        lineNumber: 14,
        columnNumber: 5
      }
    }, __jsx(_HeadTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }), __jsx(Page, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withLayout);

/***/ })

})
//# sourceMappingURL=index.js.1d4c5171ce8759c20b3b.hot-update.js.map