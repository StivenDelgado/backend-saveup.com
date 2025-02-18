import express from 'express';
import ChatbotController from '../controllers/chatbot-controller.js';
import ChatbotService from '../services/chatbot-service.js';
import ChatbotRepository from '../repositories/chatbot-repository.js';

const router = express.Router();
const chatbotRepository = new ChatbotRepository();
const chatbotService = new ChatbotService(chatbotRepository);
const chatbotController = new ChatbotController(chatbotService);

router.post('/send-message', chatbotController.sendMessage);
router.get('/get-message', chatbotController.getChat);

export default router;

