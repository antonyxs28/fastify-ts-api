# Fastify TypeScript API

A lightweight REST API with task management, built with Fastify, TypeScript, and SQLite.

## Features

- CRUD operations for tasks
- Zod request validation
- SQLite persistence
- TypeScript with strict mode
- Auto-loading routes

## Tech Stack

Fastify · TypeScript · SQLite (Quick.db) · Zod

## Quick Start

```bash
npm install
npm run dev
```

## Endpoints

| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| GET    | `/`              | Health check       |
| GET    | `/tasks`         | List all tasks     |
| GET    | `/tasks/:id`     | Get task by ID     |
| POST   | `/tasks`         | Create task        |
| PATCH  | `/tasks/:id`     | Update task        |
| DELETE | `/tasks/:id`     | Delete task        |

## Commands

```bash
npm run dev    # Development with hot-reload
npm run build  # Build for production
npm start      # Start production server
npm test       # Run tests
```

## Task Schema

```json
{
  "id": "string",
  "name": "string",
  "status": "pending | progress | completed",
  "createdAt": "ISO date string"
}
```
