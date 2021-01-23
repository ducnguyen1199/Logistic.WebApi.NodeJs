import customerModel from "../models/customer.model.js";
import { apiErr } from "./apiResults/apiErr.js";
import { apiSuccess } from "./apiResults/apiSuccess.js";

export const getAllCustomer = async (req, res) => {
  try {
    customerModel.find().then((rs) => {
      res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const createNewCustomer = async (req, res) => {
  var newCustomer = new customerModel({
    fullName: req.body.fullName,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    type: "Thường",
  });
  try {
    newCustomer.save((err, rs) => {
      err
        ? res.status(400).json(apiErr(err))
        : res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    customerModel.deleteOne({ _id: req.params.id }, (err, rs) => {
      err
        ? res.status(400).json(apiErr(err))
        : res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const updateCustomer = async (req, res) => {
  try {
    customerModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          fullName: req.body.fullName,
          phoneNumber: req.body.phoneNumber,
          address: req.body.address,
          type: "Thường",
        },
      },
      (err, rs) => {
        err
          ? res.status(400).json(apiErr(err))
          : res.status(200).json(apiSuccess(rs));
      }
    );
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};
