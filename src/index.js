import CreateItem from './class/create-element';
import CreateKey from './class/create-key';
import keysForKeyboard from './class/key';
import templateFooter from './html/footer.html';
import templateHeader from './html/head.html';
import startEventKey from './js/event';
import startEventMouse from './js/eventMouse';
import eventForInput from './js/eventInput';
import shiftReaction from './js/shiftReaction';
import capsLockReaction from './js/capsLockReaction';
import keysLang from './class/key-lang';

import './css/style.scss';

const mainWrapper = new CreateItem(document.body, 'div', 'main-wrapper');
mainWrapper.create();
const header = new CreateItem(mainWrapper.node, 'header', 'header');
header.create();
header.node.innerHTML = templateHeader;
const main = new CreateItem(mainWrapper.node, 'main', 'main');
main.create();
const footer = new CreateItem(mainWrapper.node, 'footer', 'footer');
footer.create();
const screen = new CreateItem(main.node, 'textarea', 'keyboard-area');
screen.create();
// screen.onblur;
const keyboard = new CreateItem(main.node, 'div', 'keyboard');
keyboard.create();

if (!localStorage.getItem('capsLock')) {
  localStorage.setItem('capsLock', 'false');
}

function createKeyboard(elementDom, array) {
  elementDom.innerHTML = '';
  for (let j = 0; j < array.length; j++) {
    const keyboardFirstLine = new CreateItem(elementDom, 'div', 'keyboard-line');
    keyboardFirstLine.create();
    // startEventMouse(keyboardFirstLine.node);
    for (let i = 0; i < array[j].length; i++) {
      const keyItem = new CreateKey(
        keyboardFirstLine.node,
        array[j][i].first,
        array[j][i].second,
        array[j][i].func,
        array[j][i].size,
        array[j][i].data,
      );
      keyItem.create();
      capsLockReaction(keyItem.node);
      shiftReaction(keyItem.node);
    }
  }
  startEventMouse(elementDom);
}

if (!localStorage.getItem('language')) localStorage.setItem('language', 'en');
if (localStorage.getItem('language') === 'en') createKeyboard(keyboard.node, keysForKeyboard.en);
if (localStorage.getItem('language') === 'ru') createKeyboard(keyboard.node, keysForKeyboard.ru);

startEventKey();
eventForInput(screen.node);
footer.node.innerHTML = templateFooter;

function changeLanguage(keyBoard, arrayLang) {
  const arrKey = [];
  document.addEventListener('keydown', (event) => {
    const code = event.which;
    if (arrKey.indexOf(code) < 0) {
      arrKey.push(code);
    }
    if (event.ctrlKey && event.altKey) {
      const nodeKey = keyBoard.querySelectorAll('.key');
      const arr = [];
      Array.from(nodeKey).forEach((el) => {
        if (!el.classList.contains('key-func')) arr.push(el);
      });

      if (localStorage.language === 'en') {
        // localStorage.capsLock = 'false'
        localStorage.language = 'ru';
        if (localStorage.capsLock === 'true') {
          arr.map((el) => {
            const dataEl = el.dataset.code;
            el.dataset.firstValue = arrayLang.ru[`${dataEl}`].first.toUpperCase();
            el.dataset.secondValue = arrayLang.ru[`${dataEl}`].second.toUpperCase();
            el.querySelector('.p-first').innerText = arrayLang.ru[`${dataEl}`].first.toUpperCase();
            el.querySelector('.p-second').innerText = arrayLang.ru[`${dataEl}`].second.toUpperCase();
            return el;
          });
        } else {
          arr.map((el) => {
            const dataEl = el.dataset.code;
            el.dataset.firstValue = arrayLang.ru[`${dataEl}`].first;
            el.dataset.secondValue = arrayLang.ru[`${dataEl}`].second;
            el.querySelector('.p-first').innerText = arrayLang.ru[`${dataEl}`].first;
            el.querySelector('.p-second').innerText = arrayLang.ru[`${dataEl}`].second;
            return el;
          });
        }
      } else if (localStorage.language === 'ru') {
        // localStorage.capsLock = 'false';
        localStorage.language = 'en';
        if (localStorage.capsLock === 'true') {
          arr.map((el) => {
            const dataEl = el.dataset.code;
            el.dataset.firstValue = arrayLang.en[`${dataEl}`].first.toUpperCase();
            el.dataset.secondValue = arrayLang.en[`${dataEl}`].second.toUpperCase();
            el.querySelector('.p-first').innerText = arrayLang.en[`${dataEl}`].first.toUpperCase();
            el.querySelector('.p-second').innerText = arrayLang.en[`${dataEl}`].second.toUpperCase();
            return el;
          });
        } else {
          arr.map((el) => {
            const dataEl = el.dataset.code;
            el.dataset.firstValue = arrayLang.en[`${dataEl}`].first;
            el.dataset.secondValue = arrayLang.en[`${dataEl}`].second;
            el.querySelector('.p-first').innerText = arrayLang.en[`${dataEl}`].first;
            el.querySelector('.p-second').innerText = arrayLang.en[`${dataEl}`].second;
            return el;
          });
        }
      }
    }
  });
  document.addEventListener('keyup', (e) => {
    arrKey.splice(arrKey.indexOf(e.which), 1);
  });
}
changeLanguage(keyboard.node, keysLang);
