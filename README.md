# Uber Clone Project

A full-stack Uber-inspired ride-hailing application built with **React (Vite)** for the frontend and **Node.js/Express** for the backend. This project demonstrates real-time ride management, user/captain authentication, and map-based services using Google Maps API.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [API Overview](#api-overview)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User & Captain Registration/Login:** Secure authentication for both riders and drivers.
- **Ride Creation & Confirmation:** Users can book rides, captains can accept them.
- **Real-Time Location Updates:** Captains update their location via socket.io.
- **OTP for Rides:** Rides are created with secure OTP for verification.
- **Fare Calculation:** Dynamic fare calculation based on distance and vehicle type.
- **Google Maps Integration:** Address geocoding and distance matrix APIs for accurate location and pricing.
- **Context API:** State management for users, captains, and sockets on the frontend.
- **RESTful API:** Organized routes for users, captains, rides, and maps.

---

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS, React Router, Context API, socket.io-client
- **Backend:** Node.js, Express, MongoDB, socket.io, JWT, bcrypt, Google Maps API
- **Linting/Formatting:** ESLint with React and JS rules

---

## Project Structure

```
uber/
  ├── backend/
  │   ├── app.js
  │   ├── db.js
  │   ├── controllers/
  │   ├── middlewares/
  │   ├── models/
  │   ├── routes/
  │   ├── services/
  │   └── socket.js
  └── frontend/
      ├── src/
      │   ├── context/
      │   ├── pages/
      │   ├── main.jsx
      │   ├── App.jsx
      │   └── index.css
      ├── index.html
      ├── vite.config.js
      ├── tailwind.config.js
      └── eslint.config.js
```

---

## Setup & Installation

### Backend

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mirdha8846/uber.git
   cd uber/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   - Create a `.env` file in `backend/` with:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET_KEY=your_jwt_secret
     GOOGLE_MAP_API=your_google_maps_api_key
     ```

4. **Run the backend server:**
   ```bash
   npm start
   ```
   The API runs on port (default: 5000).

---

### Frontend

1. **Setup frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app runs on [http://localhost:5173](http://localhost:5173).

---

## Usage

- **Register/Login:** Users and captains register/login via REST endpoints.
- **Book a Ride:** Users create rides specifying pickup, destination, and vehicle type.
- **Real-Time Updates:** Captains update locations; users/captains are notified via sockets.
- **Fare/OTP:** Fare is calculated and OTP is generated for each ride.

---

## API Overview

### Main Endpoints

- `POST /api/users/register` — Register a user
- `POST /api/users/login` — Login as user
- `POST /api/captains/register` — Register a captain
- `POST /api/captains/login` — Login as captain
- `POST /api/rides` — Create a ride (user)
- `POST /api/rides/confirm` — Confirm ride (captain)
- `POST /api/maps/address` — Get coordinates for an address
- `POST /api/maps/distance` — Get distance and time between locations

### Socket Events

- `join` — User/captain joins with socketId
- `update-location-captain` — Captain updates live location

---

## Contributing

1. Fork the repo and create your branch.
2. Commit changes with clear messages.
3. Open a pull request describing your changes.

---

## License

This project currently does **not** specify a license. Please contact the author for usage rights.

---

## Author

**[mirdha8846](https://github.com/mirdha8846)**

---

## Notes

- Make sure to update environment variables for backend services.
- For local development, keep backend and frontend running simultaneously.
- This project is a learning/demo clone; not affiliated with Uber.
