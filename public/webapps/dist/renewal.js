var webpackLibs =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"renewal": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonpwebpackLibs"] = window["webpackJsonpwebpackLibs"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/renewal/index.tsx","vendors~renewal"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/renewal/UserTable.tsx":
/*!***********************************!*\
  !*** ./src/renewal/UserTable.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCustom = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _Icon = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Icon/Icon */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Icon/Icon.js"));

var _Popup = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Popup/Popup */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Popup/Popup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TableCustom =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TableCustom, _PureComponent);

  function TableCustom(props, tableCustomState) {
    var _this;

    _classCallCheck(this, TableCustom);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableCustom).call(this, props));

    _this.getAmountCount = function () {
      var totalAmount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var countAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      _this.props.callback(totalAmount, countAll);
    };

    _this.handleCheckBox = function (event) {
      var target = event.target;
      var checked = target.type === 'checkbox' ? target.checked : target.value;
      var moreAccount = Number(event.target.value);
      var countAll = Number(_this.state.countAll);
      var totalAmount = Number(_this.state.totalAmount);
      var sumAmount = 0;
      var SumCount = 0;

      if (checked === true) {
        sumAmount = totalAmount + moreAccount;
        SumCount = countAll + 1;

        _this.setState({
          totalAmount: sumAmount,
          countAll: SumCount
        });

        _this.getAmountCount(sumAmount, SumCount);
      } else {
        sumAmount = totalAmount - moreAccount;
        SumCount = countAll - 1;

        _this.setState({
          totalAmount: sumAmount,
          countAll: SumCount
        });

        _this.getAmountCount(sumAmount, SumCount);
      }

      _this.setState({
        checked: checked
      });
    };

    _this.getKeys = function () {
      return Object.keys(_this.props.data.content[0]);
    };

    _this.renderHeader = function (data) {
      var custom = data.custom;

      var keys = _this.getKeys();

      if (custom === 1) {
        return data.column.map(function (h, i) {
          if (h === 'isChecked') return React.createElement("th", {
            key: i
          }, React.createElement("input", {
            type: "checkbox",
            className: "all-control-check"
          }));else return React.createElement("th", {
            key: i
          }, h);
        });
      } else {
        return keys.map(function (key) {
          if (key == 'isChecked') return React.createElement("th", {
            style: {
              textTransform: 'capitalize'
            },
            key: key
          }, React.createElement("input", {
            type: "checkbox",
            className: "all-control-check"
          }));else return React.createElement("th", {
            style: {
              textTransform: 'capitalize'
            },
            key: key
          }, key);
        });
      }
    };

    _this.renderRowsData = function (data) {
      return data.map(function (userkey, index) {
        var user = userkey.user,
            name = userkey.name,
            renewal = userkey.renewal,
            left = userkey.left,
            status = userkey.status,
            amount = userkey.amount,
            isChecked = userkey.isChecked;
        return React.createElement("tr", {
          key: index
        }, React.createElement("td", null, user), React.createElement("td", null, name), React.createElement("td", null, renewal), React.createElement("td", null, left), React.createElement("td", null, React.createElement("span", {
          className: "ui red message"
        }, status, React.createElement(_Popup["default"], {
          trigger: React.createElement(_Icon["default"], {
            circular: true,
            name: "heart"
          })
        }, React.createElement(_Popup["default"].Content, null, "Hello. This is a regular pop-up which does not allow for lots of content. You cannot fit a lot of words here as the paragraphs will be pretty narrow.")))), React.createElement("td", {
          className: "right aligned"
        }, React.createElement("b", null, " ", amount, " USD ")), React.createElement("td", null, React.createElement("input", {
          className: "custom-control-input",
          type: "checkbox",
          defaultChecked: isChecked,
          onChange: _this.handleCheckBox,
          value: amount
        })));
      });
    };

    _this.getKeys = _this.getKeys.bind(_assertThisInitialized(_this));
    _this.state = {
      checked: false,
      totalAmount: Number(_this.props.data.totalAmount),
      countAll: Number(_this.props.data.countAll)
    };
    return _this;
  }

  _createClass(TableCustom, [{
    key: "render",
    value: function render() {
      return React.createElement("table", {
        className: this.props.data.header.tableClass
      }, React.createElement("thead", null, React.createElement("tr", null, this.renderHeader(this.props.data.header))), React.createElement("tbody", null, this.renderRowsData(this.props.data.content), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", {
        className: "right aligned"
      }, React.createElement("b", null, "Total:")), React.createElement("td", {
        className: "right aligned"
      }, React.createElement("b", null, this.state.totalAmount, " USD ")), React.createElement("td", null, " ", this.state.countAll, " "))));
    }
  }]);

  return TableCustom;
}(_react.PureComponent);

exports.TableCustom = TableCustom;

/***/ }),

/***/ "./src/renewal/app.tsx":
/*!*****************************!*\
  !*** ./src/renewal/app.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _UserTable = __webpack_require__(/*! ./UserTable */ "./src/renewal/UserTable.tsx");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App(props, appState) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _this.callAmountCount = function (userTotalAmount, userCountAll) {
      _this.setState({
        userTotalAmount: userTotalAmount,
        userCountAll: userCountAll
      });
    };

    _this.state = {
      userTotalAmount: _this.props.data.table.totalAmount,
      userCountAll: _this.props.data.table.countAll
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(_react.Fragment, null, React.createElement("form", {
        className: "renewal"
      }, React.createElement("div", null, React.createElement("h4", {
        id: "title",
        className: "title"
      }, this.props.data.text.title)), React.createElement(_UserTable.TableCustom, {
        data: this.props.data.table,
        callback: this.callAmountCount
      }), React.createElement("input", {
        id: "charge-value",
        type: "hidden",
        value: "2000"
      }), React.createElement("input", {
        className: "ui compact primary center button",
        type: "button",
        value: this.props.data.text.button
      }), React.createElement("span", null, this.state.userTotalAmount, " "), " - ", React.createElement("span", null, " ", this.state.userCountAll, " ")));
    }
  }]);

  return App;
}(_react.PureComponent);

exports["default"] = App;

/***/ }),

/***/ "./src/renewal/index.tsx":
/*!*******************************!*\
  !*** ./src/renewal/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _app = _interopRequireDefault(__webpack_require__(/*! ./app */ "./src/renewal/app.tsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

$.unblockUI();
(0, _reactDom.render)(React.createElement(_app["default"], {
  data: app.vars.renewal
}), document.getElementById('root'));

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=http://auditbrain.local/webapps/dist/renewal.js.map