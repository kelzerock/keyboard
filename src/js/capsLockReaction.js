export default function capsLockReaction(elem) {
  const arrElem = elem.querySelectorAll("p");

  if (!elem.classList.contains("key-func")) {
    if(localStorage.capsLock !== 'false'){
    arrElem[0].innerHTML = arrElem[0].innerHTML.toUpperCase();
    elem.dataset.firstValue = arrElem[0].innerHTML.toUpperCase();
  } else {
    arrElem[0].innerHTML = arrElem[0].innerHTML.toLowerCase();
    elem.dataset.firstValue = arrElem[0].innerHTML.toLowerCase();
  }        
}

    document.addEventListener("keydown", (event) => {
    if (event.code === "CapsLock") {
      console.log('this is caps lock')
      if (!elem.classList.contains("key-func")) {
          if(localStorage.capsLock !== 'true'){
            // console.log('this is caps lock - true')
          arrElem[0].innerHTML = arrElem[0].innerHTML.toUpperCase();
          elem.dataset.firstValue = arrElem[0].innerHTML
        } else {
          // console.log('this is caps lock - false')
          arrElem[0].innerHTML = arrElem[0].innerHTML.toLowerCase();
          elem.dataset.firstValue = arrElem[0].innerHTML
        }        
      }
    }
  });
}
