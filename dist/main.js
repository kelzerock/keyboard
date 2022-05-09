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
    }
  }]);

  return CreateElement;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateElement);

/***/ }),

/***/ "./src/class/create-key.js":
/*!*********************************!*\
  !*** ./src/class/create-key.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var CreateKey = /*#__PURE__*/function () {
  function CreateKey(parentNode, firstIndex, secondIndex, func, size, dataAttr) {
    var shift = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

    _classCallCheck(this, CreateKey);

    this.parentNode = parentNode;
    this.firstIndex = firstIndex;
    this.secondIndex = secondIndex;
    this.func = func;
    this.size = size;
    this.dataAttr = dataAttr;
    this.shift = shift;
    this.node = '';
  }

  _createClass(CreateKey, [{
    key: "create",
    value: function create() {
      var elemMain = document.createElement('div');
      elemMain.classList.add("key-".concat(this.size));
      elemMain.classList.add('key');
      elemMain.dataset.code = this.dataAttr;
      elemMain.dataset.firstValue = this.firstIndex;
      elemMain.dataset.secondValue = this.secondIndex;
      elemMain.id = this.dataAttr; // if (!this.secondIndex) elemMain.classList.add("key-one");

      var elemFirst = document.createElement('p');
      elemFirst.classList.add('p-first');

      if (this.func) {
        elemFirst.innerHTML = this.firstIndex;
        elemMain.classList.add('key-func');
      } else {
        elemFirst.innerHTML = this.firstIndex;
      }

      var elemSecond = document.createElement('p');
      elemSecond.innerHTML = this.secondIndex;
      elemSecond.classList.add('p-second');
      elemMain.append(elemFirst);
      elemMain.append(elemSecond);
      this.node = elemMain;
      this.parentNode.append(elemMain);
    }
  }]);

  return CreateKey;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateKey);

/***/ }),

