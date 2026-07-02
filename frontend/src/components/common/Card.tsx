import type { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="mb-4 rounded-2xl border border-slate-700 bg-slate-800 p-5 shadow-lg">
      <h3 className="mb-4 text-lg font-semibold text-cyan-400">
        {title}
      </h3>

      {children}
    </div>
  );
}