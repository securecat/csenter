(() => {
  // macOS判定
  const isMac = navigator.platform.toUpperCase().includes('MAC');

  let currentSendKey = 'Default';

  chrome.storage.sync.get({ sendKey: 'Default' }, ({ sendKey }) => {
    currentSendKey = sendKey;
  });

  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'sendKeyChanged') {
      currentSendKey = message.sendKey;
    }
  });

  function isSendKey(e) {
    if (e.key !== 'Enter') return false;
    const ctrl = isMac ? e.metaKey : e.ctrlKey;
    const shift = e.shiftKey;
    switch (currentSendKey) {
      case 'Default':          return false;
      case 'Ctrl+Enter':       return ctrl && !shift;
      case 'Shift+Enter':      return shift && !ctrl;
      case 'Ctrl+Shift+Enter': return ctrl && shift;
      default:                 return false;
    }
  }

  function isNewlineKey(e) {
    if (e.key !== 'Enter') return false;
    if (currentSendKey === 'Default') return false;
    return !isSendKey(e);
  }

  function fireEnter(target) {
    target.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Enter', code: 'Enter', keyCode: 13, which: 13,
      bubbles: true, cancelable: true,
      ctrlKey: false, shiftKey: false, metaKey: false, altKey: false,
    }));
  }

  function fireShiftEnter(target) {
    target.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Enter', code: 'Enter', keyCode: 13, which: 13,
      bubbles: true, cancelable: true,
      ctrlKey: false, shiftKey: true, metaKey: false, altKey: false,
    }));
  }

  function insertNewlineIntoTextarea(el) {
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const val = el.value;
    el.value = val.slice(0, start) + '\n' + val.slice(end);
    el.selectionStart = el.selectionEnd = start + 1;
    el.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function handleKeydown(e) {
    if (e.key !== 'Enter') return;
    if (e.isComposing || e.keyCode === 229) return;
    if (!e.isTrusted) return;
    if (currentSendKey === 'Default') return;

    if (isSendKey(e)) {
      e.preventDefault();
      e.stopPropagation();
      fireEnter(e.target);
    } else if (isNewlineKey(e)) {
      e.preventDefault();
      e.stopPropagation();
      // textareaの場合は直接改行を挿入する、以外はShift+Enterを再発火
      if (e.target.tagName === 'TEXTAREA') {
        insertNewlineIntoTextarea(e.target);
      } else {
        fireShiftEnter(e.target);
      }
    }
  }

  document.addEventListener('keydown', handleKeydown, true);
})();
