class ChatbotService {
    constructor(chatbotRepository) {
        this.chatbotRepository = chatbotRepository;
    }
    async sendMessage(info) {
        const response = await this.chatbotRepository.sendMessage(info);
        return response;
    }

    async getChat(info) {
        const response = await this.chatbotRepository.getChat(info);
        return response;
    }
}
export default ChatbotService;