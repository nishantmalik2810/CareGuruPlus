interface Props {
  recommendation: string;
}

export default function RecommendationBadge({
  recommendation,
}: Props) {
  const config = {
    "self-care": {
      label: "Low Risk",
      color: "bg-green-500/20 text-green-400 border-green-500/30",
    },
    doctor: {
      label: "Moderate Risk",
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    },
    emergency: {
      label: "High Risk",
      color: "bg-red-500/20 text-red-400 border-red-500/30",
    },
    unknown: {
      label: "Unknown",
      color: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    },
  } as const;

  const badge =
    config[recommendation as keyof typeof config] ??
    config.unknown;

  return (
    <div
      className={`inline-flex items-center rounded-full border px-4 py-2 font-semibold ${badge.color}`}
    >
      {badge.label}
    </div>
  );
}