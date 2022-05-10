class CreateElement {
  constructor(parentNode, tag, className, innerInfo = '') {
    this.parentNode = parentNode;
    this.tag = tag;
    this.className = className;
    this.innerInfo = innerInfo;
    this.node = '';
  }

  create() {
    const elem = document.createElement(this.tag);
    elem.classList.add(this.className);
    elem.innerHTML = this.innerInfo;
    this.parentNode.append(elem);
    this.node = elem;
  }
}

export default CreateElement;
