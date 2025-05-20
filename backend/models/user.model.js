import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
    {
        fullname: {
                 firstname: { type: String, required: true, minlength:[3,'first name must be atleast 3 characters'] },
                    lastname: { type: String, minlength:[3,'last name must be atleast 3 characters'] },
        },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true ,select:false},
        socketId: { type: String },
    }
);
userSchema.methods.generateAuthToken = function () {
    const token= jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY,{expiresIn:'1d'});
    return token;
};
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}
const User = mongoose.model('User', userSchema);
export default User;
