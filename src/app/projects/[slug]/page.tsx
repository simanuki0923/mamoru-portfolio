import type { Metadata } from "next";

import Link from "next/link";

import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Lightbulb,
  Target,
  Wrench,
} from "lucide-react";

import { notFound } from "next/navigation";

import ProjectVisual from "@/components/ProjectVisual";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project =
    projects.find(
      (item) =>
        item.slug === slug,
    );

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

function getStatusClass(
  status: string,
) {
  switch (status) {
    case "完成":
      return "bg-emerald-100 text-emerald-700";

    case "開発中":
      return "bg-blue-100 text-blue-700";

    case "設計中":
      return "bg-orange-100 text-orange-700";

    default:
      return "bg-violet-100 text-violet-700";
  }
}

export default async function ProjectDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const project =
    projects.find(
      (item) =>
        item.slug === slug,
    );

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <Link
            href="/projects/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
          >
            <ArrowLeft size={16} />

            Projectsに戻る
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                  {project.category ===
                  "personal"
                    ? "個人開発"
                    : "学習・練習"}
                </span>

                <span
                  className={`rounded-full px-4 py-2 text-xs font-semibold ${getStatusClass(project.status)}`}
                >
                  {project.status}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
                {project.title}
              </h1>

              <p className="mt-4 text-xl font-semibold text-slate-700">
                {project.summary}
              </p>

              <p className="mt-6 max-w-xl leading-8 text-slate-600">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.demoUrl && (
                  <a
                    href={
                      project.demoUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white"
                  >
                    <ExternalLink
                      size={18}
                    />

                    デモを見る
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={
                      project.githubUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700"
                  >
                    <GitBranch
                      size={18}
                    />

                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white bg-white shadow-2xl shadow-blue-100">
              <ProjectVisual
                type={
                  project.visualType
                }
                size="hero"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[230px_1fr] lg:px-8">
          <aside>
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="mb-4 font-bold text-slate-900">
                Contents
              </p>

              <nav className="space-y-2 text-sm">
                {[
                  [
                    "#overview",
                    "概要",
                  ],
                  [
                    "#features",
                    "機能",
                  ],
                  [
                    "#highlights",
                    "工夫した点",
                  ],
                  [
                    "#challenges",
                    "課題と改善",
                  ],
                ].map(
                  ([
                    href,
                    label,
                  ]) => (
                    <a
                      key={href}
                      href={href}
                      className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {label}
                    </a>
                  ),
                )}
              </nav>
            </div>
          </aside>

          <div className="space-y-8">
            <section
              id="overview"
              className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <Target className="text-blue-600" />

                <h2 className="text-2xl font-bold">
                  概要
                </h2>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200">
                <div className="grid border-b border-slate-200 md:grid-cols-[160px_1fr]">
                  <div className="bg-slate-50 p-4 font-semibold">
                    担当範囲
                  </div>

                  <div className="p-4 text-slate-600">
                    {project.role}
                  </div>
                </div>

                <div className="grid border-b border-slate-200 md:grid-cols-[160px_1fr]">
                  <div className="bg-slate-50 p-4 font-semibold">
                    開発状況
                  </div>

                  <div className="p-4 text-slate-600">
                    {project.period}
                  </div>
                </div>

                <div className="grid md:grid-cols-[160px_1fr]">
                  <div className="bg-slate-50 p-4 font-semibold">
                    使用技術
                  </div>

                  <div className="flex flex-wrap gap-2 p-4">
                    {project.technologies.map(
                      (
                        technology,
                      ) => (
                        <span
                          key={
                            technology
                          }
                          className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700"
                        >
                          {
                            technology
                          }
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section
              id="features"
              className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-blue-600" />

                <h2 className="text-2xl font-bold">
                  実装・設計内容
                </h2>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {project.features.map(
                  (feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-emerald-500"
                      />

                      <span className="text-sm text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </section>

            <section
              id="highlights"
              className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <Lightbulb className="text-blue-600" />

                <h2 className="text-2xl font-bold">
                  工夫した点
                </h2>
              </div>

              <div className="space-y-3">
                {project.highlights.map(
                  (item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-xl bg-blue-50 p-4"
                    >
                      <span className="font-bold text-blue-600">
                        •
                      </span>

                      <p className="text-slate-700">
                        {item}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </section>

            <section
              id="challenges"
              className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <Wrench className="text-blue-600" />

                <h2 className="text-2xl font-bold">
                  課題と改善
                </h2>
              </div>

              <div className="space-y-3">
                {project.challenges.map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-slate-200 p-4 text-slate-700"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}