/***/ "./src/class/key-lang.js":
/*!*******************************!*\
  !*** ./src/class/key-lang.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var keysLang = {
  en: {
    Backquote: {
      first: '`',
      second: '~',
      func: false,
      size: 1
    },
    Digit1: {
      first: '1',
      second: '!',
      func: false,
      size: 1
    },
    Digit2: {
      first: '2',
      second: '@',
      func: false,
      size: 1
    },
    Digit3: {
      first: '3',
      second: '#',
      func: false,
      size: 1
    },
    Digit4: {
      first: '4',
      second: '$',
      func: false,
      size: 1
    },
    Digit5: {
      first: '5',
      second: '%',
      func: false,
      size: 1
    },
    Digit6: {
      first: '6',
      second: '^',
      func: false,
      size: 1
    },
    Digit7: {
      first: '7',
      second: '&',
      func: false,
      size: 1
    },
    Digit8: {
      first: '8',
      second: '*',
      func: false,
      size: 1
    },
    Digit9: {
      first: '9',
      second: '(',
      func: false,
      size: 1
    },
    Digit0: {
      first: '0',
      second: ')',
      func: false,
      size: 1
    },
    Minus: {
      first: '-',
      second: '_',
      func: false,
      size: 1
    },
    Equal: {
      first: '=',
      second: '+',
      func: false,
      size: 1
    },
    KeyQ: {
      first: 'q',
      second: '',
      func: false,
      size: 1
    },
    KeyW: {
      first: 'w',
      second: '',
      func: false,
      size: 1
    },
    KeyE: {
      first: 'e',
      second: '',
      func: false,
      size: 1
    },
    KeyR: {
      first: 'r',
      second: '',
      func: false,
      size: 1
    },
    KeyT: {
      first: 't',
      second: '',
      func: false,
      size: 1
    },
    KeyY: {
      first: 'y',
      second: '',
      func: false,
      size: 1
    },
    KeyU: {
      first: 'u',
      second: '',
      func: false,
      size: 1
    },
    KeyI: {
      first: 'i',
      second: '',
      func: false,
      size: 1
    },
    KeyO: {
      first: 'o',
      second: '',
      func: false,
      size: 1
    },
    KeyP: {
      first: 'p',
      second: '',
      func: false,
      size: 1
    },
    BracketLeft: {
      first: '[',
      second: '{',
      func: false,
      size: 1
    },
    BracketRight: {
      first: ']',
      second: '}',
      func: false,
      size: 1
    },
    KeyA: {
      first: 'a',
      second: '',
      func: false,
      size: 1
    },
    KeyS: {
      first: 's',
      second: '',
      func: false,
      size: 1
    },
    KeyD: {
      first: 'd',
      second: '',
      func: false,
      size: 1
    },
    KeyF: {
      first: 'f',
      second: '',
      func: false,
      size: 1
    },
    KeyG: {
      first: 'g',
      second: '',
      func: false,
      size: 1
    },
    KeyH: {
      first: 'h',
      second: '',
      func: false,
      size: 1
    },
    KeyJ: {
      first: 'j',
      second: '',
      func: false,
      size: 1
    },
    KeyK: {
      first: 'k',
      second: '',
      func: false,
      size: 1
    },
    KeyL: {
      first: 'l',
      second: '',
      func: false,
      size: 1
    },
    Semicolon: {
      first: ';',
      second: ':',
      func: false,
      size: 1
    },
    Quote: {
      first: "'",
      second: '"',
      func: false,
      size: 1
    },
    Backslash: {
      first: '\\',
      second: '|',
      func: false,
      size: 1
    },
    KeyZ: {
      first: 'z',
      second: '',
      func: false,
      size: 1
    },
    KeyX: {
      first: 'x',
      second: '',
      func: false,
      size: 1
    },
    KeyC: {
      first: 'c',
      second: '',
      func: false,
      size: 1
    },
    KeyV: {
      first: 'v',
      second: '',
      func: false,
      size: 1
    },
    KeyB: {
      first: 'b',
      second: '',
      func: false,
      size: 1
    },
    KeyN: {
      first: 'n',
      second: '',
      func: false,
      size: 1
    },
    KeyM: {
      first: 'm',
      second: '',
      func: false,
      size: 1
    },
    Comma: {
      first: ',',
      second: '<',
      func: false,
      size: 1
    },
    Period: {
      first: '.',
      second: '>',
      func: false,
      size: 1
    },
    Slash: {
      first: '/',
      second: '?',
      func: false,
      size: 1
    },
    Space: {
      first: ' ',
      second: ' ',
      func: false,
      size: 3
    }
  },
  ru: {
    Backquote: {
      first: 'ё',
      second: 'Ё',
      func: false,
      size: 1
    },
    Digit1: {
      first: '1',
      second: '!',
      func: false,
      size: 1
    },
    Digit2: {
      first: '2',
      second: '"',
      func: false,
      size: 1
    },
    Digit3: {
      first: '3',
      second: '№',
      func: false,
      size: 1
    },
    Digit4: {
      first: '4',
      second: ';',
      func: false,
      size: 1
    },
    Digit5: {
      first: '5',
      second: '%',
      func: false,
      size: 1
    },
    Digit6: {
      first: '6',
      second: ':',
      func: false,
      size: 1
    },
    Digit7: {
      first: '7',
      second: '?',
      func: false,
      size: 1
    },
    Digit8: {
      first: '8',
      second: '*',
      func: false,
      size: 1
    },
    Digit9: {
      first: '9',
      second: '(',
      func: false,
      size: 1
    },
    Digit0: {
      first: '0',
      second: ')',
      func: false,
      size: 1
    },
    Minus: {
      first: '-',
      second: '_',
      func: false,
      size: 1
    },
    Equal: {
      first: '=',
      second: '+',
      func: false,
      size: 1
    },
    KeyQ: {
      first: 'й',
      second: '',
      func: false,
      size: 1
    },
    KeyW: {
      first: 'ц',
      second: '',
      func: false,
      size: 1
    },
    KeyE: {
      first: 'у',
      second: '',
      func: false,
      size: 1
    },
    KeyR: {
      first: 'к',
      second: '',
      func: false,
      size: 1
    },
    KeyT: {
      first: 'е',
      second: '',
      func: false,
      size: 1
    },
    KeyY: {
      first: 'н',
      second: '',
      func: false,
      size: 1
    },
    KeyU: {
      first: 'г',
      second: '',
      func: false,
      size: 1
    },
    KeyI: {
      first: 'ш',
      second: '',
      func: false,
      size: 1
    },
    KeyO: {
      first: 'щ',
      second: '',
      func: false,
      size: 1
    },
    KeyP: {
      first: 'з',
      second: '',
      func: false,
      size: 1
    },
    BracketLeft: {
      first: 'х',
      second: '',
      func: false,
      size: 1
    },
    BracketRight: {
      first: 'ъ',
      second: '',
      func: false,
      size: 1
    },
    KeyA: {
      first: 'ф',
      second: '',
      func: false,
      size: 1
    },
    KeyS: {
      first: 'ы',
      second: '',
      func: false,
      size: 1
    },
    KeyD: {
      first: 'в',
      second: '',
      func: false,
      size: 1
    },
    KeyF: {
      first: 'а',
      second: '',
      func: false,
      size: 1
    },
    KeyG: {
      first: 'п',
      second: '',
      func: false,
      size: 1
    },
    KeyH: {
      first: 'р',
      second: '',
      func: false,
      size: 1
    },
    KeyJ: {
      first: 'о',
      second: '',
      func: false,
      size: 1
    },
    KeyK: {
      first: 'л',
      second: '',
      func: false,
      size: 1
    },
    KeyL: {
      first: 'д',
      second: '',
      func: false,
      size: 1
    },
    Semicolon: {
      first: 'ж',
      second: '',
      func: false,
      size: 1
    },
    Quote: {
      first: 'э',
      second: '',
      func: false,
      size: 1
    },
    Backslash: {
      first: '\\',
      second: '/',
      func: false,
      size: 1
    },
    KeyZ: {
      first: 'я',
      second: '',
      func: false,
      size: 1
    },
    KeyX: {
      first: 'ч',
      second: '',
      func: false,
      size: 1
    },
    KeyC: {
      first: 'с',
      second: '',
      func: false,
      size: 1
    },
    KeyV: {
      first: 'м',
      second: '',
      func: false,
      size: 1
    },
    KeyB: {
      first: 'и',
      second: '',
      func: false,
      size: 1
    },
    KeyN: {
      first: 'т',
      second: '',
      func: false,
      size: 1
    },
    KeyM: {
      first: 'ь',
      second: '',
      func: false,
      size: 1
    },
    Comma: {
      first: 'б',
      second: '',
      func: false,
      size: 1
    },
    Period: {
      first: 'ю',
      second: '',
      func: false,
      size: 1
    },
    Slash: {
      first: '.',
      second: ',',
      func: false,
      size: 1
    },
    Space: {
      first: ' ',
      second: ' ',
      func: false,
      size: 3
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysLang);

/***/ }),

