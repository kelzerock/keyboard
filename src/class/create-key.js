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
    if(!this.secondIndex) elemMain.classList.add('key-one')
    const elemFirst = document.createElement('p');
    if(this.func){
     elemFirst.innerHTML = this.firstIndex; 
     elemMain.classList.add('key-func');
    } else {
      elemFirst.innerHTML = this.firstIndex.toUpperCase();
    }


    const elemSecond = document.createElement('p');
    elemSecond.innerHTML = this.secondIndex;
    elemMain.append(elemFirst);
    elemMain.append(elemSecond);
    this.node = elemMain;
    this.parentNode.append(elemMain)
  }
}

export default CreateKey