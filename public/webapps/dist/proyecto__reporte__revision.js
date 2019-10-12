var webpackLibs =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/proyecto__reporte/revision.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


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

/***/ "./src/proyecto__reporte/revision.tsx":
/*!********************************************!*\
  !*** ./src/proyecto__reporte/revision.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _react = __webpack_require__(/*! react */ "react");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _ErrorHandler = __webpack_require__(/*! ../global/ErrorHandler */ "./src/global/ErrorHandler.tsx");

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

var APP_TABS = ['visitas', 'periodos', 'riesgos', 'cifras'];

var App =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _this.onChangeTab = function (ev, tab) {
      ev.preventDefault();

      _this.setState({
        tab: tab
      });

      window.location.hash = '#!t-' + tab;
    };

    var defaultTab = window.location.hash.replace(/^#!t-/, '');
    _this.state = {
      tab: APP_TABS.includes(defaultTab) ? defaultTab : 'visitas'
    };
    return _this;
  }

  _createClass(App, [{
    key: "renderTabs",
    value: function renderTabs() {
      var _this2 = this;

      var tab = this.state.tab;
      return React.createElement("div", {
        className: "ui attached tabular menu"
      }, _.map(APP_TABS, function (_tab) {
        return React.createElement("a", {
          href: "#",
          key: _tab,
          onClick: function onClick(ev) {
            return _this2.onChangeTab(ev, _tab);
          },
          className: (0, _classnames["default"])('item tab-nav-item', {
            active: tab == _tab
          }),
          style: {
            width: '25%'
          }
        }, React.createElement("span", {
          className: "tabname"
        }, _tab == 'periodos' ? 'Periodos (Impuestos)' : _.str.titleize(_tab)));
      }));
    }
  }, {
    key: "renderTabpane",
    value: function renderTabpane() {
      switch (this.state.tab) {
        case 'visitas':
          return React.createElement(TabpaneVisita, {
            contents: app.vars.contents.visitas,
            showClosed: app.vars.filter_settings.showClosed
          });

        case 'periodos':
          return React.createElement(TabpanePeriodo, {
            contents: app.vars.contents.periodos,
            showClosed: app.vars.filter_settings.showClosed
          });

        case 'riesgos':
          return React.createElement(TabpaneRiesgo, {
            content: app.vars.contents.riesgos,
            showClosed: app.vars.filter_settings.showClosed
          });

        case 'cifras':
          return React.createElement(TabpaneCifra, {
            content: app.vars.contents.cifras,
            showClosed: app.vars.filter_settings.showClosed
          });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.renderTabs(), React.createElement("div", {
        className: "ui bottom attached tab segment active"
      }, this.renderTabpane()));
    }
  }]);

  return App;
}(_react.PureComponent);

