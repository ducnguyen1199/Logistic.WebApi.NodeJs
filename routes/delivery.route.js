import express from "express";
import {
  createNewDelivery,
  deleteDelivery,
  getAllDelivery,
  updateDelivery,
} from "../controllers/delivery.controller.js";

const router = express.Router();

router.get("/", getAllDelivery);
router.post("/create", createNewDelivery);
router.put("/update/:id", updateDelivery);
router.delete("/delete/:id", deleteDelivery);
export default router;
