function eventForInput(elemInput, keyboard){
  document.addEventListener('keydown', (event)=>{
    const value = keyboard.querySelector(`#${event.code}`).dataset.firstValue
    elemInput.value += value;
  })
}

export default eventForInput