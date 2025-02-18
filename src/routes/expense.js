import express from 'express';
import ExpenseRepository from '../repositories/expense-repository.js';
import ExpenseService from '../services/expense-service.js';
import ExpenseController from '../controllers/expense-controller.js';

const router = express.Router()
const expenseRepository = new ExpenseRepository
const expenseService =  new ExpenseService(expenseRepository)
const expenseController = new ExpenseController(expenseService)

router.get('/getFinances', expenseController.getFinances)
router.post('/changeSalary', expenseController.changeSalary)
// Expenses routes
router.get('/getExpenses', expenseController.getExpenses)
router.post('/createExpense', expenseController.createExpense)
router.delete('/deleteExpense', expenseController.deleteExpense)
// Incomes routes
router.get('/getIncomes', expenseController.getIncomes)
router.post('/createIncome', expenseController.createIncome)
router.delete('/deleteIncome', expenseController.deleteIncome)



export default router;