var TabpaneVisita =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(TabpaneVisita, _PureComponent2);

  function TabpaneVisita(props) {
    var _this3;

    _classCallCheck(this, TabpaneVisita);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(TabpaneVisita).call(this, props));

    _this3.onChange = function (ev) {
      _this3.setState({
        selected: ev.target.value
      });
    };

    _this3.onChangeCheckbox = function (ev) {
      _this3.setState({
        showClosed: ev.target.checked
      });

      app.vars.filter_settings.showClosed = ev.target.checked;
    };

    _this3.state = {
      selected: _.size(app.vars.visitas) == 0 ? '' : _.first(app.vars.visitas).id,
      showClosed: _this3.props.showClosed,
      contents: _this3.props.contents
    };
    return _this3;
  }

  _createClass(TabpaneVisita, [{
    key: "loadContent",
    value: function loadContent() {
      var _this4 = this;

      var selected = this.state.selected;
      $.get(url_for("proyecto/".concat(app.vars.idproyecto, "/reportes/revisiones")), {
        id_visita: selected
      }).done(function (res) {
        _this4.setState(function (prevState) {
          var contents = Object.assign({}, prevState.contents);
          contents[selected] = res.response.revisiones;
          app.vars.contents.visitas = contents;
          return {
            contents: contents
          };
        });
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$state = this.state,
          selected = _this$state.selected,
          contents = _this$state.contents;

      if (!selected) {
        return;
      }

      if (typeof contents[selected] == 'undefined') {
        this.loadContent();
        return React.createElement(AppListLoader, null);
      }

      return React.createElement(AppList, {
        list: contents[selected],
        showClosed: this.state.showClosed,
        id_visita: selected,
        emptyText: "para esta visita"
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (_.size(app.vars.visitas) == 0) {
        return React.createElement("div", {
          className: "alert alert-block nocontent"
        }, React.createElement("p", null, "Este proyecto aun tiene visitas registradas."));
      }

      var selected = this.state.selected;
      return React.createElement("div", null, React.createElement("div", {
        className: "ui center aligned basic segment sf_admin_filters"
      }, React.createElement("label", {
        htmlFor: "visitas-select"
      }, "Seleccione la visita cuyas Notas de Revisi\xF3n desea visualizar:"), React.createElement("select", {
        id: "visitas-select",
        value: selected,
        className: "raw-select",
        onChange: this.onChange
      }, _.map(app.vars.visitas, function (visita) {
        return React.createElement("option", {
          key: visita.id,
          value: visita.id
        }, visita.name);
      })), React.createElement("div", null, React.createElement("label", {
        className: "inline"
      }, React.createElement("input", {
        type: "checkbox",
        checked: this.state.showClosed,
        onChange: this.onChangeCheckbox
      }), "\xBFIncluir notas revisadas?"))), React.createElement("div", {
        className: "ui basic segment"
      }, this.renderContent()));
    }
  }]);

  return TabpaneVisita;
}(_react.PureComponent);

var TabpanePeriodo =
/*#__PURE__*/
function (_PureComponent3) {
  _inherits(TabpanePeriodo, _PureComponent3);

  function TabpanePeriodo(props) {
    var _this5;

    _classCallCheck(this, TabpanePeriodo);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(TabpanePeriodo).call(this, props));

    _this5.onChange = function (ev) {
      _this5.setState({
        selected: ev.target.value
      });
    };

    _this5.onChangeCheckbox = function (ev) {
      _this5.setState({
        showClosed: ev.target.checked
      });

      app.vars.filter_settings.showClosed = ev.target.checked;
    };

    _this5.state = {
      selected: _.size(app.vars.pasos_periodos) == 0 ? '' : 'i' + _.first(app.vars.pasos_periodos).id,
      contents: _this5.props.contents,
      showClosed: _this5.props.showClosed
    };
    return _this5;
  }

  _createClass(TabpanePeriodo, [{
    key: "loadContent",
    value: function loadContent() {
      var _this6 = this;

      var selected = this.state.selected;
      $.get(url_for("proyecto/".concat(app.vars.idproyecto, "/reportes/revisiones")), {
        id_visita: selected
      }).done(function (res) {
        _this6.setState(function (prevState) {
          var contents = Object.assign({}, prevState.contents);
          contents[selected] = res.response.revisiones;
          app.vars.contents.periodos = contents;
          return {
            contents: contents
          };
        });
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$state2 = this.state,
          selected = _this$state2.selected,
          contents = _this$state2.contents;

      if (!selected) {
        return;
      }

      if (typeof contents[selected] == 'undefined') {
        this.loadContent();
        return React.createElement(AppListLoader, null);
      }

      return React.createElement(AppList, {
        list: contents[selected],
        showClosed: this.state.showClosed,
        id_visita: selected,
        emptyText: "para este paso"
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (_.size(app.vars.pasos_periodos) == 0) {
        return React.createElement("div", {
          className: "alert alert-block nocontent"
        }, React.createElement("p", null, "Este proyecto aun no tiene pasos de tipo PERIODO (impuestos) creados."));
      }

      var selected = this.state.selected;
      return React.createElement("div", null, React.createElement("div", {
        className: "ui center aligned basic segment sf_admin_filters"
      }, React.createElement("label", {
        htmlFor: "pasos-select"
      }, "Seleccione el paso de tipo PERIODO (Impuestos) cuyas Notas de Revisi\xF3n desea visualizar:"), React.createElement("select", {
        id: "pasos-select",
        value: selected,
        className: "raw-select",
        onChange: this.onChange,
        style: {
          width: 'auto'
        }
      }, _.map(app.vars.pasos_periodos, function (paso) {
        return React.createElement("option", {
          key: paso.id,
          value: "i".concat(paso.id)
        }, paso.MasterDataFase.descripcion, " > ", paso.descripcion);
      })), React.createElement("div", null, React.createElement("label", {
        className: "inline"
      }, React.createElement("input", {
        type: "checkbox",
        checked: this.state.showClosed,
        onChange: this.onChangeCheckbox
      }), "\xBFIncluir notas revisadas?"))), React.createElement("div", {
        className: "ui basic segment"
      }, this.renderContent()));
    }
  }]);

  return TabpanePeriodo;
}(_react.PureComponent);

var TabpaneRiesgo =
/*#__PURE__*/
function (_PureComponent4) {
  _inherits(TabpaneRiesgo, _PureComponent4);

  function TabpaneRiesgo(props) {
    var _this7;

    _classCallCheck(this, TabpaneRiesgo);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(TabpaneRiesgo).call(this, props));

    _this7.onChangeCheckbox = function (ev) {
      _this7.setState({
        showClosed: ev.target.checked
      });

      app.vars.filter_settings.showClosed = ev.target.checked;
    };

    _this7.state = {
      content: _this7.props.content,
      showClosed: _this7.props.showClosed
    };
    return _this7;
  }

  _createClass(TabpaneRiesgo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.content === null) {
        this.loadContent();
      }
    }
  }, {
    key: "loadContent",
    value: function loadContent() {
      var _this8 = this;

      $.get(url_for("proyecto/".concat(app.vars.idproyecto, "/reportes/revisiones")), {
        id_visita: 'r'
      }).done(function (res) {
        _this8.setState({
          content: res.response.revisiones
        });

        app.vars.contents.riesgos = res.response.revisiones;
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var content = this.state.content;

      if (content === null) {
        return React.createElement(AppListLoader, null);
      } else {
        return React.createElement(AppList, {
          list: content,
          showClosed: this.state.showClosed,
          id_visita: "r",
          emptyText: "asociados a los Riesgos"
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", {
        className: "ui center aligned basic segment sf_admin_filters"
      }, React.createElement("div", null, React.createElement("label", {
        className: "inline"
      }, React.createElement("input", {
        type: "checkbox",
        checked: this.state.showClosed,
        onChange: this.onChangeCheckbox
      }), "\xBFIncluir notas revisadas?"))), React.createElement("div", {
        className: "ui basic segment"
      }, this.renderContent()));
    }
  }]);

  return TabpaneRiesgo;
}(_react.PureComponent);

var TabpaneCifra =
/*#__PURE__*/
function (_PureComponent5) {
  _inherits(TabpaneCifra, _PureComponent5);

  function TabpaneCifra(props) {
    var _this9;

    _classCallCheck(this, TabpaneCifra);

    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(TabpaneCifra).call(this, props));

    _this9.onChangeCheckbox = function (ev) {
      _this9.setState({
        showClosed: ev.target.checked
      });

      app.vars.filter_settings.showClosed = ev.target.checked;
    };

    _this9.state = {
      content: _this9.props.content,
      showClosed: _this9.props.showClosed
    };
    return _this9;
  }

  _createClass(TabpaneCifra, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.content === null) {
        this.loadContent();
      }
    }
  }, {
    key: "loadContent",
    value: function loadContent() {
      var _this10 = this;

      $.get(url_for("proyecto/".concat(app.vars.idproyecto, "/reportes/revisiones")), {
        id_visita: 'c'
      }).done(function (res) {
        _this10.setState({
          content: res.response.revisiones
        });

        app.vars.contents.cifras = res.response.revisiones;
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var content = this.state.content;

      if (content === null) {
        return React.createElement(AppListLoader, null);
      } else {
        return React.createElement(AppList, {
          list: content,
          showClosed: this.state.showClosed,
          id_visita: "r",
          emptyText: "asociados a las Sumarias"
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", {
        className: "ui center aligned basic segment sf_admin_filters"
      }, React.createElement("div", null, React.createElement("label", {
        className: "inline"
      }, React.createElement("input", {
        type: "checkbox",
        checked: this.state.showClosed,
        onChange: this.onChangeCheckbox
      }), "\xBFIncluir notas revisadas?"))), React.createElement("div", {
        className: "ui basic segment"
      }, this.renderContent()));
    }
  }]);

  return TabpaneCifra;
}(_react.PureComponent);

