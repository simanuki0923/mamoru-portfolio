import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-semibold text-blue-600">
        404
      </p>

      <h1 className="mt-3 text-4xl font-bold text-slate-900">
        ページが見つかりません
      </h1>

      <p className="mt-4 text-slate-600">
        URLをご確認ください。
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
      >
        トップページへ戻る
      </Link>
    </div>
  );
}