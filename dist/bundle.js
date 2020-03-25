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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./js/input.js\");\n/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square */ \"./js/square.js\");\n// @lesnock/simple-store\n\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/input.js":
/*!*********************!*\
  !*** ./js/input.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./js/store.js\");\n\nconst input = document.querySelector('.input');\ninput.value = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('inputValue') || null;\ninput.style.background = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('inputColor') || '#FFF';\ninput.addEventListener('input', event => {\n  _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update('inputValue', event.target.value);\n});\n_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen('inputColor', color => {\n  input.style.background = color;\n});\n\n//# sourceURL=webpack:///./js/input.js?");

/***/ }),

/***/ "./js/square.js":
/*!**********************!*\
  !*** ./js/square.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./js/store.js\");\n\nconst square = document.querySelector('.square');\nsquare.innerHTML = _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('inputValue') || null;\n_store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen('inputValue', (value, oldValue) => {\n  square.innerHTML = value;\n});\nsquare.addEventListener('click', event => {\n  _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"].update('inputColor', '#CCC');\n});\n\n//# sourceURL=webpack:///./js/square.js?");

/***/ }),

/***/ "./js/store.js":
/*!*********************!*\
  !*** ./js/store.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lesnock_simple_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lesnock/simple-store */ \"./node_modules/@lesnock/simple-store/build/index.js\");\n/* harmony import */ var _lesnock_simple_store__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesnock_simple_store__WEBPACK_IMPORTED_MODULE_0__);\n // localStorage\n\nconst store = new _lesnock_simple_store__WEBPACK_IMPORTED_MODULE_0___default.a({\n  persist: true\n}); // Add initial data\n\n!store.has('inputValue') && store.add('inputValue', '123');\n!store.has('inputColor') && store.add('inputColor', '#FFF');\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./js/store.js?");

/***/ }),

