import express from 'express'
import GoalsRepository from '../repositories/goals-repository.js'
import GoalsService from '../services/goals-service.js'
import GoalsController from '../controllers/goals-controller.js'

const router = express.Router()
const goalsRepository = new GoalsRepository
const goalsService = new GoalsService(goalsRepository)
const goalController = new GoalsController(goalsService)

router.post('/createGoal', goalController.createGoal)
router.delete('/deleteGoal/:id_goal', goalController.deleteGoal)
router.put('/updateAmount', goalController.updateAmount)
router.get('/getGoals/:idUser', goalController.getGoals)
export default router 