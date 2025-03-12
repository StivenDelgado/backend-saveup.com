class FinanceController {

    constructor(financeService) {
        this.financeService = financeService;
    }

    updateSalary = async (req, res) => {
        const response = await this.financeService.updateSalary(req.body)
        if (response.success) {
            return res.status(200).json(response);
        } else {
            return res.status(400).json(response);
        }
    }

    getFinances = async (req, res) => {
        const response = await this.financeService.getFinances(req.body)
        if (response.success) {
            return res.status(200).json(response);
        } else {
            return res.status(400).json(response);
        }
    }
}

export default FinanceController;