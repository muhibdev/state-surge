(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("StateFull", [], factory);
	else if(typeof exports === 'object')
		exports["StateFull"] = factory();
	else
		root["StateFull"] = factory();
})(typeof self !== 'undefined' ? self : this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Configration.ts":
/*!*****************************!*\
  !*** ./src/Configration.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REGEX": () => (/* binding */ REGEX),
/* harmony export */   "REGEX_SIGN": () => (/* binding */ REGEX_SIGN)
/* harmony export */ });
var REGEX_SIGN = /\{\{(.*?)\}\}/g;
var REGEX = new RegExp(REGEX_SIGN, "g");

/***/ }),

/***/ "./src/Element/Collection.ts":
/*!***********************************!*\
  !*** ./src/Element/Collection.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Utils_DOM_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/DOM.ts */ "./src/Utils/DOM.ts");
/* harmony import */ var _index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.ts */ "./src/Element/index.ts");
/* harmony import */ var _Utils_helper_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/helper.ts */ "./src/Utils/helper.ts");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
// @ts-ignore

// @ts-ignore

// @ts-ignore

var _state = /*#__PURE__*/new WeakMap();
var _elements = /*#__PURE__*/new WeakMap();
var _middlewares = /*#__PURE__*/new WeakMap();
var _actions = /*#__PURE__*/new WeakMap();
var _update = /*#__PURE__*/new WeakMap();
var StateFull = /*#__PURE__*/function () {
  var _proto = StateFull.prototype;
  _proto.use = function use(middleware) {
    _classPrivateFieldGet(this, _middlewares).push(middleware);
  };
  function StateFull(queryOrElement) {
    var _this = this;
    _classPrivateFieldInitSpec(this, _state, {
      writable: true,
      value: {}
    });
    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _middlewares, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _actions, {
      writable: true,
      value: {}
    });
    _classPrivateFieldInitSpec(this, _update, {
      writable: true,
      value: function value(newState) {
        var state = _extends({}, _classPrivateFieldGet(_this, _state), newState);
        for (var _iterator = _createForOfIteratorHelperLoose(_classPrivateFieldGet(_this, _middlewares)), _step; !(_step = _iterator()).done;) {
          var middleware = _step.value;
          state = middleware(_classPrivateFieldGet(_this, _state), state);
        }
        if (!(0,_Utils_helper_ts__WEBPACK_IMPORTED_MODULE_2__.isChanged)(_classPrivateFieldGet(_this, _state), state)) return;
        for (var _iterator2 = _createForOfIteratorHelperLoose(_classPrivateFieldGet(_this, _elements)), _step2; !(_step2 = _iterator2()).done;) {
          var ele = _step2.value;
          ele.render(state, _classPrivateFieldGet(_this, _state));
        }
        _classPrivateFieldSet(_this, _state, state);
      }
    });
    _classPrivateFieldSet(this, _elements, Array.from((0,_Utils_DOM_ts__WEBPACK_IMPORTED_MODULE_0__.returnElement)(queryOrElement, true)).map(function (ele) {
      return new _index_ts__WEBPACK_IMPORTED_MODULE_1__["default"](ele);
    }));
  }
  _proto.getState = function getState() {
    return _classPrivateFieldGet(this, _state);
  };
  _proto.setState = function setState(newState) {
    if ((0,_Utils_helper_ts__WEBPACK_IMPORTED_MODULE_2__.isObject)(newState)) _classPrivateFieldGet(this, _update).call(this, newState);
    return _classPrivateFieldGet(this, _state);
  };
  _proto.destroy = function destroy() {
    _classPrivateFieldSet(this, _state, {});
    _classPrivateFieldGet(this, _elements).length = 0;
    _classPrivateFieldSet(this, _update, function () {});
  };
  _proto.bindComputed = function bindComputed(computed) {
    for (var _i = 0, _Object$entries = Object.entries(computed); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _Object$entries[_i],
        name = _Object$entries$_i[0],
        fn = _Object$entries$_i[1];
      Object.defineProperty(this, name, {
        get: fn,
        enumerable: true
      });
    }
  };
  _proto.bindActions = function bindActions(actions) {
    var _this2 = this;
    var _loop = function _loop() {
      var _Object$entries2$_i = _Object$entries2[_i2],
        name = _Object$entries2$_i[0],
        fn = _Object$entries2$_i[1];
      _this2[name] = function () {
        var newState = _extends({}, _classPrivateFieldGet(_this2, _state));
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        fn.call.apply(fn, [_this2, newState].concat(args));
        _this2.setState(newState);
      };
    };
    for (var _i2 = 0, _Object$entries2 = Object.entries(actions); _i2 < _Object$entries2.length; _i2++) {
      _loop();
    }
  };
  return StateFull;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StateFull);

