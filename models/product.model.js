import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  idCategory: Object,
  name: String,
  price: Number,
  provide: String,
  img: [],
  description: String,
  rating: Number,
  countRating: Number,
  bought: Number,
  inventory: Number,
  dateCreate: String,
  dateUpdate: String,
});

const ProductModel = mongoose.model("Product", productSchema, "Products");
export default ProductModel;
