import deliveryModel from "../models/delivery.model.js";
import { apiErr } from "./apiResults/apiErr.js";
import { apiSuccess } from "./apiResults/apiSuccess.js";

export const getAllDelivery = async (req, res) => {
  try {
    deliveryModel.find().then((rs) => {
      res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const createNewDelivery = async (req, res) => {
  var newDelivery = new deliveryModel({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    feePer1Km: req.body.feePer1Km,
  });
  try {
    newDelivery.save((err, rs) => {
      err
        ? res.status(400).json(apiErr(err))
        : res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const deleteDelivery = async (req, res) => {
  try {
    deliveryModel.deleteOne({ _id: req.params.id }, (err, rs) => {
      err
        ? res.status(400).json(apiErr(err))
        : res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const updateDelivery = async (req, res) => {
  try {
    deliveryModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
          feePer1Km: req.body.feePer1Km,
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
