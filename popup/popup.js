const uiLanguageReady = applyUILanguage();

document.getElementById('advancedLink').addEventListener('click', (e) => {
  e.preventDefault();
  chrome.runtime.openOptionsPage();
});

const radios = document.querySelectorAll('input[name="sendKey"]');
const currentKey = document.getElementById("currentKey");

function labelForSendKey(sendKey) {
  const radio = document.querySelector(`input[name="sendKey"][value="${sendKey}"]`);
  return radio?.closest('label').querySelector('[data-i18n]').textContent ?? sendKey;
}

async function showCurrentSendKey(sendKey) {
  await uiLanguageReady;
  currentKey.textContent = labelForSendKey(sendKey);
}

// 初期表示
chrome.storage.sync.get({ sendKey: "Default" }, ({ sendKey }) => {
  showCurrentSendKey(sendKey);
  for (const radio of radios) {
    radio.checked = radio.value === sendKey;
  }
});

// 変更時
for (const radio of radios) {
  radio.addEventListener("change", () => {
    if (!radio.checked) return;
    const sendKey = radio.value;

    chrome.storage.sync.set({ sendKey }, () => {
      showCurrentSendKey(sendKey);

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.id) {
          chrome.tabs
            .sendMessage(tabs[0].id, {
              type: "sendKeyChanged",
              sendKey
            })
            .catch(() => {});
        }
      });
    });
  });
}
