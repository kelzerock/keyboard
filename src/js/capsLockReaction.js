export default function capsLockReaction(elem) {
  const arrElem = elem.querySelectorAll("p");

    document.addEventListener("keydown", (event) => {
        const globalCapsLock = document.querySelector('#CapsLock')
    if (event.code === "CapsLock") {
      if (!elem.classList.contains("key-func")) {
        if(!globalCapsLock.classList.contains('active')){
          arrElem[0].innerHTML = arrElem[0].innerHTML.toUpperCase();
          elem.dataset.firstValue = arrElem[0].innerHTML
        } else {
          arrElem[0].innerHTML = arrElem[0].innerHTML.toLowerCase();
          elem.dataset.firstValue = arrElem[0].innerHTML
        }        
      }
    }
  });
}
