# Expense Tracker

A full-stack expense tracker web application built with React (frontend) and Node.js/Express/MongoDB (backend).

---

## Project Structure

```
expense-tracker-website/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── api.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── .env
    ├── package.json
    ├── vite.config.js
    └── index.html
```

---

## Backend Setup

1. **Install dependencies:**
   ```sh
   cd backend
   npm install
   ```

2. **Configure environment variables:**
   - Create a `.env` file in `backend/` with:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

3. **Start the backend server:**
   ```sh
   npm run dev
   ```
   The backend runs on [http://localhost:5000](http://localhost:5000).

---

## Frontend Setup

1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```

2. **Configure API URL (optional):**
   - Create a `.env` file in `frontend/` with:
     ```
     VITE_API_URL=http://localhost:5000
     ```

3. **Start the frontend dev server:**
   ```sh
   npm run dev
   ```
   The frontend runs on [http://localhost:3000](http://localhost:3000).

---

## Features

- User registration and login (JWT authentication)
- Add income and expense entries
- View all expenses
- Dashboard with total income, expense, and balance
- Summary charts (Pie and Line)
- Responsive UI with Bootstrap

---

## Technologies Used

- **Frontend:** React, React Router, Bootstrap, Chart.js
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

---

## License

MIT

---

## Author

Rutuja Mamankar
