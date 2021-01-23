import orderModel from "../models/order.model.js";
import { apiErr } from "./apiResults/apiErr.js";
import { apiSuccess } from "./apiResults/apiSuccess.js";

export const getAllOrder = async (req, res) => {
  try {
    orderModel.find().then((rs) => {
      res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};
