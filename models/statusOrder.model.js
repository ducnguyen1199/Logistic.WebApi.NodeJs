import mongoose from "mongoose";

const statusOrderSchema = mongoose.Schema({});

const statusOrderModel = mongoose.model(
  "statusOrder",
  statusOrderSchema,
  "StatusOrders"
);
export default statusOrderModel;
