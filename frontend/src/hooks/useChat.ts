import { useState } from "react";
import { api } from "../services/api";
import type {
  Message,
  ChatResponse,
  Conversation,
} from "../types/chat";




export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(false);

 const clearChat = () => {
  if (messages.length > 0) {
    const firstUserMessage = messages.find(
      (m) => m.role === "user"
    );

    if (firstUserMessage) {
      setConversations((prev) => [
        {
          id: Date.now().toString(),
          title:
            firstUserMessage.content.length > 30
              ? firstUserMessage.content.substring(0, 30) + "..."
              : firstUserMessage.content,
          createdAt: new Date(),
        },
        ...prev,
      ]);
    }
  }

  setMessages([]);
};

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const { data } = await api.post<ChatResponse>("/chat", {

        message: text,
        sessionId: "demo-session",
      });
      console.log("API Response:", data);

     const aiMessage: Message = {
  id: (Date.now() + 1).toString(),
  role: "assistant",
  content: data.reply,
  assessment: data.assessment,
  actions: data.actions,
};

      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    conversations,
    loading,
    sendMessage,
    clearChat,
  };
}