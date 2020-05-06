module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ "./asset/json/data.json":
/*!******************************!*\
  !*** ./asset/json/data.json ***!
  \******************************/
/*! exports provided: info, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"info\":{\"company\":[{\"title\":\"社名\",\"item\":\"龍武株式会社 - Rutakeh Limited\"},{\"title\":\"代表者\",\"item\":\"根本 有子\"},{\"title\":\"設立\",\"item\":\"2020年3月10日\"},{\"title\":\"所在地\",\"item\":\"〒260-0015 千葉県千葉市中央区富士見1丁目14番13号8階\"},{\"title\":\"連絡先\",\"item\":\"043-400-2878\"}],\"history\":[{\"title\":\"2020年3月\",\"item\":\"Webサイトオープン\"},{\"title\":\"2020年3月\",\"item\":\"龍武株式会社 設立\"},{\"title\":\"2015年4月\",\"item\":\"留学事業 受託開始\"},{\"title\":\"2010年5月\",\"item\":\"Webサイト構築/Webマーケティング事業 開始\"},{\"title\":\"2007年5月\",\"item\":\"IT/人材育成研修 請負開始\"},{\"title\":\"2007年5月\",\"item\":\"個人事業 開業\"}],\"service\":[{\"title\":\"IT技術研修\",\"item\":\"Webシステム構築、プログラミング等、技術研修を実施しております。スキルチェンジや新入社員研修など、少人数から大規模まで実績がございます。\"},{\"title\":\"人材育成研修\",\"item\":\"ビジネスマナー、プレゼンテーションなど、ヒューマンスキル育成の研修を実施しております。\"},{\"title\":\"海外留学\",\"item\":\"海外留学を検討している方、興味がある方、お気軽にご相談ください。英語圏への語学留学が専門ですが、その他の留学スタイルもご相談可能です。\"},{\"title\":\"コンサルテーション\",\"item\":\"Webサイト、Webシステムの構築について、Webマーケティングの実施によるビジネスチャンスをお考えの方、ご相談承ります。\"}]}}");

/***/ }),

/***/ "./asset/scss/main.scss":
/*!******************************!*\
  !*** ./asset/scss/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/About.js":
/*!*****************************!*\
  !*** ./components/About.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _asset_json_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/json/data.json */ "./asset/json/data.json");
var _asset_json_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../asset/json/data.json */ "./asset/json/data.json", 1);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/About.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class About extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const infos = _asset_json_data_json__WEBPACK_IMPORTED_MODULE_1__.info.company;
    const histories = _asset_json_data_json__WEBPACK_IMPORTED_MODULE_1__.info.history;
    const name = "With us?";
    return __jsx("div", {
      className: "about",
      id: "about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, "About us"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      bottom: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, "\u4F1A\u793E\u6982\u8981"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, infos.map((info, i) => __jsx("li", {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 19
      }
    }, info.title), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 19
      }
    }, info.item)))), __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, "\u6CBF\u9769"), __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, histories.map((history, i) => __jsx("li", {
      key: i,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 19
      }
    }, history.title), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 19
      }
    }, history.item)))))), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: name,
      url: "#contact",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/Button.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Button = props => {
  return __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.url,
    className: "button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("button", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, props.name));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./components/Form.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/Contact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Contact = () => {
  return __jsx("div", {
    className: "contact",
    id: "contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "contact__wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Get in touch!"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, "\u6CD5\u4EBA\u3001\u500B\u4EBA\u306E\u65B9\u554F\u308F\u305A\u3001\u304A\u6C17\u8EFD\u306B\u304A\u554F\u5408\u305B\u304F\u3060\u3055\u3044\u3002"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "\u65E9\u3081\u306E\u8FD4\u4FE1\u3092\u5FC3\u304C\u3051\u3066\u304A\u308A\u307E\u3059\u304C\u3001\u304A\u6642\u9593\u3044\u305F\u3060\u304F\u3053\u3068\u3082\u3054\u3056\u3044\u307E\u3059\u3002"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "3\u55B6\u696D\u65E5\u4EE5\u5185\u306B\u8FD4\u4FE1\u304C\u306A\u3044\u5834\u5408\u3001\u304A\u624B\u6570\u3067\u3059\u304C", __jsx("a", {
    href: "mailto: contact@rutakeh.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "contact@rutakeh.com"), "\u306B\u3054\u9023\u7D61\u3092\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002")), __jsx(_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "to-top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "#home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowUp"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = () => __jsx("footer", {
  style: styles,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1,
    columnNumber: 22
  }
}, "\xA9 2020 Rutakeh Limited.");

/* harmony default export */ __webpack_exports__["default"] = (Footer);
const styles = {
  textAlign: "center",
  padding: "0.5rem 0"
};

/***/ }),

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typeform_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @typeform/embed */ "@typeform/embed");
/* harmony import */ var _typeform_embed__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_typeform_embed__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/Form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const url = "https://rutakeh.typeform.com/to/BSebhs";

