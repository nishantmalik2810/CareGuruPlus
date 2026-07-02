"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseFormatter = void 0;
class ResponseFormatter {
    format(aiReply, diagnosis, conversationLength) {
        return {
            success: true,
            reply: `${aiReply}

--------------------------------

Symptoms:
${diagnosis.symptoms.length
                ? diagnosis.symptoms.join(", ")
                : "Not identified"}

Possible Conditions:
${diagnosis.possibleConditions.length
                ? diagnosis.possibleConditions.join(", ")
                : "Unknown"}

Recommendation:
${diagnosis.triageLevel}

Follow-up Question:
${diagnosis.followUpQuestion ?? "None"}

Conversation Length:
${conversationLength} messages

This is not a substitute for professional medical advice.`,
            triageLevel: diagnosis.triageLevel,
            actions: [
                "Book Appointment",
                "Order Lab Test",
                "Buy Medicine",
                "Talk to a real doctor"
            ]
        };
    }
}
exports.ResponseFormatter = ResponseFormatter;
//# sourceMappingURL=ResponseFormatter.js.map