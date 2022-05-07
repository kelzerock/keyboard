class CreateKey{
  constructor(parentNode, firstIndex, secondIndex, func, size){
    this.parentNode = parentNode;
    this.firstIndex = firstIndex;
    this.secondIndex = secondIndex;
    this.func = func;
    this.size = size;
    this.node = ''
  }

  create(){
    const elemMain = document.createElement('div');
    elemMain.classList.add(`key-${this.size}`);
    elemMain.classList.add('key')
    const elemFirst = document.createElement('div');
    elemFirst.innerHTML = this.firstIndex;
    const elemSecond = document.createElement('div');
    elemSecond.innerHTML = this.secondIndex;
    elemMain.append(elemFirst);
    elemMain.append(elemSecond);
    this.node = elemMain;
    this.parentNode.append(elemMain)
  }
}

export default CreateKey