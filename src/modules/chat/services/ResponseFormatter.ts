import { ChatResponse } from "../types/chat.types";
import { InfermedicaResult } from "../types/infermedica.types";

export class ResponseFormatter {

    format(
        aiReply: string,
        diagnosis: InfermedicaResult,
        conversationLength: number
    ): ChatResponse {

        return {
            success: true,

            reply: aiReply,

            assessment: {
                symptoms: diagnosis.symptoms,
                possibleConditions: diagnosis.possibleConditions,
                recommendation: diagnosis.triageLevel,
                followUpQuestion:
                    diagnosis.followUpQuestion ?? "None"
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