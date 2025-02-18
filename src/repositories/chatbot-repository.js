import { Chat } from "../models/ChatModel.js";
import geminiClient from "../utils/gemini-client.js";

class ChatbotRepository {
    constructor() {
        this.model = Chat;
    }

    async sendMessage(info) {
        try {
            let message_ia = await geminiClient.generateResponse(info.message);
            const chat = await this.model.create({ id_user: info.id_user, user_message: info.message, bot_response: message_ia });
            return { success: true, chat };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }

    async getChat(info) {
        try {
            const chat = await this.model.findAll({ where: { id_user: info.id_user } });
            return { success: true, chat };
        } catch (error) {
            return { success: false, message: error.message };
        }
    }
}
export default ChatbotRepository;