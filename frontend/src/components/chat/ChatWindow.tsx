import { useEffect, useRef } from "react";
import type { Message } from "../../types/chat";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import WelcomeScreen from "./WelcomeScreen";

interface Props {
  messages: Message[];
  loading: boolean;
  onPromptClick: (prompt: string) => void;
}

export default function ChatWindow({
  messages,
  loading,
  onPromptClick,
}: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div className="flex-1 overflow-y-auto bg-slate-950 p-10">
      {messages.length === 0 ? (
        <WelcomeScreen onPromptClick={onPromptClick} />
      ) : (
        <div className="mx-auto w-full max-w-4xl">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
            />
          ))}

          {loading && <TypingIndicator />}

          <div ref={bottomRef} />
        </div>
      )}
    </div>
  );
}