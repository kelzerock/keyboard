const keysForKeyboard = {
  en: [
    [
      {
        first: '`', second: '~', func: false, size: 1, data: 'Backquote',
      },
      {
        first: '1', second: '!', func: false, size: 1, data: 'Digit1',
      },
      {
        first: '2', second: '@', func: false, size: 1, data: 'Digit2',
      },
      {
        first: '3', second: '#', func: false, size: 1, data: 'Digit3',
      },
      {
        first: '4', second: '$', func: false, size: 1, data: 'Digit4',
      },
      {
        first: '5', second: '%', func: false, size: 1, data: 'Digit5',
      },
      {
        first: '6', second: '^', func: false, size: 1, data: 'Digit6',
      },
      {
        first: '7', second: '&', func: false, size: 1, data: 'Digit7',
      },
      {
        first: '8', second: '*', func: false, size: 1, data: 'Digit8',
      },
      {
        first: '9', second: '(', func: false, size: 1, data: 'Digit9',
      },
      {
        first: '0', second: ')', func: false, size: 1, data: 'Digit0',
      },
      {
        first: '-', second: '_', func: false, size: 1, data: 'Minus',
      },
      {
        first: '=', second: '+', func: false, size: 1, data: 'Equal',
      },
      {
        first: 'Backspace', second: '', func: true, size: 2, data: 'Backspace',
      },
    ], [
      {
        first: 'Tab', second: '', func: true, size: 1, data: 'Tab',
      },
      {
        first: 'q', second: '', func: false, size: 1, data: 'KeyQ',
      },
      {
        first: 'w', second: '', func: false, size: 1, data: 'KeyW',
      },
      {
        first: 'e', second: '', func: false, size: 1, data: 'KeyE',
      },
      {
        first: 'r', second: '', func: false, size: 1, data: 'KeyR',
      },
      {
        first: 't', second: '', func: false, size: 1, data: 'KeyT',
      },
      {
        first: 'y', second: '', func: false, size: 1, data: 'KeyY',
      },
      {
        first: 'u', second: '', func: false, size: 1, data: 'KeyU',
      },
      {
        first: 'i', second: '', func: false, size: 1, data: 'KeyI',
      },
      {
        first: 'o', second: '', func: false, size: 1, data: 'KeyO',
      },
      {
        first: 'p', second: '', func: false, size: 1, data: 'KeyP',
      },
      {
        first: '[', second: '{', func: false, size: 1, data: 'BracketLeft',
      },
      {
        first: ']', second: '}', func: false, size: 1, data: 'BracketRight',
      },
      {
        first: 'Del', second: '', func: true, size: 2, data: 'Delete',
      },
    ], [
      {
        first: 'Caps lock', second: '', func: true, size: 2, data: 'CapsLock',
      },
      {
        first: 'a', second: '', func: false, size: 1, data: 'KeyA',
      },
      {
        first: 's', second: '', func: false, size: 1, data: 'KeyS',
      },
      {
        first: 'd', second: '', func: false, size: 1, data: 'KeyD',
      },
      {
        first: 'f', second: '', func: false, size: 1, data: 'KeyF',
      },
      {
        first: 'g', second: '', func: false, size: 1, data: 'KeyG',
      },
      {
        first: 'h', second: '', func: false, size: 1, data: 'KeyH',
      },
      {
        first: 'j', second: '', func: false, size: 1, data: 'KeyJ',
      },
      {
        first: 'k', second: '', func: false, size: 1, data: 'KeyK',
      },
      {
        first: 'l', second: '', func: false, size: 1, data: 'KeyL',
      },
      {
        first: ';', second: ':', func: false, size: 1, data: 'Semicolon',
      },
      {
        first: '\'', second: '"', func: false, size: 1, data: 'Quote',
      },
      {
        first: '\\', second: '|', func: false, size: 1, data: 'Backslash',
      },
      {
        first: 'Enter', second: '', func: true, size: 2, data: 'Enter',
      },
    ], [
      {
        first: 'Shift', second: '', func: true, size: 2, data: 'ShiftLeft',
      },
      {
        first: 'z', second: '', func: false, size: 1, data: 'KeyZ',
      },
      {
        first: 'x', second: '', func: false, size: 1, data: 'KeyX',
      },
      {
        first: 'c', second: '', func: false, size: 1, data: 'KeyC',
      },
      {
        first: 'v', second: '', func: false, size: 1, data: 'KeyV',
      },
      {
        first: 'b', second: '', func: false, size: 1, data: 'KeyB',
      },
      {
        first: 'n', second: '', func: false, size: 1, data: 'KeyN',
      },
      {
        first: 'm', second: '', func: false, size: 1, data: 'KeyM',
      },
      {
        first: ',', second: '<', func: false, size: 1, data: 'Comma',
      },
      {
        first: '.', second: '>', func: false, size: 1, data: 'Period',
      },
      {
        first: '/', second: '?', func: false, size: 1, data: 'Slash',
      },
      {
        first: '???', second: '', func: true, size: 1, data: 'ArrowUp',
      },
      {
        first: 'Shift', second: '', func: true, size: 2, data: 'ShiftRight',
      },
    ], [
      {
        first: 'Cntr', second: '', func: true, size: 1, data: 'ControlLeft',
      },
      {
        first: 'Win', second: '', func: true, size: 1, data: 'MetaLeft',
      },
      {
        first: 'Alt', second: '', func: true, size: 1, data: 'AltLeft',
      },
      {
        first: ' ', second: ' ', func: false, size: 3, data: 'Space',
      },
      {
        first: 'Alt', second: '', func: true, size: 1, data: 'AltRight',
      },
      {
        first: '???', second: '', func: true, size: 1, data: 'ArrowLeft',
      },
      {
        first: '???', second: '', func: true, size: 1, data: 'ArrowDown',
      },
      {
        first: '???', second: '', func: true, size: 1, data: 'ArrowRight',
      },
      {
        first: 'Cntr', second: '', func: true, size: 1, data: 'ControlRight',
      },
    ],
  ],
  ru: [
    [
      {
        first: '??', second: '??', func: false, size: 1, data: 'Backquote',
      },
      {
        first: '1', second: '!', func: false, size: 1, data: 'Digit1',
      },
      {
        first: '2', second: '"', func: false, size: 1, data: 'Digit2',
      },
      {
        first: '3', second: '???', func: false, size: 1, data: 'Digit3',
      },
      {
        first: '4', second: ';', func: false, size: 1, data: 'Digit4',
      },
      {
        first: '5', second: '%', func: false, size: 1, data: 'Digit5',
      },
      {
        first: '6', second: ':', func: false, size: 1, data: 'Digit6',
      },
      {
        first: '7', second: '?', func: false, size: 1, data: 'Digit7',
      },
      {
        first: '8', second: '*', func: false, size: 1, data: 'Digit8',
      },
      {
        first: '9', second: '(', func: false, size: 1, data: 'Digit9',
      },
      {
        first: '0', second: ')', func: false, size: 1, data: 'Digit0',
      },
      {
        first: '-', second: '_', func: false, size: 1, data: 'Minus',
      },
      {
        first: '=', second: '+', func: false, size: 1, data: 'Equal',
      },
      {
        first: 'Backspace', second: '', func: true, size: 2, data: 'Backspace',
      },
    ], [
      {
        first: 'Tab', second: '', func: true, size: 1, data: 'Tab',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyQ',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyW',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyE',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyR',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyT',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyY',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyU',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyI',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyO',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyP',
      },
      {
        first: '??', second: '{', func: false, size: 1, data: 'BracketLeft',
      },
      {
        first: '??', second: '}', func: false, size: 1, data: 'BracketRight',
      },
      {
        first: 'Del', second: '', func: true, size: 2, data: 'Delete',
      },
    ], [
      {
        first: 'Caps lock', second: '', func: true, size: 2, data: 'CapsLock',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyA',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyS',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyD',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyF',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyG',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyH',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyJ',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyK',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyL',
      },
      {
        first: '??', second: ':', func: false, size: 1, data: 'Semicolon',
      },
      {
        first: '??', second: '"', func: false, size: 1, data: 'Quote',
      },
      {
        first: '\\', second: '|', func: false, size: 1, data: 'Backslash',
      },
      {
        first: 'Enter', second: '', func: true, size: 2, data: 'Enter',
      },
    ], [
      {
        first: 'Shift', second: '', func: true, size: 2, data: 'ShiftLeft',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyZ',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyX',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyC',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyV',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyB',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyN',
      },
      {
        first: '??', second: '', func: false, size: 1, data: 'KeyM',
      },
      {
        first: '??', second: '<', func: false, size: 1, data: 'Comma',
      },
      {
        first: '??', second: '>', func: false, size: 1, data: 'Period',
      },
      {
        first: '.', second: '?', func: false, size: 1, data: 'Slash',
      },
      {
        first: '???', second: '', func: true, size: 1, data: 'ArrowUp',
      },
      {
        first: 'Shift', second: '', func: true, size: 2, data: 'ShiftRight',
      },
    ], [
      {
        first: 'Cntr', second: '', func: true, size: 1, data: 'ControlLeft',
      },
      {
        first: 'Win', second: '', func: true, size: 1, data: 'MetaLeft',
      },
      {
        first: 'Alt', second: '', func: true, size: 1, data: 'AltLeft',
      },
      {
        first: ' ', second: ' ', func: false, size: 3, data: 'Space',
      },
      {
        first: 'Alt', second: '', func: true, size: 1, data: 'AltRight',
      },
      {
        first: '???', second: '', func: true, size: 1, data: 'ArrowLeft',
      },
      {
        first: '???', second: '', func: true, size: 1, data: 'ArrowDown',
      },
      {
        first: '???', second: '', func: true, size: 1, data: 'ArrowRight',
      },
      {
        first: 'Cntr', second: '', func: true, size: 1, data: 'ControlRight',
      },
    ],
  ],
};

export default keysForKeyboard;
