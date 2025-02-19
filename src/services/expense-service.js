class ExpenseService{

    constructor(expenseService){
        this.ExpenseService = expenseService
    }

    async getFinances(req){
        return await this.ExpenseService.getFinances({id_finance: req.id_finance})
    }

    async changeSalary(req){
        return await this.ExpenseService.changeSalary({id_user: req.id_user, new_salary: req.new_salary})
    }

    async getExpenses(req){
        return await this.ExpenseService.getExpenses({id_finance:req.id_finance})
    }

    async createExpense(req){
        return await this.ExpenseService.createExpense({id_finance: req.id_finance, expense_name: req.expense_name, amount: req.amount, icon:req.icon})
    }

    async deleteExpense(req){
        return await this.ExpenseService.deleteExpense({id_expense: req.id_expense, expense_name: req.expense_name})
    }

    async getIncomes(req){
        return await this.ExpenseService.getIncomes({id_finance:req.id_finance})
    }

    async createIncome(req){
        return await this.ExpenseService.createIncome({id_finance:req.id_finance, income_name: req.income_name, amount: req.amount, icon:req.icon})
    }

    async deleteIncome(req){
        return await this.ExpenseService.deleteIncome({id_income: req.id_income, income_name: req.income_name})
    }
}

export default ExpenseService