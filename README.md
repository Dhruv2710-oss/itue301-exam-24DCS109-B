# MedCare Plus — Hospital Appointment System

ITUE301 Set A practical: React + Express.js + MongoDB (Mongoose).

## Frontend setup and run

```bash
cd frontend
npm install
npm start
```

Open http://localhost:3000

## Backend setup and run

```bash
cd backend
npm install
npm start
```

API base URL: http://localhost:5000

## MongoDB setup

1. Create a cluster in MongoDB Atlas (or use local MongoDB).
2. Copy `backend/.env.example` to `backend/.env`.
3. Set `MONGO_URI` to your connection string.
4. The app uses database name `MedCarePlus`.

The in-memory appointment and doctor APIs (Tasks 3–4 and booking) still work if MongoDB is unavailable.

## Required environment variables

| Variable   | Description                          |
| ---------- | ------------------------------------ |
| PORT       | Backend port (default 5000)          |
| MONGO_URI  | MongoDB connection string from Atlas |

Never commit `.env`. Use `.env.example` as the template.
