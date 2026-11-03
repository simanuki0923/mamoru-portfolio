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
    slug: "bookshelf",

    title: "BookShelf",

    summary:
      "書籍の登録・レビュー・お気に入り管理を行う書籍レビューアプリ",

    description:
      "書籍レビューアプリケーション「BookShelf」です。ユーザーは書籍を登録・閲覧し、レビューの投稿やお気に入り登録ができます。ジャンルによる分類やレビューへのいいね機能、平均評価に基づくランキング機能も備えています。外部アプリケーション向けの公開API（JSON）も提供します。",

    category: "learning",

    status: "開発中",

    role:
      "Webアプリケーション設計・開発",

    period:
      "継続開発中",

    technologies: [
      "Web Application",
      "JSON API",
    ],

    features: [
      "書籍登録",
      "書籍一覧表示",
      "書籍詳細表示",
      "レビュー投稿",
      "お気に入り登録",
      "ジャンル分類",
      "レビューへのいいね",
      "平均評価表示",
      "ランキング表示",
      "公開API（JSON）",
    ],

    highlights: [
      "書籍・レビュー・お気に入りを管理できる画面構成",
      "ジャンルによる書籍分類",
      "レビューへのいいね機能",
      "平均評価に基づくランキング機能",
      "外部アプリケーションから利用できる公開API",
    ],

    challenges: [
      "書籍とレビューを関連付けたデータ構成を整理",
      "レビュー・お気に入り・いいねなど複数機能の整理",
      "Web画面と公開APIの両方を利用できる構成を意識",
    ],

    visualType: "shop",

    image:
      "/images/書籍レビューアプリ.png",

    imageAlt:
      "書籍レビューアプリケーション BookShelf",
  },

  {
    slug: "attendance-management",

    title: "勤怠管理システム",

    summary:
      "勤怠打刻・勤怠一覧・申請・管理者承認を管理するWebシステム",

    description:
      "社員の勤怠打刻、勤怠一覧の確認、各種申請、管理者による承認管理を行うことを想定した勤怠管理システムです。利用者側と管理者側で必要な機能を分け、日々の勤怠業務を管理できる画面構成を設計しています。",

    category: "learning",

    status: "開発中",

    role:
      "画面設計・フロントエンド開発",

    period:
      "継続開発中",

    technologies: [],

    features: [
      "出勤打刻",
      "退勤打刻",
      "勤怠一覧表示",
      "勤怠詳細確認",
      "各種申請",
      "申請状況確認",
      "管理者承認",
      "管理者向け勤怠管理",
    ],

    highlights: [
      "利用者と管理者で役割を分けた画面構成",
      "打刻から申請・承認までの業務フローを意識",
      "勤怠状況を確認しやすいUI設計",
      "申請状態を確認できる画面構成",
    ],

    challenges: [
      "勤怠・申請・承認の状態を分かりやすく整理",
      "利用者と管理者で必要な操作を分離",
      "勤怠一覧から詳細確認までの操作性を意識",
    ],

    visualType: "mobile",

    image:
      "/images/勤怠管理システム.png",

    imageAlt:
      "勤怠打刻・申請・承認を管理する勤怠管理システム",
  },
];