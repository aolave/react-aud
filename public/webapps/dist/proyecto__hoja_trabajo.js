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
/******/ 		"proyecto__hoja_trabajo": 0
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
/******/ 	deferredModules.push(["./src/proyecto__hoja_trabajo/index.tsx","vendors~proyecto__hoja_trabajo"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/global/AuthorIconLog.tsx":
/*!**************************************!*\
  !*** ./src/global/AuthorIconLog.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthorIconLogDefaultWrapper = exports.AuthorIconLogEditable = exports.AuthorIconLog = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Icon/Icon */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Icon/Icon.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Button/Button */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Button/Button.js"));

var _Loader = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Loader/Loader */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Loader/Loader.js"));

var _Popup = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Popup/Popup */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Popup/Popup.js"));

var _Dimmer = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Dimmer/Dimmer */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Dimmer/Dimmer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AuthorIconLog =
/*#__PURE__*/
function (_Component) {
  _inherits(AuthorIconLog, _Component);

  function AuthorIconLog() {
    _classCallCheck(this, AuthorIconLog);

    return _possibleConstructorReturn(this, _getPrototypeOf(AuthorIconLog).apply(this, arguments));
  }

  _createClass(AuthorIconLog, [{
    key: "render",
    value: function render() {
      var classes = ['author-icon-log'];

      if (this.props.className) {
        classes.push(this.props.className);
      }

      if (this.props.inline) {
        classes.push('inline');
      }

      classes = (0, _classnames["default"])(classes, this.props.size);
      var icon = React.createElement(_Icon["default"], {
        //change icon: name: "user circle",
		name: "far fa-user-circle",
        size: this.props.size,
        color: _.size(this.props.log) == 0 ? null : this.props.iconColor,
        disabled: _.size(this.props.log) == 0
      });

      if (this.props.alertText) {
        icon = React.createElement(_Icon["default"].Group, null, icon, React.createElement(_Icon["default"], {
          corner: "top right",
          color: "red",
          name: "warning circle"
        }));
      }

      var iconComp;

      if (!this.props.inline) {
        iconComp = React.createElement("div", null, this.props.label && React.createElement("span", {
          className: "lb"
        }, this.props.label), icon);
      } else {
        var item = this.props.log == null ? null : this.props.log[0];
        iconComp = React.createElement("div", null, this.props.label && React.createElement("span", {
          className: "lb"
        }, this.props.label), icon, this.props.alertText && React.createElement("span", {
          className: "alert-text"
        }, React.createElement(_Icon["default"], {
          color: "red",
          name: "warning circle"
        }), " ", this.props.alertText), item && React.createElement("div", {
          className: "content user-info"
        }, React.createElement("div", {
          className: "user-sigla"
        }, item.User.sigla), React.createElement("time", {
          dateTime: Date.create(item.ts).format('{year}-{MM}-{dd}')
        }, Date.create(item.ts).format('{year}-{MM}-{dd}'))));
      }

      return React.createElement("div", {
        className: classes
      }, React.createElement(_Popup["default"], {
        trigger: iconComp,
        position: "bottom center",
        className: "author-icon-log-popup",
        pinned: true,
        size: this.props.size
      }, React.createElement(_Popup["default"].Header, null, this.props.name, this.props.alertText && React.createElement("div", {
        className: "alert-text"
      }, React.createElement(_Icon["default"], {
        color: "red",
        name: "warning circle"
      }), " ", this.props.alertText)), React.createElement(_Popup["default"].Content, null, this.props.log == null ? React.createElement("div", {
        className: "label"
      }, "Sin Especificar") : React.createElement("table", {
        className: "table nowrap"
      }, React.createElement("tbody", null, this.props.log.map(function (item, k) {
        return React.createElement("tr", {
          key: k
        }, React.createElement("td", null, icon, " ", item.User.name, " (", item.User.sigla, ")"), React.createElement("td", null, React.createElement("em", null, Date.create(item.ts).format('{year}-{MM}-{dd}'))));
      }))))));
    }
  }]);

  return AuthorIconLog;
}(_react.Component);

exports.AuthorIconLog = AuthorIconLog;

var AuthorIconLogEditable =
/*#__PURE__*/
function (_Component2) {
  _inherits(AuthorIconLogEditable, _Component2);

  function AuthorIconLogEditable() {
    var _this;

    _classCallCheck(this, AuthorIconLogEditable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthorIconLogEditable).apply(this, arguments));
    _this.state = {
      isLoading: false
    };

    _this.onClickEdit = function (ev) {
      ev.preventDefault();

      _this.setState({
        isLoading: true
      });

      _this.props.onClickEdit();
    };

    return _this;
  }

  _createClass(AuthorIconLogEditable, [{
    key: "render",
    value: function render() {
      var classes = ['author-icon-log'];

      if (this.props.className) {
        classes.push(this.props.className);
      }

      classes = (0, _classnames["default"])(classes, this.props.size);
      var icon = React.createElement(_Icon["default"], {
        // change icoon name: "user circle",
		 name: "far fa-user-circle",
        size: this.props.size,
        color: this.props.log == null ? null : this.props.iconColor,
        disabled: this.props.log == null
      });
      var iconComp = React.createElement("div", {
        style: {
          position: 'relative'
        }
      }, React.createElement(_Dimmer["default"], {
        inverted: true,
        active: this.state.isLoading
      }, React.createElement(_Loader["default"], {
        inverted: true
      })), this.props.label && React.createElement("span", {
        className: "lb"
      }, this.props.label), icon, React.createElement(_Button["default"], {
        className: "action edit",
        disabled: this.props.disableEdit,
        compact: true,
        size: "mini",
        color: this.props.iconColor,
        onClick: this.onClickEdit
      }, this.props.editText));
      return React.createElement("div", {
        className: classes
      }, React.createElement(_Popup["default"], {
        trigger: iconComp,
        position: "bottom center",
        pinned: true,
        size: this.props.size
      }, React.createElement(_Popup["default"].Header, {
        content: this.props.name
      }), React.createElement(_Popup["default"].Content, null, this.props.log == null ? React.createElement("div", {
        className: "label"
      }, "Sin Especificar") : React.createElement("table", {
        className: "table nowrap"
      }, React.createElement("tbody", null, this.props.log.map(function (item, k) {
        return React.createElement("tr", {
          key: k
        }, React.createElement("td", null, icon, " ", item.User.name, " (", item.User.sigla, ")"), React.createElement("td", null, React.createElement("em", null, Date.create(item.ts).format('{year}-{MM}-{dd}'))));
      }))))));
    }
  }]);

  return AuthorIconLogEditable;
}(_react.Component);

exports.AuthorIconLogEditable = AuthorIconLogEditable;
AuthorIconLogEditable.defaultProps = {
  disableEdit: false
};

var AuthorIconLogDefaultWrapper =
/*#__PURE__*/
function (_Component3) {
  _inherits(AuthorIconLogDefaultWrapper, _Component3);

  function AuthorIconLogDefaultWrapper() {
    _classCallCheck(this, AuthorIconLogDefaultWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(AuthorIconLogDefaultWrapper).apply(this, arguments));
  }

  _createClass(AuthorIconLogDefaultWrapper, [{
    key: "render",
    value: function render() {
      var model = this.props.model;
      var alertTextRevisado = model.fecha_completado && model.fecha_revision && Date.create(model.fecha_completado) > Date.create(model.fecha_revision) ? 'Modificado despues de Revisado' : null;
      return React.createElement("div", {
        className: (0, _classnames["default"])('author-icon-log-wrapper', this.props.size, this.props.className)
      }, React.createElement(AuthorIconLog, {
        log: model.UpdateLog,
        name: "Preparado por",
        label: "P",
        iconColor: "green",
        size: this.props.size
      }), React.createElement(AuthorIconLog, {
        log: model.RevisionLog,
        name: "Revisado por",
        label: "R",
        iconColor: "olive",
        size: this.props.size,
        alertText: alertTextRevisado
      }));
    }
  }]);

  return AuthorIconLogDefaultWrapper;
}(_react.Component);

exports.AuthorIconLogDefaultWrapper = AuthorIconLogDefaultWrapper;

/***/ }),

/***/ "./src/global/ButtonEdit.tsx":
/*!***********************************!*\
  !*** ./src/global/ButtonEdit.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Button = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Button */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Button/index.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Icon/Icon */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Icon/Icon.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ButtonEdit = function ButtonEdit(props) {
  var children = props.children,
      buttonProps = __rest(props, ["children"]);

  buttonProps.className = (0, _classnames["default"])(buttonProps.className, 'action');
  buttonProps = Object.assign({
    icon: true,
    basic: true,
    compact: true,
    size: 'mini',
    title: 'Editar'
  }, buttonProps);

  if (typeof children == 'undefined') {
    children = React.createElement(_Icon["default"], {
      //change icon: name: "pencil square",
	  name: "icon-svg editar",
      color: "green",
      size: "large"
    });
  }

  return React.createElement(_Button["default"], _extends({}, buttonProps, {
    type: "button"
  }), children);
};

var _default = ButtonEdit;
exports["default"] = _default;

/***/ }),

/***/ "./src/global/EditorPreview.tsx":
/*!**************************************!*\
  !*** ./src/global/EditorPreview.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _Modal = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Modal/Modal */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Modal/Modal.js"));

var _eventStack = __webpack_require__(/*! @semantic-ui-react/event-stack */ "./node_modules/@semantic-ui-react/event-stack/lib/index.js");

var _keyboardKey = _interopRequireDefault(__webpack_require__(/*! keyboard-key */ "./node_modules/keyboard-key/src/keyboardKey.js"));

var _ckeditor4React = _interopRequireDefault(__webpack_require__(/*! ckeditor4-react */ "./node_modules/ckeditor4-react/dist/ckeditor.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _ButtonEdit = _interopRequireDefault(__webpack_require__(/*! ./ButtonEdit */ "./src/global/ButtonEdit.tsx"));

var _Attachments = __webpack_require__(/*! ../proyecto__hoja_trabajo/Attachments */ "./src/proyecto__hoja_trabajo/Attachments.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CKEDITOR_OPTIONS = {
  basic: {
    height: 150,
    toolbar: [{
      name: 'basicstyles',
      groups: ['basicstyles', 'cleanup'],
      items: ['Bold', 'Italic']
    }, {
      name: 'paragraph',
      groups: ['list', 'indent', 'blocks', 'align', 'bidi'],
      items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'TextColor']
    }],
    autoParagraph: false,
    removePlugins: 'elementspath, uploadfile, uploadfileab, resize',
    extraPlugins: 'openlink'
  }
};

var EditorPreview =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(EditorPreview, _PureComponent);

  function EditorPreview(props) {
    var _this;

    _classCallCheck(this, EditorPreview);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditorPreview).call(this, props));
    _this.previewRef = (0, _react.createRef)();

    _this.handleEscape = function (e) {
      if (_keyboardKey["default"].getCode(e) !== _keyboardKey["default"].Escape) return;

      if (typeof CKEDITOR !== 'undefined' && CKEDITOR.dialog.getCurrent() != null) {
        return;
      }

      _this.onClose();
    };

    _this.onChange = function (evt) {
      if (_this.props.inline) {
        _this.props.onSave(evt.editor, false, false);
      }

      if (!_this._cachedEditor) {
        _this._cachedEditor = evt.editor;
      }

      if (!_this.props.autosave) {
        return;
      }

      if (!_this.autosaveId) {
        _this.autosaveId = setTimeout(_this.autosave, EditorPreview.AUTOSAVE_DELAY * 1000);
      }
    };

    _this.onClickEdit = function (ev) {
      ev.preventDefault();

      _this.setState({
        isModalEditOpen: true,
        isLoading: true
      });
    };

    _this.onSave = function () {
      if (_this.autosaveId) {
        clearTimeout(_this.autosaveId);
        _this.autosaveId = null;
      }

      if ($.isFunction(_this.props.onSave)) {
        _this.props.onSave(_this.getEditor(), true, false, function () {
          _this.setState({
            isAutosaving: false
          });

          _this.fetchAttachments();
        });

        _this.setState({
          isModalEditOpen: false
        });
      } else {
        _this.setState({
          isModalEditOpen: false,
          isAutosaving: false
        });

        _this.fetchAttachments();
      }
    };

    _this.onCancel = function () {
      _this.setState({
        isModalEditOpen: false
      });

      if ($.isFunction(_this.props.onClose)) {
        _this.props.onClose();
      }
    };

    _this.onClose = function () {
      if (_this.autosaveId) {
        clearInterval(_this.autosaveId);
        _this.autosaveId = null;
      }

      _this.setState({
        isModalEditOpen: false
      });

      if ($.isFunction(_this.props.onClose)) {
        _this.props.onClose();
      }
    };

    _this.onModalMount = function () {
      _eventStack.instance.sub('keydown', _this.handleEscape, {
        pool: 'default'
      });

      if (_this.state.attachments == null) {
        _this.fetchAttachments();
      }
    };

    _this.autosave = function () {
      _this.setState({
        isAutosaving: true
      });

      var ckeditor = _this.getEditor();

      if (ckeditor != null) {
        _this.props.onSave(ckeditor, false, true, function () {
          return _this.setState({
            isAutosaving: false
          });
        });

        _this.fetchAttachments();
      }

      if (_this.autosaveId) {
        clearInterval(_this.autosaveId);
        _this.autosaveId = null;
      }
    };

    _this.onClickPreview = function (ev) {
      if (_this.props.onClickPreview) {
        _this.props.onClickPreview(ev);
      }

      if (_this.props.openOnClickPreview && _this.props.editable) {
        _this.setState({
          isModalEditOpen: true
        });
      }
    };

    _this.onUpdateAttachment = function () {
      _this.fetchAttachments();
    };

    _this.onDeleteAttachment = function (adjunto, cb) {
      _this.setState({
        isLoadingAttachments: true
      });

      var data = (0, _Attachments.cleanAttachmentFrom)(_this.props.data, adjunto);

      if ($.isFunction(cb)) {
        cb();
      }

      var ckeditor = _this.getEditor();

      if (ckeditor) {
        ckeditor.setData(data);

        _this.autosave();
      }
    };

    _this.state = {
      isModalEditOpen: _this.props.open,
      isAutosaving: false,
      isLoading: true,
      attachments: null,
      isLoadingAttachments: false
    };
    return _this;
  }

  _createClass(EditorPreview, [{
    key: "getEditor",
    value: function getEditor() {
      if (this.ckeditorComp != null) {
        return this.ckeditorComp.editor;
      }

      if (this._cachedEditor) {
        return this._cachedEditor;
      }

      return null;
    }
  }, {
    key: "assertRequired",
    value: function assertRequired() {
      if (!this.props.editable) {
        return false;
      }

      if (!this.props.required) {
        return false;
      }

      var ckeditor = this.getEditor();

      if (_.trim(ckeditor.getData()) != '') {
        return false;
      }

      bootbox.alert('Esta campo es requerido, por lo tanto no puede quedar vacío.');
      return true;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open && !this.state.isModalEditOpen) {
        this.setState({
          isModalEditOpen: true
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      $(this.previewRef.current).find('a[href]').each(function () {
        $(this).attr('target', '_blank');
      });
    }
  }, {
    key: "parseCkeditorOptions",
    value: function parseCkeditorOptions() {
      var ckeditorOptions = this.props.ckeditorOptions;

      if (typeof ckeditorOptions == 'string') {
        ckeditorOptions = CKEDITOR_OPTIONS[ckeditorOptions];
      }

      if (typeof this.props.ckeditorUploadOptions !== 'undefined') {
        var defaultUrl = 'proyecto/' + app.vars.idproyecto + '/adjunto/upload';
        var _this$props$ckeditorU = this.props.ckeditorUploadOptions,
            _this$props$ckeditorU2 = _this$props$ckeditorU.url,
            url = _this$props$ckeditorU2 === void 0 ? defaultUrl : _this$props$ckeditorU2,
            model = _this$props$ckeditorU.model,
            modelId = _this$props$ckeditorU.modelId;

        if (modelId === null || modelId === undefined) {
          ckeditorOptions.removePlugins = 'elementspath,uploadimage,uploadfile,uploadfileab';
        } else {
          ckeditorOptions.uploadUrl = url_for("".concat(url, "?model=").concat(model, "&model_id=").concat(modelId));
          ckeditorOptions.imageUploadUrl = url_for("".concat(url, "?model=").concat(model, "&model_id=").concat(modelId));
          ckeditorOptions.filebrowserUploadUrl = url_for("".concat(url, "?model=").concat(model, "&model_id=").concat(modelId, "&n=attachment"));
        }
      }

      return ckeditorOptions;
    }
  }, {
    key: "fetchAttachments",
    value: function fetchAttachments() {
      var _this2 = this;

      if (typeof this.props.ckeditorUploadOptions === 'undefined') {
        return;
      }

      var _this$props$ckeditorU3 = this.props.ckeditorUploadOptions,
          model = _this$props$ckeditorU3.model,
          modelId = _this$props$ckeditorU3.modelId;
      this.setState({
        isLoadingAttachments: true
      });
      $.getJSON(url_for("proyecto/".concat(app.vars.idproyecto, "/adjunto/json")), {
        model: model,
        model_id: modelId
      }).done(function (res) {
        _this2.setState({
          attachments: res.response,
          isLoadingAttachments: false
        });
      });
    }
  }, {
    key: "getCkeditorOptions",
    value: function getCkeditorOptions() {
      var self = this;
      var ckeditorOptions = Object.assign({
        height: 200,
        toolbar: [{
          name: 'clipboard',
          items: ['Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo']
        }, {
          name: 'links',
          items: ['Link', 'pasolink', 'muestreolink', 'Attachments']
        }, {
          name: 'insert',
          items: ['Table', 'SpecialChar']
        }, {
          name: 'tools',
          items: ['Maximize']
        }, {
          name: 'basicstyles',
          items: ['Bold', 'Italic', 'Underline']
        }, {
          name: 'paragraph',
          items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'TextColor']
        }, {
          name: 'styles',
          items: ['Styles', 'Format']
        }],
        autoParagraph: false,
        enterMode: CKEDITOR.ENTER_BR,
        removePlugins: 'elementspath',
        extraPlugins: 'uploadimage,pastebase64,uploadfileab,openlink,attach,justify,colorbutton,pastefromexcel,colordialog,pasolink',
        openlink_modifier: 0,
        onAttachmentUpload: function onAttachmentUpload(response, editor) {
          response = response.replace('<pre>', '').replace('<pre style="word-wrap: break-word; white-space: pre-wrap;">', '').replace('</pre>', '');
          var rs = JSON.parse(response);
          console.log(rs);

          _.forEach(rs, function (r) {
            if (r.uploaded) {
              editor.insertHtml("<a href='" + r.url + "' target='_blank' class='proyecto-attachment' >" + r.fileName + '</a><br> ');
            } else {
              alert(r.error);
            }
          });

          CKEDITOR.dialog.getCurrent().hide();

          if (self.props.onUpload) {
            self.props.onUpload();
          }

          self.fetchAttachments();
          var ckeditor_comp = self.getEditor();

          if (ckeditor_comp) {
            self.props.onSave(ckeditor_comp, false, false);
          }
        }
      }, this.parseCkeditorOptions());
      ckeditorOptions.on = Object.assign({
        fileUploadRequest: function fileUploadRequest(ev) {
          var loader = ev.data.fileLoader;
          loader.on('abort', function () {
            $.unblockUI();
          });
          loader.on('error', function () {
            console.log(loader);
            $.unblockUI();
          });
          $.blockUI({
            message: '<div class="ajax-loader-snake-32  _a-center"></div><h3 class="loading-block-text">Cargando archivo al servidor.<br> Por favor Espere ...</h3>'
          });
        },
        fileUploadResponse: function fileUploadResponse() {
          $.unblockUI();
          this.fire('change');
        },
        paste: function paste(evt) {
          evt.data.dataValue = evt.data.dataValue.replace(/(min-)?width:.+?;/g, '');
        }
      }, ckeditorOptions.on || {});
      return ckeditorOptions;
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var footer = this.props.footer;

      if (footer === 'AttachmentList') {
        return React.createElement(_Attachments.AttachmentListPanel, {
          isLoading: this.state.isLoadingAttachments,
          attachments: this.state.attachments,
          onUpdateItem: this.onUpdateAttachment,
          onDeleteItem: this.onDeleteAttachment
        });
      }

      return footer;
    }
  }, {
    key: "renderModal",
    value: function renderModal() {
      if (!this.state.isModalEditOpen) {
        return;
      }

      var classNames = (0, _classnames["default"])(['editor-preview-modal', this.props.className ? this.props.className + '-modal' : false]);
      return React.createElement(_Modal["default"], {
        className: classNames,
        open: true,
        closeIcon: true,
        closeOnDimmerClick: false,
        dimmer: "inverted",
        onClose: this.onClose,
        closeOnEscape: false,
        onMount: this.onModalMount,
        size: "large"
      }, React.createElement(_Modal["default"].Content, null, this.renderEditor()), this.props.editable ? React.createElement(_Modal["default"].Actions, null, this.props.leftActions, React.createElement("button", {
        className: "ui button negative",
        onClick: this.onCancel
      }, "Cancelar"), React.createElement("button", {
        className: "ui button primary",
        onClick: this.onSave
      }, "Guardar")) : React.createElement(_Modal["default"].Actions, null, this.props.leftActions, React.createElement("button", {
        className: "ui button negative",
        onClick: this.onCancel
      }, "Cerrar")));
    }
  }, {
    key: "renderEditor",
    value: function renderEditor() {
      var _this3 = this;

      var label;

      if (this.props.label || this.props.labelTitle) {
        label = '<div class="editor-label"> <strong class="editor-label-title">' + (this.props.labelTitle || '') + '</strong> ' + (this.props.label || '') + ' </div>';
      }

      return React.createElement(_react.Fragment, null, label && React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: label
        }
      }), React.createElement("div", {
        style: {
          minHeight: '200px'
        }
      }, React.createElement("div", {
        className: "loading"
      }, React.createElement("div", {
        className: this.state.isAutosaving ? '' : 'ui-helper-hidden'
      }, React.createElement("span", {
        className: "ajax-loader-snake"
      }), " Guardando...")), React.createElement("div", {
        className: (0, _classnames["default"])('ui dimmer inverted', {
          active: this.state.isLoading
        })
      }, React.createElement("div", {
        className: "ui loader"
      }, "Cargando...")), React.createElement(_ckeditor4React["default"], {
        ref: function ref(c) {
          return _this3.ckeditorComp = c;
        },
        data: this.props.data,
        config: this.getCkeditorOptions(),
        onChange: this.onChange,
        onInstanceReady: function onInstanceReady() {
          return _this3.setState({
            isLoading: false
          });
        },
        readOnly: !this.props.editable
      })), this.renderFooter());
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.inline) {
        return React.createElement("div", {
          className: "editor-inline"
        }, " ", this.renderEditor());
      }

      var preview = this.props.preview == null ? this.props.data || '' : this.props.preview;
      var classNames = (0, _classnames["default"])(['editor-preview', this.props.className, preview ? 'text-non-empty' : 'text-empty']);

      if (this.props.prefixPreview) {
        preview = '<strong class="editor-preview-title" >' + this.props.prefixPreview + '</strong> ' + preview;
      }

      preview = preview.replace(/(min-)?width:.+?;/g, '');
      return React.createElement(_react.Fragment, null, React.createElement("div", {
        className: (0, _classnames["default"])('editor-preview-wrapper', this.props.wrapperClassName),
        onClick: this.onClickPreview
      }, React.createElement("div", {
        ref: this.previewRef,
        className: classNames,
        dangerouslySetInnerHTML: {
          __html: preview
        },
        style: this.props.previewStyle
      }), this.props.editable && React.createElement("div", {
        className: "action-list"
      }, React.createElement(_ButtonEdit["default"], {
        onClick: this.onClickEdit
      }))), this.renderModal());
    }
  }]);

  return EditorPreview;
}(_react.PureComponent);

exports["default"] = EditorPreview;
EditorPreview.AUTOSAVE_DELAY = 60;
EditorPreview.defaultProps = {
  open: false,
  autosave: false,
  required: false,
  editable: true,
  openOnClickPreview: true,
  ckeditorOptions: {}
};

/***/ }),

/***/ "./src/global/ErrorHandler.tsx":
/*!*************************************!*\
  !*** ./src/global/ErrorHandler.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultErrorHandler = void 0;

var _react = __webpack_require__(/*! react */ "react");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DefaultErrorHandler =
/*#__PURE__*/
function (_Component) {
  _inherits(DefaultErrorHandler, _Component);

  function DefaultErrorHandler() {
    var _this;

    _classCallCheck(this, DefaultErrorHandler);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DefaultErrorHandler).apply(this, arguments));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(DefaultErrorHandler, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      if (this.isLocalhost()) {
        alert('ERROR: ' + error.message);
      }
    }
  }, {
    key: "isLocalhost",
    value: function isLocalhost() {
      return window.location.host === 'auditbrain.local';
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return this.props.errorMessage;
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return DefaultErrorHandler;
}(_react.Component);

exports.DefaultErrorHandler = DefaultErrorHandler;
DefaultErrorHandler.defaultProps = {
  errorMessage: null
};

/***/ }),

/***/ "./src/global/InputAutoNumeric.tsx":
/*!*****************************************!*\
  !*** ./src/global/InputAutoNumeric.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InputAutoNumeric;

var _reactNumeric = _interopRequireDefault(__webpack_require__(/*! react-numeric */ "./node_modules/react-numeric/dist/index.js"));

var _autonumeric = _interopRequireDefault(__webpack_require__(/*! autonumeric */ "./node_modules/autonumeric/dist/autoNumeric.min.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultProps = {
  decimalPlaces: 2,
  decimalCharacter: ',',
  decimalCharacterAlternative: '.',
  digitGroupSeparator: '.',
  allowDecimalPadding: false,
  selectOnFocus: false
};

function InputAutoNumeric(props) {
  props = Object.assign({}, props, defaultProps);

  if (typeof props.value != 'undefined' && _.size(props.value) > 0) {
    props.value = +props.value;
  }

  if (typeof props.isEditable == 'undefined' || props.isEditable) {
    return React.createElement(_reactNumeric["default"], props);
  } else {
    return React.createElement("span", {
      className: "autonumeric non-editable value"
    }, _autonumeric["default"].format(props.value, props));
  }
}

/***/ }),

/***/ "./src/global/StatusButtonAction.tsx":
/*!*******************************************!*\
  !*** ./src/global/StatusButtonAction.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusDivBlock = exports.StatusButtonGroupActions = exports.RevisadoButtonAction = exports.CompletadoButtonAction = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _Popup = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Popup/Popup */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Popup/Popup.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Button/Button */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Button/Button.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CompletadoButtonAction =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CompletadoButtonAction, _PureComponent);

  function CompletadoButtonAction() {
    _classCallCheck(this, CompletadoButtonAction);

    return _possibleConstructorReturn(this, _getPrototypeOf(CompletadoButtonAction).apply(this, arguments));
  }

  _createClass(CompletadoButtonAction, [{
    key: "render",
    value: function render() {
      var completado_disabled_text = this.props.disableText;
      return React.createElement(_Popup["default"], {
        trigger: React.createElement("div", {
          className: "button-wrapper"
        }, React.createElement(_Button["default"], {
          primary: true,
          icon: true,
          compact: true,
          onClick: this.props.onClick,
          disabled: completado_disabled_text != null
        }, ' ', React.createElement("i", {
          className: "icon check"
        }), " Completado")),
        content: completado_disabled_text,
        header: "Marcar como Completado | Opci\xF3n deshabilitada",
        disabled: completado_disabled_text == null,
        className: "disable-text",
        on: "hover"
      });
    }
  }]);

  return CompletadoButtonAction;
}(_react.PureComponent);

exports.CompletadoButtonAction = CompletadoButtonAction;

var RevisadoButtonAction =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(RevisadoButtonAction, _PureComponent2);

  function RevisadoButtonAction() {
    _classCallCheck(this, RevisadoButtonAction);

    return _possibleConstructorReturn(this, _getPrototypeOf(RevisadoButtonAction).apply(this, arguments));
  }

  _createClass(RevisadoButtonAction, [{
    key: "render",
    value: function render() {
      var revisado_disabled_text = this.props.disableText;

      if ((revisado_disabled_text === null || typeof revisado_disabled_text === 'undefined') && this.props.record && !this.props.record.fecha_completado) {
        revisado_disabled_text = 'Debe estar primero en estado COMPLETADO, para poder marcarse como REVISADO.';
      }

      var showAlert;

      if ((this.props.showAlert === null || typeof this.props.showAlert === 'undefined') && this.props.record) {
        var record = this.props.record;
        showAlert = record.fecha_completado && record.fecha_revision && Date.create(record.fecha_completado) > Date.create(record.fecha_revision);
      } else {
        showAlert = this.props.showAlert;
      }

      var icon_revisado_alert = showAlert ? React.createElement(_Popup["default"], {
        trigger: React.createElement("i", {
          className: "icon warning circle red"
        }),
        content: 'Ha recibido modificaciones después de su última revisión.'
      }) : null;
      return React.createElement(_Popup["default"], {
        trigger: React.createElement("div", {
          className: "button-wrapper"
        }, React.createElement(_Button["default"], {
          color: "olive",
          icon: true,
          compact: true,
          onClick: this.props.onClick,
          disabled: revisado_disabled_text != null
        }, ' ', React.createElement("i", {
          className: "icon check fitted"
        }), React.createElement("i", {
          className: "icon check"
        }), " Revisado ", icon_revisado_alert)),
        content: revisado_disabled_text,
        header: "Marcar como Revisado | Opci\xF3n deshabilitada",
        disabled: revisado_disabled_text == null,
        className: "disable-text",
        on: "hover"
      });
    }
  }]);

  return RevisadoButtonAction;
}(_react.PureComponent);

exports.RevisadoButtonAction = RevisadoButtonAction;

var StatusButtonGroupActions =
/*#__PURE__*/
function (_PureComponent3) {
  _inherits(StatusButtonGroupActions, _PureComponent3);

  function StatusButtonGroupActions() {
    _classCallCheck(this, StatusButtonGroupActions);

    return _possibleConstructorReturn(this, _getPrototypeOf(StatusButtonGroupActions).apply(this, arguments));
  }

  _createClass(StatusButtonGroupActions, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "actions ab-status-actions"
      }, this.props.prepend, user_has_role_permission(this.props.completado.permission) && React.createElement(CompletadoButtonAction, this.props.completado), user_has_role_permission(this.props.revisado.permission) && React.createElement(RevisadoButtonAction, this.props.revisado), this.props.append);
    }
  }]);

  return StatusButtonGroupActions;
}(_react.PureComponent);

exports.StatusButtonGroupActions = StatusButtonGroupActions;

var StatusDivBlock = function StatusDivBlock(props) {
  return React.createElement("div", {
    className: (0, _classnames["default"])('lb-status-wrapper', props.wrapperClassName)
  }, !props.hideLabel && 'Estado:', React.createElement("div", {
    className: (0, _classnames["default"])(props.className, 'lb-status', "lb-status-".concat(_.str.dasherize(props.status.toLowerCase())))
  }, props.status || ''));
};

exports.StatusDivBlock = StatusDivBlock;

/***/ }),

/***/ "./src/global/Tooltip.tsx":
/*!********************************!*\
  !*** ./src/global/Tooltip.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenericTooltip = void 0;

var _Popup = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Popup/Popup */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Popup/Popup.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Icon/Icon */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Icon/Icon.js"));

var _getValue = _interopRequireDefault(__webpack_require__(/*! get-value */ "./node_modules/get-value/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var GenericTooltip = function GenericTooltip(props) {
  var content;

  if (_typeof(props.text) == 'object') {
    content = React.createElement("div", {
      className: "content"
    }, props.text);
  } else if (typeof props.text == 'string') {
    if (props.text.substr(0, 1) == '@') {
      content = (0, _getValue["default"])(app.vars.texts, props.text.substr(1));
    } else {
      content = props.text;
    }

    if (!content) {
      return null;
    }

    content = React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: content
      }
    });
  }

  return React.createElement(_Popup["default"], {
    size: "tiny",
    wide: props.wide,
    trigger: React.createElement(_Icon["default"], {
      color: props.iconColor,
      size: props.iconSize,
      name: "question circle",
      className: "tooltip-icon"
    }),
    header: props.title,
    content: content
  });
};

exports.GenericTooltip = GenericTooltip;
GenericTooltip.defaultProps = {
  iconColor: 'blue',
  iconSize: 'small',
  wide: false
};

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/App.tsx":
/*!********************************************!*\
  !*** ./src/proyecto__hoja_trabajo/App.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sortBy2 = _interopRequireDefault(__webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js"));

var _values2 = _interopRequireDefault(__webpack_require__(/*! lodash/values */ "./node_modules/lodash/values.js"));

