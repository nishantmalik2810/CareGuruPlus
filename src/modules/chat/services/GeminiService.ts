import gemini from "../../../config/gemini";

export class GeminiService {
  async chat(message: string): Promise<string> {
    try {
      const response = await gemini.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
You are CareGuru+, an AI healthcare assistant.

Rules:
- Give clear, friendly and professional answers.
- Never claim to be a doctor.
- Always include:
"This is not a substitute for professional medical advice."
- If symptoms sound serious (chest pain, stroke symptoms, difficulty breathing, severe bleeding), advise immediate emergency care.

User:
${message}
        `,
      });

      return (
        response.text ??
        "Sorry, I couldn't generate a response. This is not a substitute for professional medical advice."
      );
    } catch (error) {
      console.error("Gemini Error:", error);

      return "Sorry, I'm currently unable to generate a response. Please try again later.\n\nThis is not a substitute for professional medical advice.";
    }
  }
}