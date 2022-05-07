class CreateKey{
  constructor(parentNode, firstIndex, secondIndex, func, size, dataAttr){
    this.parentNode = parentNode;
    this.firstIndex = firstIndex;
    this.secondIndex = secondIndex;
    this.func = func;
    this.size = size;
    this.dataAttr = dataAttr;
    this.node = '';
  }

  create(){
    const elemMain = document.createElement('div');
    elemMain.classList.add(`key-${this.size}`);
    elemMain.classList.add('key');
    elemMain.dataset.code = this.dataAttr;
    elemMain.id = this.dataAttr;
    if(!this.secondIndex) elemMain.classList.add('key-one');
    const elemFirst = document.createElement('p');
    elemFirst.classList.add('p-first')
    if(this.func){
     elemFirst.innerHTML = this.firstIndex;
     elemMain.classList.add('key-func');
    } else {
      elemFirst.innerHTML = this.firstIndex.toUpperCase();
    }

    const elemSecond = document.createElement('p');
    elemSecond.innerHTML = this.secondIndex;
    elemSecond.classList.add('p-second')
    elemMain.append(elemFirst);
    elemMain.append(elemSecond);

    this.node = elemMain;
    this.parentNode.append(elemMain)
  }
}

export default CreateKey