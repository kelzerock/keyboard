function startEventMouse(elemHTML) {
  elemHTML.addEventListener('mousedown', (event) => {
    if (elemHTML !== event.target) {
      const nameEvent = event.target.closest('.key').dataset.code;
      document.dispatchEvent(new KeyboardEvent('keydown', { code: nameEvent }));
      document.addEventListener('mouseup', () => {
        document.dispatchEvent(new KeyboardEvent('keyup', { code: nameEvent }));
      });
    }
  });
}

export default startEventMouse;
