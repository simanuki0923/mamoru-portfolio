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
      {/* =========================
          FILTER
      ========================== */}
      <div
        className="mb-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap"
        role="group"
        aria-label="制作実績の絞り込み"
      >
        {filters.map((item) => {
          const isSelected =
            filter === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() =>
                setFilter(item.value)
              }
              aria-pressed={isSelected}
              className={`min-h-11 w-full rounded-full px-4 py-2.5 text-sm font-semibold transition sm:w-auto sm:px-5 ${
                isSelected
                  ? "bg-blue-600 text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* =========================
          PROJECT GRID
      ========================== */}
      {filteredProjects.length > 0 ? (
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
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
          <p className="font-semibold text-slate-700">
            該当する制作実績はありません。
          </p>

          <p className="mt-2 text-sm text-slate-500">
            別の条件を選択してください。
          </p>
        </div>
      )}
    </>
  );
}