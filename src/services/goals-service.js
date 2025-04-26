class GoalsService{

    constructor(goalRepository){
        this.goalRepository = goalRepository
    }

    async createGoal(data){
        try{
            const goal = await this.goalRepository.createGoal(data)
            return {success: true, goal}
        }catch(error){
            return {success: true, error}
        }
    }

    async deleteGoal(data){
        try{
            const goal = await this.goalRepository.deleteGoal(data)
            return {success: true, goal}
        }catch(error){
            return {success: false, error}
        }
    }

    async getGoals(data){
        try{
            const goals = await this.goalRepository.getGoals(data)
            return {success: true, goals}
        }catch(error){
            return {success: false, error}
        }
    }

    async updateAmount(data){
        console.log(data)
        try{
            const goal = await this.goalRepository.getGoal(data)
            goal.current_amount = parseFloat(goal.current_amount) + parseFloat(data.new_amount)
            const newGoal = await this.goalRepository.updateAmount(goal)
            return {success: true, newGoal}
        }catch(error){
            return {success: false, error}
        }
    }
}

export default GoalsService