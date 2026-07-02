"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiService = void 0;
const gemini_1 = __importDefault(require("../../../config/gemini"));
class GeminiService {
    async chat(message) {
        try {
            const response = await gemini_1.default.models.generateContent({
                model: "gemini-2.5-flash",
                contents: `
You are CareGuru+, an AI healthcare assistant.

Rules:
- Give clear, friendly and professional answers.
- Never claim to be a doctor.
- Always include:
"This is not a substitute for professional medical advice."
- If symptoms sound serious (chest pain, stroke symptoms, difficulty breathing, severe bleeding), advise immediate emergency care.

User:
${message}
        `,
            });
            return (response.text ??
                "Sorry, I couldn't generate a response. This is not a substitute for professional medical advice.");
        }
        catch (error) {
            console.error("Gemini Error:", error);
            return "Sorry, I'm currently unable to generate a response. Please try again later.\n\nThis is not a substitute for professional medical advice.";
        }
    }
}
exports.GeminiService = GeminiService;
//# sourceMappingURL=GeminiService.js.map