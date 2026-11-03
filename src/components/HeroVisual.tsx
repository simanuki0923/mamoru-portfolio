import {
  BarChart3,
  Code2,
  LayoutDashboard,
} from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -right-5 top-8 h-72 w-72 rounded-full bg-blue-100/70 blur-2xl" />

      <div className="relative rounded-[2rem] border border-blue-100 bg-white p-5 shadow-2xl shadow-blue-100">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />

            <div className="ml-3 h-6 flex-1 rounded-lg bg-slate-100" />
          </div>

          <div className="grid min-h-64 grid-cols-[100px_1fr]">
            <div className="bg-slate-900 p-4">
              <div className="mb-8 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Code2 size={18} />
              </div>

              <div className="space-y-3">
                <div className="h-2 rounded bg-slate-600" />
                <div className="h-2 w-3/4 rounded bg-slate-700" />
                <div className="h-2 rounded bg-slate-700" />
                <div className="h-2 w-2/3 rounded bg-slate-700" />
              </div>
            </div>

            <div className="p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Portfolio
                  </p>

                  <p className="font-bold text-slate-800">
                    Dashboard
                  </p>
                </div>

                <LayoutDashboard
                  size={20}
                  className="text-blue-600"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-blue-100 bg-blue-50 p-3"
                  >
                    <div className="mb-3 h-2 w-1/2 rounded bg-blue-200" />
                    <div className="h-4 w-2/3 rounded bg-blue-500/80" />
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-2 w-24 rounded bg-slate-200" />

                  <BarChart3
                    size={17}
                    className="text-blue-600"
                  />
                </div>

                <div className="flex h-24 items-end gap-3">
                  {[35, 55, 45, 75, 60, 90].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t bg-blue-500"
                        style={{
                          height: `${height}%`,
                        }}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-5 -left-5 rounded-2xl bg-slate-900 p-4 text-white shadow-xl">
          <Code2 className="mb-3 text-blue-300" />

          <div className="space-y-2">
            <div className="h-1.5 w-28 rounded bg-blue-400" />
            <div className="h-1.5 w-20 rounded bg-orange-400" />
            <div className="h-1.5 w-24 rounded bg-emerald-400" />
          </div>
        </div>
      </div>
    </div>
  );
}