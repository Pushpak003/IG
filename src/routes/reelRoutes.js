import express from "express";
import { getReel } from "../controllers/reelController.js";

const router = express.Router();

router.post("/download", getReel);

export default router;
