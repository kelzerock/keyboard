function startEventKey(elem) {
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
    if (downKey.dataset.code === "CapsLock") downKey.classList.toggle("active");
    if (downKey.dataset.code === "Tab") elem.value += "\t";
    if (!event.isTrusted) {
      if (downKey.dataset.code === "Enter") elem.value += "\n";
      if (downKey.dataset.code === "ArrowLeft")
        elem.value += downKey.dataset.firstValue;
      if (downKey.dataset.code === "ArrowRight")
        elem.value += downKey.dataset.firstValue;
      if (downKey.dataset.code === "ArrowUp")
        elem.value += downKey.dataset.firstValue;
      if (downKey.dataset.code === "ArrowDown")
        elem.value += downKey.dataset.firstValue;
      if (!downKey.classList.contains("key-func"))
        elem.value += downKey.dataset.firstValue;
    }
  });

  document.addEventListener("keyup", (event) => {
    const upKey = document.getElementById(event.code);
    if (upKey.dataset.code !== "CapsLock") upKey.classList.remove("active");
  });
}

export default startEventKey;
