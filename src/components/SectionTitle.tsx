type Props = {
  title: string;
  description?: string;
};

export default function SectionTitle({
  title,
  description,
}: Props) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <div className="h-8 w-1.5 rounded-full bg-blue-600" />

        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          {title}
        </h2>
      </div>

      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}