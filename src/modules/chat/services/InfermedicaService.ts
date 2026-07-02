import { InfermedicaResult } from "../types/infermedica.types";

export class InfermedicaService {

  async analyze(message: string): Promise<InfermedicaResult> {

    const text = message.toLowerCase();

    if (text.includes("fever") && text.includes("headache")) {

      return {
        symptoms: ["fever", "headache"],
        possibleConditions: [
          "Viral Fever",
          "Influenza"
        ],
        triageLevel: "doctor",
        followUpQuestion:
          "How many days have you had these symptoms?"
      };

    }

    if (text.includes("cough")) {

      return {
        symptoms: ["cough"],
        possibleConditions: [
          "Common Cold"
        ],
        triageLevel: "self-care",
        followUpQuestion:
          "Are you producing mucus when coughing?"
      };

    }

    return {

      symptoms: [],

      possibleConditions: [],

      triageLevel: "unknown",

      followUpQuestion:
        "Can you describe your symptoms in more detail?"
    };

  }

}