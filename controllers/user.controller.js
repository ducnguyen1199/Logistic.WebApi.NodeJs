import roleModel from "../models/role.model.js";
import userModel from "../models/user.model.js";
import { apiErr } from "./apiResults/apiErr.js";
import { apiSuccess } from "./apiResults/apiSuccess.js";

export const getAllRoleUser = async (req, res) => {
  try {
    roleModel.find().then((rs) => {
      res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const getAllUser = async (req, res) => {
  try {
    userModel.find().then((rs) => {
      res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json(apiErr(error));
  }
};

export const getUsersByKW = async (req, res) => {
  try {
    userModel
      .find({
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

export const login = async (req, res) => {
  try {
    userModel
      .find({
        userName: req.query.userName,
        hashPassword: req.query.password,
      })
      .then((rs) => {
        res.status(200).json(apiSuccess(rs));
      });
  } catch (error) {
    res.status(404).json({ massage: error.message });
  }
};

export const register = async (req, res) => {
  try {
    var newUser = new userModel({
      idRole: req.query.id
        ? req.query.id
        : ObjectId("600960e182d64d85c095d397"),
      userName: req.body.userName,
      hashPassword: req.body.password,
      fullName: req.body.fullName,
      birthDay: req.body.birthDay,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      gender: req.body.gender,
      status: "active",
    });
    newUser.save((err, rs) => {
      err
        ? res.status(400).json(apiErr(err))
        : res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json({ massage: error.message });
  }
};

export const updateInfoUser = async (req, res) => {
  try {
    userModel.updateOne(
      { _id: req.params.id },
      {
        $set: {
          fullName: req.body.fullName,
          avatar: req.body.avatar,
          birthDay: req.body.birthDay,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
          gender: req.body.gender,
        },
      },
      (err, rs) => {
        err
          ? res.status(400).json(apiErr(err))
          : res.status(200).json(apiSuccess(rs));
      }
    );
  } catch (error) {
    res.status(404).json({ massage: error.message });
  }
};

export const changePassword = async (req, res) => {
  try {
    userModel.updateOne(
      { userName: req.body.userName, hashPassword: req.body.password },
      {
        $set: {
          hashPassword: req.body.newPassword,
        },
      },
      (err, rs) => {
        err
          ? res.status(400).json(apiErr(err))
          : res.status(200).json(apiSuccess(rs));
      }
    );
  } catch (error) {
    res.status(404).json({ massage: error.message });
  }
};

export const DeleteUser = async (req, res) => {
  try {
    userModel.deleteOne({ _id: req.params.id }, (err, rs) => {
      err
        ? res.status(400).json(apiErr(err))
        : res.status(200).json(apiSuccess(rs));
    });
  } catch (error) {
    res.status(404).json({ massage: error.message });
  }
};
