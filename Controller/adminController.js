const { models } = require("../database");
const {
  createAdmin,
  getAllAdmin,
  getAdmin,
  updateAdmin,
  removeAdmin,
} = require("../database/models/adminModel");
const responseHandler = require("../responseHandler");

const create = async (req, res) => {
  try {
    const admin = await createAdmin(req.body);
    return responseHandler(res, { data: admin });
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

const getAll = async (req, res) => {
  try {
    const admin = await getAllAdmin();
    return responseHandler(res, { data: admin });
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

const get = async (req, res) => {
  try {
    const admin = await getAdmin(req.query);
    return responseHandler(res, admin);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

const update = async (req, res) => {
  try {
    const admin = await updateAdmin(req.body);
    return responseHandler(res, admin);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

const remove = async (req, res) => {
  try {
    const admin = await removeAdmin(req.query);
    return responseHandler(res, admin);
  } catch (error) {
    return responseHandler(res, { error: error });
  }
};

module.exports = { create, getAll, get, update, remove };