/***/ "./src/class/key.js":
/*!**************************!*\
  !*** ./src/class/key.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var keysForKeyboard = {
  en: [[{
    first: '`',
    second: '~',
    func: false,
    size: 1,
    data: 'Backquote'
  }, {
    first: '1',
    second: '!',
    func: false,
    size: 1,
    data: 'Digit1'
  }, {
    first: '2',
    second: '@',
    func: false,
    size: 1,
    data: 'Digit2'
  }, {
    first: '3',
    second: '#',
    func: false,
    size: 1,
    data: 'Digit3'
  }, {
    first: '4',
    second: '$',
    func: false,
    size: 1,
    data: 'Digit4'
  }, {
    first: '5',
    second: '%',
    func: false,
    size: 1,
    data: 'Digit5'
  }, {
    first: '6',
    second: '^',
    func: false,
    size: 1,
    data: 'Digit6'
  }, {
    first: '7',
    second: '&',
    func: false,
    size: 1,
    data: 'Digit7'
  }, {
    first: '8',
    second: '*',
    func: false,
    size: 1,
    data: 'Digit8'
  }, {
    first: '9',
    second: '(',
    func: false,
    size: 1,
    data: 'Digit9'
  }, {
    first: '0',
    second: ')',
    func: false,
    size: 1,
    data: 'Digit0'
  }, {
    first: '-',
    second: '_',
    func: false,
    size: 1,
    data: 'Minus'
  }, {
    first: '=',
    second: '+',
    func: false,
    size: 1,
    data: 'Equal'
  }, {
    first: 'Backspace',
    second: '',
    func: true,
    size: 2,
    data: 'Backspace'
  }], [{
    first: 'Tab',
    second: '',
    func: true,
    size: 1,
    data: 'Tab'
  }, {
    first: 'q',
    second: '',
    func: false,
    size: 1,
    data: 'KeyQ'
  }, {
    first: 'w',
    second: '',
    func: false,
    size: 1,
    data: 'KeyW'
  }, {
    first: 'e',
    second: '',
    func: false,
    size: 1,
    data: 'KeyE'
  }, {
    first: 'r',
    second: '',
    func: false,
    size: 1,
    data: 'KeyR'
  }, {
    first: 't',
    second: '',
    func: false,
    size: 1,
    data: 'KeyT'
  }, {
    first: 'y',
    second: '',
    func: false,
    size: 1,
    data: 'KeyY'
  }, {
    first: 'u',
    second: '',
    func: false,
    size: 1,
    data: 'KeyU'
  }, {
    first: 'i',
    second: '',
    func: false,
    size: 1,
    data: 'KeyI'
  }, {
    first: 'o',
    second: '',
    func: false,
    size: 1,
    data: 'KeyO'
  }, {
    first: 'p',
    second: '',
    func: false,
    size: 1,
    data: 'KeyP'
  }, {
    first: '[',
    second: '{',
    func: false,
    size: 1,
    data: 'BracketLeft'
  }, {
    first: ']',
    second: '}',
    func: false,
    size: 1,
    data: 'BracketRight'
  }, {
    first: 'Del',
    second: '',
    func: true,
    size: 2,
    data: 'Delete'
  }], [{
    first: 'Caps lock',
    second: '',
    func: true,
    size: 2,
    data: 'CapsLock'
  }, {
    first: 'a',
    second: '',
    func: false,
    size: 1,
    data: 'KeyA'
  }, {
    first: 's',
    second: '',
    func: false,
    size: 1,
    data: 'KeyS'
  }, {
    first: 'd',
    second: '',
    func: false,
    size: 1,
    data: 'KeyD'
  }, {
    first: 'f',
    second: '',
    func: false,
    size: 1,
    data: 'KeyF'
  }, {
    first: 'g',
    second: '',
    func: false,
    size: 1,
    data: 'KeyG'
  }, {
    first: 'h',
    second: '',
    func: false,
    size: 1,
    data: 'KeyH'
  }, {
    first: 'j',
    second: '',
    func: false,
    size: 1,
    data: 'KeyJ'
  }, {
    first: 'k',
    second: '',
    func: false,
    size: 1,
    data: 'KeyK'
  }, {
    first: 'l',
    second: '',
    func: false,
    size: 1,
    data: 'KeyL'
  }, {
    first: ';',
    second: ':',
    func: false,
    size: 1,
    data: 'Semicolon'
  }, {
    first: '\'',
    second: '"',
    func: false,
    size: 1,
    data: 'Quote'
  }, {
    first: '\\',
    second: '|',
    func: false,
    size: 1,
    data: 'Backslash'
  }, {
    first: 'Enter',
    second: '',
    func: true,
    size: 2,
    data: 'Enter'
  }], [{
    first: 'Shift',
    second: '',
    func: true,
    size: 2,
    data: 'ShiftLeft'
  }, {
    first: 'z',
    second: '',
    func: false,
    size: 1,
    data: 'KeyZ'
  }, {
    first: 'x',
    second: '',
    func: false,
    size: 1,
    data: 'KeyX'
  }, {
    first: 'c',
    second: '',
    func: false,
    size: 1,
    data: 'KeyC'
  }, {
    first: 'v',
    second: '',
    func: false,
    size: 1,
    data: 'KeyV'
  }, {
    first: 'b',
    second: '',
    func: false,
    size: 1,
    data: 'KeyB'
  }, {
    first: 'n',
    second: '',
    func: false,
    size: 1,
    data: 'KeyN'
  }, {
    first: 'm',
    second: '',
    func: false,
    size: 1,
    data: 'KeyM'
  }, {
    first: ',',
    second: '<',
    func: false,
    size: 1,
    data: 'Comma'
  }, {
    first: '.',
    second: '>',
    func: false,
    size: 1,
    data: 'Period'
  }, {
    first: '/',
    second: '?',
    func: false,
    size: 1,
    data: 'Slash'
  }, {
    first: '▲',
    second: '',
    func: true,
    size: 1,
    data: 'ArrowUp'
  }, {
    first: 'Shift',
    second: '',
    func: true,
    size: 2,
    data: 'ShiftRight'
  }], [{
    first: 'Cntr',
    second: '',
    func: true,
    size: 1,
    data: 'ControlLeft'
  }, {
    first: 'Win',
    second: '',
    func: true,
    size: 1,
    data: 'MetaLeft'
  }, {
    first: 'Alt',
    second: '',
    func: true,
    size: 1,
    data: 'AltLeft'
  }, {
    first: ' ',
    second: ' ',
    func: false,
    size: 3,
    data: 'Space'
  }, {
    first: 'Alt',
    second: '',
    func: true,
    size: 1,
    data: 'AltRight'
  }, {
    first: '◄',
    second: '',
    func: true,
    size: 1,
    data: 'ArrowLeft'
  }, {
    first: '▼',
    second: '',
    func: true,
    size: 1,
    data: 'ArrowDown'
  }, {
    first: '►',
    second: '',
    func: true,
    size: 1,
    data: 'ArrowRight'
  }, {
    first: 'Cntr',
    second: '',
    func: true,
    size: 1,
    data: 'ControlRight'
  }]],
  ru: [[{
    first: 'ё',
    second: 'Ё',
    func: false,
    size: 1,
    data: 'Backquote'
  }, {
    first: '1',
    second: '!',
    func: false,
    size: 1,
    data: 'Digit1'
  }, {
    first: '2',
    second: '"',
    func: false,
    size: 1,
    data: 'Digit2'
  }, {
    first: '3',
    second: '№',
    func: false,
    size: 1,
    data: 'Digit3'
  }, {
    first: '4',
    second: ';',
    func: false,
    size: 1,
    data: 'Digit4'
  }, {
    first: '5',
    second: '%',
    func: false,
    size: 1,
    data: 'Digit5'
  }, {
    first: '6',
    second: ':',
    func: false,
    size: 1,
    data: 'Digit6'
  }, {
    first: '7',
    second: '?',
    func: false,
    size: 1,
    data: 'Digit7'
  }, {
    first: '8',
    second: '*',
    func: false,
    size: 1,
    data: 'Digit8'
  }, {
    first: '9',
    second: '(',
    func: false,
    size: 1,
    data: 'Digit9'
  }, {
    first: '0',
    second: ')',
    func: false,
    size: 1,
    data: 'Digit0'
  }, {
    first: '-',
    second: '_',
    func: false,
    size: 1,
    data: 'Minus'
  }, {
    first: '=',
    second: '+',
    func: false,
    size: 1,
    data: 'Equal'
  }, {
    first: 'Backspace',
    second: '',
    func: true,
    size: 2,
    data: 'Backspace'
  }], [{
    first: 'Tab',
    second: '',
    func: true,
    size: 1,
    data: 'Tab'
  }, {
    first: 'й',
    second: '',
    func: false,
    size: 1,
    data: 'KeyQ'
  }, {
    first: 'ц',
    second: '',
    func: false,
    size: 1,
    data: 'KeyW'
  }, {
    first: 'у',
    second: '',
    func: false,
    size: 1,
    data: 'KeyE'
  }, {
    first: 'к',
    second: '',
    func: false,
    size: 1,
    data: 'KeyR'
  }, {
    first: 'е',
    second: '',
    func: false,
    size: 1,
    data: 'KeyT'
  }, {
    first: 'н',
    second: '',
    func: false,
    size: 1,
    data: 'KeyY'
  }, {
    first: 'г',
    second: '',
    func: false,
    size: 1,
    data: 'KeyU'
  }, {
    first: 'ш',
    second: '',
    func: false,
    size: 1,
    data: 'KeyI'
  }, {
    first: 'щ',
    second: '',
    func: false,
    size: 1,
    data: 'KeyO'
  }, {
    first: 'з',
    second: '',
    func: false,
    size: 1,
    data: 'KeyP'
  }, {
    first: 'х',
    second: '{',
    func: false,
    size: 1,
    data: 'BracketLeft'
  }, {
    first: 'ъ',
    second: '}',
    func: false,
    size: 1,
    data: 'BracketRight'
  }, {
    first: 'Del',
    second: '',
    func: true,
    size: 2,
    data: 'Delete'
  }], [{
    first: 'Caps lock',
    second: '',
    func: true,
    size: 2,
    data: 'CapsLock'
  }, {
    first: 'ф',
    second: '',
    func: false,
    size: 1,
    data: 'KeyA'
  }, {
    first: 'ы',
    second: '',
    func: false,
    size: 1,
    data: 'KeyS'
  }, {
    first: 'в',
    second: '',
    func: false,
    size: 1,
    data: 'KeyD'
  }, {
    first: 'а',
    second: '',
    func: false,
    size: 1,
    data: 'KeyF'
  }, {
    first: 'п',
    second: '',
    func: false,
    size: 1,
    data: 'KeyG'
  }, {
    first: 'р',
    second: '',
    func: false,
    size: 1,
    data: 'KeyH'
  }, {
    first: 'о',
    second: '',
    func: false,
    size: 1,
    data: 'KeyJ'
  }, {
    first: 'л',
    second: '',
    func: false,
    size: 1,
    data: 'KeyK'
  }, {
    first: 'д',
    second: '',
    func: false,
    size: 1,
    data: 'KeyL'
  }, {
    first: 'ж',
    second: ':',
    func: false,
    size: 1,
    data: 'Semicolon'
  }, {
    first: 'э',
    second: '"',
    func: false,
    size: 1,
    data: 'Quote'
  }, {
    first: '\\',
    second: '|',
    func: false,
    size: 1,
    data: 'Backslash'
  }, {
    first: 'Enter',
    second: '',
    func: true,
    size: 2,
    data: 'Enter'
  }], [{
    first: 'Shift',
    second: '',
    func: true,
    size: 2,
    data: 'ShiftLeft'
  }, {
    first: 'я',
    second: '',
    func: false,
    size: 1,
    data: 'KeyZ'
  }, {
    first: 'ч',
    second: '',
    func: false,
    size: 1,
    data: 'KeyX'
  }, {
    first: 'с',
    second: '',
    func: false,
    size: 1,
    data: 'KeyC'
  }, {
    first: 'м',
    second: '',
    func: false,
    size: 1,
    data: 'KeyV'
  }, {
    first: 'и',
    second: '',
    func: false,
    size: 1,
    data: 'KeyB'
  }, {
    first: 'т',
    second: '',
    func: false,
    size: 1,
    data: 'KeyN'
  }, {
    first: 'ь',
    second: '',
    func: false,
    size: 1,
    data: 'KeyM'
  }, {
    first: 'б',
    second: '<',
    func: false,
    size: 1,
    data: 'Comma'
  }, {
    first: 'ю',
    second: '>',
    func: false,
    size: 1,
    data: 'Period'
  }, {
    first: '.',
    second: '?',
    func: false,
    size: 1,
    data: 'Slash'
  }, {
    first: '▲',
    second: '',
    func: true,
    size: 1,
    data: 'ArrowUp'
  }, {
    first: 'Shift',
    second: '',
    func: true,
    size: 2,
    data: 'ShiftRight'
  }], [{
    first: 'Cntr',
    second: '',
    func: true,
    size: 1,
    data: 'ControlLeft'
  }, {
    first: 'Win',
    second: '',
    func: true,
    size: 1,
    data: 'MetaLeft'
  }, {
    first: 'Alt',
    second: '',
    func: true,
    size: 1,
    data: 'AltLeft'
  }, {
    first: ' ',
    second: ' ',
    func: false,
    size: 3,
    data: 'Space'
  }, {
    first: 'Alt',
    second: '',
    func: true,
    size: 1,
    data: 'AltRight'
  }, {
    first: '◄',
    second: '',
    func: true,
    size: 1,
    data: 'ArrowLeft'
  }, {
    first: '▼',
    second: '',
    func: true,
    size: 1,
    data: 'ArrowDown'
  }, {
    first: '►',
    second: '',
    func: true,
    size: 1,
    data: 'ArrowRight'
  }, {
    first: 'Cntr',
    second: '',
    func: true,
    size: 1,
    data: 'ControlRight'
  }]]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysForKeyboard);

/***/ }),

