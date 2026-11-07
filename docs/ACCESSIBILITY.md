# Accessibility

Last updated: 2026-11-07

## Priorities and Goals

CSEnter for AI Chat is itself an accessibility tool. In most AI chat services, pressing Enter alone sends your message. This causes accidental sends when you press Enter to confirm an IME conversion, or when a person with an upper limb disability or tremor touches Enter unintentionally. CSEnter prevents these accidental sends by requiring a modifier key combination to send.

This statement covers two things:

- The extension's own UI (the popup and the options page)
- How CSEnter affects keyboard input in each supported AI chat service

For the UI, we target WCAG 2.2 Level AA, and we treat it as a minimum, not a ceiling. Some of our own rules are stricter than AA (see [Contributor Expectations](#contributor-expectations)). We have not had a third-party evaluation, so this is a target, not a claim of conformance.

## Behavior in AI Chat Services

CSEnter only handles the Enter key pressed in an input field.

- It ignores Enter while an IME is composing text
- It does not touch any key or shortcut other than Enter
- It skips input fields with `role="combobox"`, such as search boxes
- It does nothing until you select at least one modifier key

## Supported Environments

- Browser: Google Chrome (desktop)
- Operating systems: tested on Windows and macOS
- Screen readers: tested with NVDA on Windows. We have not yet tested other screen readers, including VoiceOver on macOS
- All features can be operated with a keyboard alone

## Known Limitations

- **Sending or line breaks may stop working after a service changes its site.** CSEnter works by re-sending Enter or Shift+Enter key events to each service's input field, so it depends on how each site handles them.
  - Workaround: On the options page, under "Enabled services," you can turn CSEnter off for that service only. Please turn it off and let us know through GitHub Issues until a fix is released.
- The accessibility of the AI chat services themselves is outside the scope of CSEnter.

## Reporting Accessibility Barriers

Please report barriers through [GitHub Issues](https://github.com/securecat/csenter/issues). You can write in English or Japanese.

The following details help us, but all of them are optional:

- What you were trying to do (for example, "I can't send a message in ChatGPT")
- The service and the URL of the page
- What happened, and what you expected
- Your OS, browser version, and CSEnter version
- Any assistive technology you use, such as a screen reader

You don't need to tell us about any disability. Screenshots and recordings are not required.

## Response Process

CSEnter is developed by an individual, so we can't promise a deadline for replies or fixes. We will respond as quickly as we can.

- We will reply on the issue once we've seen your report
- If there is a workaround, we will share it
- Before releasing a fix, we may ask you to confirm that it works for you
- Fixes are recorded in [CHANGELOG.md](../CHANGELOG.md)

## Contributor Expectations

These expectations apply equally to human contributors and coding agents.

When you change the UI:

- Use native form controls (`<input>`, `<select>`, `<textarea>`). Don't use `<div>` or `<span>` as buttons; use `<button>` for actions on the page and `<a>` for navigation
- Don't use the `disabled` attribute
- Don't remove focus indicators (no `outline: none`)
- Don't remove link underlines
- Keep text contrast at 7:1 or higher for body text and 4.5:1 or higher for secondary text, in both light and dark themes
- Keep non-text elements, such as borders and icons, at 3:1 or higher against adjacent colors
- Don't apply `opacity` to elements that need contrast
- Use a minimum font size of 16px for Japanese and 14px for English
- Use `font-family: sans-serif` (don't use `system-ui`)
- Don't dismiss status messages automatically
- Don't add anything that moves on its own, such as auto-scrolling

After the change, check that everything can be operated with a keyboard alone, and that a screen reader such as NVDA reads the content correctly.

When you change `content.js`, keep ignoring Enter during IME composition, and don't touch keys other than Enter.

## Ownership and Maintenance

This statement is maintained by the maintainer, securecat. We update it when we add features or when the tested environments change.

## Feedback on This Statement

Suggestions about this statement or our approach to accessibility are also welcome through [GitHub Issues](https://github.com/securecat/csenter/issues).

---

# アクセシビリティ

最終更新：2026-11-07

## 優先事項と目標

CSEnter for AI Chat は、それ自体がアクセシビリティのための道具です。多くのAIチャットサービスでは、Enterキー単体でメッセージが送信されます。そのため、IMEで変換を確定しようとしてEnterを押したときや、上肢障害や振動障害のある方が意図せずEnterに触れたときに、書きかけのメッセージが送信されてしまいます。CSEnter は、送信に修飾キーとの組み合わせを求めることで、こうした誤送信を防ぎます。

この文書が対象とするのは、次の2つです。

- 拡張機能そのもののUI（ポップアップと詳細設定ページ）
- 対応している各AIチャットサービスで、CSEnter がキー操作に与える影響

UIは WCAG 2.2 のレベル AA を目標とし、これを上限ではなく下限と考えています。AAより厳しい独自の基準もあります（[貢献者への期待](#貢献者への期待)を参照）。第三者による試験は受けていないため、これは目標であり、適合を表明するものではありません。

## 各AIチャットサービスでの動作

CSEnter が扱うのは、入力欄で押されたEnterキーだけです。

- IMEで変換している間のEnterには反応しません
- Enter以外のキーやショートカットには触れません
- 検索欄など、`role="combobox"` の入力欄は対象外です
- 修飾キーを1つも選んでいない間は、何もしません

## 対応している環境

- ブラウザ：Google Chrome（デスクトップ版）
- OS：Windows、macOS で動作を確認済み
- スクリーンリーダー：Windows の NVDA で読み上げを確認済み。macOS の VoiceOver など、ほかのスクリーンリーダーではまだ試していません
- すべての機能を、キーボードだけで操作できます

## 既知の制限

- **サービス側でサイトが変更されると、送信や改行が意図どおりに動かなくなることがあります。** CSEnter は、各サービスの入力欄に Enter や Shift+Enter のキー入力を作り直して送ることで動いているため、各サイトがそれをどう扱うかに左右されます。
  - 回避策：詳細設定の「有効なサービス」で、そのサービスだけ CSEnter を無効にできます。修正版が出るまでは無効にしたうえで、GitHub Issues でお知らせください。
- 各AIチャットサービスそのもののアクセシビリティは、CSEnter の対象外です。

## アクセシビリティの問題を報告する

問題は [GitHub Issues](https://github.com/securecat/csenter/issues) で報告してください。日本語でも英語でも構いません。

次のことを書いてもらえると助かりますが、どれも任意です。

- 何をしようとしていたか（例：「ChatGPTで送信できない」）
- 使っていたサービスと、そのページのURL
- 何が起きたか、どうなると思っていたか
- OS、ブラウザのバージョン、CSEnter のバージョン
- 使っている支援技術（スクリーンリーダーなど）

障害の有無や内容を書く必要はありません。スクリーンショットや録画も必須ではありません。

## 対応の流れ

CSEnter は個人で開発しているため、返信や修正の期限はお約束できません。それでも、できるかぎり早く対応します。

- 報告を確認したら、Issue で返信します
- 回避策があれば、お知らせします
- 修正をリリースする前に、問題が解消したかどうかの確認をお願いすることがあります
- 修正の内容は [CHANGELOG.md](../CHANGELOG.md) に記載します

## 貢献者への期待

ここに挙げることは、人間の貢献者にもコーディングエージェントにも、同じように求めます。

UIを変更するときは、次を守ってください。

- フォームにはネイティブの要素（`<input>`・`<select>`・`<textarea>`）を使う。`<div>` や `<span>` をボタンの代わりにしない。画面内の操作には `<button>`、ページの移動には `<a>` を使う
- `disabled` 属性を使わない
- フォーカスインジケーターを消さない（`outline: none` を使わない）
- リンクの下線を消さない
- テキストのコントラスト比は、本文で 7:1 以上、補足的なテキストで 4.5:1 以上にする。ライトテーマとダークテーマのそれぞれで満たす
- 境界線やアイコンなど、テキスト以外の要素も、隣り合う色に対して 3:1 以上にする
- コントラストが必要な要素に `opacity` を使わない
- 文字サイズは、日本語で 16px 以上、英語で 14px 以上にする
- `font-family` は `sans-serif` にする（`system-ui` は使わない）
- ステータスメッセージを自動で消さない
- 自動スクロールなど、ひとりでに動くものを作らない

変更したあとは、キーボードだけですべて操作できること、NVDA などのスクリーンリーダーで内容が正しく読み上げられることを確認してください。

`content.js` を変更するときは、IMEの変換中のEnterに反応しないこと、Enter以外のキーに触れないことを守ってください。

## 責任者と保守

この文書は、メンテナーの securecat が管理しています。機能を追加したときや、動作を確認した環境が変わったときに更新します。

## この文書へのフィードバック

この文書やアクセシビリティへの取り組み方についての提案も、[GitHub Issues](https://github.com/securecat/csenter/issues) で受け付けています。