var _forEach2 = _interopRequireDefault(__webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js"));

var _size2 = _interopRequireDefault(__webpack_require__(/*! lodash/size */ "./node_modules/lodash/size.js"));

var _filter2 = _interopRequireDefault(__webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js"));

var _map2 = _interopRequireDefault(__webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js"));

var _find2 = _interopRequireDefault(__webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js"));

var _react = __webpack_require__(/*! react */ "react");

var _TabPaneVisita = _interopRequireDefault(__webpack_require__(/*! ./TabPaneVisita */ "./src/proyecto__hoja_trabajo/TabPaneVisita.tsx"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Icon */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Icon/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Button/Button */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Button/Button.js"));

var _Divider = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Divider */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Divider/index.js"));

var _Menu = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/collections/Menu */ "./node_modules/semantic-ui-react/dist/commonjs/collections/Menu/index.js"));

var _Form = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/collections/Form */ "./node_modules/semantic-ui-react/dist/commonjs/collections/Form/index.js"));

var _Tab = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Tab */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Tab/index.js"));

var _Modal = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Modal */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Modal/index.js"));

var _Accordion = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Accordion/Accordion */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Accordion/Accordion.js"));

var _AppVisitaTab = __webpack_require__(/*! ./AppVisitaTab */ "./src/proyecto__hoja_trabajo/AppVisitaTab.tsx");

var _reactDualListbox = _interopRequireDefault(__webpack_require__(/*! react-dual-listbox */ "./node_modules/react-dual-listbox/lib/index.browser.js"));

var _HojaTrabajoContext = _interopRequireDefault(__webpack_require__(/*! ./HojaTrabajoContext */ "./src/proyecto__hoja_trabajo/HojaTrabajoContext.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _this.handleClick = function (e, _ref) {
      var index = _ref.index;

      _this.setState({
        activeIndex: index
      });

      var visita = (0, _find2["default"])(_this.state.hoja_trabajo.visitas, {
        index: index
      });
      app.vars.current_idvisita = visita.id_visita;
      $("#table-visita-instrucciones-".concat(visita.id)).floatThead('reflow');
      window.location.hash = '#!vis-' + index;
    };

    _this.showModal = function () {
      _this.setState({
        assocModalOpen: true
      });
    };

    _this.onChangeVisita = function (visita) {
      _this.setState(function (state) {
        var hoja_trabajo = Object.assign({}, state.hoja_trabajo);
        hoja_trabajo.visitas = (0, _map2["default"])(hoja_trabajo.visitas, function (item) {
          if (item.index + '' == visita.index + '') {
            return visita;
          } else {
            return item;
          }
        });
        return {
          hoja_trabajo: hoja_trabajo
        };
      });
    };

    _this.onChangeApp = function (data) {
      _this.setState(function (state) {
        var hoja_trabajo = Object.assign({}, state.hoja_trabajo, data);
        return {
          hoja_trabajo: hoja_trabajo
        };
      });
    };

    var locationHash = window.location.hash.replace(/^#!vis-/, '');
    var activeIndex;
    var visita_current;

    if (locationHash) {
      activeIndex = +locationHash;
      visita_current = (0, _find2["default"])(_this.props.hoja_trabajo.visitas, {
        index: activeIndex
      });
    } else {
      visita_current = (0, _find2["default"])(_this.props.hoja_trabajo.visitas, {
        is_current: true
      });
      activeIndex = visita_current ? visita_current.index : null;
    }

    if (visita_current) {
      app.vars.current_idvisita = visita_current.id_visita;
    }

    _this.state = {
      activeIndex: activeIndex,
      selectedVisitas: (0, _filter2["default"])((0, _map2["default"])(_this.props.hoja_trabajo.visitas, function (item, id) {
        return item.id ? id : null;
      })),
      newVisitaOpen: false,
      assocModalOpen: false,
      hoja_trabajo: _this.props.hoja_trabajo
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //change Width : var tabWidth = 90 / (0, _size2["default"])((0, _filter2["default"])(this.panes, {
      var tabWidth = 94 / (0, _size2["default"])((0, _filter2["default"])(this.panes, {
        type: 'sheet'
      }));
      $('#visita-tabs').find('.menu>a.visita-tab').css({
        width: tabWidth + '%'
      });
    }
  }, {
    key: "getUrlFor",
    value: function getUrlFor(urlToAppend) {
      return url_for("proyecto/".concat(this.props.hoja_trabajo.proyecto.id, "/hoja-trabajo/paso/").concat(this.props.hoja_trabajo.paso.id, "/").concat(urlToAppend));
    }
  }, {
    key: "isAllowedAsociarVisita",
    value: function isAllowedAsociarVisita() {
      if (!user_has_role_permission('paso_asociar_visita')) {
        return false;
      }

      return true;
    }
  }, {
    key: "getAssocModal",
    value: function getAssocModal() {
      var _this2 = this;

      if (!this.isAllowedAsociarVisita()) {
        return null;
      }

      if (!this.state.hoja_trabajo.proyecto.isOpen) {
        return null;
      }

      var _this$state = this.state,
          assocModalOpen = _this$state.assocModalOpen,
          selectedVisitas = _this$state.selectedVisitas,
          newVisitaOpen = _this$state.newVisitaOpen;
      var icons = {
        moveLeft: React.createElement("i", {
          className: "icon angle left"
        }),
        moveAllLeft: React.createElement("i", {
          className: "icon angle double left"
        }),
        moveRight: React.createElement("i", {
          className: "icon angle right"
        }),
        moveAllRight: React.createElement("i", {
          className: "icon angle double right"
        }),
        moveDown: React.createElement("i", {
          className: "icon angle down"
        }),
        moveUp: React.createElement("i", {
          className: "icon angle up"
        })
      };
      var visitas = this.props.hoja_trabajo.visitas;
      var options = [];
      (0, _forEach2["default"])(visitas, function (visita, id) {
        options.push({
          value: id,
          label: visita.label
        });
      });

      var onChange = function onChange(selectedVisitas) {
        _this2.setState({
          selectedVisitas: selectedVisitas
        });
      };

      var onClose = function onClose() {
        _this2.setState({
          assocModalOpen: false
        });
      };

      var onToggle = function onToggle() {
        _this2.setState(function (state) {
          return {
            newVisitaOpen: !state.newVisitaOpen
          };
        });
      };

      return React.createElement(_Modal["default"], {
        open: assocModalOpen,
        closeIcon: true,
        dimmer: "inverted",
        size: "small",
        onClose: onClose,
        className: "modal-ab"
      }, React.createElement(_Modal["default"].Header, null, " Asociaci\xF3n de Visitas a este Paso"), React.createElement(_Modal["default"].Content, null, React.createElement("form", {
        method: "post",
        className: "ui form",
        action: this.getUrlFor('visita')
      }, React.createElement("div", {
        style: {
          marginBottom: '15px'
        }
      }, "Asocie las visitas a relacionar con este paso: "), " ", React.createElement("br", null), React.createElement(_reactDualListbox["default"], {
        name: "visitas",
        options: options,
        availableLabel: "Por asociar",
        selectedLabel: "Asociadas",
        selected: selectedVisitas,
        icons: icons,
        onChange: onChange
      }), React.createElement(_Divider["default"], {
        horizontal: true
      }, "O"), React.createElement(_Accordion["default"], null, React.createElement(_Accordion["default"].Title, {
        active: newVisitaOpen,
        onClick: onToggle
      }, React.createElement(_Icon["default"], {
        name: "caret right"
      }), " Crear Nueva Visita"), React.createElement(_Accordion["default"].Content, {
        active: newVisitaOpen
      }, React.createElement(_Form["default"].Field, {
        inline: true
      }, React.createElement("label", null, "Nombre de la visita"), React.createElement("div", {
        className: "ui input"
      }, ' ', React.createElement("input", {
        placeholder: "Nombre de la visita",
        name: "visita_name",
        type: "text"
      }), ' ')))), React.createElement("button", {
        className: "primary small ui button right floated"
      }, "Guardar"), React.createElement("button", {
        className: "negative small ui button right floated",
        type: "button",
        onClick: onClose
      }, "Cancelar"), React.createElement("div", {
        className: "clearfix"
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var self = this;
      var activeIndex = this.state.activeIndex;
      var assocModal = this.getAssocModal();
      this.panes = [];
      var visitas = (0, _values2["default"])(self.state.hoja_trabajo.visitas);
      visitas = (0, _sortBy2["default"])(visitas, 'position');
      (0, _forEach2["default"])(visitas, function (visita, k) {
        if (visita.id == null) {
          return;
        }

        visita.HojaTrabajo = self.state.hoja_trabajo;
        self.panes.push({
          type: 'sheet',
          menuItem: function menuItem() {
            return React.createElement(_Menu["default"].Item, {
              key: visita.id,
              index: visita.index,
              className: "tab-nav-item visita-tab",
              name: visita.label,
              onClick: self.handleClick,
              active: activeIndex == visita.index
            }, React.createElement(_AppVisitaTab.AppVisitaDefaultTab, {
              visita: visita
            }));
          },
          pane: function pane() {
            return React.createElement(_TabPaneVisita["default"], {
              key: visita.id,
              idx: visita.index,
              active: activeIndex == visita.index,
              visita: visita,
              isEditable: self.state.hoja_trabajo.proyecto.isOpen,
              onChange: self.onChangeVisita,
              onChangeApp: self.onChangeApp
            });
          }
        });
      });

      if (self.panes.length == 0) {
        return React.createElement("div", {
          className: "alert alert-block nocontent"
        }, React.createElement("h3", null, "Sin visitas"), React.createElement("p", null, React.createElement("span", {
          className: "icon-warning-sign"
        }), "Este paso aun no tiene visitas asociadas.", ' '), self.state.hoja_trabajo.proyecto.isOpen && this.isAllowedAsociarVisita() && [React.createElement(_Button["default"], {
          key: "button",
          content: "Asociar visitas",
          color: "green",
          compact: true,
          icon: "info circle",
          onClick: this.showModal,
          style: {
            marginTop: '30px'
          }
        }), React.createElement("div", {
          key: "modal"
        }, assocModal)]);
      }

      if (this.isAllowedAsociarVisita() && self.state.hoja_trabajo.proyecto.isOpen) {
        self.panes.push({
          type: 'action',
          menuItem: function menuItem() {
            return React.createElement(_Menu["default"].Item, {
              key: "plus",
              className: "tab-nav-item tab-add",
              title: "Asociar/Desasociar visitas a este paso",
              onClick: _this3.showModal
            }, React.createElement(_Icon["default"], {
              name: "plus"
            }));
          }
        });
      }

      return React.createElement(_HojaTrabajoContext["default"].Provider, {
        value: {
          hoja_trabajo: this.state.hoja_trabajo,
          update: this.onChangeApp
        }
      }, React.createElement("div", {
        id: "visita-tabs",
        className: "paso-code-".concat(this.state.hoja_trabajo.paso.code, "  paso-default")
      }, React.createElement(_Tab["default"], {
        panes: this.panes,
        activeIndex: activeIndex,
        renderActiveOnly: false
      }), assocModal));
    }
  }]);

  return App;
}(_react.Component);

exports["default"] = App;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/AppPeriodo.tsx":
/*!***************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/AppPeriodo.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _TabPaneVisita = _interopRequireDefault(__webpack_require__(/*! ./TabPaneVisita */ "./src/proyecto__hoja_trabajo/TabPaneVisita.tsx"));

var _AuthorIconLog = __webpack_require__(/*! ./../global/AuthorIconLog */ "./src/global/AuthorIconLog.tsx");

var _Label = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Label */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Label/index.js"));

var _reactTabtab = __webpack_require__(/*! react-tabtab */ "./node_modules/react-tabtab/lib/index.js");

var _reactSortableHoc = __webpack_require__(/*! react-sortable-hoc */ "./node_modules/react-sortable-hoc/dist/react-sortable-hoc.esm.js");

var _HojaTrabajoContext = _interopRequireDefault(__webpack_require__(/*! ./HojaTrabajoContext */ "./src/proyecto__hoja_trabajo/HojaTrabajoContext.ts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AppPeriodo =
/*#__PURE__*/
function (_Component) {
  _inherits(AppPeriodo, _Component);

  function AppPeriodo(props) {
    var _this;

    _classCallCheck(this, AppPeriodo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppPeriodo).call(this, props));

    _this.handleClick = function (index) {
      _this.setState({
        activeIndex: index
      });

      var visita = _.find(_this.state.hoja_trabajo.visitas, {
        index: index
      });

      app.vars.current_idvisita = visita.id_visita;
      $("#table-visita-instrucciones-".concat(visita.id)).floatThead('reflow');
    };

    _this.onChangeVisita = function (visita) {
      _this.setState(function (state) {
        var hoja_trabajo = Object.assign({}, state.hoja_trabajo);
        hoja_trabajo.visitas = _.map(hoja_trabajo.visitas, function (item) {
          if (item.index + '' == visita.index + '') {
            return visita;
          } else {
            return item;
          }
        });
        return {
          hoja_trabajo: hoja_trabajo
        };
      });
    };

    _this.onChangeApp = function (data) {
      _this.setState(function (state) {
        var hoja_trabajo = Object.assign({}, state.hoja_trabajo, data);
        return {
          hoja_trabajo: hoja_trabajo
        };
      });
    };

    _this.onClickActionElement = function (ev, action, visita) {
      ev.preventDefault();

      switch (action) {
        case 'CREATE':
          bootbox.prompt({
            header: 'Nuevo Periodo',
            content: '<div>Escriba el nombre del periodo que desea crear.</div>'
          }, 'Cancelar', 'Crear', function (r) {
            if (!r || _.str.trim(r) == '') {
              return;
            }

            var url = _this.getUrlFor('periodo');

            $.blockUI(create_blockUI_loading_message('Creando Nuevo Periodo'));
            $.ajax(url, {
              type: 'POST',
              data: {
                id_paso: _this.state.hoja_trabajo.paso.id,
                name: _.str.trim(r)
              },
              dataType: 'json'
            }).done(function (res) {
              if (!res.hasErrors) {
                _this.setState(function (state) {
                  var hoja_trabajo = state.hoja_trabajo;
                  hoja_trabajo.visitas[res.response.id_visita] = res.response;
                  return {
                    hoja_trabajo: hoja_trabajo,
                    activeIndex: res.response.index
                  };
                });
              } else {
                bootbox.alert(res.message);
              }

              $.unblockUI();
            });
          }, '');
          $('.bootbox.modal').addClass('modal-ab');
          break;

        case 'RENAME':
          bootbox.prompt({
            header: 'Renombrar Periodo',
            content: 'Escriba el nombre que desea asignarle a este periodo.'
          }, 'Cancelar', 'Aceptar', function (r) {
            if (!r || _.str.trim(r) == '') {
              return;
            }

            $.blockUI(create_blockUI_loading_message('Guardando cambios'));
            var url = url_for("proyecto/".concat(_this.state.hoja_trabajo.proyecto.id, "/master_data/paso-visita/rename/").concat(visita.id_visita));
            $.ajax(url, {
              type: 'POST',
              data: {
                name: _.str.trim(r)
              },
              dataType: 'json'
            }).done(function (res) {
              if (!res.hasErrors) {
                _this.setState(function (state) {
                  var hoja_trabajo = state.hoja_trabajo;
                  hoja_trabajo.visitas = _.map(hoja_trabajo.visitas, function (item) {
                    if (item.id_visita == visita.id_visita) {
                      item.label = _.str.trim(r);
                    }

                    return item;
                  });
                  return {
                    hoja_trabajo: hoja_trabajo
                  };
                });
              }

              $.unblockUI();
            });
          }, visita.label);
          $('.bootbox.modal').addClass('modal-ab');
          break;

        case 'DELETE':
          bootbox.warningConfirm('¿Desea eliminar este periodo?', 'No', 'Sí, Eliminar periodo', function (r) {
            if (r) {
              $.blockUI(create_blockUI_loading_message("Eliminando Periodo \"".concat(visita.label, "\"")));
              var url = url_for("proyecto/".concat(_this.state.hoja_trabajo.proyecto.id, "/master_data/paso-visita/delete/").concat(visita.id_visita));
              $.ajax(url, {
                type: 'POST',
                dataType: 'json'
              }).done(function (res) {
                $.unblockUI();

                if (!res.hasErrors) {
                  _this.setState(function (state) {
                    var hoja_trabajo = state.hoja_trabajo;
                    hoja_trabajo.visitas = _.reject(hoja_trabajo.visitas, function (item) {
                      return item.id_visita == visita.id_visita;
                    });
                    var activeIndex = state.activeIndex;

                    if (activeIndex == visita.index) {
                      activeIndex = _.head(hoja_trabajo.visitas).index;
                    }

                    return {
                      hoja_trabajo: hoja_trabajo,
                      activeIndex: activeIndex
                    };
                  });
                }
              });
            }
          });
      }
    };

    var visita_current = _.find(_this.props.hoja_trabajo.visitas, {
      is_current: true
    });

    var activeIndex = visita_current ? visita_current.index : null;

    if (visita_current) {
      app.vars.current_idvisita = visita_current.id_visita;
    }

    _this.state = {
      activeIndex: activeIndex,
      newVisitaOpen: false,
      hoja_trabajo: _this.props.hoja_trabajo
    };
    return _this;
  }

  _createClass(AppPeriodo, [{
    key: "getUrlFor",
    value: function getUrlFor(urlToAppend) {
      return url_for("proyecto/".concat(this.props.hoja_trabajo.proyecto.id, "/hoja-trabajo/paso/").concat(this.props.hoja_trabajo.paso.id, "/").concat(urlToAppend));
    }
  }, {
    key: "isAllowedAsociarVisita",
    value: function isAllowedAsociarVisita() {
      if (!user_has_role_permission('paso_asociar_visita')) {
        return false;
      }

      if (!this.state.hoja_trabajo.proyecto.isOpen) {
        return false;
      }
    }
  }, {
    key: "renderTab",
    value: function renderTab(visita, k) {
      var status_label = null;

      if (visita.status) {
        status_label = React.createElement(_Label["default"], {
          style: {
            backgroundColor: visita.status_color
          },
          className: "visita-status visita-status-".concat(_.str.underscored(visita.status)),
          size: "mini"
        }, visita.status);
      }

      var alertTextRevisado = visita.fecha_completado && visita.fecha_revision && Date.create(visita.fecha_completado) > Date.create(visita.fecha_revision) ? 'Modificado despues de Revisado' : null;
      return React.createElement(_reactTabtab.Tab, {
        key: visita.id,
        className: "item tab-nav-item visita-tab"
      }, React.createElement("span", {
        className: "tabname"
      }, AppPeriodo.shortVisitaName(visita.label)), React.createElement("div", {
        className: "author-icon-log-wrapper"
      }, React.createElement(_AuthorIconLog.AuthorIconLog, {
        log: visita.UpdateLog,
        name: "Preparado por",
        label: "P",
        iconColor: "green"
      }), React.createElement(_AuthorIconLog.AuthorIconLog, {
        log: visita.RevisionLog,
        name: "Revisado por",
        label: "R",
        iconColor: "olive",
        alertText: alertTextRevisado
      })), status_label);
    }
  }, {
    key: "renderPanel",
    value: function renderPanel(visita, k) {
      return React.createElement(_reactTabtab.Panel, {
        key: visita.id
      }, React.createElement(_TabPaneVisita["default"], {
        idx: visita.index,
        active: this.state.activeIndex == visita.index,
        visita: visita,
        type: "PERIODO",
        isEditable: this.state.hoja_trabajo.proyecto.isOpen,
        onChange: this.onChangeVisita,
        onChangeApp: this.onChangeApp
      }));
    }
  }, {
    key: "renderModalContent",
    value: function renderModalContent() {
      var _this2 = this;

      if (!this.state.hoja_trabajo.proyecto.isOpen) {
        return null;
      }

      var self = this;

      var visitas = _.values(self.state.hoja_trabajo.visitas);

      visitas = _.sortBy(visitas, 'position');
      var DragHandle = (0, _reactSortableHoc.SortableHandle)(function () {
        return React.createElement("span", {
          className: "sort-handler drag-icon"
        });
      });
      var SortElement = (0, _reactSortableHoc.SortableElement)(function (_ref) {
        var visita = _ref.visita;
        return React.createElement("li", {
          className: "list-group-item visita-li",
          id: "visita-li-".concat(visita.id)
        }, user_has_role_permission('hoja_trabajo_edit') && React.createElement(DragHandle, null), React.createElement("span", null, visita.label), React.createElement("div", {
          className: "pull-right"
        }, user_has_role_permission('hoja_trabajo_edit') && [React.createElement("a", {
          href: "#",
          key: "rename",
          className: "btn-mini btn-link",
          onClick: function onClick(ev) {
            return _this2.onClickActionElement(ev, 'RENAME', visita);
          }
        }, "Cambiar nombre"), '|', React.createElement("a", {
          href: "#",
          key: "delete",
          className: "btn-link btn-mini delete",
          onClick: function onClick(ev) {
            return _this2.onClickActionElement(ev, 'DELETE', visita);
          }
        }, "Eliminar")]));
      });
      var SortableList = (0, _reactSortableHoc.SortableContainer)(function (_ref2) {
        var visitas = _ref2.visitas;
        return React.createElement("ul", {
          id: "paso-periodo-sortlist",
          className: "list-group compact",
          style: {
            marginLeft: 0
          }
        }, _.map(visitas, function (visita, index) {
          return React.createElement(SortElement, {
            visita: visita,
            key: "visita-li-".concat(visita.id),
            index: index
          });
        }));
      });

      var onSortEnd = function onSortEnd(_ref3) {
        var oldIndex = _ref3.oldIndex,
            newIndex = _ref3.newIndex;

        var arrayMoveMutate = function arrayMoveMutate(array, from, to) {
          array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
        };

        var arrayMove = function arrayMove(array, from, to) {
          array = array.slice();
          arrayMoveMutate(array, from, to);
          return array;
        };

        _this2.setState(function (state) {
          var hoja_trabajo = state.hoja_trabajo;

          var visitas = _.values(hoja_trabajo.visitas);

          visitas = _.sortBy(visitas, 'position');
          var sorted = arrayMove(visitas, oldIndex, newIndex);
          sorted = _.map(sorted, function (item, k) {
            item.position = k;
            return item;
          });
          hoja_trabajo.visitas = sorted;
          return {
            hoja_trabajo: hoja_trabajo
          };
        }, function () {
          var neworder = {};

          _.forEach(_this2.state.hoja_trabajo.visitas, function (item) {
            neworder[item.position] = item.id_visita;
          });

          var url = url_for("proyecto/".concat(_this2.state.hoja_trabajo.proyecto.id, "/master_data/paso-visita/sort"));
          $.ajax(url, {
            type: 'POST',
            data: {
              sort: neworder
            },
            dataType: 'json'
          });
        });
      };

      return React.createElement("div", {
        style: {
          padding: '5px 20px'
        }
      }, React.createElement("p", {
        className: "description-text"
      }, "Listado de periodos asociados a este paso."), React.createElement(SortableList, {
        visitas: visitas,
        lockAxis: "y",
        helperClass: "sortable_placeholder",
        useDragHandle: true,
        onSortEnd: onSortEnd,
        helperContainer: function helperContainer() {
          return document.getElementById('paso-periodo-sortlist');
        }
      }), React.createElement("div", {
        style: {
          margin: 'auto',
          textAlign: 'center'
        }
      }, React.createElement("button", {
        className: "btn btn-primary",
        onClick: function onClick(ev) {
          return _this2.onClickActionElement(ev, 'CREATE');
        }
      }, React.createElement("span", {
        className: "icon-plus"
      }), " Nuevo Periodo")), React.createElement("br", null));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var self = this;

      var visitas = _.values(self.state.hoja_trabajo.visitas);

      if (_.size(visitas) == 0) {
        return React.createElement("div", {
          id: "visita-tabs",
          className: "paso-code-".concat(this.state.hoja_trabajo.paso.code, " paso-periodo")
        }, React.createElement("div", {
          className: "alert alert-block nocontent"
        }, React.createElement("h3", null, "Sin Periodos"), React.createElement("p", null, React.createElement("span", {
          className: "icon-warning-sign"
        }), "Este paso aun no tiene periodos creados."), user_has_role_permission('hoja_trabajo_edit') && React.createElement("button", {
          className: "btn btn-primary",
          onClick: function onClick(ev) {
            return _this3.onClickActionElement(ev, 'CREATE');
          },
          style: {
            marginTop: '30px'
          }
        }, React.createElement("span", {
          className: "icon-plus"
        }), " Nuevo periodo")));
      }

      visitas = _.sortBy(visitas, 'position');
      return React.createElement(_HojaTrabajoContext["default"].Provider, {
        value: {
          hoja_trabajo: this.state.hoja_trabajo,
          update: this.onChangeApp
        }
      }, React.createElement("div", {
        id: "visita-tabs",
        className: "paso-code-".concat(this.state.hoja_trabajo.paso.code, " paso-periodo")
      }, React.createElement(_reactTabtab.Tabs, {
        activeIndex: this.state.activeIndex,
        onTabChange: this.handleClick,
        showModalButton: this.state.hoja_trabajo.proyecto.isOpen,
        modalHeader: "Administraci\xF3n de Periodos",
        modalContent: this.renderModalContent()
      }, React.createElement(_reactTabtab.TabList, {
        className: "ui tabular menu"
      }, _.map(visitas, function (visita, k) {
        visita.HojaTrabajo = self.state.hoja_trabajo;
        return _this3.renderTab(visita, k);
      })), React.createElement(_reactTabtab.PanelList, null, _.map(visitas, function (visita, k) {
        visita.HojaTrabajo = self.state.hoja_trabajo;
        return _this3.renderPanel(visita, k);
      })))));
    }
  }], [{
    key: "shortVisitaName",
    value: function shortVisitaName(visita) {
      var transformations = {
        Enero: 'Ene',
        Febrero: 'Feb',
        Marzo: 'Mar',
        Abril: 'Abr',
        Mayo: 'May',
        Junio: 'Jun',
        Julio: 'Jul',
        Agosto: 'Ago',
        Septiembre: 'Sept',
        Octubre: 'Oct',
        Noviembre: 'Nov',
        Diciembre: 'Dic'
      };

      _.forEach(transformations, function (to, from) {
        visita = visita.replace(new RegExp(from, 'gi'), to);
      });

      return visita;
    }
  }]);

  return AppPeriodo;
}(_react.Component);

exports["default"] = AppPeriodo;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/AppVisitaTab.tsx":
/*!*****************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/AppVisitaTab.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasoVisitaAssoc = exports.PasoVisitaStatusActions = exports.PasoObjetivoPane = exports.AppVisitaDefaultTab = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _Label = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Label */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Label/index.js"));

var _Popup = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Popup/Popup */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Popup/Popup.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Button/Button */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Button/Button.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Icon/Icon */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Icon/Icon.js"));

var _Modal = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Modal/Modal */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Modal/Modal.js"));

var _EditorPreview = _interopRequireDefault(__webpack_require__(/*! ../global/EditorPreview */ "./src/global/EditorPreview.tsx"));

var _AuthorIconLog = __webpack_require__(/*! ../global/AuthorIconLog */ "./src/global/AuthorIconLog.tsx");

var _HojaTrabajoContext = _interopRequireDefault(__webpack_require__(/*! ./HojaTrabajoContext */ "./src/proyecto__hoja_trabajo/HojaTrabajoContext.ts"));

var _utils = __webpack_require__(/*! ./utils */ "./src/proyecto__hoja_trabajo/utils.ts");

var _reactDualListbox = _interopRequireDefault(__webpack_require__(/*! react-dual-listbox */ "./node_modules/react-dual-listbox/lib/index.browser.js"));

var _Divider = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Divider/Divider */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Divider/Divider.js"));

var _Accordion = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Accordion/Accordion */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Accordion/Accordion.js"));

var _Form = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/collections/Form/Form */ "./node_modules/semantic-ui-react/dist/commonjs/collections/Form/Form.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AppVisitaDefaultTab =
/*#__PURE__*/
function (_Component) {
  _inherits(AppVisitaDefaultTab, _Component);

  function AppVisitaDefaultTab() {
    _classCallCheck(this, AppVisitaDefaultTab);

    return _possibleConstructorReturn(this, _getPrototypeOf(AppVisitaDefaultTab).apply(this, arguments));
  }

  _createClass(AppVisitaDefaultTab, [{
    key: "getStatusLabel",
    value: function getStatusLabel() {
      var visita = this.props.visita;
      var status_label = null;

      if (visita.status) {
        status_label = React.createElement(_Label["default"], {
          style: {
            backgroundColor: visita.status_color
          },
          className: "visita-status visita-status-".concat(_.str.underscored(visita.status)),
          size: "mini"
        }, visita.status);
      }

      return status_label;
    }
  }, {
    key: "render",
    value: function render() {
      var visita = this.props.visita;
      return React.createElement(_react.Fragment, null, React.createElement("span", {
        className: "tabname",
        title: visita.label
      }, visita.label), React.createElement(_AuthorIconLog.AuthorIconLogDefaultWrapper, {
        model: visita
      }), this.getStatusLabel());
    }
  }]);

  return AppVisitaDefaultTab;
}(_react.Component);

exports.AppVisitaDefaultTab = AppVisitaDefaultTab;

var PasoObjetivoPane =
/*#__PURE__*/
function (_Component2) {
  _inherits(PasoObjetivoPane, _Component2);

  function PasoObjetivoPane() {
    var _this;

    _classCallCheck(this, PasoObjetivoPane);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PasoObjetivoPane).apply(this, arguments));

    _this.onChangeValue = function (editor) {
      var objetivo = editor.getData();
      var _this$context = _this.context,
          hoja_trabajo = _this$context.hoja_trabajo,
          update = _this$context.update;
      $.blockUI(create_blockUI_loading_message('Guardando Cambios'));
      var url = url_for("proyecto/".concat(hoja_trabajo.proyecto.id, "/master_data/paso/").concat(hoja_trabajo.paso.id, "/objetivo"));
      $.ajax(url, {
        type: 'POST',
        data: {
          objetivo: objetivo
        },
        dataType: 'json'
      }).done(function () {
        var hoja_trabajo_new = _utils.HojaTrabajoUpdateUtils.updateField(hoja_trabajo, 'paso', {
          objetivo: objetivo
        });

        update(hoja_trabajo_new);
        $.unblockUI();
      });
    };

    return _this;
  }

  _createClass(PasoObjetivoPane, [{
    key: "render",
    value: function render() {
      var hoja_trabajo = this.context.hoja_trabajo;
      var ckeditorOptions = {
        height: 150,
        toolbar: [{
          name: 'basicstyles',
          groups: ['basicstyles', 'cleanup'],
          items: ['Bold', 'Italic']
        }, {
          name: 'paragraph',
          groups: ['list', 'indent', 'blocks', 'align', 'bidi'],
          items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'TextColor']
        }],
        autoParagraph: false,
        removePlugins: 'elementspath, uploadfile, resize',
        extraPlugins: 'openlink'
      };
      return React.createElement("div", {
        className: "hoja-trabajo-objetivo hoverable-actions"
      }, React.createElement(_EditorPreview["default"], {
        className: "objetivo-text-editor",
        ckeditorOptions: ckeditorOptions,
        prefixPreview: "Objetivo:",
        label: " ",
        labelTitle: "Objetivo: ",
        data: hoja_trabajo.paso.objetivo,
        editable: this.props.isEditable && user_has_role_permission('paso_objetivo_edit'),
        onSave: this.onChangeValue
      }));
    }
  }]);

  return PasoObjetivoPane;
}(_react.Component);

exports.PasoObjetivoPane = PasoObjetivoPane;
PasoObjetivoPane.contextType = _HojaTrabajoContext["default"];
PasoObjetivoPane.defaultProps = {
  isEditable: false
};

var PasoVisitaStatusActions =
/*#__PURE__*/
function (_Component3) {
  _inherits(PasoVisitaStatusActions, _Component3);

  function PasoVisitaStatusActions() {
    var _this2;

    _classCallCheck(this, PasoVisitaStatusActions);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(PasoVisitaStatusActions).apply(this, arguments));

    _this2.onClickCompletado = function () {
      var hoja_trabajo = _this2.context.hoja_trabajo;
      var url = url_for("proyecto/".concat(hoja_trabajo.proyecto.id, "/hoja-trabajo/paso/").concat(hoja_trabajo.paso.id, "/visita/").concat(_this2.props.visita.id_visita, "/save"));
      var loadingMessage = 'Marcando como Completado...';
      $.blockUI(create_blockUI_loading_message(loadingMessage));
      $.ajax(url, {
        type: 'POST',
        data: {
          op: 'c'
        },
        dataType: 'json'
      }).done(function (res) {
        if (res.hasErrors) {
          $.unblockUI();
          bootbox.alert(res.message);
        } else {
          _this2.updateVisita(res.response.record);

          $.unblockUI();
        }
      });
    };

    _this2.onClickRevisado = function () {
      var hoja_trabajo = _this2.context.hoja_trabajo;
      var url = url_for("proyecto/".concat(hoja_trabajo.proyecto.id, "/hoja-trabajo/paso/").concat(hoja_trabajo.paso.id, "/visita/").concat(_this2.props.visita.id_visita, "/save"));
      var loadingMessage = 'Marcando como Revisado...';
      $.blockUI(create_blockUI_loading_message(loadingMessage));
      $.ajax(url, {
        type: 'POST',
        data: {
          op: 'r'
        },
        dataType: 'json'
      }).done(function (res) {
        if (res.hasErrors) {
          $.unblockUI();
          bootbox.alert(res.message);
        } else {
          _this2.updateVisita(res.response.record);

          $.unblockUI();
        }
      });
    };

    return _this2;
  }

  _createClass(PasoVisitaStatusActions, [{
    key: "getRevisadoDisabledText",
    value: function getRevisadoDisabledText() {
      if (_.include(['1', '2', '3'], this.props.visita.id_status) || this.props.completadoDisabledText) {
        return 'Esta visita debe estar primero en estado COMPLETADO, para poder marcar esta hoja de trabajo como REVISADA.';
      } else if (_.include(['6'], this.props.visita.id_status)) {
        return 'Esta visita  tiene Notas de Revisión que deben primero ser atendidas para poder marcar esta hoja de trabajo como REVISADA.';
      } else if (this.props.visita.additionals.revisiones > 0) {
        return 'Esta visita tiene Notas de Revisión pendientes por revisar que deben primero ser revisadas para poder marcar esta hoja de trabajo como REVISADA.';
      }

      return this.props.revisadoDisabledText;
    }
  }, {
    key: "updateVisita",
    value: function updateVisita(_visita) {
      var _this$context2 = this.context,
          hoja_trabajo = _this$context2.hoja_trabajo,
          update = _this$context2.update;

      var hoja_trabajo_new = _utils.HojaTrabajoUpdateUtils.updateVisita(hoja_trabajo, this.props.visita, _visita);

      update(hoja_trabajo_new);
    }
  }, {
    key: "render",
    value: function render() {
      var visita = this.props.visita;
      var revisadoDisabledText = this.getRevisadoDisabledText();
      var icon_revisado_alert;

      if (visita.fecha_revision && (visita.fecha_completado && Date.create(visita.fecha_completado) > Date.create(visita.fecha_revision) || !_.includes(['5', '6'], '' + visita.id_status))) {
        icon_revisado_alert = React.createElement(_Popup["default"], {
          trigger: React.createElement(_Icon["default"], {
            color: "red",
            name: "warning circle"
          }),
          content: 'Esta visita ha recibido modificaciones después de su última revisión.'
        });
      }

      return React.createElement("div", {
        className: "actions ab-status-actions"
      }, user_has_role_permission('paso_completado') && React.createElement(_Popup["default"], {
        trigger: React.createElement("div", {
          className: "button-wrapper"
        }, React.createElement(_Button["default"], {
          primary: true,
          icon: true,
          compact: true,
          onClick: this.onClickCompletado,
          disabled: this.props.completadoDisabledText != null
        }, ' ', React.createElement(_Icon["default"], {
          name: "check"
        }), " Completado")),
        content: this.props.completadoDisabledText,
        header: "Marcar como Completado | Opci\xF3n deshabilitada",
        disabled: this.props.completadoDisabledText == null,
        className: "disable-text",
        on: "hover"
      }), user_has_role_permission(['paso_revisado']) && React.createElement(_Popup["default"], {
        trigger: React.createElement("div", {
          className: "button-wrapper"
        }, React.createElement(_Button["default"], {
          color: "olive",
          icon: true,
          compact: true,
          onClick: this.onClickRevisado,
          disabled: revisadoDisabledText != null
        }, ' ', React.createElement(_Icon["default"], {
          name: "check",
          fitted: true
        }), React.createElement(_Icon["default"], {
          name: "check"
        }), " Revisado ", icon_revisado_alert)),
        content: revisadoDisabledText,
        header: "Marcar como Revisado | Opci\xF3n deshabilitada",
        disabled: revisadoDisabledText == null,
        className: "disable-text",
        on: "hover",
        position: "top right"
      }));
    }
  }]);

  return PasoVisitaStatusActions;
}(_react.Component);

exports.PasoVisitaStatusActions = PasoVisitaStatusActions;
PasoVisitaStatusActions.contextType = _HojaTrabajoContext["default"];

