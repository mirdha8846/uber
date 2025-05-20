import { validationResult } from "express-validator";
import { getAddressCoordinate,getAutoCompleteSuggestions,getCaptainsInTheRadius,getDistanceTime}from "../services/maps.service.js";
 export const getCoordinates = async (req, res) => {    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { address } = req.query;
    try {
        const coordinates = await getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
 }
 export const getDistance = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { origin, destination } = req.query;
    try {
        const distance = await getDistanceTime(origin, destination);
        res.status(200).json(distance);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
 }
 export const getAutoComplete = async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.query;

        const suggestions = await getAutoCompleteSuggestions(input);

        res.status(200).json(suggestions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
 export const getCaptains = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { ltd, lng, radius } = req.query;
    try {
        const captains = await getCaptainsInTheRadius(ltd, lng, radius);
        res.status(200).json(captains);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
 }