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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/proyecto__reporte/hallazgo.tsx");
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

/***/ "./src/proyecto__reporte/hallazgo.tsx":
/*!********************************************!*\
  !*** ./src/proyecto__reporte/hallazgo.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _react = __webpack_require__(/*! react */ "react");

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
      tab: ['visitas', 'riesgos', 'periodos'].includes(defaultTab) ? defaultTab : 'visitas'
    };
    return _this;
  }

  _createClass(App, [{
    key: "renderTabs",
    value: function renderTabs() {
      var _this2 = this;

      var tab = this.state.tab;
      var tabs = ['visitas', 'periodos', 'riesgos'];
      return React.createElement("div", {
        className: "ui attached tabular menu"
      }, _.map(tabs, function (_tab) {
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
            width: '33.33%'
          }
        }, React.createElement("span", {
          className: "tabname"
        }, _tab == 'periodos' ? 'Periodos (Impuestos)' : _.str.titleize(_tab)));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var tab = this.state.tab;
      return React.createElement("div", null, this.renderTabs(), React.createElement("div", {
        className: "ui bottom attached tab segment active"
      }, React.createElement("div", {
        style: {
          display: tab == 'visitas' ? 'block' : 'none'
        }
      }, React.createElement(TabpaneVisita, null)), React.createElement("div", {
        style: {
          display: tab == 'periodos' ? 'block' : 'none'
        }
      }, React.createElement(TabpanePeriodo, null)), React.createElement("div", {
        style: {
          display: tab == 'riesgos' ? 'block' : 'none'
        }
      }, React.createElement(TabpaneRiesgo, null))));
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

    _this3.state = {
      selected: _.size(app.vars.visitas) == 0 ? '' : _.first(app.vars.visitas).id,
      contents: {}
    };
    return _this3;
  }

  _createClass(TabpaneVisita, [{
    key: "loadContent",
    value: function loadContent() {
      var _this4 = this;

      var selected = this.state.selected;
      $.get(url_for("proyecto/".concat(app.vars.idproyecto, "/reportes/hallazgos")), {
        id_visita: selected
      }).done(function (res) {
        _this4.setState(function (prevState) {
          var contents = Object.assign({}, prevState.contents);
          contents[selected] = res.response.hallazgos;
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
        return React.createElement("div", {
          className: "ui active centered inline text loader"
        }, "Cargando Hallazgos");
      }

      return React.createElement(HallazgList, {
        list: contents[selected],
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
      }, "Seleccione la visita cuyos hallazgos registrados desea visualizar:"), React.createElement("select", {
        id: "visitas-select",
        value: selected,
        className: "raw-select",
        onChange: this.onChange
      }, _.map(app.vars.visitas, function (visita) {
        return React.createElement("option", {
          key: visita.id,
          value: visita.id
        }, visita.name);
      }))), React.createElement("div", {
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

    _this5.state = {
      selected: _.size(app.vars.pasos_periodos) == 0 ? '' : 'i' + _.first(app.vars.pasos_periodos).id,
      contents: {}
    };
    return _this5;
  }

  _createClass(TabpanePeriodo, [{
    key: "loadContent",
    value: function loadContent() {
      var _this6 = this;

      var selected = this.state.selected;
      $.get(url_for("proyecto/".concat(app.vars.idproyecto, "/reportes/hallazgos")), {
        id_visita: selected
      }).done(function (res) {
        _this6.setState(function (prevState) {
          var contents = Object.assign({}, prevState.contents);
          contents[selected] = res.response.hallazgos;
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
        return React.createElement("div", {
          className: "ui active centered inline text loader"
        }, "Cargando Hallazgo");
      }

      return React.createElement(HallazgList, {
        list: contents[selected],
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
      }, "Seleccione el paso de tipo PERIODO (Impuestos) cuyos hallazgos registrados desea visualizar:"), React.createElement("select", {
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
      }))), React.createElement("div", {
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

  function TabpaneRiesgo() {
    var _this7;

    _classCallCheck(this, TabpaneRiesgo);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(TabpaneRiesgo).apply(this, arguments));
    _this7.state = {
      content: null
    };
    return _this7;
  }

  _createClass(TabpaneRiesgo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadContent();
    }
  }, {
    key: "loadContent",
    value: function loadContent() {
      var _this8 = this;

      $.get(url_for("proyecto/".concat(app.vars.idproyecto, "/reportes/hallazgos")), {
        id_visita: 'r'
      }).done(function (res) {
        _this8.setState({
          content: res.response.hallazgos
        });
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var content = this.state.content;

      if (content === null) {
        return React.createElement("div", {
          className: "ui active centered inline text loader"
        }, "Cargando Hallazgo");
      } else {
        return React.createElement(HallazgList, {
          list: content,
          id_visita: "r",
          emptyText: "asociados a los Riesgos"
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", {
        className: "ui basic segment"
      }, this.renderContent()));
    }
  }]);

  return TabpaneRiesgo;
}(_react.PureComponent);

var HallazgList = function HallazgList(props) {
  var list = props.list,
      id_visita = props.id_visita,
      emptyText = props.emptyText;

  if (_.size(list) == 0) {
    return React.createElement("div", {
      className: "alert alert-block nocontent"
    }, React.createElement("h3", null, "0 Hallazgos"), React.createElement("p", null, "Este proyecto no tiene aun hallazgos registrados ", emptyText, "."));
  }

  var formatImplementado = function formatImplementado(value) {
    if (value == null || '' + value == '') {
      return 'Pendiente';
    } else if (value == '0') {
      return 'En Proceso';
    } else {
      return 'Hecho';
    }
  };

  return React.createElement("div", {
    className: "container reporte-container-list"
  }, _.map(list, function (rubro, k) {
    return React.createElement("div", {
      className: "hallazgo_rubro_container",
      key: k,
      style: {
        position: 'relative'
      }
    }, React.createElement("h4", {
      className: "title1"
    }, rubro.info.descripcion, React.createElement("span", {
      className: "badge"
    }, rubro.badge)), rubro.info.url && React.createElement("div", {
      style: {
        marginLeft: 20,
        fontSize: 'smaller'
      },
      className: "hallazgo_paso_actions"
    }, React.createElement("a", {
      href: url_for(rubro.info.url),
      target: "_blank"
    }, rubro.info.urlText)), id_visita.substr(0, 1) == 'p' && React.createElement("div", {
      className: "watermark-text"
    }, "A\xF1o Anterior"), _.map(rubro.pasos, function (paso, j) {
      return React.createElement("div", {
        style: {
          marginLeft: 10,
          padding: 5
        },
        key: j,
        className: "hallazgo_paso_container"
      }, paso.info && paso.info.descripcion && React.createElement("h5", {
        className: "title2"
      }, paso.info.descripcion, React.createElement("span", {
        className: "badge"
      }, _.size(paso.hallazgos)), React.createElement("div", {
        style: {
          marginLeft: 20,
          fontSize: 'smaller'
        },
        className: "hallazgo_paso_actions"
      }, React.createElement("a", {
        href: url_for2('proyecto/:id_proyecto/master_data/paso/:id_paso?id_visita=:id_visita', {
          id_paso: paso.id_paso || paso.info.id,
          id_visita: paso.id_visita || id_visita
        }),
        target: "_blank"
      }, "Ir a Hoja de Trabajo"))), React.createElement("div", {
        style: {
          marginLeft: 10
        }
      }, _.map(paso.hallazgos, function (hallazgo, jj) {
        return React.createElement("table", {
          className: "ui compact basic table",
          key: jj
        }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", {
          colSpan: 3
        }, React.createElement("strong", {
          style: {
            color: '#a8cf45'
          }
        }, "Hallazgo #", hallazgo.name))), React.createElement("tr", null, React.createElement("td", {
          colSpan: 3
        }, React.createElement("div", {
          style: {
            marginLeft: 20,
            minHeight: 40
          },
          dangerouslySetInnerHTML: {
            __html: hallazgo.hallazgo
          }
        }))), React.createElement("tr", null, React.createElement("td", {
          colSpan: 3
        }, React.createElement("strong", null, "Plan de Acci\xF3n:"))), React.createElement("tr", null, React.createElement("td", {
          colSpan: 3
        }, React.createElement("div", {
          style: {
            marginLeft: 20,
            minHeight: 40
          },
          dangerouslySetInnerHTML: {
            __html: hallazgo.plan_accion
          }
        }))), React.createElement("tr", null, React.createElement("td", null, React.createElement("strong", null, "Responsable:"), " ", hallazgo.responsable), React.createElement("td", null, React.createElement("strong", null, "Fecha Implementaci\xF3n:"), " ", hallazgo.fecha_implementacion), React.createElement("td", null, React.createElement("strong", null, "Estado:"), " ", formatImplementado(hallazgo.implementado)))));
      })));
    }));
  }), React.createElement("div", {
    className: "ui basic center aligned segment"
  }, React.createElement("form", {
    action: url_for2("proyecto/:id_proyecto/reportes/hallazgos?id_visita=".concat(id_visita)),
    method: "post",
    target: "_blank"
  }, React.createElement("button", {
    className: "btn btn-large btn-save",
    style: {
      backgroundColor: '#2B569A'
    }
  }, "Exportar como Word"))));
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
//# sourceMappingURL=http://auditbrain.local/webapps/dist/proyecto__reporte__hallazgo.js.map