var PasoVisitaAssoc =
/*#__PURE__*/
function (_Component4) {
  _inherits(PasoVisitaAssoc, _Component4);

  function PasoVisitaAssoc(props) {
    var _this3;

    _classCallCheck(this, PasoVisitaAssoc);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(PasoVisitaAssoc).call(this, props));
    _this3.state = {
      open: false,
      newVisitaOpen: false,
      selectedVisitas: _.filter(_.map(_this3.props.hoja_trabajo.visitas, function (item, id) {
        return item.id ? id : null;
      }))
    };
    return _this3;
  }

  _createClass(PasoVisitaAssoc, [{
    key: "getModal",
    value: function getModal() {
      var _this4 = this;

      if (!this.state.open) {
        return null;
      }

      var icons = {
        moveLeft: React.createElement("i", {
          className: "icon angle left"
        }),
        moveAllLeft: React.createElement("i", {
          className: "icon angle double left"
        }),
        moveRight: React.createElement("i", {
          className: "icon angle right"
        }),
        moveAllRight: React.createElement("i", {
          className: "icon angle double right"
        }),
        moveDown: React.createElement("i", {
          className: "icon angle down"
        }),
        moveUp: React.createElement("i", {
          className: "icon angle up"
        })
      };
      var hoja_trabajo = this.props.hoja_trabajo;
      var visitas = hoja_trabajo.visitas;
      var options = [];

      _.forEach(visitas, function (visita, id) {
        options.push({
          value: id,
          label: visita.label
        });
      });

      var onChange = function onChange(selectedVisitas) {
        _this4.setState({
          selectedVisitas: selectedVisitas
        });
      };

      var onClose = function onClose() {
        _this4.setState({
          open: false
        });
      };

      var onToggle = function onToggle() {
        _this4.setState(function (state) {
          return {
            newVisitaOpen: !state.newVisitaOpen
          };
        });
      };

      return React.createElement(_Modal["default"], {
        key: "modal-assoc",
        open: true,
        closeIcon: true,
        dimmer: "inverted",
        size: "small",
        onClose: onClose,
        className: "modal-ab"
      }, React.createElement(_Modal["default"].Header, null, " Asociaci\xF3n de Visitas a este Paso"), React.createElement(_Modal["default"].Content, null, React.createElement("form", {
        method: "post",
        className: "ui form",
        action: url_for("proyecto/".concat(hoja_trabajo.proyecto.id, "/hoja-trabajo/paso/").concat(hoja_trabajo.paso.id, "/visita"))
      }, React.createElement("div", {
        style: {
          marginBottom: '15px'
        }
      }, "Asocie las visitas a relacionar con este paso: "), " ", React.createElement("br", null), React.createElement(_reactDualListbox["default"], {
        name: "visitas",
        options: options,
        availableLabel: "Por asociar",
        selectedLabel: "Asociadas",
        selected: this.state.selectedVisitas,
        icons: icons,
        onChange: onChange
      }), React.createElement(_Divider["default"], {
        horizontal: true
      }, "O"), React.createElement(_Accordion["default"], null, React.createElement(_Accordion["default"].Title, {
        active: this.state.newVisitaOpen,
        onClick: onToggle
      }, React.createElement(_Icon["default"], {
        name: "caret right"
      }), " Crear Nueva Visita"), React.createElement(_Accordion["default"].Content, {
        active: this.state.newVisitaOpen
      }, React.createElement(_Form["default"].Field, {
        inline: true
      }, React.createElement("label", null, "Nombre de la visita"), React.createElement("div", {
        className: "ui input"
      }, React.createElement("input", {
        placeholder: "Nombre de la visita",
        name: "visita_name",
        type: "text"
      }))))), React.createElement("button", {
        className: "primary small ui button right floated"
      }, "Guardar"), React.createElement("button", {
        className: "negative small ui button right floated",
        type: "button",
        onClick: onClose
      }, "Cancelar"), React.createElement("div", {
        className: "clearfix"
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return [React.createElement("div", {
        key: "trigger",
        onClick: function onClick() {
          return _this5.setState({
            open: true
          });
        }
      }, this.props.trigger), this.getModal()];
    }
  }]);

  return PasoVisitaAssoc;
}(_react.Component);

exports.PasoVisitaAssoc = PasoVisitaAssoc;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/Attachments.tsx":
/*!****************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/Attachments.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanAttachmentFrom = cleanAttachmentFrom;
exports.AttachmentListPanel = exports.AttachmentListItem = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _Icon = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Icon */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Icon/index.js"));

var _Label = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Label */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Label/index.js"));

var _List = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/List */ "./node_modules/semantic-ui-react/dist/commonjs/elements/List/index.js"));

var _Popup = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Popup */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Popup/index.js"));

var _Dimmer = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Dimmer/Dimmer */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Dimmer/Dimmer.js"));

var _Loader = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Loader/Loader */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Loader/Loader.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AttachmentListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(AttachmentListItem, _Component);

  function AttachmentListItem() {
    var _this;

    _classCallCheck(this, AttachmentListItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AttachmentListItem).apply(this, arguments));

    _this.onRemove = function (ev) {
      ev.preventDefault();
      var url = url_for("proyecto/".concat(_this.props.attachment.id_proyecto, "/adjunto/").concat(_this.props.attachment.id, "/remove"));
      bootbox.warningConfirm('¿Esta seguro de querer borrar este archivo?<br><br>Tenga en cuenta que el sistema intentará borrar automáticamente los enlaces existentes a este archivo.', 'Cancelar', 'Aceptar', function (r) {
        if (r) {
          $.blockUI({
            message: '<div class="ajax-loader-snake-32  _a-center"></div><h3 class="loading-block-text">Borrando archivo.<br> Por favor Espere ...</h3>'
          });
          $.ajax(url, {
            type: 'POST',
            data: {},
            dataType: 'json'
          }).done(function () {
            _this.props.onDelete(_this.props.attachment, function () {
              return $.unblockUI();
            });
          }).fail(function () {
            $.pnotify({
              text: 'El archivo no pudo ser borrado.',
              type: 'error'
            });
            $.unblockUI();
          });
        }
      });
    };

    return _this;
  }

  _createClass(AttachmentListItem, [{
    key: "changeStatus",
    value: function changeStatus(e, status) {
      var _this2 = this;

      e.preventDefault();
      var url = url_for("proyecto/".concat(this.props.attachment.id_proyecto, "/adjunto/").concat(this.props.attachment.id, "/").concat(status));
      $.blockUI({
        message: '<div class="ajax-loader-snake-32  _a-center"></div><h3 class="loading-block-text">Marcando archivo como ' + _.str.capitalize(status) + '.<br> Por favor Espere ...</h3>'
      });
      $.ajax(url, {
        type: 'POST',
        data: {},
        dataType: 'json'
      }).done(function (res) {
        _this2.props.onUpdate(res.response.record);

        $.unblockUI();
      }).fail(function () {
        $.pnotify({
          text: 'El archivo no pudo ser actualizado.',
          type: 'error'
        });
        $.unblockUI();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var attachment = this.props.attachment;
      var completadoComp;

      if (attachment.fecha_completado) {
        completadoComp = React.createElement("div", {
          style: {
            display: 'inline-block'
          }
        }, React.createElement("strong", {
          className: "title"
        }, "(P) "), React.createElement("div", {
          style: {
            display: 'inline-block',
            minWidth: 20,
            textAlign: 'center',
            marginRight: 2
          },
          title: "Preparado por: ".concat(attachment.UpdateLog[0].User.name)
        }, attachment.UpdateLog[0].User.sigla, "\xA0"), React.createElement("div", {
          style: {
            display: 'inline-block'
          },
          title: attachment.fecha_completado
        }, React.createElement("span", {
          className: "icon-moon-calendar"
        }), ' ', Date.create(attachment.fecha_completado).format('{year}-{MM}-{dd}')));
      }

      var revisadoComp;

      if (attachment.fecha_revisado) {
        revisadoComp = React.createElement("div", {
          style: {
            display: 'inline-block'
          }
        }, React.createElement("strong", {
          className: "title"
        }, "(R) "), React.createElement("div", {
          style: {
            display: 'inline-block',
            minWidth: 20,
            textAlign: 'center',
            marginRight: 2
          },
          title: "Revisado por: ".concat(attachment.RevisionLog[0].User.name)
        }, attachment.RevisionLog[0].User.sigla, "\xA0"), React.createElement("div", {
          style: {
            display: 'inline-block'
          },
          title: attachment.fecha_revisado
        }, React.createElement("span", {
          className: "icon-moon-calendar"
        }), " ", Date.create(attachment.fecha_revisado).format('{year}-{MM}-{dd}')));
      }

      var revisadoLink;

      if (user_has_role(['PM', 'SR'])) {
        if (attachment.fecha_completado) {
          revisadoLink = React.createElement("button", {
            style: {
              marginLeft: '8px'
            },
            onClick: function onClick(e) {
              return _this3.changeStatus(e, 'revisado');
            },
            className: "act"
          }, React.createElement("span", {
            className: "icon-moon-checkmark-8"
          }), " Revisar");
        } else {
          revisadoLink = React.createElement(_Popup["default"], {
            trigger: React.createElement("div", {
              className: "button-wrapper"
            }, React.createElement("button", {
              style: {
                marginLeft: '8px'
              },
              className: "act disabled"
            }, React.createElement("span", {
              className: "icon-moon-checkmark-8"
            }), " Revisar")),
            content: "Esta archivo adjunto debe estar primero en estado COMPLETADO, para poder ser marcado como REVISADO",
            header: "Marcar como Revisado | Opci\xF3n deshabilitada",
            className: "disable-text",
            on: "hover"
          });
        }
      }

      return React.createElement("li", {
        key: attachment.id,
        style: {
          marginBottom: 2
        }
      }, React.createElement("div", {
        style: {
          background: '#f5f9f8',
          borderRadius: 6,
          border: '1px solid #aecec7'
        }
      }, React.createElement("div", {
        className: "col-md-1",
        style: {
          marginTop: 5,
          borderRight: '1px inset #d7e1e2'
        }
      }, React.createElement("img", {
        src: AttachmentListItem.getFileIconUrl(attachment.filename),
        alt: "Icono"
      })), React.createElement("div", {
        className: "col-md-11",
        style: {
          padding: '3px 10px'
        }
      }, React.createElement("div", {
        className: "noqtip",
        title: attachment.filename,
        style: {
          fontWeight: 'bold',
          fontSize: '12px',
          maxWidth: 400,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }, attachment.filename), React.createElement("div", {
        style: {
          fontSize: '12px'
        }
      }, React.createElement("span", {
        style: {
          fontStyle: 'italic'
        },
        className: "noqtip",
        title: "Peso del archivo: ".concat(attachment.filesize_human)
      }, attachment.filesize_human), ' ', "|", React.createElement("div", {
        className: "attachment-actionsbar"
      }, React.createElement("div", {
        className: "section-a"
      }, React.createElement("a", {
        href: public_path("uploads/proyecto_adjunto/".concat(attachment.filepath)),
        target: "_blank",
        className: "act",
        style: {
          color: '#777'
        }
      }, React.createElement("span", {
        className: "icon-moon-download",
        style: {
          fontSize: '10px'
        }
      }), " Descargar")), user_has_role(['PM', 'SR', 'JR']) && React.createElement("div", {
        className: "section-a"
      }, React.createElement("a", {
        href: "#",
        className: "act",
        onClick: this.onRemove
      }, React.createElement("span", {
        className: "icon-tc-trash"
      }), " Borrar")), React.createElement("div", {
        className: "section-a",
        style: {
          minWidth: 90
        }
      }, attachment.fecha_completado ? React.createElement(_Popup["default"], {
        trigger: completadoComp,
        position: "bottom center"
      }, React.createElement(_Popup["default"].Header, {
        content: "Preparado por"
      }), React.createElement(_Popup["default"].Content, null, React.createElement("table", {
        className: "table nowrap"
      }, React.createElement("tbody", null, attachment.UpdateLog.map(function (item, k) {
        return React.createElement("tr", {
          key: k
        }, React.createElement("td", null, React.createElement(_Icon["default"], {
          //change icon: name: "user circle",
		  name: "far fa-user-circle",
          color: "green"
        }), " ", item.User.name, " (", item.User.sigla, ")"), React.createElement("td", null, React.createElement("em", null, Date.create(item.ts).format('{year}-{MM}-{dd}'))));
      }))))) : user_has_role(['PM', 'SR', 'JR']) && React.createElement("button", {
        style: {
          marginLeft: '8px'
        },
        onClick: function onClick(e) {
          return _this3.changeStatus(e, 'completado');
        },
        className: "act"
      }, React.createElement("span", {
        className: "icon-moon-checkmark-8"
      }), " Completar")), React.createElement("div", {
        className: "section-a"
      }, attachment.fecha_revisado && React.createElement(_Popup["default"], {
        trigger: revisadoComp,
        position: "bottom center"
      }, React.createElement(_Popup["default"].Header, {
        content: "Revisado por"
      }), React.createElement(_Popup["default"].Content, null, React.createElement("table", {
        className: "table nowrap"
      }, React.createElement("tbody", null, attachment.RevisionLog.map(function (item, k) {
        return React.createElement("tr", {
          key: k
        }, React.createElement("td", null, React.createElement(_Icon["default"], {
          //change icon: name: "user circle",
		   name: "far fa-user-circle",
          color: "olive"
        }), " ", item.User.name, " (", item.User.sigla, ")"), React.createElement("td", null, React.createElement("em", null, Date.create(item.ts).format('{year}-{MM}-{dd}'))));
      }))))), revisadoLink))), React.createElement("div", null)), React.createElement("div", {
        className: "clearfix"
      })));
    }
  }], [{
    key: "getFileExtension",
    value: function getFileExtension(filename) {
      return filename.split('.').pop();
    }
  }, {
    key: "getFileIconUrl",
    value: function getFileIconUrl(file) {
      var extension = AttachmentListItem.getFileExtension(file);

      var file_icon = function file_icon() {
        switch (extension) {
          case 'xls':
          case 'xlsx':
          case 'xlsm':
          case 'xlsxm':
            return 'excel';

          case 'doc':
          case 'docx':
            return 'word';

          case 'pdf':
            return 'pdf';

          case 'png':
          case 'jpg':
          case 'jpeg':
          case 'bmp':
          case 'gif':
            return 'image';

          case 'zip':
          case 'rar':
            return 'zip';

          default:
            return 'default';
        }
      };

      return public_path("images/file_icons/".concat(file_icon(), ".png"));
    }
  }]);

  return AttachmentListItem;
}(_react.Component);

exports.AttachmentListItem = AttachmentListItem;

var AttachmentListPanel =
/*#__PURE__*/
function (_Component2) {
  _inherits(AttachmentListPanel, _Component2);

  function AttachmentListPanel() {
    _classCallCheck(this, AttachmentListPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(AttachmentListPanel).apply(this, arguments));
  }

  _createClass(AttachmentListPanel, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          isLoading = _this$props.isLoading,
          attachments = _this$props.attachments;
      return React.createElement("div", {
        className: "attachment-list-panel dimmable",
        style: {
          minHeight: 40
        }
      }, isLoading && React.createElement(_Dimmer["default"], {
        inverted: true,
        active: true
      }, React.createElement(_Loader["default"], {
        inverted: true,
        active: true,
        className: "elastic grey"
      })), React.createElement("h3", {
        className: "panel-title"
      }, "Adjuntos:", React.createElement(_Label["default"], {
        circular: true,
        color: "green"
      }, _.size(attachments))), _.size(attachments) > 0 && React.createElement(_List["default"], {
        divided: true,
        className: "attachment-list"
      }, _.map(attachments, function (attachment, i) {
        return React.createElement(AttachmentListItem, {
          key: attachment.id,
          attachment: attachment,
          onUpdate: _this4.props.onUpdateItem,
          onDelete: _this4.props.onDeleteItem
        });
      })));
    }
  }]);

  return AttachmentListPanel;
}(_react.Component);

exports.AttachmentListPanel = AttachmentListPanel;
AttachmentListPanel.defaultProps = {
  isLoading: false
};

function cleanAttachmentFrom(value, adjunto) {
  var h = public_path("uploads/proyecto_adjunto/".concat(adjunto.filepath), true).replace(/\./g, '.').replace(/\\/g, '/');
  var t = '<a .*href="' + h + '"(.+?)/a>\\s*(<br\\s?/?>)?';
  var re = new RegExp(t, 'g');
  return value.replace(re, '');
}

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/HojaTrabajoContext.ts":
/*!**********************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/HojaTrabajoContext.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _default = (0, _react.createContext)({
  hoja_trabajo: null,
  update: function update(data) {}
});

exports["default"] = _default;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/MenuSidebarVisita.tsx":
/*!**********************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/MenuSidebarVisita.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _Menu = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/collections/Menu/Menu */ "./node_modules/semantic-ui-react/dist/commonjs/collections/Menu/Menu.js"));

var _Image = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Image/Image */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Image/Image.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Icon/Icon */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Icon/Icon.js"));

var _TabPaneVisitaModals = __webpack_require__(/*! ./TabPaneVisitaModals */ "./src/proyecto__hoja_trabajo/TabPaneVisitaModals.tsx");

var _HojaTrabajoContext = _interopRequireDefault(__webpack_require__(/*! ./HojaTrabajoContext */ "./src/proyecto__hoja_trabajo/HojaTrabajoContext.ts"));

var _utils = __webpack_require__(/*! ./utils */ "./src/proyecto__hoja_trabajo/utils.ts");

var _menuitem_ajuste = __webpack_require__(/*! ./sidebar/menuitem_ajuste */ "./src/proyecto__hoja_trabajo/sidebar/menuitem_ajuste.tsx");

var _menuitem_hallazgo = __webpack_require__(/*! ./sidebar/menuitem_hallazgo */ "./src/proyecto__hoja_trabajo/sidebar/menuitem_hallazgo.tsx");

var _menuitem_revision = __webpack_require__(/*! ./sidebar/menuitem_revision */ "./src/proyecto__hoja_trabajo/sidebar/menuitem_revision.tsx");

var _menuitem__model_manager = __webpack_require__(/*! ./sidebar/menuitem__model_manager */ "./src/proyecto__hoja_trabajo/sidebar/menuitem__model_manager.ts");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _menuitem_muestreo = __webpack_require__(/*! ./sidebar/menuitem_muestreo */ "./src/proyecto__hoja_trabajo/sidebar/menuitem_muestreo.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuSidebarVisita =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuSidebarVisita, _Component);

  function MenuSidebarVisita() {
    var _this;

    _classCallCheck(this, MenuSidebarVisita);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuSidebarVisita).apply(this, arguments));
    _this.state = {
      panelOpen: null,
      openAsignarUsuarioModal: false
    };

    _this.onItemOpen = function (item) {
      _this.setState({
        panelOpen: item
      });
    };

    _this.closeAllPanel = function () {
      _this.setState({
        panelOpen: null
      });
    };

    return _this;
  }

  _createClass(MenuSidebarVisita, [{
    key: "isActionItemEnabled",
    value: function isActionItemEnabled(action) {
      return typeof this.props.actionItems["_".concat(action)] === 'undefined' || this.props.actionItems["_".concat(action)];
    }
  }, {
    key: "renderAsignUserModal",
    value: function renderAsignUserModal() {
      var _this2 = this;

      if (this.state.openAsignarUsuarioModal) {
        var _this$context = this.context,
            hoja_trabajo = _this$context.hoja_trabajo,
            update = _this$context.update;

        var onSaveAsignarVisita = function onSaveAsignarVisita(id_asignado) {
          var url = url_for("proyecto/".concat(hoja_trabajo.proyecto.id, "/hoja-trabajo/paso/").concat(hoja_trabajo.paso.id, "/visita/").concat(_this2.props.visita.id_visita, "/save"));
          $.blockUI(create_blockUI_loading_message('Guardando asignado...'));
          $.ajax(url, {
            type: 'POST',
            data: {
              op: 'a',
              paso_id_usuario: id_asignado
            },
            dataType: 'json'
          }).done(function (res) {
            var hoja_trabajo_copy = _utils.HojaTrabajoUpdateUtils.updateVisita(hoja_trabajo, _this2.props.visita, res.response.record);

            update(hoja_trabajo_copy);
            $.unblockUI();
          });

          _this2.setState({
            openAsignarUsuarioModal: false
          });
        };

        return React.createElement(_TabPaneVisitaModals.HojaTrabajoAsignarVisitaModal, {
          visita: this.props.visita,
          onSave: onSaveAsignarVisita,
          onClose: function onClose() {
            return _this2.setState({
              openAsignarUsuarioModal: false
            });
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var id_proyecto = this.props.visita.HojaTrabajo.proyecto.id;
      var id_paso = this.props.visita.HojaTrabajo.paso.id;
      var id_visita = this.props.visita.id_visita;
      var has_parent = this.props.visita.HojaTrabajo.proyecto.id_parent != null;
      var url_base = "proyecto/".concat(id_proyecto, "/paso/").concat(id_paso, "/visita/").concat(id_visita, "/");
      var counters = this.props.visita.additionals;
      var image_path = public_path('images/sidebar_right/');
      return React.createElement(_react.Fragment, null, React.createElement("div", {
        className: (0, _classnames["default"])('sidebar-fixed-overlay ui page dimmer inverted', {
          active: this.state.panelOpen != null
        }),
        onClick: function onClick() {
          return _this3.closeAllPanel();
        }
      }), React.createElement(_Menu["default"], {
        fixed: "right",
        vertical: true,
        compact: true,
        icon: true,
        className: "visita-sidebar right-sidebar",
        id: "app-right-sidebar"
      }, React.createElement(_Menu["default"].Menu, null, _.map(this.props.actionItems, function (actionItem, key) {
        if (key.substr(0, 1) == '_' || actionItem === null) {
          return null;
        }

        var _onClick = actionItem.onClick;

        actionItem.onClick = function (ev, data) {
          _this3.closeAllPanel();

          _onClick(ev, data);
        };

        return React.createElement(_Menu["default"].Item, _extends({
          key: key
        }, actionItem));
      }), this.props.visita.HojaTrabajo.proyecto.isOpen && user_has_role_permission('paso_asignar_usuario') && this.isActionItemEnabled('assign_user') && React.createElement(_Menu["default"].Item, {
        link: true,
        title: "Asignar usuario a esta visita",
        onClick: function onClick(ev) {
          _this3.closeAllPanel();

          _this3.setState({
            openAsignarUsuarioModal: true
          });
        }
      }, 
	  
	  //change icon
	  //React.createElement(_Icon["default"].Group, {
      //  size: "large"
     // }, React.createElement(_Icon["default"], {
     //  
      //change icon /*
	 //  name: "user outline"
    //  }), React.createElement(_Icon["default"], {
    //    corner: true,
    //    name: "plus"
    //  }
	  
	  
	   React.createElement(_Icon["default"].Group, {
        size: "icon-svg asignar_usuario"
      }
	  
	  
	  )), this.renderAsignUserModal(), has_parent && this.isActionItemEnabled('history') && React.createElement(_TabPaneVisitaModals.HojaTrabajoHistoryModal, {
        trigger: React.createElement(_Menu["default"].Item, {
          title: "Hoja Trabajo A\xF1o Anterior ",
          icon: {
            name: 'history',
            size: 'large'
          },
          onClick: this.closeAllPanel
        }),
        url: url_for(url_base + 'prev')
      })), React.createElement(_Menu["default"].Menu, null, this.isActionItemEnabled('ajustes') && React.createElement(_menuitem_ajuste.MenuItemAjuste, {
        counter: counters.ajustes,
        moduleParams: {
          id_paso: id_paso,
          id_visita: id_visita,
          model: 'ajuste'
        },
        open: this.state.panelOpen == 'ajuste',
        onOpen: this.onItemOpen,
        modelManager: null
      }), this.isActionItemEnabled('hallazgo') && React.createElement(_menuitem_hallazgo.MenuItemHallazgo, {
        modelManager: _menuitem__model_manager.HallazgoHojaTrabajoModelManager.getInstance(),
        counter: counters.hallazgos,
        moduleParams: {
          id_paso: id_paso,
          id_visita: id_visita,
          model: 'hallazgo'
        },
        open: this.state.panelOpen == 'hallazgo',
        onOpen: this.onItemOpen
      }), this.isActionItemEnabled('muestreo') && React.createElement(_menuitem_muestreo.MenuItemMuestreo, {
        modelManager: null,
        counter: counters.muestreos,
        moduleParams: {
          id_paso: id_paso,
          id_visita: id_visita,
          model: 'muestreo'
        },
        open: this.state.panelOpen == 'muestreo',
        onOpen: this.onItemOpen
      }), this.isActionItemEnabled('revision') && React.createElement(_menuitem_revision.MenuItemRevision, {
        counter: counters.revisiones,
        moduleParams: {
          id_paso: id_paso,
          id_visita: id_visita,
          model: 'revision'
        },
        modelManager: _menuitem__model_manager.RevisionHojaTrabajoModelManager.getInstance(this.context),
        open: this.state.panelOpen == 'revision',
        onOpen: this.onItemOpen
      })), this.isActionItemEnabled('pdf') && React.createElement(_Menu["default"].Menu, null, React.createElement(_Menu["default"].Item, {
        as: "a",
        href: url_for(url_base + 'pdf.pdf'),
        target: "_blank",
        title: "Exportar como PDF",
        content: React.createElement(_Image["default"], {
          src: image_path + 'exportar_pdf.svg',
          size: "large"
        })
      }))));
    }
  }]);

  return MenuSidebarVisita;
}(_react.Component);

exports["default"] = MenuSidebarVisita;
MenuSidebarVisita.contextType = _HojaTrabajoContext["default"];
MenuSidebarVisita.defaultProps = {
  actionItems: {}
};

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/TabPaneVisita.tsx":
/*!******************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/TabPaneVisita.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Button = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Button/Button */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Button/Button.js"));

var _Tab = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Tab/Tab */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Tab/Tab.js"));

var _Progress = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Progress/Progress */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Progress/Progress.js"));

var _Table = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/collections/Table/Table */ "./node_modules/semantic-ui-react/dist/commonjs/collections/Table/Table.js"));

var _TableRowInstruccion = _interopRequireDefault(__webpack_require__(/*! ./TableRowInstruccion */ "./src/proyecto__hoja_trabajo/TableRowInstruccion.tsx"));

var _AppVisitaTab = __webpack_require__(/*! ./AppVisitaTab */ "./src/proyecto__hoja_trabajo/AppVisitaTab.tsx");

var _TabPaneVisitaBase2 = _interopRequireDefault(__webpack_require__(/*! ./TabPaneVisitaBase */ "./src/proyecto__hoja_trabajo/TabPaneVisitaBase.tsx"));

var _MenuSidebarVisita = _interopRequireDefault(__webpack_require__(/*! ./MenuSidebarVisita */ "./src/proyecto__hoja_trabajo/MenuSidebarVisita.tsx"));

var uuid = _interopRequireWildcard(__webpack_require__(/*! uuid */ "./node_modules/uuid/index.js"));

var _ErrorHandler = __webpack_require__(/*! ../global/ErrorHandler */ "./src/global/ErrorHandler.tsx");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TabPaneVisita =
/*#__PURE__*/
function (_TabPaneVisitaBase) {
  _inherits(TabPaneVisita, _TabPaneVisitaBase);

  function TabPaneVisita(props) {
    var _this;

    _classCallCheck(this, TabPaneVisita);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabPaneVisita).call(this, props));

    _this.onClickAddInstruccion = function () {
      _this.props.visita.instructions.push({
        local_id: uuid.v1(),
        category: null,
        description: null,
        Attachments: [],
        is_done: false,
        Visita: _this.props.visita,
        updated_at: null
      });

      _this.props.visita.updated_at = Date.create().format('{year}-{MM}-{dd} {hh}:{mm}:{ss}');

      _this.recalculateProgress();

      if (_this.props.isEditable && _this.isAllowedSortInstructions() && user_has_role_permission('instruccion_edit')) {
        setTimeout(function () {
          $("#table-visita-instrucciones-".concat(_this.props.visita.id)).tableDnDUpdate();
        }, 300);
      }
    };

    _this.onUpdateInstruccion = function (instruccion, key) {
      _this.props.visita.instructions[key] = instruccion;

      _this.recalculateProgress();
    };

    _this.onRemoveInstruccion = function (key) {
      _this.props.visita.instructions = _this.props.visita.instructions.filter(function (_, i) {
        return i !== key;
      });

      _this.recalculateProgress();

      $("#table-visita-instrucciones-".concat(_this.props.visita.id, " tbody tr")).each(function (i) {
        $(this).find('.instruction-iteration').text(_.padLeft('' + (i + 1), 3, '0') + '.');
      });
    };

    _this.state = {
      progress: _this.calculateProgress(),
      id_status: '' + props.visita.id_status,
      openAsignarUsuarioModal: false
    };
    return _this;
  }

  _createClass(TabPaneVisita, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var $table = $("#table-visita-instrucciones-".concat(this.props.visita.id));
      $table.floatThead();

      if (this.props.isEditable && this.isAllowedAddInstructions() && user_has_role_permission('instruccion_edit')) {
        $table.tableDnD({
          dragHandle: '.sort-handler',
          onDragClass: 'dragging',
          onDragStop: function onDragStop(table) {
            var serialize = [];
            var rows = table.rows;

            for (var i = 1; i < rows.length; i++) {
              var rowId = rows[i].id.substr(18);
              serialize.push(rowId);
              $(rows[i]).find('.instruction-iteration').text(_.padLeft('' + i, 3, '0') + '.');
            }

            var url = url_for("proyecto/".concat(_this2.props.visita.HojaTrabajo.proyecto.id, "/master_data/instruccion/sort"));
            $.ajax(url, {
              type: 'POST',
              data: {
                sort: serialize,
                id_paso: _this2.props.visita.HojaTrabajo.paso.id,
                id_visita: _this2.props.visita.id_visita
              },
              dataType: 'json'
            });
          }
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      $("#table-visita-instrucciones-".concat(this.props.visita.id)).floatThead('destroy');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var $table = $("#table-visita-instrucciones-".concat(this.props.visita.id));
      setTimeout(function () {
        $table.floatThead('reflow');
      }, 1000);
    }
  }, {
    key: "calculateProgress",
    value: function calculateProgress() {
      var done_count = this.props.visita.instructions.filter(function (_item) {
        return _item.is_done;
      }).length;
      return this.props.visita.instructions.length == 0 ? 0 : Math.round(100 * done_count / this.props.visita.instructions.length);
    }
  }, {
    key: "isAllowedAddInstructions",
    value: function isAllowedAddInstructions() {
      return !_.includes(['2A4', '2A3'], this.props.visita.HojaTrabajo.paso.code);
    }
  }, {
    key: "isAllowedSortInstructions",
    value: function isAllowedSortInstructions() {
      return !_.includes(['2A4', '2A3'], this.props.visita.HojaTrabajo.paso.code);
    }
  }, {
    key: "recalculateProgress",
    value: function recalculateProgress() {
      var progress = this.calculateProgress();
      this.setState({
        progress: progress
      });
    }
  }, {
    key: "getCompletadoDisabledText",
    value: function getCompletadoDisabledText() {
      if (this.state.progress < 100) {
        return 'Para completar esta hoja de trabajo, es necesario que TODAS las instrucciones estén atendidas.';
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          visita = _this$props.visita;
      var menuSidebarActionItems = {
        _ajustes: this.props.type != 'PERIODO',
        _history: this.props.type != 'PERIODO',
        instructions_add: this.props.isEditable && this.isAllowedAddInstructions() && user_has_role_permission('instruccion_create') ? {
          link: true,
          icon: {
            name: 'plus',
            size: 'large'
          },
          title: 'Añadir Instrucción',
          onClick: this.onClickAddInstruccion
        } : null
      };
      return React.createElement(_Tab["default"].Pane, {
        active: active
      }, React.createElement("div", {
        className: "visita-progress-container"
      }, React.createElement(_Progress["default"], {
        className: "visita-progress",
        size: "tiny",
        color: "green",
        percent: this.state.progress
      }), React.createElement("div", {
        className: "visita-progress-label"
      }, "".concat(this.state.progress, "%"))), React.createElement(_ErrorHandler.DefaultErrorHandler, null, React.createElement(_MenuSidebarVisita["default"], {
        visita: visita,
        actionItems: menuSidebarActionItems
      })), React.createElement(_AppVisitaTab.PasoObjetivoPane, {
        isEditable: this.props.isEditable
      }), React.createElement(_Table["default"], {
        stackable: true,
        className: "table-visita-instrucciones",
        id: "table-visita-instrucciones-".concat(visita.id)
      }, React.createElement(_Table["default"].Header, null, React.createElement(_Table["default"].Row, null, React.createElement(_Table["default"].HeaderCell, {
        className: "th-instruccion",
        colSpan: "2"
      }, "Instrucciones"), React.createElement(_Table["default"].HeaderCell, {
        className: "th-accion"
      }, "Acci\xF3n"), React.createElement(_Table["default"].HeaderCell, {
        className: "th-observaciones"
      }, "Observaciones/Evidencia"), React.createElement(_Table["default"].HeaderCell, {
        className: "th-adjuntos"
      }, "Adjuntos"), React.createElement(_Table["default"].HeaderCell, {
        className: "th-actions computer"
      }, "\xA0"))), React.createElement(_Table["default"].Body, null, this.renderInstrucciones(visita))), React.createElement("div", null, _.size(visita.instructions) > 0 && this.props.isEditable && this.isAllowedAddInstructions() && user_has_role_permission('instruccion_create') && React.createElement("div", {
        className: "ab-actions-group compact-actions"
      }, React.createElement(_Button["default"], {
        primary: true,
        floated: "left",
        compact: true,
        icon: "plus",
        content: "A\xF1adir Instrucci\xF3n",
        onClick: this.onClickAddInstruccion
      })), _.size(visita.instructions) > 0 && this.renderStatusActions()));
    }
  }, {
    key: "renderInstrucciones",
    value: function renderInstrucciones(visita) {
      var _this3 = this;

      if (_.size(visita.instructions) == 0) {
        return React.createElement(_Table["default"].Row, null, React.createElement(_Table["default"].Cell, {
          colSpan: "6",
          style: {
            textAlign: 'center'
          }
        }, React.createElement("div", {
          className: "alert alert-block nocontent"
        }, React.createElement("h3", null, "Sin instrucciones "), React.createElement("p", null, React.createElement("span", {
          className: "icon-warning-sign"
        }), "Esta hoja de trabajo a\xFAn no tiene instrucciones registradas.", ' '), this.props.isEditable && user_has_role_permission('instruccion_create') && [React.createElement(_Button["default"], {
          key: "button",
          content: "Agregar instrucci\xF3n",
          color: "green",
          compact: true,
          icon: "info circle",
          onClick: this.onClickAddInstruccion,
          style: {
            marginTop: '30px'
          }
        })])));
      }

      var instructions = _.map(visita.instructions, function (item, k) {
        item.index = k;
        return item;
      });

      var instructionGroups = _.values(_.map(_.groupBy(instructions, 'category'), function (item, k) {
        return {
          text: k,
          instructions: item
        };
      }));

      var rows = [];
      instructionGroups.forEach(function (instruccionGroup, i) {
        if (instruccionGroup.text != '' && instruccionGroup.text != 'null' && instruccionGroup.text != null) {
          rows.push(React.createElement("tr", {
            key: i,
            className: "macroinstruccion-row nodrag nodrop"
          }, React.createElement("td", {
            colSpan: 6
          }, instruccionGroup.text)));
        }

        instruccionGroup.instructions.forEach(function (instruccion, j) {
          instruccion.Visita = visita;
          rows.push(React.createElement(_TableRowInstruccion["default"], {
            key: instruccion.local_id,
            index: instruccion.index,
            iteration: j,
            instruccion: instruccion,
            isEditable: _this3.props.isEditable,
            isSortable: _this3.props.isEditable && _this3.isAllowedSortInstructions(),
            onUpdate: _this3.onUpdateInstruccion,
            onRemove: _this3.onRemoveInstruccion,
            onUpdateVisita: _this3.onUpdate
          }));
        });
      });
      return rows;
    }
  }]);

  return TabPaneVisita;
}(_TabPaneVisitaBase2["default"]);

exports["default"] = TabPaneVisita;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/TabPaneVisitaBase.tsx":
/*!**********************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/TabPaneVisitaBase.tsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _Button = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Button/Button */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Button/Button.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Icon */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Icon/index.js"));

var _Popup = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Popup */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Popup/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TabPaneVisitaBase =
/*#__PURE__*/
function (_Component) {
  _inherits(TabPaneVisitaBase, _Component);

  function TabPaneVisitaBase() {
    var _this;

    _classCallCheck(this, TabPaneVisitaBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TabPaneVisitaBase).apply(this, arguments));

    _this.onClickCompletado = function () {
      var url = url_for("proyecto/".concat(_this.props.visita.HojaTrabajo.proyecto.id, "/hoja-trabajo/paso/").concat(_this.props.visita.HojaTrabajo.paso.id, "/visita/").concat(_this.props.visita.id_visita, "/save"));
      var loadingMessage = _this.props.type == 'PERIODO' ? 'Marcando periodo como Completado...' : 'Marcando visita como Completada...';
      $.blockUI(create_blockUI_loading_message(loadingMessage));
      $.ajax(url, {
        type: 'POST',
        data: {
          op: 'c'
        },
        dataType: 'json'
      }).done(function (res) {
        if (res.hasErrors) {
          $.unblockUI();
          bootbox.alert(res.message);
        } else {
          _this.updateVisita(res.response.record);

          $.unblockUI();
        }
      });
    };

    _this.onClickRevisado = function () {
      var url = url_for("proyecto/".concat(_this.props.visita.HojaTrabajo.proyecto.id, "/hoja-trabajo/paso/").concat(_this.props.visita.HojaTrabajo.paso.id, "/visita/").concat(_this.props.visita.id_visita, "/save"));
      var loadingMessage = _this.props.type == 'PERIODO' ? 'Marcando periodo como Revisado...' : 'Marcando visita como Revisada...';
      $.blockUI(create_blockUI_loading_message(loadingMessage));
      $.ajax(url, {
        type: 'POST',
        data: {
          op: 'r'
        },
        dataType: 'json'
      }).done(function (res) {
        if (res.hasErrors) {
          $.unblockUI();
          bootbox.alert(res.message);
        } else {
          _this.updateVisita(res.response.record);

          $.unblockUI();
        }
      });
    };

    _this.onUpdate = function (visitas, instrucciones) {
      if (!$.isArray(visitas)) {
        visitas = [visitas];
      }

      _this.updateVisita(visitas[0]);

      visitas = _.rest(visitas);

      if (_.size(visitas)) {
        _.forEach(visitas, function (visita) {
          var _visita = _.find(_this.props.visita.HojaTrabajo.visitas, {
            id_visita: visita.id_visita
          });

          _visita = Object.assign(_visita, visita);
        });
      }

      if (instrucciones) {
        _.forEach(instrucciones, function (instruccion_mdata) {
          var visita = _.find(_this.props.visita.HojaTrabajo.visitas, {
            id_visita: instruccion_mdata.id_visita
          });

          switch (instruccion_mdata.cmd) {
            case 'CREATE':
              visita.instructions.push(instruccion_mdata.data);
              break;

            case 'UPDATE':
              visita.instructions = _.map(visita.instructions, function (instruccion) {
                if (instruccion.local_id == instruccion_mdata.data.local_id) {
                  return Object.assign(instruccion, instruccion_mdata.data);
                } else {
                  return instruccion;
                }
              });
              break;
          }
        });
      }
    };

    return _this;
  }

  _createClass(TabPaneVisitaBase, [{
    key: "updateVisita",
    value: function updateVisita(_visita) {
      var visita = Object.assign(this.props.visita, _visita);
      this.props.onChange(visita);
      this.setState({
        id_status: '' + visita.id_status
      });
    }
  }, {
    key: "getCompletadoDisabledText",
    value: function getCompletadoDisabledText() {
      return null;
    }
  }, {
    key: "getRevisadoDisabledText",
    value: function getRevisadoDisabledText() {
      var modelLabel = this.props.type == 'PERIODO' ? 'Este periodo' : 'Esta visita';

      if (_.includes(['1', '2', '3'], this.state.id_status) || this.getCompletadoDisabledText()) {
        return modelLabel + ' debe estar primero en estado COMPLETADO, para poder marcar esta hoja de trabajo como REVISADA.';
      } else if (_.includes(['6'], this.state.id_status)) {
        return modelLabel + ' tiene Notas de Revisión que deben primero ser atendidas para poder marcar esta hoja de trabajo como REVISADA.';
      } else if (this.props.visita.additionals.revisiones > 0) {
        return modelLabel + ' tiene Notas de Revisión pendientes por revisar que deben primero ser revisadas para poder marcar esta hoja de trabajo como REVISADA.';
      }

      return null;
    }
  }, {
    key: "renderStatusActions",
    value: function renderStatusActions() {
      if (!this.props.isEditable) {
        return null;
      }

      var revisado_disabled_text = this.getRevisadoDisabledText();
      var icon_revisado_alert;
      var visita = this.props.visita;

      if (visita.fecha_completado && visita.fecha_revision && Date.create(visita.fecha_completado) > Date.create(visita.fecha_revision)) {
        var modelLabel = this.props.type == 'PERIODO' ? 'Este periodo' : 'Esta visita';
        icon_revisado_alert = React.createElement(_Popup["default"], {
          trigger: React.createElement(_Icon["default"], {
            color: "red",
            name: "warning circle"
          }),
          content: modelLabel + ' ha recibido modificaciones después de su última revisión.'
        });
      }

      var completado_disabled_text = this.getCompletadoDisabledText();
      return React.createElement("div", {
        className: "actions ab-status-actions"
      }, user_has_role_permission('paso_completado') && React.createElement(_Popup["default"], {
        trigger: React.createElement("div", {
          className: "button-wrapper"
        }, React.createElement(_Button["default"], {
          primary: true,
          icon: true,
          compact: true,
          onClick: this.onClickCompletado,
          disabled: completado_disabled_text != null
        }, ' ', React.createElement(_Icon["default"], {
          name: "check"
        }), " Completado")),
        content: completado_disabled_text,
        header: "Marcar como Completado | Opci\xF3n deshabilitada",
        disabled: completado_disabled_text == null,
        className: "disable-text",
        on: "hover"
      }), user_has_role_permission(['paso_revisado']) && React.createElement(_Popup["default"], {
        trigger: React.createElement("div", {
          className: "button-wrapper"
        }, React.createElement(_Button["default"], {
          color: "olive",
          icon: true,
          compact: true,
          onClick: this.onClickRevisado,
          disabled: revisado_disabled_text != null
        }, ' ', React.createElement(_Icon["default"], {
          name: "check",
          fitted: true
        }), React.createElement(_Icon["default"], {
          name: "check"
        }), " Revisado ", icon_revisado_alert)),
        content: revisado_disabled_text,
        header: "Marcar como Revisado | Opci\xF3n deshabilitada",
        disabled: revisado_disabled_text == null,
        className: "disable-text",
        on: "hover"
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.visita.id_status != prevState.id_status) {
        return {
          id_status: '' + nextProps.visita.id_status
        };
      }

      return null;
    }
  }]);

  return TabPaneVisitaBase;
}(_react.Component);

TabPaneVisitaBase.defaultProps = {
  type: 'DEFAULT'
};
var _default = TabPaneVisitaBase;
exports["default"] = _default;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/TabPaneVisitaModals.tsx":
/*!************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/TabPaneVisitaModals.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HojaTrabajoAsignarVisitaModal = exports.HojaTrabajoHistoryModal = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _ckeditor4React = _interopRequireDefault(__webpack_require__(/*! ckeditor4-react */ "./node_modules/ckeditor4-react/dist/ckeditor.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Button/Button */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Button/Button.js"));

var _Loader = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Loader */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Loader/index.js"));

var _Modal = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Modal */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Modal/index.js"));

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Dropdown */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Dropdown/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HojaTrabajoHistoryModal =
/*#__PURE__*/
function (_Component) {
  _inherits(HojaTrabajoHistoryModal, _Component);

  function HojaTrabajoHistoryModal() {
    var _this;

    _classCallCheck(this, HojaTrabajoHistoryModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HojaTrabajoHistoryModal).apply(this, arguments));
    _this.state = {
      content: ''
    };

    _this.onOpen = function () {
      if (_this.state.content == '') {
        var ckeditorOptions = {
          height: 350,
          removePlugins: 'elementspath, uploadfile',
          toolbar: [{}]
        };

        _this.setState({
          content: React.createElement(_Loader["default"], {
            active: true
          })
        });

        $.ajax(_this.props.url, {
          dataType: 'json'
        }).done(function (res) {
          if (res.hasErrors) {
            _this.setState({
              content: React.createElement("div", {
                style: {
                  color: 'red',
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginTop: 25
                }
              }, "Hoja de Trabajo NO disponible")
            });
          } else {
            var content = "&nbsp;<div class='watermark-text' style='color:#08828a33; font-size:70px; font-weight: bold; transform:rotate(340deg); -webkit-transform:rotate(340deg); left: 35%; position: absolute; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;  '>Hoja Trabajo<br>A\xF1o Anterior</div>\n          <div class='watermarked-content' style='position:absolute; z-index:1;  margin-right: 20px; '>".concat(res.response.content, "</div>&nbsp;");

            _this.setState({
              content: React.createElement(_ckeditor4React["default"], {
                data: content,
                readOnly: true,
                config: ckeditorOptions
              })
            });
          }
        });
      }
    };

    return _this;
  }

  _createClass(HojaTrabajoHistoryModal, [{
    key: "render",
    value: function render() {
      return React.createElement(_Modal["default"], {
        closeIcon: true,
        trigger: this.props.trigger,
        content: this.state.content,
        header: "Hoja de Trabajo - A\xF1o Anterior",
        closeOnDimmerClick: false,
        onOpen: this.onOpen,
        size: "fullscreen",
        dimmer: "inverted",
        style: {
          minHeight: 400
        },
        className: "modal-ab"
      });
    }
  }]);

  return HojaTrabajoHistoryModal;
}(_react.Component);

