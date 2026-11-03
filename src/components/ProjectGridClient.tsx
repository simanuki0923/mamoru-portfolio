"use client";

import { useMemo, useState } from "react";

import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/types/project";

type Props = {
  projects: Project[];
};

type FilterType =
  | "all"
  | "personal"
  | "learning"
  | "development";

const filters: {
  value: FilterType;
  label: string;
}[] = [
  {
    value: "all",
    label: "すべて",
  },
  {
    value: "personal",
    label: "個人開発",
  },
  {
    value: "learning",
    label: "学習・練習",
  },
  {
    value: "development",
    label: "開発中",
  },
];

export default function ProjectGridClient({
  projects,
}: Props) {
  const [filter, setFilter] =
    useState<FilterType>("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return projects;
    }

    if (filter === "personal") {
      return projects.filter(
        (project) =>
          project.category === "personal",
      );
    }

    if (filter === "learning") {
      return projects.filter(
        (project) =>
          project.category === "learning",
      );
    }

    return projects.filter(
      (project) =>
        project.status === "開発中",
    );
  }, [filter, projects]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() =>
              setFilter(item.value)
            }
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === item.value
                ? "bg-blue-600 text-white shadow"
                : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map(
          (project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ),
        )}
      </div>
    </>
  );
}