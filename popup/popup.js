document.getElementById('advancedLink').addEventListener('click', (e) => {
  e.preventDefault();
  chrome.runtime.openOptionsPage();
});

const radios = document.querySelectorAll('input[name="sendKey"]');
const currentKey = document.getElementById("currentKey");

// 初期表示
chrome.storage.sync.get({ sendKey: "Default" }, ({ sendKey }) => {
  currentKey.textContent = sendKey;
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
      currentKey.textContent = sendKey;

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