exports.HojaTrabajoHistoryModal = HojaTrabajoHistoryModal;

var HojaTrabajoAsignarVisitaModal =
/*#__PURE__*/
function (_Component2) {
  _inherits(HojaTrabajoAsignarVisitaModal, _Component2);

  function HojaTrabajoAsignarVisitaModal(props) {
    var _this2;

    _classCallCheck(this, HojaTrabajoAsignarVisitaModal);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(HojaTrabajoAsignarVisitaModal).call(this, props));

    _this2.onChange = function (ev, data) {
      _this2.setState({
        id_asignado: data.value
      });
    };

    _this2.onSave = function () {
      _this2.props.onSave(_this2.state.id_asignado);

      _this2.props.onClose();
    };

    _this2.onClose = function () {
      _this2.props.onClose();
    };

    _this2.state = {
      id_asignado: props.visita.id_usuario_asignado
    };
    return _this2;
  }

  _createClass(HojaTrabajoAsignarVisitaModal, [{
    key: "render",
    value: function render() {
      var visita = this.props.visita;

      var equipo = _.filter(visita.HojaTrabajo.equipo, function (item) {
        return item.rol.is_assignable;
      });

      var equipoOptions = _.map(equipo, function (item) {
        return {
          key: item.user_id,
          text: item.name,
          value: item.user_id,
          description: item.rol.name,
          label: {
            content: item.sigla,
            circular: true,
            color: 'green'
          }
        };
      });

      return React.createElement(_Modal["default"], {
        closeIcon: true,
        open: true,
        closeOnDimmerClick: false,
        size: "tiny",
        dimmer: "inverted",
        className: "modal-ab",
        onClose: this.onClose
      }, React.createElement(_Modal["default"].Header, null, "Asignar/Reasignar visita a usuario"), React.createElement(_Modal["default"].Content, null, React.createElement("blockquote", null, React.createElement("strong", null, "Visita: "), " ", visita.label), React.createElement(_Dropdown["default"], {
        placeholder: "Seleccione el usuario",
        defaultValue: visita.id_usuario_asignado,
        selection: true,
        clearable: true,
        fluid: true,
        options: equipoOptions,
        onChange: this.onChange
      })), React.createElement(_Modal["default"].Actions, null, React.createElement(_Button["default"], {
        primary: true,
        content: "Aceptar",
        onClick: this.onSave
      })));
    }
  }]);

  return HojaTrabajoAsignarVisitaModal;
}(_react.Component);

exports.HojaTrabajoAsignarVisitaModal = HojaTrabajoAsignarVisitaModal;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/TableRowInstruccion.tsx":
/*!************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/TableRowInstruccion.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _Button = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Button/Button */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Button/Button.js"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Icon */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Icon/index.js"));

var _Loader = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Loader */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Loader/index.js"));

var _Label = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/elements/Label */ "./node_modules/semantic-ui-react/dist/commonjs/elements/Label/index.js"));

var _Table = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/collections/Table */ "./node_modules/semantic-ui-react/dist/commonjs/collections/Table/index.js"));

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Dropdown */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Dropdown/index.js"));

var _Dimmer = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Dimmer */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Dimmer/index.js"));

var _Select = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/addons/Select */ "./node_modules/semantic-ui-react/dist/commonjs/addons/Select/index.js"));

var _EditorPreview = _interopRequireDefault(__webpack_require__(/*! ../global/EditorPreview */ "./src/global/EditorPreview.tsx"));

var _Attachments = __webpack_require__(/*! ./Attachments */ "./src/proyecto__hoja_trabajo/Attachments.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TableRowInstruccion =
/*#__PURE__*/
function (_Component) {
  _inherits(TableRowInstruccion, _Component);

  function TableRowInstruccion(props) {
    var _this;

    _classCallCheck(this, TableRowInstruccion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableRowInstruccion).call(this, props));

    _this.evalIsDone = function (instruccion) {
      if (instruccion.answer) {
        return true;
      }

      if (instruccion.observations) {
        return true;
      }

      return false;
    };

    _this.checkIsDoneDisabled = function (instruccion) {
      if (!user_has_role_permission('hoja_trabajo_edit')) {
        return true;
      }

      if (!_this.props.isEditable) {
        return true;
      }

      if (instruccion.answer) {
        return false;
      }

      if (instruccion.observations) {
        return false;
      }

      return true;
    };

    _this.onChecked = function (event) {
      var checked = event.target.checked;

      _this.setState(function (state) {
        var instruccion = Object.assign({}, state.instruccion);
        instruccion.is_done = checked;
        return {
          instruccion: instruccion
        };
      }, function () {
        return _this.props.onUpdate(_this.state.instruccion, _this.props.index);
      });
    };

    _this.onActionChanged = function (event, data) {
      _this.updateModel('answer', data.value);
    };

    _this.onChangeEditor = function (field) {
      return function (editor) {
        var closeModal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var autosave = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var cb = arguments.length > 3 ? arguments[3] : undefined;

        if (field == 'description') {
          $.blockUI(create_blockUI_loading_message('Guardando los cambios... Por Favor Espere'));

          _this.updateModel(field, editor.getData(), function () {
            if ($.isFunction(cb)) {
              cb();
            }

            $.unblockUI();
          });
        } else {
          _this.updateModel(field, editor.getData(), cb);
        }

        if (closeModal) {
          _this.setState({
            isEditorOpen: false
          });
        }
      };
    };

    _this.onRemove = function () {
      bootbox.warningConfirm('¿Desea eliminar permanentemente esta instruccion ?', 'Cancelar', 'Aceptar', function (r) {
        if (r) {
          $.blockUI(create_blockUI_loading_message('Eliminando instrucción...'));

          _this.props.onRemove(_this.props.index);

          if (_this.props.instruccion.id) {
            var url = url_for("proyecto/".concat(_this.state.instruccion.Visita.HojaTrabajo.proyecto.id, "/hoja-trabajo/instruccion/remove"));
            $.ajax(url, {
              type: 'POST',
              data: {
                id: {
                  local_id: _this.props.instruccion.local_id
                }
              },
              dataType: 'json'
            }).done(function (res) {
              if (res.response.record) {
                _this.props.onUpdateVisita([res.response.record]);
              }

              $.unblockUI();
            });
          } else {
            $.unblockUI();
          }
        }
      });
    };

    _this.onUpload = function () {
      _this.fetchAttachments();
    };

    _this.onClickAttachmentCell = function (ev) {
      ev.preventDefault();

      _this.setState({
        isEditorOpen: true
      });
    };

    _this.onUpdateAttachment = function () {
      _this.fetchAttachments();
    };

    _this.onDeleteAttachment = function (adjunto, cb) {
      _this.fetchAttachments();

      _this.setState(function (state) {
        var instruccion = Object.assign({}, state.instruccion);
        var h = public_path("uploads/proyecto_adjunto/".concat(adjunto.filepath), true).replace(/\./g, '.').replace(/\\/g, '/');
        var t = '<a .*href="' + h + '"(.+?)/a>\\s*(<br\\s?/?>)?';
        var re = new RegExp(t, 'g');
        instruccion.observations = instruccion.observations.replace(re, '');

        _this.updateModel('observations', instruccion.observations);

        return {
          instruccion: instruccion
        };
      }, function () {
        if ($.isFunction(cb)) {
          cb();
        }
      });
    };

    _this.state = {
      instruccion: props.instruccion,
      isEditorOpen: false,
      isLoadingAttachments: false
    };
    return _this;
  }

  _createClass(TableRowInstruccion, [{
    key: "getFormattedIteration",
    value: function getFormattedIteration() {
      return _.padLeft(String(this.props.iteration + 1), 3, '0');
    }
  }, {
    key: "getFormattedDescription",
    value: function getFormattedDescription() {
      var instruccion = this.state.instruccion.description;

      if (instruccion == null) {
        return '';
      }

      instruccion = instruccion.replace(/(?!^)\([a-z]\)/g, '<br/>&nbsp;&nbsp;$& ');
      return '<span key="instruction-iteration" class="instruction-iteration">' + this.getFormattedIteration() + '.</span> ' + instruccion;
    }
  }, {
    key: "getFormattedObservations",
    value: function getFormattedObservations() {
      var observaciones = this.state.instruccion.observations;

      if (!observaciones) {
        return '';
      }

      observaciones = observaciones.trim();
      var cleanHtml = observaciones.replace(/<img[\s\S]*?>/g, ' [** IMAGEN ó TABLA **] ');
      cleanHtml = cleanHtml.replace(/<table[\s\S]*?\/table>/g, '[** TABLA **]');
      cleanHtml = cleanHtml.replace(/<figure[\s\S]*?\/figure>/g, '[** IMAGEN **]');
      cleanHtml = cleanHtml.replace(/<\/p>/g, '<br>');
      cleanHtml = cleanHtml.replace(/<\/h\d>/g, '<br>');
      cleanHtml = cleanHtml.replace(/&nbsp;/g, '');
      cleanHtml = cleanHtml.replace(/<(?!(br)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\/?)[\0-=\?-\uFFFF]+>/g, '');
      cleanHtml = cleanHtml.replace(/<br>[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*<br>/g, '<br>');
      cleanHtml = cleanHtml.replace(/\[\*\*([\s\S]+?)\*\*\]/g, '<span class="special-tag">$&</span>');
      return cleanHtml;
    }
  }, {
    key: "doUpdateModel",
    value: function doUpdateModel(field, value, cb) {
      var _this2 = this;

      var modified_data = [];
      this.setState(function (state) {
        var instruccion = Object.assign({}, state.instruccion);

        if (_.str.trim(value) == '') {
          value = null;
        }

        if (field == 'is_done') {
          instruccion[field] = !!value;
        } else {
          instruccion[field] = value;
        }

        modified_data.push({
          field: field,
          value: value
        });

        if (field != 'description') {
          instruccion.is_done = _this2.evalIsDone(instruccion);
          modified_data.push({
            field: 'is_done',
            value: instruccion.is_done ? 1 : 0
          });
        }

        if (field == 'observations' && instruccion.observations != null && instruccion.observations != '' && !instruccion.answer) {
          instruccion.answer = 'Hecho';
          modified_data.push({
            field: 'answer',
            value: 'Hecho'
          });
        }

        return {
          instruccion: instruccion
        };
      }, function () {
        _this2.props.onUpdate(_this2.state.instruccion, _this2.props.index);

        if ($.isFunction(cb)) {
          cb(modified_data);
        }
      });
    }
  }, {
    key: "updateModel",
    value: function updateModel(field, value, cb) {
      var _this3 = this;

      this.doUpdateModel(field, value, function (modified_data) {
        _this3.sendInstructionToServer(modified_data, function () {
          _this3.fetchAttachments(false);

          if ($.isFunction(cb)) {
            cb();
          }
        });
      });
    }
  }, {
    key: "sendInstructionToServer",
    value: function sendInstructionToServer(data) {
      var _this4 = this;

      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var params_data = {
        id: {
          local_id: this.state.instruccion.local_id
        },
        id_paso: this.state.instruccion.Visita.HojaTrabajo.paso.id,
        id_visita: this.state.instruccion.Visita.id_visita,
        data: data
      };
      var url = url_for("proyecto/".concat(this.state.instruccion.Visita.HojaTrabajo.proyecto.id, "/hoja-trabajo/instruccion"));

      if (!this.state.instruccion.id) {
        $.blockUI(create_blockUI_loading_message('Creando instrucción...'));
      }

      $.ajax(url, {
        type: 'POST',
        data: params_data,
        dataType: 'json'
      }).done(function (res) {
        if (res.response["new"]) {
          _this4.setState({
            instruccion: Object.assign({}, _this4.state.instruccion, res.response.record)
          });

          $.unblockUI();
        }

        _this4.props.onUpdateVisita(res.response.visitas, res.response.changed);

        if ($.isFunction(cb)) {
          cb();
        }
      });
    }
  }, {
    key: "fetchAttachments",
    value: function fetchAttachments() {
      var _this5 = this;

      var showLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (showLoading) {
        this.setState({
          isLoadingAttachments: true
        });
      }

      var url = url_for("proyecto/".concat(this.state.instruccion.Visita.HojaTrabajo.proyecto.id, "/hoja-trabajo/instruccion/attachments"));
      $.ajax(url, {
        type: 'GET',
        data: {
          local_id: this.state.instruccion.local_id
        },
        dataType: 'json'
      }).done(function (res) {
        _this5.doUpdateModel('Attachments', res.response.Attachments);

        _this5.setState({
          isLoadingAttachments: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var instruccion = this.state.instruccion;
      var actionChoices = ['Hecho', 'Sí', 'No', 'Cumple', 'No Cumple', 'Aplica', 'No Aplica'];
      actionChoices = actionChoices.map(function (_item) {
        return {
          key: _item,
          value: _item,
          text: _item
        };
      });
      var formattedDescription = this.getFormattedDescription();
      var ckeditorOptionsInstr = {
        uploadUrl: url_for('proyecto/' + instruccion.Visita.HojaTrabajo.proyecto.id + '/master_data/paso/' + instruccion.Visita.HojaTrabajo.paso.id + '/upload?id_visita=' + instruccion.Visita.id_visita + '&model=instruccion_item__instr&model_id=' + instruccion.local_id),
        imageUploadUrl: url_for('proyecto/' + instruccion.Visita.HojaTrabajo.proyecto.id + '/master_data/paso/' + instruccion.Visita.HojaTrabajo.paso.id + '/upload?id_visita=' + instruccion.Visita.id_visita + '&model=instruccion_item__instr&model_id=' + instruccion.local_id),
        filebrowserUploadUrl: url_for('proyecto/' + instruccion.Visita.HojaTrabajo.proyecto.id + '/master_data/paso/' + instruccion.Visita.HojaTrabajo.paso.id + '/upload?id_visita=' + instruccion.Visita.id_visita + '&n=attachment&model=instruccion_item__instr&model_id=' + instruccion.local_id),
        link_to_muestreo_enabled: true
      };
      var ckeditorOptionsObs = {
        uploadUrl: url_for('proyecto/' + instruccion.Visita.HojaTrabajo.proyecto.id + '/master_data/paso/' + instruccion.Visita.HojaTrabajo.paso.id + '/upload?id_visita=' + instruccion.Visita.id_visita + '&model=instruccion_item__obs&model_id=' + instruccion.local_id),
        imageUploadUrl: url_for('proyecto/' + instruccion.Visita.HojaTrabajo.proyecto.id + '/master_data/paso/' + instruccion.Visita.HojaTrabajo.paso.id + '/upload?id_visita=' + instruccion.Visita.id_visita + '&model=instruccion_item__obs&model_id=' + instruccion.local_id),
        filebrowserUploadUrl: url_for('proyecto/' + instruccion.Visita.HojaTrabajo.proyecto.id + '/master_data/paso/' + instruccion.Visita.HojaTrabajo.paso.id + '/upload?id_visita=' + instruccion.Visita.id_visita + '&n=attachment&model=instruccion_item__obs&model_id=' + instruccion.local_id),
        link_to_muestreo_enabled: true
      };
      var attachmentsList = React.createElement("div", {
        style: {
          position: 'relative'
        }
      }, React.createElement(_Dimmer["default"], {
        inverted: true,
        active: this.state.isLoadingAttachments
      }, React.createElement(_Loader["default"], {
        inverted: true
      })), React.createElement(_Attachments.AttachmentListPanel, {
        attachments: instruccion.Attachments,
        onUpdateItem: this.onUpdateAttachment,
        onDeleteItem: this.onDeleteAttachment
      }));
      var modalLeftActions = null;

      if (this.props.isEditable && user_has_role_permission('instruccion_delete')) {
        modalLeftActions = React.createElement(_Button["default"], {
          negative: true,
          floated: "left",
          icon: "trash alternate outline",
          content: "Eliminar instrucci\xF3n",
          onClick: this.onRemove
        });
      }

      return React.createElement(_Table["default"].Row, {
        className: "hoverable-actions instruccion-row ".concat(this.props.iteration % 2 ? 'even' : 'odd'),
        id: "table-instruccion-".concat(instruccion.local_id)
      }, React.createElement(_Table["default"].Cell, {
        className: "td-chk",
        collapsing: true
      }, React.createElement("label", {
        className: "container-checkbox"
      }, React.createElement("input", {
        id: "checkbox-".concat(instruccion.id),
        type: "checkbox",
        checked: instruccion.is_done,
        disabled: this.checkIsDoneDisabled(instruccion),
        value: "1",
        onChange: this.onChecked
      }), React.createElement("span", {
        className: "checkmark"
      })), this.props.isEditable && this.props.isSortable && user_has_role_permission('hoja_trabajo_edit') && React.createElement("div", {
        className: "action-list"
      }, React.createElement("div", {
        className: "drag-icon sort-handler"
      }))), React.createElement(_Table["default"].Cell, {
        width: "6",
        className: "instruction-text"
      }, React.createElement(_EditorPreview["default"], {
        className: "instruction-text-editor",
        ckeditorOptions: ckeditorOptionsInstr,
        preview: formattedDescription,
        data: instruccion.description,
        required: true,
        label: " ",
        labelTitle: "Descripci\xF3n de la instrucci\xF3n",
        open: !instruccion.id && !instruccion.description,
        editable: this.props.isEditable && user_has_role_permission('instruccion_edit'),
        leftActions: modalLeftActions,
        autosave: true,
        onSave: this.onChangeEditor('description')
      })), React.createElement(_Table["default"].Cell, {
        style: {
          width: 'auto'
        }
      }, this.props.isEditable && user_has_role_permission('hoja_trabajo_edit') ? React.createElement(_Select["default"], {
        placeholder: "Seleccione...",
        className: "instruccion-action",
        value: instruccion.answer,
        clearable: true,
        onChange: this.onActionChanged,
        options: actionChoices
      }) : React.createElement("span", null, instruccion.answer)), React.createElement(_Table["default"].Cell, {
        width: "7",
        className: "observations-text"
      }, React.createElement(_EditorPreview["default"], {
        className: "observations-text-editor",
        ckeditorOptions: ckeditorOptionsObs,
        preview: this.getFormattedObservations(),
        data: instruccion.observations,
        label: formattedDescription,
        open: this.state.isEditorOpen,
        editable: this.props.isEditable && user_has_role_permission('hoja_trabajo_edit'),
        autosave: true,
        onSave: this.onChangeEditor('observations'),
        onClose: function onClose() {
          return _this6.setState({
            isEditorOpen: false
          });
        },
        onUpload: this.onUpload,
        onClickPreview: this.onClickAttachmentCell,
        footer: attachmentsList
      })), React.createElement(_Table["default"].Cell, {
        className: "attachments"
      }, React.createElement("div", null, React.createElement("a", {
        href: "#",
        className: "btn-attach",
        onClick: this.onClickAttachmentCell
      }, React.createElement(_Label["default"], {
        circular: true,
        floating: true,
        color: "green",
        size: "mini"
      }, _.size(instruccion.Attachments)), React.createElement(_Icon["default"], {
        name: "copy outline",
        className: "attachments-icon"
      })))), React.createElement(_Table["default"].Cell, {
        textAlign: "right",
        collapsing: true,
        className: "computer"
      }, this.props.isEditable && user_has_role_permission('instruccion_delete') && React.createElement(_Dropdown["default"], {
        className: "action",
        inline: true,
        direction: "left",
        icon: false,
        trigger: React.createElement(_Icon["default"], {
          name: "ellipsis vertical",
          color: "grey"
        })
      }, React.createElement(_Dropdown["default"].Menu, null, React.createElement(_Dropdown["default"].Item, {
        icon: "trash alternate outline",
        content: "Eliminar instrucci\xF3n",
        onClick: this.onRemove
      })))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.instruccion.updated_at != prevState.instruccion.updated_at) {
        return {
          instruccion: nextProps.instruccion
        };
      }

      return null;
    }
  }]);

  return TableRowInstruccion;
}(_react.Component);

exports["default"] = TableRowInstruccion;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/index.tsx":
/*!**********************************************!*\
  !*** ./src/proyecto__hoja_trabajo/index.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ "./src/proyecto__hoja_trabajo/App.tsx"));

var _AppPeriodo = _interopRequireDefault(__webpack_require__(/*! ./AppPeriodo */ "./src/proyecto__hoja_trabajo/AppPeriodo.tsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

accounting.settings.number.precision = 0;
accounting.settings.number.thousand = '.';
accounting.settings.number.decimal = ',';

if (app.vars.hoja_trabajo.paso.tipo == 'PERIODO') {
  (0, _reactDom.render)(React.createElement(_AppPeriodo["default"], {
    hoja_trabajo: app.vars.hoja_trabajo
  }), document.getElementById('root'));
} else {
  (0, _reactDom.render)(React.createElement(_App["default"], {
    hoja_trabajo: app.vars.hoja_trabajo
  }), document.getElementById('root'));
}

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/ajuste_list.tsx":
/*!************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/ajuste_list.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AjusteList = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _Modal = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Modal/Modal */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Modal/Modal.js"));

var _menuitem = __webpack_require__(/*! ./menuitem */ "./src/proyecto__hoja_trabajo/sidebar/menuitem.tsx");

var _ajuste_modal = __webpack_require__(/*! ./ajuste_modal */ "./src/proyecto__hoja_trabajo/sidebar/ajuste_modal.tsx");

var _AuthorIconLog = __webpack_require__(/*! ../../global/AuthorIconLog */ "./src/global/AuthorIconLog.tsx");

var _StatusButtonAction = __webpack_require__(/*! ../../global/StatusButtonAction */ "./src/global/StatusButtonAction.tsx");

var _Popup = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Popup/Popup */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Popup/Popup.js"));

var _utils_truncate = __webpack_require__(/*! ../utils_truncate */ "./src/proyecto__hoja_trabajo/utils_truncate.ts");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AjusteList =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AjusteList, _PureComponent);

  function AjusteList() {
    _classCallCheck(this, AjusteList);

    return _possibleConstructorReturn(this, _getPrototypeOf(AjusteList).apply(this, arguments));
  }

  _createClass(AjusteList, [{
    key: "render",
    value: function render() {
      var _this = this;

      if (this.props.items === null) {
        return React.createElement("div", {
          style: {
            height: 300,
            position: 'relative'
          }
        }, React.createElement("div", {
          className: "ui active inverted text loader elastic olive"
        }, "Cargando Listado de Ajustes"));
      } else if (_.size(this.props.items) == 0) {
        return React.createElement("div", {
          className: "empty nocontent"
        }, "0 Ajustes");
      } else {
        var items = this.props.items;
        return React.createElement(_menuitem.MenuElementListPanel, {
          className: "ajustes-list"
        }, _.map(items, function (item) {
          return React.createElement("div", {
            key: item.idx,
            className: "listitem ajuste-listitem"
          }, React.createElement(AjusteListItem, {
            item: item,
            isEditable: _this.props.isEditable,
            onSave: _this.props.onSaveItem,
            onClickDelete: _this.props.onClickDeleteItem
          }));
        }));
      }
    }
  }]);

  return AjusteList;
}(_react.PureComponent);

exports.AjusteList = AjusteList;

var AjusteListItem =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(AjusteListItem, _PureComponent2);

  function AjusteListItem() {
    var _this2;

    _classCallCheck(this, AjusteListItem);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AjusteListItem).apply(this, arguments));
    _this2.state = {
      isModalEdit: false
    };

    _this2.onClickDelete = function (ev) {
      ev.preventDefault();

      _this2.props.onClickDelete(_this2.props.item);
    };

    _this2.onClickEdit = function (ev) {
      ev.preventDefault();

      _this2.setState({
        isModalEdit: true
      });
    };

    _this2.onCloseEdit = function () {
      _this2.setState({
        isModalEdit: false
      });
    };

    _this2.onSave = function (item, changes, blockingText) {
      _this2.props.onSave(item, changes, blockingText);
    };

    return _this2;
  }

  _createClass(AjusteListItem, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var item = this.props.item;
      return React.createElement("div", null, this.props.isEditable && React.createElement(_menuitem.MenuElementListActions, {
        actions: {
          edit: {
            label: 'Editar',
            callback: this.onClickEdit,
            permission: 'ajustes_edit'
          },
          "delete": {
            label: 'Eliminar',
            callback: this.onClickDelete,
            permission: 'ajustes_delete'
          }
        }
      }), React.createElement("div", {
        onClick: this.onClickEdit
      }, React.createElement("div", {
        className: "row r1"
      }, React.createElement("div", {
        className: "pull-left r1_1"
      }, React.createElement("span", {
        className: "title-h1"
      }, " Ajuste #", item.idx), React.createElement(_AuthorIconLog.AuthorIconLogDefaultWrapper, {
        model: item,
        size: "small"
      }), React.createElement("div", {
        className: "r1_2"
      }, React.createElement("strong", null, "Ajuste Registrado: "), ' ', React.createElement("span", {
        className: (0, _classnames["default"])({
          red: '' + item.aplicado != '1'
        })
      }, '' + item.aplicado == '1' ? 'Sí' : 'No'))), React.createElement(_StatusButtonAction.StatusDivBlock, {
        wrapperClassName: "pull-right text-mini",
        status: item.status || 'EN PROCESO',
        className: "mini",
        hideLabel: true
      })), React.createElement("table", {
        className: "ui compact very basic celled striped small table table-ajustes"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Cuenta"), React.createElement("th", null, "Debe"), React.createElement("th", null, "Haber"))), React.createElement("tbody", null, _.map(item.items, function (subitem) {
        return React.createElement(_react.Fragment, {
          key: subitem.id
        }, !isEmpty(subitem.debe) && React.createElement("tr", null, React.createElement("td", null, React.createElement(_Popup["default"], {
          trigger: React.createElement("span", null, subitem.cuenta),
          content: subitem.nombre_cuenta,
          header: subitem.cuenta,
          size: "mini"
        })), React.createElement("td", {
          className: "right aligned"
        }, accounting.formatNumber(subitem.debe)), React.createElement("td", null, "\xA0")), !isEmpty(subitem.haber) && React.createElement("tr", null, React.createElement("td", null, React.createElement(_Popup["default"], {
          trigger: React.createElement("span", null, subitem.cuenta),
          content: subitem.nombre_cuenta,
          header: subitem.cuenta,
          size: "mini"
        })), React.createElement("td", null, "\xA0"), React.createElement("td", {
          className: "right aligned"
        }, accounting.formatNumber(subitem.haber))));
      }))), item.descripcion && React.createElement("div", {
        className: "item-description"
      }, React.createElement("div", {
        className: "editor-preview",
        dangerouslySetInnerHTML: {
          __html: (0, _utils_truncate.truncateText)(item.descripcion)
        }
      }))), React.createElement("div", {
        className: "actions-wrapper"
      }, React.createElement("div", {
        className: "actions"
      }, React.createElement("div", {
        className: "group-actions right-actions"
      }, user_has_role_permission('ajustes_edit') && React.createElement("button", {
        className: "ui button icon primary mini compact",
        onClick: function onClick() {
          return _this3.onSave(item, {
            status: 'COMPLETADO'
          }, 'Marcando como COMPLETADO');
        }
      }, React.createElement("i", {
        className: "icon check"
      }), " Completar"), user_has_role_permission('ajustes_revisado') && React.createElement(_Popup["default"], {
        disabled: item.fecha_completado != null,
        className: "disable-text",
        on: "hover",
        basic: true,
        content: "Debe estar primero en estado COMPLETADO, para poder marcarla como REVISADA.",
        trigger: React.createElement("div", {
          className: "button-wrapper"
        }, React.createElement("button", {
          className: "ui button mini compact olive",
          disabled: item.fecha_completado == null,
          onClick: function onClick() {
            return item.fecha_completado == null ? void 0 : _this3.onSave(item, {
              status: 'REVISADO'
            }, 'Marcando como REVISADO');
          }
        }, React.createElement("i", {
          className: "icon check fitted"
        }), React.createElement("i", {
          className: "icon check"
        }), " Revisado"))
      })))), this.state.isModalEdit && React.createElement(AjusteModalEdit, {
        item: item,
        onSave: this.onSave,
        onClickDelete: this.onClickDelete,
        onClose: this.onCloseEdit,
        isEditable: this.props.isEditable
      }));
    }
  }]);

  return AjusteListItem;
}(_react.PureComponent);

var AjusteModalEdit =
/*#__PURE__*/
function (_PureComponent3) {
  _inherits(AjusteModalEdit, _PureComponent3);

  function AjusteModalEdit() {
    var _this4;

    _classCallCheck(this, AjusteModalEdit);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(AjusteModalEdit).apply(this, arguments));

    _this4.onSave = function (data, blockingText) {
      _this4.props.onSave(_this4.props.item, data, blockingText);
    };

    return _this4;
  }

  _createClass(AjusteModalEdit, [{
    key: "render",
    value: function render() {
      return React.createElement(_Modal["default"], {
        open: true,
        dimmer: "inverted",
        className: "modal-ab modal-sidebarmenuitem",
        size: "large",
        closeIcon: true,
        onClose: this.props.onClose,
        closeOnEscape: false,
        closeOnDimmerClick: false
      }, React.createElement(_Modal["default"].Header, null, "Editar Ajuste"), React.createElement(_ajuste_modal.AjusteModal, {
        moduleParams: {
          id_visita: this.props.item.id_visita,
          model: 'ajuste'
        },
        item: this.props.item,
        isEditable: this.props.isEditable,
        onSave: this.onSave,
        onClickDelete: this.props.onClickDelete
      }));
    }
  }]);

  return AjusteModalEdit;
}(_react.PureComponent);

var isEmpty = function isEmpty(value) {
  if (_.isNumber(value)) {
    return false;
  }

  return _.size(value) == 0;
};

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/ajuste_modal.tsx":
/*!*************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/ajuste_modal.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AjusteModal = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _menuitem__new = __webpack_require__(/*! ./menuitem__new */ "./src/proyecto__hoja_trabajo/sidebar/menuitem__new.tsx");

var _EditorPreview = _interopRequireDefault(__webpack_require__(/*! ../../global/EditorPreview */ "./src/global/EditorPreview.tsx"));

var _InputAutoNumeric = _interopRequireDefault(__webpack_require__(/*! ../../global/InputAutoNumeric */ "./src/global/InputAutoNumeric.tsx"));

var _menuitem_ajuste_context = _interopRequireDefault(__webpack_require__(/*! ./menuitem_ajuste_context */ "./src/proyecto__hoja_trabajo/sidebar/menuitem_ajuste_context.ts"));

var _reactAutocomplete = _interopRequireDefault(__webpack_require__(/*! react-autocomplete */ "./node_modules/react-autocomplete/build/lib/Autocomplete.js"));

var _utils_ajuste = __webpack_require__(/*! ../utils_ajuste */ "./src/proyecto__hoja_trabajo/utils_ajuste.ts");

var _Popup = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Popup */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Popup/index.js"));

var _StatusButtonAction = __webpack_require__(/*! ../../global/StatusButtonAction */ "./src/global/StatusButtonAction.tsx");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Tooltip = __webpack_require__(/*! ../../global/Tooltip */ "./src/global/Tooltip.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AjusteModal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AjusteModal, _PureComponent);

  function AjusteModal(props) {
    var _this;

    _classCallCheck(this, AjusteModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AjusteModal).call(this, props));

    _this.onChangeAplicado = function (ev) {
      _this.setState({
        aplicado: ev.target.value
      });

      if (!_this.isNewItem()) {
        _this.props.onSave({
          aplicado: ev.target.value
        });
      }
    };

    _this.onChangeDescripcion = function (ckeditor) {
      _this.setState({
        descripcion: ckeditor.getData()
      });

      if (!_this.isNewItem()) {
        _this.props.onSave({
          descripcion: ckeditor.getData()
        });
      }
    };

    _this.onAddItem = function () {
      _this.setState(function (prevState) {
        var items = [].concat(_toConsumableArray(prevState.items), [createAjusteEmpty()]);
        return {
          items: items
        };
      });
    };

    _this.onDeleteItem = function (item, itemIndex) {
      _this.setState(function (prevState) {
        var items = _.reject(prevState.items, function (_item, k) {
          return k == itemIndex;
        });

        return {
          items: items
        };
      }, function () {
        if (!_this.isNewItem()) {
          _this.props.onSave({
            items: _this.state.items
          });
        }
      });
    };

    _this.onUpdateItem = function (item, itemIndex) {
      var notify = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      _this.setState(function (prevState) {
        var items;

        if (typeof prevState.items[itemIndex] === 'undefined') {
          items = _toConsumableArray(prevState.items);
          items.push(item);
        } else {
          items = _.map(prevState.items, function (_item, k) {
            if (k == itemIndex) {
              return Object.assign({}, _item, item);
            } else {
              return _item;
            }
          });
        }

        return {
          items: items
        };
      }, function () {
        if (notify && !_this.isNewItem()) {
          var blockingText = _.any(_this.state.items, function (_item) {
            return !_item.id;
          }) ? 'Guardando cambios' : null;

          _this.props.onSave({
            items: _this.state.items
          }, blockingText);
        }
      });
    };

    _this.onCreate = function () {
      _this._onCreate({
        status: 'EN PROCESO'
      }, 'Creando Ajuste');
    };

    _this.onCreateAndCompletado = function () {
      _this._onCreate({
        status: 'COMPLETADO'
      }, 'Creando Ajuste');
    };

    _this.onCompletado = function () {
      _this.props.onSave({
        status: 'COMPLETADO'
      }, 'Marcando como COMPLETADO');
    };

    _this.onRevisado = function () {
      _this.props.onSave({
        status: 'REVISADO'
      }, 'Marcando como REVISASO');
    };

    _this.state = {
      descripcion: props.item.descripcion,
      items: props.item.items || [],
      status: props.item.status,
      aplicado: props.item.aplicado
    };
    return _this;
  }

  _createClass(AjusteModal, [{
    key: "isNewItem",
    value: function isNewItem() {
      return !this.props.item.idx;
    }
  }, {
    key: "esPlanillaDescuadrada",
    value: function esPlanillaDescuadrada() {
      var items = this.state.items;

      if (!items) {
        return false;
      }

      var totalD = _.reduce(items, function (acc, curr) {
        return num(curr.debe) + acc;
      }, 0);

      var totalH = _.reduce(items, function (acc, curr) {
        return num(curr.haber) + acc;
      }, 0);

      return totalD != totalH;
    }
  }, {
    key: "validateItems",
    value: function validateItems() {
      return _.size(this.state.items) > 0 && !_.any(this.state.items, function (item) {
        return item['cuenta'] == '' || item['nombre_cuenta'] == '' || !item['debe'] && !item['haber'];
      });
    }
  }, {
    key: "_onCreate",
    value: function _onCreate(changes, blockingText) {
      if (!this.validateItems()) {
        bootbox.alert('Ingrese el codigo de la cuenta y valor del ajuste para cada una de las filas del ajuste contable.');
        return;
      }

      this.props.onSave(Object.assign({}, this.state, changes), blockingText);
    }
  }, {
    key: "renderItemHeader",
    value: function renderItemHeader() {
      var item = Object.assign({
        label: this.props.item.idx ? "Ajuste #".concat(this.props.item.idx) : 'Ajuste Nuevo'
      }, this.props.item);
      return React.createElement(_menuitem__new.MenuItemNewHeader, {
        item: item
      });
    }
  }, {
    key: "renderRows",
    value: function renderRows() {
      var _this2 = this;

      var items = this.state.items;
      return React.createElement(_react.Fragment, null, React.createElement(_menuitem_ajuste_context["default"].Consumer, null, function (cuentas) {
        return _.map(items, function (row, k) {
          return React.createElement(AjusteTableRow, {
            item: row,
            key: k,
            itemIndex: k,
            cuentas: cuentas,
            isEditable: _this2.props.isEditable,
            canRemove: _.size(items) > 1,
            onUpdate: _this2.onUpdateItem,
            onClickDelete: _this2.onDeleteItem
          });
        });
      }));
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var item = this.props.item;
      var esPlanillaDescuadrada = this.esPlanillaDescuadrada();
      var revisadoDisableText = null;

      if (esPlanillaDescuadrada) {
        revisadoDisableText = 'No es posible guardar los cambios realizados en este ajuste mientras la planilla esté descuadrada.';
      } else if (!item.fecha_completado) {
        revisadoDisableText = 'Debe estar primero en estado COMPLETADO, para poder marcarse como REVISADO.';
      }

      var rightActions = !this.isNewItem() && React.createElement("button", {
        className: "ui button compact negative left floated",
        onClick: this.props.onClickDelete
      }, React.createElement("i", {
        className: "icon trash"
      }), " Eliminar");
      return this.isNewItem() ? React.createElement("div", {
        className: "actions ab-status-actions"
      }, React.createElement(_Popup["default"], {
        content: "No es posible guardar este ajuste mientras la planilla est\xE9 descuadrada.",
        disabled: !esPlanillaDescuadrada,
        className: "disable-text",
        trigger: React.createElement("div", {
          className: "button-wrapper"
        }, React.createElement("button", {
          className: "ui button compact green",
          onClick: this.onCreate,
          disabled: esPlanillaDescuadrada
        }, "Crear"))
      }), React.createElement(_Popup["default"], {
        content: "No es posible guardar este ajuste mientras la planilla est\xE9 descuadrada.",
        disabled: !esPlanillaDescuadrada,
        className: "disable-text",
        trigger: React.createElement("div", {
          className: "button-wrapper"
        }, React.createElement("button", {
          className: "ui button compact green",
          onClick: this.onCreateAndCompletado,
          disabled: esPlanillaDescuadrada
        }, "Crear y Completar"))
      })) : React.createElement(_react.Fragment, null, rightActions, React.createElement(_StatusButtonAction.StatusButtonGroupActions, {
        completado: {
          permission: 'hallazgo_completado',
          onClick: this.onCompletado,
          disableText: esPlanillaDescuadrada ? 'No es posible guardar los cambios realizados en este ajuste mientras la planilla esté descuadrada.' : null
        },
        revisado: {
          permission: 'hallazgo_revisado',
          onClick: this.onRevisado,
          record: item,
          disableText: revisadoDisableText
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_react.Fragment, null, React.createElement("div", {
        className: "content"
      }, this.renderItemHeader(), React.createElement("table", {
        className: "ui table compact"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "C\xF3digo de la Cuenta"), React.createElement("th", null, "Nombre de la Cuenta"), React.createElement("th", null, "Debe"), React.createElement("th", null, "Haber"), React.createElement("th", null))), React.createElement("tbody", null, this.renderRows(), this.props.isEditable && React.createElement("tr", null, React.createElement("td", {
        colSpan: 5
      }, React.createElement("button", {
        type: "button",
        className: "ui button olive fluid icon",
        onClick: this.onAddItem
      }, "A\xF1adir Fila ", React.createElement("i", {
        className: "icon plus"
      })))))), this.esPlanillaDescuadrada() && React.createElement("div", {
        className: "ui red tiny message _a-center m1 "
      }, React.createElement("i", {
        className: "icon exclamation triangle yellow"
      }), " Alerta: Planilla descuadrada"), React.createElement("div", {
        className: "ui segment"
      }, React.createElement(_EditorPreview["default"], {
        prefixPreview: "Descripci\xF3n del Ajuste",
        labelTitle: "Descripci\xF3n del Ajuste",
        ckeditorOptions: "basic",
        editable: this.props.isEditable,
        data: this.state.descripcion,
        onSave: this.onChangeDescripcion
      })), React.createElement("div", {
        className: "ui segment basic nopad pull-left",
        style: {
          marginTop: 5
        }
      }, React.createElement("label", {
        style: {
          marginRight: 10,
          display: 'inline-block',
          fontWeight: 600
        }
      }, "Error Tolerable:"), accounting.formatNumber(app.vars.error_tolerable[this.props.moduleParams.id_visita])), React.createElement("div", {
        className: "ui right aligned segment basic nopad"
      }, React.createElement("label", {
        style: {
          marginRight: 10,
          display: 'inline-block',
          fontWeight: 600
        }
      }, "\xBFAjuste Registrado? ", React.createElement(_Tooltip.GenericTooltip, {
        text: "@tooltip.ajustes.aplicado"
      }), " :"), React.createElement("select", {
        className: "raw-select",
        value: '' + this.state.aplicado == '1' ? '1' : '0',
        onChange: this.onChangeAplicado
      }, React.createElement("option", {
        value: "1"
      }, "S\xED"), React.createElement("option", {
        value: "0"
      }, "No")))), React.createElement("div", {
        className: "actions"
      }, this.renderActions(), React.createElement("div", {
        className: "clearfix"
      })));
    }
  }]);

  return AjusteModal;
}(_react.PureComponent);

