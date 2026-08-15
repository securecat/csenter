# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.3.1] - 2026-08-15

### Added

- Work around a display bug in Google Search's AI Mode where the text caret doesn't appear on blank lines or at the end of a line

## [1.3.0] - 2026-08-09

### Added

- Add Japanese UI translation for the popup and options pages
- Add a UI Language setting on the options page, defaulting to Japanese or English based on the browser's language
- Add Japanese localization for the extension name and description via `_locales`

## [1.2.2] - 2026-07-04

### Fixed

- Exclude elements with `role="combobox"` from key handling, preventing CSEnter from interfering with search inputs such as Claude.ai's command palette (also replaces the Google Search-specific exclusion with this more general approach)

## [1.2.1] - 2026-06-29

### Changed

- Increase minimum font size to 14px in popup and options pages for improved accessibility

## [1.2.0] - 2026-06-19

### Added

- Add Advanced Settings page with per-service enable/disable toggles

## [1.1.3] - 2026-06-19

### Changed

- Improve Google Search targeting: exclude the search box by `name="q"` instead of matching an obfuscated class name

## [1.1.2] - 2026-06-19

### Fixed

- Fix detection of AI Mode input in Google Search (Google changed the attribute from `id="ITIRGe"` to `class="ITIRGe"`)

## [1.1.1] - 2026-06-17

### Fixed

- Limit Google Search integration to AI Mode input only

## [1.1.0] - 2026-06-17

### Added

- Added support for AI Mode in Google Search

## [1.0.2] - 2026-05-14

### Fixed

- Fixed radio button visibility in dark theme

## [1.0.1] - 2026-05-11

### Fixed

- Improved accessibility: added `<legend>` to the popup `<fieldset>`

## [1.0.0] - 2026-05-07

- Initial release

---

# 更新履歴

## [1.3.1] - 2026-08-15

### 追加

- Google検索のAIモード自体の表示不具合（改行のみの行や行末でキャレットが表示されない）を回避する処理を追加

## [1.3.0] - 2026-08-09

### 追加

- ポップアップおよび設定ページの日本語UIを追加
- 設定ページに「UI言語」設定を追加（ブラウザの言語設定が日本語かどうかに応じて、初期値は日本語または英語になる）
- `_locales` による拡張機能名・説明文の日本語ローカライズを追加

## [1.2.2] - 2026-07-04

### 修正

- `role="combobox"` を持つ要素（Claude.aiのコマンドパレットなど）をキー処理の対象外にし、チャット以外の検索入力欄での誤動作を防止（Google検索の個別除外ロジックもこの汎用的な方式に置き換え）

## [1.2.1] - 2026-06-29

### 変更

- アクセシビリティ改善のため、ポップアップおよび設定ページのフォントサイズを14px以上に統一

## [1.2.0] - 2026-06-19

### 追加

- サービスごとに有効/無効を切り替えられる「上級者向け設定」ページを追加

## [1.1.3] - 2026-06-19

### 変更

- Google検索の対象判定を改善：難読化クラス名への依存をやめ、`name="q"` で通常の検索窓を除外する方式に変更

## [1.1.2] - 2026-06-19

### 修正

- Google検索のAIモード入力欄の検出を修正（Googleが `id="ITIRGe"` を `class="ITIRGe"` に変更した影響）

## [1.1.1] - 2026-06-17

### 修正

- Google検索との連携をAIモードの入力欄のみに限定

## [1.1.0] - 2026-06-17

### 追加

- Google検索 AIモードに対応

## [1.0.2] - 2026-05-14

### 修正

- ダークテーマでのラジオボタンの表示を修正

## [1.0.1] - 2026-05-11

### 修正

- アクセシビリティ改善：ポップアップの `<fieldset>` に `<legend>` を追加

## [1.0.0] - 2026-05-07

- 初回リリース
