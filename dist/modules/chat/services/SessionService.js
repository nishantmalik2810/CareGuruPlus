"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionService = exports.SessionService = void 0;
class SessionService {
    sessions = new Map();
    createDefaultState() {
        return {
            symptoms: [],
            completed: false,
        };
    }
    createSession() {
        return {
            history: [],
            state: this.createDefaultState(),
        };
    }
    getSession(sessionId) {
        if (!this.sessions.has(sessionId)) {
            this.sessions.set(sessionId, this.createSession());
        }
        return this.sessions.get(sessionId);
    }
    getHistory(sessionId) {
        return this.getSession(sessionId).history;
    }
    addMessage(sessionId, message) {
        this.getSession(sessionId).history.push(message);
    }
    getState(sessionId) {
        return this.getSession(sessionId).state;
    }
    updateState(sessionId, state) {
        const session = this.getSession(sessionId);
        session.state = {
            ...session.state,
            ...state,
        };
    }
    clearSession(sessionId) {
        this.sessions.delete(sessionId);
    }
}
exports.SessionService = SessionService;
exports.sessionService = new SessionService();
//# sourceMappingURL=SessionService.js.map