# Mamoru Portfolio

個人開発・学習開発で制作したWebアプリケーションや、これまで取り組んできた開発内容を紹介するポートフォリオサイトです。

Next.js・TypeScriptを使用した静的サイトとして構築し、Cloudflare Pagesで公開しています。

## 公開URL

https://mamoru-portfolio.pages.dev/

## GitHub

https://github.com/simanuki0923/mamoru-portfolio

## 開発目的

個人開発や学習開発の成果を整理し、エンジニアとしての制作実績・使用技術・開発で考えたことを確認できるポートフォリオとして制作しました。

主に以下の内容を掲載しています。

- 自己紹介
- 対応可能な開発内容
- 開発で大切にしていること
- 使用技術
- 個人開発・学習開発の制作実績
- Case Study形式のProject詳細
- 現在取り組んでいる学習内容
- GitHubへのリンク

## 主なページ

### Home

プロフィール、Services、Strengths、制作実績、Skills、Learning、Contactを掲載しています。

### Projects

個人開発・学習開発で制作したプロジェクトを一覧表示しています。

以下の条件で制作実績を絞り込むことができます。

- すべて
- 個人開発
- 学習・練習
- 開発中

### Project Detail

各プロジェクトをCase Study形式で紹介しています。

主に以下の内容を掲載しています。

- 開発背景・目的
- 概要
- 実装・設計内容
- 設計・実装で工夫した点
- 問題と解決
- この開発で得たこと
- 今後の改善予定
- GitHubリンク

### Skills

使用している技術と、現在の利用状況を掲載しています。

技術名だけではなく、以下のような区分で使用状況を表示しています。

- 個人開発
- 個人開発・学習
- 開発利用
- 開発環境
- 学習

あわせて、現在継続して取り組んでいる学習内容も掲載しています。

## 使用技術

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### UI / Library

- Lucide React
- `next/image`

### Build / Styling

- PostCSS
- Next.js Static Export

### Development

- Node.js
- npm
- Git
- GitHub
- VS Code

### Hosting

- Cloudflare Pages

## 主な制作実績

### SalesFlow AI

顧客・案件管理を想定したWebアプリケーションです。

### BookShelf

書籍管理・レビューなどを扱う学習開発プロジェクトです。

### 勤怠管理システム

勤怠打刻・勤怠一覧・申請・管理者承認などを想定したWebシステムです。

各制作実績の詳細は、ポートフォリオサイト内のProjectsページから確認できます。

## 実装内容

### Next.js / TypeScript

- Next.js App Routerによるページ構成
- TypeScriptによる型管理
- Dynamic RouteによるProject詳細ページ
- `generateStaticParams()` による静的ページ生成
- Metadataによるページタイトル・description設定
- Static Exportによる静的サイト生成
- 404ページ

### UI

- Tailwind CSSによるUI実装
- レスポンシブデザイン
- PC・タブレット・スマートフォン対応
- スマートフォン用ハンバーガーメニュー
- Header・Footerなどの共通コンポーネント化
- `next/image` による画像表示
- Lucide Reactによるアイコン表示

### Projects

- Projectデータの一元管理
- Project一覧表示
- Project絞り込み機能
- Dynamic RouteによるProject詳細表示
- Case Study形式の詳細ページ
- Project画像のレスポンシブ表示

### Skills

- Frontend / Backend / Tools分類
- 技術ごとの利用状況表示
- 学習内容一覧表示

### SEO / Branding

- SEO Metadata
- Open Graph設定
- OGP画像
- favicon
- canonical設定
- robots設定

### Accessibility

- キーボードによるTab操作
- ナビゲーションのARIA属性
- ハンバーガーメニューの`aria-expanded`
- Project絞り込みボタンの`aria-pressed`
- 画像のalt属性
- フォーカス表示

## 技術構成

```text
Next.js
├── App Router
├── React
├── TypeScript
├── Tailwind CSS
├── Lucide React
├── next/image
│
├── Project / Skill Data
│   └── TypeScript
│
├── SEO
│   ├── Metadata
│   ├── Open Graph
│   ├── OGP
│   └── favicon
│
├── Static Export
│   └── out/
│
├── Git / GitHub
│
└── Cloudflare Pages
```

本サイト自体ではバックエンドやデータベースを使用せず、フロントエンドのみの静的ポートフォリオとして構築しています。

Project情報やSkills情報はTypeScriptファイルで管理し、Next.jsのStatic Exportを使用して静的HTMLとして生成しています。

## ディレクトリ構成

```text
mamoru-portfolio/
├── public/
│   └── images/
│       ├── ogp.png
│       └── ...
│
├── src/
│   ├── app/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
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

`main` ブランチへPushすると、Cloudflare Pagesでビルド・デプロイされる構成です。

## 更新手順

変更内容を確認します。

```bash
git status
```

本番ビルドを確認します。

```bash
npm run build
```

変更をステージングします。

```bash
git add .
```

コミットします。

```bash
git commit -m "feat: update portfolio"
```

GitHubへPushします。

```bash
git push origin main
```

## 今後の改善予定

- 制作実績の追加
- 各Project詳細内容の継続的な拡充
- 実画面スクリーンショットの追加・更新
- Contact用メールアドレスの追加
- パフォーマンスの継続的な改善

## Author

島貫 守

GitHub  
https://github.com/simanuki0923
