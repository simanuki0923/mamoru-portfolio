import type { Metadata } from "next";

import {
  BookOpen,
  Code2,
  GraduationCap,
  Server,
  Wrench,
} from "lucide-react";

import {
  learningItems,
  skillDetailGroups,
} from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",

  description:
    "使用技術と現在習得中の技術を紹介します。",
};

function getUsageClass(
  usage: string,
) {
  switch (usage) {
    case "個人開発":
      return "bg-blue-50 text-blue-700";

    case "個人開発・学習":
      return "bg-violet-50 text-violet-700";

    case "開発利用":
      return "bg-emerald-50 text-emerald-700";

    case "開発環境":
      return "bg-slate-100 text-slate-700";

    case "学習":
      return "bg-orange-50 text-orange-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function SkillsPage() {
  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-5 py-10 sm:py-14 lg:px-8 lg:py-16">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-blue-600 sm:text-base">
              スキル
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Skills
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:mt-5">
              これまでに使用してきた技術と、
              現在継続して学習・開発に取り組んでいる内容をまとめています。
            </p>
          </div>

          <div className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white text-blue-600 shadow-xl shadow-blue-100 sm:flex lg:h-28 lg:w-28">
            <GraduationCap
              size={44}
              className="lg:h-[50px] lg:w-[50px]"
            />
          </div>
        </div>
      </section>

      {/* =========================
          SKILLS
      ========================== */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Skillsスタック
            </h2>

            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-500">
              技術名だけではなく、
              個人開発・学習・開発環境など、
              現在の利用状況もあわせて掲載しています。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {skillDetailGroups.map(
              (group, index) => {
                const Icon =
                  index === 0
                    ? Code2
                    : index === 1
                      ? Server
                      : Wrench;

                return (
                  <article
                    key={group.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-6"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:mb-5 sm:h-12 sm:w-12">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500 sm:mt-2">
                      {group.description}
                    </p>

                    <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                      {group.skills.map(
                        (skill) => (
                          <div
                            key={skill.name}
                            className="flex min-h-12 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                          >
                            <span className="min-w-0 font-semibold text-slate-800">
                              {skill.name}
                            </span>

                            <span
                              className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${getUsageClass(
                                skill.usage,
                              )}`}
                            >
                              {skill.usage}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </article>
                );
              },
            )}
          </div>

          {/* =========================
              LEARNING
          ========================== */}
          <div className="mt-12 sm:mt-16">
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <BookOpen
                size={22}
                className="shrink-0 text-blue-600"
              />

              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                学習中の内容
              </h2>
            </div>

            <div className="space-y-4">
              {learningItems.map(
                (item) => (
                  <article
                    key={item.title}
                    className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md sm:p-6 md:grid-cols-[130px_1fr]"
                  >
                    <div className="flex items-start">
                      <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600 sm:px-4 sm:py-2">
                        {item.status}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold leading-7 text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}