var AppListLoader = function AppListLoader() {
  return React.createElement("div", {
    className: "ui active centered inline text loader"
  }, "Cargando Notas de Revisi\xF3n");
};

var AppList = function AppList(props) {
  var id_visita = props.id_visita,
      emptyText = props.emptyText,
      showClosed = props.showClosed;
  var list = props.list;

  if (!showClosed) {
    list = _.reduce(list, function (accumulator, rubro) {
      var revisiones = _.reject(rubro.revisiones, function (revision) {
        return revision.status == 'REVISADO';
      });

      if (_.size(revisiones) > 0) {
        accumulator.push(rubro);
      }

      return accumulator;
    }, []);
  }

  if (_.size(list) == 0) {
    return React.createElement("div", {
      className: "alert alert-block nocontent"
    }, React.createElement("h3", null, "0 Notas de Revisi\xF3n"), React.createElement("p", null, "Este proyecto no cuentas con Notas de Revisi\xF3n registrados ", emptyText, "."));
  }

  var badge = _.reduce(list, function (accumulator, rubro) {
    return accumulator + _.size(rubro.revisiones);
  }, 0);

  return React.createElement(_ErrorHandler.DefaultErrorHandler, null, React.createElement("div", {
    className: "container reporte-container-list"
  }, _.map(list, function (rubro, k) {
    return React.createElement("div", {
      className: "revision_rubro_container",
      key: k,
      style: {
        position: 'relative'
      }
    }, React.createElement("h4", {
      className: "title1"
    }, rubro.info.descripcion, React.createElement("span", {
      className: "badge"
    }, badge)), rubro.info.url && React.createElement("div", {
      style: {
        marginLeft: 20,
        fontSize: 'smaller'
      },
      className: "revision_paso_actions"
    }, React.createElement("a", {
      href: url_for(rubro.info.url),
      target: "_blank"
    }, rubro.info.urlText)), id_visita.substr(0, 1) == 'p' && React.createElement("div", {
      className: "watermark-text"
    }, "A\xF1o Anterior"), _.map(rubro.revisiones, function (revision, jj) {
      if (!showClosed && revision.status == 'REVISADO') {
        return null;
      }

      return React.createElement("div", {
        key: jj,
        className: (0, _classnames["default"])('revision status-' + _.str.dasherize(revision.status.toLowerCase()))
      }, React.createElement("h6", {
        style: {
          borderBottom: '1px solid #49858cd1'
        }
      }, "Nota #", revision.name, React.createElement("span", {
        style: {
          fontSize: 10,
          marginLeft: 10
        }
      }, "[", revision.status, "]")), React.createElement("blockquote", null, React.createElement("div", {
        style: {
          marginLeft: 20
        },
        dangerouslySetInnerHTML: {
          __html: revision.description
        }
      }), React.createElement("div", {
        className: "author"
      }, "\u2014 Preparado por: ", revision.Creator.sigla, " (", Date.create(revision.created_at).format('{d}/{MM}/{yy}'), ")"), _.size(revision.Comments) > 0 && React.createElement("div", {
        className: "comments"
      }, _.map(revision.Comments, function (comment) {
        var comentario = comment.comentario;

        if (comment.status == 'COMPLETADO') {
          comentario = '<small>[COMPLETADO]</small> ' + comentario;
        } else if (comment.status == 'REVISADO') {
          comentario = '<small>[REVISADO]</small> ' + comentario;
        }

        return React.createElement("blockquote", {
          key: comment.id,
          className: "comment ".concat(comment.status || '')
        }, React.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: comentario
          }
        }), React.createElement("div", {
          className: "author"
        }, "\u2014 ", comment.Creator.User.sigla, "(", Date.create(comment.Creator.ts).format('{d}/{MM}/{year}'), ")"));
      }))));
    }));
  }), React.createElement("div", {
    className: "ui basic center aligned segment"
  }, React.createElement("form", {
    action: url_for2("proyecto/:id_proyecto/reportes/revisiones"),
    target: "_blank"
  }, React.createElement("input", {
    type: "hidden",
    name: "id_visita",
    value: id_visita
  }), React.createElement("input", {
    type: "hidden",
    name: "showClosed",
    value: showClosed ? 1 : 0
  }), React.createElement("input", {
    type: "hidden",
    name: "sf_format",
    value: "pdf"
  }), React.createElement("button", {
    className: "btn btn-large btn-save",
    style: {
      backgroundColor: '#0b858d'
    }
  }, "Exportar como PDF")))));
};

$.unblockUI();
(0, _reactDom.render)(React.createElement(App, null), document.getElementById('root'));

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
//# sourceMappingURL=http://auditbrain.local/webapps/dist/proyecto__reporte__revision.js.map