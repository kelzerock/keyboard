function eventForInput(elemInput){
  document.addEventListener('keydown', ()=>{
    elemInput.focus();
  })
}

export default eventForInput