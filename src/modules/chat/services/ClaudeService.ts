import anthropic from "../../../config/anthropic";

export class ClaudeService {
  async chat(message: string): Promise<string> {
    // No API key? Use mock AI
    if (!process.env.ANTHROPIC_API_KEY) {
      return `🤖 Mock AI Response

I understand you said: "${message}"

This is not a substitute for professional medical advice.`;
    }

    const response = await anthropic.messages.create({
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