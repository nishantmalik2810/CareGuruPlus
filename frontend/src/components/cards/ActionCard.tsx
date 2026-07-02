import {
  CalendarDays,
  FlaskConical,
  Pill,
  UserRound,
} from "lucide-react";

interface Props {
  actions: string[];
}

export default function ActionButtons({
  actions,
}: Props) {
  if (!actions.length) return null;

  const getIcon = (action: string) => {
    if (action.includes("Appointment")) {
      return <CalendarDays size={18} />;
    }

    if (action.includes("Lab")) {
      return <FlaskConical size={18} />;
    }

    if (action.includes("Medicine")) {
      return <Pill size={18} />;
    }

    return <UserRound size={18} />;
  };

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {actions.map((action) => (
        <button
          key={action}
          className="
            flex items-center gap-2
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            px-5
            py-3
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-200
            hover:scale-105
            hover:shadow-cyan-500/20
          "
        >
          {getIcon(action)}
          {action}
        </button>
      ))}
    </div>
  );
}