exports.AjusteModal = AjusteModal;

var AjusteTableRow =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(AjusteTableRow, _PureComponent2);

  function AjusteTableRow(props) {
    var _this3;

    _classCallCheck(this, AjusteTableRow);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(AjusteTableRow).call(this, props));

    _this3.onClickDelete = function (ev) {
      ev.preventDefault();

      if (!_this3.props.canRemove) {
        return;
      }

      bootbox.confirm('¿Desea eliminar esta fila de su ajuste contable?', 'Cancelar', 'Sí, eliminar fila', function (r) {
        if (!r) {
          return;
        }

        _this3.props.onClickDelete(_this3.props.item, _this3.props.itemIndex);
      });
    };

    _this3.onSelectCuenta = function (value, item) {
      _this3.setState({
        cuenta: item.cuenta,
        nombre_cuenta: item.nombre_cuenta
      }, function () {
        _this3.notifyUpdate();
      });
    };

    _this3.onChangeCuenta = function (ev, value) {
      _this3.setState({
        cuenta: value,
        nombre_cuenta: ''
      });
    };

    _this3.onChangeNombreCuenta = function (ev, value) {
      _this3.setState({
        nombre_cuenta: value,
        cuenta: ''
      });
    };

    _this3.onBlurCuenta = function () {
      var cuentas = _this3.props.cuentas;

      _this3.setState(function (prevState) {
        if (prevState.cuenta == '' && prevState.nombre_cuenta == '') {
          return null;
        }

        if (prevState.cuenta != '' && prevState.nombre_cuenta != '') {
          return null;
        }

        if (prevState.cuenta != '') {
          var nombre_cuenta = (0, _utils_ajuste.getNombreCuenta)(cuentas, prevState.cuenta);
          return {
            cuenta: prevState.cuenta,
            nombre_cuenta: nombre_cuenta
          };
        }

        if (prevState.nombre_cuenta != '') {
          var cuenta = _.find(cuentas, function (item) {
            return item.nombre_cuenta.toUpperCase() == prevState.nombre_cuenta.toUpperCase();
          });

          return {
            cuenta: cuenta ? cuenta.cuenta : '',
            nombre_cuenta: prevState.nombre_cuenta
          };
        }
      }, function () {
        return _this3.notifyUpdate();
      });
    };

    _this3.onChangeInput = function (field, value, persist) {
      if (field == 'debe') {
        _this3.setState({
          debe: value
        }, function () {
          return _this3.notifyUpdate(persist);
        });
      } else {
        _this3.setState({
          haber: value
        }, function () {
          return _this3.notifyUpdate(persist);
        });
      }
    };

    _this3.state = {
      cuenta: props.item.cuenta,
      nombre_cuenta: props.item.nombre_cuenta,
      debe: props.item.debe,
      haber: props.item.haber
    };
    return _this3;
  }

  _createClass(AjusteTableRow, [{
    key: "notifyUpdate",
    value: function notifyUpdate() {
      var notify = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var changes = Object.assign({}, this.props.item, this.state);

      if (changes['cuenta'] == '' || changes['nombre_cuenta'] == '' || !changes['debe'] && !changes['haber']) {
        return;
      }

      this.props.onUpdate(changes, this.props.itemIndex, notify);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement("tr", null, React.createElement("td", null, React.createElement(_reactAutocomplete["default"], {
        items: this.props.cuentas,
        getItemValue: function getItemValue(item) {
          return item.cuenta;
        },
        renderItem: function renderItem(item, isHighlighted) {
          return React.createElement("div", {
            key: item.id,
            className: 'item ' + (isHighlighted ? 'item-highlighted' : '')
          }, React.createElement("div", null, item.cuenta), React.createElement("div", {
            className: "description"
          }, item.nombre_cuenta));
        },
        value: this.state.cuenta,
        onChange: this.onChangeCuenta,
        onSelect: this.onSelectCuenta,
        inputProps: {
          type: 'text',
          spellCheck: false,
          required: true,
          onBlur: this.onBlurCuenta
        },
        shouldItemRender: function shouldItemRender(item, value) {
          return item.cuenta.replace(/\D/g, '').startsWith(value.replace(/\D/g, ''));
        },
        renderMenu: function renderMenu(items) {
          return React.createElement("div", {
            className: "autocomplete-menu",
            style: {
              position: 'absolute',
              zIndex: 1002
            },
            children: items
          });
        },
        wrapperProps: {
          className: (0, _classnames["default"])({
            error: !this.state.cuenta
          })
        },
        wrapperStyle: {
          display: 'inline-block',
          position: 'relative'
        }
      }), !this.state.cuenta && React.createElement("div", {
        className: "ui pointing above prompt mini label"
      }, "Requerido")), React.createElement("td", null, React.createElement(_reactAutocomplete["default"], {
        items: this.props.cuentas,
        getItemValue: function getItemValue(item) {
          return item.nombre_cuenta;
        },
        renderItem: function renderItem(item, isHighlighted) {
          return React.createElement("div", {
            key: item.id,
            className: 'item ' + (isHighlighted ? 'item-highlighted' : '')
          }, React.createElement("div", null, item.nombre_cuenta), React.createElement("div", {
            className: "description"
          }, item.cuenta));
        },
        value: this.state.nombre_cuenta,
        onChange: this.onChangeNombreCuenta,
        onSelect: this.onSelectCuenta,
        inputProps: {
          type: 'text',
          spellCheck: false,
          required: true
        },
        shouldItemRender: function shouldItemRender(item, value) {
          var text = item.nombre_cuenta.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
          return _.str.contains(text, value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase());
        },
        renderMenu: function renderMenu(items) {
          return React.createElement("div", {
            className: "autocomplete-menu",
            style: {
              position: 'absolute',
              zIndex: 1002
            },
            children: items
          });
        },
        wrapperProps: {
          className: (0, _classnames["default"])({
            error: !this.state.nombre_cuenta
          })
        },
        wrapperStyle: {
          display: 'inline-block',
          position: 'relative'
        }
      }), !this.state.nombre_cuenta && React.createElement("div", {
        className: "ui pointing above prompt mini label"
      }, "Requerido")), React.createElement("td", null, React.createElement("div", {
        className: (0, _classnames["default"])({
          error: !this.state.debe && !this.state.haber
        })
      }, React.createElement(_InputAutoNumeric["default"], {
        isEditable: this.props.isEditable,
        value: this.state.debe,
        disabled: !!this.state.haber,
        onChange: function onChange(ev, value) {
          return _this4.onChangeInput('debe', value, false);
        },
        onBlur: function onBlur(ev, value) {
          return _this4.onChangeInput('debe', value, true);
        }
      })), !this.state.debe && !this.state.haber && React.createElement("div", {
        className: "ui pointing above prompt mini label"
      }, "Requerido")), React.createElement("td", null, React.createElement("div", {
        className: (0, _classnames["default"])({
          error: !this.state.haber && !this.state.debe
        })
      }, React.createElement(_InputAutoNumeric["default"], {
        isEditable: this.props.isEditable,
        value: this.state.haber,
        disabled: !!this.state.debe,
        onChange: function onChange(ev, value) {
          return _this4.onChangeInput('haber', value, false);
        },
        onBlur: function onBlur(ev, value) {
          return _this4.onChangeInput('haber', value, true);
        }
      })), !this.state.haber && !this.state.debe && React.createElement("div", {
        className: "ui pointing above prompt mini label"
      }, "Requerido")), React.createElement("td", null, this.props.isEditable && React.createElement(_Popup["default"], {
        disabled: this.props.canRemove,
        content: "Todo ajuste contable debe tener un m\xEDnimo de 1 cuenta (fila).",
        trigger: React.createElement("a", {
          href: "#",
          onClick: this.onClickDelete,
          title: "Eliminar Fila"
        }, React.createElement("i", {
          className: "icon cancel red"
        })),
        header: "Eliminar fila | Opci\xF3n deshabilitada",
        className: "disable-text"
      })));
    }
  }]);

  return AjusteTableRow;
}(_react.PureComponent);

var num = function num(input) {
  var v = parseFloat(input);
  return isNaN(v) ? 0 : v;
};

var createAjusteEmpty = function createAjusteEmpty() {
  return {
    cuenta: '',
    debe: null,
    haber: null,
    nombre_cuenta: ''
  };
};

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/hallazgo_edit.tsx":
/*!**************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/hallazgo_edit.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HallazgoModalEdit = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _Modal = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Modal/Modal */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Modal/Modal.js"));

var _hallazgo_modal = __webpack_require__(/*! ./hallazgo_modal */ "./src/proyecto__hoja_trabajo/sidebar/hallazgo_modal.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HallazgoModalEdit =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(HallazgoModalEdit, _PureComponent);

  function HallazgoModalEdit() {
    var _this;

    _classCallCheck(this, HallazgoModalEdit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HallazgoModalEdit).apply(this, arguments));

    _this.onSave = function (data) {
      _this.props.onSave(_this.props.item, data);
    };

    return _this;
  }

  _createClass(HallazgoModalEdit, [{
    key: "render",
    value: function render() {
      return React.createElement(_Modal["default"], {
        open: true,
        dimmer: "inverted",
        className: "modal-ab modal-sidebarmenuitem",
        size: "large",
        closeIcon: true,
        onClose: this.props.onClose
      }, React.createElement(_Modal["default"].Header, null, "Editar Hallazgo"), React.createElement(_hallazgo_modal.HallazgoModal, {
        moduleParams: this.props.moduleParams,
        item: this.props.item,
        isEditable: user_has_role_permission('hallazgo_edit'),
        onSave: this.onSave,
        onClickDelete: this.props.onClickDelete
      }));
    }
  }]);

  return HallazgoModalEdit;
}(_react.PureComponent);

exports.HallazgoModalEdit = HallazgoModalEdit;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/hallazgo_list.tsx":
/*!**************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/hallazgo_list.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HallazgoListItem = exports.HallazgoList = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _utils_hallazgo = __webpack_require__(/*! ../utils_hallazgo */ "./src/proyecto__hoja_trabajo/utils_hallazgo.ts");

var _AuthorIconLog = __webpack_require__(/*! ../../global/AuthorIconLog */ "./src/global/AuthorIconLog.tsx");

var _hallazgo_edit = __webpack_require__(/*! ./hallazgo_edit */ "./src/proyecto__hoja_trabajo/sidebar/hallazgo_edit.tsx");

var _menuitem = __webpack_require__(/*! ./menuitem */ "./src/proyecto__hoja_trabajo/sidebar/menuitem.tsx");

var _StatusButtonAction = __webpack_require__(/*! ../../global/StatusButtonAction */ "./src/global/StatusButtonAction.tsx");

var _utils_truncate = __webpack_require__(/*! ../utils_truncate */ "./src/proyecto__hoja_trabajo/utils_truncate.ts");

var _Popup = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Popup/Popup */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Popup/Popup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HallazgoList =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(HallazgoList, _PureComponent);

  function HallazgoList() {
    _classCallCheck(this, HallazgoList);

    return _possibleConstructorReturn(this, _getPrototypeOf(HallazgoList).apply(this, arguments));
  }

  _createClass(HallazgoList, [{
    key: "render",
    value: function render() {
      var _this = this;

      if (this.props.items === null) {
        return React.createElement("div", {
          style: {
            height: 300,
            position: 'relative'
          }
        }, React.createElement("div", {
          className: "ui active inverted text loader elastic olive"
        }, "Cargando Listado de Hallazgos"));
      } else if (_.size(this.props.items) == 0) {
        return React.createElement("div", {
          className: "empty nocontent"
        }, "0 Hallazgos");
      } else {
        var items = this.props.items;
        return React.createElement(_menuitem.MenuElementListPanel, null, _.map(items, function (item) {
          return React.createElement("div", {
            key: item.id,
            className: "listitem hallazgo-listitem"
          }, React.createElement(HallazgoListItem, {
            item: item,
            moduleParams: _this.props.moduleParams,
            onSave: _this.props.onSaveItem,
            onClickDelete: _this.props.onClickDeleteItem
          }));
        }));
      }
    }
  }]);

  return HallazgoList;
}(_react.PureComponent);

exports.HallazgoList = HallazgoList;

var HallazgoListItem =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(HallazgoListItem, _PureComponent2);

  function HallazgoListItem() {
    var _this2;

    _classCallCheck(this, HallazgoListItem);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(HallazgoListItem).apply(this, arguments));
    _this2.state = {
      isModalEdit: false
    };

    _this2.onClickEdit = function (ev) {
      ev.preventDefault();

      _this2.setState({
        isModalEdit: true
      });
    };

    _this2.onCloseEdit = function () {
      _this2.setState({
        isModalEdit: false
      });
    };

    _this2.onClickDelete = function (ev) {
      ev.preventDefault();

      _this2.props.onClickDelete(_this2.props.item);
    };

    _this2.onSave = function (item, changes) {
      var blockingText = null;

      if (_.isEqual(changes, {
        status: 'COMPLETADO'
      })) {
        blockingText = 'Marcando como COMPLETADO';
      } else if (_.isEqual(changes, {
        status: 'REVISADO'
      })) {
        blockingText = 'Marcando como REVISADO';
      }

      _this2.props.onSave(item, changes, blockingText);
    };

    return _this2;
  }

  _createClass(HallazgoListItem, [{
    key: "renderDescripcion",
    value: function renderDescripcion() {
      var item = this.props.item;
      var html = (0, _utils_truncate.truncateText)(item.hallazgo);
      return React.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: html
        }
      });
    }
  }, {
    key: "renderEstadoImplementacion",
    value: function renderEstadoImplementacion() {
      var item = this.props.item;

      if (item.implementado == null || '' + item.implementado == '') {
        return 'Pendiente';
      } else if (item.implementado == '0') {
        return 'En Proceso';
      } else {
        return 'Hecho';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var item = this.props.item;
      return React.createElement("div", null, React.createElement(_menuitem.MenuElementListActions, {
        actions: {
          edit: {
            label: 'Editar',
            callback: this.onClickEdit,
            permission: 'hallazgo_edit'
          },
          "delete": {
            label: 'Eliminar',
            callback: this.onClickDelete,
            permission: 'hallazgo_delete'
          }
        }
      }), React.createElement("div", {
        onClick: function onClick() {
          return _this3.setState({
            isModalEdit: true
          });
        }
      }, React.createElement("div", {
        className: "row r1"
      }, React.createElement("div", {
        className: "pull-left r1_1"
      }, React.createElement("span", {
        className: "title-h1"
      }, _utils_hallazgo.HallazgoUtils.formatName(item.name)), React.createElement(_AuthorIconLog.AuthorIconLogDefaultWrapper, {
        model: item,
        size: "small"
      }), React.createElement("div", {
        className: "r1_2"
      }, React.createElement("strong", null, "Implementaci\xF3n: "), " ", this.renderEstadoImplementacion())), React.createElement(_StatusButtonAction.StatusDivBlock, {
        wrapperClassName: "pull-right text-mini",
        status: item.status,
        className: "mini",
        hideLabel: true
      })), React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "editor-preview"
      }, this.renderDescripcion())), React.createElement("div", {
        className: "row"
      })), React.createElement("div", {
        className: "actions-wrapper"
      }, React.createElement("div", {
        className: "actions"
      }, React.createElement("div", {
        className: "group-actions right-actions"
      }, user_has_role_permission('hallazgo_completado') && React.createElement("button", {
        className: "ui button icon primary mini compact",
        onClick: function onClick() {
          return _this3.onSave(item, {
            status: 'COMPLETADO'
          });
        }
      }, React.createElement("i", {
        className: "icon check"
      }), " Completar"), user_has_role_permission('hallazgo_revisado') && React.createElement(_Popup["default"], {
        disabled: item.fecha_completado != null,
        className: "disable-text",
        on: "hover",
        basic: true,
        content: "Debe estar primero en estado COMPLETADO, para poder marcarlo como REVISADO.",
        trigger: React.createElement("div", {
          className: "button-wrapper"
        }, React.createElement("button", {
          className: "ui button mini compact olive",
          disabled: item.fecha_completado == null,
          onClick: function onClick() {
            return item.fecha_completado == null ? void 0 : _this3.onSave(item, {
              status: 'REVISADO'
            });
          }
        }, React.createElement("i", {
          className: "icon check fitted"
        }), React.createElement("i", {
          className: "icon check"
        }), " Revisado"))
      })))), this.state.isModalEdit && React.createElement(_hallazgo_edit.HallazgoModalEdit, {
        item: item,
        moduleParams: this.props.moduleParams,
        onSave: this.onSave,
        onClickDelete: this.onClickDelete,
        onClose: this.onCloseEdit
      }));
    }
  }]);

  return HallazgoListItem;
}(_react.PureComponent);

exports.HallazgoListItem = HallazgoListItem;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/hallazgo_modal.tsx":
/*!***************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/hallazgo_modal.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HallazgoModal = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _EditorPreview = _interopRequireDefault(__webpack_require__(/*! ../../global/EditorPreview */ "./src/global/EditorPreview.tsx"));

var _StatusButtonAction = __webpack_require__(/*! ../../global/StatusButtonAction */ "./src/global/StatusButtonAction.tsx");

var _reactDatepicker = _interopRequireWildcard(__webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js"));

var _es = _interopRequireDefault(__webpack_require__(/*! date-fns/locale/es */ "./node_modules/date-fns/esm/locale/es/index.js"));

var _dateFns = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");

var _reactMentions = __webpack_require__(/*! react-mentions */ "./node_modules/react-mentions/dist/react-mentions.esm.js");

var _utils_hallazgo = __webpack_require__(/*! ../utils_hallazgo */ "./src/proyecto__hoja_trabajo/utils_hallazgo.ts");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _menuitem__new = __webpack_require__(/*! ./menuitem__new */ "./src/proyecto__hoja_trabajo/sidebar/menuitem__new.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(0, _reactDatepicker.registerLocale)('es', _es["default"]);

var HallazgoModal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(HallazgoModal, _PureComponent);

  function HallazgoModal(props) {
    var _this;

    _classCallCheck(this, HallazgoModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HallazgoModal).call(this, props));
    _this.handlers = {};

    _this.onCreate = function () {
      _this._onCreate({
        status: 'EN PROCESO'
      });
    };

    _this.onCreateAndCompletado = function () {
      _this._onCreate({
        status: 'COMPLETADO'
      });
    };

    _this.onCompletado = function () {
      _this.props.onSave({
        status: 'COMPLETADO'
      });
    };

    _this.onRevisado = function () {
      _this.props.onSave({
        status: 'REVISADO'
      });
    };

    _this.onEditorChange = function (field) {
      var handler = function handler(editor, closeModal, autosave, cb) {
        var value = editor.getData();

        if (field == 'hallazgo' && !_this.isNewItem() && _.size(_.str.trim(value)) == 0) {
          bootbox.alert('La descripción del hallazgo NO puede ser un campo vacío.');
          return;
        }

        _this.updateModel(_defineProperty({}, field, value));

        if ($.isFunction(cb)) {
          cb();
        }
      };

      return _this.attachHandler(field, handler);
    };

    _this.onInputChange = function (field) {
      return _this.attachHandler(field, function (ev) {
        _this.updateModel(_defineProperty({}, field, ev.target.value));
      });
    };

    _this.onDateChange = function (field) {
      return _this.attachHandler(field, function (value) {
        _this.updateModel(_defineProperty({}, field, (0, _dateFns.format)(value, 'yyyy-MM-dd')));
      });
    };

    _this.onValueChange = function (field) {
      return _this.attachHandler(field, function (value) {
        _this.updateModel(_defineProperty({}, field, value));
      });
    };

    _this.onClickDelete = function (ev) {
      if ($.isFunction(_this.props.onClickDelete)) {
        _this.props.onClickDelete(ev);
      }
    };

    _this.state = {
      value: props.item
    };
    return _this;
  }

  _createClass(HallazgoModal, [{
    key: "attachHandler",
    value: function attachHandler(field, handler) {
      if (!this.handlers[field]) {
        this.handlers[field] = handler;
      }

      return this.handlers[field];
    }
  }, {
    key: "isNewItem",
    value: function isNewItem() {
      return this.props.item.id == null;
    }
  }, {
    key: "updateModel",
    value: function updateModel(changes) {
      this.setState(function (prevState) {
        return {
          value: Object.assign({}, prevState.value, changes)
        };
      });

      if (!this.isNewItem()) {
        this.props.onSave(changes);
      }
    }
  }, {
    key: "getDate",
    value: function getDate(date) {
      if (!date) {
        return null;
      }

      var d = (0, _dateFns.parseISO)(date);
      return (0, _dateFns.isValid)(d) ? d : null;
    }
  }, {
    key: "formatImplementadoChoice",
    value: function formatImplementadoChoice(implementado) {
      if (implementado === null || implementado === '') {
        return '';
      }

      return implementado === true || implementado === '1' ? '1' : '0';
    }
  }, {
    key: "_onCreate",
    value: function _onCreate(changes) {
      if (_.isEmpty(this.state.value.hallazgo)) {
        bootbox.alert('La descripción del hallazgo NO puede ser un campo vacío.');
        return;
      }

      this.props.onSave(Object.assign({}, this.state.value, changes));
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var item = this.props.item;

      var rightActions = item.id !== null && _react["default"].createElement("button", {
        className: "ui button compact negative left floated",
        onClick: this.onClickDelete
      }, _react["default"].createElement("i", {
        className: "icon trash"
      }), " Eliminar");

      return item.id === null ? _react["default"].createElement("div", {
        className: "actions ab-status-actions"
      }, _react["default"].createElement("button", {
        className: "ui button compact green",
        onClick: this.onCreate
      }, "Crear"), _react["default"].createElement("button", {
        className: "ui button compact green",
        onClick: this.onCreateAndCompletado
      }, "Crear y Completar")) : _react["default"].createElement(_react.Fragment, null, rightActions, _react["default"].createElement(_StatusButtonAction.StatusButtonGroupActions, {
        completado: {
          permission: 'hallazgo_completado',
          onClick: this.onCompletado
        },
        revisado: {
          permission: 'hallazgo_revisado',
          onClick: this.onRevisado,
          record: item
        }
      }));
    }
  }, {
    key: "renderItemHeader",
    value: function renderItemHeader() {
      var item = Object.assign({
        label: this.props.item.id ? _utils_hallazgo.HallazgoUtils.formatName(this.props.item.name) : 'Hallazgo Nuevo'
      }, this.props.item);
      return _react["default"].createElement(_menuitem__new.MenuItemNewHeader, {
        item: item
      });
    }
  }, {
    key: "render",
    value: function render() {
      var item = this.props.item;
      var value = this.state.value;
      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("div", {
        className: "content"
      }, this.renderItemHeader(), item.id && _react["default"].createElement("div", {
        className: "description-text"
      }, _react["default"].createElement("strong", null, "NOTA:"), " El hallazgo debe describir la situaci\xF3n actual, causa, impacto y recomendaci\xF3n."), _react["default"].createElement(_EditorPreview["default"], {
        className: 'editor-preview-hallazgo',
        wrapperClassName: (0, _classnames["default"])(!item.id || 'ui segment'),
        data: value.hallazgo,
        inline: item.id == null,
        ckeditorOptions: {
          attach_disableText: 'Esta opción (adjuntar archivos) sólo estará disponible una vez haya guardado este hallazgo.',
          height: item.id ? 300 : 150
        },
        ckeditorUploadOptions: {
          model: "".concat(this.props.moduleParams.model, "__hallazgo"),
          modelId: item.id
        },
        footer: "AttachmentList",
        onSave: this.onEditorChange('hallazgo'),
        previewStyle: {
          overflowY: 'auto',
          maxHeight: 200,
          width: '100%'
        },
        label: "<div class=\"description-text\"><strong>NOTA:</strong> El hallazgo debe describir la situaci\xF3n actual, causa, impacto y recomendaci\xF3n</div>"
      }), _react["default"].createElement("hr", null), _react["default"].createElement("div", {
        className: "ui segment"
      }, _react["default"].createElement(_EditorPreview["default"], {
        data: value.plan_accion,
        prefixPreview: "Descripci\xF3n Plan de Acci\xF3n: ",
        labelTitle: "Descripci\xF3n Plan de Acci\xF3n:",
        ckeditorOptions: {
          attach_disableText: 'Esta opción (adjuntar archivos) sólo estará disponible una vez haya guardado este hallazgo.'
        },
        ckeditorUploadOptions: {
          model: "".concat(this.props.moduleParams.model, "__plan_accion"),
          modelId: item.id
        },
        footer: "AttachmentList",
        onSave: this.onEditorChange('plan_accion')
      })), _react["default"].createElement("div", {
        className: "ui three column grid"
      }, _react["default"].createElement("div", {
        className: "column"
      }, _react["default"].createElement("label", {
        htmlFor: "hallazgo_modal__responsable"
      }, "Responsable del Plan Acci\xF3n: "), _react["default"].createElement(HallazgoResponsableInput, {
        value: value.responsable,
        onChange: this.onValueChange('responsable'),
        attrs: {
          placeholder: 'Escriba el Nombre',
          style: {
            display: 'inline-block'
          }
        }
      })), _react["default"].createElement("div", {
        className: "column"
      }, _react["default"].createElement("label", {
        htmlFor: "hallazgo_modal__fecha_implementado"
      }, "Fecha Implementaci\xF3n: "), _react["default"].createElement(_reactDatepicker["default"], {
        id: "hallazgo_modal__fecha_implementado",
        dateFormat: "yyyy-MM-dd",
        locale: "es",
        fixedHeight: true,
        placeholderText: "AAAA-mm-dd",
        className: "react-datepicker--input",
        selected: this.getDate(value.fecha_implementado),
        onChange: this.onDateChange('fecha_implementado')
      })), _react["default"].createElement("div", {
        className: "column right aligned"
      }, _react["default"].createElement("label", {
        htmlFor: "hallazgo_modal__implementado"
      }, "Estado Implementaci\xF3n: "), _react["default"].createElement("select", {
        id: "hallazgo_modal__implementado",
        value: this.formatImplementadoChoice(value.implementado),
        onChange: this.onInputChange('implementado')
      }, _react["default"].createElement("option", {
        value: ""
      }, "Pendiente"), _react["default"].createElement("option", {
        value: "0"
      }, "En Proceso"), _react["default"].createElement("option", {
        value: "1"
      }, "Hecho"))))), _react["default"].createElement("div", {
        className: "actions"
      }, this.renderActions(), _react["default"].createElement("div", {
        className: "clearfix"
      })));
    }
  }]);

  return HallazgoModal;
}(_react.PureComponent);

exports.HallazgoModal = HallazgoModal;

var HallazgoResponsableInput =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(HallazgoResponsableInput, _PureComponent2);

  function HallazgoResponsableInput(props) {
    var _this2;

    _classCallCheck(this, HallazgoResponsableInput);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(HallazgoResponsableInput).call(this, props));
    _this2.mentionStyle = {
      display: 'inline-block',
      minWidth: '200px',
      suggestions: {
        list: {
          backgroundColor: 'white',
          border: '1px solid rgba(0,0,0,0.15)',
          fontSize: 14
        },
        item: {
          padding: '5px 15px',
          borderBottom: '1px solid rgba(0,0,0,0.15)',
          '&focused': {
            backgroundColor: '#cee4e5'
          }
        }
      }
    };

    _this2.onChange = function (event, newValue, newPlainTextValue, mentions) {
      _this2.setState({
        value: newValue
      });

      _this2.props.onChange(newValue);
    };

    _this2.state = {
      value: props.value
    };
    _this2.users = _.map(app.vars.proyecto_equipo, function (user) {
      return {
        id: user.user_id,
        display: user.name
      };
    });
    return _this2;
  }

  _createClass(HallazgoResponsableInput, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_reactMentions.MentionsInput, _extends({
        singleLine: true,
        type: "text",
        value: this.state.value == null ? '' : this.state.value,
        onChange: this.onChange,
        allowSpaceInQuery: true
      }, this.props.attrs, {
        className: "mentions-input",
        style: this.mentionStyle
      }), _react["default"].createElement(_reactMentions.Mention, {
        trigger: "@",
        data: this.users,
        appendSpaceOnAdd: true
      }));
    }
  }]);

  return HallazgoResponsableInput;
}(_react.PureComponent);

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/menuitem.tsx":
/*!*********************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/menuitem.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuElementListActions = exports.MenuElementListPanel = exports.BaseMenuElement = exports.BaseMenuItem = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _Transition = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Transition/Transition */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Transition/Transition.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _panel_header = __webpack_require__(/*! ./panel_header */ "./src/proyecto__hoja_trabajo/sidebar/panel_header.tsx");

var _ErrorHandler = __webpack_require__(/*! ../../global/ErrorHandler */ "./src/global/ErrorHandler.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaseMenuItem =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(BaseMenuItem, _PureComponent);

  function BaseMenuItem() {
    _classCallCheck(this, BaseMenuItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(BaseMenuItem).apply(this, arguments));
  }

  _createClass(BaseMenuItem, [{
    key: "render",
    value: function render() {
      var image_path = public_path('images/sidebar_right/');
      return React.createElement("a", {
        className: (0, _classnames["default"])('item badged', !this.props.open || 'active'),
        title: this.props.title,
        onClick: this.props.onClick
      }, 
	  //change icon to tag img
	  //React.createElement("img", {
      React.createElement("i", {
		 //chnage icons 
        //src: "".concat(image_path).concat(this.props.image, ".svg"),
        //className: "ui large image"
		className: "icon-svg "+this.props.image+""
      }), " ", ' ', React.createElement("div", {
        className: (0, _classnames["default"])('ui mini circular floating label right', this.props.counter == 0 ? 'green' : 'red')
      }, this.props.counter));
    }
  }]);

  return BaseMenuItem;
}(_react.PureComponent);

exports.BaseMenuItem = BaseMenuItem;

var BaseMenuElement =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(BaseMenuElement, _PureComponent2);

  function BaseMenuElement() {
    var _this;

    _classCallCheck(this, BaseMenuElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseMenuElement).apply(this, arguments));

    _this.onToggle = function () {
      _this.props.onToggle(_this.props.open ? null : _this.props.name);
    };

    _this.onClose = function (ev) {
      ev.preventDefault();

      _this.props.onToggle(null);
    };

    return _this;
  }

  _createClass(BaseMenuElement, [{
    key: "render",
    value: function render() {
      return React.createElement(_react.Fragment, null, React.createElement(_ErrorHandler.DefaultErrorHandler, null, React.createElement(BaseMenuItem, {
        counter: this.props.counter,
        open: this.props.open,
        title: this.props.title,
        image: this.props.icon,
        onClick: this.onToggle
      }), this.props.open && React.createElement(_Transition["default"].Group, {
        animation: "slide right",
        duration: 1500
      }, React.createElement("div", {
        className: "sidebar-fixed-content ui vertical right fixed menu menu-".concat(this.props.name),
        style: {
          right: 45
        }
      }, React.createElement(_panel_header.SidebarPanelHeader, {
        title: this.props.title,
        onClose: this.onClose,
        onMount: this.props.onMountPanel
      }), this.props.children))));
    }
  }]);

  return BaseMenuElement;
}(_react.PureComponent);

exports.BaseMenuElement = BaseMenuElement;

var MenuElementListPanel =
/*#__PURE__*/
function (_PureComponent3) {
  _inherits(MenuElementListPanel, _PureComponent3);

  function MenuElementListPanel() {
    var _this2;

    _classCallCheck(this, MenuElementListPanel);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MenuElementListPanel).apply(this, arguments));
    _this2.listRef = (0, _react.createRef)();
    _this2.listHeight = null;
    return _this2;
  }

  _createClass(MenuElementListPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.listRef.current) {
        this.calculateHeight();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.listRef.current && !this.listHeight) {
        this.calculateHeight();
      }
    }
  }, {
    key: "calculateHeight",
    value: function calculateHeight() {
      var $list = $(this.listRef.current);
      this.listHeight = window.innerHeight - $list.position().top - 30;
      $list.height(this.listHeight);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "main-list ".concat(this.props.className),
        ref: this.listRef
      }, this.props.children);
    }
  }]);

  return MenuElementListPanel;
}(_react.PureComponent);

exports.MenuElementListPanel = MenuElementListPanel;

var MenuElementListActions = function MenuElementListActions(props) {
  return React.createElement("div", {
    className: "pull-right sf_admin_td_actions"
  }, React.createElement("div", {
    className: "btn-group dropdown-modern"
  }, React.createElement("a", {
    className: "btn btn-mini dropdown-toggle",
    "data-toggle": "dropdown",
    href: "#"
  }, React.createElement("span", {
    className: "icon-tc-ellipsis-v"
  })), React.createElement("ul", {
    className: "dropdown-menu pull-right"
  }, _.map(props.actions, function (action, key) {
    return user_has_role_permission(action.permission) && React.createElement("li", {
      key: key
    }, typeof action.url !== 'undefined' ? React.createElement("a", {
      href: url_for2(action.url),
      target: "_blank"
    }, action.label) : React.createElement("a", {
      href: "#",
      onClick: action.callback
    }, action.label));
  }))));
};

