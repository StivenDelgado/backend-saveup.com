class IaController {

    constructor(iaService) {
        this.iaService = iaService;
    }

    sendMessage = async (req, res) => {
        const response = await this.iaService.sendMessage(req.body);
        if (!response.success) {
            return res.status(400).json(response);
        }
        return res.status(200).json(response);
    }
    
    promptIA = async (req, res) => {
        const response = await this.iaService.promptIA(req.body);
        if (!response.success) {
            return res.status(400).json(response);
        }
        return res.status(200).json(response);
    }
}
export default IaController;