import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-8 text-center text-sm text-slate-500 lg:px-8">
        © 2026 {siteConfig.siteName}
      </div>
    </footer>
  );
}