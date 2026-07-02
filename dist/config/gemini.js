"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genai_1 = require("@google/genai");
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing in environment variables.");
}
const gemini = new genai_1.GoogleGenAI({
    apiKey,
});
exports.default = gemini;
//# sourceMappingURL=gemini.js.map