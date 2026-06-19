(() => {
  // macOS判定
  const isMac = navigator.platform.toUpperCase().includes('MAC');

  let currentSendKey = 'Default';
  const DEFAULT_SERVICES = { claude: true, chatgpt: true, gemini: true, google: true };
  let enabledServices = { ...DEFAULT_SERVICES };

  chrome.storage.sync.get({ sendKey: 'Default', services: DEFAULT_SERVICES }, ({ sendKey, services }) => {
    currentSendKey = sendKey;
    enabledServices = services;
  });

  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'sendKeyChanged') {
      currentSendKey = message.sendKey;
    }
  });

  chrome.storage.onChanged.addListener((changes) => {
    if (changes.services) {
      enabledServices = changes.services.newValue;
    }
  });

  function getCurrentService() {
    const h = location.hostname;
    if (h === 'claude.ai') return 'claude';
    if (h === 'chatgpt.com') return 'chatgpt';
    if (h === 'gemini.google.com') return 'gemini';
    if (h === 'www.google.com') return 'google';
    return null;
  }

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

    const service = getCurrentService();
    if (!service || !enabledServices[service]) return;

    // Google検索ページでは通常の検索窓（name="q"）を除外
    if (location.hostname === 'www.google.com' && e.target.name === 'q') return;

    if (isSendKey(e)) {
      e.preventDefault();
      e.stopPropagation();
      fireEnter(e.target);
    } else if (isNewlineKey(e)) {
      e.preventDefault();
      e.stopPropagation();
      // textareaの場合は直接改行を挿入、それ以外はShift+Enterを再発火
      if (e.target.tagName === 'TEXTAREA') {
        insertNewlineIntoTextarea(e.target);
      } else {
        fireShiftEnter(e.target);
      }
    }
  }

  document.addEventListener('keydown', handleKeydown, true);
})();
