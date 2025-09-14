import imagekit from "../configs/imageKit.js";
import Chat from "../models/Chat.js";
import axios from "axios";
import openai from "../configs/openai.js";

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
    const { choices } = await openai.chat.completions.create({
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
//image based AI generation
export const imageMessageController = async (req, res) => {
  try {
    const { prompt, chatId } = req.body;
    //find chat
    const chat = await Chat.findOne({ _id: chatId });

    //push user message
    chat.messages.push({
      role: "user",
      content: prompt,
      timestamp: Date.now(),
      isImage: false,
    });

    //encode the prompt
    const encodedPrompt = encodeURIComponent(prompt);

    //imageit AI generation
    const generatedImageUrl = `${
      process.env.IMAGEKIT_URL_ENDPOINT
    }/ik-genimg-prpmpt-${encodedPrompt}/quackgpt/${Date.now()}.png?tr=w-800,h-800`;

    //fetching from imagekit
    const aiImageResponse = await axios.get(generatedImageUrl, {
      responseType: "arraybuffer",
    });

    //covert to base64
    const base64Image = `data:image/png;base64,${Buffer.from(
      aiImageResponse.data,
      "binary"
    ).toString("base64")}`;

    //upload to imagekit
    const uploadResponse = await imagekit.upload({
      file: base64Image,
      fileName: `${Date.now()}.png`,
      folder: "quackgpt",
    });
    const reply = {
      role: "assistant",
      content: uploadResponse.url,
      timestamp: Date.now(),
      isImage: true,
    };
    res.json({ success: true, reply });

    chat.messages.push(reply);
    await chat.save();

    //credits code
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