exports.MenuElementListActions = MenuElementListActions;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/menuitem__model_manager.ts":
/*!***********************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/menuitem__model_manager.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RevisionHojaTrabajoModelManager = exports.HallazgoHojaTrabajoModelManager = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HallazgoHojaTrabajoModelManager =
/*#__PURE__*/
function () {
  function HallazgoHojaTrabajoModelManager() {
    _classCallCheck(this, HallazgoHojaTrabajoModelManager);
  }

  _createClass(HallazgoHojaTrabajoModelManager, [{
    key: "getJson",
    value: function getJson(props) {
      var _props$moduleParams = props.moduleParams,
          id_paso = _props$moduleParams.id_paso,
          id_visita = _props$moduleParams.id_visita;
      return new Promise(function (resolve) {
        $.getJSON(url_for2("proyecto/:id_proyecto/paso/".concat(id_paso, "/visita/").concat(id_visita, "/hallazgo/json"))).done(function (res) {
          resolve(_.isEmpty(res.response) ? [] : res.response);
        });
      });
    }
  }, {
    key: "createItem",
    value: function createItem(props, data) {
      var _props$moduleParams2 = props.moduleParams,
          id_paso = _props$moduleParams2.id_paso,
          id_visita = _props$moduleParams2.id_visita;
      var url = url_for2("proyecto/:id_proyecto/paso/".concat(id_paso, "/visita/").concat(id_visita, "/hallazgo"));
      return new Promise(function (resolve) {
        $.post(url, {
          data: data
        }).done(function (res) {
          resolve(res.response.record);
        });
      });
    }
  }, {
    key: "saveItem",
    value: function saveItem(props, item, data) {
      var url;

      if (_.isEqual(data, {
        status: 'COMPLETADO'
      })) {
        url = "proyecto/:id_proyecto/paso/:id_paso/visita/:id_visita/hallazgo/:id/c";
      } else if (_.isEqual(data, {
        status: 'REVISADO'
      })) {
        url = "proyecto/:id_proyecto/paso/:id_paso/visita/:id_visita/hallazgo/:id/r";
      } else {
        url = "proyecto/:id_proyecto/paso/:id_paso/visita/:id_visita/hallazgo/:id";
      }

      var _props$moduleParams3 = props.moduleParams,
          id_paso = _props$moduleParams3.id_paso,
          id_visita = _props$moduleParams3.id_visita;
      return new Promise(function (resolve) {
        $.post(url_for2(url, {
          id_paso: id_paso,
          id_visita: id_visita,
          id: item.id
        }), {
          data: data
        }).done(function (res) {
          resolve(res.response.record);
        });
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(props, item) {
      var _props$moduleParams4 = props.moduleParams,
          id_paso = _props$moduleParams4.id_paso,
          id_visita = _props$moduleParams4.id_visita;
      var url = "proyecto/:id_proyecto/paso/:id_paso/visita/:id_visita/hallazgo/:id";
      return new Promise(function (resolve) {
        $.ajax({
          url: url_for2(url, {
            id_paso: id_paso,
            id_visita: id_visita,
            id: item.id
          }),
          type: 'DELETE'
        }).done(function (res) {
          if (res.status == 1) {
            resolve();
          }
        });
      });
    }
  }, {
    key: "parseItems",
    value: function parseItems(items) {
      return items;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!HallazgoHojaTrabajoModelManager.instance) {
        HallazgoHojaTrabajoModelManager.instance = new this();
      }

      return HallazgoHojaTrabajoModelManager.instance;
    }
  }]);

  return HallazgoHojaTrabajoModelManager;
}();

exports.HallazgoHojaTrabajoModelManager = HallazgoHojaTrabajoModelManager;

var RevisionHojaTrabajoModelManager =
/*#__PURE__*/
function () {
  function RevisionHojaTrabajoModelManager() {
    _classCallCheck(this, RevisionHojaTrabajoModelManager);
  }

  _createClass(RevisionHojaTrabajoModelManager, [{
    key: "getJson",
    value: function getJson(props) {
      var _this = this;

      var _props$moduleParams5 = props.moduleParams,
          id_paso = _props$moduleParams5.id_paso,
          id_visita = _props$moduleParams5.id_visita;
      return new Promise(function (resolve) {
        $.getJSON(url_for2("proyecto/:id_proyecto/paso/".concat(id_paso, "/visita/").concat(id_visita, "/revision"))).done(function (res) {
          resolve(_.isEmpty(res.response.revisiones) ? [] : _this.parseItems(res.response.revisiones));
        });
      });
    }
  }, {
    key: "createItem",
    value: function createItem(props, data) {
      var _this2 = this;

      var _props$moduleParams6 = props.moduleParams,
          id_paso = _props$moduleParams6.id_paso,
          id_visita = _props$moduleParams6.id_visita;
      var url = url_for2("proyecto/:id_proyecto/paso/".concat(id_paso, "/visita/").concat(id_visita, "/revision"));
      return new Promise(function (resolve) {
        $.post(url, data).done(function (res) {
          resolve(res.response.revision);

          _this2.updateVisita(id_visita, res.response.paso_visita);
        });
      });
    }
  }, {
    key: "saveItem",
    value: function saveItem(props, item, data) {
      var _this3 = this;

      var _props$moduleParams7 = props.moduleParams,
          id_visita = _props$moduleParams7.id_visita,
          id_paso = _props$moduleParams7.id_paso;
      var url = url_for2("proyecto/:id_proyecto/paso/".concat(id_paso, "/visita/").concat(id_visita, "/revision/").concat(item.id));
      return new Promise(function (resolve) {
        $.post(url, data).done(function (res) {
          resolve(res.response.revision);

          _this3.updateVisita(id_visita, res.response.paso_visita);
        });
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(props, item) {
      var _this4 = this;

      var _props$moduleParams8 = props.moduleParams,
          id_paso = _props$moduleParams8.id_paso,
          id_visita = _props$moduleParams8.id_visita;
      var url = "proyecto/:id_proyecto/paso/:id_paso/visita/:id_visita/revision/:item_id";
      return new Promise(function (resolve) {
        $.ajax({
          url: url_for2(url, {
            id_paso: id_paso,
            id_visita: id_visita,
            item_id: item.id
          }),
          type: 'DELETE'
        }).done(function (res) {
          resolve();

          _this4.updateVisita(id_visita, res.response.paso_visita);
        });
      });
    }
  }, {
    key: "parseItems",
    value: function parseItems(items) {
      return items;
    }
  }, {
    key: "updateVisita",
    value: function updateVisita(id_visita, changes) {
      var _this$hojaTrabajoCont = this.hojaTrabajoContext,
          hoja_trabajo = _this$hojaTrabajoCont.hoja_trabajo,
          update = _this$hojaTrabajoCont.update;
      var hoja_trabajo_copy = Object.assign({}, hoja_trabajo);
      hoja_trabajo_copy.visitas = _.mapValues(hoja_trabajo_copy.visitas, function (item) {
        if (item.id_visita == id_visita) {
          item = Object.assign({}, item, changes);
        }

        return item;
      });
      update(hoja_trabajo_copy);
    }
  }], [{
    key: "getInstance",
    value: function getInstance(hojaTrabajoContext) {
      if (!RevisionHojaTrabajoModelManager.instance) {
        RevisionHojaTrabajoModelManager.instance = new this();
        RevisionHojaTrabajoModelManager.instance.hojaTrabajoContext = hojaTrabajoContext;
      }

      return RevisionHojaTrabajoModelManager.instance;
    }
  }]);

  return RevisionHojaTrabajoModelManager;
}();

exports.RevisionHojaTrabajoModelManager = RevisionHojaTrabajoModelManager;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/menuitem__new.tsx":
/*!**************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/menuitem__new.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItemNewHeader = exports.MenuItemNew = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _Modal = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Modal/Modal */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Modal/Modal.js"));

var _AuthorIconLog = __webpack_require__(/*! ../../global/AuthorIconLog */ "./src/global/AuthorIconLog.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuItemNew =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MenuItemNew, _PureComponent);

  function MenuItemNew() {
    var _this;

    _classCallCheck(this, MenuItemNew);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuItemNew).apply(this, arguments));
    _this.state = {
      modalOpen: false
    };

    _this.onClick = function () {
      _this.setState({
        modalOpen: true
      });
    };

    _this.onCloseModal = function () {
      _this.setState({
        modalOpen: false
      });
    };

    _this.onSave = function (data) {
      _this.props.onSave(data).then(function () {
        _this.onCloseModal();
      });
    };

    return _this;
  }

  _createClass(MenuItemNew, [{
    key: "render",
    value: function render() {
      if (!this.props.isEditable) {
        return null;
      }

      var MenuItemModal = this.props.contentAs;
      return React.createElement("div", {
        className: "_a-center"
      }, React.createElement("button", {
        className: "button ui right tiny compact plain green rounded",
        onClick: this.onClick
      }, this.props.buttonText, " ", React.createElement("i", {
        className: "icon plus"
      })), this.state.modalOpen && React.createElement(_Modal["default"], {
        open: true,
        dimmer: "inverted",
        className: "modal-ab modal-sidebarmenuitem",
        size: "large",
        closeIcon: true,
        closeOnDimmerClick: false,
        closeOnEscape: false,
        onClose: this.onCloseModal
      }, React.createElement(_Modal["default"].Header, null, this.props.headerText), React.createElement(MenuItemModal, {
        onSave: this.onSave,
        moduleParams: this.props.moduleParams,
        isEditable: this.props.isEditable,
        item: this.props.item
      })));
    }
  }]);

  return MenuItemNew;
}(_react.PureComponent);

exports.MenuItemNew = MenuItemNew;

var MenuItemNewHeader = function MenuItemNewHeader(props) {
  var status = props.item.status || 'EN PROCESO';
  return React.createElement("div", {
    className: "ui grid padded",
    style: {
      marginBottom: 0
    }
  }, React.createElement("div", {
    className: "row",
    style: {
      paddingTop: 0
    }
  }, React.createElement("div", {
    className: "column four wide"
  }, React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, props.item.label)), React.createElement("div", {
    className: "column four wide"
  }, React.createElement("span", null, "Estado: "), React.createElement("div", {
    className: "lb-status-wrapper"
  }, React.createElement("div", {
    className: "lb-status lb-status-".concat(_.str.dasherize(status.toLowerCase()))
  }, status))), React.createElement("div", {
    className: "column four wide"
  }, React.createElement(_AuthorIconLog.AuthorIconLogDefaultWrapper, {
    model: props.item
  }))));
};

exports.MenuItemNewHeader = MenuItemNewHeader;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/menuitem_ajuste.tsx":
/*!****************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/menuitem_ajuste.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItemAjuste = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _menuitem = __webpack_require__(/*! ./menuitem */ "./src/proyecto__hoja_trabajo/sidebar/menuitem.tsx");

var _menuitem__new = __webpack_require__(/*! ./menuitem__new */ "./src/proyecto__hoja_trabajo/sidebar/menuitem__new.tsx");

var _ajuste_modal = __webpack_require__(/*! ./ajuste_modal */ "./src/proyecto__hoja_trabajo/sidebar/ajuste_modal.tsx");

var _ajuste_list = __webpack_require__(/*! ./ajuste_list */ "./src/proyecto__hoja_trabajo/sidebar/ajuste_list.tsx");

var _menuitem_ajuste_context = _interopRequireDefault(__webpack_require__(/*! ./menuitem_ajuste_context */ "./src/proyecto__hoja_trabajo/sidebar/menuitem_ajuste_context.ts"));

var _utils_ajuste = __webpack_require__(/*! ../utils_ajuste */ "./src/proyecto__hoja_trabajo/utils_ajuste.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuItemAjuste =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MenuItemAjuste, _PureComponent);

  function MenuItemAjuste() {
    var _this;

    _classCallCheck(this, MenuItemAjuste);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuItemAjuste).apply(this, arguments));
    _this.cuentas = null;
    _this.state = {
      items: null
    };

    _this.parseAjustes = function (input) {
      var self = _assertThisInitialized(_this);

      var ajustes = _.groupBy(input, 'idx');

      return _.map(ajustes, function (_row, idx) {
        var row = _.map(_row, function (item) {
          return {
            id: item.id,
            cuenta: item.cuenta,
            debe: item.col == 'DEBE' ? item.valor : '',
            haber: item.col == 'HABER' ? item.valor : '',
            nombre_cuenta: self.getNombreCuenta(item.cuenta)
          };
        });

        return Object.assign({}, {
          idx: idx,
          items: row,
          status: _row[0].status,
          descripcion: _row[0].description,
          id_visita: _row[0].id_proyecto_visita
        }, _.pick(_row[0], ['fecha_completado', 'aplicado', 'fecha_revision', 'UpdateLog', 'RevisionLog']));
      });
    };

    _this.onCreateItem = function (data) {
      return new Promise(function (resolve) {
        $.blockUI(create_blockUI_loading_message('Creando ajuste'));
        var _this$props$modulePar = _this.props.moduleParams,
            id_visita = _this$props$modulePar.id_visita,
            id_paso = _this$props$modulePar.id_paso;
        $.post(url_for("proyecto/".concat(app.vars.idproyecto, "/visita/").concat(id_visita, "/cifra-ajuste")), {
          changes: data,
          id_paso: id_paso,
          v: 2
        }).done(function (res) {
          _this.setState(function (prevState) {
            var items = _toConsumableArray(prevState.items);

            items.push(_this.parseAjustes(res.response.ajustes)[0]);
            return {
              items: items
            };
          });

          $.unblockUI();
          resolve();
        });
      });
    };

    _this.onMountPanel = function () {
      if (_this.state.items === null) {
        var id_visita = _this.props.moduleParams.id_visita;
        $.getJSON(url_for("proyecto/".concat(app.vars.idproyecto, "/visita/").concat(id_visita, "/cifra-ajuste"))).done(function (res) {
          _this.cuentas = _.isEmpty(res.response.cuentas) ? [] : res.response.cuentas;
          app.vars.error_tolerable[id_visita] = res.response.error_tolerable;

          _this.setState({
            items: _.isEmpty(res.response.ajustes) ? [] : _this.parseAjustes(res.response.ajustes)
          });
        });
      }
    };

    _this.onSaveItem = function (item, changes, blockingText) {
      return new Promise(function (resolve) {
        var _this$props$modulePar2 = _this.props.moduleParams,
            id_visita = _this$props$modulePar2.id_visita,
            id_paso = _this$props$modulePar2.id_paso;

        if (blockingText) {
          setTimeout(function () {
            return $.blockUI(create_blockUI_loading_message(blockingText));
          }, 1000 * 0.1);
        }

        $.post(url_for("proyecto/".concat(app.vars.idproyecto, "/visita/").concat(id_visita, "/cifra-ajuste")), {
          idx: item.idx,
          changes: changes,
          id_paso: id_paso,
          v: 2
        }).done(function (res) {
          var ajustes = _this.parseAjustes(res.response.ajustes);

          _this.setState(function (prevState) {
            var items = _.map(prevState.items, function (item) {
              if (item.idx == ajustes[0].idx) {
                return ajustes[0];
              } else {
                return item;
              }
            });

            return {
              items: items
            };
          });

          if (blockingText) {
            $.unblockUI();
          }

          resolve(ajustes[0]);
        });
      });
    };

    _this.onClickDeleteItem = function (item) {
      bootbox.warningConfirm("\xBFDesea eliminar el <strong>Ajuste #".concat(item.idx, "</strong>,\n      el cual contiene un total de ").concat(_.size(item.items), " registros contables?"), 'No', 'Sí, Eliminar', function (r) {
        if (!r) {
          return;
        }

        var id_visita = _this.props.moduleParams.id_visita;
        $.blockUI(create_blockUI_loading_message('Eliminando ajustes'));
        $.ajax(url_for("proyecto/".concat(app.vars.idproyecto, "/visita/").concat(id_visita, "/cifra-ajuste/").concat(item.idx)), {
          type: 'delete'
        }).done(function (res) {
          _this.setState(function (prevState) {
            var items = _.reject(prevState.items, {
              idx: item.idx
            });

            return {
              items: items
            };
          });

          $.unblockUI();
        });
      });
    };

    return _this;
  }

  _createClass(MenuItemAjuste, [{
    key: "getNombreCuenta",
    value: function getNombreCuenta(cuenta) {
      return (0, _utils_ajuste.getNombreCuenta)(this.cuentas, cuenta);
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var itemNew = {
        idx: null,
        status: 'NUEVO',
        descripcion: '',
        id_visita: this.props.moduleParams.id_visita,
        items: _.fill(new Array(2), {
          cuenta: '',
          debe: null,
          haber: null,
          nombre_cuenta: ''
        }, 0, 2)
      };
      return React.createElement("div", {
        className: "content"
      }, _.size(this.cuentas) > 0 && React.createElement(_menuitem__new.MenuItemNew, {
        moduleParams: this.props.moduleParams,
        buttonText: "Crear Ajuste",
        headerText: "Nuevo Ajuste",
        isEditable: user_has_role_permission('ajustes_edit'),
        onSave: this.onCreateItem,
        item: itemNew,
        contentAs: _ajuste_modal.AjusteModal
      }), _.isArray(this.cuentas) && _.size(this.cuentas) == 0 ? React.createElement("div", {
        className: "ui message error",
        style: {
          marginTop: 40
        }
      }, React.createElement("i", {
        className: "icon warning sign"
      }), React.createElement("strong", null, "Advertencia: "), " Al parecer a\xFAn no se han cargado sumarias a esta visita.") : React.createElement(_ajuste_list.AjusteList, {
        items: this.state.items,
        moduleParams: this.props.moduleParams,
        isEditable: es_proyecto_editable() && user_has_role_permission('ajustes_edit'),
        onSaveItem: this.onSaveItem,
        onClickDeleteItem: this.onClickDeleteItem
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_menuitem.BaseMenuElement, {
        name: "ajuste",
        counter: this.state.items === null ? this.props.counter : _.size(this.state.items),
        icon: "ajustes",
        title: "Ajustes",
        open: this.props.open,
        onToggle: this.props.onOpen,
        onMountPanel: this.onMountPanel
      }, React.createElement(_menuitem_ajuste_context["default"].Provider, {
        value: this.cuentas
      }, this.renderContent()));
    }
  }]);

  return MenuItemAjuste;
}(_react.PureComponent);

exports.MenuItemAjuste = MenuItemAjuste;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/menuitem_ajuste_context.ts":
/*!***********************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/menuitem_ajuste_context.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _default = (0, _react.createContext)([]);

exports["default"] = _default;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/menuitem_hallazgo.tsx":
/*!******************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/menuitem_hallazgo.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItemHallazgo = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _menuitem = __webpack_require__(/*! ./menuitem */ "./src/proyecto__hoja_trabajo/sidebar/menuitem.tsx");

var _menuitem__new = __webpack_require__(/*! ./menuitem__new */ "./src/proyecto__hoja_trabajo/sidebar/menuitem__new.tsx");

var _hallazgo_list = __webpack_require__(/*! ./hallazgo_list */ "./src/proyecto__hoja_trabajo/sidebar/hallazgo_list.tsx");

var _utils_hallazgo = __webpack_require__(/*! ../utils_hallazgo */ "./src/proyecto__hoja_trabajo/utils_hallazgo.ts");

var _hallazgo_modal = __webpack_require__(/*! ./hallazgo_modal */ "./src/proyecto__hoja_trabajo/sidebar/hallazgo_modal.tsx");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuItemHallazgo =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MenuItemHallazgo, _PureComponent);

  function MenuItemHallazgo() {
    var _this;

    _classCallCheck(this, MenuItemHallazgo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuItemHallazgo).apply(this, arguments));
    _this.state = {
      items: null
    };

    _this.onMountPanel = function () {
      if (_this.state.items === null) {
        _this.props.modelManager.getJson(_this.props).then(function (items) {
          _this.setState({
            items: items
          });
        });
      }
    };

    _this.onCreateItem = function (data) {
      return new Promise(function (resolve) {
        $.blockUI(create_blockUI_loading_message('Creando Hallazgo'));

        _this.props.modelManager.createItem(_this.props, data).then(function (item) {
          _this.addItem(item);

          $.unblockUI();
          resolve();
        });
      });
    };

    _this.onSaveItem = function (item, changes, blockingText) {
      return new Promise(function (resolve) {
        if (blockingText) {
          $.blockUI(create_blockUI_loading_message(blockingText));
        } else {
          _this.updateItem(item, changes);
        }

        _this.props.modelManager.saveItem(_this.props, item, changes).then(function (updatedItem) {
          _this.updateItem(item, updatedItem);

          if (blockingText) {
            $.unblockUI();
          }

          resolve(updatedItem);
        });
      });
    };

    _this.onClickDeleteItem = function (item) {
      bootbox.warningConfirm("\xBFDesea eliminar el hallazgo <strong>".concat(_utils_hallazgo.HallazgoUtils.formatName(item.name), "</strong> ?"), 'No', 'Sí, Eliminar', function (answer) {
        if (!answer) {
          return;
        }

        $.blockUI(create_blockUI_loading_message('Eliminando Hallazgo'));

        _this.props.modelManager.deleteItem(_this.props, item).then(function () {
          _this.deleteItem(item);

          $.unblockUI();
        });
      });
    };

    return _this;
  }

  _createClass(MenuItemHallazgo, [{
    key: "addItem",
    value: function addItem(data) {
      this.setState(function (prevState) {
        var copy = [].concat(_toConsumableArray(prevState.items), [data]);
        return {
          items: copy
        };
      });
    }
  }, {
    key: "updateItem",
    value: function updateItem(item, data) {
      this.setState(function (prevState) {
        var copy = _.map(prevState.items, function (_item) {
          if (_item.id == item.id) {
            return Object.assign({}, _item, data);
          } else {
            return _item;
          }
        });

        return {
          items: copy
        };
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      this.setState(function (prevState) {
        var copy = _.reject(prevState.items, {
          id: item.id
        });

        return {
          items: copy
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_menuitem.BaseMenuElement, {
        name: "hallazgo",
        counter: this.state.items === null ? this.props.counter : _.size(this.state.items),
        icon: "hallazgos",
        title: "Hallazgos",
        open: this.props.open,
        onToggle: this.props.onOpen,
        onMountPanel: this.onMountPanel
      }, _react["default"].createElement("div", {
        className: "content"
      }, _react["default"].createElement(_menuitem__new.MenuItemNew, {
        moduleParams: this.props.moduleParams,
        buttonText: "Crear Hallazgo",
        headerText: "Nuevo Hallazgo",
        isEditable: es_proyecto_editable() && user_has_role_permission('hallazgo_create'),
        item: createNewHallazgo(),
        onSave: this.onCreateItem,
        contentAs: _hallazgo_modal.HallazgoModal
      }), _react["default"].createElement(_hallazgo_list.HallazgoList, {
        isEditable: es_proyecto_editable() && user_has_role_permission('hallazgo_edit'),
        moduleParams: this.props.moduleParams,
        items: this.state.items,
        onSaveItem: this.onSaveItem,
        onClickDeleteItem: this.onClickDeleteItem
      })));
    }
  }]);

  return MenuItemHallazgo;
}(_react.PureComponent);

exports.MenuItemHallazgo = MenuItemHallazgo;

function createNewHallazgo() {
  return {
    id: null,
    status: 'NUEVO',
    implementado: null,
    hallazgo: '',
    RevisionLog: [],
    UpdateLog: []
  };
}

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/menuitem_muestreo.tsx":
/*!******************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/menuitem_muestreo.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItemMuestreo = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _menuitem = __webpack_require__(/*! ./menuitem */ "./src/proyecto__hoja_trabajo/sidebar/menuitem.tsx");

var _AppMuestreoMas = _interopRequireDefault(__webpack_require__(/*! ../../proyecto__muestreo/AppMuestreoMas */ "./src/proyecto__muestreo/AppMuestreoMas.tsx"));

var _AppMuestreoMum = _interopRequireDefault(__webpack_require__(/*! ../../proyecto__muestreo/AppMuestreoMum */ "./src/proyecto__muestreo/AppMuestreoMum.tsx"));

var _Modal = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Modal */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Modal/index.js"));

var _StatusButtonAction = __webpack_require__(/*! ../../global/StatusButtonAction */ "./src/global/StatusButtonAction.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuItemMuestreo =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MenuItemMuestreo, _PureComponent);

  function MenuItemMuestreo() {
    var _this;

    _classCallCheck(this, MenuItemMuestreo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuItemMuestreo).apply(this, arguments));
    _this.state = {
      items: null
    };

    _this.onMountPanel = function () {
      if (_this.state.items === null) {
        var _this$props$modulePar = _this.props.moduleParams,
            id_paso = _this$props$modulePar.id_paso,
            id_visita = _this$props$modulePar.id_visita;
        $.getJSON(url_for2("proyecto/:id_proyecto/paso/".concat(id_paso, "/visita/").concat(id_visita, "/muestreo/getJson"))).done(function (res) {
          _this.setState({
            items: _.isEmpty(res.response.muestreos) ? [] : _this.parseItems(res.response.muestreos)
          });
        });
      }
    };

    _this.onClickDeleteItem = function (item) {
      bootbox.warningConfirm("\xBFDesea eliminar este muestreo <strong>".concat(item.name, "</strong>?"), 'No', 'Sí, Eliminar', function (r) {
        if (!r) {
          return;
        }

        var _this$props$modulePar2 = _this.props.moduleParams,
            id_paso = _this$props$modulePar2.id_paso,
            id_visita = _this$props$modulePar2.id_visita;
        $.blockUI(create_blockUI_loading_message('Eliminando muestreo'));
        $.ajax(url_for2("proyecto/:id_proyecto/paso/".concat(id_paso, "/visita/").concat(id_visita, "/muestreo/").concat(item.id)), {
          data: {
            _csrf_token: _3Creatives.CSRF_TOKEN
          },
          type: 'delete'
        }).done(function (res) {
          _this.setState(function (prevState) {
            var items = _.reject(prevState.items, {
              id: item.id
            });

            return {
              items: items
            };
          });

          $.unblockUI();
        });
      });
    };

    return _this;
  }

  _createClass(MenuItemMuestreo, [{
    key: "parseItems",
    value: function parseItems(items) {
      return _.map(items, function (item) {
        item.configValues = JSON.parse(item.config);
        return item;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$modulePar3 = this.props.moduleParams,
          id_paso = _this$props$modulePar3.id_paso,
          id_visita = _this$props$modulePar3.id_visita;
      return React.createElement(_menuitem.BaseMenuElement, {
        name: "muestreo",
        counter: this.state.items === null ? this.props.counter : _.size(this.state.items),
        icon: "muestreo",
        title: "Muestreo",
        open: this.props.open,
        onToggle: this.props.onOpen,
        onMountPanel: this.onMountPanel
      }, React.createElement("div", {
        className: "content"
      }, es_proyecto_editable() && React.createElement("div", {
        className: "_a-center"
      }, React.createElement("a", {
        className: "button ui right tiny compact plain green rounded",
        href: url_for2("proyecto/:id_proyecto/paso/".concat(id_paso, "/visita/").concat(id_visita, "/muestreo/import")),
        target: "_blank"
      }, "Nuevo Muestreo ", React.createElement("i", {
        className: "icon plus"
      }))), React.createElement(MuestreoList, {
        items: this.state.items,
        moduleParams: this.props.moduleParams,
        isEditable: es_proyecto_editable(),
        onClickDeleteItem: this.onClickDeleteItem
      })));
    }
  }]);

  return MenuItemMuestreo;
}(_react.PureComponent);

exports.MenuItemMuestreo = MenuItemMuestreo;

var MuestreoList =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(MuestreoList, _PureComponent2);

  function MuestreoList() {
    _classCallCheck(this, MuestreoList);

    return _possibleConstructorReturn(this, _getPrototypeOf(MuestreoList).apply(this, arguments));
  }

  _createClass(MuestreoList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.items === null) {
        return React.createElement("div", {
          style: {
            height: 300,
            position: 'relative'
          }
        }, React.createElement("div", {
          className: "ui active inverted text loader elastic olive"
        }, "Cargando Listado de Muestreos"));
      } else if (_.size(this.props.items) == 0) {
        return React.createElement("div", {
          className: "empty nocontent"
        }, "0 Muestreos");
      } else {
        var items = this.props.items;
        return React.createElement(_menuitem.MenuElementListPanel, null, _.map(items, function (item) {
          return React.createElement("div", {
            key: item.id,
            className: "listitem muestreo-listitem"
          }, React.createElement(MuestreoListItem, {
            item: item,
            moduleParams: _this2.props.moduleParams,
            onClickDelete: _this2.props.onClickDeleteItem
          }));
        }));
      }
    }
  }]);

  return MuestreoList;
}(_react.PureComponent);

var MuestreoListItem =
/*#__PURE__*/
function (_PureComponent3) {
  _inherits(MuestreoListItem, _PureComponent3);

  function MuestreoListItem() {
    var _this3;

    _classCallCheck(this, MuestreoListItem);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(MuestreoListItem).apply(this, arguments));
    _this3.state = {
      isModalOpen: false
    };

    _this3.onClickDelete = function (ev) {
      ev.preventDefault();

      _this3.props.onClickDelete(_this3.props.item);
    };

    _this3.onClickItem = function () {
      var item = _this3.props.item;

      if (!!item.configValues.type) {
        _this3.setState({
          isModalOpen: true
        });
      }
    };

    return _this3;
  }

  _createClass(MuestreoListItem, [{
    key: "getItemStatus",
    value: function getItemStatus() {
      var item = this.props.item;

      switch (item.configValues.type) {
        case 'mas':
          return item.configValues.ficha_tecnica_mas_date ? 'COMPLETADO' : 'EN PROCESO';

        case 'mum':
          return item.configValues.ficha_tecnica_mum_date ? 'COMPLETADO' : 'EN PROCESO';

        default:
          return 'NUEVO';
      }
    }
  }, {
    key: "renderModalContent",
    value: function renderModalContent() {
      var item = this.props.item;

      switch (item.configValues.type) {
        case 'mas':
          return React.createElement(_AppMuestreoMas["default"], {
            data: item.configValues,
            id_visita: this.props.moduleParams.id_visita,
            id: this.props.item.id,
            editable: false
          });

        case 'mum':
          return React.createElement(_AppMuestreoMum["default"], {
            data: item.configValues,
            id_visita: this.props.moduleParams.id_visita,
            id: this.props.item.id,
            editable: false
          });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          item = _this$props.item,
          moduleParams = _this$props.moduleParams;
      return React.createElement("div", null, React.createElement(_menuitem.MenuElementListActions, {
        actions: {
          "goto": {
            label: 'Ir al Muestreo',
            url: "proyecto/:id_proyecto/paso/".concat(moduleParams.id_paso, "/visita/").concat(moduleParams.id_visita, "/muestreo/").concat(item.id)
          },
          "delete": {
            label: 'Eliminar',
            callback: this.onClickDelete,
            permission: 'muestreo_delete'
          }
        }
      }), React.createElement("div", null, React.createElement("div", {
        className: "row r1"
      }, React.createElement("div", {
        className: "pull-left r1_1"
      }, React.createElement("span", {
        className: "title-h1"
      }, item.name, ' ', React.createElement("small", {
        className: "ui horizontal mini label"
      }, (item.configValues.type ? item.configValues.type : 'SIN DEFINIR').toUpperCase()), React.createElement(_StatusButtonAction.StatusDivBlock, {
        wrapperClassName: "pull-right text-mini",
        className: "mini",
        hideLabel: true,
        status: this.getItemStatus()
      })))), React.createElement("div", {
        className: "ui segment basic",
        style: {
          marginTop: 0
        },
        onClick: this.onClickItem
      }, !!item.configValues.type ? React.createElement("table", {
        className: "ui very compact celled small table"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Total Poblaci\xF3n"), React.createElement("th", null, "Total Muestra"), React.createElement("th", null, "Error Tolerable"), React.createElement("th", null, "Error Proyectado"))), React.createElement("tbody", null, React.createElement(MuestreoListItemRow, {
        item: item
      }))) : React.createElement("div", {
        className: "_a-center"
      }, React.createElement("a", {
        className: "ui button orange",
        href: url_for2("proyecto/:id_proyecto/paso/".concat(moduleParams.id_paso, "/visita/").concat(moduleParams.id_visita, "/muestreo/").concat(item.id))
      }, "Configurar Muestreo")))), this.state.isModalOpen && React.createElement(_Modal["default"], {
        dimmer: "inverted",
        className: "modal-muestreo modal-ab",
        closeIcon: true,
        closeOnEscape: true,
        open: true,
        size: "large",
        onClose: function onClose() {
          return _this4.setState({
            isModalOpen: false
          });
        }
      }, React.createElement(_Modal["default"].Header, null, "Muestreo ", item.name), React.createElement(_Modal["default"].Content, null, this.renderModalContent())));
    }
  }]);

  return MuestreoListItem;
}(_react.PureComponent);

var MuestreoListItemRow = function MuestreoListItemRow(props) {
  var item = props.item;

  var num = function num(string) {
    var v = parseFloat('' + string);
    return isNaN(v) ? 0 : v;
  };

  var getConfig = function getConfig(config) {
    var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (typeof item.configValues[config] === 'undefined') {
      return defaultValue;
    }

    return item.configValues[config];
  };

  var total_muestra = function () {
    if (typeof item.configValues == 'undefined' || typeof item.configValues.type == 'undefined' || typeof item.configValues.muestras == 'undefined' || typeof item.configValues.muestras[item.configValues.type] == 'undefined') {
      return 0;
    }

    var muestras = item.configValues.muestras[item.configValues.type];
    return _.reduce(muestras, function (acc, curr) {
      return acc + num(curr.v);
    }, 0);
  }();

  switch (item.configValues.type) {
    case 'mas':
      var error_tolerable = getConfig('E', 5) == -1 ? item.configValues.Ev : getConfig('E', 5) * item.configValues.M / 100;
      return React.createElement("tr", null, React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(item.configValues.M)), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(total_muestra)), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(num(error_tolerable))), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(num(item.configValues.pry_1))));

    case 'mum':
      return React.createElement("tr", null, React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(item.configValues.M)), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(total_muestra)), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(num(item.configValues.e2__v2))), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(num(Math.abs(item.configValues.total_error_proyectado)))));
  }
};

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/menuitem_revision.tsx":
/*!******************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/menuitem_revision.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItemRevision = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _menuitem = __webpack_require__(/*! ./menuitem */ "./src/proyecto__hoja_trabajo/sidebar/menuitem.tsx");

var _revision_list = _interopRequireDefault(__webpack_require__(/*! ./revision_list */ "./src/proyecto__hoja_trabajo/sidebar/revision_list.tsx"));

var _reactTextareaAutosize = _interopRequireDefault(__webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuItemRevision =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MenuItemRevision, _PureComponent);

  function MenuItemRevision() {
    var _this;

    _classCallCheck(this, MenuItemRevision);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuItemRevision).apply(this, arguments));
    _this.state = {
      items: null
    };

    _this.parseItems = function (input) {
      return input;
    };

    _this.onMountPanel = function () {
      if (_this.state.items === null) {
        _this.props.modelManager.getJson(_this.props).then(function (items) {
          _this.setState({
            items: items
          });
        });
      }
    };

    _this.onCreateItem = function (params, cb) {
      $.blockUI(create_blockUI_loading_message('Creando Nota de Revisión'));

      _this.props.modelManager.createItem(_this.props, {
        revision_text: params.text,
        op: params.status
      }).then(function (revision) {
        _this.setState(function (prevState) {
          var items = _toConsumableArray(prevState.items);

          items.push(revision);
          return {
            items: items
          };
        });

        cb();
        $.unblockUI();
      });
    };

    _this.onSaveItem = function (item, changes, blockingText) {
      return new Promise(function (resolve) {
        if (blockingText) {
          setTimeout(function () {
            return $.blockUI(create_blockUI_loading_message(blockingText));
          }, 1000 * 0.1);
        }

        _this.props.modelManager.saveItem(_this.props, item, changes).then(function (revision) {
          _this.setState(function (prevState) {
            var items = _.map(prevState.items, function (item) {
              return item.id == revision.id ? revision : item;
            });

            return {
              items: items
            };
          });

          if (blockingText) {
            $.unblockUI();
          }

          resolve(revision);
        });
      });
    };

    _this.onClickDeleteItem = function (item) {
      bootbox.warningConfirm("\xBFDesea eliminar esta Nota de Revisi\xF3n <b>#".concat(item.name, "</b> ?"), 'No', 'Sí, Eliminar', function (r) {
        if (!r) {
          return;
        }

        $.blockUI(create_blockUI_loading_message('Eliminando Nota de Revisión'));

        _this.props.modelManager.deleteItem(_this.props, item).then(function () {
          _this.setState(function (prevState) {
            var items = _.reject(prevState.items, {
              id: item.id
            });

            return {
              items: items
            };
          });

          $.unblockUI();
        });
      });
    };

    return _this;
  }

  _createClass(MenuItemRevision, [{
    key: "renderContent",
    value: function renderContent() {
      return React.createElement("div", {
        className: "content"
      }, React.createElement(RevisionNewForm, {
        onSubmit: this.onCreateItem
      }), React.createElement(_revision_list["default"], {
        items: this.state.items,
        moduleParams: this.props.moduleParams,
        isEditable: es_proyecto_editable() && user_has_role_permission('revision_edit'),
        onSaveItem: this.onSaveItem,
        onClickDeleteItem: this.onClickDeleteItem
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_menuitem.BaseMenuElement, {
        name: "revision",
        counter: this.state.items === null ? this.props.counter : _.size(_.reject(this.state.items, {
          status: 'REVISADO'
        })),
        icon: "notas_de_revision",
        title: "Notas de Revisi\xF3n",
        open: this.props.open,
        onToggle: this.props.onOpen,
        onMountPanel: this.onMountPanel
      }, this.renderContent());
    }
  }]);

  return MenuItemRevision;
}(_react.PureComponent);

exports.MenuItemRevision = MenuItemRevision;

var RevisionNewForm =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(RevisionNewForm, _PureComponent2);

  function RevisionNewForm() {
    var _this2;

    _classCallCheck(this, RevisionNewForm);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(RevisionNewForm).apply(this, arguments));
    _this2.state = {
      text: '',
      isEditMode: false
    };

    _this2.onChange = function (ev) {
      _this2.setState({
        text: ev.target.value
      });
    };

    _this2.onTextareaKeyDown = function (ev) {
      if (ev.keyCode == 27) {
        _this2.onCancel();
      }

      if ((ev.ctrlKey || ev.metaKey) && (ev.keyCode == 13 || ev.keyCode == 10)) {
        _this2.onSubmit('NUEVO');
      }
    };

    _this2.onClickNew = function () {
      _this2.setState({
        isEditMode: true
      });
    };

    _this2.onCancel = function () {
      _this2.setState({
        isEditMode: false,
        text: ''
      });
    };

    _this2.onSubmit = function (status) {
      if (_.str.trim(_this2.state.text) == '') {
        bootbox.alertError('La Nota de Revisión no puede estar vacía.');
        return;
      }

      _this2.props.onSubmit({
        text: _.str.trim(_this2.state.text),
        status: status
      }, function () {
        _this2.setState({
          text: '',
          isEditMode: false
        });
      });
    };

    return _this2;
  }

  _createClass(RevisionNewForm, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!es_proyecto_editable() || !user_has_role_permission('revision_edit')) {
        return null;
      }

      return !this.state.isEditMode ? React.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, React.createElement("button", {
        // chnage button' className: "ui button primary mini compact",
		className: "ui button primary compact",
        onClick: this.onClickNew
      }, "Crear Nota")) : React.createElement("div", null, React.createElement(_reactTextareaAutosize["default"], {
        minRows: 2,
        maxRows: 8,
        autoFocus: true,
        onChange: this.onChange,
        value: this.state.text,
        style: {
          width: '100%'
        },
        onKeyDown: this.onTextareaKeyDown,
        placeholder: "Escriba aqu\xED su Nota de Revisi\xF3n"
      }), React.createElement("div", {
        style: {
          marginTop: 8,
          textAlign: 'right'
        }
      }, React.createElement("button", {
        className: "ui button negative mini compact",
        onClick: this.onCancel
      }, "Cancelar"), React.createElement("button", {
        className: "ui button primary mini compact",
        onClick: function onClick() {
          return _this3.onSubmit('NUEVO');
        }
      }, "Guardar")));
    }
  }]);

  return RevisionNewForm;
}(_react.PureComponent);

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/panel_header.tsx":
/*!*************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/panel_header.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarPanelHeader = void 0;

var _invoke2 = _interopRequireDefault(__webpack_require__(/*! lodash/invoke */ "./node_modules/lodash/invoke.js"));

var _react = __webpack_require__(/*! react */ "react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SidebarPanelHeader =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SidebarPanelHeader, _PureComponent);

  function SidebarPanelHeader() {
    _classCallCheck(this, SidebarPanelHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(SidebarPanelHeader).apply(this, arguments));
  }

  _createClass(SidebarPanelHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _invoke2["default"])(this.props, 'onMount');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("header", null, React.createElement("a", {
        href: "#",
        className: "close-link",
        onClick: this.props.onClose
      }, React.createElement("i", {
        className: "ui icon close green"
      })), React.createElement("div", {
        className: "title"
      }, this.props.title));
    }
  }]);

  return SidebarPanelHeader;
}(_react.PureComponent);

exports.SidebarPanelHeader = SidebarPanelHeader;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/sidebar/revision_list.tsx":
/*!**************************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/sidebar/revision_list.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _menuitem = __webpack_require__(/*! ./menuitem */ "./src/proyecto__hoja_trabajo/sidebar/menuitem.tsx");

var _AuthorIconLog = __webpack_require__(/*! ../../global/AuthorIconLog */ "./src/global/AuthorIconLog.tsx");

var _StatusButtonAction = __webpack_require__(/*! ../../global/StatusButtonAction */ "./src/global/StatusButtonAction.tsx");

