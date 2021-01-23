import mongoose from "mongoose";

const roleSchema = mongoose.Schema({
  name: String,
});

const roleModel = mongoose.model("Role", roleSchema, "Roles");
export default roleModel;
