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
  skillGroups,
} from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills & Learning",

  description:
    "使用技術と現在学習している技術を紹介します。",
};

export default function SkillsPage() {
  return (
    <>
      <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-5 py-16 lg:px-8">
          <div>
            <p className="font-semibold text-blue-600">
              技術・学習
            </p>

            <h1 className="mt-2 text-4xl font-bold md:text-5xl">
              Skills & Learning
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              これまで学習した技術と、
              現在継続して学んでいる内容をまとめています。
            </p>
          </div>

          <div className="hidden h-28 w-28 items-center justify-center rounded-3xl bg-white text-blue-600 shadow-xl shadow-blue-100 sm:flex">
            <GraduationCap size={50} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold">
            技術スタック
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map(
              (group, index) => {
                const Icon =
                  index === 0
                    ? Code2
                    : index === 1
                      ? Server
                      : Wrench;

                return (
                  <div
                    key={group.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-bold">
                      {group.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {group.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.skills.map(
                        (skill) => (
                          <span
                            key={skill}
                            className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                );
              },
            )}
          </div>

          <div className="mt-16">
            <div className="mb-8 flex items-center gap-3">
              <BookOpen className="text-blue-600" />

              <h2 className="text-2xl font-bold">
                学習中の内容
              </h2>
            </div>

            <div className="space-y-4">
              {learningItems.map(
                (item) => (
                  <div
                    key={item.title}
                    className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[130px_1fr]"
                  >
                    <div>
                      <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600">
                        {item.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {
                          item.description
                        }
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}