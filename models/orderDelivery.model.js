import mongoose from "mongoose";

const orderDeliverySchema = mongoose.Schema({});

const orderDeliveryModel = mongoose.model(
  "OrderDelivery",
  orderDeliverySchema,
  "OrderDelivery"
);
export default orderDeliveryModel;
