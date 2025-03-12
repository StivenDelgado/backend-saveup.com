class GoalsController{

    constructor(goalsService){
        this.goalsService = goalsService
    }

    createGoal = async (req, res) => {
        const response = await this.goalsService.createGoal(req.body)
        if(response.success){
            return res.status(200).json(response)
        }else{
            return res.status(400).json(response)
        }
    }

    deleteGoal = async (req, res) => {
        const response = await this.goalsService.deleteGoal(req.body)
        if(response.success){
            return res.status(200).json(response)
        }else{
            return res.status(400).json(response)
        }
    }

    getGoals = async (req, res) => {
        const response = await this.goalsService.getGoals(req.params)
        console.log(response)
        if(response.success){
            return res.status(200).json(response)
        }else{
            return res.status(400).json(response)
        }
    }

    updateAmount = async (req, res) => {
        const response = await this.goalsService.updateAmount(req.body)
        if(response.success){
            return res.status(200).json(response)
        }else{
            return res.status(400).json(response)
        }
    }
}
 
export default GoalsController