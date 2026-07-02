"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmergencyService = void 0;
class EmergencyService {
    emergencyKeywords = [
        "chest pain",
        "can't breathe",
        "cannot breathe",
        "difficulty breathing",
        "severe bleeding",
        "stroke",
        "unconscious",
        "suicidal"
    ];
    check(message) {
        const text = message.toLowerCase();
        return this.emergencyKeywords.some(keyword => text.includes(keyword));
    }
}
exports.EmergencyService = EmergencyService;
//# sourceMappingURL=EmergencyService.js.map