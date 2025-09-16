import Chat from "../models/Chat.js";
import axios from "axios";
import gemini from "../configs/geminiConfigs.js";

//text-based AI chat message controller
export const textMessageController = async (req, res) => {
  try {
    const { chatId, prompt } = req.body;

    const chat = await Chat.findOne({ _id: chatId });
    chat.messages.push({
      role: "user",
      content: prompt,
      timestamp: Date.now(),
      isImage: false,
    });
    const { choices } = await gemini.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    const reply = {
      ...choices[0].message,
      timestamp: Date.now(),
      isImage: false,
    };
    res.json({ success: true, reply });
    chat.messages.push(reply);
    await chat.save();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
