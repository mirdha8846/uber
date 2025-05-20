import User from "../models/user.model.js";
import { validationResult } from "express-validator";
import { createUser } from "../services/user.service.js";
import { authUser } from "../middlewares/auth.middleware.js";
import { blackListTokenModel } from "../models/blackListtoken.model.js";
export const register = async (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
        const { fullname, email, password } = req.body;
        const hashPassword=await User.hashPassword(password);

        const user = await createUser({firstname:fullname.firstname, lastname:fullname.lastname, email, password:hashPassword});
        const token = user.generateAuthToken();
      res.status(201).json({ user ,token});
    
};
export const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {  email, password } = req.body;
    const user=await User.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({message:"Invalid credentials"});
    }
    const isMatch=await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid credentials"});
    }
    user.password = undefined
    const token = user.generateAuthToken();
    
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ user ,token});

};
export const getUserProfile = async (req, res) => {
return res.status(200).json(req.user);
};
// export const logout = async (req, res) => {
//     res.clearCookie('token');
//     const token=req.headers.authorization?.split(" ")[1]||req.cookies.token;
//     await blackListTokenModel.create({token});
//     return res.status(200).json({message:"Logged out successfully"});
// }
export const logout = async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;

    if (!token) {
        return res.status(400).json({ message: "No token provided" });
    }

    // Check if token is already blacklisted
    const isBlacklisted = await blackListTokenModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(400).json({ message: "Token is already blacklisted" });
    }

    // Blacklist the token
    await blackListTokenModel.create({ token });

    // Clear cookie if applicable
    res.clearCookie('token');
    return res.status(200).json({ message: "Logged out successfully" });
};
