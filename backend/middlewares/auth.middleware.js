import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { blackListTokenModel } from "../models/blackListtoken.model.js";
import captainModel from "../models/captain.model.js";

export const authUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1] || req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Not authorized to access this route" });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: "Not authorized to access this route (blacklisted)" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(decoded._id);
        if (!user) {
            return res.status(404).json({ message: "No user found with this ID" });
        }
        req.user = user;
        return next();
    } catch (err) {
        return res.status(401).json({ message: "Not authorized to access this route (error)" });
    }
};

export const authCaptain=  async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];


    if (!token) {
        return res.status(401).json({ message: 'no token' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token: token });



    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized ||blacklisted token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;

        return next()
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
    }
};