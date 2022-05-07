import CreateItem from "./class/create-element";
import CreateKey from "./class/create-key";
import keysForKeyboard from "./class/key";
import templateFooter from './html/footer.html'
import templateHeader from "./html/head.html"
import startEventKey from "./js/event";
import startEventMouse from "./js/eventMouse";
import eventForInput from "./js/eventInput";

import "./css/style.scss";
// import "./css/keyboard.scss";

startEventKey()

const mainWrapper = new CreateItem(document.body, "div", "main-wrapper");
mainWrapper.create();
const header = new CreateItem(mainWrapper.node, "header", "header");
header.create();
header.node.innerHTML = templateHeader;
const main = new CreateItem(mainWrapper.node, "main", "main");
main.create();
const footer = new CreateItem(mainWrapper.node, "footer","footer");
footer.create();
const screen = new CreateItem(main.node, "textarea", "keyboard-area");
screen.create();
screen.onblur
const keyboard = new CreateItem(main.node, "div", "keyboard");
keyboard.create();
startEventMouse(keyboard.node)

for (let j = 0; j < keysForKeyboard.length; j++) {
  const keyboardFirstLine = new CreateItem(
    keyboard.node,
    "div",
    "keyboard-line"
  );
  keyboardFirstLine.create();
  for (let i = 0; i < keysForKeyboard[j].length; i++) {
    const key_item = new CreateKey(
      keyboardFirstLine.node,
      keysForKeyboard[j][i].first,
      keysForKeyboard[j][i].second,
      keysForKeyboard[j][i].func,
      keysForKeyboard[j][i].size,
      keysForKeyboard[j][i].data
    );
    key_item.create();
  }
}

eventForInput(screen.node, keyboard.node)
footer.node.innerHTML = templateFooter