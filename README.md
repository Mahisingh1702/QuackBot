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

---

## Setup and Installation

### Clone the repository

```bash
git clone https://github.com/Mahisingh1702/QuackBot
cd quackbot
```

---

### Frontend Setup

```bash
cd client
npm install
```

Create `.env` inside `client/`

```env
VITE_SERVER_URL=http://localhost:3000
```

---

### Backend Setup

```bash
cd server
npm install
```

Create `.env` inside `server/`

```env
MONGODB_URI
GEMINI_API_KEY
```

---

## Running the Project

### Start Frontend

```bash
cd client
npm run dev
```

### Start Backend

```bash
cd server
npm run server
```

---

## API Endpoints

### Chat Routes

- `GET /api/chat/get`
- `GET /api/chat/create`
- `POST /api/chat/delete`

### Message Routes

- `POST /api/message/text`

---

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
