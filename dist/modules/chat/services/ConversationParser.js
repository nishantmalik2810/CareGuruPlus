"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationParser = void 0;
class ConversationParser {
    updateState(state, message) {
        const text = message.toLowerCase().trim();
        // ---------- AGE ----------
        if (!state.age) {
            const age = Number(text);
            if (!isNaN(age) && age >= 0 && age <= 120) {
                state.age = age;
                return state;
            }
        }
        // ---------- SEX ----------
        if (!state.sex) {
            if (text === "male" || text === "m") {
                state.sex = "male";
                return state;
            }
            if (text === "female" || text === "f") {
                state.sex = "female";
                return state;
            }
        }
        // ---------- DURATION ----------
        if (!state.duration) {
            if (text.includes("day") ||
                text.includes("week") ||
                text.includes("month")) {
                state.duration = message;
                return state;
            }
        }
        // ---------- SEVERITY ----------
        if (!state.severity) {
            const severity = Number(text);
            if (!isNaN(severity) &&
                severity >= 1 &&
                severity <= 10) {
                state.severity = severity;
            }
        }
        return state;
    }
}
exports.ConversationParser = ConversationParser;
//# sourceMappingURL=ConversationParser.js.map