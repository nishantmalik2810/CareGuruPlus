import { useChat } from "./hooks/useChat";
import Sidebar from "./components/layout/Sidebar";
import ChatWindow from "./components/chat/ChatWindow";
import ChatInput from "./components/chat/ChatInput";

export default function App() {
  const {
    messages,
    conversations,
    loading,
    sendMessage,
    clearChat,
  } = useChat();

  return (
    <div className="flex h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <Sidebar
        onNewChat={clearChat}
        conversations={conversations}
      />

      {/* Main */}
      <main className="flex flex-1 flex-col">
        {/* Header */}
        <header className="border-b border-slate-800 bg-slate-900 px-8 py-4">
          <h1 className="text-4xl font-bold">
            🩺 AI Health Assistant
          </h1>

          <p className="mt-3 text-lg text-slate-400">
            Describe your symptoms and receive AI-powered health guidance.
          </p>
        </header>

        <ChatWindow
          messages={messages}
          loading={loading}
          onPromptClick={sendMessage}
        />

        <footer className="border-t border-slate-800 bg-slate-900 px-6 py-5">
          <ChatInput
            onSend={sendMessage}
          />
        </footer>
      </main>
    </div>
  );
}