import { ConversationState } from "../types/conversation.types";
import { ConversationParser } from "./ConversationParser";

export class ConversationEngine {

    private parser = new ConversationParser();

    processMessage(
        state: ConversationState,
        message: string
    ) {

        // Update state from user's latest message
        this.parser.updateState(state, message);

        // Ask for missing information
        if (!state.age) {
            return {
                completed: false,
                question: "Before I assess your symptoms, what is your age?"
            };
        }

        if (!state.sex) {
            return {
                completed: false,
                question: "What is your biological sex? (Male/Female)"
            };
        }

        if (!state.duration) {
            return {
                completed: false,
                question: "How long have you had these symptoms?"
            };
        }

        if (!state.severity) {
            return {
                completed: false,
                question: "On a scale of 1-10, how severe are your symptoms?"
            };
        }

        state.completed = true;

        return {
            completed: true,
            question: null
        };

    }

}