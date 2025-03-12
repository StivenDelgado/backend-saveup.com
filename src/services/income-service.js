class IncomeService {

    constructor(incomeRepository) {
        this.incomeRepository = incomeRepository;
    }

    async getIncomes(data) {
        try {
            let incomes = await this.incomeRepository.getIncomes(data)
            
            incomes = incomes.map(income => ({
                ...income.dataValues,
                isExpense: false
            })) || []
            
            return { success: true, incomes }
        }catch(error) {
            return { success: false, message: error }
        }
    }

    async createIncome(data) {
        try {
            const income = await this.incomeRepository.createIncome(data)
            return { success: true, income }
        } catch (error) {
            return { success: false, message: error }
        }
    }

    async deleteIncome(data) {
        try {
            const income = await this.incomeRepository.deleteIncome(data)
            return { success: true, income }
        } catch (error) {
            return { success: false, message: error }
        }
    }
}

export default IncomeService;