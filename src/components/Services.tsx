import SectionTitle from "@/components/SectionTitle";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-28 py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* =========================
            SECTION TITLE
        ========================== */}
        <SectionTitle
          title="Services"
          description="Webアプリケーションのフロントエンドを中心に、画面設計からUI実装まで取り組んでいます。"
        />

        {/* =========================
            SERVICE CARDS
        ========================== */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}