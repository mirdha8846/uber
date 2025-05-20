import { Router } from "express";
import { query } from "express-validator";
import { authUser } from "../middlewares/auth.middleware.js";
import { getCoordinates, getDistance, getAutoComplete} from "../controllers/map.controller.js";
const router = Router();

router.get("/get-coordinates", query("address").isString().notEmpty(),authUser, getCoordinates);
router.get("/get-distance-time", query("origin").isString().notEmpty(), query("destination").isString().notEmpty(),authUser,getDistance);
router.get("/get-suggestions", query("input").isString().notEmpty(),authUser, getAutoComplete);

export default router;  