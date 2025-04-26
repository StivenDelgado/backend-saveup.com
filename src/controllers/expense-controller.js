class ExpenseController {

    constructor(expenseService){
        this.expenseService = expenseService
    }
    
    createExpense = async (req, res) => {
        const response = await this.expenseService.createExpense(req.body)
        if (response.success){
            return res.status(200).json(response)
        }
        return res.status(400).json(response)
    }

    deleteExpense = async (req, res) => {
        const response = await this.expenseService.deleteExpense(req.body)
        if (response.success){
            return res.status(200).json(response)
        }
        return res.status(400).json(response)
    }

}

export default ExpenseController