import express from 'express';
import { createChat, deleteChat, getChats } from '../controllers/chatController.js';

const chatRouter = express.Router();

chatRouter.get('/create',createChat)
chatRouter.get('/get', getChats)
chatRouter.post('/delete', deleteChat)

export default chatRouter;