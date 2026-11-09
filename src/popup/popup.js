applyUILanguage();

document.getElementById('advancedLink').addEventListener('click', (e) => {
  e.preventDefault();
  chrome.runtime.openOptionsPage();
});

const checkboxes = {
  shift: document.getElementById('modShift'),
  ctrl: document.getElementById('modCtrl'),
  alt: document.getElementById('modAlt'),
};
const modCtrlLabel = document.getElementById('modCtrlLabel');
const modAltLabel = document.getElementById('modAltLabel');
const currentKey = document.getElementById('currentKey');

// 旧バージョン（ラジオ選択式）からの移行用
function legacySendKeyToModifiers(sendKey) {
  switch (sendKey) {
    case 'Ctrl+Enter':       return { shift: false, ctrl: true,  alt: false };
    case 'Shift+Enter':      return { shift: true,  ctrl: false, alt: false };
    case 'Ctrl+Shift+Enter': return { shift: true,  ctrl: true,  alt: false };
    default:                 return { shift: false, ctrl: false, alt: false };
  }
}

function buildCurrentLabel(modifiers, ctrlLabel, altLabel) {
  const parts = [];
  if (modifiers.shift) parts.push('Shift');
  if (modifiers.ctrl) parts.push(ctrlLabel);
  if (modifiers.alt) parts.push(altLabel);
  parts.push('Enter');
  return parts.join('+');
}

chrome.runtime.getPlatformInfo().then(({ os }) => {
  const isMac = os === 'mac';
  const ctrlLabel = isMac ? 'Command' : 'Ctrl';
  const altLabel = isMac ? 'Option' : 'Alt';
  const currentCtrlLabel = isMac ? 'Cmd' : 'Ctrl';

  modCtrlLabel.textContent = ctrlLabel;
  modAltLabel.textContent = altLabel;

  function updateCurrent(modifiers) {
    currentKey.textContent = buildCurrentLabel(modifiers, currentCtrlLabel, altLabel);
  }

  chrome.storage.sync.get({ modifiers: null, sendKey: 'Default' }, ({ modifiers, sendKey }) => {
    const resolved = modifiers ?? legacySendKeyToModifiers(sendKey);
    checkboxes.shift.checked = resolved.shift;
    checkboxes.ctrl.checked = resolved.ctrl;
    checkboxes.alt.checked = resolved.alt;
    updateCurrent(resolved);
  });

  for (const checkbox of Object.values(checkboxes)) {
    checkbox.addEventListener('change', () => {
      const modifiers = {
        shift: checkboxes.shift.checked,
        ctrl: checkboxes.ctrl.checked,
        alt: checkboxes.alt.checked,
      };

      chrome.storage.sync.set({ modifiers }, () => {
        updateCurrent(modifiers);

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs[0]?.id) {
            chrome.tabs
              .sendMessage(tabs[0].id, { type: 'sendKeyChanged', modifiers })
              .catch(() => {});
          }
        });
      });
    });
  }
});
