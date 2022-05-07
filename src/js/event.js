
function startEventKey(){
  document.addEventListener('keydown', (event)=>{
    const downKey = document.getElementById(event.code)
    downKey.classList.add('active')
  })

  document.addEventListener('keyup', (event)=>{
    const upKey = document.getElementById(event.code)
    upKey.classList.remove('active')
  })
}

export default startEventKey