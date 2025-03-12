import express from 'express';
import IncomeRepository from '../repositories/income-repository.js';
import IncomeService from '../services/income-service.js';
import IncomeController from '../controllers/income-controller.js';


const router = express.Router()
const incomeRepository = new IncomeRepository
const incomeService =  new IncomeService(incomeRepository)
const incomeController = new IncomeController(incomeService)
// Incomes routes
router.post('/createIncome', incomeController.createIncome)
router.delete('/deleteIncome', incomeController.deleteIncome)


export default router;