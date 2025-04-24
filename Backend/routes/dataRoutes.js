import express from "express";
import auth from "../middlewares/auth.js";
import { getData } from "../controllers/dataController.js";


const router = express.Router();

router.get("/data", auth, getData);

export default router;