/***/ "./src/js/capsLockReaction.js":
/*!************************************!*\
  !*** ./src/js/capsLockReaction.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ capsLockReaction)
/* harmony export */ });
function capsLockReaction(elem) {
  var arrElem = elem.querySelectorAll('p');

  if (!elem.classList.contains('key-func')) {
    if (localStorage.capsLock !== 'false') {
      arrElem[0].innerHTML = arrElem[0].innerHTML.toUpperCase();
      elem.dataset.firstValue = arrElem[0].innerHTML.toUpperCase();
    } else {
      arrElem[0].innerHTML = arrElem[0].innerHTML.toLowerCase();
      elem.dataset.firstValue = arrElem[0].innerHTML.toLowerCase();
    }
  }

  document.addEventListener('keydown', function (event) {
    if (event.code === 'CapsLock') {
      if (!elem.classList.contains('key-func')) {
        if (localStorage.capsLock !== 'true') {
          arrElem[0].innerHTML = arrElem[0].innerHTML.toUpperCase();
          elem.dataset.firstValue = arrElem[0].innerHTML;
        } else {
          arrElem[0].innerHTML = arrElem[0].innerHTML.toLowerCase();
          elem.dataset.firstValue = arrElem[0].innerHTML;
        }
      }
    }
  });
}

