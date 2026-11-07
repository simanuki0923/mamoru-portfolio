import SectionTitle from "@/components/SectionTitle";
import { strengths } from "@/data/strengths";

export default function Strengths() {
  return (
    <section
      id="strengths"
      className="scroll-mt-28 bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          title="Strengths"
          description="開発や業務を進めるうえで大切にしていることです。"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {strengths.map((strength) => {
            const Icon = strength.icon;

            return (
              <article
                key={strength.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {strength.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {strength.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}