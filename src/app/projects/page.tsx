import type { Metadata } from "next";

import {
  FolderCode,
} from "lucide-react";

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
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-5 py-16 lg:px-8">
          <div>
            <p className="mb-2 font-semibold text-blue-600">
              制作実績
            </p>

            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Projects
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              個人開発や学習で制作したWebアプリケーション、
              モバイルアプリ、UI設計などを紹介しています。
            </p>
          </div>

          <div className="hidden h-28 w-28 items-center justify-center rounded-3xl bg-white text-blue-600 shadow-xl shadow-blue-100 sm:flex">
            <FolderCode size={48} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ProjectGridClient
            projects={projects}
          />
        </div>
      </section>
    </>
  );
}