/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/class/create-element.js":
/*!*************************************!*\
  !*** ./src/class/create-element.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var CreateElement = /*#__PURE__*/function () {
  function CreateElement(parentNode, tag, className) {
    var innerInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    _classCallCheck(this, CreateElement);

    this.parentNode = parentNode;
    this.tag = tag;
    this.className = className;
    this.innerInfo = innerInfo;
    this.node = '';
  }

  _createClass(CreateElement, [{
    key: "create",
    value: function create() {
      var elem = document.createElement(this.tag);
      elem.classList.add(this.className);
      elem.innerHTML = this.innerInfo;
      this.parentNode.append(elem);
      this.node = elem;
    } // sayHi(){
    //   console.log('HI hI hi!')
    // }

  }]);

  return CreateElement;
}(); // export class CreateElem {
//   public node: HTMLElement;
//   constructor(parentNode: HTMLElement | null, tagName = 'div', className = '', content = '') {
//     const el = document.createElement(tagName);
//     el.className = className;
//     el.textContent = content;
//     if (parentNode){
//       parentNode.append(el);
//     }
//     this.node = el;
//   }
// }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateElement);

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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/create-element */ "./src/class/create-element.js");
 // const mainWrapper = 

var mainWrapper = new _class_create_element__WEBPACK_IMPORTED_MODULE_0__["default"](document.body, 'div', 'main-wrapper');
mainWrapper.create();
var wrapper = new _class_create_element__WEBPACK_IMPORTED_MODULE_0__["default"](mainWrapper.node, 'div', 'wrapper');
wrapper.create();
var screen = new _class_create_element__WEBPACK_IMPORTED_MODULE_0__["default"](wrapper.node, 'textarea', 'keyboard-area');
screen.create();
var keyboard = new _class_create_element__WEBPACK_IMPORTED_MODULE_0__["default"](wrapper.node, 'div', 'keyboard-div');
keyboard.create(); // console.log(mainWrapper)
})();

/******/ })()
;
//# sourceMappingURL=main.js.map