/***/ }),

/***/ "./src/Element/index.ts":
/*!******************************!*\
  !*** ./src/Element/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Utils_helper_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/helper.ts */ "./src/Utils/helper.ts");
/* harmony import */ var _Node_index_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Node/index.ts */ "./src/Node/index.ts");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
// @ts-ignore

// @ts-ignore

var _node = /*#__PURE__*/new WeakMap();
var _genrateDynamicNodes = /*#__PURE__*/new WeakMap();
var SElement = /*#__PURE__*/function () {
  function SElement(_element) {
    var _this = this;
    _classPrivateFieldInitSpec(this, _node, {
      writable: true,
      value: []
    });
    _classPrivateFieldInitSpec(this, _genrateDynamicNodes, {
      writable: true,
      value: function value(element) {
        //  Select Dynamic attr Nodes
        element.getAttributeNames().forEach(function (attr) {
          var attrValue = element.getAttribute(attr);
          var variables = (0,_Utils_helper_ts__WEBPACK_IMPORTED_MODULE_0__.variable)(attrValue);
          if (!variables.length) return;
          _classPrivateFieldGet(_this, _node).push({
            name: "attr",
            variables: variables,
            node: new _Node_index_ts__WEBPACK_IMPORTED_MODULE_1__["default"](element.getAttributeNode(attr))
          });
        });

        //  Select Dynamic Text Nodes
        element.childNodes.forEach(function (textNode) {
          if (!textNode.nodeValue) return;
          var variables = (0,_Utils_helper_ts__WEBPACK_IMPORTED_MODULE_0__.variable)(textNode.nodeValue);
          if (!variables.length) return;
          _classPrivateFieldGet(_this, _node).push({
            name: "element",
            variables: variables,
            node: new _Node_index_ts__WEBPACK_IMPORTED_MODULE_1__["default"](textNode)
          });
        });
      }
    });
    _classPrivateFieldGet(this, _genrateDynamicNodes).call(this, _element);
  }
  var _proto = SElement.prototype;
  _proto.render = function render(newState, prevState) {
    _classPrivateFieldGet(this, _node).forEach(function (_ref) {
      var node = _ref.node,
        variables = _ref.variables;
      var includes = variables.filter(function (variable) {
        return newState.hasOwnProperty(variable);
      });
      if (!includes.length) return;
      includes = includes.filter(function (variable) {
        return newState[variable] !== prevState[variable];
      });
      if (!includes.length) return;
      var values = includes.reduce(function (prev, next) {
        prev[next] = newState[next];
        return prev;
      }, {});
      node.update(values);
    });
  };
  return SElement;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SElement);

/***/ }),

/***/ "./src/Node/index.ts":
/*!***************************!*\
  !*** ./src/Node/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Utils_helper_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/helper.ts */ "./src/Utils/helper.ts");
/* harmony import */ var _Configration_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Configration.ts */ "./src/Configration.ts");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
// @ts-ignore

// @ts-ignore

var _node = /*#__PURE__*/new WeakMap();
var _value = /*#__PURE__*/new WeakMap();
var _state = /*#__PURE__*/new WeakMap();
var _render = /*#__PURE__*/new WeakSet();
var SNode = /*#__PURE__*/function () {
  function SNode(node) {
    var _node$textContent;
    _classPrivateMethodInitSpec(this, _render);
    _classPrivateFieldInitSpec(this, _node, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _value, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _state, {
      writable: true,
      value: {}
    });
    _classPrivateFieldSet(this, _node, node);
    _classPrivateFieldSet(this, _value, (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : "");
    _classPrivateMethodGet(this, _render, _render2).call(this, _classPrivateFieldGet(this, _state));
  }
  var _proto = SNode.prototype;
  _proto.update = function update(newState) {
    var State = _extends({}, _classPrivateFieldGet(this, _state), newState);
    if (!(0,_Utils_helper_ts__WEBPACK_IMPORTED_MODULE_0__.isChanged)(_classPrivateFieldGet(this, _state), newState)) return;
    _classPrivateMethodGet(this, _render, _render2).call(this, State);
    _classPrivateFieldSet(this, _state, State);
  };
  return SNode;
}();
function _render2(state) {
  if (!_classPrivateFieldGet(this, _node)) return;
  var newValue = _classPrivateFieldGet(this, _value).replace(_Configration_ts__WEBPACK_IMPORTED_MODULE_1__.REGEX, function (_, key) {
    var _state$key;
    // @ts-ignore
    var value = (_state$key = state[key]) != null ? _state$key : "";
    return value;
  });
  if (newValue === _classPrivateFieldGet(this, _node).nodeValue) return;
  _classPrivateFieldGet(this, _node).nodeValue = newValue;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SNode);

/***/ }),

