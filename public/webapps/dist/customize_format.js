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

var _TextField = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js"));

var _Autocomplete = _interopRequireDefault(__webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var top100Films = [{
  title: 'The Shawshank Redemption',
  year: 1994
}, {
  title: 'The Godfather',
  year: 1972
}, {
  title: 'The Godfather: Part II',
  year: 1974
}, {
  title: 'The Dark Knight',
  year: 2008
}];

var CustomizeForm = function CustomizeForm(props) {
  var _props$data$options = props.data.options,
      optnSimboloDecimal = _props$data$options.optnSimboloDecimal,
      optnDigitosDespuesDecimal = _props$data$options.optnDigitosDespuesDecimal,
      optnSimboloAgrupacionDigitos = _props$data$options.optnSimboloAgrupacionDigitos,
      optnAgrupacionDigitos = _props$data$options.optnAgrupacionDigitos,
      optnFormatoNumeroNegativo = _props$data$options.optnFormatoNumeroNegativo,
      optnMostrarCerosIzquierda = _props$data$options.optnMostrarCerosIzquierda,
      optnSeparadorLista = _props$data$options.optnSeparadorLista,
      optnSistemaMedida = _props$data$options.optnSistemaMedida,
      optnUseDigitosNativos = _props$data$options.optnUseDigitosNativos;

  var _useState = (0, _react.useState)(props.data.content),
      _useState2 = _slicedToArray(_useState, 2),
      getData = _useState2[0],
      setGetData = _useState2[1];

  var _useForm = (0, _reactHookForm["default"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      openModal = _useState4[0],
      setOpentModal = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      bottonDisabled = _useState6[0],
      setBottonDisabled = _useState6[1];

  var _useState7 = (0, _react.useState)(getData.simboloDecimal),
      _useState8 = _slicedToArray(_useState7, 2),
      simboloDecimal = _useState8[0],
      setSimboloDecimal = _useState8[1];

  var _useState9 = (0, _react.useState)(getData.digitosDespuesDecimal),
      _useState10 = _slicedToArray(_useState9, 2),
      digitosDespuesDecimal = _useState10[0],
      setDigitosDespuesDecimal = _useState10[1];

  var _useState11 = (0, _react.useState)(getData.simboloAgrupacionDigitos),
      _useState12 = _slicedToArray(_useState11, 2),
      simboloAgrupacionDigitos = _useState12[0],
      setSimboloAgrupacionDigitos = _useState12[1];

  var _useState13 = (0, _react.useState)(getData.agrupacionDigitos),
      _useState14 = _slicedToArray(_useState13, 2),
      agrupacionDigitos = _useState14[0],
      setAgrupacionDigitos = _useState14[1];

  var _useState15 = (0, _react.useState)(getData.simboloSignoNegativo),
      _useState16 = _slicedToArray(_useState15, 2),
      simboloSignoNegativo = _useState16[0],
      setSimboloSignoNegativo = _useState16[1];

  var _useState17 = (0, _react.useState)(getData.mostrarCerosIzquierda),
      _useState18 = _slicedToArray(_useState17, 2),
      mostrarCerosIzquierda = _useState18[0],
      setMostrarCerosIzquierda = _useState18[1];

  var _useState19 = (0, _react.useState)(getData.formatoNumeroNegativo),
      _useState20 = _slicedToArray(_useState19, 2),
      formatoNumeroNegativo = _useState20[0],
      setFormatoNumeroNegativo = _useState20[1];

  var _useState21 = (0, _react.useState)(getData.separadorLista),
      _useState22 = _slicedToArray(_useState21, 2),
      separadorLista = _useState22[0],
      setSeparadorLista = _useState22[1];

  var _useState23 = (0, _react.useState)(getData.sistemaMedida),
      _useState24 = _slicedToArray(_useState23, 2),
      sistemaMedida = _useState24[0],
      setSistemaMedida = _useState24[1];

  var _useState25 = (0, _react.useState)(getData.digitosEstandar),
      _useState26 = _slicedToArray(_useState25, 2),
      digitosEstandar = _useState26[0],
      setDigitosEstandar = _useState26[1];

  var _useState27 = (0, _react.useState)(getData.useDigitosNativos),
      _useState28 = _slicedToArray(_useState27, 2),
      useDigitosNativos = _useState28[0],
      setUseDigitosNativos = _useState28[1];

  var closeModal = function closeModal() {
    setOpentModal(false);
  };

  var onSubmit = function onSubmit(data) {
    setGetData(data);
  };

  var onChange = function onChange(data) {
    setBottonDisabled(false);
    setGetData(data);
  };

  var createOptions = function createOptions(dataCustomize) {
    return dataCustomize.map(function (content) {
      return _react["default"].createElement("option", {
        key: content.value,
        value: content.value
      }, content.label);
    });
  };

  var handleSimboloSignoNegativoChange = function handleSimboloSignoNegativoChange(e) {
    setSimboloSignoNegativo(e.target.value);
  };

  var handleDigitosEstandarChange = function handleDigitosEstandarChange(e) {
    setDigitosEstandar(e.target.value);
  };

  return _react["default"].createElement(_semanticUiReact.Modal, {
    size: "tiny",
    open: openModal,
    closeIcon: true
  }, _react["default"].createElement(_semanticUiReact.Modal.Header, null, " PERSONALIZAR FORMATO "), _react["default"].createElement(_semanticUiReact.Modal.Content, null, _react["default"].createElement("div", null, _react["default"].createElement("h4", null, " Ejemplo: "), " ", _react["default"].createElement(_UseAccounting.UseAccounting, {
    data: getData
  })), _react["default"].createElement("p", null), _react["default"].createElement("form", {
    onSubmit: handleSubmit(onSubmit),
    onChange: handleSubmit(onChange)
  }, _react["default"].createElement(_Autocomplete["default"], {
    id: "combo-box-demo",
    options: top100Films,
    getOptionLabel: function getOptionLabel(option) {
      return option.title;
    },
    style: {
      width: 200
    },
    renderInput: function renderInput(params) {
      return _react["default"].createElement(_TextField["default"], _extends({}, params, {
        label: "",
        variant: "outlined",
        fullWidth: true
      }));
    }
  }), _react["default"].createElement("label", {
    className: "label-select"
  }, "S\xEDmbolo decimal:", _react["default"].createElement("select", {
    name: "simboloDecimal",
    value: simboloDecimal,
    onChange: function onChange(e) {
      return setSimboloDecimal(String(e.target.value));
    },
    ref: register({
      required: true
    })
  }, createOptions(optnSimboloDecimal))), _react["default"].createElement("label", {
    className: "label-select"
  }, "N\xFAmeros, de d\xEDgitos despu\xE9s del decimal:", _react["default"].createElement("select", {
    name: "digitosDespuesDecimal",
    value: digitosDespuesDecimal,
    onChange: function onChange(e) {
      return setDigitosDespuesDecimal(Number(e.target.value));
    },
    ref: register({
      required: true
    })
  }, createOptions(optnDigitosDespuesDecimal))), _react["default"].createElement("label", {
    className: "label-select"
  }, "S\xEDmbolo de agrupaci\xF3n de d\xEDgitos:", _react["default"].createElement("select", {
    name: "simboloAgrupacionDigitos",
    value: simboloAgrupacionDigitos,
    onChange: function onChange(e) {
      return setSimboloAgrupacionDigitos(String(e.target.value));
    },
    ref: register({
      required: true
    })
  }, createOptions(optnSimboloAgrupacionDigitos))), _react["default"].createElement("label", {
    className: "label-select"
  }, "Agrupaci\xF3n de d\xEDgitos:", _react["default"].createElement("select", {
    name: "agrupacionDigitos",
    value: agrupacionDigitos,
    onChange: function onChange(e) {
      return setAgrupacionDigitos(String(e.target.value));
    },
    ref: register({
      required: true
    })
  }, createOptions(optnAgrupacionDigitos))), _react["default"].createElement("label", {
    className: "label-select"
  }, "S\xEDmbolo de signo negativo:", _react["default"].createElement("input", {
    type: "text",
    name: "simboloSignoNegativo",
    value: simboloSignoNegativo,
    onChange: handleSimboloSignoNegativoChange,
    ref: register({
      required: true,
      max: 1,
      min: 1,
      maxLength: 1,
      pattern: /-{1}/i
    })
  }), errors.simboloSignoNegativo && _react["default"].createElement("span", {
    className: "error"
  }, " Formato incorrecto. ")), _react["default"].createElement("label", {
    className: "label-select"
  }, "Formato de n\xFAmero negativo:", _react["default"].createElement("select", {
    name: "formatoNumeroNegativo",
    value: formatoNumeroNegativo,
    onChange: function onChange(e) {
      return setFormatoNumeroNegativo(String(e.target.value));
    },
    ref: register({
      required: true
    })
  }, createOptions(optnFormatoNumeroNegativo))), _react["default"].createElement("label", {
    className: "label-select"
  }, "Mostrar ceros a la izquierda:", _react["default"].createElement("select", {
    name: "mostrarCerosIzquierda",
    value: mostrarCerosIzquierda,
    onChange: function onChange(e) {
      return setMostrarCerosIzquierda(String(e.target.value));
    },
    ref: register({
      required: true
    })
  }, createOptions(optnMostrarCerosIzquierda))), _react["default"].createElement("label", {
    className: "label-select"
  }, "Separador de lista:", _react["default"].createElement("select", {
    name: "separadorLista",
    value: separadorLista,
    onChange: function onChange(e) {
      return setSeparadorLista(String(e.target.value));
    },
    ref: register({
      required: true
    })
  }, createOptions(optnSeparadorLista))), _react["default"].createElement("label", {
    className: "label-select"
  }, "Sistema de medida:", _react["default"].createElement("select", {
    name: "sistemaMedida",
    value: sistemaMedida,
    onChange: function onChange(e) {
      return setSistemaMedida(e.target.value);
    },
    ref: register({
      required: true
    })
  }, createOptions(optnSistemaMedida))), _react["default"].createElement("label", {
    className: "label-select"
  }, "D\xEDgitos est\xE1ndar:", _react["default"].createElement("input", {
    type: "text",
    name: "digitosEstandar",
    value: digitosEstandar,
    onChange: handleDigitosEstandarChange,
    ref: register({
      required: true,
      max: 9,
      min: 9,
      maxLength: 9,
      pattern: /[0-9]{9}/i
    })
  }), errors.digitosEstandar && _react["default"].createElement("span", {
    className: "error"
  }, " Formato incorrecto. ")), _react["default"].createElement("label", {
    className: "label-select"
  }, "Use d\xEDgitos nativos:", _react["default"].createElement("select", {
    name: "useDigitosNativos",
    value: useDigitosNativos,
    onChange: function onChange(e) {
      return setUseDigitosNativos(e.target.value);
    },
    ref: register({
      required: true
    })
  }, createOptions(optnUseDigitosNativos))), _react["default"].createElement("div", {
    className: "actions ab-status-actions"
  }, _react["default"].createElement(_semanticUiReact.Button, {
    onClick: closeModal,
    className: "ui compact primary center button"
  }, "Cancelar"), _react["default"].createElement(_semanticUiReact.Popup, {
    trigger: _react["default"].createElement("span", null, _react["default"].createElement(_semanticUiReact.Button, {
      disabled: bottonDisabled,
      className: "ui compact primary center button",
      type: "submit"
    }, "Guardar")),
    content: "Para guardar los cambios debe seleccionar una opci\xF3n.",
    position: "bottom center",
    disabled: bottonDisabled ? false : true
  })))));
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
      simboloDecimal = _props$data.simboloDecimal,
      digitosDespuesDecimal = _props$data.digitosDespuesDecimal,
      simboloAgrupacionDigitos = _props$data.simboloAgrupacionDigitos,
      simboloSignoNegativo = _props$data.simboloSignoNegativo;

  var saveFormatNumbers = function saveFormatNumbers() {
    console.log(props.data);
  };

  var customNumberPositive = accounting.formatNumber(125478963, digitosDespuesDecimal, '' + simboloAgrupacionDigitos + '', '' + simboloDecimal + '');
  var customNumberNegative = accounting.formatNumber(125478963, digitosDespuesDecimal, '' + simboloAgrupacionDigitos + '', '' + simboloDecimal + '');
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("span", {
    className: "content"
  }, customNumberPositive), " |", ' ', _react["default"].createElement("span", {
    className: "content"
  }, simboloSignoNegativo, " ", customNumberNegative));
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

  function App(props, appState) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(_react.Fragment, null, React.createElement("div", {
        className: "form"
      }, React.createElement(_CustomizeForm.CustomizeForm, {
        data: this.props.data
      })));
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
  data: app.vars.customize
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