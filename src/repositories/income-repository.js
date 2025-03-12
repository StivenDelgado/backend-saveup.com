import { Income } from "../models/IncomeModel.js";

class IncomeRepository{

    constructor(){
        this.modelIncome = Income;
    }

    async getIncomes(data){        
            return await this.modelIncome.findAll({
                where:{
                    id_finance: data.id_finance
                }
            })
    }

    async createIncome(data){
        return await this.modelIncome.create(data);
    }
    
    async deleteIncome(data){
        return await this.modelIncome.destroy({
                where:{
                    id_income: data.id_income
                }
            })
    }
}

export default IncomeRepository;