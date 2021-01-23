import express from "express";
import {
  createNewCate,
  deleteCate,
  getAllCate,
  updateCate,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", getAllCate);
router.post("/create", createNewCate);
router.put("/update/:id", updateCate);
router.delete("/delete/:id", deleteCate);

export default router;
