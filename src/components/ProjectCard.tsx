import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProjectVisual from "@/components/ProjectVisual";
import type { Project } from "@/types/project";

type Props = {
  project: Project;
};

function getStatusStyle(status: Project["status"]) {
  switch (status) {
    case "完成":
      return "bg-emerald-100 text-emerald-700";

    case "開発中":
      return "bg-blue-100 text-blue-700";

    case "設計中":
      return "bg-orange-100 text-orange-700";

    case "学習中":
      return "bg-violet-100 text-violet-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* PROJECT IMAGE */}
      {project.image ? (
        <div className="relative h-[210px] overflow-hidden bg-slate-100">
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-500 hover:scale-[1.03]"
          />
        </div>
      ) : (
        <ProjectVisual
          type={project.visualType}
        />
      )}

      {/* CONTENT */}
      <div className="p-5">
        {/* CATEGORY / STATUS */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {project.category === "personal"
              ? "個人開発"
              : "学習・開発"}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
              project.status,
            )}`}
          >
            {project.status}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-bold text-slate-900">
          {project.title}
        </h3>

        {/* SUMMARY */}
        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">
          {project.summary}
        </p>

        {/* TECHNOLOGIES */}
        {project.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies
              .slice(0, 4)
              .map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
                >
                  {technology}
                </span>
              ))}
          </div>
        )}

        {/* DETAIL LINK */}
        <Link
          href={`/projects/${project.slug}/`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          詳細を見る

          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}