import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  name: String,
  img: [],
});

const categoryModel = mongoose.model("Category", categorySchema, "Categories");
export default categoryModel;
