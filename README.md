# Orders & Products — SPA Application

Test assignment: SPA application for managing orders and products with real-time functionality.

🔗 **Live Demo:** https://orders-and-products-front.onrender.com
🔗 **Backend (WebSocket API):** https://orders-and-products-qf4m.onrender.com

> ⚠️ Backend is hosted on Render's free tier — it "spins down" after inactivity and may take ~30-50 seconds to respond on the first request.

## Features

- Browse the list of orders with an expandable details panel showing products inside each order
- Browse the list of products with a filter by type
- Delete orders and products with a confirmation modal
- Global search by title (across orders and products)
- Real-time counter of active application tabs via WebSocket
- Live clock and date in the top menu
- Smooth animated transitions between pages and components
- Search query and product type filter persisted in localStorage between sessions
- Lazy-loaded pages for improved initial load performance

## Tech Stack

- React 19 + TypeScript
- Redux Toolkit (async thunks simulating a REST API)
- React Router (with lazy-loaded routes)
- Socket.io (client + server)
- Framer Motion (animations)
- SCSS (BEM methodology)
- Web Storage API (localStorage)
- Docker / docker-compose
- Vite

## Getting Started

### 1. Clone the repository

```bash
git clone <https://github.com/RusLan2186/orders-and-products>
cd orders-and-products
```

### 2. Run the frontend

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Run the WebSocket server (in a separate terminal)

```bash
cd server
npm install
npm start
```

The server will be available at `http://localhost:4000`

> Both processes (frontend and WebSocket server) must be running for the active sessions counter to work correctly.

## Running with Docker

```bash
docker compose up --build
```

The app will be available at `http://localhost:3000`, and the WebSocket server at `http://localhost:4000`.

## Environment Variables

For the production frontend build, the following variable is used: