// popup / options ページ共通のUI言語切り替え。
// Chromeのブラウザ言語とは独立して、オプションページで選択したUI言語を chrome.storage.sync の
// uiLanguage に保存する。未設定（初回）の場合のみ chrome.i18n.getUILanguage() から既定値を決定する。

function detectBrowserUILanguage() {
  return chrome.i18n.getUILanguage().startsWith('ja') ? 'ja' : 'en';
}

async function resolveUILanguage() {
  const { uiLanguage } = await chrome.storage.sync.get({ uiLanguage: null });
  return uiLanguage ?? detectBrowserUILanguage();
}

async function fetchMessages(lang) {
  const url = chrome.runtime.getURL(`_locales/${lang}/messages.json`);
  const response = await fetch(url);
  const data = await response.json();
  return Object.fromEntries(
    Object.entries(data).map(([key, entry]) => [key, entry.message])
  );
}

function applyMessages(messages) {
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const key = el.getAttribute('data-i18n');
    if (messages[key] !== undefined) el.textContent = messages[key];
  }
  // data-i18n-html はプレースホルダーを含まない、拡張機能に同梱された信頼済みの静的テキストのみに使用する
  for (const el of document.querySelectorAll('[data-i18n-html]')) {
    const key = el.getAttribute('data-i18n-html');
    if (messages[key] !== undefined) el.innerHTML = messages[key];
  }
}

async function applyUILanguage() {
  const lang = await resolveUILanguage();
  const messages = await fetchMessages(lang);
  document.documentElement.lang = lang;
  applyMessages(messages);
  return lang;
}
