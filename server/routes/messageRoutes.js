import express from "express";
import {
  textMessageController,
  imageMessageController,
} from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.post("/text", textMessageController);
messageRouter.post("/image", imageMessageController);

export default messageRouter;