var _reactTextareaAutosize = _interopRequireDefault(__webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Popup = _interopRequireDefault(__webpack_require__(/*! semantic-ui-react/dist/commonjs/modules/Popup */ "./node_modules/semantic-ui-react/dist/commonjs/modules/Popup/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RevisionList =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(RevisionList, _PureComponent);

  function RevisionList() {
    _classCallCheck(this, RevisionList);

    return _possibleConstructorReturn(this, _getPrototypeOf(RevisionList).apply(this, arguments));
  }

  _createClass(RevisionList, [{
    key: "render",
    value: function render() {
      var _this = this;

      if (this.props.items === null) {
        return React.createElement("div", {
          style: {
            height: 300,
            position: 'relative'
          }
        }, React.createElement("div", {
          className: "ui active inverted text loader elastic olive"
        }, "Cargando Notas de Revisi\xF3n"));
      } else if (_.size(this.props.items) == 0) {
        return React.createElement("div", {
          className: "empty nocontent"
        }, "0 Notas de Revisi\xF3n");
      } else {
        var items = this.props.items;

        var porRevisarItems = _.reject(items, {
          status: 'REVISADO'
        });

        var revisadoItems = _.filter(items, {
          status: 'REVISADO'
        });

        return React.createElement(_menuitem.MenuElementListPanel, {
          className: "revision-list"
        }, _.size(porRevisarItems) == 0 ? React.createElement("div", {
          className: "empty nocontent"
        }, "0 Notas de Revisi\xF3n Abiertas") : _.map(porRevisarItems, function (item) {
          return React.createElement("div", {
            key: item.id,
            className: "listitem revision-listitem"
          }, React.createElement(RevisionListItem, {
            item: item,
            isEditable: _this.props.isEditable,
            onSave: _this.props.onSaveItem,
            onClickDelete: _this.props.onClickDeleteItem
          }));
        }), _.size(revisadoItems) > 0 && React.createElement(RevisionDisabledList, {
          items: revisadoItems
        }));
      }
    }
  }]);

  return RevisionList;
}(_react.PureComponent);

exports["default"] = RevisionList;

var RevisionDisabledList =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(RevisionDisabledList, _PureComponent2);

  function RevisionDisabledList() {
    var _this2;

    _classCallCheck(this, RevisionDisabledList);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(RevisionDisabledList).apply(this, arguments));
    _this2.state = {
      collapsed: true
    };

    _this2.toggle = function () {
      _this2.setState(function (prevState) {
        return {
          collapsed: !prevState.collapsed
        };
      });
    };

    return _this2;
  }

  _createClass(RevisionDisabledList, [{
    key: "render",
    value: function render() {
      var items = this.props.items;
      return React.createElement("div", {
        style: {
          marginTop: 20,
          marginBottom: 20,
          padding: '0 10px'
        }
      }, React.createElement("h4", {
        className: "row clickable",
        onClick: this.toggle
      }, React.createElement("i", {
        className: (0, _classnames["default"])('icon caret', !this.state.collapsed ? 'down' : 'right')
      }), " Notas Revisadas", React.createElement("span", {
        className: "toggle-action"
      }, "[", this.state.collapsed ? 'Mostrar' : 'Ocultar', "]"), React.createElement("span", {
        className: "ui mini circular green label pull-right"
      }, _.size(items))), !this.state.collapsed && React.createElement("div", {
        className: "revision-list-closed"
      }, _.map(items, function (item) {
        return React.createElement("div", {
          key: item.id,
          className: "listitem revision-listitem"
        }, React.createElement(RevisionListItem, {
          item: item,
          isEditable: false
        }));
      })));
    }
  }]);

  return RevisionDisabledList;
}(_react.PureComponent);

var RevisionListItem =
/*#__PURE__*/
function (_PureComponent3) {
  _inherits(RevisionListItem, _PureComponent3);

  function RevisionListItem() {
    var _this3;

    _classCallCheck(this, RevisionListItem);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(RevisionListItem).apply(this, arguments));
    _this3.state = {
      isEditMode: false,
      isThreadOpen: false
    };

    _this3.onClickEdit = function () {
      _this3.setState({
        isEditMode: true
      });
    };

    _this3.onClickDelete = function (ev) {
      ev.preventDefault();

      _this3.props.onClickDelete(_this3.props.item);
    };

    _this3.onClickNewComment = function () {
      if (_this3.props.isEditable) {
        _this3.setState({
          isThreadOpen: true
        });
      }
    };

    _this3.onCancelNewComment = function () {
      _this3.setState({
        isThreadOpen: false
      });
    };

    _this3.onChange = function (changes) {
      _this3.props.onSave(_this3.props.item, changes, 'Guardando cambios...').then(function () {
        _this3.setState({
          isEditMode: false
        });
      });
    };

    _this3.onClickChangeStatus = function (status) {
      _this3.props.onSave(_this3.props.item, {
        op: status
      }, 'Marcando como ' + status + '...');
    };

    _this3.onAddComment = function (params) {
      var changes = {
        comment: params.text
      };

      if (params.status) {
        changes.op = params.status;
      }

      _this3.props.onSave(_this3.props.item, changes, 'Guardando comentario...').then(function () {
        _this3.setState({
          isThreadOpen: false
        });
      });
    };

    return _this3;
  }

  _createClass(RevisionListItem, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var item = this.props.item;
      return React.createElement("div", null, this.props.isEditable && React.createElement(_menuitem.MenuElementListActions, {
        actions: {
          "delete": {
            label: 'Eliminar',
            callback: this.onClickDelete,
            permission: 'revision_delete'
          }
        }
      }), React.createElement("div", {
        className: "row header-item"
      }, React.createElement("div", {
        className: "pull-left"
      }, React.createElement("span", {
        className: "title-h1"
      }, "Nota #", item.name), React.createElement(_AuthorIconLog.AuthorIconLogDefaultWrapper, {
        model: item,
        size: "small"
      })), React.createElement(_StatusButtonAction.StatusDivBlock, {
        wrapperClassName: "pull-right text-mini",
        status: item.status || 'EN PROCESO',
        className: "mini",
        hideLabel: true
      })), React.createElement("div", {
        className: "author-info"
      }, React.createElement("i", {
        "aria-hidden": "true",
        // change icon: className: "user circle icon olive",
         className: "far fa-user-circle olive",
        style: {
          "float": 'left'
        }
      }), React.createElement("div", {
        className: "content"
      }, React.createElement("div", {
        className: "header"
      }, item.Creator.User.name, React.createElement("div", {
        className: "pull-right description"
      }, Date.create(item.Creator.ts).format('{d} {Mon} {year} {h}:{mm} {tt}'))))), this.props.isEditable && this.state.isEditMode ? React.createElement(RevisionEditForm, {
        item: item,
        onSubmit: this.onChange
      }) : React.createElement(_react.Fragment, null, React.createElement("p", {
        onClick: this.onClickNewComment,
        style: {
          lineHeight: '1em'
        },
        dangerouslySetInnerHTML: {
          __html: item.description.replace(/\n/g, '<br/>')
        }
      }), React.createElement("div", {
        className: (0, _classnames["default"])('threadlist ui threaded comments', {
          empty: _.size(item.Comments) == 0
        })
      }, this.state.isThreadOpen && React.createElement("h5", {
        className: (0, _classnames["default"])('ui header', {
          dividing: _.size(item.Comments) == 0
        })
      }, "Comentarios"), _.map(item.Comments, function (comment) {
        return React.createElement("div", {
          className: "comment",
          key: comment.id,
          onClick: _this4.onClickNewComment
        }, React.createElement("div", {
          className: "avatar"
        }, React.createElement("i", {
		  //change icon: className: (0, _classnames["default"])('icon user circle', {	
          className: (0, _classnames["default"])('far fa-user-circle', {
            green: comment.status == 'COMPLETADO',
            olive: comment.status == 'REVISADO'
          })
        })), React.createElement("div", {
          className: "content"
        }, React.createElement("div", {
          className: "author"
        }, comment.Creator.User.name), React.createElement("div", {
          className: "metadata"
        }, Date.create(comment.Creator.ts).format('{d} {Mon} {year}  {h}:{mm} {tt}')), React.createElement("div", {
          className: "text"
        }, React.createElement("p", {
          dangerouslySetInnerHTML: {
            __html: comment.comentario
          }
        }))));
      })), this.state.isThreadOpen && this.props.isEditable ? React.createElement(RevisionComentarioForm, {
        parentItem: item,
        onSave: this.onAddComment,
        onCancel: this.onCancelNewComment
      }) : this.props.isEditable && React.createElement("div", {
        className: "actions-wrapper"
      }, React.createElement("div", {
        className: "actions"
      }, React.createElement("div", {
        className: "group-actions"
      }, React.createElement("button", {
        className: "ui button icon blue mini compact",
        onClick: this.onClickNewComment
      }, "Responder")), React.createElement("div", {
        className: "group-actions right-actions"
      }, user_has_role_permission('revision_edit') && React.createElement("button", {
        className: "ui button icon primary mini compact",
        onClick: function onClick() {
          return _this4.onClickChangeStatus('COMPLETADO');
        }
      }, React.createElement("i", {
        className: "icon check"
      }), " Completar"), user_has_role_permission('revision_revisado') && React.createElement(_Popup["default"], {
        disabled: item.fecha_completado != null,
        className: "disable-text",
        on: "hover",
        basic: true,
        content: "Debe estar primero en estado COMPLETADO, para poder marcarla como REVISADA.",
        trigger: React.createElement("div", {
          className: "button-wrapper"
        }, React.createElement("button", {
          className: "ui button mini compact olive",
          disabled: item.fecha_completado == null,
          onClick: function onClick() {
            return item.fecha_completado == null ? void 0 : _this4.onClickChangeStatus('REVISADO');
          }
        }, React.createElement("i", {
          className: "icon check fitted"
        }), React.createElement("i", {
          className: "icon check"
        }), " Revisado"))
      }))))));
    }
  }]);

  return RevisionListItem;
}(_react.PureComponent);

var RevisionEditForm =
/*#__PURE__*/
function (_PureComponent4) {
  _inherits(RevisionEditForm, _PureComponent4);

  function RevisionEditForm(props) {
    var _this5;

    _classCallCheck(this, RevisionEditForm);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(RevisionEditForm).call(this, props));

    _this5.onChange = function (ev) {
      _this5.setState({
        value: ev.target.value
      });
    };

    _this5.onSubmit = function (status) {
      if (_.str.trim(_this5.state.value) == '') {
        bootbox.alertError('La Nota de Revisión no puede estar vacía.');
        return;
      }

      var changes = {
        revision_text: _.str.trim(_this5.state.value)
      };

      if (status) {
        changes.op = status;
      }

      _this5.props.onSubmit(changes);
    };

    _this5.state = {
      value: _this5.props.item.description
    };
    return _this5;
  }

  _createClass(RevisionEditForm, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      return React.createElement(_react.Fragment, null, React.createElement(_reactTextareaAutosize["default"], {
        minRows: 2,
        maxRows: 8,
        onChange: this.onChange,
        value: this.state.value,
        style: {
          width: '100'
        },
        placeholder: "Escriba aqu\xED su Nota de Revisi\xF3n"
      }), React.createElement("div", {
        style: {
          marginTop: 8,
          textAlign: 'right'
        }
      }, React.createElement("button", {
        className: "ui button icon primary mini compact",
        onClick: function onClick() {
          return _this6.onSubmit();
        }
      }, "Guardar"), React.createElement("button", {
        className: "ui button icon primary mini compact",
        onClick: function onClick() {
          return _this6.onSubmit('COMPLETADO');
        }
      }, React.createElement("i", {
        className: "icon check"
      }), " Completar"), React.createElement(_Popup["default"], {
        disabled: this.props.item.fecha_completado != null,
        className: "disable-text",
        on: "hover",
        basic: true,
        content: "Debe estar primero en estado COMPLETADO, para poder marcarla como REVISADA.",
        trigger: React.createElement("div", {
          className: "button-wrapper"
        }, React.createElement("button", {
          className: "ui button mini compact olive",
          disabled: this.props.item.fecha_completado == null,
          onClick: function onClick() {
            return _this6.props.item.fecha_completado == null ? void 0 : _this6.onSubmit('REVISADO');
          }
        }, React.createElement("i", {
          className: "icon check fitted"
        }), React.createElement("i", {
          className: "icon check"
        }), " Revisado"))
      })));
    }
  }]);

  return RevisionEditForm;
}(_react.PureComponent);

var RevisionComentarioForm =
/*#__PURE__*/
function (_PureComponent5) {
  _inherits(RevisionComentarioForm, _PureComponent5);

  function RevisionComentarioForm() {
    var _this7;

    _classCallCheck(this, RevisionComentarioForm);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(RevisionComentarioForm).apply(this, arguments));
    _this7.cancelTimeout = null;
    _this7.state = {
      value: ''
    };

    _this7.onChange = function (ev) {
      _this7.setState({
        value: ev.target.value
      });
    };

    _this7.onTextareaKeyDown = function (ev) {
      if (ev.keyCode == 27) {
        _this7.props.onCancel();

        _this7.cancelTimeout = null;
      }

      if ((ev.ctrlKey || ev.metaKey) && (ev.keyCode == 13 || ev.keyCode == 10)) {
        _this7.onSubmit();
      }
    };

    _this7.onSubmit = function (status) {
      if (_.str.trim(_this7.state.value) == '' && !status) {
        return;
      }

      if (_this7.cancelTimeout != null) {
        window.clearTimeout(_this7.cancelTimeout);
        _this7.cancelTimeout = null;
      }

      _this7.props.onSave({
        text: _.str.trim(_this7.state.value),
        status: status
      });
    };

    _this7.onBlur = function () {
      _this7.cancelTimeout = window.setTimeout(function () {
        _this7.props.onCancel();
      }, 1000 * 0.5);
    };

    return _this7;
  }

  _createClass(RevisionComentarioForm, [{
    key: "render",
    value: function render() {
      var _this8 = this;

      return React.createElement("div", {
        style: {
          marginBottom: 30
        }
      }, React.createElement(_reactTextareaAutosize["default"], {
        minRows: 2,
        maxRows: 5,
        autoFocus: true,
        value: this.state.value,
        onChange: this.onChange,
        onKeyDown: this.onTextareaKeyDown,
        placeholder: "Escriba aqu\xED su comentario",
        style: {
          width: '95%'
        },
        onBlur: function onBlur() {
          return _this8.onBlur();
        }
      }), React.createElement("div", {
        style: {
          textAlign: 'right',
          marginTop: 5
        }
      }, React.createElement("button", {
        className: "ui button icon blue mini compact pull-left",
        onClick: function onClick() {
          return _this8.onSubmit();
        }
      }, "Enviar"), React.createElement("button", {
        className: "ui button icon primary mini compact",
        onClick: function onClick() {
          return _this8.onSubmit('COMPLETADO');
        }
      }, React.createElement("i", {
        className: "icon check"
      }), " Completar"), React.createElement(_Popup["default"], {
        disabled: this.props.parentItem.fecha_completado != null,
        className: "disable-text",
        on: "hover",
        basic: true,
        content: "Debe estar primero en estado COMPLETADO, para poder marcarla como REVISADA.",
        trigger: React.createElement("div", {
          className: "button-wrapper"
        }, React.createElement("button", {
          className: "ui button mini compact olive",
          disabled: this.props.parentItem.fecha_completado == null,
          onClick: function onClick() {
            return _this8.props.parentItem.fecha_completado == null ? void 0 : _this8.onSubmit('REVISADO');
          }
        }, React.createElement("i", {
          className: "icon check fitted"
        }), React.createElement("i", {
          className: "icon check"
        }), " Revisado"))
      })));
    }
  }]);

  return RevisionComentarioForm;
}(_react.PureComponent);

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/utils.ts":
/*!*********************************************!*\
  !*** ./src/proyecto__hoja_trabajo/utils.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HojaTrabajoUpdateUtils = exports.HojaTrabajoUtils = void 0;
var HojaTrabajoUtils;
exports.HojaTrabajoUtils = HojaTrabajoUtils;

(function (HojaTrabajoUtils) {
  function getAllVisitasAfter(hoja_trabajo, visitaPivot) {
    var visitas = [];
    var found = false;

    _.forEach(hoja_trabajo.visitas, function (visita) {
      if (found) {
        visitas.push(visita);
        return;
      }

      if (visita.id == visitaPivot.id) {
        found = true;
      }
    });

    return visitas;
  }

  HojaTrabajoUtils.getAllVisitasAfter = getAllVisitasAfter;
})(HojaTrabajoUtils || (exports.HojaTrabajoUtils = HojaTrabajoUtils = {}));

var HojaTrabajoUpdateUtils;
exports.HojaTrabajoUpdateUtils = HojaTrabajoUpdateUtils;

(function (HojaTrabajoUpdateUtils) {
  function updateVisita(hoja_trabajo, visita, new_data) {
    var hoja_trabajo_copy = Object.assign({}, hoja_trabajo);
    hoja_trabajo_copy.visitas = _.mapValues(hoja_trabajo_copy.visitas, function (item) {
      if (item.id == visita.id) {
        item = Object.assign({}, item, new_data);
      }

      return item;
    });
    return hoja_trabajo_copy;
  }

  HojaTrabajoUpdateUtils.updateVisita = updateVisita;

  function updateVisitas(hoja_trabajo, new_data) {
    _.forEach(new_data, function (visita_new_data, id_visita) {
      var visita = _.findWhere(hoja_trabajo.visitas, {
        id_visita: id_visita
      });

      hoja_trabajo = updateVisita(hoja_trabajo, visita, visita_new_data);
    });

    return hoja_trabajo;
  }

  HojaTrabajoUpdateUtils.updateVisitas = updateVisitas;

  function updateField(hoja_trabajo, field, new_data) {
    var hoja_trabajo_copy = Object.assign({}, hoja_trabajo);
    hoja_trabajo_copy[field] = Object.assign({}, hoja_trabajo_copy[field], new_data);
    return hoja_trabajo_copy;
  }

  HojaTrabajoUpdateUtils.updateField = updateField;
})(HojaTrabajoUpdateUtils || (exports.HojaTrabajoUpdateUtils = HojaTrabajoUpdateUtils = {}));

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/utils_ajuste.ts":
/*!****************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/utils_ajuste.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNombreCuenta = void 0;

var getNombreCuenta = function getNombreCuenta(cuentas, cuenta) {
  var found = _.findWhere(cuentas, {
    cuenta: cuenta
  });

  if (found) {
    return found.nombre_cuenta;
  }

  var cleanCuenta = function cleanCuenta(c) {
    return c.replace(/\D/g, '');
  };

  found = _.findWhere(_.map(cuentas, function (item) {
    return {
      cuenta: cleanCuenta(item.cuenta),
      cuenta_real: item.cuenta_real,
      nombre_cuenta: item.nombre_cuenta
    };
  }), {
    cuenta: cleanCuenta(cuenta)
  });
  return found ? found.nombre_cuenta : '';
};

exports.getNombreCuenta = getNombreCuenta;

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/utils_hallazgo.ts":
/*!******************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/utils_hallazgo.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HallazgoUtils = void 0;
var HallazgoUtils;
exports.HallazgoUtils = HallazgoUtils;

(function (HallazgoUtils) {
  function formatName(name) {
    return ('' + name).match(/^\d+$/) ? 'Hallazgo #' + name : name;
  }

  HallazgoUtils.formatName = formatName;
})(HallazgoUtils || (exports.HallazgoUtils = HallazgoUtils = {}));

/***/ }),

/***/ "./src/proyecto__hoja_trabajo/utils_truncate.ts":
/*!******************************************************!*\
  !*** ./src/proyecto__hoja_trabajo/utils_truncate.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanSpacesFromHtml = cleanSpacesFromHtml;
exports.truncateText = truncateText;

var _htmlTruncate = _interopRequireDefault(__webpack_require__(/*! html-truncate */ "./node_modules/html-truncate/lib/truncate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function cleanSpacesFromHtml(text) {
  if (text == null) {
    return text;
  }

  text = text.trim().replace(/\r?\n|\r/g, '');
  text = text.replace(/>\s+</g, '><');
  text = text.replace(/\s{2,}/g, ' ');
  return text;
}

function truncateText(text) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  if (text == null) {
    return text;
  }

  text = cleanSpacesFromHtml(text);
  text = text.replace(/<table.*\/table>/g, '<img src="/images/icon_tabular.png" title="Tabla" />');
  var html = (0, _htmlTruncate["default"])('' + text, length, {
    keepImageTag: true
  });
  html = html.replace(/(min-)?width:.+?;/g, '');
  html = html.replace(/(min-)?height:.+?;/g, '');
  html = html.replace(/style=".+?"/g, '');
  return html.trim();
}

/***/ }),

/***/ "./src/proyecto__muestreo/AppMuestreoMas.tsx":
/*!***************************************************!*\
  !*** ./src/proyecto__muestreo/AppMuestreoMas.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _getValue = _interopRequireDefault(__webpack_require__(/*! get-value */ "./node_modules/get-value/index.js"));

var _Tooltip = __webpack_require__(/*! ../global/Tooltip */ "./src/global/Tooltip.tsx");

var _EditorPreview = _interopRequireDefault(__webpack_require__(/*! ../global/EditorPreview */ "./src/global/EditorPreview.tsx"));

var _utis = __webpack_require__(/*! ./utis */ "./src/proyecto__muestreo/utis.ts");

var _TableMuestra = __webpack_require__(/*! ./TableMuestra */ "./src/proyecto__muestreo/TableMuestra.tsx");

var _utils_mas = __webpack_require__(/*! ./utils_mas */ "./src/proyecto__muestreo/utils_mas.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function num(string) {
  var value = parseFloat('' + string);
  return isNaN(value) ? 0 : value;
}

var AppMuestreoMas =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AppMuestreoMas, _PureComponent);

  function AppMuestreoMas(props) {
    var _this;

    _classCallCheck(this, AppMuestreoMas);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppMuestreoMas).call(this, props));
    _this.handlers = {};
    _this.hasModified = false;

    _this.onChangeSelect = function (field) {
      return _this.attachHandler(field, function (ev) {
        var value = ev.target.value;

        _this.setState(function (prevState) {
          var newValues = Object.assign({}, prevState.values, _defineProperty({}, field, parseFloat(value)));
          newValues.cf_1 = (0, _utils_mas.calculateTamanoMuestra)(_this.props.data.N, newValues.P, newValues.Z, _this.getErrorTolerable(newValues.E));
          newValues.Ev = _this.getErrorTolerable(newValues.E) * _this.props.data.M / 100;

          var muestras = _this.generarMuestras(newValues.cf_1);

          _this.sendToServer({
            muestras: muestras,
            fields: _.omit(newValues, ['conclusion_custom_mas'])
          });

          return {
            values: newValues,
            muestras: muestras
          };
        });
      });
    };

    _this.onChangeMuestra = function (muestra, persist) {
      if (_this.isReadOnly()) {
        return;
      }

      var num = function num(_num) {
        return isNaN(parseFloat(_num)) ? 0 : parseFloat(_num);
      };

      _this.setState(function (prevState) {
        if (!_this.hasModified) {
          var prevValue = _.find(prevState.muestras, {
            cod: muestra.cod
          });

          if (!_.isEqual(prevValue, muestra)) {
            _this.hasModified = true;
          }
        }

        var muestras = _.map(prevState.muestras, function (_muestra) {
          return muestra.cod == _muestra.cod ? muestra : _muestra;
        });

        if (!persist) {
          return {
            muestras: muestras,
            values: prevState.values
          };
        }

        var values = Object.assign({}, prevState.values);
        var total_diff = 0;

        _.forEach(muestras, function (muestra) {
          if (!(0, _utis.isEmpty)(muestra.v) && !(0, _utis.isEmpty)(muestra.r)) {
            total_diff += muestra.v - muestra.r;
          }
        });

        var total_e = _.reduce(muestras, function (acc, curr) {
          return acc + num(curr.v);
        }, 0);

        values.pry_1 = _this.props.data.M * total_diff / total_e;
        values.pry_2 = 100 * values.pry_1 / _this.props.data.M;

        var error_tolerable = _this.getErrorTolerable(values.E);

        var error_muestral = _this.props.data.M * error_tolerable / 100;
        values.pry_3 = Math.abs(values.pry_1) > Math.abs(error_muestral) ? 'SI' : 'NO';

        if (_this.hasModified) {
          _this.sendToServer({
            muestras: muestras,
            fields: _.omit(values, ['conclusion_custom_mas'])
          });

          _this.hasModified = false;
        }

        return {
          muestras: muestras,
          values: values
        };
      });

      (0, _utis.cacheMuestra)(muestra);
    };

    _this.onSaveConclusion = function (editor) {
      if (_this.isReadOnly()) {
        return;
      }

      _this.setState(function (prevState) {
        var values = Object.assign({}, prevState.values);
        values.conclusion_custom_mas = editor.getData();

        _this.sendToServer({
          fields: {
            conclusion_custom: values.conclusion_custom_mas
          }
        });

        return {
          values: values
        };
      });
    };

    _this.onClickNext = function () {
      _this.goToStep(_this.state.step + 1);
    };

    _this.onClickPrev = function () {
      _this.goToStep(_this.state.step - 1);
    };

    _this.goToStep = function (step) {
      if (step == 3 && !_this.isValidToStep3()) {
        bootbox.alert('Debe ingresar el Valor según Auditoría de <u>TODAS</u> las operaciones de la muestra para continuar.');
        return;
      }

      _this.setState({
        step: step
      });
    };

    var muestras = (0, _getValue["default"])(props.data, 'muestras.mas', null);
    var Z = (0, _utis.isEmpty)(props.data.Z) ? 90 : num(props.data.Z);
    var E = (0, _utis.isEmpty)(props.data.E) ? muestras === null ? -1 : 5 : num(props.data.E);
    var P = (0, _utis.isEmpty)(props.data.P) ? 0.9 : num(props.data.P);
    var cf_1 = (0, _utis.isEmpty)(props.data.cf_1) && _this.props.editable ? (0, _utils_mas.calculateTamanoMuestra)(props.data.N, P, Z, _this.getErrorTolerable(E)) : num(props.data.cf_1);
    _this.state = {
      step: 1,
      values: {
        Z: Z,
        E: E,
        P: P,
        cf_1: cf_1,
        pry_1: props.data.pry_1,
        pry_2: props.data.pry_2,
        pry_3: props.data.pry_3,
        Ev: props.data.Ev,
        conclusion_custom_mas: props.data.conclusion_custom_mas || ''
      },
      muestras: muestras == null && _this.props.editable ? _this.generarMuestras(cf_1) : _.map(muestras, function (muestra) {
        if (!(0, _utis.isEmpty)(muestra.r)) {
          muestra.r = parseFloat(muestra.r + '');
        }

        return muestra;
      })
    };

    if (muestras != null) {
      _.forEach(muestras, function (muestra) {
        return (0, _utis.cacheMuestra)(muestra);
      });
    } else if (_this.props.editable) {
      $.blockUI(create_blockUI_loading_message('Guardando cambios'));

      _this.sendToServer({
        type: 'mas',
        muestras: _this.state.muestras,
        fields: _.omit(_this.state.values, ['conclusion_custom_mas'])
      }).done(function () {
        $.unblockUI();
      });
    }

    return _this;
  }

  _createClass(AppMuestreoMas, [{
    key: "isClosed",
    value: function isClosed() {
      return !!this.props.data.ficha_tecnica_mas_date;
    }
  }, {
    key: "isReadOnly",
    value: function isReadOnly() {
      return !this.props.editable || !!this.props.data.ficha_tecnica_mas_date;
    }
  }, {
    key: "attachHandler",
    value: function attachHandler(field, handler) {
      if (!this.handlers[field]) {
        this.handlers[field] = handler;
      }

      return this.handlers[field];
    }
  }, {
    key: "getErrorTolerable",
    value: function getErrorTolerable(E) {
      if (E == -1) {
        var materialidad = parseFloat((0, _getValue["default"])(app, 'vars.muestreo.materialidad.total_planeacion', 0));
        return 100 * materialidad / this.props.data.M;
      } else {
        return E;
      }
    }
  }, {
    key: "generarMuestras",
    value: function generarMuestras(tamano_muestra) {
      var muestras = (0, _utils_mas.generarMuestras)(app.vars.muestras, tamano_muestra);
      var cache = (0, _utis.getCacheAllMuestra)();

      _.forEach(muestras, function (muestra, k) {
        if (typeof cache[muestra.cod] != 'undefined') {
          muestras[k].r = cache[muestra.cod];
        }
      });

      return muestras;
    }
  }, {
    key: "isValidToStep3",
    value: function isValidToStep3() {
      return _.all(this.state.muestras, function (muestra) {
        return muestra.r != null;
      });
    }
  }, {
    key: "sendToServer",
    value: function sendToServer(params) {
      if (this.isReadOnly()) {
        return;
      }

      params.t = 'mas';

      if (typeof params.fields !== 'undefined') {
        params.fields = _.map(params.fields, function (value, key) {
          return {
            field: key,
            value: value
          };
        });
      }

      return $.post(url_for("proyecto_muestreo/".concat(this.props.id, "/config")), params);
    }
  }, {
    key: "renderNavigation",
    value: function renderNavigation() {
      var step = this.state.step;
      return React.createElement(_react.Fragment, null, React.createElement("nav", {
        className: "nav-actions"
      }, step > 1 && React.createElement("button", {
        className: "ui button primary left floated",
        onClick: this.onClickPrev
      }, "Anterior"), step < 3 && React.createElement("button", {
        className: "ui button primary right floated",
        onClick: this.onClickNext
      }, "Siguiente"), React.createElement("div", {
        className: "clearfix"
      })), this.isClosed() && !this.isClosed() && React.createElement(_TableMuestra.FormFichaTecnica, {
        isReadOnly: true,
        id_muestreo: this.props.id,
        id_visita: this.props.id_visita
      }), !this.props.editable && React.createElement("div", {
        className: "_a-center"
      }, React.createElement("a", {
        href: url_for2("proyecto/:id_proyecto/paso/".concat(app.vars.idpaso, "/visita/").concat(this.props.id_visita, "/muestreo/").concat(this.props.id)),
        target: "_blank",
        className: "btn btn-lg btn-edit"
      }, "Editar")));
    }
  }, {
    key: "renderProgressBar",
    value: function renderProgressBar() {
      var progress = _.size(_.filter(this.state.muestras, function (muestra) {
        return !(0, _utis.isEmpty)(muestra.r);
      }));

      var total = _.size(this.state.muestras);

      return React.createElement("div", {
        className: "ui grid"
      }, React.createElement("div", {
        className: "column fifteen wide"
      }, React.createElement("div", {
        className: "ui tiny green progress",
        "data-percent": num(Math.floor(100 * progress / total))
      }, React.createElement("div", {
        className: "bar",
        style: {
          width: "".concat(Math.floor(100 * progress / total), "%")
        }
      }, React.createElement("div", {
        className: "progress"
      })))), React.createElement("div", {
        className: "column one wide",
        style: {
          fontSize: 12,
          padding: 8
        }
      }, progress, " / ", total));
    }
  }, {
    key: "renderStepContent",
    value: function renderStepContent() {
      switch (this.state.step) {
        case 1:
          return this.renderStep1Content();

        case 2:
          return this.renderStep2Content();

        case 3:
          return this.renderStep3Content();
      }
    }
  }, {
    key: "renderStep1Content",
    value: function renderStep1Content() {
      return React.createElement(_react.Fragment, null, React.createElement("div", {
        className: "ui two column grid"
      }, React.createElement("div", {
        className: "column"
      }, React.createElement("table", {
        className: "ui table"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Par\xE1metros"), React.createElement("th", null, "%"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "Error Tolerable", React.createElement(_Tooltip.GenericTooltip, {
        text: "@tooltip.muestreo.error_tolerable",
        title: "Error Tolerable",
        wide: true
      })), React.createElement("td", null, this.isReadOnly() ? this.state.values.E == -1 ? 'Mat. Planeación' : "".concat(this.state.values.E, "%") : React.createElement("select", {
        className: "raw-select input-mini",
        value: this.state.values.E,
        onChange: this.onChangeSelect('E')
      }, React.createElement("option", {
        value: "-1"
      }, "Mat. Planeaci\xF3n"), React.createElement("option", {
        disabled: true
      }, "-"), _.map(_.range(3, 21), function (v) {
        return React.createElement("option", {
          key: v,
          value: v
        }, v, "%");
      })))), React.createElement("tr", null, React.createElement("td", null, "Nivel de Confianza (z)", React.createElement(_Tooltip.GenericTooltip, {
        text: "@tooltip.muestreo.nivel_confianza",
        title: "Nivel de Confianza"
      })), React.createElement("td", null, this.isReadOnly() ? "".concat(this.state.values.Z, "%") : React.createElement("select", {
        className: "raw-select input-mini",
        value: this.state.values.Z,
        onChange: this.onChangeSelect('Z')
      }, _.map(_.range(50, 96), function (v) {
        return React.createElement("option", {
          key: v,
          value: "".concat(v / 100)
        }, v, "%");
      })))), React.createElement("tr", null, React.createElement("td", null, "Error esperado (P)", React.createElement(_Tooltip.GenericTooltip, {
        text: "@tooltip.muestreo.error_esperado",
        title: "Error esperado"
      })), React.createElement("td", null, this.isReadOnly() ? "".concat(this.state.values.P * 10, "%") : React.createElement("select", {
        className: "raw-select input-mini",
        value: this.state.values.P,
        onChange: this.onChangeSelect('P')
      }, _.map(_.range(1, 10), function (v) {
        return React.createElement("option", {
          key: v,
          value: "0.".concat(v)
        }, v, "%");
      }))))))), React.createElement("div", {
        className: "column"
      }, React.createElement("table", {
        className: "ui table"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Resultados"), React.createElement("th", null, "Valor"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "Valor Contable de la Poblaci\xF3n"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(this.props.data.M))), React.createElement("tr", null, React.createElement("td", null, "Tama\xF1o de la Poblaci\xF3n"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(this.props.data.N))))))), React.createElement("div", {
        className: "b3"
      }, React.createElement("span", null, "Tama\xF1o de la Muestra (", React.createElement("em", {
        style: {
          fontFamily: 'serif'
        }
      }, "n"), ")", React.createElement("sup", {
        className: "footnote"
      }, "[1]")), React.createElement("div", {
        className: "math-equation"
      }, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
        rowSpan: 2
      }, "\xA0"), React.createElement("td", {
        className: "math-eq-var",
        style: {
          fontSize: 11,
          borderBottom: '1px solid #333'
        }
      }, "P * Q * z", React.createElement("sup", null, "2"), " * N", ' '), React.createElement("td", {
        rowSpan: 2
      }, "\xA0")), React.createElement("tr", null, React.createElement("td", {
        className: "math-eq-var",
        style: {
          fontSize: 11
        }
      }, "N * E", React.createElement("sup", null, "2"), " * z", React.createElement("sup", null, "2"), " * P * Q"))))), React.createElement("strong", null, accounting.formatNumber(this.state.values.cf_1), " elementos")), React.createElement("div", {
        className: "footnotes"
      }, "[1] ", (0, _getValue["default"])(app.vars.texts, 'tooltip.muestreo.footnote_tamanomuestra_mas')), this.renderNavigation());
    }
  }, {
    key: "renderStep2Content",
    value: function renderStep2Content() {
      return React.createElement(_react.Fragment, null, this.renderProgressBar(), React.createElement("div", null, React.createElement(_TableMuestra.TableMuestras, {
        muestras: this.state.muestras,
        readonly: this.isReadOnly(),
        onChange: this.onChangeMuestra
      })), this.renderNavigation());
    }
  }, {
    key: "renderStep3Content",
    value: function renderStep3Content() {
      var num = function num(_num2) {
        return isNaN(parseFloat(_num2)) ? 0 : parseFloat(_num2);
      };

      var sumV = _.reduce(this.state.muestras, function (acc, curr) {
        return acc + num(curr.v);
      }, 0);

      var sumR = _.reduce(this.state.muestras, function (acc, curr) {
        return acc + num(curr.r);
      }, 0);

      return React.createElement(_react.Fragment, null, React.createElement("div", null, React.createElement("table", {
        className: "ui table"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Resultados"), React.createElement("th", null, "Valor"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("div", {
        style: {
          display: 'inline-block',
          verticalAlign: 'top',
          marginTop: 10
        }
      }, "Tama\xF1o de la muestra"), React.createElement("div", {
        className: "math-equation"
      }, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
        rowSpan: 2
      }, "\xA0"), React.createElement("td", {
        className: "math-eq-var",
        style: {
          fontSize: 11,
          borderBottom: '1px solid #333'
        }
      }, "P * Q * z", React.createElement("sup", null, "2"), " * N", ' '), React.createElement("td", {
        rowSpan: 2
      }, "\xA0")), React.createElement("tr", null, React.createElement("td", {
        className: "math-eq-var",
        style: {
          fontSize: 11
        }
      }, "N * E", React.createElement("sup", null, "2"), " * z", React.createElement("sup", null, "2"), " * P * Q")))))), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(this.state.values.cf_1))), React.createElement("tr", null, React.createElement("td", null, "Valor error tolerable"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(this.props.data.M * this.getErrorTolerable(this.state.values.E) / 100))), React.createElement("tr", null, React.createElement("td", null, "Valor contable de la muestra"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(sumV))), React.createElement("tr", null, React.createElement("td", null, "Valor errores encontrados por el auditor"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(sumV - sumR))))), React.createElement("table", {
        className: "ui table"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
        colSpan: 2
      }, "Proyecci\xF3n de error ", React.createElement("em", null, "No aplica para pruebas de controles")))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "Proyecci\xF3n de los errores en la poblaci\xF3n"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(this.state.values.pry_1))), React.createElement("tr", null, React.createElement("td", null, "\xCDndice de error proyectado"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(this.state.values.pry_2), "%")), React.createElement("tr", null, React.createElement("td", null, "Error proyectado es ", React.createElement("u", null, "superior"), " al Error tolerable"), React.createElement("td", {
        className: (0, _classnames["default"])('right aligned', 'rs-' + this.state.values.pry_3)
      }, this.state.values.pry_3)))), React.createElement("div", {
        className: "ui segment"
      }, React.createElement(_EditorPreview["default"], {
        editable: !this.isReadOnly(),
        label: "Conclusi\xF3n:",
        prefixPreview: "Conclusi\xF3n:",
        data: this.state.values.conclusion_custom_mas,
        ckeditorOptions: "basic",
        onSave: this.onSaveConclusion
      }))), this.renderNavigation(), !this.isClosed() && React.createElement(_TableMuestra.FormFichaTecnica, {
        isReadOnly: false,
        id_muestreo: this.props.id,
        id_visita: this.props.id_visita
      }), !this.props.editable && !this.isClosed() && React.createElement("div", {
        className: "_a-center"
      }, React.createElement("a", {
        href: url_for2("proyecto/:id_proyecto/paso/".concat(app.vars.idpaso, "/visita/").concat(this.props.id_visita, "/muestreo/").concat(this.props.id)),
        target: "_blank",
        className: "btn btn-lg btn-edit"
      }, "Editar")));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var step = this.state.step;
      return React.createElement("div", {
        id: "mainpane-mas"
      }, this.isClosed() && React.createElement("div", {
        className: "alert alert-block alert-info"
      }, React.createElement("span", {
        className: "icon-info-sign"
      }), " ", React.createElement("strong", null, "NOTA:"), " La ficha t\xE9cnica perteneciente a este muestreo ya fue generada, por lo tanto los par\xE1metros y registros de esta muestra utilizando esta metodolog\xEDa", React.createElement("strong", null, " NO"), " pueden ser modificados."), React.createElement("div", {
        className: "ui top attached steps ordered"
      }, React.createElement("div", {
        className: (0, _classnames["default"])({
          active: step == 1,
          completed: step > 1
        }, 'step link first'),
        onClick: function onClick() {
          return _this2.goToStep(1);
        }
      }, React.createElement("div", {
        className: "content"
      }, React.createElement("div", {
        className: "title"
      }, "C\xE1lculo del Tama\xF1o de la Muestra"))), React.createElement("div", {
        className: (0, _classnames["default"])({
          active: step == 2,
          completed: step > 2
        }, 'step link '),
        onClick: function onClick() {
          return _this2.goToStep(2);
        }
      }, React.createElement("div", {
        className: "content"
      }, React.createElement("div", {
        className: "title"
      }, "Muestra y Evaluaci\xF3n de Resultados"))), React.createElement("div", {
        className: (0, _classnames["default"])({
          active: step == 3,
          completed: step > 3
        }, 'step link last'),
        onClick: function onClick() {
          return _this2.goToStep(3);
        }
      }, React.createElement("div", {
        className: "content"
      }, React.createElement("div", {
        className: "title"
      }, "Conclusi\xF3n")))), React.createElement("div", {
        className: "ui segment attached"
      }, React.createElement("div", null, this.renderStepContent())));
    }
  }]);

  return AppMuestreoMas;
}(_react.PureComponent);

