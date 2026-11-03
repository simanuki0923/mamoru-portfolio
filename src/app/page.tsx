import Link from "next/link";

import {
  ArrowRight,
  BookOpen,
  GitBranch,
  GraduationCap,
  Mail,
  Monitor,
  Server,
  Wrench,
} from "lucide-react";

import HeroVisual from "@/components/HeroVisual";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import {
  learningItems,
  skillGroups,
} from "@/data/skills";

export default function HomePage() {
  const featuredProjects =
    projects.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              {siteConfig.role}
            </span>

            <h1 className="mt-6 break-keep text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-5xl xl:text-6xl">
              個人開発と学習の成果を
              <span className="block text-blue-600">
                まとめたポートフォリオ
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              Next.js・TypeScriptを中心に、
              個人開発したWebアプリケーションや、
              UI設計・バックエンド学習などの成果を紹介しています。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects/"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
              >
                制作実績を見る

                <ArrowRight size={18} />
              </Link>

              <Link
                href="#about"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
              >
                自己紹介を見る
              </Link>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-28 py-20"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            title="About"
            description="これまでの経験と、現在取り組んでいるWeb開発について紹介します。"
          />

          <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-[180px_1fr] md:p-10">
            <div className="flex items-center justify-center">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-4xl font-bold text-blue-700 shadow-inner">
                MS
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold text-blue-600">
                Front-end / System Engineer
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {siteConfig.name}
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                システムエンジニアとして業務に携わりながら、
                Next.js・TypeScriptを中心とした個人開発と、
                Laravelなどのバックエンド技術の学習に取り組んでいます。
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Laravel 学習中",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionTitle
              title="Featured Projects"
              description="個人開発・学習開発で取り組んでいる制作物です。"
            />

            <Link
              href="/projects/"
              className="mb-8 inline-flex items-center gap-2 font-semibold text-blue-600"
            >
              すべて見る

              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map(
              (project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                />
              ),
            )}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            title="Skills"
            description="現在使用している技術と、学習している技術をまとめています。"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map(
              (group, index) => {
                const Icon =
                  index === 0
                    ? Monitor
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

                    <h3 className="text-lg font-bold text-slate-900">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {group.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* LEARNING */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            title="Learning"
            description="現在継続して取り組んでいる学習内容です。"
          />

          <div className="space-y-4">
            {learningItems.map(
              (item) => (
                <div
                  key={item.title}
                  className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-[130px_1fr]"
                >
                  <div className="flex">
                    <span className="h-fit rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600">
                      {item.status}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <BookOpen
                        size={17}
                        className="text-blue-600"
                      />

                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="mt-8">
            <Link
              href="/skills/"
              className="inline-flex items-center gap-2 font-semibold text-blue-600"
            >
              学習・技術一覧を見る

              <GraduationCap size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-28 py-20"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="font-semibold text-blue-600">
                  Contact
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  制作物・ソースコードについて
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  制作物のソースコードはGitHubで公開しています。
                  開発内容や制作物についてはこちらから確認できます。
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  <GitBranch size={19} />

                  GitHub
                </a>

                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700"
                  >
                    <Mail size={19} />

                    Email
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}