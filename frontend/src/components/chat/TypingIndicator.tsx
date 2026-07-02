export default function TypingIndicator() {
  return (
    <div className="inline-flex gap-2 rounded-xl bg-slate-800 px-5 py-4 text-slate-400">
      <span className="animate-pulse">●</span>
      <span className="animate-pulse delay-150">●</span>
      <span className="animate-pulse delay-300">●</span>
    </div>
  );
}