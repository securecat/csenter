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

### v1.2.1 — 2026-06-29

#### Changed

- Increase minimum font size to 14px in popup and options pages for improved accessibility

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
| Default | Enter | Shift+Enter |
| Ctrl+Enter | Ctrl+Enter | Enter / Shift+Enter / その他 |
| Shift+Enter | Shift+Enter | Enter / Ctrl+Enter / その他 |
| Ctrl+Shift+Enter | Ctrl+Shift+Enter | Enter / Shift+Enter / Ctrl+Enter / その他 |

macOSでは Ctrl を Cmd と読み替えてください。

## IME対応

変換中のEnterキー（確定操作）には反応しません。

## 更新履歴

### v1.2.1 — 2026-06-29

#### 変更

- アクセシビリティ改善のため、ポップアップおよび設定ページのフォントサイズを14px以上に統一

全履歴は [CHANGELOG.md](CHANGELOG.md) を参照。
