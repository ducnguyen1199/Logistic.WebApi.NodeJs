import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  address: String,
  type: String,
});

const customerModel = mongoose.model("Customer", customerSchema, "Customers");
export default customerModel;