/***/ }),

/***/ "./src/js/event.js":
/*!*************************!*\
  !*** ./src/js/event.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addText(text) {
  var minus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'no';
  var textarea = document.querySelector('.keyboard-area');
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;

  if (minus === 'no') {
    textarea.value = textarea.value.slice(0, start) + text + textarea.value.slice(end);
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
  }

  if (minus === 'prev') {
    if (start === end) {
      if (start > 0) {
        textarea.value = textarea.value.slice(0, start - 1) + textarea.value.slice(end);
        textarea.selectionStart = start - 1;
        textarea.selectionEnd = start - 1;
      }
    } else {
      textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end);
      textarea.selectionStart = start;
      textarea.selectionEnd = start;
    }
  }

  if (minus === 'next') {
    if (start === end) {
      textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end + 1);
    } else {
      textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end);
    }

    textarea.selectionStart = start;
    textarea.selectionEnd = start;
  }
}

function startEventKey() {
  document.addEventListener('keydown', function (event) {
    var downKey = document.querySelector("#".concat(event.code));

    if (!downKey.classList.contains('key-func')) {
      if (event.isTrusted) {
        event.preventDefault();
        document.dispatchEvent(new KeyboardEvent('keydown', {
          code: downKey.dataset.code
        }));
      }
    }

    if (downKey.dataset.code !== 'CapsLock') downKey.classList.add('active');

    if (downKey.dataset.code === 'CapsLock') {
      if (localStorage.capsLock === 'true') {
        localStorage.capsLock = 'false';
        downKey.classList.remove('active');
      } else {
        localStorage.capsLock = 'true';
        downKey.classList.add('active');
      }
    }

    if (downKey.dataset.code === 'Tab') addText('\t');

    if (!event.isTrusted) {
      if (downKey.dataset.code === 'Enter') addText('\n');
      if (downKey.dataset.code === 'ArrowLeft') addText(downKey.dataset.firstValue);
      if (downKey.dataset.code === 'ArrowRight') addText(downKey.dataset.firstValue);
      if (downKey.dataset.code === 'ArrowUp') addText(downKey.dataset.firstValue);
      if (downKey.dataset.code === 'ArrowDown') addText(downKey.dataset.firstValue);
      if (downKey.dataset.code === 'Delete') addText('', 'next');
      if (downKey.dataset.code === 'Backspace') addText('', 'prev');
      if (!downKey.classList.contains('key-func')) addText(downKey.dataset.firstValue);
    }
  });
  document.addEventListener('keyup', function (event) {
    var upKey = document.getElementById(event.code);
    if (upKey.dataset.code !== 'CapsLock') upKey.classList.remove('active');
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startEventKey);

/***/ }),

