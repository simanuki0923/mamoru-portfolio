import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "salesflow-ai",

    title: "SalesFlow AI",

    summary:
      "顧客・案件管理を想定した個人開発Webアプリ",

    description:
      "顧客情報や案件情報を一元管理することを想定した業務支援Webアプリケーションです。Next.js・TypeScriptを使用して、一覧・詳細・登録・編集画面などのフロントエンドを実装しています。",

    category: "personal",

    status: "開発中",

    role:
      "フロントエンド設計・実装",

    period:
      "継続開発中",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],

    features: [
      "顧客一覧画面",
      "顧客詳細画面",
      "顧客登録画面",
      "顧客編集画面",
      "案件一覧画面",
      "案件詳細画面",
      "案件登録画面",
      "案件編集画面",
      "共通レイアウト",
    ],

    highlights: [
      "App Routerを利用した画面構成",
      "TypeScriptによる型定義",
      "再利用可能なUIコンポーネント設計",
      "顧客と案件を関連付けた画面構成",
      "レスポンシブを意識したUI設計",
    ],

    challenges: [
      "画面単位で重複していたUIを共通コンポーネントへ整理",
      "Customer・Projectなどの型を明確にして保守性を改善",
      "フロントエンドとAPIを分離できる構造を意識して設計",
    ],

    visualType: "dashboard",

    githubUrl:
      "https://github.com/simanuki0923/salesflow-ai",
  },

  {
    slug: "creator-sales-manager",

    title: "作品販売管理サイト",

    summary:
      "ハンドメイド作品などの注文・販売管理を想定した学習開発",

    description:
      "アクセサリー・似顔絵・ぬいぐるみなど、個人制作者が商品やオーダーメイド作品を販売することを想定したWebシステムです。顧客側と管理者側の画面構成やUI設計を行っています。",

    category: "learning",

    status: "設計中",

    role:
      "要件整理・UI設計・フロントエンド学習",

    period:
      "設計・学習中",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
    ],

    features: [
      "商品一覧画面",
      "商品詳細画面",
      "注文画面",
      "オーダーメイド依頼画面",
      "注文状況確認画面",
      "管理者ダッシュボード",
      "商品管理画面",
      "注文管理画面",
    ],

    highlights: [
      "顧客側と管理者側の役割を分離した画面設計",
      "通常販売とオーダーメイドの両方を想定",
      "シンプルな操作性を意識したUI構成",
    ],

    challenges: [
      "機能を増やしすぎず必要な画面へ整理",
      "注文フローが分かりやすくなる画面遷移を検討",
      "再利用可能なカードUIを意識した設計",
    ],

    visualType: "shop",
  },

  {
    slug: "searchus-todo-mobile",

    title: "Searchus Todo Mobile",

    summary:
      "CSV連携を想定したTodoモバイルアプリの学習開発",

    description:
      "CSVファイルから顧客訪問予定などのTodo情報を読み込み、一覧・詳細・結果入力まで行うことを想定したReact Native / Expoの学習開発アプリです。",

    category: "learning",

    status: "学習中",

    role:
      "モバイルフロントエンド実装",

    period:
      "継続学習中",

    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
    ],

    features: [
      "CSVファイル選択",
      "Todo一覧表示",
      "Todo詳細表示",
      "結果入力画面",
      "完了画面",
      "CSVデータ変換",
    ],

    highlights: [
      "Expo Routerを利用した画面遷移",
      "CSVからアプリ用データへの変換",
      "TypeScriptによるデータ型定義",
    ],

    challenges: [
      "CSVデータと画面表示データの変換処理を分離",
      "ルーティングの型エラーを修正",
      "画面ごとの責務を整理",
    ],

    visualType: "mobile",
  },
];