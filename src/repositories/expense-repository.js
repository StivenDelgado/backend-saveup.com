import { Expense } from "../models/ExpenseModel.js"
import { Finance } from "../models/FinanceModel.js"
import { Income } from "../models/IncomeModel.js"

class ExpenseRepository{

    constructor (){
        this.modelExpense = Expense;
        this.modelFinance = Finance;
        this.modelIncome = Income;
    }

    async getFinances(data){
        try{
            const expenses = await this.getExpenses(data)
            const incomes = await this.getIncomes(data)
            const finances = expenses.expenses.concat(incomes.incomes) 
            return {success: true , expenses: finances}
        }
        catch(error){
            return{success: false, message: error}
        }
    }

    async changeSalary(data){
        try{
            this.modelFinance.update({
                current_salary: data.new_salary
            },{
                where: {
                    id_user: data.id_user
                }
            }
        )
            return({success: true, message:`Salario cambiado a ${data.new_salary}`})
        }
        catch(error){
            return {success : false, message: error}
        }
    }

//      EXPENSES LOGIC
    async getExpenses(data){
        try{
            let expenses = await this.modelExpense.findAll({
                where:{
                    id_finance: data.id_finance
                }
            }) 
           
            expenses = expenses.map(expense => ({
                ...expense.dataValues,
                isExpense:true
            }))
            return {success: true, expenses}
        }
        catch(error){
            return { success: false , message: error}
        }
    }

    async createExpense(data){
        try{
            const expense = await this.modelExpense.create(data)
            return {success: true, expense}

        }
        catch(error){
            return { success: false , message: error}
        }
    }

    async deleteExpense(data){
        try{
            this.modelExpense.destroy({
                where:{
                    id_expense: data.id_expense
                }
            })
            return {success: true, message: `Gasto ${data.expense_name} borrado`}

        }
        catch(error){
            return {success : false, message: error}
        }
    }


//      INCOMES LOGIC
    async getIncomes(data){
        try{
            let incomes = await this.modelIncome.findAll({
                where:{
                    id_finance: data.id_finance
                }
            })

            incomes = incomes.map(income =>({
                ...income.dataValues,
                isExpense: false
            }))
            return{success:true, incomes}
        }
        catch(error){
            return { success: false , message: error}
        }
    }

    async createIncome(data){
        try{
             const income = await this.modelIncome.create(data)
             return {success: true, income}
        }
        catch(error){
            return { success: false , message: error}
        }
    }

    async deleteIncome(data){
        try{
            this.modelIncome.destroy({
                where:{
                    id_income: data.id_income
                }
            })
            return {success: true, message: `Ingreso ${data.income_name} borrado`}

        }
        catch(error){
            return {success : false, message: error}
        }
    }
}

export default ExpenseRepository