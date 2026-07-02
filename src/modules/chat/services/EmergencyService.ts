export class EmergencyService {
  private readonly emergencyKeywords = [
    "chest pain",
    "can't breathe",
    "cannot breathe",
    "difficulty breathing",
    "severe bleeding",
    "stroke",
    "unconscious",
    "suicidal"
  ];

  check(message: string): boolean {
    const text = message.toLowerCase();

    return this.emergencyKeywords.some(keyword =>
      text.includes(keyword)
    );
  }
}