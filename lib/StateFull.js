(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("StateFull", [], factory);
	else if(typeof exports === 'object')
		exports["StateFull"] = factory();
	else
		root["StateFull"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Node/index.ts":
/*!***************************!*\
  !*** ./src/Node/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Utils_helper_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils/helper.ts */ "./src/Utils/helper.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _node = /*#__PURE__*/new WeakMap();

var _parantNode = /*#__PURE__*/new WeakMap();

var _value = /*#__PURE__*/new WeakMap();

var _state = /*#__PURE__*/new WeakMap();

var _rander = /*#__PURE__*/new WeakSet();

var StateFullNode = /*#__PURE__*/function () {
  function StateFullNode(node, parantNode) {
    _classPrivateMethodInitSpec(this, _rander);

    _classPrivateFieldInitSpec(this, _node, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _parantNode, {
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

    _classPrivateFieldSet(this, _value, (node == null ? void 0 : node.nodeValue) || "");

    _classPrivateFieldSet(this, _parantNode, parantNode);

    _classPrivateMethodGet(this, _rander, _rander2).call(this, _classPrivateFieldGet(this, _state));
  }

  var _proto = StateFullNode.prototype;

  _proto.update = function update(newState) {
    var State = _extends({}, _classPrivateFieldGet(this, _state), newState);

    if (!(0,_Utils_helper_ts__WEBPACK_IMPORTED_MODULE_0__.isChanged)(_classPrivateFieldGet(this, _state), newState)) return;

    _classPrivateMethodGet(this, _rander, _rander2).call(this, State);

    _classPrivateFieldSet(this, _state, State);
  };

  return StateFullNode;
}();

function _rander2(newState) {
  if (!_classPrivateFieldGet(this, _node)) return; // const nodeName = this.#node.nodeName;

  var newValue = _classPrivateFieldGet(this, _value).replace(/\{\{(.*?)\}\}/g, function (_, key) {
    // @ts-ignore
    var value = newState[key] || "";
    /* Update */
    // if (this.#parantNode?.value && nodeName === 'value') this.#parantNode.value = value;
    // if (this.#parantNode?.checked && nodeName === 'checked') this.#parantNode.checked = value;

    return value;
  });

  if (newValue === _classPrivateFieldGet(this, _node).nodeValue) return;
  _classPrivateFieldGet(this, _node).nodeValue = newValue;
}

var createStateFullNode = function createStateFullNode(node, parantNode) {
  return new StateFullNode(node, parantNode);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStateFullNode);

/***/ }),

/***/ "./src/Selector/Element/Element.ts":
/*!*****************************************!*\
  !*** ./src/Selector/Element/Element.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Utils_DOM_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utils/DOM.ts */ "./src/Utils/DOM.ts");
/* harmony import */ var _Utils_helper_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utils/helper.ts */ "./src/Utils/helper.ts");
/* harmony import */ var _Node_index_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Node/index.ts */ "./src/Node/index.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

// @ts-ignore
 // @ts-ignore

 // @ts-ignore



var _element = /*#__PURE__*/new WeakMap();

var _state = /*#__PURE__*/new WeakMap();

var _node = /*#__PURE__*/new WeakMap();

var _update = /*#__PURE__*/new WeakSet();

var _rander = /*#__PURE__*/new WeakSet();

var Element = /*#__PURE__*/function () {
  function Element(_Element) {
    _classPrivateMethodInitSpec(this, _rander);

    _classPrivateMethodInitSpec(this, _update);

    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _state, {
      writable: true,
      value: {}
    });

    _classPrivateFieldInitSpec(this, _node, {
      writable: true,
      value: {}
    });

    _classPrivateFieldSet(this, _element, _Element);

    _classPrivateFieldSet(this, _node, getDynamicNode(_classPrivateFieldGet(this, _element)));
  }
  /*  Public */


  var _proto = Element.prototype;

  _proto.state = function state(newState) {
    if ((0,_Utils_helper_ts__WEBPACK_IMPORTED_MODULE_1__.isObject)(newState)) _classPrivateMethodGet(this, _update, _update2).call(this, newState);
    return _classPrivateFieldGet(this, _state);
  };

  _proto.destory = function destory() {
    (0,_Utils_helper_ts__WEBPACK_IMPORTED_MODULE_1__.destroy)(this);
  }
  /* Private Methods */
  ;

  return Element;
}();

function _update2(newState) {
  var State = _extends({}, _classPrivateFieldGet(this, _state), newState);

  if (!(0,_Utils_helper_ts__WEBPACK_IMPORTED_MODULE_1__.isChanged)(_classPrivateFieldGet(this, _state), newState)) return;

  _classPrivateMethodGet(this, _rander, _rander2).call(this, newState);

  _classPrivateFieldSet(this, _state, State);

  return this;
}

function _rander2(State) {
  var _this = this;

  // @ts-ignore
  _classPrivateFieldGet(this, _node).forEach(function (_ref) {
    var node = _ref.node,
        variables = _ref.variables;
    // @ts-ignore
    var includes = variables.map(function (variable) {
      return State[variable] ? variable : undefined;
    }).filter(Boolean);
    if (!includes.length) return; // @ts-ignore

    includes = includes // @ts-ignore
    .map(function (variable) {
      return State[variable] !== _classPrivateFieldGet(_this, _state)[variable] ? variable : undefined;
    }).filter(Boolean);
    if (!includes.length) return;
    includes = includes.reduce(function (prev, next) {
      // @ts-ignore
      prev[next] = State[next];
      return prev;
    }, {});
    node.update(includes);
  });
}

