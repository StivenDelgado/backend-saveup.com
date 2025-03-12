class IncomeController {

    constructor(incomeService) {
        this.incomeService = incomeService;
    }

    createIncome = async (req, res) => {
        const response = await this.incomeService.createIncome(req.body)
        if (response.success) {
            return res.status(200).json(response);
        } else {
            return res.status(400).json(response);
        }
    }

    deleteIncome = async (req, res) => {
        const response = await this.incomeService.deleteIncome(req.body)
        if (response.success) {
            return res.status(200).json(response);
        } else {
            return res.status(400).json(response);
        }
    }
}

export default IncomeController;