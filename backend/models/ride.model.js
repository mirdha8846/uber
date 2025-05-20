import mongoose from "mongoose";

const rideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'captainModel',
        // required: true
    },
    pickup: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    fare: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Completed", "Cancelled","Ongoing"],
        default: "Pending"
    },
    paymentID: {
        type: String,
        
    },
    orderId: {
        type: String,
        
    },
    signature: {
        type: String,
        
    },
    getOtp: {
        type: String,
        select: false,
        required: true

        
    },
});
const Ride = mongoose.model('Ride', rideSchema);
export default Ride;