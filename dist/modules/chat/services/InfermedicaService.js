"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfermedicaService = void 0;
class InfermedicaService {
    async analyze(message) {
        const text = message.toLowerCase();
        if (text.includes("fever") && text.includes("headache")) {
            return {
                symptoms: ["fever", "headache"],
                possibleConditions: [
                    "Viral Fever",
                    "Influenza"
                ],
                triageLevel: "doctor",
                followUpQuestion: "How many days have you had these symptoms?"
            };
        }
        if (text.includes("cough")) {
            return {
                symptoms: ["cough"],
                possibleConditions: [
                    "Common Cold"
                ],
                triageLevel: "self-care",
                followUpQuestion: "Are you producing mucus when coughing?"
            };
        }
        return {
            symptoms: [],
            possibleConditions: [],
            triageLevel: "unknown",
            followUpQuestion: "Can you describe your symptoms in more detail?"
        };
    }
}
exports.InfermedicaService = InfermedicaService;
//# sourceMappingURL=InfermedicaService.js.map