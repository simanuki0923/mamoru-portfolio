import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Lightbulb,
  Rocket,
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

/* =========================
   STATIC PARAMS
========================= */

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

/* =========================
   METADATA
========================= */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug,
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

/* =========================
   STATUS
========================= */

function getStatusClass(status: string) {
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

/* =========================
   PAGE
========================= */

export default async function ProjectDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  const contents = [
    {
      href: "#purpose",
      label: "開発背景",
      visible: Boolean(project.purpose),
    },
    {
      href: "#overview",
      label: "概要",
      visible: true,
    },
    {
      href: "#features",
      label: "実装内容",
      visible:
        project.features.length > 0,
    },
    {
      href: "#highlights",
      label: "工夫した点",
      visible:
        project.highlights.length > 0,
    },
    {
      href: "#problems",
      label: "問題と解決",
      visible: Boolean(
        project.problems?.length,
      ),
    },
    {
      href: "#learnings",
      label: "得たこと",
      visible: Boolean(
        project.learnings?.length,
      ),
    },
    {
      href: "#next-steps",
      label: "今後の改善",
      visible: Boolean(
        project.nextSteps?.length,
      ),
    },
  ].filter((item) => item.visible);

  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:py-10 lg:px-8 lg:py-12">
          <Link
            href="/projects/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 sm:mb-8"
          >
            <ArrowLeft size={16} />
            Projectsに戻る
          </Link>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Left */}
            <div className="min-w-0">
              <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm">
                  {project.category ===
                  "personal"
                    ? "個人開発"
                    : "学習開発"}
                </span>

                <span
                  className={`rounded-full px-4 py-2 text-xs font-semibold ${getStatusClass(
                    project.status,
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              <h1 className="break-words text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                {project.title}
              </h1>

              <p className="mt-4 text-lg font-semibold leading-8 text-slate-700 sm:text-xl">
                {project.summary}
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:mt-6">
                {project.description}
              </p>

              {(project.demoUrl ||
                project.githubUrl) && (
                <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:text-base"
                    >
                      <ExternalLink size={18} />
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
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 sm:text-base"
                    >
                      <GitBranch size={18} />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* =========================
                PROJECT IMAGE
            ========================== */}
            <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-blue-100 sm:rounded-3xl">
              {project.image ? (
                <div className="relative aspect-[16/10] w-full bg-white p-2 sm:p-3">
                  <Image
                    src={project.image}
                    alt={
                      project.imageAlt ??
                      `${project.title}の画面`
                    }
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-2 sm:p-3"
                  />
                </div>
              ) : (
                <ProjectVisual
                  type={
                    project.visualType
                  }
                  size="hero"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          DETAIL
      ========================== */}
      <section className="bg-slate-50 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8 lg:px-8">
          {/* =========================
              CONTENTS
          ========================== */}
          <aside>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
              <p className="mb-4 font-bold text-slate-900">
                Contents
              </p>

              <nav
                aria-label="ページ内目次"
                className="grid grid-cols-2 gap-1 text-sm lg:block lg:space-y-1"
              >
                {contents.map(
                  (item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-3 py-2.5 text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      {item.label}
                    </a>
                  ),
                )}
              </nav>
            </div>
          </aside>

          {/* =========================
              MAIN
          ========================== */}
          <div className="min-w-0 space-y-6 sm:space-y-8">
            {/* =========================
                PURPOSE
            ========================== */}
            {project.purpose && (
              <section
                id="purpose"
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
              >
                <div className="mb-5 flex items-start gap-3 sm:mb-6">
                  <Target className="mt-0.5 shrink-0 text-blue-600" />

                  <h2 className="text-xl font-bold leading-8 text-slate-900 sm:text-2xl">
                    開発背景・目的
                  </h2>
                </div>

                <p className="max-w-3xl leading-8 text-slate-600">
                  {project.purpose}
                </p>
              </section>
            )}

            {/* =========================
                OVERVIEW
            ========================== */}
            <section
              id="overview"
              className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
            >
              <div className="mb-5 flex items-start gap-3 sm:mb-6">
                <BookOpen className="mt-0.5 shrink-0 text-blue-600" />

                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  概要
                </h2>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200">
                <div className="border-b border-slate-200 sm:grid sm:grid-cols-[140px_1fr]">
                  <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 sm:p-4">
                    開発形態
                  </div>

                  <div className="px-4 py-3 text-slate-600 sm:p-4">
                    {project.category ===
                    "personal"
                      ? "個人開発"
                      : "学習開発"}
                  </div>
                </div>

                <div className="border-b border-slate-200 sm:grid sm:grid-cols-[140px_1fr]">
                  <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 sm:p-4">
                    担当範囲
                  </div>

                  <div className="px-4 py-3 text-slate-600 sm:p-4">
                    {project.role}
                  </div>
                </div>

                <div className="border-b border-slate-200 sm:grid sm:grid-cols-[140px_1fr]">
                  <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 sm:p-4">
                    開発状況
                  </div>

                  <div className="px-4 py-3 text-slate-600 sm:p-4">
                    {project.period}
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-[140px_1fr]">
                  <div className="bg-slate-50 px-4 py-3 font-semibold text-slate-800 sm:p-4">
                    使用技術
                  </div>

                  <div className="flex flex-wrap gap-2 px-4 py-3 sm:p-4">
                    {project.technologies
                      .length > 0 ? (
                      project.technologies.map(
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
                      )
                    ) : (
                      <span className="text-sm text-slate-500">
                        記載なし
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* =========================
                FEATURES
            ========================== */}
            {project.features.length >
              0 && (
              <section
                id="features"
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
              >
                <div className="mb-5 flex items-start gap-3 sm:mb-6">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" />

                  <h2 className="text-xl font-bold leading-8 text-slate-900 sm:text-2xl">
                    実装・設計内容
                  </h2>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {project.features.map(
                    (feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-emerald-500"
                        />

                        <span className="text-sm leading-6 text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </section>
            )}

            {/* =========================
                HIGHLIGHTS
            ========================== */}
            {project.highlights.length >
              0 && (
              <section
                id="highlights"
                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
              >
                <div className="mb-5 flex items-start gap-3 sm:mb-6">
                  <Lightbulb className="mt-0.5 shrink-0 text-blue-600" />

                  <h2 className="text-xl font-bold leading-8 text-slate-900 sm:text-2xl">
                    設計・実装で工夫した点
                  </h2>
                </div>

                <div className="space-y-3">
                  {project.highlights.map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-blue-50 p-4"
                      >
                        <span className="mt-0.5 font-bold text-blue-600">
                          •
                        </span>

                        <p className="text-sm leading-7 text-slate-700 sm:text-base">
                          {item}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </section>
            )}

            {/* =========================
                PROBLEM & SOLUTION
            ========================== */}
            {project.problems &&
              project.problems.length >
                0 && (
                <section
                  id="problems"
                  className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
                >
                  <div className="mb-2 flex items-start gap-3">
                    <Wrench className="mt-0.5 shrink-0 text-blue-600" />

                    <h2 className="text-xl font-bold leading-8 text-slate-900 sm:text-2xl">
                      問題と解決
                    </h2>
                  </div>

                  <p className="mb-6 text-sm leading-7 text-slate-500 sm:text-base">
                    開発中に考慮した問題と、
                    それに対して行った対応です。
                  </p>

                  <div className="space-y-5">
                    {project.problems.map(
                      (
                        item,
                        index,
                      ) => (
                        <article
                          key={`${item.problem}-${index}`}
                          className="overflow-hidden rounded-2xl border border-slate-200"
                        >
                          <div className="bg-white p-5 sm:p-6">
                            <div className="mb-4 flex items-center gap-3">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                                {index +
                                  1}
                              </span>

                              <h3 className="font-bold text-slate-900">
                                Problem
                              </h3>
                            </div>

                            <p className="leading-8 text-slate-600">
                              {
                                item.problem
                              }
                            </p>
                          </div>

                          <div className="flex justify-center border-y border-slate-200 bg-slate-50 py-3">
                            <ArrowDown
                              size={20}
                              className="text-blue-500"
                            />
                          </div>

                          <div className="bg-blue-50/50 p-5 sm:p-6">
                            <h3 className="mb-3 font-bold text-blue-700">
                              Solution
                            </h3>

                            <p className="leading-8 text-slate-700">
                              {
                                item.solution
                              }
                            </p>
                          </div>
                        </article>
                      ),
                    )}
                  </div>
                </section>
              )}

            {/* =========================
                LEARNINGS
            ========================== */}
            {project.learnings &&
              project.learnings.length >
                0 && (
                <section
                  id="learnings"
                  className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
                >
                  <div className="mb-5 flex items-start gap-3 sm:mb-6">
                    <Lightbulb className="mt-0.5 shrink-0 text-blue-600" />

                    <h2 className="text-xl font-bold leading-8 text-slate-900 sm:text-2xl">
                      この開発で得たこと
                    </h2>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    {project.learnings.map(
                      (learning) => (
                        <div
                          key={learning}
                          className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/60 p-4"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-blue-600"
                          />

                          <p className="text-sm leading-6 text-slate-700">
                            {learning}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </section>
              )}

            {/* =========================
                NEXT STEPS
            ========================== */}
            {project.nextSteps &&
              project.nextSteps.length >
                0 && (
                <section
                  id="next-steps"
                  className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
                >
                  <div className="mb-2 flex items-start gap-3">
                    <Rocket className="mt-0.5 shrink-0 text-blue-600" />

                    <h2 className="text-xl font-bold leading-8 text-slate-900 sm:text-2xl">
                      今後の改善予定
                    </h2>
                  </div>

                  <p className="mb-6 text-sm leading-7 text-slate-500 sm:text-base">
                    現在の実装をもとに、
                    今後追加・改善を予定している内容です。
                  </p>

                  <div className="space-y-3">
                    {project.nextSteps.map(
                      (
                        step,
                        index,
                      ) => (
                        <div
                          key={step}
                          className="flex items-start gap-4 rounded-xl border border-slate-200 p-4"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                            {index +
                              1}
                          </span>

                          <span className="pt-1 text-sm leading-6 text-slate-700 sm:text-base">
                            {step}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </section>
              )}

            {/* =========================
                GITHUB CTA
            ========================== */}
            {project.githubUrl && (
              <section className="overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-lg sm:p-7 md:p-9">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-blue-300">
                      <GitBranch
                        size={20}
                      />

                      <span className="text-sm font-semibold">
                        Source Code
                      </span>
                    </div>

                    <h2 className="text-xl font-bold sm:text-2xl">
                      GitHubで実装内容を見る
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                      このプロジェクトのソースコードや
                      開発内容をGitHubで公開しています。
                    </p>
                  </div>

                  <a
                    href={
                      project.githubUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-blue-50"
                  >
                    GitHubを見る

                    <ArrowRight
                      size={18}
                    />
                  </a>
                </div>
              </section>
            )}

            {/* =========================
                BACK TO PROJECTS
            ========================== */}
            <div className="pt-2">
              <Link
                href="/projects/"
                className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
              >
                <ArrowLeft
                  size={17}
                />

                制作実績一覧へ戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}