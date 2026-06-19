# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

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