/***/ "./src/js/eventInput.js":
/*!******************************!*\
  !*** ./src/js/eventInput.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function eventForInput(elemInput) {
  document.addEventListener('keydown', function () {
    elemInput.focus();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventForInput);

/***/ }),

/***/ "./src/js/eventMouse.js":
/*!******************************!*\
  !*** ./src/js/eventMouse.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function startEventMouse(elemHTML) {
  elemHTML.addEventListener('mousedown', function (event) {
    if (elemHTML !== event.target) {
      var nameEvent = event.target.closest('.key').dataset.code;
      document.dispatchEvent(new KeyboardEvent('keydown', {
        code: nameEvent
      }));
      document.addEventListener('mouseup', function () {
        document.dispatchEvent(new KeyboardEvent('keyup', {
          code: nameEvent
        }));
      });
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startEventMouse);

/***/ }),

/***/ "./src/js/shiftReaction.js":
/*!*********************************!*\
  !*** ./src/js/shiftReaction.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shiftReaction)
/* harmony export */ });
function shiftReaction(elem) {
  var arrElem = elem.querySelectorAll('p');
  document.addEventListener('keydown', function (event) {
    var globalCapsLock = document.querySelector('#CapsLock');

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (arrElem[1].innerHTML) {
        elem.dataset.firstValue = elem.dataset.secondValue; // elem.dataset.firstValue = arrElem[1].innerHTML

        arrElem[1].classList.toggle('p-second');
        arrElem[1].classList.toggle('p-first');
        arrElem[0].classList.toggle('p-first');
        arrElem[0].classList.toggle('p-second');
      }

      if (!elem.classList.contains('key-func')) {
        if (!globalCapsLock.classList.contains('active')) {
          arrElem[0].innerHTML = arrElem[0].innerHTML.toUpperCase();
        } else {
          arrElem[0].innerHTML = arrElem[0].innerHTML.toLowerCase();
        }

        if (arrElem[1].innerHTML) {
          // elem.dataset.firstValue = arrElem[1].innerHTML
          elem.dataset.firstValue = elem.dataset.secondValue;
        } else {
          elem.dataset.firstValue = arrElem[0].innerHTML;
        }
      }
    }
  });
  document.addEventListener('keyup', function (event) {
    var globalCapsLock = document.querySelector('#CapsLock');

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (arrElem[1].innerHTML) {
        elem.dataset.firstValue = arrElem[1].innerHTML;
        arrElem[1].classList.toggle('p-second');
        arrElem[1].classList.toggle('p-first');
        arrElem[0].classList.toggle('p-first');
        arrElem[0].classList.toggle('p-second');
      }

      if (!elem.classList.contains('key-func')) {
        if (!globalCapsLock.classList.contains('active')) {
          arrElem[0].innerHTML = arrElem[0].innerHTML.toLowerCase();
        } else {
          arrElem[0].innerHTML = arrElem[0].innerHTML.toUpperCase();
        }

        elem.dataset.firstValue = arrElem[0].innerHTML;
      }
    }
  });
}

