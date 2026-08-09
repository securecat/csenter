const SERVICE_KEYS = ['claude', 'chatgpt', 'gemini', 'google'];
const DEFAULT_SERVICES = { claude: true, chatgpt: true, gemini: true, google: true };
const UI_LANGUAGES = ['en', 'ja'];

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

const languageRadios = Object.fromEntries(
  UI_LANGUAGES.map((lang) => [lang, document.querySelector(`input[name="uiLanguage"][value="${lang}"]`)])
);

resolveUILanguage().then((lang) => {
  languageRadios[lang].checked = true;
});

for (const lang of UI_LANGUAGES) {
  languageRadios[lang].addEventListener('change', () => {
    if (!languageRadios[lang].checked) return;
    chrome.storage.sync.set({ uiLanguage: lang }, () => {
      applyUILanguage();
    });
  });
}

applyUILanguage();
