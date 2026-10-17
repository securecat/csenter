# CSEnter for AI Chat

A Chrome extension that lets you change the send trigger key in AI chat services.

## Supported Services

- Claude (claude.ai)
- ChatGPT (chatgpt.com)
- Gemini (gemini.google.com)
- Gemini Notebook (notebook.google.com)
- Microsoft Copilot (copilot.com)
- GitHub Copilot (github.com/copilot, and the Copilot chat input on the dashboard and in the side panel)
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

### v1.6.0 — 2026-10-17

#### Added

- Add support for Microsoft Copilot (copilot.com), enabled by default and toggleable in the options page's Enabled services section
- Add support for GitHub Copilot, covering the Copilot pages (github.com/copilot) and the Copilot chat input on other GitHub pages such as the dashboard and the side panel; enabled by default and toggleable in the options page. Comment fields in issues and pull requests keep GitHub's own behavior

#### Changed

- Describe the supported services in the extension description as "major AI chat services" instead of listing them all; the full list is in this README
- Write the `<meta charset>` declaration in lowercase (`utf-8`) in the popup and options pages, following the HTML Standard
- Remove the trailing slashes from void elements (`<meta>`, `<input>`) in the popup and options pages
- Remove `rel="noopener"` from the bug report link on the options page, since browsers already treat `target="_blank"` links as noopener

#### Removed

- Remove the workaround for the missing text caret in Google Search's AI Mode (`google-caret-fix.css`), as Google has fixed the issue

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

### v1.6.0 — 2026-10-17

#### 追加

- Microsoft Copilot（copilot.com）に対応。初期状態で有効になっており、詳細設定の「有効なサービス」でオン・オフを切り替え可能
- GitHub Copilot に対応。Copilotのページ（github.com/copilot）と、ダッシュボードやサイドパネルなど他のページにあるCopilotのチャット欄で動作する。初期状態で有効になっており、詳細設定でオン・オフを切り替え可能。IssueやPull Requestのコメント欄は、GitHub本来の挙動のまま

#### 変更

- 拡張機能の説明文で、対応サービスを全て列挙するのをやめ、「主要なAIチャットサービス」と表現するように変更（全サービスの一覧はこのREADMEに掲載）
- ポップアップと詳細設定ページの `<meta charset>` を、HTML Standard にならって小文字（`utf-8`）に変更
- ポップアップと詳細設定ページの空要素（`<meta>`・`<input>`）から、末尾のスラッシュを削除
- 詳細設定ページのバグ報告リンクから `rel="noopener"` を削除（`target="_blank"` のリンクは、ブラウザが既定で noopener として扱うため）

#### 削除

- Google検索のAIモードで、テキストキャレットが表示されない不具合への回避策（`google-caret-fix.css`）を削除。Google側で修正されたため

全履歴は [CHANGELOG.md](CHANGELOG.md) を参照。
