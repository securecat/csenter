# CSEnter for AI Chat

A Chrome extension that lets you change the send trigger key in AI chat services.

## Supported Services

- Claude (claude.ai)
- ChatGPT (chatgpt.com)
- Gemini (gemini.google.com)
- Gemini Notebook (notebook.google.com)
- Microsoft Copilot (copilot.com)
- GitHub Copilot (github.com/copilot, and the Copilot chat input on the dashboard and in the side panel)
- Grok (grok.com)
- Grok on X (x.com/i/grok, and the Grok chat window opened from posts)
- AI Mode in Google Search (google.com/search)

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
2. Check any combination of Shift, Ctrl, and Alt to set the key combination that sends your message (on macOS these are shown as Shift, Command, and Option)
3. Changes take effect immediately — no page reload required

## Options

With no modifiers checked (default), Enter sends and Shift+Enter inserts a new line, following each service's own default behavior.

Once you check one or more modifiers, that exact combination becomes the send key — pressing Enter alone, or Enter with any other combination, inserts a new line instead.

## IME Support

Enter key presses during IME composition (e.g. Japanese input) are ignored and pass through as normal.

## Changelog

### v1.7.0 — 2026-10-18

#### Added

- Add support for Grok (grok.com)
- Add support for Grok on X, covering the Grok page (x.com/i/grok) and the Grok chat window opened from the Grok button on posts

#### Changed

- Add Grok to the services named in the extension description

See [CHANGELOG.md](CHANGELOG.md) for full history.

---

# CSEnter for AI Chat（日本語）

AIチャットサービスの入力欄における送信トリガーキーを変更するChrome拡張です。

## 対応サービス

- Claude (claude.ai)
- ChatGPT (chatgpt.com)
- Gemini (gemini.google.com)
- Gemini Notebook (notebook.google.com)
- Microsoft Copilot (copilot.com)
- GitHub Copilot（github.com/copilot、およびダッシュボードやサイドパネルのCopilotチャット欄）
- Grok (grok.com)
- X の Grok（x.com/i/grok、およびポストのGrokボタンで開くチャット欄）
- Google検索 AIモード (google.com/search)

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
2. Shift・Ctrl・Altのチェックボックスを組み合わせて、送信に使うキーの組み合わせを設定する（macOSではShift・Command・Optionと表示されます）
3. 設定はリアルタイムで反映されます（リロード不要）

## 選択肢

何もチェックしていない場合（デフォルト）は、各サービス本来の挙動どおり Enter で送信、Shift+Enter で改行されます。

いずれかの修飾キーをチェックすると、そのキーの組み合わせだけが送信キーになります。Enter単体やそれ以外の組み合わせでは、代わりに改行が入力されます。

## IME対応

変換中のEnterキー（確定操作）には反応しません。

## 更新履歴

### v1.7.0 — 2026-10-18

#### 追加

- Grok（grok.com）に対応
- X の Grok に対応。Grokのページ（x.com/i/grok）と、ポストのGrokボタンで開くチャット欄で動作する

#### 変更

- 拡張機能の説明文で例示するサービスに、Grokを追加

全履歴は [CHANGELOG.md](CHANGELOG.md) を参照。
