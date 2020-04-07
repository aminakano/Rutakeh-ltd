webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/OurServices.js":
/*!***********************************!*\
  !*** ./components/OurServices.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _asset_json_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset/json/data.json */ "./asset/json/data.json");
var _asset_json_data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../asset/json/data.json */ "./asset/json/data.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/OurServices.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var faLaptop = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["findIconDefinition"])({
  prefix: "fas",
  iconName: "laptop"
});
var faChalkboardTeacher = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["findIconDefinition"])({
  prefix: "fas",
  iconName: "chalkboard-teacher"
});
var faGlobe = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["findIconDefinition"])({
  prefix: "fas",
  iconName: "globe"
});
var faUserFriends = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["findIconDefinition"])({
  prefix: "fas",
  iconName: "user-friends"
}); // import { faLaptop, faChalkboardTeacher, faGlobe, faUserFriends } from "@fortawesome/free-solid-svg-icons";



var Services = function Services() {
  var services = _asset_json_data_json__WEBPACK_IMPORTED_MODULE_3__.info.service;
  console.log(services[0].icon);
  return __jsx("div", {
    className: "services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "Our services"), __jsx("ul", {
    className: "services-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, services.map(function (service, i) {
    return __jsx("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: service.icon,
      className: "icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, service.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 15
      }
    }, service.item)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=index.js.5dbeab670e4681773fc8.hot-update.js.map