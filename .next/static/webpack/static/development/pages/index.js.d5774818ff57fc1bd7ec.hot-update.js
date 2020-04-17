webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hamburger_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hamburger-menu */ "./node_modules/react-hamburger-menu/dist/HamburgerMenu.js");
/* harmony import */ var react_hamburger_menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_hamburger_menu__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Header = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = _super.call(this);
    _this.state = {
      open: false,
      hideOrShowHambugerDropDown: "nav"
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var header = document.getElementById("header");
      var scrollPos = 0;
      var hamburger = document.getElementById("hamburger");

      var headerEffect = function headerEffect(position) {
        if (position > 32) {
          header.classList.add("header-bg");
        } else {
          header.classList.remove("header-bg");
        }
      };

      window.addEventListener("scroll", function (e) {
        scrollPos = window.scrollY;
        headerEffect(scrollPos);
      });
      hamburger.addEventListener("click", function (e) {
        header.classList.toggle("active");
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("header", {
        id: "header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#home",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }
      }, "Rutakeh"), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }, "\u9F8D\u6B66\u682A\u5F0F\u4F1A\u793E"))), __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#home",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }
      }, "Home")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#services",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }
      }, "Services")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }, "About")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }, "Contact"))), __jsx("div", {
        className: "hamburger",
        id: "hamburger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "checkbox",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }
      }), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/classnames/index.js":
false,

/***/ "./node_modules/create-react-class/factory.js":
false,

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
false,

/***/ "./node_modules/fbjs/lib/emptyObject.js":
false,

/***/ "./node_modules/fbjs/lib/invariant.js":
false,

/***/ "./node_modules/fbjs/lib/warning.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/prop-types/factory.js":
false,

/***/ "./node_modules/react-hamburger-menu/dist/HamburgerMenu.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-hamburger-menu/dist/HamburgerMenu.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = HamburgerMenu;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function HamburgerMenu(props) {
  var width = (props.width || 36) + "px",
      height = (props.height || 30) + "px",
      halfHeight = parseInt(height.replace("px", "")) / 2 + "px",
      isOpen = props.isOpen || false,
      strokeWidth = props.strokeWidth || 2,
      halfStrokeWidth = "-" + strokeWidth / 2 + "px",
      animationDuration = props.animationDuration || "0.4";

  var getTransformValue = function getTransformValue(isOpen, defaultPos, rotateVal) {
    return "translate3d(0," + (isOpen ? halfHeight : defaultPos) + ",0) rotate(" + (isOpen ? rotateVal + "deg" : "0") + ")";
  };

  var styles = {
    container: {
      width: width,
      height: height,
      position: "relative",
      transform: "rotate(" + (props.rotate || 0) + "deg)"
    },
    lineBase: {
      display: "block",
      height: strokeWidth + "px",
      width: "100%",
      background: props.color || "#000",
      transitionTimingFunction: "ease",
      transitionDuration: animationDuration + "s",
      borderRadius: (props.borderRadius || 0) + "px",
      transformOrigin: "center",
      position: "absolute"
    },
    firstLine: {
      transform: getTransformValue(isOpen, 0, 45),
      marginTop: halfStrokeWidth
    },
    secondLine: {
      transitionTimingFunction: "ease-out",
      transitionDuration: animationDuration / 4 + "s",
      opacity: isOpen ? "0" : "1",
      top: halfHeight,
      marginTop: halfStrokeWidth
    },
    thirdLine: {
      transform: getTransformValue(isOpen, height, -45),
      marginTop: halfStrokeWidth
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles.container,
    className: props.className,
    onClick: props.menuClicked
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: Object.assign({}, styles.lineBase, styles.firstLine)
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: Object.assign({}, styles.lineBase, styles.secondLine)
  }), /*#__PURE__*/_react["default"].createElement("span", {
    style: Object.assign({}, styles.lineBase, styles.thirdLine)
  }));
}

HamburgerMenu.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  menuClicked: _propTypes["default"].func.isRequired,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  strokeWidth: _propTypes["default"].number,
  rotate: _propTypes["default"].number,
  color: _propTypes["default"].string,
  borderRadius: _propTypes["default"].number,
  animationDuration: _propTypes["default"].number,
  className: _propTypes["default"].string
};

/***/ }),

/***/ "./node_modules/react-hamburgers/dist/hamburger.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/KeyEscapeUtils.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/PooledClass.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/React.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactBaseClasses.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactChildren.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactComponentTreeHook.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactCurrentOwner.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactDOMFactories.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactElement.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactElementSymbol.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactElementValidator.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactNoopUpdateQueue.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactPropTypeLocationNames.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactPropTypes.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/ReactVersion.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/canDefineProperty.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/checkReactTypeSpec.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/createClass.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/getIteratorFn.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/lowPriorityWarning.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/onlyChild.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/reactProdInvariant.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/lib/traverseAllChildren.js":
false,

/***/ "./node_modules/react-hamburgers/node_modules/react/react.js":
false

})
//# sourceMappingURL=index.js.d5774818ff57fc1bd7ec.hot-update.js.map