import express from "express";
import {
  createNewProduct,
  deleteProduct,
  getAllProduct,
  getProductsByCate,
  getProductsByKW,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProduct);
router.get("/getByCate/:id", getProductsByCate);
router.get("/getByKW", getProductsByKW);
router.post("/create", createNewProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

export default router;
