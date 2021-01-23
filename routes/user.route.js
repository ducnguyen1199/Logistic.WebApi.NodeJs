import express from "express";
import {
  changePassword,
  DeleteUser,
  getAllRoleUser,
  getAllUser,
  getUsersByKW,
  login,
  register,
  updateInfoUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUser);
router.get("/roles", getAllRoleUser);
router.get("/getByKW", getUsersByKW);
router.post("/login", login);
router.post("/register", register);
router.post("/addNewUser", register);
router.put("/updateInfo/:id", updateInfoUser);
router.put("/changePassword", changePassword);
router.delete("/delete/:id", DeleteUser);

export default router;
