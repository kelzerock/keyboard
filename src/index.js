import CreateItem from "./class/create-element";
import CreateKey from "./class/create-key";
import keysForKeyboard from "./class/key";
import template from './html/footer.html'

import "./css/style.scss";
// import "./css/keyboard.scss";

const mainWrapper = new CreateItem(document.body, "div", "main-wrapper");
mainWrapper.create();
const header = new CreateItem(mainWrapper.node, "header", "header");
header.create();
const main = new CreateItem(mainWrapper.node, "main", "main");
main.create();
const footer = new CreateItem(mainWrapper.node, "footer","footer");
footer.create();
const screen = new CreateItem(main.node, "textarea", "keyboard-area");
screen.create();
const keyboard = new CreateItem(main.node, "div", "keyboard");
keyboard.create();

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
      keysForKeyboard[j][i].size
    );
    key_item.create();
  }
}

footer.node.innerHTML = template