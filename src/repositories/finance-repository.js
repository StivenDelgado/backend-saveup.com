import { Finance } from "../models/FinanceModel.js";

class FinanceRepository{

    constructor(){
        this.modelFinance = Finance;
    }

    async updateSalary(data){
        return await this.modelFinance.update({
            current_salary: data.new_salary
        },{
            where: {
                id_user: data.id_user
            }
        })
    }

    async getFinance(data){
        return await this.modelFinance.findOne({
            where: {
                id_user: data.id_user
            }
        })
    }
}

export default FinanceRepository;