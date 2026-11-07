export type SkillUsage =
  | "個人開発"
  | "個人開発・学習"
  | "開発利用"
  | "開発環境"
  | "学習";

export type SkillDetail = {
  name: string;
  usage: SkillUsage;
};

export type SkillDetailGroup = {
  title: string;
  description: string;
  skills: SkillDetail[];
};

/* =========================
   Home用
   技術名のみをコンパクトに表示
========================= */

export const skillGroups = [
  {
    title: "Frontend",
    description: "Webフロントエンド開発",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },

  {
    title: "Backend",
    description: "バックエンド開発",
    skills: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "MySQL",
    ],
  },

  {
    title: "Tools",
    description: "開発・設計ツール",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Figma",
    ],
  },
];

/* =========================
   Skillsページ用
   技術名 + 使用用途を表示
========================= */

export const skillDetailGroups: SkillDetailGroup[] = [
  {
    title: "Frontend",
    description: "Webフロントエンド開発",
    skills: [
      {
        name: "Next.js",
        usage: "個人開発",
      },
      {
        name: "React",
        usage: "個人開発",
      },
      {
        name: "TypeScript",
        usage: "開発利用",
      },
      {
        name: "Tailwind CSS",
        usage: "個人開発",
      },
      {
        name: "HTML",
        usage: "開発利用",
      },
      {
        name: "CSS",
        usage: "開発利用",
      },
    ],
  },

  {
    title: "Backend",
    description: "バックエンド開発",
    skills: [
      {
        name: "Laravel",
        usage: "個人開発・学習",
      },
      {
        name: "PHP",
        usage: "個人開発・学習",
      },
      {
        name: "PostgreSQL",
        usage: "個人開発",
      },
      {
        name: "MySQL",
        usage: "個人開発・学習",
      },
    ],
  },

  {
    title: "Tools",
    description: "開発・設計ツール",
    skills: [
      {
        name: "Git",
        usage: "開発利用",
      },
      {
        name: "GitHub",
        usage: "開発利用",
      },
      {
        name: "Docker",
        usage: "開発環境",
      },
      {
        name: "VS Code",
        usage: "開発環境",
      },
      {
        name: "Figma",
        usage: "学習",
      },
    ],
  },
];

/* =========================
   Learning
========================= */

export const learningItems = [
  {
    title:
      "Next.js App Routerでの画面構築",

    status:
      "継続中",

    description:
      "個人開発を通して、App Routerを利用したページ構成やコンポーネント設計を学習。",
  },

  {
    title:
      "TypeScriptでの型設計",

    status:
      "継続中",

    description:
      "Props・APIデータ・ドメインデータなどを型として定義し、保守性を意識した実装を学習。",
  },

  {
    title:
      "Laravel API開発",

    status:
      "学習中",

    description:
      "フロントエンドとバックエンドを分離したWebアプリ構成を理解するため、Laravel APIを学習。",
  },

  {
    title:
      "UI / UX設計",

    status:
      "継続中",

    description:
      "Figmaや個人開発を通して、情報配置・画面遷移・使いやすさを意識したUI設計を学習。",
  },
];