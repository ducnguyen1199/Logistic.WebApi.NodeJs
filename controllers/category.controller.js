import categoryModel from "../models/category.model.js";
import { apiErr } from "./apiResults/apiErr.js";
import { apiSuccess } from "./apiResults/apiSuccess.js";

export const getAllCate = async (req, res) => {
  try {
    categoryModel.find().then((rs) => {
      res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const createNewCate = async (req, res) => {
  var newCate = new categoryModel({
    name: req.body.name,
    img: req.body.img,
  });
  try {
    newCate.save((err, rs) => {
      err
        ? res.status(400).json(apiErr(err))
        : res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const deleteCate = async (req, res) => {
  try {
    categoryModel.deleteOne({ _id: req.params.id }, (err, rs) => {
      err
        ? res.status(400).json(apiErr(err))
        : res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const updateCate = async (req, res) => {
  try {
    categoryModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          img: req.body.img,
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