class Form extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const embedElement = document.getElementById("typeform");
    _typeform_embed__WEBPACK_IMPORTED_MODULE_1__["makeWidget"](embedElement, url);
  }

  render() {
    return __jsx("div", {
      id: "typeform",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/HeadTag.js":
/*!*******************************!*\
  !*** ./components/HeadTag.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/HeadTag.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HeadTag = () => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 3
  }
}, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "keywords",
  content: "Rutakeh, \u9F8D\u6B66\u682A\u5F0F\u4F1A\u793E, Rutakeh Limited, \u9F8D\u6B66, \u30EA\u30E5\u30A6\u30BF\u30B1, \u308A\u3085\u3046\u305F\u3051, IT\u7814\u4FEE, \u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0, \u6D77\u5916\u7559\u5B66",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "description",
  content: "IT\u696D\u754C\u5411\u3051\u5404\u7A2E\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u3001\u65B0\u5165\u793E\u54E1\u6559\u80B2\u3001e-learning\u3001\u6D77\u5916\u7559\u5B66\u3001\u8A9E\u5B66\u7814\u4FEE\u306A\u3069\u3001\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}), __jsx("meta", {
  name: "author",
  content: "Rutakeh Limited",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}), __jsx("meta", {
  charset: "utf-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}), __jsx("script", {
  type: "text/javascript",
  src: "//webfonts.xserver.jp/js/xserver.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, "Rutakeh | \u9F8D\u6B66\u682A\u5F0F\u4F1A\u793E"));

/* harmony default export */ __webpack_exports__["default"] = (HeadTag);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ "./components/NavBar.js");
var _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const header = document.getElementById("header");
    let scrollPos = 0;

    const headerEffect = position => {
      if (position > 32) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    };

    window.addEventListener("scroll", e => {
      scrollPos = window.scrollY;
      headerEffect(scrollPos);
    });
  }

  render() {
    return __jsx("header", {
      id: "header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, "Rutakeh"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, "\u9F8D\u6B66\u682A\u5F0F\u4F1A\u793E"))), __jsx(_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _HeadTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeadTag */ "./components/HeadTag.js");
var _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/MyLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import "../asset/fonts/fonts.scss";




const withLayout = Page => {
  return () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_HeadTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(Page, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (withLayout);

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hamburger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hamburger-menu */ "react-hamburger-menu");
/* harmony import */ var react_hamburger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hamburger_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! global */ "global");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class NavBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "handleClick", () => {
      this.setState({
        open: !this.state.open
      });
    });

    _defineProperty(this, "displayHamburgerMenu", () => {
      return __jsx(react_hamburger_menu__WEBPACK_IMPORTED_MODULE_2___default.a, {
        isOpen: this.state.open,
        menuClicked: this.handleClick.bind(this),
        width: 25,
        height: 20,
        strokeWidth: 3,
        rotate: 0,
        color: this.state.open ? "white" : "#3e4348",
        borderRadius: 2,
        animationDuration: 0.5,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }
      });
    });

    _defineProperty(this, "displayNavBar", () => {
      return __jsx("ul", {
        className: "nav",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#home",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }, "Home")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#services",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }
      }, "Services")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }, "About")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }, "Contact")));
    });

    _defineProperty(this, "displayMobileMenu", () => {
      return __jsx("ul", {
        className: "hamburgerDropDown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 7
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#home",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, "Home")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#services",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, "Services")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }, "About")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }, __jsx(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }, "Contact")));
    });

    this.state = {
      open: false
    };
  }

  render() {
    return __jsx("div", {
      className: "navbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }, this.state.open ? this.displayMobileMenu() : null, global__WEBPACK_IMPORTED_MODULE_3___default.a.innerWidth > 767 ? this.displayNavBar() : this.displayHamburgerMenu());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/OurServices.js":
/*!***********************************!*\
  !*** ./components/OurServices.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _asset_json_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset/json/data.json */ "./asset/json/data.json");
var _asset_json_data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../asset/json/data.json */ "./asset/json/data.json", 1);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/OurServices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Services = () => {
  const services = _asset_json_data_json__WEBPACK_IMPORTED_MODULE_3__.info.service;
  const icons = [_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLaptop"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChalkboardTeacher"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGlobe"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserFriends"]];
  const name = "Who we are";
  return __jsx("div", {
    className: "services",
    id: "services",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
    bottom: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Our services"), __jsx("ul", {
    className: "services-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, services.map((service, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: icons[i],
    className: "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, service.title), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, service.item))))), __jsx(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: name,
    url: "#about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./components/TopCopy.js":
/*!*******************************!*\
  !*** ./components/TopCopy.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! global */ "global");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/aminakano/workspace/Rutakeh/components/TopCopy.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class TopCopy extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const name = "Get started!";
    return __jsx("div", {
      className: "top-copy",
      id: "home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "copy-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      top: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 15
      }
    }, "Let's set "), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 15
      }
    }, "your goals and "), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }
    }, "achieve them! ")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }, "\u79C1\u305F\u3061\u306F\u3001\u5922\u3084\u76EE\u6A19\u3092\u6301\u3063\u3066\u5B66\u7FD2\u3057\u3001\u305D\u308C\u306B\u3088\u308A\u6210\u9577\u3092\u7D9A\u3051\u308B\u65B9\u3092\u5FDC\u63F4\u3057\u307E\u3059\u3002"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    }, "\u30B4\u30FC\u30EB\u3067\u304D\u305F\u6642\u306E\u559C\u3073\u3092\u5FD8\u308C\u305A\u306B\u3001\u3055\u3089\u306A\u308B\u6210\u9577\u306B\u7E4B\u3052\u307E\u3057\u3087\u3046\uFF01")))), __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: name,
      url: "#services",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (TopCopy);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _asset_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/scss/main.scss */ "./asset/scss/main.scss");
/* harmony import */ var _asset_scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_asset_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_TopCopy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TopCopy */ "./components/TopCopy.js");
/* harmony import */ var _components_OurServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/OurServices */ "./components/OurServices.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/About */ "./components/About.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
var _jsxFileName = "/Users/aminakano/workspace/Rutakeh/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Page = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_TopCopy__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}), __jsx(_components_OurServices__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }
}), __jsx(_components_About__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }
}), __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"])(Page));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aminakano/workspace/Rutakeh/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@typeform/embed":
/*!**********************************!*\
  !*** external "@typeform/embed" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@typeform/embed");

/***/ }),

/***/ "global":
/*!*************************!*\
  !*** external "global" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("global");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-hamburger-menu":
/*!***************************************!*\
  !*** external "react-hamburger-menu" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hamburger-menu");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map