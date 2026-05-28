## バージョン管理

- バージョン記載箇所：`manifest.json` の `version`
- 更新のたびに semver に従ってバージョンを上げること
- README.md の Changelog セクション（日本語は 更新履歴 セクション）に変更内容を追記すること
  - 形式は [Keep a Changelog](https://keepachangelog.com/) に準拠すること（`[Unreleased]` セクションは使わない）
  - バージョン見出し：`### [1.0.2] - 2026-05-28`
  - 変更種別を `####` 見出しで分類すること（`Added` / `Changed` / `Fixed` / `Security` など）