var createElement = function createElement(QueryORElement) {
  return new Element((0,_Utils_DOM_ts__WEBPACK_IMPORTED_MODULE_0__.returnElement)(QueryORElement));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);
/*












*/

var getDynamicNode = function getDynamicNode(element) {
  var nodes = []; //  Select Dynamic attr Nodes

  element.getAttributeNames().forEach(function (attr) {
    var attrValue = element.getAttribute(attr);
    var variables = (0,_Utils_helper_ts__WEBPACK_IMPORTED_MODULE_1__.variable)(attrValue);
    if (!variables.length) return;
    nodes.push({
      name: "attr",
      variables: variables,
      node: (0,_Node_index_ts__WEBPACK_IMPORTED_MODULE_2__.default)(element.getAttributeNode(attr))
    });
  }); //  Select Dynamic Text Nodes

  element.childNodes.forEach(function (textNode) {
    if (!textNode.nodeValue) return;
    var variables = (0,_Utils_helper_ts__WEBPACK_IMPORTED_MODULE_1__.variable)(textNode.nodeValue);
    if (!variables.length) return;
    nodes.push({
      name: "element",
      variables: variables,
      node: (0,_Node_index_ts__WEBPACK_IMPORTED_MODULE_2__.default)(textNode)
    });
  });
  return nodes;
};

/***/ }),

/***/ "./src/Selector/Element/ElementCollection.ts":
/*!***************************************************!*\
  !*** ./src/Selector/Element/ElementCollection.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Utils_DOM_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utils/DOM.ts */ "./src/Utils/DOM.ts");
/* harmony import */ var _Element_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Element.ts */ "./src/Selector/Element/Element.ts");
/* harmony import */ var _Utils_helper_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utils/helper.ts */ "./src/Utils/helper.ts");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

// @ts-ignore
 // @ts-ignore

 // @ts-ignore



var _elements = /*#__PURE__*/new WeakMap();

var ElementCollection = /*#__PURE__*/function () {
  function ElementCollection(elements) {
    _classPrivateFieldInitSpec(this, _elements, {
      writable: true,
      value: []
    });

    _classPrivateFieldSet(this, _elements, Array.from(elements).map(_Element_ts__WEBPACK_IMPORTED_MODULE_1__.default));
  }

  var _proto = ElementCollection.prototype;

  _proto.state = function state(newState) {
    if ((0,_Utils_helper_ts__WEBPACK_IMPORTED_MODULE_2__.isObject)(newState)) {
      _classPrivateFieldGet(this, _elements).forEach(function (Element) {
        return Element.state(newState);
      });
    }

    return _classPrivateFieldGet(this, _elements)[0].state();
  };

  _proto.destory = function destory() {
    _classPrivateFieldGet(this, _elements).forEach(function (Element) {
      return Element.destory();
    });

    (0,_Utils_helper_ts__WEBPACK_IMPORTED_MODULE_2__.destroy)(this);
  };

  return ElementCollection;
}();

var createElementCollection = function createElementCollection(QueryORElement) {
  return new ElementCollection((0,_Utils_DOM_ts__WEBPACK_IMPORTED_MODULE_0__.returnElement)(QueryORElement, true));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElementCollection);

/***/ }),

/***/ "./src/Utils/DOM.ts":
/*!**************************!*\
  !*** ./src/Utils/DOM.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => /* binding */ Q,
/* harmony export */   "QA": () => /* binding */ QA,
/* harmony export */   "C": () => /* binding */ C,
/* harmony export */   "CA": () => /* binding */ CA,
/* harmony export */   "F": () => /* binding */ F,
/* harmony export */   "returnElement": () => /* binding */ returnElement
/* harmony export */ });
// Dom Slector
var Q = function Q(query, parentElement) {
  var _parentElement;

  if (parentElement === void 0) {
    parentElement = document;
  }

  return (_parentElement = parentElement) == null ? void 0 : _parentElement.querySelector == null ? void 0 : _parentElement.querySelector(query);
};
var QA = function QA(query, parentElement) {
  var _parentElement2;

  if (parentElement === void 0) {
    parentElement = document;
  }

  return (_parentElement2 = parentElement) == null ? void 0 : _parentElement2.querySelectorAll == null ? void 0 : _parentElement2.querySelectorAll(query);
}; // Class List

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
}; // // Find DOM Element

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
/* harmony export */   "extractVariables": () => /* binding */ extractVariables,
/* harmony export */   "removBracket": () => /* binding */ removBracket,
/* harmony export */   "variable": () => /* binding */ variable,
/* harmony export */   "isChanged": () => /* binding */ isChanged,
/* harmony export */   "isObject": () => /* binding */ isObject,
/* harmony export */   "destroy": () => /* binding */ destroy
/* harmony export */ });
var regex = /{{.+?}}/g;
var extractVariables = function extractVariables(string) {
  var variable = string == null ? void 0 : string.match == null ? void 0 : string.match(regex);
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

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Selector_Element_Element_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selector/Element/Element.ts */ "./src/Selector/Element/Element.ts");
/* harmony import */ var _Selector_Element_ElementCollection_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Selector/Element/ElementCollection.ts */ "./src/Selector/Element/ElementCollection.ts");
// @ts-ignore
 // @ts-ignore

 // @ts-ignore

document.elementSelector = _Selector_Element_Element_ts__WEBPACK_IMPORTED_MODULE_0__.default; // @ts-ignore

document.elementSelectorAll = _Selector_Element_ElementCollection_ts__WEBPACK_IMPORTED_MODULE_1__.default; // window.element = Element;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
.default;
});
//# sourceMappingURL=StateFull.js.map