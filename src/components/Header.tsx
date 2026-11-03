import Link from "next/link";
import { Code2, GitBranch } from "lucide-react";

import HeaderNav from "@/components/HeaderNav";
import { siteConfig } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-slate-900"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <Code2 size={22} />
          </div>

          <span className="text-lg">
            {siteConfig.siteName}
          </span>
        </Link>

        <div className="order-3 flex w-full items-center justify-center sm:order-none sm:w-auto">
          <HeaderNav />
        </div>

        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          <GitBranch size={17} />

          GitHub
        </a>
      </div>
    </header>
  );
}