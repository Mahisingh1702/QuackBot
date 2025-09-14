import Chat from "../models/Chat.js";

//API controller for creating a new chat

export const createChat = async (req, res) => {
  try {
    const chatData = {
      messages: [],
      name: "New Chat",
    };

    await Chat.create(chatData);
    res.json({ success: true, message: "Chat created" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
//API controller for getting all chats

export const getChats = async (req, res) => {
  try {
    const chats = await Chat.find().sort({ updatedAt: -1 });
    res.json({ success: true, chats });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
//API controller for deleting all chats

export const deleteChat = async (req, res) => {
  try {
    const { chatId } = req.body;

    await Chat.deleteOne({ _id: chatId });

    res.json({ success: true, message: "Chat deleted" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
