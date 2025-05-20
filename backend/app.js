import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js';
import captainRoutes from './routes/captain.routes.js';
import { connectDB } from './db.js';
import rideRoutes from './routes/ride.routes.js';
// import { initializeSocket } from './socket.js';
import mapsRoutes from './routes/maps.routes.js';
const app = express();
dotenv.config();
const corsOptions = {
    origin: 'http://localhost:5173', // Your React app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // To allow cookies
};
app.use(cors(
   corsOptions
));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
// initializeSocket(app);
app.use('/api/users', userRoutes);
app.use('/api/rides',rideRoutes);
app.use('/api/captains', captainRoutes);
app.use('/api/maps', mapsRoutes);
export default app;
