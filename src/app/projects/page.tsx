import type { Metadata } from "next";

import { FolderCode } from "lucide-react";

import ProjectGridClient from "@/components/ProjectGridClient";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "個人開発・学習開発で制作したWebアプリケーションを紹介します。",
};

export default function ProjectsPage() {
  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-5 py-10 sm:py-14 lg:px-8 lg:py-16">
          <div className="min-w-0">
            <p className="mb-2 text-sm font-semibold text-blue-600 sm:text-base">
              制作実績
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Projects
            </h1>

            <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-slate-600 sm:mt-5">
              個人開発や学習で制作したWebアプリケーション、
              モバイルアプリ、UI設計などを紹介しています。
            </p>
          </div>

          <div className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white text-blue-600 shadow-xl shadow-blue-100 sm:flex lg:h-28 lg:w-28">
            <FolderCode
              size={44}
              className="lg:h-12 lg:w-12"
            />
          </div>
        </div>
      </section>

      {/* =========================
          PROJECTS
      ========================== */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ProjectGridClient
            projects={projects}
          />
        </div>
      </section>
    </>
  );
}