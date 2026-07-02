import SectionCard from "../common/SectionCard";

interface Props {
  title: string;
  items: string[];
}

export default function DiagnosisCard({
  title,
  items,
}: Props) {
  if (!items.length) return null;

  return (
    <SectionCard title={title}>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl bg-slate-700 p-3"
          >
            <span className="text-green-400">✔</span>

            <span>{item}</span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}