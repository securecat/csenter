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
2. Check any combination of Shift, Ctrl, and Alt to set the key combination that sends your message (on macOS these are shown as Shift, Command, and Option)
3. Changes take effect immediately — no page reload required

## Options

With no modifiers checked (default), Enter sends and Shift+Enter inserts a new line, following each service's own default behavior.

Once you check one or more modifiers, that exact combination becomes the send key — pressing Enter alone, or Enter with any other combination, inserts a new line instead.

## IME Support

Enter key presses during IME composition (e.g. Japanese input) are ignored and pass through as normal.

## Changelog

### v1.4.0 — 2026-09-03

#### Added

- Add Alt (Option on macOS) as a selectable send-key modifier, so any combination of Shift, Ctrl (Cmd), and Alt (Option) up to Shift+Ctrl+Alt+Enter can now be used to send messages

#### Changed

- Replace the popup's four fixed send-key options with independent checkboxes for each modifier; checkbox labels and the current setting automatically match the detected OS (Ctrl/Alt on Windows, Command/Option on macOS)

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
2. Shift・Ctrl・Altのチェックボックスを組み合わせて、送信に使うキーの組み合わせを設定する（macOSではShift・Command・Optionと表示されます）
3. 設定はリアルタイムで反映されます（リロード不要）

## 選択肢

何もチェックしていない場合（デフォルト）は、各サービス本来の挙動どおり Enter で送信、Shift+Enter で改行されます。

いずれかの修飾キーをチェックすると、そのキーの組み合わせだけが送信キーになります。Enter単体やそれ以外の組み合わせでは、代わりに改行が入力されます。

## IME対応

変換中のEnterキー（確定操作）には反応しません。

## 更新履歴

### v1.4.0 — 2026-09-03

#### 追加

- 送信キーの修飾キーとしてAlt（macOSではOption）を追加。Shift・Ctrl（Cmd）・Altを自由に組み合わせられるようになり、最大 Shift+Ctrl+Alt+Enter まで設定可能に

#### 変更

- ポップアップの送信キー選択を、従来の4択ラジオボタンから、各修飾キーごとの独立したチェックボックス方式に変更。チェックボックスのラベルや現在の設定表示は、検出したOSに応じて自動的にWindows表記（Ctrl/Alt）とmacOS表記（Command/Option）を切り替える

全履歴は [CHANGELOG.md](CHANGELOG.md) を参照。
