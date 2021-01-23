import mongoose from "mongoose";

const deliverySchema = mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  feePer1Km: Number,
  dateCreate: String,
  dateUpdate: String,
});

const deliveryModel = mongoose.model("Delivery", deliverySchema, "Deliveries");
export default deliveryModel;
