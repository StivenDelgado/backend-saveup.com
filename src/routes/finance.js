import express from 'express';
import FinanceController from '../controllers/finance-controller.js';
import FinanceService from '../services/finance-service.js';
import FinanceRepository from '../repositories/finance-repository.js';
import IncomeRepository from '../repositories/income-repository.js';
import IncomeService from '../services/income-service.js';
import ExpenseRepository from '../repositories/expense-repository.js';
import ExpenseService from '../services/expense-service.js';


const router = express.Router()

const incomeRepository = new IncomeRepository
const serviceIncome = new IncomeService(incomeRepository)

const expenseRepository = new ExpenseRepository
const serviceExpense = new ExpenseService(expenseRepository)

const financeRepository = new FinanceRepository
const financeService =  new FinanceService(financeRepository, serviceIncome, serviceExpense)
const financeController = new FinanceController(financeService)

router.get('/getFinances/:id_user', financeController.getFinances)
router.post('/changeSalary', financeController.updateSalary)

export default router;