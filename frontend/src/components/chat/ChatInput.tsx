import { useState } from "react";
import { SendHorizontal } from "lucide-react";

interface Props {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;

    onSend(text.trim());
    setText("");
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900 px-3 py-3 shadow-lg transition-all focus-within:border-cyan-500 focus-within:shadow-cyan-500/20">

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              send();
            }
          }}
          placeholder="Describe your symptoms..."
          className="flex-1 bg-transparent px-3 text-white placeholder:text-slate-500 outline-none"
        />

        <button
          onClick={send}
          disabled={!text.trim()}
          className="
            ml-2
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-white
            transition-all
            duration-200
            hover:scale-105
            hover:shadow-lg
            hover:shadow-cyan-500/20
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <SendHorizontal size={20} />
        </button>

      </div>

      <p className="mt-3 text-center text-sm text-slate-500">
        Press <span className="font-semibold text-slate-300">Enter</span> to send your message
      </p>
    </div>
  );
}