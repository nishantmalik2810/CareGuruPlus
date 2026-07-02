import type { Message } from "../../types/chat";
import DiagnosisCard from "../cards/DiagnosisCard";
import ActionButtons from "../cards/ActionCard";
import SectionCard from "../common/SectionCard";
import FadeIn from "../common/FadeIn";
import RecommendationBadge from "../cards/RecommendationBadge";

interface Props {
  message: Message;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  const content = (
    <div
      className={`max-w-4xl rounded-3xl shadow-xl ${
        isUser
          ? "bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white"
          : "bg-slate-900 p-6"
      }`}
    >
      {isUser ? (
        <p className="whitespace-pre-wrap">{message.content}</p>
      ) : (
        <>
          <h2 className="mb-2 text-3xl font-bold text-cyan-400">
            🩺 CareGuru Assessment
          </h2>

          <p className="mb-6 text-slate-300">
            {message.content ||
              "Based on your symptoms, here is your assessment."}
          </p>

          {message.assessment && (
            <>
              <DiagnosisCard
                title="Symptoms"
                items={message.assessment.symptoms}
              />

              <DiagnosisCard
                title="Possible Conditions"
                items={message.assessment.possibleConditions}
              />
              <SectionCard title="Recommendation">
  <RecommendationBadge
    recommendation={message.assessment.recommendation}
  />
</SectionCard>
              

              <SectionCard title="Follow-up Question">
                <div className="rounded-xl bg-cyan-900/20 p-4 text-slate-200">
                  {message.assessment.followUpQuestion}
                </div>
              </SectionCard>
            </>
          )}

          <ActionButtons
            actions={message.actions ?? []}
          />
        </>
      )}
    </div>
  );

  return (
    <div
      className={`mb-8 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {isUser ? (
        content
      ) : (
        <FadeIn>{content}</FadeIn>
      )}
    </div>
  );
}