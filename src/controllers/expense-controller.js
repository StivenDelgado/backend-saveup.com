import { response } from "express"

class ExpenseController {

    constructor(expenseService){
        this.expenseService = expenseService
    }

    getFinances = async (req, res) => {
        const response = await this.expenseService.getFinances(req.body)
        if (response.success){
            return res.status(200).json(response)
        }
        return res.status(400).json(response)
    }

    changeSalary = async (req, res) => {
        const response = await this.expenseService.changeSalary(req.body)
        if(response.success){
            return res.status(200).json(response)
        }
        return res.status(400).json(response)
    }

    getExpenses = async (req, res) => {
        const response = await this.expenseService.getExpenses(req.body)
        if(response.success){
            return res.status(200).json(response)
        }
        return res.status(400).json(response)
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
    
    getIncomes = async (req, res) => {
        const response = await this.expenseService.getIncomes(req.body)
        if(response.success){
            return res.status(200).json(response)
        }
        return res.status(400).json(response)
    }

    createIncome = async (req, res) =>{
        const response = await this.expenseService.createIncome(req.body)
        if (response.success){
            return res.status(200).json(response)
        }
        return res.status(400).json(response)
    }

    deleteIncome = async (req, res) =>{
        const response = await this.expenseService.deleteIncome(req.body)
        if (response.success){
            return res.status(200).json(response)
        }
        return res.status(400).json(response)
    }
}

export default ExpenseController