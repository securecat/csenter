const SERVICE_KEYS = ['claude', 'chatgpt', 'gemini', 'google'];
const DEFAULT_SERVICES = { claude: true, chatgpt: true, gemini: true, google: true };

const checkboxes = Object.fromEntries(
  SERVICE_KEYS.map((key) => [key, document.querySelector(`input[name="${key}"]`)])
);

chrome.storage.sync.get({ services: DEFAULT_SERVICES }, ({ services }) => {
  for (const key of SERVICE_KEYS) {
    checkboxes[key].checked = services[key] !== false;
  }
});

for (const key of SERVICE_KEYS) {
  checkboxes[key].addEventListener('change', () => {
    const services = Object.fromEntries(
      SERVICE_KEYS.map((k) => [k, checkboxes[k].checked])
    );
    chrome.storage.sync.set({ services });
  });
}
