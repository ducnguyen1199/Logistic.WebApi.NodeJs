import express from "express";
import { getAllOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", getAllOrder);
export default router;
