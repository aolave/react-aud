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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		"proyecto__muestreo": 0
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
/******/ 	deferredModules.push(["./src/proyecto__muestreo/index.tsx","vendors~proyecto__muestreo"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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
      name: "pencil square",
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

    _this.onChange = function () {
      if (_this.props.inline) {
        _this.props.onSave(_this.ckeditorComp.editor, false, false);
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
        _this.props.onSave(_this.ckeditorComp.editor, true, false, function () {
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

      var ckeditor = _this.ckeditorComp;

      if (ckeditor != null) {
        _this.props.onSave(ckeditor.editor, false, true, function () {
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

      if (_this.props.openOnClickPreview) {
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

      var ckeditor = _this.ckeditorComp;

      if (ckeditor) {
        ckeditor.editor.setData(data);

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
    key: "assertRequired",
    value: function assertRequired() {
      if (!this.props.editable) {
        return false;
      }

      if (!this.props.required) {
        return false;
      }

      var ckeditor = this.ckeditorComp.editor;

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
          ckeditorOptions.removePlugins = 'elementspath,uploadimage,pastebase64,uploadfile,uploadfileab';
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
          var ckeditor_comp = self.ckeditorComp;

          if (ckeditor_comp) {
            self.props.onSave(ckeditor_comp.editor, false, false);
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
          name: "user circle",
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
          name: "user circle",
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

/***/ "./src/proyecto__muestreo/App.tsx":
/*!****************************************!*\
  !*** ./src/proyecto__muestreo/App.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _AppMuestreoMum = _interopRequireDefault(__webpack_require__(/*! ./AppMuestreoMum */ "./src/proyecto__muestreo/AppMuestreoMum.tsx"));

var _AppMuestreoMas = _interopRequireDefault(__webpack_require__(/*! ./AppMuestreoMas */ "./src/proyecto__muestreo/AppMuestreoMas.tsx"));

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

    _this.selectType = function (type) {
      _this.setState({
        type: type
      });
    };

    _this.state = {
      type: props.data.config.type
    };
    return _this;
  }

  _createClass(App, [{
    key: "renderSelect",
    value: function renderSelect() {
      var _this2 = this;

      return React.createElement(_react.Fragment, null, React.createElement("p", null, "D\xE9 click a continuaci\xF3n sobre el bot\xF3n con el m\xE9todo de muestreo que desea utilizar."), React.createElement("div", {
        style: {
          margin: 'auto',
          textAlign: 'center'
        }
      }, React.createElement("button", {
        onClick: function onClick() {
          return _this2.selectType('mum');
        },
        className: "btn btn-primary btn-large"
      }, "Muestreo por Unidad Monetaria (MUM)"), "|", React.createElement("button", {
        onClick: function onClick() {
          return _this2.selectType('mas');
        },
        className: "btn btn-primary btn-large"
      }, "Muestreo Aleatorio Simple (MAS)")), React.createElement("div", {
        id: "welcometip"
      }, React.createElement("h3", {
        id: "welcometip-header"
      }, React.createElement("span", {
        className: "icon-moon-help"
      }), " \xBFCual m\xE9todo de auditor\xEDa utilizar?"), React.createElement("div", {
        id: "welcometip-body"
      }, React.createElement("h5", {
        className: "welcometip-subtitle"
      }, "Muestreo por Unidad Monetaria (MUM)"), React.createElement("p", null, "M\xE9todo m\xE1s usado en el muestreo de auditor\xEDa debido que selecciona principalmente los elementos con valores m\xE1s elevados. Orientado a las cifras."), React.createElement("h5", {
        className: "welcometip-subtitle"
      }, "Muestreo Aleatorio Simple (MAS)"), React.createElement("p", null, "M\xE9todo gen\xE9rico apto para distintos tipos de poblaci\xF3n debido que las unidades de la muestra se seleccionan aleatoriamente con probabilidades iguales. Orientado a los atributos."))));
    }
  }, {
    key: "renderBody",
    value: function renderBody() {
      if (this.state.type === 'mum') {
        return React.createElement(_AppMuestreoMum["default"], {
          data: this.props.data.config
        });
      } else if (this.state.type === 'mas') {
        return React.createElement(_AppMuestreoMas["default"], {
          data: this.props.data.config
        });
      } else {
        return this.renderSelect();
      }
    }
  }, {
    key: "renderTypeTitle",
    value: function renderTypeTitle() {
      switch (this.state.type) {
        case 'mum':
          return React.createElement(_react.Fragment, null, React.createElement("strong", null, "Tipo de Muestreo:"), " MUM ", this.renderSwitchTypeAction());

        case 'mas':
          return React.createElement(_react.Fragment, null, React.createElement("strong", null, "Tipo de Muestreo:"), " MAS ", this.renderSwitchTypeAction());

        default:
          return null;
      }
    }
  }, {
    key: "renderSwitchTypeAction",
    value: function renderSwitchTypeAction() {
      var _this3 = this;

      var newType;

      switch (this.state.type) {
        case 'mas':
          newType = 'mum';
          break;

        case 'mum':
          newType = 'mas';
          break;
      }

      var onClick = function onClick(ev) {
        ev.preventDefault();

        _this3.setState({
          type: newType
        });

        $.blockUI(create_blockUI_loading_message('Guardando cambios'));
        $.post(url_for("proyecto_muestreo/".concat(app.vars.ID_MUESTREO, "/config")), {
          type: newType
        }).done(function () {
          $.unblockUI();
        });
      };

      return React.createElement("div", {
        className: "pull-right sf_admin_td_actions"
      }, React.createElement("div", {
        className: "btn-group dropdown-modern"
      }, React.createElement("a", {
        className: "btn btn-mini dropdown-toggle",
        style: {
          background: 'none',
          marginLeft: 10
        },
        "data-toggle": "dropdown",
        href: "#"
      }, React.createElement("span", {
        className: "icon-tc-ellipsis-v icon-large",
        style: {
          verticalAlign: 'top'
        }
      })), React.createElement("ul", {
        className: "dropdown-menu pull-right"
      }, React.createElement("li", null, React.createElement("a", {
        href: "#",
        onClick: onClick
      }, "Cambiar a ", newType.toUpperCase())))));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("header", {
        className: "main-content-header"
      }, React.createElement("span", {
        className: "pull-right"
      }, this.renderTypeTitle()), React.createElement("div", {
        className: "pull-left"
      }, React.createElement("span", {
        className: "muestreo-title-name"
      }, this.props.data.name)), React.createElement("div", {
        className: "clearfix"
      })), this.renderBody());
    }
  }]);

  return App;
}(_react.PureComponent);

exports["default"] = App;

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
    var Z = (0, _utis.isEmpty)(props.data.Z) ? 90 : parseFloat(props.data.Z);
    var E = (0, _utis.isEmpty)(props.data.E) ? muestras === null ? -1 : 5 : parseFloat(props.data.E);
    var P = (0, _utis.isEmpty)(props.data.P) ? 0.9 : parseFloat(props.data.P);
    var cf_1 = (0, _utis.isEmpty)(props.data.cf_1) ? (0, _utils_mas.calculateTamanoMuestra)(props.data.N, P, Z, _this.getErrorTolerable(E)) : parseFloat(props.data.cf_1);
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
      muestras: muestras == null ? _this.generarMuestras(cf_1) : _.map(muestras, function (muestra) {
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
    } else {
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
    key: "isReadOnly",
    value: function isReadOnly() {
      return !!this.props.data.ficha_tecnica_mas_date;
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
      })), this.isReadOnly() && React.createElement(_TableMuestra.FormFichaTecnica, {
        isReadOnly: true
      }));
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
        "data-percent": Math.floor(100 * progress / total)
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
      }))), this.renderNavigation(), !this.isReadOnly() && React.createElement(_TableMuestra.FormFichaTecnica, {
        isReadOnly: false
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var step = this.state.step;
      return React.createElement("div", {
        id: "mainpane-mas"
      }, this.isReadOnly() && React.createElement("div", {
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
    var Z2 = (0, _utis.isEmpty)(props.data.Z2) ? 90 : parseFloat(props.data.Z2);
    var E2 = (0, _utis.isEmpty)(props.data.E2) ? muestras === null ? -1 : 5 : parseFloat(props.data.E2);
    var error_maximo = (0, _utis.isEmpty)(props.data.e2__v2) ? props.data.M * E2 / 100 : parseFloat(props.data.e2__v2);
    var factor_confianza = (0, _utis.isEmpty)(props.data.cg2_1) ? (0, _utils_mum.calculateFactorConfianza)(Z2) : parseFloat(props.data.cg2_1);
    var tamano_muestra = (0, _utis.isEmpty)(props.data.cg2_3) ? (0, _utils_mum.calculateTamanoMuestra)(_this.props.data.M, factor_confianza, error_maximo) : parseFloat(props.data.cg2_3);
    var intervalo = (0, _utis.isEmpty)(props.data.cg2_4) ? Math.floor(_this.props.data.M / tamano_muestra) : parseFloat(props.data.cg2_4);
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
      muestras: muestras == null ? _this.generarMuestras(tamano_muestra, intervalo) : _.map(muestras, function (muestra) {
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
    } else {
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
    key: "isReadOnly",
    value: function isReadOnly() {
      return !!this.props.data.ficha_tecnica_mum_date;
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
      })), this.isReadOnly() && React.createElement(_TableMuestra.FormFichaTecnica, {
        isReadOnly: true
      }));
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
        "data-percent": Math.floor(100 * progress / total)
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
      }), React.createElement(_TableMuestra.ConclusionTooltip, null))), this.renderNavigation(), !this.isReadOnly() && React.createElement(_TableMuestra.FormFichaTecnica, {
        isReadOnly: false
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var step = this.state.step;
      return React.createElement("div", {
        id: "mainpane-mum"
      }, this.isReadOnly() && React.createElement("div", {
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

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
        action: url_for("proyecto/".concat(app.vars.idproyecto, "/paso/").concat(app.vars.idpaso, "/visita/").concat(app.vars.idvisita, "/muestreo/").concat(app.vars.ID_MUESTREO, "/pdf.pdf")),
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

/***/ "./src/proyecto__muestreo/index.tsx":
/*!******************************************!*\
  !*** ./src/proyecto__muestreo/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ "./src/proyecto__muestreo/App.tsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

accounting.settings.number.precision = 0;
accounting.settings.number.thousand = '.';
accounting.settings.number.decimal = ',';
$.unblockUI();
(0, _reactDom.render)(React.createElement(_App["default"], {
  data: app.vars.muestreo
}), document.getElementById('root'));

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
//# sourceMappingURL=http://auditbrain.local/webapps/dist/proyecto__muestreo.js.map