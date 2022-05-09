export default function shiftReaction(elem) {
  const arrElem = elem.querySelectorAll("p");
  document.addEventListener("keydown", (event) => {
    const globalCapsLock = document.querySelector("#CapsLock");
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
      if (arrElem[1].innerHTML) {
        elem.dataset.firstValue = elem.dataset.secondValue;
        // elem.dataset.firstValue = arrElem[1].innerHTML
        arrElem[1].classList.toggle("p-second");
        arrElem[1].classList.toggle("p-first");
        arrElem[0].classList.toggle("p-first");
        arrElem[0].classList.toggle("p-second");
      }
      if (!elem.classList.contains("key-func")) {
        if (!globalCapsLock.classList.contains("active")) {
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

  document.addEventListener("keyup", (event) => {
    const globalCapsLock = document.querySelector("#CapsLock");
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
      if (arrElem[1].innerHTML) {
        elem.dataset.firstValue = arrElem[1].innerHTML;
        arrElem[1].classList.toggle("p-second");
        arrElem[1].classList.toggle("p-first");
        arrElem[0].classList.toggle("p-first");
        arrElem[0].classList.toggle("p-second");
      }
      if (!elem.classList.contains("key-func")) {
        if (!globalCapsLock.classList.contains("active")) {
          arrElem[0].innerHTML = arrElem[0].innerHTML.toLowerCase();
        } else {
          arrElem[0].innerHTML = arrElem[0].innerHTML.toUpperCase();
        }
        elem.dataset.firstValue = arrElem[0].innerHTML;
      }
    }
  });
}
