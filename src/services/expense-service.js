class ExpenseService{

    constructor(expenseService){
        this.ExpenseService = expenseService
    }

    async getExpenses(data){
        try{
            let expenses = await this.ExpenseService.findAllExpenses(data)
            expenses = expenses.map(expense => ({
                ...expense.dataValues,
                isExpense:true
            }))
            return {success: true, expenses}
            
        }
        catch(error){
            return {success: false, message: error}
        }
    }
    
    async createExpense(data){
        try {
            const expense = await this.ExpenseService.createExpense(data)
            return {success: true, expense}
        } catch (error) {
            return {success: false, message: error}
        }
    }
}

export default ExpenseService