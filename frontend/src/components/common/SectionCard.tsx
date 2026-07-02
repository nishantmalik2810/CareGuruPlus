import type { ReactNode } from "react";
import {
  Brain,
  CircleHelp,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function SectionCard({
  title,
  children,
}: Props) {
  const getIcon = () => {
    switch (title) {
      case "Symptoms":
        return <Stethoscope size={22} />;

      case "Possible Conditions":
        return <Brain size={22} />;

      case "Recommendation":
        return <ShieldCheck size={22} />;

      case "Follow-up Question":
        return <CircleHelp size={22} />;

      default:
        return null;
    }
  };

  return (
    <div
      className="
        mb-5
        overflow-hidden
        rounded-2xl
        border
        border-slate-700
        bg-slate-800/80
        shadow-xl
        backdrop-blur
        transition-all
        duration-300
        hover:border-cyan-500/50
        hover:shadow-cyan-500/10
      "
    >
      <div className="flex items-center gap-3 border-b border-slate-700 bg-slate-900 px-5 py-4">
        <div className="text-cyan-400">
          {getIcon()}
        </div>

        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>
      </div>

      <div className="p-5">
        {children}
      </div>
    </div>
  );
}