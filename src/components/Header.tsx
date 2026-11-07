"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Code2,
  GitBranch,
  Menu,
  X,
} from "lucide-react";

import HeaderNav from "@/components/HeaderNav";
import { siteConfig } from "@/data/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* =========================
            MAIN HEADER
        ========================== */}
        <div className="flex h-[72px] items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2.5 font-bold text-slate-900 sm:gap-3"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
              <Code2 size={22} />
            </div>

            <span className="truncate text-base sm:text-lg">
              {siteConfig.siteName}
            </span>
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <div className="hidden items-center sm:flex">
            <HeaderNav />
          </div>

          {/* Desktop GitHub */}
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:inline-flex"
          >
            <GitBranch size={17} />

            GitHub
          </a>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            type="button"
            onClick={() =>
              setIsMenuOpen(
                (current) => !current,
              )
            }
            aria-label={
              isMenuOpen
                ? "メニューを閉じる"
                : "メニューを開く"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:hidden"
          >
            {isMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        {/* =========================
            MOBILE MENU
        ========================== */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-slate-100 pb-5 pt-3 sm:hidden"
          >
            <nav
              aria-label="スマートフォン用ナビゲーション"
              className="flex flex-col gap-1"
            >
              <Link
                href="/"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                href="/projects/"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Projects
              </Link>

              <Link
                href="/skills/"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Skills
              </Link>

              <Link
                href="/#contact"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Contact
              </Link>

              <div className="mt-3 border-t border-slate-100 pt-4">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <GitBranch size={18} />

                  GitHubを見る
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}