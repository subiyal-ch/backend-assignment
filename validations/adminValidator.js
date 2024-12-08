const joi = require("joi");
const responseHandler = require("../responseHandler");

const createValidation = joi.object({
  name: joi.string().min(3).max(34).required(),
  adminname: joi.string().min(4).max(34).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).max(34).required(),
});

const getValidation = joi
  .object({
    adminId: joi.string().min(3).max(34).optional(),
    adminname: joi.string().min(4).max(34).optional(),
  })
  .unknown(true);

const getAllValidation = joi.object({}).optional();

const updateValidation = joi
  .object({
    adminIdId: joi.string().min(3).max(34).optional(),
    name: joi.string().min(3).max(34).optional(),
    adminname: joi.string().min(4).max(34).optional(),
    email: joi.string().email().optional(),
  })
  .unknown(true);

const removeValidation = joi.object({
  adminId: joi.string().min(3).max(34).required(),
});

// Middleware functions
const createAdmin = async (req, res, next) => {
  try {
    await createValidation.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

const getAllAdmin = async (req, res, next) => {
  try {
    await getAllValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

const getAdmin = async (req, res, next) => {
  try {
    await getValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

const updateAdmin = async (req, res, next) => {
  try {
    await updateValidation.validateAsync(req.body);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

const removeAdmin = async (req, res, next) => {
  try {
    await removeValidation.validateAsync(req.query);
    next();
  } catch (error) {
    return responseHandler(res, { error: error.message });
  }
};

module.exports = { createAdmin, getAdmin, getAllAdmin, updateAdmin, removeAdmin };