/***/ }),

/***/ "./src/html/footer.html":
/*!******************************!*\
  !*** ./src/html/footer.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/github.png */ "./src/img/github.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<div class=\"wrapper-footer\">\n  <a href=\"https://github.com/kelzerock\" target=\"_blank\">\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"github\">\n  </a>\n  <h3>RS SCHOOL 2022Q1</h3>\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/html/head.html":
/*!****************************!*\
  !*** ./src/html/head.html ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<h1>Task \"keyboard\"</h1>\n<div class=\"important-info\">\n  <p>This keyboard created at Linux Mint</p>\n  <p>You could change language with \"Alt\" + \"Cntr\"</p>\n</div>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/69ffd9cd5a846c976177.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _class_create_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/create-key */ "./src/class/create-key.js");
/* harmony import */ var _class_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class/key */ "./src/class/key.js");
/* harmony import */ var _html_footer_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html/footer.html */ "./src/html/footer.html");
/* harmony import */ var _html_head_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html/head.html */ "./src/html/head.html");
/* harmony import */ var _js_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/event */ "./src/js/event.js");
/* harmony import */ var _js_eventMouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/eventMouse */ "./src/js/eventMouse.js");
/* harmony import */ var _js_eventInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/eventInput */ "./src/js/eventInput.js");
/* harmony import */ var _js_shiftReaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/shiftReaction */ "./src/js/shiftReaction.js");
/* harmony import */ var _js_capsLockReaction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/capsLockReaction */ "./src/js/capsLockReaction.js");
/* harmony import */ var _class_key_lang__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./class/key-lang */ "./src/class/key-lang.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");












var mainWrapper = new _class_create_element__WEBPACK_IMPORTED_MODULE_0__["default"](document.body, 'div', 'main-wrapper');
mainWrapper.create();
var header = new _class_create_element__WEBPACK_IMPORTED_MODULE_0__["default"](mainWrapper.node, 'header', 'header');
header.create();
header.node.innerHTML = _html_head_html__WEBPACK_IMPORTED_MODULE_4__["default"];
var main = new _class_create_element__WEBPACK_IMPORTED_MODULE_0__["default"](mainWrapper.node, 'main', 'main');
main.create();
var footer = new _class_create_element__WEBPACK_IMPORTED_MODULE_0__["default"](mainWrapper.node, 'footer', 'footer');
footer.create();
var screen = new _class_create_element__WEBPACK_IMPORTED_MODULE_0__["default"](main.node, 'textarea', 'keyboard-area');
screen.create(); // screen.onblur;

var keyboard = new _class_create_element__WEBPACK_IMPORTED_MODULE_0__["default"](main.node, 'div', 'keyboard');
keyboard.create();

