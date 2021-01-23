import mongoose from "mongoose";

const orderProductSchema = mongoose.Schema({});

const orderProductModel = mongoose.model(
  "OrderProduct",
  orderProductSchema,
  "OrderProduct"
);
export default orderProductModel;
