"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaudeService = void 0;
const anthropic_1 = __importDefault(require("../../../config/anthropic"));
class ClaudeService {
    async chat(message) {
        // No API key? Use mock AI
        if (!process.env.ANTHROPIC_API_KEY) {
            return `🤖 Mock AI Response

I understand you said: "${message}"

This is not a substitute for professional medical advice.`;
        }
        const response = await anthropic_1.default.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 500,
            messages: [
                {
                    role: "user",
                    content: message,
                },
            ],
        });
        const first = response.content[0];
        if (first.type === "text") {
            return first.text;
        }
        return "No response received from Claude.";
    }
}
exports.ClaudeService = ClaudeService;
//# sourceMappingURL=ClaudeService.js.map