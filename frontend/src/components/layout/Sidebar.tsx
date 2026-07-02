import type { Conversation } from "../../types/chat";

interface SidebarProps {
  onNewChat: () => void;
  conversations: Conversation[];
}

export default function Sidebar({
  onNewChat,
  conversations,
}: SidebarProps) {
  return (
    <aside className="flex h-full w-72 flex-col border-r border-slate-800 bg-slate-900">

      {/* Logo */}
      <div className="border-b border-slate-800 p-6">

        <h1 className="text-3xl font-bold text-blue-400">
          🩺 CareGuru+
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          AI Health Assistant
        </p>

      </div>

      {/* Button */}
      <div className="p-5">

        <button
          onClick={onNewChat}
          className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:from-blue-700 hover:to-cyan-600"
        >
          + New Chat
        </button>

      </div>

      {/* History */}
      <div className="flex-1 overflow-y-auto px-5">

        <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
          Recent Conversations
        </h2>

        <div className="space-y-3">
  {conversations.length === 0 ? (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-500">
      <div className="rounded-xl bg-slate-800 p-4 text-center text-slate-400">
  <p className="mb-2 text-lg">📝</p>

  <p className="font-semibold text-white">
    No assessments yet
  </p>

  <p className="mt-2 text-sm">
    Start a new conversation to build your health history.
  </p>
</div>
    </div>
  ) : (
    conversations.map((conversation) => (
      <div
        key={conversation.id}
        className="cursor-pointer rounded-xl bg-slate-800 p-3 transition hover:bg-slate-700"
      >
        🩺 {conversation.title}
      </div>
    ))
  )}
</div>

      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 p-5">

        <div className="text-sm text-slate-500">
          CareGuru+ v2
        </div>

      </div>

    </aside>
  );
}