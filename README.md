# Mamoru Portfolio

個人開発・学習開発で制作したWebアプリケーションや、これまで取り組んできた開発内容を紹介するポートフォリオサイトです。

Next.js・TypeScriptを使用してフロントエンドのみで構築し、Cloudflare Pagesで公開しています。

## 公開URL

https://mamoru-portfolio.pages.dev

## GitHub

https://github.com/simanuki0923/mamoru-portfolio

## 開発目的

個人開発や学習開発の成果を整理し、エンジニアとしての制作実績や開発スキルを確認できるポートフォリオとして制作しました。

主に以下の内容を掲載しています。

- 自己紹介
- 使用技術
- 個人開発・学習開発の制作実績
- プロジェクト詳細
- 学習内容
- GitHubリンク

## 使用技術

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### UI / Library

- Lucide React
- Next.js Image

### Build / Styling

- PostCSS
- Next.js Static Export

### Development

- Node.js
- npm
- Git
- GitHub

### Hosting

- Cloudflare Pages

## 主な制作実績

- SalesFlow AI
- BookShelf
- 勤怠管理システム

各制作実績の詳細はポートフォリオサイト内のProjectsページに掲載しています。

## 実装内容

- Next.js App Routerによるページ構成
- TypeScriptによる型管理
- Tailwind CSSによるUI実装
- レスポンシブデザイン
- Header・Footerなどの共通コンポーネント化
- Projectデータの一元管理
- Project一覧表示
- Project絞り込み機能
- Dynamic RouteによるProject詳細ページ
- `generateStaticParams()` による静的ページ生成
- Next.js Imageによる画像表示
- 404ページ
- Static Exportによる静的サイト生成
- GitHubによるソースコード管理
- Cloudflare Pagesへの自動デプロイ

## 技術構成

```text
Next.js
├── App Router
├── React
├── TypeScript
├── Tailwind CSS
├── Lucide React
├── Next.js Image
│
├── Project Data
│   └── TypeScript
│
├── Static Export
│   └── out/
│
├── Git / GitHub
│
└── Cloudflare Pages
```

本サイトはバックエンドやデータベースを使用せず、フロントエンドのみの静的ポートフォリオとして構築しています。

Project情報はTypeScriptファイルで管理し、Next.jsのStatic Exportを使用して静的HTMLとして生成しています。

## ディレクトリ構成

```text
mamoru-portfolio/
├── public/
│   └── images/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   └── types/
│
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## ローカル環境での起動

リポジトリを取得します。

```bash
git clone git@github.com:simanuki0923/mamoru-portfolio.git
```

プロジェクトへ移動します。

```bash
cd mamoru-portfolio
```

依存パッケージをインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで以下へアクセスします。

```text
http://localhost:3000
```

## 本番ビルド

```bash
npm run build
```

Next.jsのStatic Exportを使用しているため、ビルド成功後は以下のディレクトリに静的ファイルが生成されます。

```text
out/
```

## デプロイ

GitHubリポジトリとCloudflare Pagesを連携して公開しています。

### Cloudflare Pages設定

```text
Production branch:
main

Framework preset:
Next.js (Static HTML Export)

Build command:
npx next build

Build output directory:
out
```

`main` ブランチへPushすると、Cloudflare Pagesで自動的にビルド・デプロイされます。

## 更新手順

```bash
git add .

git commit -m "feat: update portfolio"

git push origin main
```

GitHubへのPush後、Cloudflare Pagesへ自動的に反映されます。

## 今後の改善予定

- 制作実績の追加
- Project詳細内容の拡充
- 実画面スクリーンショットの追加
- レスポンシブデザインの調整
- SEO対応
- OGP設定
- favicon設定
- アクセシビリティ改善
- パフォーマンス改善

## Author

島貫 守

GitHub  
https://github.com/simanuki0923