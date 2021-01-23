import mongoose from "mongoose";

const orderSchema = mongoose.Schema({});

const orderModel = mongoose.model("Order", orderSchema, "Orders");
export default orderModel;