/***/ "./node_modules/@lesnock/simple-store/build/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@lesnock/simple-store/build/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _persist = __webpack_require__(/*! ./persist */ \"./node_modules/@lesnock/simple-store/build/persist.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Store = function () {\n  function Store() {\n    var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Store);\n\n    this.data = new Map();\n    this.effects = new Map();\n    this.configs = new Map(Object.entries({\n      persist: false,\n      allowExistingData: false\n    }));\n\n    this.setConfigs(configs);\n\n    if (this.configs.get('persist') === true && !this.isRunningOnNode()) {\n      this.data = (0, _persist.getPersistedData)();\n    }\n  }\n\n  _createClass(Store, [{\n    key: 'setConfigs',\n    value: function setConfigs() {\n      var _this = this;\n\n      var configurations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n      if ((typeof configurations === 'undefined' ? 'undefined' : _typeof(configurations)) !== 'object') {\n        throw new TypeError('Configuration should be an object');\n      }\n\n      Object.keys(configurations).forEach(function (key) {\n        return _this.configs.set(key, configurations[key]);\n      });\n    }\n  }, {\n    key: 'isRunningOnNode',\n    value: function isRunningOnNode() {\n      return typeof window === 'undefined';\n    }\n\n    /**\n    * Add some data key to the store\n    * @param {String} name - Name of the key for store data\n    * @param {Any} value - Initial value of the data\n    * @param {Function} [effect] - Effect to run when data is updated\n    */\n\n  }, {\n    key: 'add',\n    value: function add(name, value, effect) {\n      if (typeof name !== 'string') {\n        throw new Error('Name of the store key data should be a string');\n      }\n\n      if (this.configs.get('allowExistingData') === false && this.data.has(name)) {\n        throw new Error(name + ' already exists in the store');\n      }\n\n      this.data.set(name, value);\n\n      if (effect) {\n        this.listen(name, effect);\n      }\n\n      // Persist data via localStorage\n      if (this.configs.get('persist') === true && !this.isRunningOnNode()) {\n        (0, _persist.persistData)(this.data);\n      }\n    }\n\n    /**\n     * Get some data from store\n     * @param {String} name\n     */\n\n  }, {\n    key: 'get',\n    value: function get(name) {\n      if (!this.data.has(name)) {\n        return undefined;\n      }\n\n      return this.data.get(name);\n    }\n\n    /**\n     * Get all data from store\n     */\n\n  }, {\n    key: 'all',\n    value: function all() {\n      var object = {};\n      this.data.forEach(function (value, key) {\n        object[key] = value;\n      });\n\n      return object;\n    }\n\n    /**\n     * Get specified data from the store\n     * @param {Array} fields - Fields for get from the store\n     */\n\n  }, {\n    key: 'only',\n    value: function only() {\n      var _this2 = this;\n\n      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      if (!Array.isArray(fields)) {\n        throw new Error('The only method should only receive an array as argument');\n      }\n\n      var filteredObject = {};\n\n      fields.forEach(function (field) {\n        filteredObject[field] = _this2.get(field);\n      });\n\n      return filteredObject;\n    }\n\n    /**\n     * Verify if a data exists in the store\n     * @param {String} name\n     */\n\n  }, {\n    key: 'has',\n    value: function has(name) {\n      return this.data.has(name);\n    }\n\n    /**\n    * Update data in the store and run the effects\n    * @param {*} name - Name of the data to update value\n    * @param {*} value - Value to be updated\n    */\n\n  }, {\n    key: 'update',\n    value: function update(name, value) {\n      if (!this.data.has(name)) {\n        throw new Error(name + ' does not exists in the store');\n      }\n\n      var oldValue = this.data.get(name);\n      this.data.set(name, value);\n\n      // Run effects\n      this.runEffects(name, value, oldValue);\n\n      // Perist data via localStorage\n      if (this.configs.get('persist') === true && !this.isRunningOnNode()) {\n        (0, _persist.persistData)(this.data);\n      }\n    }\n\n    /**\n    * Delete some data in the store\n    * @param {String} name - Name of data to be deleted\n    */\n\n  }, {\n    key: 'delete',\n    value: function _delete(name) {\n      if (!this.data.has(name)) {\n        throw new Error(name + ' does not exists in the store');\n      }\n\n      this.data.delete(name);\n\n      // Perist data via localStorage\n      if (this.configs.get('persist') === true && !this.isRunningOnNode()) {\n        (0, _persist.persistData)(this.data);\n      }\n    }\n\n    /**\n    * Bind an effect to a data in the store\n    * @param {String} name - Name of the data where the effect will be binded\n    * @param {Function} callback - Effect to run when data updated\n    */\n\n  }, {\n    key: 'listen',\n    value: function listen(name, callback) {\n      if (!this.data.has(name)) {\n        throw new Error(name + ' does not exists in the store');\n      }\n\n      if (!this.effects.has(name)) {\n        this.effects.set(name, []);\n      }\n\n      var currentEffects = this.effects.get(name);\n      this.effects.set(name, [].concat(_toConsumableArray(currentEffects), [callback]));\n    }\n\n    /**\n    * Bind an effect to a data in the store\n    * @param {String} name - Name of the data where the effect will be binded\n    * @param {Function} callback - Effect to run when data updated\n    */\n\n  }, {\n    key: 'bindEffect',\n    value: function bindEffect(name, callback) {\n      this.listen(name, callback);\n    }\n\n    /**\n    * Run effects of some data change in the store\n    * @param {String} name - Name of the data\n    * @param {Any} value - New value\n    * @param {Any} oldValue - Old value of that data\n    */\n\n  }, {\n    key: 'runEffects',\n    value: function runEffects(name, value, oldValue) {\n      if (this.effects.has(name)) {\n        this.effects.get(name).forEach(function (callback) {\n          callback(value, oldValue);\n        });\n      }\n    }\n  }]);\n\n  return Store;\n}();\n\nexports.default = Store;\n\n//# sourceURL=webpack:///./node_modules/@lesnock/simple-store/build/index.js?");

/***/ }),

/***/ "./node_modules/@lesnock/simple-store/build/persist.js":
/*!*************************************************************!*\
  !*** ./node_modules/@lesnock/simple-store/build/persist.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.persistData = persistData;\nexports.getPersistedData = getPersistedData;\nvar storageKey = 'simple-store-data';\n\n/**\r\n * Set some store data to the localStorage\r\n * @param {Any} storeData\r\n */\nfunction persistData(storeData) {\n  var object = {};\n  storeData.forEach(function (value, key) {\n    object[key] = value;\n  });\n\n  var dataJSON = JSON.stringify(object);\n  localStorage.setItem(storageKey, dataJSON);\n}\n\n/**\r\n * Get store data from localStorage\r\n */\nfunction getPersistedData() {\n  if (localStorage.getItem(storageKey)) {\n    var parsedJson = JSON.parse(localStorage.getItem(storageKey));\n    var map = new Map();\n\n    Object.keys(parsedJson).forEach(function (value, key) {\n      map[key] = value;\n    });\n    return new Map(Object.entries(parsedJson));\n  }\n\n  return new Map();\n}\n\n//# sourceURL=webpack:///./node_modules/@lesnock/simple-store/build/persist.js?");

/***/ })

/******/ });