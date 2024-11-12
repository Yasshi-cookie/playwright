# Playwrightについて

ブラウザー自動化のためのE2Eテストフレームワーク。複数のブラウザでのテストを効率的に実行し、品質保証のプロセスを強化しています。[公式サイト](https://playwright.dev/)

# セットアップ方法

このセクションでは、この Next.js プロジェクトをローカル環境でセットアップするための手順を説明します。以下のステップに従ってください。

## 前提条件

このプロジェクトを実行する前に、以下のツールがシステムにインストールされていることを確認してください：

- Node.js: プロジェクトの実行環境。推奨されるバージョンは `.node-version` ファイルに記載のものを使用してください。
- npm (Node.jsに付属) または Yarn: パッケージマネージャー。

npm [公式サイト](https://nodejs.org/en/download/package-manager) からインストールしてください。

## 依存関係のインストール

プロジェクトのディレクトリに移動した後、次のコマンドを実行して必要な依存関係をインストールします：

``` bash
$ npm install
# または
$ yarn install
```

## 環境変数の設定

プロジェクトには、適切に機能するためにいくつかの環境変数が必要です。サンプルの環境設定ファイル .env.example を .env にコピーし、必要に応じて内容を編集してください：

```bash
$ cp .env.example .env
```

## 開発サーバーの起動

すべてのセットアップが完了したら、開発サーバーを起動します：

```bash
$ npm run dev
# または
$ yarn dev
```

これで、ブラウザで http://localhost:3000 にアクセスすると、開発中のアプリケーションを見ることができます。

# Playwrightの使い方

## テストの実行&テストレポートの出力
```bash
# テスト実行コマンド
$ npx playwright test # ヘッドレスモード（ブラウザを起動しない）で実行
$ npx playwright test --headed # ヘッドモードで実行
$ npx playwright test --ui # 特別なUIを起動して実行

# テストレポート出力
$ npx playwright show-report # 直前のテスト結果をブラウザで表示
```

## デバッグモード
以下の2つの方法があります。
詳細は公式ページを参照：https://playwright.dev/docs/debug

1. [VSCODEの拡張機能-Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)を使う方法
2. コマンド（デバッグモード（ステップバイステップでテストを実行可能）で実行）
```bash
$ npx playwright test --debug
```

## テストコード自動生成機能（CodeGen）
```bash
$ npx playwright codegen
```
