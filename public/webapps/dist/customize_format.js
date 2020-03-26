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
/******/ 		"customize_format": 0
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
/******/ 	deferredModules.push(["./src/customize_format/index.tsx","vendors~customize_format"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/customize_format/CustomizeForm.tsx":
/*!************************************************!*\
  !*** ./src/customize_format/CustomizeForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomizeForm = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactHookForm = _interopRequireDefault(__webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js"));

var _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _UseAccounting = __webpack_require__(/*! ./UseAccounting */ "./src/customize_format/UseAccounting.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CustomizeForm = function CustomizeForm(props) {
  var _useState = (0, _react.useState)(props.data),
      _useState2 = _slicedToArray(_useState, 2),
      getData = _useState2[0],
      setGetData = _useState2[1];

  var _useForm = (0, _reactHookForm["default"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      bottonDisabled = _useState4[0],
      setBottonDisabled = _useState4[1];

  var _useState5 = (0, _react.useState)(getData.currencySymbol),
      _useState6 = _slicedToArray(_useState5, 2),
      currencySymbol = _useState6[0],
      setCurrencySymbol = _useState6[1];

  var _useState7 = (0, _react.useState)(getData.positiveCurrencyFormat),
      _useState8 = _slicedToArray(_useState7, 2),
      positiveCurrencyFormat = _useState8[0],
      setPositiveCurrencyFormat = _useState8[1];

  var _useState9 = (0, _react.useState)(getData.negativeCurrencyFormat),
      _useState10 = _slicedToArray(_useState9, 2),
      negativeCurrencyFormat = _useState10[0],
      setNegativeCurrencyFormat = _useState10[1];

  var _useState11 = (0, _react.useState)(getData.decimalSymbol),
      _useState12 = _slicedToArray(_useState11, 2),
      decimalSymbol = _useState12[0],
      setDecimalSymbol = _useState12[1];

  var _useState13 = (0, _react.useState)(getData.noDigitsAfterDecimal),
      _useState14 = _slicedToArray(_useState13, 2),
      noDigitsAfterDecimal = _useState14[0],
      setNoDigitsAfterDecimal = _useState14[1];

  var _useState15 = (0, _react.useState)(getData.digitGroupingSymbol),
      _useState16 = _slicedToArray(_useState15, 2),
      digitGroupingSymbol = _useState16[0],
      setDigitGroupingSymbol = _useState16[1];

  var optnPositiveCurrencyFormat = [{
    value: '%s %v',
    label: '' + currencySymbol + ' 1'
  }, {
    value: '%s%v',
    label: '' + currencySymbol + '1'
  }, {
    value: '%v %s',
    label: '1 ' + currencySymbol + ''
  }, {
    value: '%v%s',
    label: '1' + currencySymbol + ''
  }];
  var optnNegativeCurrencyFormat = [{
    value: '%s (%v)',
    label: '' + currencySymbol + ' (1)'
  }, {
    value: '%s(%v)',
    label: '' + currencySymbol + '(1)'
  }, {
    value: '(%v) %s',
    label: '(1) ' + currencySymbol + ''
  }, {
    value: '(%v)%s',
    label: '(1)' + currencySymbol + ''
  }];
  var optnNoDigitsAfterDecimal = [{
    value: 0,
    label: 0
  }, {
    value: 1,
    label: 1
  }, {
    value: 2,
    label: 2
  }, {
    value: 3,
    label: 3
  }, {
    value: 4,
    label: 4
  }];

  var onSubmit = function onSubmit(data) {
    setGetData(data);
    props.dataCallback(data);
  };

  var onChange = function onChange(data) {
    setBottonDisabled(false);
    props.dataCallback(data);
  };

  var onCancel = function onCancel() {
    return false;
  };

  var createOptions = function createOptions(dataCustomize) {
    return dataCustomize.map(function (content) {
      return _react["default"].createElement("option", {
        key: content.value,
        value: content.value
      }, content.label);
    });
  };

  return _react["default"].createElement("form", {
    onSubmit: handleSubmit(onSubmit),
    onChange: handleSubmit(onChange),
    className: "form-normal"
  }, _react["default"].createElement("div", null, _react["default"].createElement("h4", null, " Ejemplo: "), " ", _react["default"].createElement(_UseAccounting.UseAccounting, {
    data: getData
  })), _react["default"].createElement("p", null), _react["default"].createElement("label", null, "S\xEDmbolo de la moneda", _react["default"].createElement("input", {
    type: "text",
    name: "currencySymbol",
    value: currencySymbol,
    onChange: function onChange(e) {
      return setCurrencySymbol(String(e.target.value));
    },
    ref: register({
      required: true,
      max: 1,
      min: 1,
      maxLength: 1
    })
  }), errors.currencySymbol && _react["default"].createElement("span", {
    className: "error"
  }, "Formato incorrecto solo se permite un s\xEDmbolo de moneda Ej: $")), _react["default"].createElement("label", null, "Formato de n\xFAmero positivo:", _react["default"].createElement("select", {
    name: "positiveCurrencyFormat",
    value: positiveCurrencyFormat,
    onChange: function onChange(e) {
      return setPositiveCurrencyFormat(String(e.target.value));
    },
    ref: register({
      required: true
    })
  }, createOptions(optnPositiveCurrencyFormat))), _react["default"].createElement("label", null, "Formato de n\xFAmero negativo:", _react["default"].createElement("select", {
    name: "negativeCurrencyFormat",
    value: negativeCurrencyFormat,
    onChange: function onChange(e) {
      return setNegativeCurrencyFormat(String(e.target.value));
    },
    ref: register({
      required: true
    })
  }, createOptions(optnNegativeCurrencyFormat))), _react["default"].createElement("label", null, "S\xEDmbolo decimal:", _react["default"].createElement("input", {
    type: "text",
    name: "decimalSymbol",
    value: decimalSymbol,
    onChange: function onChange(e) {
      return setDecimalSymbol(String(e.target.value));
    },
    ref: register({
      required: true,
      max: 1,
      min: 1,
      maxLength: 1,
      pattern: /[,.']{1}/i
    })
  }), _react["default"].createElement("span", null, "Permitidos: ", _react["default"].createElement("b", null, ",. ")), errors.decimalSymbol && _react["default"].createElement("span", {
    className: "error"
  }, " Formato incorrecto, solo se permite: . , ")), _react["default"].createElement("label", null, "N\xFAmeros, de d\xEDgitos despu\xE9s del decimal:", _react["default"].createElement("select", {
    name: "noDigitsAfterDecimal",
    value: noDigitsAfterDecimal,
    onChange: function onChange(e) {
      return setNoDigitsAfterDecimal(Number(e.target.value));
    },
    ref: register({
      required: true
    })
  }, createOptions(optnNoDigitsAfterDecimal))), _react["default"].createElement("label", null, "S\xEDmbolo de d\xEDgitos:", _react["default"].createElement("input", {
    type: "text",
    name: "digitGroupingSymbol",
    value: digitGroupingSymbol,
    onChange: function onChange(e) {
      return setDigitGroupingSymbol(String(e.target.value));
    },
    ref: register({
      required: true,
      max: 1,
      min: 1,
      maxLength: 1,
      pattern: /[,.']{1}/i
    })
  }), _react["default"].createElement("span", null, "Permitidos: ", _react["default"].createElement("b", null, ",. ")), errors.digitGroupingSymbol && _react["default"].createElement("span", {
    className: "error"
  }, "Formato incorrecto, solo se permite: . , ")), _react["default"].createElement("div", {
    className: "actions ab-status-actions"
  }, _react["default"].createElement(_semanticUiReact.Button, {
    onClick: onCancel,
    className: "ui compact primary center button"
  }, "Cancelar"), _react["default"].createElement(_semanticUiReact.Popup, {
    trigger: _react["default"].createElement("span", null, _react["default"].createElement(_semanticUiReact.Button, {
      disabled: bottonDisabled,
      className: "ui compact primary center button",
      type: "submit"
    }, "Guardar")),
    content: "Para guardar los cambios debe seleccionar una opci\xF3n.",
    position: "bottom center",
    disabled: !bottonDisabled
  })));
};

exports.CustomizeForm = CustomizeForm;

/***/ }),

/***/ "./src/customize_format/UseAccounting.tsx":
/*!************************************************!*\
  !*** ./src/customize_format/UseAccounting.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UseAccounting = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var UseAccounting = function UseAccounting(props) {
  var _props$data = props.data,
      currencySymbol = _props$data.currencySymbol,
      positiveCurrencyFormat = _props$data.positiveCurrencyFormat,
      negativeCurrencyFormat = _props$data.negativeCurrencyFormat,
      decimalSymbol = _props$data.decimalSymbol,
      noDigitsAfterDecimal = _props$data.noDigitsAfterDecimal,
      digitGroupingSymbol = _props$data.digitGroupingSymbol;
  var customNumberPositive = accounting.formatMoney(5318008, {
    symbol: '' + currencySymbol + '',
    decimal: '' + decimalSymbol + '',
    precision: noDigitsAfterDecimal,
    thousand: '' + digitGroupingSymbol + '',
    format: {
      pos: '' + positiveCurrencyFormat + ''
    }
  });
  var customNumberNegative = accounting.formatMoney(5318008, {
    symbol: '' + currencySymbol + '',
    decimal: '' + decimalSymbol + '',
    precision: noDigitsAfterDecimal,
    thousand: '' + digitGroupingSymbol + '',
    format: {
      pos: '' + negativeCurrencyFormat + ''
    }
  });
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("span", {
    className: "content"
  }, _react["default"].createElement("b", null, "Positivo:"), " ", customNumberPositive), ' | ', _react["default"].createElement("span", {
    className: "content"
  }, _react["default"].createElement("b", null, "Negativo:"), " ", customNumberNegative));
};

exports.UseAccounting = UseAccounting;

/***/ }),

/***/ "./src/customize_format/app.tsx":
/*!**************************************!*\
  !*** ./src/customize_format/app.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _CustomizeForm = __webpack_require__(/*! ./CustomizeForm */ "./src/customize_format/CustomizeForm.tsx");

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

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _this.closeModal = function () {
      _this.setState({
        openModal: false
      });
    };

    _this.dataSettignsCallback = function (data) {
      var settings = {
        currency: {
          symbol: '' + data.currencySymbol + '',
          format: {
            pos: '' + data.positiveCurrencyFormat + '',
            neg: '' + data.negativeCurrencyFormat + ''
          },
          decimal: '' + data.decimalSymbol + '',
          thousand: '' + data.digitGroupingSymbol + '',
          precision: data.noDigitsAfterDecimal
        }
      };
      console.log(settings);
    };

    _this.state = {
      data: _this.props.data
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "form"
      }, React.createElement(_CustomizeForm.CustomizeForm, {
        data: this.props.data,
        dataCallback: this.dataSettignsCallback
      }));
    }
  }]);

  return App;
}(_react.PureComponent);

exports["default"] = App;

/***/ }),

/***/ "./src/customize_format/index.tsx":
/*!****************************************!*\
  !*** ./src/customize_format/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _app = _interopRequireDefault(__webpack_require__(/*! ./app */ "./src/customize_format/app.tsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

$.unblockUI();
(0, _reactDom.render)(React.createElement(_app["default"], {
  data: app.vars.customize.content
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
//# sourceMappingURL=http://auditbrain.local/webapps/dist/customize_format.js.map