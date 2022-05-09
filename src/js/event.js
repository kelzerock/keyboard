function startEventKey() {
  document.addEventListener("keydown", (event) => {
    const downKey = document.querySelector(`#${event.code}`);
    if (!downKey.classList.contains("key-func")) {
      if (event.isTrusted) {
        event.preventDefault();
        document.dispatchEvent(
          new KeyboardEvent("keydown", { code: downKey.dataset.code })
        );
      }
    }
    if (downKey.dataset.code !== "CapsLock") downKey.classList.add("active");
    if (downKey.dataset.code === "CapsLock"){ 
      //  if(downKey.classList.contains("active")){
      //    downKey.classList.remove('active')
      //  }else {
      //    downKey.classList.add('active')
      //  }
      if(localStorage.capsLock === 'true'){
        localStorage.capsLock = 'false';
        downKey.classList.remove('active')
      } else {
        localStorage.capsLock = 'true';
        downKey.classList.add('active')
      }
    }
    if (downKey.dataset.code === "Tab") addText("\t");
    if (!event.isTrusted) {
      if (downKey.dataset.code === "Enter") addText("\n");
      if (downKey.dataset.code === "ArrowLeft")
        addText(downKey.dataset.firstValue);
      if (downKey.dataset.code === "ArrowRight")
        addText(downKey.dataset.firstValue);
      if (downKey.dataset.code === "ArrowUp")
        addText(downKey.dataset.firstValue);
      if (downKey.dataset.code === "ArrowDown")
        addText(downKey.dataset.firstValue);
      if (downKey.dataset.code === "Delete")
        addText('', 'next');
      if (downKey.dataset.code === "Backspace")
        addText('', 'prev');
      if (!downKey.classList.contains("key-func"))
        addText(downKey.dataset.firstValue);
      // elem.value += downKey.dataset.firstValue;
    }
  });

  document.addEventListener("keyup", (event) => {
    const upKey = document.getElementById(event.code);
    if (upKey.dataset.code !== "CapsLock") upKey.classList.remove("active");
  });
}

export default startEventKey;

function addText(text, minus = "no") {
  const textarea = document.querySelector(".keyboard-area");
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  if (minus === "no") {
    textarea.value =
      textarea.value.slice(0, start) + text + textarea.value.slice(end);
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = start + 1;
  } 
    if (minus === "prev") {
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
    if (minus === "next") {
      if (start === end) {
        textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end + 1);
      } else {
        textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end);
      }
      textarea.selectionStart = start;
      textarea.selectionEnd = start;
    }
  
}
