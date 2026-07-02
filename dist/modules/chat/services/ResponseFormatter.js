"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseFormatter = void 0;
class ResponseFormatter {
    format(aiReply, diagnosis, conversationLength) {
        return {
            success: true,
            reply: aiReply,
            assessment: {
                symptoms: diagnosis.symptoms,
                possibleConditions: diagnosis.possibleConditions,
                recommendation: diagnosis.triageLevel,
                followUpQuestion: diagnosis.followUpQuestion ?? "None"
            },
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