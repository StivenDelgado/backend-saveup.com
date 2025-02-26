class IaController {

    constructor(chatbotService) {
        this.chatbotService = chatbotService;
    }

    sendMessage = async (req, res) => {
        const response = await this.chatbotService.sendMessage(req.body);
        if (!response.success) {
            return res.status(400).json(response);
        }
        return res.status(200).json(response);
    }
    
    getChat = async (req, res) => {
        const response = await this.chatbotService.getChat(req.body);
        if (!response.success) {
            return res.status(400).json(response);
        }
        return res.status(200).json(response);
    }
}
export default ChatbotController;