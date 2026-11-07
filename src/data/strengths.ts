import {
  MessageCircle,
  SearchCheck,
  Blocks,
} from "lucide-react";

export const strengths = [
  {
    title: "要件の理解",
    description:
      "要望や目的を整理し、必要な機能や実装内容を確認してから開発を進めます。",
    icon: SearchCheck,
  },
  {
    title: "コミュニケーション",
    description:
      "不明点や認識の違いを早めに確認し、関係者との認識を合わせながら進めます。",
    icon: MessageCircle,
  },
  {
    title: "保守性",
    description:
      "型定義や共通コンポーネントを意識し、修正・拡張しやすい構成を考えて実装します。",
    icon: Blocks,
  },
];