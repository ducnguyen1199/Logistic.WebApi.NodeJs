import express from "express";
import {
  createNewCustomer,
  deleteCustomer,
  getAllCustomer,
  updateCustomer,
} from "../controllers/customer.controller.js";

const router = express.Router();

router.get("/", getAllCustomer);
router.post("/create", createNewCustomer);
router.put("/update/:id", updateCustomer);
router.delete("/delete/:id", deleteCustomer);
export default router;
