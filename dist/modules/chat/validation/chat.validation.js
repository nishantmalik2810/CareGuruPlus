"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatSchema = void 0;
const zod_1 = require("zod");
exports.chatSchema = zod_1.z.object({
    message: zod_1.z
        .string()
        .trim()
        .min(1, "Message cannot be empty")
        .max(2000, "Message is too long"),
    sessionId: zod_1.z
        .string()
        .trim()
        .min(1, "Session ID is required"),
});
//# sourceMappingURL=chat.validation.js.map