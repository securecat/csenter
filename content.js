(() => {
  // macOS判定
  const isMac = navigator.platform.toUpperCase().includes('MAC');

  const DEFAULT_MODIFIERS = { shift: false, ctrl: false, alt: false };
  let currentModifiers = { ...DEFAULT_MODIFIERS };
  const DEFAULT_SERVICES = { claude: true, chatgpt: true, gemini: true, google: true };
  let enabledServices = { ...DEFAULT_SERVICES };

  // 旧バージョン（ラジオ選択式）からの移行用
  function legacySendKeyToModifiers(sendKey) {
    switch (sendKey) {
      case 'Ctrl+Enter':       return { shift: false, ctrl: true,  alt: false };
      case 'Shift+Enter':      return { shift: true,  ctrl: false, alt: false };
      case 'Ctrl+Shift+Enter': return { shift: true,  ctrl: true,  alt: false };
      default:                 return { shift: false, ctrl: false, alt: false };
    }
  }

  function isDefaultModifiers(modifiers) {
    return !modifiers.shift && !modifiers.ctrl && !modifiers.alt;
  }

  chrome.storage.sync.get({ modifiers: null, sendKey: 'Default', services: DEFAULT_SERVICES }, ({ modifiers, sendKey, services }) => {
    currentModifiers = modifiers ?? legacySendKeyToModifiers(sendKey);
    enabledServices = services;
  });

  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'sendKeyChanged') {
      currentModifiers = message.modifiers;
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
    if (isDefaultModifiers(currentModifiers)) return false;
    const ctrl = isMac ? e.metaKey : e.ctrlKey;
    return e.shiftKey === currentModifiers.shift &&
      ctrl === currentModifiers.ctrl &&
      e.altKey === currentModifiers.alt;
  }

  function isNewlineKey(e) {
    if (e.key !== 'Enter') return false;
    if (isDefaultModifiers(currentModifiers)) return false;
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
    if (isDefaultModifiers(currentModifiers)) return;

    const service = getCurrentService();
    if (!service || !enabledServices[service]) return;

    // comboboxロール（検索窓・コマンドパレットなど）は除外
    if (e.target.getAttribute('role') === 'combobox') return;

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
