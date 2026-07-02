import { Request, Response } from "express";
import { chatSchema } from "../validation/chat.validation";
import { SendMessageUseCase } from "../use-cases/SendMessageUseCase";

export class ChatController {
  private sendMessageUseCase = new SendMessageUseCase();

  async sendMessage(req: Request, res: Response): Promise<void> {
    try {
      // Validate request body
      const data = chatSchema.parse(req.body);

      // Execute business logic
      const response = await this.sendMessageUseCase.execute(data);

      res.status(200).json(response);
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || "Invalid request",
      });
    }
  }
}