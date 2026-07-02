"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chat_controller_1 = require("../controllers/chat.controller");
const router = (0, express_1.Router)();
const chatController = new chat_controller_1.ChatController();
router.post("/", (req, res) => chatController.sendMessage(req, res));
exports.default = router;
//# sourceMappingURL=chat.routes.js.map