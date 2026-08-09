# CSEnter for AI Chat

A Chrome extension that lets you change the send trigger key in AI chat services.

## Supported Services

- Claude (claude.ai)
- ChatGPT (chatgpt.com)
- Gemini (gemini.google.com)
- AI Mode in Google Search (google.com/search)

> Microsoft Copilot is not supported.

## Installation

### Chrome Web Store

https://chromewebstore.google.com/detail/csenter-for-ai-chat/glkdanbnmpbdmljmcglcadpcdkehgfpn

> The Chrome Web Store version may lag behind the repository during the review process.

### Developer Mode (Manual Install)

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top right)
4. Click **Load unpacked** and select the repository folder

## How to Use

1. Click the extension icon to open the popup
2. Select your preferred send key from the radio buttons
3. Changes take effect immediately — no page reload required

## Options

| Setting | Send | New Line |
|---------|------|----------|
| Default | Enter | Shift+Enter |
| Ctrl+Enter | Ctrl+Enter | Enter / Shift+Enter / others |
| Shift+Enter | Shift+Enter | Enter / Ctrl+Enter / others |
| Ctrl+Shift+Enter | Ctrl+Shift+Enter | Enter / Shift+Enter / Ctrl+Enter / others |

On macOS, Ctrl functions as Cmd.

## IME Support

Enter key presses during IME composition (e.g. Japanese input) are ignored and pass through as normal.

## Changelog

### v1.3.0 — 2026-08-09

#### Added

- Add Japanese UI translation for the popup and options pages
- Add a UI Language setting on the options page, defaulting to Japanese or English based on the browser's language
- Add Japanese localization for the extension name and description via `_locales`

See [CHANGELOG.md](CHANGELOG.md) for full history.

---

# CSEnter for AI Chat（日本語）

AIチャットサービスの入力欄における送信トリガーキーを変更するChrome拡張です。

## 対応サービス

- Claude (claude.ai)
- ChatGPT (chatgpt.com)
- Gemini (gemini.google.com)
- Google検索 AIモード (google.com/search)

> Microsoft Copilot には対応していません。

## インストール

### Chrome ウェブストア

https://chromewebstore.google.com/detail/csenter-for-ai-chat/glkdanbnmpbdmljmcglcadpcdkehgfpn

> Chrome ウェブストア版は、審査中のため最新リリースより古い場合があります。

### デベロッパーモード（手動インストール）

1. このリポジトリをダウンロードまたはクローン
2. Chromeで `chrome://extensions/` を開く
3. 右上の **デベロッパーモード** を有効にする
4. **パッケージ化されていない拡張機能を読み込む** をクリックし、リポジトリのフォルダを選択

## 使い方

1. 拡張アイコンをクリックしてポップアップを開く
2. ラジオボタンの選択肢からお好みのキーを選択
3. 設定はリアルタイムで反映されます（リロード不要）

## 選択肢

| 設定 | 送信 | 改行 |
|------|------|------|
| デフォルト | Enter | Shift+Enter |
| Ctrl+Enter | Ctrl+Enter | Enter / Shift+Enter / その他 |
| Shift+Enter | Shift+Enter | Enter / Ctrl+Enter / その他 |
| Ctrl+Shift+Enter | Ctrl+Shift+Enter | Enter / Shift+Enter / Ctrl+Enter / その他 |

macOSでは Ctrl を Cmd に読み替えてください。

## IME対応

変換中のEnterキー（確定操作）には反応しません。

## 更新履歴

### v1.3.0 — 2026-08-09

#### 追加

- ポップアップおよび設定ページの日本語UIを追加
- 設定ページに「UI言語」設定を追加（ブラウザの言語設定が日本語かどうかに応じて、初期値は日本語または英語になる）
- `_locales` による拡張機能名・説明文の日本語ローカライズを追加

全履歴は [CHANGELOG.md](CHANGELOG.md) を参照。
