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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/freshchat/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/freshchat/index.tsx":
/*!*********************************!*\
  !*** ./src/freshchat/index.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InitFreshChat =
/*#__PURE__*/
function () {
  function InitFreshChat(restoreId) {
    _classCallCheck(this, InitFreshChat);

    this.restoreId = restoreId;
  }

  _createClass(InitFreshChat, [{
    key: "chat",
    value: function chat() {
      var api = app.vars.freshchat.api;
      window.fcSettings = {
        token: api.token,
        host: api.host,
        externalId: api.externalId,
        restoreId: this.restoreId ? this.restoreId : null,
        open: api.open,
        config: {
          disableEvents: false,
          cssNames: {
            widget: 'fc_frame',
            open: 'fc_open',
            expanded: 'fc_expanded'
          },
          showFAQOnOpen: true,
          hideFAQ: true,
          agent: {
            hideName: false,
            hidePic: true,
            hideBio: true
          },
          headerProperty: {
            backgroundColor: '#45a4ec',
            foregroundColor: '#ffffff',
            hideChatButton: false,
            direction: 'ltr'
          }
        },
        onInit: function onInit() {
          var users = app.vars.freshchat.user;
          var url = url_for("freshchat/".concat(users.idUser, "/save"));
          window.fcWidget.user.get(function (resp) {
            var status = resp.status;

            if (status !== 200) {
              window.fcWidget.user.setProperties({
                firstName: users.firstName,
                lastName: users.lastName,
                email: users.email,
                phone: users.phoneNumber,
                phoneCountryCode: users.phoneCode,
                plan: users.plan,
                status: users.status
              });
              window.fcWidget.on('user:created', function (resp) {
                var status = resp.status;
                var data = resp.data;

                if (status === 200) {
                  if (data.restoreId) {
                    $.post(url, {
                      user: users.idUser,
                      restoreId: data.restoreId
                    }, $.noop, 'json');
                  }
                }
              });
            }
          });
        }
      };
      return this.restoreId;
    }
  }]);

  return InitFreshChat;
}();

var initpreshchat = new InitFreshChat(app.vars.freshchat.restoreId);
initpreshchat.chat();

/***/ })

/******/ });
//# sourceMappingURL=http://auditbrain.local/webapps/dist/freshchat.js.map