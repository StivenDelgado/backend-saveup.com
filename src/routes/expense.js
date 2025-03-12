import express from 'express';
import ExpenseRepository from '../repositories/expense-repository.js';
import ExpenseService from '../services/expense-service.js';
import ExpenseController from '../controllers/expense-controller.js';

const router = express.Router()
const expenseRepository = new ExpenseRepository
const expenseService =  new ExpenseService(expenseRepository)
const expenseController = new ExpenseController(expenseService)

// Expenses routes
router.post('/createExpense', expenseController.createExpense)
router.delete('/deleteExpense', expenseController.deleteExpense)


export default router;