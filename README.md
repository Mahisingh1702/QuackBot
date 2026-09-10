# QuackBot – Full Stack AI Chat Application

QuackBot is a full-stack AI-powered chat application. The project allows users to create and manage multiple chats, send prompts to an AI model, and store conversation history persistently using MongoDB. The application focuses on conversational AI workflows, frontend-backend communication, state management, markdown rendering, and scalable full-stack architecture.

---

## Features

- **AI-Powered Conversations:** Integrated Gemini API for real-time conversational responses.
- **Persistent Chat History:** Stores chats and messages using MongoDB.
- **Multiple Chat Management:** Create, switch, and delete conversations dynamically.
- **Markdown Rendering:** Supports formatted AI responses including headings, lists, and code blocks.
- **Code Syntax Highlighting:** Implemented PrismJS for rendering syntax-highlighted code snippets.
- **Responsive UI:** Optimized layout for desktop and mobile devices.
- **Dark Mode Support:** Theme persistence using localStorage and Tailwind dark mode utilities.
- **Real-Time UX Enhancements:** Loading animations, toast notifications, and automatic chat scrolling.
- **REST API Architecture:** Built modular backend APIs using Express.js.

---

## Technology Stack

### Frontend

- React
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Gemini API

### Development & Deployment

- GitHub
- Vercel
- VS Code

---

## Project Structure

```txt
client/
  src/
    components/
    context/
    pages/

server/
  configs/
  controllers/
  models/
  routes/
```

## Example Request

```json
{
  "chatId": "123456789",
  "prompt": "Explain React hooks"
}
```

---

## Example Response

```json
{
  "success": true,
  "reply": {
    "role": "assistant",
    "content": "React hooks allow functional components to use state and lifecycle features.",
    "timestamp": 1720000000
  }
}
```

---

## Deployment

Deployed on Vercel.

---

## Author

Mahi Singh Chauhan