exports["default"] = AppMuestreoMas;

/***/ }),

/***/ "./src/proyecto__muestreo/AppMuestreoMum.tsx":
/*!***************************************************!*\
  !*** ./src/proyecto__muestreo/AppMuestreoMum.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _getValue = _interopRequireDefault(__webpack_require__(/*! get-value */ "./node_modules/get-value/index.js"));

var _Tooltip = __webpack_require__(/*! ../global/Tooltip */ "./src/global/Tooltip.tsx");

var _utils_mum = __webpack_require__(/*! ./utils_mum */ "./src/proyecto__muestreo/utils_mum.ts");

var _utis = __webpack_require__(/*! ./utis */ "./src/proyecto__muestreo/utis.ts");

var _EditorPreview = _interopRequireDefault(__webpack_require__(/*! ../global/EditorPreview */ "./src/global/EditorPreview.tsx"));

var _TableMuestra = __webpack_require__(/*! ./TableMuestra */ "./src/proyecto__muestreo/TableMuestra.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function num(string) {
  var value = parseFloat('' + string);
  return isNaN(value) ? 0 : value;
}

var AppMuestreoMum =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AppMuestreoMum, _PureComponent);

  function AppMuestreoMum(props) {
    var _this;

    _classCallCheck(this, AppMuestreoMum);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppMuestreoMum).call(this, props));
    _this.handlers = {};
    _this.hasModified = false;

    _this.onChangeSelect = function (field) {
      return _this.attachHandler(field, function (ev) {
        var value = ev.target.value;

        _this.setState(function (prevState) {
          var newValues = Object.assign({}, prevState.values, _defineProperty({}, field, parseInt(value)));
          var materialidad = parseFloat((0, _getValue["default"])(app, 'vars.muestreo.materialidad.total_planeacion', 0));
          newValues.e2__v2 = newValues.E2 == -1 ? _this.props.data.M * (100 * materialidad / _this.props.data.M) / 100 : _this.props.data.M * newValues.E2 / 100;
          newValues.cg2_1 = (0, _utils_mum.calculateFactorConfianza)(newValues.Z2);
          newValues.cg2_3 = (0, _utils_mum.calculateTamanoMuestra)(_this.props.data.M, newValues.cg2_1, newValues.e2__v2);
          newValues.cg2_4 = Math.floor(_this.props.data.M / newValues.cg2_3);

          var muestras = _this.generarMuestras(newValues.cg2_3, newValues.cg2_4);

          _this.sendToServer({
            muestras: muestras,
            fields: _.omit(newValues, ['conclusion_custom'])
          });

          return {
            values: newValues,
            muestras: muestras
          };
        });
      });
    };

    _this.onChangeMuestra = function (muestra, persist) {
      if (_this.isReadOnly()) {
        return;
      }

      _this.setState(function (prevState) {
        if (!_this.hasModified) {
          var prevValue = _.find(prevState.muestras, {
            cod: muestra.cod
          });

          if (!_.isEqual(prevValue, muestra)) {
            _this.hasModified = true;
          }
        }

        var muestras = _.map(prevState.muestras, function (_muestra) {
          return muestra.cod == _muestra.cod ? muestra : _muestra;
        });

        if (!persist) {
          return {
            muestras: muestras,
            values: prevState.values
          };
        }

        var values = Object.assign({}, prevState.values);

        var muestrasErradas = _.filter(muestras, function (muestra) {
          return !(0, _utis.isEmpty)(muestra.r) && muestra.v - muestra.r != 0;
        });

        values.total_error_proyectado = _.reduce(muestrasErradas, function (acc, muestra) {
          var error_proyectado = muestra.v > values.cg2_4 ? muestra.v - muestra.r : values.cg2_4 * ((muestra.v - muestra.r) / muestra.v);
          return error_proyectado + acc;
        }, 0);
        values.tolerancia = (0, _utils_mum.calculatePrecision)(muestras, values.cg2_4, values.cg2_1, values.Z2);

        if (_this.hasModified) {
          _this.sendToServer({
            muestras: muestras,
            fields: _.omit(values, ['conclusion_custom'])
          });

          _this.hasModified = false;
        }

        return {
          muestras: muestras,
          values: values
        };
      });

      (0, _utis.cacheMuestra)(muestra);
    };

    _this.onSaveConclusion = function (editor) {
      if (_this.isReadOnly()) {
        return;
      }

      _this.setState(function (prevState) {
        var values = Object.assign({}, prevState.values);
        values.conclusion_custom = editor.getData();

        _this.sendToServer({
          fields: {
            conclusion_custom: values.conclusion_custom
          }
        });

        return {
          values: values
        };
      });
    };

    _this.onClickNext = function () {
      _this.goToStep(_this.state.step + 1);
    };

    _this.onClickPrev = function () {
      _this.goToStep(_this.state.step - 1);
    };

    _this.goToStep = function (step) {
      if (step == 3 && !_this.isValidToStep3()) {
        bootbox.alert('Debe ingresar el Valor según Auditoría de <u>TODAS</u> las operaciones de la muestra para continuar.');
        return;
      }

      _this.setState({
        step: step
      });
    };

    var muestras = (0, _getValue["default"])(props.data, 'muestras.mum', null);
    var Z2 = (0, _utis.isEmpty)(props.data.Z2) ? 90 : num(props.data.Z2);
    var E2 = (0, _utis.isEmpty)(props.data.E2) ? muestras === null ? -1 : 5 : num(props.data.E2);
    var error_maximo = (0, _utis.isEmpty)(props.data.e2__v2) && _this.props.editable ? props.data.M * E2 / 100 : num(props.data.e2__v2);
    var factor_confianza = (0, _utis.isEmpty)(props.data.cg2_1) && _this.props.editable ? (0, _utils_mum.calculateFactorConfianza)(Z2) : num(props.data.cg2_1);
    var tamano_muestra = (0, _utis.isEmpty)(props.data.cg2_3) && _this.props.editable ? (0, _utils_mum.calculateTamanoMuestra)(_this.props.data.M, factor_confianza, error_maximo) : num(props.data.cg2_3);
    var intervalo = (0, _utis.isEmpty)(props.data.cg2_4) && _this.props.editable ? Math.floor(_this.props.data.M / tamano_muestra) : num(props.data.cg2_4);
    _this.state = {
      step: 1,
      values: {
        Z2: Z2,
        E2: E2,
        e2__v2: error_maximo,
        total_error_proyectado: props.data.total_error_proyectado,
        tolerancia: props.data.tolerancia,
        cg2_1: factor_confianza,
        cg2_3: tamano_muestra,
        cg2_4: intervalo,
        conclusion_custom: props.data.conclusion_custom || ''
      },
      muestras: muestras == null && _this.props.editable ? _this.generarMuestras(tamano_muestra, intervalo) : _.map(muestras, function (muestra) {
        if (!(0, _utis.isEmpty)(muestra.r)) {
          muestra.r = num(muestra.r + '');
        }

        return muestra;
      })
    };

    if (muestras != null) {
      _.forEach(muestras, function (muestra) {
        return (0, _utis.cacheMuestra)(muestra);
      });
    } else if (_this.props.editable) {
      $.blockUI(create_blockUI_loading_message('Guardando cambios'));

      _this.sendToServer({
        type: 'mum',
        muestras: _this.state.muestras,
        fields: _.omit(_this.state.values, ['conclusion_custom'])
      }).done(function () {
        $.unblockUI();
      });
    }

    return _this;
  }

  _createClass(AppMuestreoMum, [{
    key: "isClosed",
    value: function isClosed() {
      return !!this.props.data.ficha_tecnica_mum_date;
    }
  }, {
    key: "isReadOnly",
    value: function isReadOnly() {
      return !this.props.editable || !!this.props.data.ficha_tecnica_mum_date;
    }
  }, {
    key: "attachHandler",
    value: function attachHandler(field, handler) {
      if (!this.handlers[field]) {
        this.handlers[field] = handler;
      }

      return this.handlers[field];
    }
  }, {
    key: "generarMuestras",
    value: function generarMuestras(tamano_muestra, intervalo) {
      var muestras = (0, _utils_mum.generarMuestras)(app.vars.muestras, tamano_muestra, intervalo);
      var cache = (0, _utis.getCacheAllMuestra)();

      _.forEach(muestras, function (muestra, k) {
        if (typeof cache[muestra.cod] != 'undefined') {
          muestras[k].r = cache[muestra.cod];
        }
      });

      return muestras;
    }
  }, {
    key: "isValidToStep3",
    value: function isValidToStep3() {
      return _.all(this.state.muestras, function (muestra) {
        return muestra.r != null;
      });
    }
  }, {
    key: "sendToServer",
    value: function sendToServer(params) {
      if (this.isReadOnly()) {
        return;
      }

      params.t = 'mum';

      if (typeof params.fields !== 'undefined') {
        params.fields = _.map(params.fields, function (value, key) {
          return {
            field: key,
            value: value
          };
        });
      }

      return $.post(url_for("proyecto_muestreo/".concat(app.vars.ID_MUESTREO, "/config")), params);
    }
  }, {
    key: "renderNavigation",
    value: function renderNavigation() {
      var step = this.state.step;
      return React.createElement(_react.Fragment, null, React.createElement("nav", {
        className: "nav-actions"
      }, step > 1 && React.createElement("button", {
        className: "ui button primary left floated",
        onClick: this.onClickPrev
      }, "Anterior"), step < 3 && React.createElement("button", {
        className: "ui button primary right floated",
        onClick: this.onClickNext
      }, "Siguiente"), React.createElement("div", {
        className: "clearfix"
      })), this.isClosed() && React.createElement(_TableMuestra.FormFichaTecnica, {
        isReadOnly: true,
        id_muestreo: this.props.id,
        id_visita: this.props.id_visita
      }), !this.props.editable && !this.isClosed() && React.createElement("div", {
        className: "_a-center"
      }, React.createElement("a", {
        href: url_for2("proyecto/:id_proyecto/paso/".concat(app.vars.idpaso, "/visita/").concat(this.props.id_visita, "/muestreo/").concat(this.props.id)),
        target: "_blank",
        className: "btn btn-lg btn-edit"
      }, "Editar")));
    }
  }, {
    key: "renderProgressBar",
    value: function renderProgressBar() {
      var progress = _.size(_.filter(this.state.muestras, function (muestra) {
        return !(0, _utis.isEmpty)(muestra.r);
      }));

      var total = _.size(this.state.muestras);

      return React.createElement("div", {
        className: "ui grid"
      }, React.createElement("div", {
        className: "column fifteen wide"
      }, React.createElement("div", {
        className: "ui tiny green progress",
        "data-percent": num(Math.floor(100 * progress / total))
      }, React.createElement("div", {
        className: "bar",
        style: {
          width: "".concat(Math.floor(100 * progress / total), "%")
        }
      }, React.createElement("div", {
        className: "progress"
      })))), React.createElement("div", {
        className: "column one wide",
        style: {
          fontSize: 12,
          padding: 8
        }
      }, progress, " / ", total));
    }
  }, {
    key: "renderStepContent",
    value: function renderStepContent() {
      switch (this.state.step) {
        case 1:
          return this.renderStep1Content();

        case 2:
          return this.renderStep2Content();

        case 3:
          return this.renderStep3Content();
      }
    }
  }, {
    key: "renderStep1Content",
    value: function renderStep1Content() {
      return React.createElement(_react.Fragment, null, React.createElement("div", {
        className: "ui two column grid"
      }, React.createElement("div", {
        className: "column"
      }, React.createElement("table", {
        className: "ui table"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Par\xE1metros"), React.createElement("th", null, "%"), React.createElement("th", null, "Valor"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "Nivel de Confianza", React.createElement(_Tooltip.GenericTooltip, {
        text: "@tooltip.muestreo.nivel_confianza",
        title: "Nivel de Confianza"
      })), React.createElement("td", null, this.isReadOnly() ? "".concat(this.state.values.Z2, "%") : React.createElement("select", {
        className: "raw-select input-mini",
        value: this.state.values.Z2,
        onChange: this.onChangeSelect('Z2')
      }, _.map(_.range(50, 96), function (v) {
        return React.createElement("option", {
          key: v,
          value: v
        }, v, "%");
      }))), React.createElement("td", {
        className: "right aligned"
      }, 100 - this.state.values.Z2)), React.createElement("tr", null, React.createElement("td", null, "Error M\xE1ximo Tolerable", React.createElement(_Tooltip.GenericTooltip, {
        text: "@tooltip.muestreo.error_maximo_tolerable",
        title: "Error M\xE1ximo Tolerable",
        wide: true
      })), React.createElement("td", null, this.isReadOnly() ? this.state.values.E2 == -1 ? 'Mat. Planeación' : "".concat(this.state.values.E2, "%") : React.createElement("select", {
        className: (0, _classnames["default"])('raw-select input-mini', 'e2-' + this.state.values.E2),
        value: this.state.values.E2,
        onChange: this.onChangeSelect('E2')
      }, React.createElement("option", {
        value: "-1"
      }, "Mat. Planeaci\xF3n"), React.createElement("option", {
        disabled: true
      }, "-"), _.map(_.range(1, 11), function (v) {
        return React.createElement("option", {
          key: v,
          value: v
        }, v, "%");
      }))), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(this.state.values.e2__v2)))))), React.createElement("div", {
        className: "column"
      }, React.createElement("table", {
        className: "ui table"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Resultados"), React.createElement("th", null, "Valor"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "Tama\xF1o de la Poblaci\xF3n"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(this.props.data.N))), React.createElement("tr", null, React.createElement("td", null, "Valor Contable de la Poblaci\xF3n"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(this.props.data.M))), React.createElement("tr", null, React.createElement("td", null, "Factor de Confianza"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(this.state.values.cg2_1, 2))), React.createElement("tr", null, React.createElement("td", null, React.createElement("span", {
        style: {
          display: 'inline-block',
          verticalAlign: 'top'
        }
      }, "Intervalo de Muestreo", React.createElement(_Tooltip.GenericTooltip, {
        text: "@tooltip.muestreo.intervalo",
        title: "Intervalo de Muestreo"
      })), React.createElement("div", {
        className: "math-equation"
      }, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
        className: "math-eq-var",
        style: {
          fontSize: 9,
          borderBottom: '1px solid #333'
        }
      }, "Valor contable de la poblacion")), React.createElement("tr", null, React.createElement("td", {
        className: "math-eq-var",
        style: {
          fontSize: 9
        }
      }, "Tama\xF1o de la muestra")))))), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(this.state.values.cg2_4))))))), React.createElement("div", {
        className: "b3"
      }, React.createElement("span", null, "Tama\xF1o de la Muestra (", React.createElement("em", {
        style: {
          fontFamily: 'serif'
        }
      }, "n"), ")", React.createElement("sup", {
        className: "footnote"
      }, "[1]")), React.createElement("div", {
        className: "math-equation"
      }, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
        className: "math-eq-var",
        rowSpan: 2,
        style: {
          fontSize: 9
        }
      }, "n ="), React.createElement("td", {
        className: "math-eq-var",
        style: {
          fontSize: 11,
          borderBottom: '1px solid #333'
        }
      }, "Factor de confianza")), React.createElement("tr", null, React.createElement("td", {
        className: "math-eq-var",
        style: {
          fontSize: 11
        }
      }, "Error tolerable (en porcentaje)"))))), React.createElement("strong", null, accounting.formatNumber(this.state.values.cg2_3), " elementos")), React.createElement("div", {
        className: "footnotes"
      }, "[1] ", (0, _getValue["default"])(app.vars.texts, 'tooltip.muestreo.footnote_tamanomuestra_mum')), this.renderNavigation());
    }
  }, {
    key: "renderStep2Content",
    value: function renderStep2Content() {
      return React.createElement(_react.Fragment, null, this.renderProgressBar(), React.createElement("div", null, React.createElement(_TableMuestra.TableMuestras, {
        muestras: this.state.muestras,
        readonly: this.isReadOnly(),
        onChange: this.onChangeMuestra
      })), this.renderNavigation());
    }
  }, {
    key: "renderStep3Content",
    value: function renderStep3Content() {
      var muestrasErradas = _.filter(this.state.muestras, function (muestra) {
        return !(0, _utis.isEmpty)(muestra.r) && muestra.v - muestra.r != 0;
      });

      var total_error_proyectado = this.state.values.total_error_proyectado;
      var precision = this.state.values.tolerancia;
      return React.createElement(_react.Fragment, null, React.createElement("div", null, React.createElement(_TableMuestra.TableErrores, {
        muestras: muestrasErradas,
        intervalo: this.state.values.cg2_4
      }), React.createElement("table", {
        className: "ui table"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Resultados"), React.createElement("th", null, "Valor"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "a) Error proyectado"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(Math.abs(total_error_proyectado)))), React.createElement("tr", null, React.createElement("td", null, "b) Precisi\xF3n", React.createElement(_Tooltip.GenericTooltip, {
        text: "@tooltip.muestreo.precision",
        title: "Precision"
      })), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(Math.abs(precision)))), React.createElement("tr", {
        className: "strong"
      }, React.createElement("td", null, "c) L\xEDmite superior del error (a+b)"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(Math.abs(parseFloat(total_error_proyectado + '')) + Math.abs(parseFloat(precision + ''))))), React.createElement("tr", {
        className: "strong"
      }, React.createElement("td", null, "d) Error m\xE1ximo tolerable"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(this.state.values.e2__v2))))), React.createElement("div", {
        className: "ui segment"
      }, React.createElement(_EditorPreview["default"], {
        editable: !this.isReadOnly(),
        label: "Conclusi\xF3n:",
        prefixPreview: "Conclusi\xF3n:",
        data: this.state.values.conclusion_custom,
        ckeditorOptions: "basic",
        onSave: this.onSaveConclusion
      }), React.createElement(_TableMuestra.ConclusionTooltip, null))), this.renderNavigation(), !this.isClosed() && React.createElement(_TableMuestra.FormFichaTecnica, {
        isReadOnly: false,
        id_muestreo: this.props.id,
        id_visita: this.props.id_visita
      }), !this.props.editable && !this.isClosed() && React.createElement("div", {
        className: "_a-center"
      }, React.createElement("a", {
        href: url_for2("proyecto/:id_proyecto/paso/".concat(app.vars.idpaso, "/visita/").concat(this.props.id_visita, "/muestreo/").concat(this.props.id)),
        target: "_blank",
        className: "btn btn-lg btn-edit"
      }, "Editar")));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var step = this.state.step;
      return React.createElement("div", {
        id: "mainpane-mum"
      }, this.isClosed() && React.createElement("div", {
        className: "alert alert-block alert-info"
      }, React.createElement("span", {
        className: "icon-info-sign"
      }), " ", React.createElement("strong", null, "NOTA:"), " La ficha t\xE9cnica perteneciente a este muestreo ya fue generada, por lo tanto los par\xE1metros y registros de esta muestra utilizando esta metodolog\xEDa", React.createElement("strong", null, " NO"), " pueden ser modificados."), React.createElement("div", {
        className: "ui top attached steps ordered"
      }, React.createElement("div", {
        className: (0, _classnames["default"])({
          active: step == 1,
          completed: step > 1
        }, 'step link first'),
        onClick: function onClick() {
          return _this2.goToStep(1);
        }
      }, React.createElement("div", {
        className: "content"
      }, React.createElement("div", {
        className: "title"
      }, "C\xE1lculo del Tama\xF1o de la Muestra"))), React.createElement("div", {
        className: (0, _classnames["default"])({
          active: step == 2,
          completed: step > 2
        }, 'step link '),
        onClick: function onClick() {
          return _this2.goToStep(2);
        }
      }, React.createElement("div", {
        className: "content"
      }, React.createElement("div", {
        className: "title"
      }, "Muestra y Evaluaci\xF3n de Resultados"))), React.createElement("div", {
        className: (0, _classnames["default"])({
          active: step == 3,
          completed: step > 3
        }, 'step link last'),
        onClick: function onClick() {
          return _this2.goToStep(3);
        }
      }, React.createElement("div", {
        className: "content"
      }, React.createElement("div", {
        className: "title"
      }, "Conclusi\xF3n")))), React.createElement("div", {
        className: "ui segment attached"
      }, React.createElement("div", null, this.renderStepContent())));
    }
  }]);

  return AppMuestreoMum;
}(_react.PureComponent);

exports["default"] = AppMuestreoMum;

/***/ }),

/***/ "./src/proyecto__muestreo/TableMuestra.tsx":
/*!*************************************************!*\
  !*** ./src/proyecto__muestreo/TableMuestra.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormFichaTecnica = exports.ConclusionTooltip = exports.TableErrores = exports.TableMuestras = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _getValue = _interopRequireDefault(__webpack_require__(/*! get-value */ "./node_modules/get-value/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _InputAutoNumeric = _interopRequireDefault(__webpack_require__(/*! ../global/InputAutoNumeric */ "./src/global/InputAutoNumeric.tsx"));

var _utis = __webpack_require__(/*! ./utis */ "./src/proyecto__muestreo/utis.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TableMuestras =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TableMuestras, _PureComponent);

  function TableMuestras() {
    var _this;

    _classCallCheck(this, TableMuestras);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableMuestras).apply(this, arguments));
    _this.tableRef = (0, _react.createRef)();
    return _this;
  }

  _createClass(TableMuestras, [{
    key: "renderTotals",
    value: function renderTotals() {
      var num = function num(_num) {
        return isNaN(parseFloat(_num)) ? 0 : parseFloat(_num);
      };

      var sumV = _.reduce(this.props.muestras, function (acc, curr) {
        return acc + num(curr.v);
      }, 0);

      var sumR = _.reduce(this.props.muestras, function (acc, curr) {
        return acc + num(curr.r);
      }, 0);

      var sumD = _.reduce(this.props.muestras, function (acc, curr) {
        return acc + num(curr.v - curr.r);
      }, 0);

      return React.createElement("tfoot", null, React.createElement("tr", null, React.createElement("td", {
        colSpan: 2
      }, "TOTALES"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(sumV)), React.createElement("td", {
        className: "right aligned"
      }, sumR != 0 ? accounting.formatNumber(sumR) : ''), React.createElement("td", {
        className: "right aligned"
      }, sumD != 0 ? accounting.formatNumber(sumD) : ''), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(Math.floor(100 * sumD / sumV)), "%")));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      $(this.tableRef.current).floatThead();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      $(this.tableRef.current).floatThead('destroy');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var $table = $(this.tableRef.current);
      setTimeout(function () {
        $table.floatThead('reflow');
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("table", {
        ref: this.tableRef,
        className: "ui celled table compact table-muestras",
        id: "table-muestreo-mum-evaluacion"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "#"), React.createElement("th", null, "Documento"), React.createElement("th", null, "Valor en libros ($)"), React.createElement("th", null, "Valor seg\xFAn auditor\xEDa ($)"), React.createElement("th", null, "Valor Error Absoluto ($)"), React.createElement("th", null, "Error Porcentual (%)"))), React.createElement("tbody", null, _.map(this.props.muestras, function (muestra, k) {
        return React.createElement(TableMuestraRow, {
          key: muestra.cod,
          index: k + 1,
          muestra: muestra,
          readonly: _this2.props.readonly,
          onChange: _this2.props.onChange
        });
      })), this.renderTotals());
    }
  }]);

  return TableMuestras;
}(_react.PureComponent);

exports.TableMuestras = TableMuestras;

var TableMuestraRow =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(TableMuestraRow, _PureComponent2);

  function TableMuestraRow(props) {
    var _this3;

    _classCallCheck(this, TableMuestraRow);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(TableMuestraRow).call(this, props));

    _this3.onChange = function (ev, value) {
      if (ev.target.value === '') {
        value = null;
      }

      _this3.setState({
        value: value
      });

      _this3.props.onChange(Object.assign({}, _this3.props.muestra, {
        r: value
      }), false);
    };

    _this3.onBlur = function (ev, value) {
      if (ev.target.value === '') {
        value = null;
      }

      _this3.setState({
        value: value
      });

      _this3.props.onChange(Object.assign({}, _this3.props.muestra, {
        r: value
      }), true);
    };

    _this3.state = {
      value: props.muestra.r
    };
    return _this3;
  }

  _createClass(TableMuestraRow, [{
    key: "renderDiffPercent",
    value: function renderDiffPercent() {
      var muestra = this.props.muestra;
      var valor_diff = muestra.v - this.state.value;
      var retval = 100 * valor_diff / muestra.v;
      return parseInt(retval + '') === 0 ? 0 : accounting.formatNumber(retval);
    }
  }, {
    key: "render",
    value: function render() {
      var muestra = this.props.muestra;
      return React.createElement("tr", {
        key: muestra.cod
      }, React.createElement("td", null, this.props.index), React.createElement("td", null, muestra.cod), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(muestra.v)), React.createElement("td", {
        className: "right aligned"
      }, React.createElement(_InputAutoNumeric["default"], {
        isEditable: !this.props.readonly,
        value: this.state.value,
        onChange: this.onChange,
        onDrop: this.onChange,
        onBlur: this.onBlur
      })), React.createElement("td", {
        className: "right aligned"
      }, (0, _utis.isEmpty)(this.state.value) ? '' : accounting.formatNumber(muestra.v - this.state.value)), React.createElement("td", {
        className: "right aligned"
      }, (0, _utis.isEmpty)(this.state.value) ? '' : this.renderDiffPercent() + '%'));
    }
  }]);

  return TableMuestraRow;
}(_react.PureComponent);

var TableErrores = function TableErrores(props) {
  if (!_.size(props.muestras)) {
    return React.createElement("div", {
      className: "ui message success icon"
    }, React.createElement("i", {
      className: "icon large checkmark"
    }), React.createElement("div", {
      className: "content"
    }, React.createElement("div", {
      className: "header"
    }, "0 partidas con errores"), React.createElement("p", null, "No se hallaron partidas con error seg\xFAn auditor\xEDa.")));
  } else {
    var total_error_proyectado = 0;
    return React.createElement("table", {
      className: "ui table compact celled",
      id: "table-mum-muestraserradas"
    }, React.createElement("caption", null, "Partidas que contienen error seg\xFAn auditor\xEDa"), React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "C\xF3d."), React.createElement("th", null, "Valor en libros ($)"), React.createElement("th", null, "Valor en auditor\xEDa ($)"), React.createElement("th", null, "Error ($)"), React.createElement("th", null, "\xCDndice de Error (%)"), React.createElement("th", null, "Error proyectado al intervalo"))), React.createElement("tbody", null, _.map(props.muestras, function (muestra) {
      var error_proyectado = muestra.v > props.intervalo ? muestra.v - muestra.r : props.intervalo * ((muestra.v - muestra.r) / muestra.v);
      total_error_proyectado += error_proyectado;
      return React.createElement("tr", {
        key: muestra.cod,
        className: (0, _classnames["default"])({
          g2: muestra.v > props.intervalo
        })
      }, React.createElement("td", null, muestra.cod), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(muestra.v)), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(muestra.r)), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(muestra.v - muestra.r)), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(100 * (muestra.v - muestra.r) / muestra.v), "%"), React.createElement("td", {
        className: "right aligned"
      }, accounting.formatNumber(error_proyectado)));
    })), React.createElement("tfoot", null, React.createElement("tr", {
      className: "totals"
    }, React.createElement("td", null, _.size(props.muestras), " partidas"), React.createElement("td", {
      className: "right aligned",
      colSpan: 4
    }, "Total Error Proyectado"), React.createElement("td", {
      className: "right aligned"
    }, accounting.formatNumber(total_error_proyectado)))));
  }
};

exports.TableErrores = TableErrores;

var ConclusionTooltip = function ConclusionTooltip() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var onClick = function onClick(ev) {
    ev.preventDefault();
    setOpen(!open);
  };

  return React.createElement("div", null, React.createElement("a", {
    href: "#",
    style: {
      display: 'block',
      textAlign: 'right',
      marginBottom: 5
    },
    onClick: onClick
  }, React.createElement("i", {
    className: "info circle icon"
  }), " ", open ? 'Ocultar' : 'Mostrar', " sugerencia"), open && React.createElement("div", {
    className: "conclusion-tooltip",
    dangerouslySetInnerHTML: {
      __html: (0, _getValue["default"])(app.vars.texts, 'tooltip.muestreo.conclusion')
    }
  }), React.createElement("div", {
    className: "clearfix"
  }));
};

exports.ConclusionTooltip = ConclusionTooltip;

var FormFichaTecnica =
/*#__PURE__*/
function (_PureComponent3) {
  _inherits(FormFichaTecnica, _PureComponent3);

  function FormFichaTecnica() {
    var _this4;

    _classCallCheck(this, FormFichaTecnica);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(FormFichaTecnica).apply(this, arguments));
    _this4.formRef = (0, _react.createRef)();

    _this4.onClick = function (ev) {
      ev.preventDefault();
      ev.stopPropagation();

      if (_this4.props.isReadOnly) {
        $(_this4.formRef.current).submit();
      } else {
        bootbox.warningConfirm('¿Desea generar la ficha técnica para esta muestra?.<br><br>Tenga en cuenta que una vez generada la ficha técnica, esta muestra ya no podrá ser modificada.', 'Cancelar', 'Aceptar', function (r) {
          if (r) {
            $(_this4.formRef.current).submit();
            setTimeout(function () {
              location.reload();
            }, 1000);
          }
        });
      }
    };

    return _this4;
  }

  _createClass(FormFichaTecnica, [{
    key: "render",
    value: function render() {
      return React.createElement("form", {
        ref: this.formRef,
        "data-submit-block": "off",
        target: "_blank",
        action: url_for2("proyecto/:id_proyecto/paso/".concat(app.vars.idpaso, "/visita/").concat(this.props.id_visita, "/muestreo/").concat(this.props.id_muestreo, "/pdf.pdf")),
        method: "post",
        id: "fichatecnicaform"
      }, React.createElement("button", {
        type: "button",
        className: "btn btn-lg btn-warning",
        onClick: this.onClick
      }, React.createElement("span", {
        className: "icon-moon-file-pdf"
      }), " Ver Ficha T\xE9cnica"));
    }
  }]);

  return FormFichaTecnica;
}(_react.PureComponent);

exports.FormFichaTecnica = FormFichaTecnica;

/***/ }),

/***/ "./src/proyecto__muestreo/utils_mas.ts":
/*!*********************************************!*\
  !*** ./src/proyecto__muestreo/utils_mas.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generarMuestras = exports.calculateTamanoMuestra = void 0;

var calculateTamanoMuestra = function calculateTamanoMuestra(cf_n, cf_p, cf_z, cf_e) {
  var cf_q = Math.round((1 - cf_p) * 10) / 10;
  var n1 = cf_p * cf_q;
  var n2 = Math.abs(jStat.studentt.inv((1 - cf_z) / 2, 100000));
  var n3 = Math.pow(cf_e / 100 / n2, 2);
  var n4 = n1 / cf_n;
  return Math.round(n1 / (n3 + n4));
};

exports.calculateTamanoMuestra = calculateTamanoMuestra;

var generarMuestras = function generarMuestras(muestrasOriginal, tamano_muestra) {
  var muestras = _.clone(muestrasOriginal, true);

  muestras = _.shuffle(muestras);
  muestras = _.take(muestras, tamano_muestra);
  muestras = _.sortBy(muestras, 'cod');
  return muestras;
};

exports.generarMuestras = generarMuestras;

/***/ }),

/***/ "./src/proyecto__muestreo/utils_mum.ts":
/*!*********************************************!*\
  !*** ./src/proyecto__muestreo/utils_mum.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculatePrecision = exports.generarMuestras = exports.calculateTamanoMuestra = exports.calculateFactorConfianza = void 0;

var roundup2 = function roundup2(number) {
  var rounded_number = Math.round(number * 100) / 100;

  if (rounded_number < number) {
    rounded_number += 0.01;
  }

  return rounded_number;
};

var gammaInv = function gammaInv(probability, alpha) {
  return jStat.gamma.inv(probability, alpha, 1);
};

var calculateFactorConfianza = function calculateFactorConfianza(nivel_confianza) {
  return roundup2(gammaInv(nivel_confianza / 100, 1));
};

exports.calculateFactorConfianza = calculateFactorConfianza;

var calculateTamanoMuestra = function calculateTamanoMuestra(volumen_poblacion, factor_confianza, error_tolerable) {
  return Math.round(volumen_poblacion * factor_confianza / error_tolerable);
};

exports.calculateTamanoMuestra = calculateTamanoMuestra;

var generarMuestras = function generarMuestras(muestrasOriginal, tamano_muestra, intervalo) {
  var muestras = _.clone(muestrasOriginal, true);

  muestras = _.filter(muestras, function (item) {
    return item.v > 0;
  });

  var muestras_e = _.filter(muestras, function (item) {
    return item.v >= intervalo;
  });

  if (muestras_e.length > tamano_muestra) {
    muestras = _.take(_.sortBy(muestras_e, 'v'), tamano_muestra);
  } else {
    var muestras_s = _.filter(muestras, function (item) {
      return item.v < intervalo;
    });

    var volumen_s = 0;
    muestras_s.forEach(function (item) {
      volumen_s += item.v;
    });
    var tamano_muestra_s = tamano_muestra - muestras_e.length;
    var intervalo_s = volumen_s / tamano_muestra_s;
    var seed_s = Math.floor(Math.random() * intervalo_s) + 1;

    var muestras_s_tmp = _.shuffle(muestras_s);

    muestras_s = [];
    var interval_k = 0;
    var interval_acumulado = 0;

    for (var k in muestras_s_tmp) {
      if (interval_k >= tamano_muestra_s) {
        break;
      }

      var item = muestras_s_tmp[k];
      interval_acumulado += item.v;
      var acumulado_item = seed_s + interval_k * intervalo_s;

      if (interval_acumulado >= acumulado_item) {
        muestras_s.push(item);
        interval_k++;
      }
    }

    muestras = _.union(muestras_e, muestras_s);
  }

  muestras = _.sortBy(muestras, 'cod');
  return muestras;
};

exports.generarMuestras = generarMuestras;

var calculatePrecision = function calculatePrecision(muestras, intervalo, factor_confianza, nivel_confianza) {
  var hasMuestrasErradas = function hasMuestrasErradas(muestra) {
    var diff = muestra.v - muestra.r;
    return !isNaN(diff) && diff != 0;
  };

  if (!_.any(muestras, hasMuestrasErradas)) {
    return 0;
  }

  var riesgo_aceptacion = Math.floor(100 - nivel_confianza);
  var tolerancia_incremental = 0;
  var items_inferiores = [];

  _.each(muestras, function (muestra) {
    var diff = muestra.v - muestra.r;

    if (!isNaN(diff)) {
      if (diff == 0) {
        return;
      }

      var contaminacion = (muestra.v - muestra.r) / muestra.v;
      var error_proyectado = muestra.v > intervalo ? muestra.v - muestra.r : contaminacion * intervalo;

      if (muestra.v <= intervalo) {
        items_inferiores.push({
          error_proyectado: error_proyectado
        });
      }
    }
  });

  items_inferiores = _.sortBy(items_inferiores, 'error_proyectado').reverse();
  var total_error_proyectado_inferiores = 0;

  for (var k in items_inferiores) {
    var factor_incremental = roundup2(gammaInv(1 - riesgo_aceptacion / 100, 1 + parseInt(k) + 1));
    factor_incremental -= roundup2(gammaInv(1 - riesgo_aceptacion / 100, 1 + parseInt(k)));
    factor_incremental = Math.round(factor_incremental * 100) / 100;
    tolerancia_incremental += items_inferiores[k]['error_proyectado'] * factor_incremental;
    total_error_proyectado_inferiores += items_inferiores[k]['error_proyectado'];
  }

  var precision_basica = intervalo * factor_confianza;
  tolerancia_incremental -= total_error_proyectado_inferiores;
  return precision_basica + tolerancia_incremental;
};

exports.calculatePrecision = calculatePrecision;

/***/ }),

/***/ "./src/proyecto__muestreo/utis.ts":
/*!****************************************!*\
  !*** ./src/proyecto__muestreo/utis.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCacheAllMuestra = exports.cacheMuestra = exports.isEmpty = void 0;

var isEmpty = function isEmpty(value) {
  if (_.isNumber(value)) {
    return false;
  }

  return _.size(value) == 0;
};

exports.isEmpty = isEmpty;

var cacheMuestra = function cacheMuestra(muestra) {
  var cacheKey = "muestras_".concat(app.vars.ID_MUESTREO);
  var muestras;
  var muestrasBackup = localStorage.getItem(cacheKey);
  muestras = !muestrasBackup ? {} : JSON.parse(muestrasBackup);

  if (isEmpty(muestra.r)) {
    muestras = _.omit(muestras, muestra.cod);
  } else {
    muestras[muestra.cod] = parseFloat(muestra.r + '');
  }

  localStorage.setItem(cacheKey, JSON.stringify(muestras));
};

exports.cacheMuestra = cacheMuestra;

var getCacheAllMuestra = function getCacheAllMuestra() {
  var cacheKey = "muestras_".concat(app.vars.ID_MUESTREO);
  var muestras;
  var muestrasBackup = localStorage.getItem(cacheKey);
  muestras = !muestrasBackup ? {} : JSON.parse(muestrasBackup);
  return muestras;
};

exports.getCacheAllMuestra = getCacheAllMuestra;

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
//# sourceMappingURL=http://auditbrain.local/webapps/dist/proyecto__hoja_trabajo.js.map