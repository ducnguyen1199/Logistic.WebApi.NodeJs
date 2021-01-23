import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  idRole: Object,
  userName: String,
  hashPassword: String,
  fullName: String,
  avatar: String,
  birthDay: String,
  phoneNumber: String,
  email: String,
  gender: String,
  status: String,
  lastLogin: String,
  dateCreate: String,
  dateUpdate: String,
});

const userModel = mongoose.model("User", userSchema, "Users");
export default userModel;
