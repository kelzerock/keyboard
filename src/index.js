import CreateItem from "./class/create-element";
import CreateKey from "./class/create-key";
import keysForKeyboard from './class/key'

import "./css/style.scss";
// import "./css/keyboard.scss";

const mainWrapper = new CreateItem(document.body, "div", "main-wrapper");
mainWrapper.create();
const header = new CreateItem(mainWrapper.node, "header", "header");
header.create();
const main = new CreateItem(mainWrapper.node, "main", "main");
main.create();
new CreateItem(mainWrapper.node, "footer", "footer", '&copy; kelzzzerock').create();
const screen = new CreateItem(main.node, "textarea", "keyboard-area");
screen.create();
const keyboard = new CreateItem(main.node, "div", "keyboard");
keyboard.create();

// const button = new CreateItem(keyboard.node, 'button', 'button', "+++")
// button.create()
// button.node.addEventListener('click', (ev)=>{
//   console.log(ev)
// })
// console.log(mainWrapper)


const keyboardFirstLine = new CreateItem(keyboard.node, "div", "keyboard-line");
keyboardFirstLine.create();

for (let i = 0; i < keysForKeyboard[0].length; i++) {
  const key_item = new CreateKey(keyboardFirstLine.node, keysForKeyboard[0][i].first, keysForKeyboard[0][i].second, keysForKeyboard[0][i].func, keysForKeyboard[0][i].size)
  key_item.create()
  
}
