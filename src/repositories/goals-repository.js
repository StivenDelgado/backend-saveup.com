import {Goal} from '../models/GoalModel.js'

class goalRepository{
    constructor(){
        this.modelGoal = Goal
    }

    async createGoal(data){
        return await this.modelGoal.create(data)
    }

    async deleteGoal(data){
        return await this.modelGoal.destroy({
            where: {
                id_goal: parseInt(data.id_goal)
            }
        })
    }
    
    async getGoals(data){
        return await this.modelGoal.findAll({
            where: {
                id_user: parseInt(data.idUser)
            }
        })
    }

    async getGoal(data){
        return await this.modelGoal.findOne({
            where:{
                id_goal: data.id_goal
            }
        })
    }

    async updateAmount(data){
        console.log(data)
        return await this.modelGoal.update({
            current_amount: data.current_amount
        }, {
            where: {
                id_goal: data.id_goal
            }
        })
    }
}

export default goalRepository