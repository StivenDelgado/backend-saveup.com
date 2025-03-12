import { Expense } from "../models/ExpenseModel.js"

class ExpenseRepository {

    constructor() {
        this.modelExpense = Expense;
    }

    async findAllExpenses(data) {
        
        return await this.modelExpense.findAll({
            where: {
                id_finance: data.id_finance
            }
        })
    }

    async createExpense(data) {
        return await this.modelExpense.create(data)
    }

    async deleteExpense(data) {
        return await this.modelExpense.destroy({
            where: {
                id_expense: data.id_expense
            }
        })
    }

}

export default ExpenseRepository