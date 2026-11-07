import Image from "next/image";
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

import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import Services from "@/components/Services";
import Strengths from "@/components/Strengths";

import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import {
  learningItems,
  skillGroups,
} from "@/data/skills";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredLearningItems = learningItems.slice(0, 3);

  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:px-8 lg:py-24 xl:gap-14">
          {/* 左側 */}
          <div className="min-w-0">
            <span className="inline-flex rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600 sm:px-4 sm:text-sm">
              {siteConfig.role}
            </span>

            <h1 className="mt-6 font-bold leading-[1.2] tracking-tight text-slate-900">
              {/* スマホ */}
              <span className="block text-[28px] sm:hidden">
                Webアプリ・
              </span>

              <span className="block text-[28px] sm:hidden">
                業務システムの
              </span>

              {/* 640px以上 */}
              <span className="hidden text-[40px] sm:block lg:text-[42px] xl:text-[48px]">
                Webアプリ・業務システムの
              </span>

              <span className="mt-2 block text-[30px] text-blue-600 sm:text-[40px] lg:text-[42px] xl:text-[48px]">
                設計・開発
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-600 md:text-lg">
              {
                "Next.js・TypeScriptによるフロントエンド開発を中心に、"
              }

              <span className="sm:whitespace-nowrap">
                Laravel・PHP・データベース
              </span>

              {
                "を利用したバックエンド開発にも取り組み、"
              }

              <span className="sm:whitespace-nowrap">
                Webアプリケーション
              </span>

              {
                "の設計・実装を行っています。"
              }
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
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
              >
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* 右側画像 */}
          <div className="min-w-0">
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-blue-50 shadow-2xl shadow-blue-100">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/朝日に輝く花咲く丘と遠山.png"
                  alt="朝日に輝く花咲く丘と遠山"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================== */}
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
            {/* プロフィール画像 */}
            <div className="flex items-center justify-center">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-blue-50 bg-blue-50 shadow-md">
                <Image
                  src="/images/笑顔の紳士、紺色の装い.png"
                  alt="プロフィール画像"
                  fill
                  sizes="144px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* プロフィール */}
            <div className="flex min-w-0 flex-col justify-center">
              <p className="text-sm font-semibold text-blue-600">
                Frontend / Backend / System Engineer
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {siteConfig.name}
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                システムエンジニアとして業務に携わりながら、
                Next.js・TypeScriptを中心とした個人開発に取り組んでいます。
                また、Laravel・PHP・データベースなど、
                バックエンド技術についても継続して個人開発・学習しています。
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "HTML",
                  "CSS",
                  "Laravel",
                  "PHP",
                  "MySQL",
                  "PostgreSQL",
                  "GitHub",
                  "Docker",
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

      {/* =========================
          SERVICES
      ========================== */}
      <Services />

      {/* =========================
          STRENGTHS
      ========================== */}
      <Strengths />

      {/* =========================
          FEATURED PROJECTS
      ========================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionTitle
              title="Featured Projects"
              description="個人開発・学習開発で取り組んでいる制作物です。"
            />

            <Link
              href="/projects/"
              className="mb-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
            >
              すべて見る
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          SKILLS
      ========================== */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            title="Skills"
            description="現在使用している技術と、学習している技術をまとめています。"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group, index) => {
              const Icon =
                index === 0
                  ? Monitor
                  : index === 1
                    ? Server
                    : Wrench;

              return (
                <div
                  key={group.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================
          LEARNING
      ========================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            title="Learning"
            description="現在継続して取り組んでいる技術・学習内容です。"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {featuredLearningItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <BookOpen size={20} />
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/skills/"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
            >
              学習・技術一覧を見る
              <GraduationCap size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT
      ========================== */}
      <section
        id="contact"
        className="scroll-mt-28 py-20"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div className="min-w-0">
                <p className="font-semibold text-blue-600">
                  Contact
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  開発・お仕事についてのご相談
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                  Webアプリケーションや業務システムの開発、
                  フロントエンド・バックエンド開発について、
                  ご相談がありましたらお気軽にお問い合わせください。
                </p>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                  制作実績やソースコードはGitHubでも公開しています。
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
                  >
                    <Mail size={19} />
                    メールで問い合わせる
                  </a>
                )}

                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                >
                  <GitBranch size={19} />
                  GitHubを見る
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}