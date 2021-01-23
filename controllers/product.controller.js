import mongoose from "mongoose";
import ProductModel from "../models/product.model.js";
import { apiErr } from "./apiResults/apiErr.js";
import { apiSuccess } from "./apiResults/apiSuccess.js";

export const getAllProduct = async (req, res) => {
  try {
    ProductModel.find().then((rs) => {
      res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const getProductsByCate = async (req, res) => {
  try {
    ProductModel.find({
      idCategory: mongoose.Types.ObjectId(req.params.id),
    })
      .then((rs) => {
        res.status(200).json(apiSuccess(rs));
      })
      .catch((err) => {
        res.status(400).json(apiErr(err));
      });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const getProductsByKW = async (req, res) => {
  try {
    ProductModel.find({
      name: {
        $regex: new RegExp(req.query.keyword, "i"),
      },
    })
      .then((rs) => {
        res.status(200).json(rs);
      })
      .catch((err) => {
        res.status(400).json(apiErr(err));
      });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const createNewProduct = async (req, res) => {
  var newProduct = new ProductModel({
    idCategory: req.body.idCategory,
    name: req.body.name,
    price: req.body.price,
    provide: req.body.provide,
    img: req.body.img,
    description: req.body.description,
    rating: req.body.rating,
    countRating: req.body.countRating,
    bought: req.body.bought,
    inventory: req.body.inventory,
    dateCreate: req.body.dateCreate,
    dateUpdate: req.body.dateUpdate,
  });
  try {
    newProduct.save((err, rs) => {
      err
        ? res.status(400).json(apiErr(err))
        : res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const deleteProduct = async (req, res) => {
  try {
    ProductModel.deleteOne({ _id: req.params.id }, (err, rs) => {
      err
        ? res.status(400).json(apiErr(err))
        : res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const updateProduct = async (req, res) => {
  try {
    ProductModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          idCategory: req.body.idCategory,
          name: req.body.name,
          price: req.body.price,
          provide: req.body.provide,
          img: req.body.img,
          description: req.body.description,
          rating: req.body.rating,
          countRating: req.body.countRating,
          bought: req.body.bought,
          inventory: req.body.inventory,
          dateCreate: req.body.dateCreate,
          dateUpdate: req.body.dateUpdate,
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
