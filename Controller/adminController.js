const {
  createAdmin,
  getAllAdmins,
  getAdmin,
  updateAdmin,
  removeAdmin,
} = require("../database/models/adminModel");
const responseHandler = require("../responseHandler");

const create = async (req, res) => {
  try {
    const user = await createAdmin(req.body);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

const getAll = async (req, res) => {
  try {
    const user = await getAllAdmins();
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

const get = async (req, res) => {
  try {
    const user = await getAdmin(req.query);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

const update = async (req, res) => {
  try {
    const user = await updateAdmin(req.query);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

const remove = async (req, res) => {
  try {
    const user = await removeAdmin(req.query);
    return responseHandler(res, user);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

module.exports = { create, getAll, get, update, remove };