if (!localStorage.getItem('capsLock')) {
  localStorage.capsLock = 'false';
} else {
  localStorage.setItem('capsLock', 'false');
}

function createKeyboard(elementDom, array) {
  elementDom.innerHTML = '';

  for (var j = 0; j < array.length; j += 1) {
    var keyboardFirstLine = new _class_create_element__WEBPACK_IMPORTED_MODULE_0__["default"](elementDom, 'div', 'keyboard-line');
    keyboardFirstLine.create(); // startEventMouse(keyboardFirstLine.node);

    for (var i = 0; i < array[j].length; i += 1) {
      var keyItem = new _class_create_key__WEBPACK_IMPORTED_MODULE_1__["default"](keyboardFirstLine.node, array[j][i].first, array[j][i].second, array[j][i].func, array[j][i].size, array[j][i].data);
      keyItem.create();
      (0,_js_capsLockReaction__WEBPACK_IMPORTED_MODULE_9__["default"])(keyItem.node);
      (0,_js_shiftReaction__WEBPACK_IMPORTED_MODULE_8__["default"])(keyItem.node);
    }
  }

  (0,_js_eventMouse__WEBPACK_IMPORTED_MODULE_6__["default"])(elementDom);
}

if (!localStorage.getItem('language')) localStorage.setItem('language', 'en');
if (localStorage.getItem('language') === 'en') createKeyboard(keyboard.node, _class_key__WEBPACK_IMPORTED_MODULE_2__["default"].en);
if (localStorage.getItem('language') === 'ru') createKeyboard(keyboard.node, _class_key__WEBPACK_IMPORTED_MODULE_2__["default"].ru);
(0,_js_event__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_js_eventInput__WEBPACK_IMPORTED_MODULE_7__["default"])(screen.node);
footer.node.innerHTML = _html_footer_html__WEBPACK_IMPORTED_MODULE_3__["default"];

function changeLanguage(keyBoard, arrayLang) {
  var arrKey = [];
  document.addEventListener('keydown', function (event) {
    var code = event.which;

    if (arrKey.indexOf(code) < 0) {
      arrKey.push(code);
    }

    if (event.ctrlKey && event.altKey) {
      var nodeKey = keyBoard.querySelectorAll('.key');
      var arr = [];
      Array.from(nodeKey).forEach(function (el) {
        if (!el.classList.contains('key-func')) arr.push(el);
      });

      if (localStorage.language === 'en') {
        // localStorage.capsLock = 'false'
        localStorage.language = 'ru';

        if (localStorage.capsLock === 'true') {
          arr.map(function (el) {
            var dataEl = el.dataset.code;
            el.dataset.firstValue = arrayLang.ru["".concat(dataEl)].first.toUpperCase();
            el.dataset.secondValue = arrayLang.ru["".concat(dataEl)].second.toUpperCase();
            el.querySelector('.p-first').innerText = arrayLang.ru["".concat(dataEl)].first.toUpperCase();
            el.querySelector('.p-second').innerText = arrayLang.ru["".concat(dataEl)].second.toUpperCase();
            return el;
          });
        } else {
          arr.map(function (el) {
            var dataEl = el.dataset.code;
            el.dataset.firstValue = arrayLang.ru["".concat(dataEl)].first;
            el.dataset.secondValue = arrayLang.ru["".concat(dataEl)].second;
            el.querySelector('.p-first').innerText = arrayLang.ru["".concat(dataEl)].first;
            el.querySelector('.p-second').innerText = arrayLang.ru["".concat(dataEl)].second;
            return el;
          });
        }
      } else if (localStorage.language === 'ru') {
        // localStorage.capsLock = 'false';
        localStorage.language = 'en';

        if (localStorage.capsLock === 'true') {
          arr.map(function (el) {
            var dataEl = el.dataset.code;
            el.dataset.firstValue = arrayLang.en["".concat(dataEl)].first.toUpperCase();
            el.dataset.secondValue = arrayLang.en["".concat(dataEl)].second.toUpperCase();
            el.querySelector('.p-first').innerText = arrayLang.en["".concat(dataEl)].first.toUpperCase();
            el.querySelector('.p-second').innerText = arrayLang.en["".concat(dataEl)].second.toUpperCase();
            return el;
          });
        } else {
          arr.map(function (el) {
            var dataEl = el.dataset.code;
            el.dataset.firstValue = arrayLang.en["".concat(dataEl)].first;
            el.dataset.secondValue = arrayLang.en["".concat(dataEl)].second;
            el.querySelector('.p-first').innerText = arrayLang.en["".concat(dataEl)].first;
            el.querySelector('.p-second').innerText = arrayLang.en["".concat(dataEl)].second;
            return el;
          });
        }
      }
    }
  });
  document.addEventListener('keyup', function (e) {
    arrKey.splice(arrKey.indexOf(e.which), 1);
  });
}

changeLanguage(keyboard.node, _class_key_lang__WEBPACK_IMPORTED_MODULE_10__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map