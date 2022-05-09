import CreateItem from "./class/create-element";
import CreateKey from "./class/create-key";
import keysForKeyboard from "./class/key";
import templateFooter from "./html/footer.html";
import templateHeader from "./html/head.html";
import startEventKey from "./js/event";
import startEventMouse from "./js/eventMouse";
import eventForInput from "./js/eventInput";
import shiftReaction from "./js/shiftReaction";
import capsLockReaction from "./js/capsLockReaction";

import "./css/style.scss";
// import "./css/keyboard.scss";

const mainWrapper = new CreateItem(document.body, "div", "main-wrapper");
mainWrapper.create();
const header = new CreateItem(mainWrapper.node, "header", "header");
header.create();
header.node.innerHTML = templateHeader;
const main = new CreateItem(mainWrapper.node, "main", "main");
main.create();
const footer = new CreateItem(mainWrapper.node, "footer", "footer");
footer.create();
const screen = new CreateItem(main.node, "textarea", "keyboard-area");
screen.create();
screen.onblur;
const keyboard = new CreateItem(main.node, "div", "keyboard");
keyboard.create();
// startEventMouse(keyboard.node);

if(!localStorage.getItem('capsLock')){
  localStorage.setItem('capsLock', 'false')
}


function createKeyboard(elem, array) {
  elem.innerHTML = "";
  for (let j = 0; j < array.length; j++) {
    const keyboardFirstLine = new CreateItem(elem, "div", "keyboard-line");
    keyboardFirstLine.create();
    // startEventMouse(keyboardFirstLine.node);
    for (let i = 0; i < array[j].length; i++) {
      const key_item = new CreateKey(
        keyboardFirstLine.node,
        array[j][i].first,
        array[j][i].second,
        array[j][i].func,
        array[j][i].size,
        array[j][i].data
      );
      key_item.create();
      capsLockReaction(key_item.node);
      shiftReaction(key_item.node);
    }
    // startEventMouse(keyboardFirstLine.node);
  }
  startEventMouse(elem);
  console.log(localStorage.capsLock)
  if(localStorage.capsLock === 'true'){
    console.log('active')
    document.querySelector('#CapsLock').classList.add('active')
  }
  
}

if (!localStorage.getItem("language")) localStorage.setItem("language", "en");
if (localStorage.getItem("language") === "en")
  createKeyboard(keyboard.node, keysForKeyboard.en);
if (localStorage.getItem("language") === "ru")
  createKeyboard(keyboard.node, keysForKeyboard.ru);


startEventKey(screen.node);
eventForInput(screen.node);
footer.node.innerHTML = templateFooter;

function changeLanguage() {

  const arrKey = [];
  document.addEventListener("keydown", (event) => {
    const code = event.which;
    if (arrKey.indexOf(code) < 0) {
      arrKey.push(code);
    }
    if(event.ctrlKey && event.altKey){
      if(localStorage.language === 'en'){
        localStorage.capsLock = 'false'
        localStorage.language = 'ru'
        document.location.reload();
        createKeyboard(keyboard.node, keysForKeyboard.ru);
        
      } else if(localStorage.language === 'ru'){
        localStorage.capsLock = 'false'
        localStorage.language = 'en'
        document.location.reload();
        createKeyboard(keyboard.node, keysForKeyboard.en);
        
      }
    }

  });
  document.addEventListener("keyup", function (e) {
    arrKey.splice(arrKey.indexOf(e.which), 1);
  });
  console.log(Boolean(arrKey.includes(16) && arrKey.includes(18)))

}
changeLanguage();
