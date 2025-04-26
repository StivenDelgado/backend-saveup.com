class FinanceService {

    constructor(financeRepository, serviceIncome, serviceExpense) {
        this.financeRepository = financeRepository;
        this.serviceIncome = serviceIncome;
        this.serviceExpense = serviceExpense;
    }

    async updateSalary(data) {
        return await this.financeRepository.updateSalary(data)
    }

    async getFinances(data){
        
        try {
            const finance = await this.financeRepository.getFinance(data)
            const incomes = await this.serviceIncome.getIncomes(finance)
            const expenses = await this.serviceExpense.getExpenses(finance)

            const objetoFinance = {
                ...finance.dataValues,
                incomes: incomes.incomes,
                expenses: expenses.expenses

            }
            return { success: true, finance: objetoFinance }
        } catch (error) {
            return { success: false, message: error }
        }
    }
}

export default FinanceService;