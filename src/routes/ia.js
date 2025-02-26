import express from 'express';
import IaController from '../controllers/ia-controller.js';
import IaService from '../services/ia-service.js';

const router = express.Router();
const iaService = new IaService();
const iaController = new IaController(iaService);

router.post('/send-message', iaController.sendMessage);
router.get('/get-message', iaController.getChat);

export default router;

