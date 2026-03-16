import Chat from "../models/Chat.js";
import gemini from "../configs/geminiConfigs.js";

//text-based AI chat message controller
export const textMessageController = async (req, res) => {
  try {
    const { chatId, prompt } = req.body;

    console.log("Incoming request:", req.body);

    // Find chat
    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.json({
        success: false,
        message: "Chat not found",
      });
    }

    // Save user message
    chat.messages.push({
      role: "user",
      content: prompt,
      timestamp: Date.now(),
      isImage: false,
    });

    await chat.save();

    // Call Gemini AI API
    const { choices } = await gemini.chat.completions.create({
      model: "gemini-3-flash-preview",
      messages: chat.messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    // Extract AI reply
    const aiMessage = choices?.[0]?.message;

    if (!aiMessage) {
      return res.json({
        success: false,
        message: "AI did not return a response",
      });
    }

    const reply = {
      ...aiMessage,
      timestamp: Date.now(),
      isImage: false,
    };

    // Save AI reply
    chat.messages.push(reply);
    await chat.save();

    res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("AI API Error:", error);

    // Handle rate limit error
    if (error.status === 429) {
      return res.json({
        success: false,
        message: "Too many requests. Please wait and try again.",
      });
    }

    // Handle invalid API key
    if (error.status === 401) {
      return res.json({
        success: false,
        message: "Invalid API key. Check GEMINI_API_KEY.",
      });
    }

    res.json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
};