/***/ "./src/Utils/DOM.ts":
/*!**************************!*\
  !*** ./src/Utils/DOM.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ C),
/* harmony export */   "CA": () => (/* binding */ CA),
/* harmony export */   "F": () => (/* binding */ F),
/* harmony export */   "Q": () => (/* binding */ Q),
/* harmony export */   "QA": () => (/* binding */ QA),
/* harmony export */   "returnElement": () => (/* binding */ returnElement)
/* harmony export */ });
// Dom Slector

var Q = function Q(query, parentElement) {
  if (parentElement === void 0) {
    parentElement = document;
  }
  return parentElement.querySelector(query);
};
var QA = function QA(query, parentElement) {
  if (parentElement === void 0) {
    parentElement = document;
  }
  return parentElement.querySelectorAll(query);
};

// Class List

var C = function C(element, method, className) {
  var _element, _element$classList, _element$classList$me;
  if (element === void 0) {
    element = document.body;
  }
  if (method === void 0) {
    method = "toggle";
  }
  if (className === void 0) {
    className = "active";
  }
  return (_element = element) == null ? void 0 : (_element$classList = _element.classList) == null ? void 0 : (_element$classList$me = _element$classList[method]) == null ? void 0 : _element$classList$me.call(_element$classList, className);
};
var CA = function CA(element, method, className) {
  var _element2;
  if (element === void 0) {
    element = [];
  }
  if (method === void 0) {
    method = "toggle";
  }
  if (className === void 0) {
    className = "active";
  }
  return (_element2 = element) == null ? void 0 : _element2.forEach == null ? void 0 : _element2.forEach(function (ele) {
    return C(ele, method, className);
  });
};

// // Find DOM Element

var F = function F(element, query) {
  var _element3;
  if (element === void 0) {
    element = document.body;
  }
  if (query === void 0) {
    query = "div";
  }
  return (_element3 = element) == null ? void 0 : _element3.closest == null ? void 0 : _element3.closest(query);
};

/* Dom Helper Function */
var returnElement = function returnElement(element, multiple) {
  if (multiple === void 0) {
    multiple = false;
  }
  if (element instanceof HTMLElement) return element;
  var ele = multiple ? QA(element) : Q(element);
  if (typeof element === "string" && ele) return ele;else throw new Error("Element is not valid");
};

/***/ }),

/***/ "./src/Utils/helper.ts":
/*!*****************************!*\
  !*** ./src/Utils/helper.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "destroy": () => (/* binding */ destroy),
/* harmony export */   "extractVariables": () => (/* binding */ extractVariables),
/* harmony export */   "isChanged": () => (/* binding */ isChanged),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "removBracket": () => (/* binding */ removBracket),
/* harmony export */   "variable": () => (/* binding */ variable)
/* harmony export */ });
/* harmony import */ var _Configration_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Configration.ts */ "./src/Configration.ts");
// @ts-ignore


var extractVariables = function extractVariables(string) {
  var variable = string.match(_Configration_ts__WEBPACK_IMPORTED_MODULE_0__.REGEX);
  variable = Array.from(new Set(variable));
  return variable;
};
var removBracket = function removBracket(string) {
  var _string$replace;
  return string == null ? void 0 : string.replace == null ? void 0 : (_string$replace = string.replace(/{/g, "")) == null ? void 0 : _string$replace.replace == null ? void 0 : _string$replace.replace(/}/g, "");
};
var variable = function variable(string) {
  return extractVariables(string).map(removBracket);
};
var isChanged = function isChanged(Obj1, Obj2) {
  return JSON.stringify(Obj1) !== JSON.stringify(Obj2);
};
var isObject = function isObject(obj) {
  return obj !== null && obj && typeof obj === "object";
};
function destroy(obj) {
  for (var prop in obj) {
    var property = obj[prop];
    if (property != null && typeof property == "object") {
      destroy(property);
    } else {
      delete obj[prop];
    }
  }
  obj.__proto__ = null;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Element_Collection_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element/Collection.ts */ "./src/Element/Collection.ts");
// @ts-ignore


// @ts-ignore
window.SElements = _Element_Collection_ts__WEBPACK_IMPORTED_MODULE_0__["default"];
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=StateFull.js.map