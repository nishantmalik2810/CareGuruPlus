"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const chat_validation_1 = require("../validation/chat.validation");
const SendMessageUseCase_1 = require("../use-cases/SendMessageUseCase");
class ChatController {
    sendMessageUseCase = new SendMessageUseCase_1.SendMessageUseCase();
    async sendMessage(req, res) {
        try {
            // Validate request body
            const data = chat_validation_1.chatSchema.parse(req.body);
            // Execute business logic
            const response = await this.sendMessageUseCase.execute(data);
            res.status(200).json(response);
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error.message || "Invalid request",
            });
        }
    }
}
exports.ChatController = ChatController;
//# sourceMappingURL=chat.controller.js.map