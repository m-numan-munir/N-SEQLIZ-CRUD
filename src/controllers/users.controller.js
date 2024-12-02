import { User } from "../models/root.models.js";

export const createUsers = async (req, res) => {
  try {
    let user = await User.create(req.body);
    console.log("After ", user);
    return res.status(201).json({ status: "Success", data: user });
  } catch (error) {
    return res.status(404).json({ status: "Failed", message: error });
  }
};
export const findAllUsers = async (req, res) => {
  try {
    let users = await User.findAll();
    if (!users.length) {
      return res.status(200).json({ status: "No users found", data: [] });
    }

    return res.status(200).json({ status: "Success", data: users });
  } catch (error) {
    return res
      .status(404)
      .json({ status: "Failed", message: "Error fetching users" });
  }
};

export const updateUsers = async (req, res) => {
  try {
    // let user = await User.findByPk(req.params.id);
    // if (!user) {
    //   return res
    //     .status(404)
    //     .json({ status: "Failed", message: "User not found" });
    // }
    // user = await user.update(req.body);
    let user = await User.update(req.body, { where: { id: req.params.id } });
    return res.status(200).json({ status: "Success", data: user });
  } catch (error) {
    return res.status(404).json({ status: "Failed", message: error });
  }
};

export const deleteUsers = async (req, res) => {
  let response = User.destroy({ where: { id: req.params.id } });
  return res.status(200).json({ status: "Success", data: response });
};
