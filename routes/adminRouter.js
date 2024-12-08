const routes = require("express").Router();
const {
  create,
  get,
  getAll,
  update,
  remove,
} = require("../Controller/adminController");

const {
  createAdmin,
  getAllAdmin,
  getAdmin,
  updateAdmin,
  removeAdmin,
} = require("../validations/adminValidator");

routes.post("/create", createAdmin, create);
routes.get("/get-all", getAllAdmin, getAll);
routes.get("/get", getAdmin, get);
routes.put("/update", updateAdmin, update);
routes.delete("/get", removeAdmin, remove);

module.exports = routes;
