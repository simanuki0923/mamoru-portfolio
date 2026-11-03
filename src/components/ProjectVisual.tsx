import {
  CheckCircle2,
  LayoutDashboard,
  Package,
  Smartphone,
} from "lucide-react";

import type {
  ProjectVisualType,
} from "@/types/project";

type Props = {
  type: ProjectVisualType;
  size?: "card" | "hero";
};

export default function ProjectVisual({
  type,
  size = "card",
}: Props) {
  const height =
    size === "hero"
      ? "min-h-[300px]"
      : "min-h-[190px]";

  if (type === "shop") {
    return (
      <div
        className={`${height} flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-100 p-6`}
      >
        <div className="w-full max-w-sm rounded-xl border border-orange-100 bg-white p-4 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">
                Creator Shop
              </p>

              <p className="font-bold text-slate-800">
                商品一覧
              </p>
            </div>

            <Package className="text-orange-500" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-lg bg-orange-50 p-2"
              >
                <div className="aspect-square rounded-lg bg-gradient-to-br from-orange-100 to-amber-200" />

                <div className="mt-2 h-2 rounded bg-slate-200" />

                <div className="mt-2 h-2 w-2/3 rounded bg-orange-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "mobile") {
    return (
      <div
        className={`${height} flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-blue-100 p-5`}
      >
        <div className="w-40 rounded-[2rem] border-[6px] border-slate-900 bg-white p-3 shadow-2xl">
          <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-slate-900" />

          <div className="mb-4">
            <p className="text-xs text-slate-400">
              Searchus
            </p>

            <p className="font-bold text-slate-900">
              Todo
            </p>
          </div>

          <div className="space-y-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-lg bg-slate-50 p-2"
              >
                <CheckCircle2
                  size={13}
                  className="text-blue-500"
                />

                <div className="h-2 flex-1 rounded bg-slate-200" />
              </div>
            ))}
          </div>

          <Smartphone
            size={16}
            className="mx-auto mt-4 text-blue-600"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${height} flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-100 p-5`}
    >
      <div className="w-full max-w-md overflow-hidden rounded-xl border border-blue-100 bg-white shadow-xl">
        <div className="flex">
          <div className="w-1/4 bg-slate-900 p-3">
            <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <LayoutDashboard size={15} />
            </div>

            <div className="space-y-3">
              <div className="h-2 rounded bg-slate-600" />
              <div className="h-2 rounded bg-slate-700" />
              <div className="h-2 w-2/3 rounded bg-slate-700" />
            </div>
          </div>

          <div className="flex-1 p-4">
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-blue-50 p-2"
                >
                  <div className="mb-2 h-2 w-1/2 rounded bg-blue-200" />

                  <div className="h-3 w-2/3 rounded bg-blue-500" />
                </div>
              ))}
            </div>

            <div className="mt-4 flex h-20 items-end gap-2 rounded-lg bg-slate-50 p-3">
              {[30, 60, 45, 80, 55, 90].map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-blue-500"
                    style={{
                      height: `${item}%`,
                    }}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}