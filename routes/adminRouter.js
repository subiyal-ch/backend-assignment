const routes = require("express").Router();
const { create, get } = require("../Controller/adminController");

routes.post("/create", create);
routes.get("/get", get);

module.exports = routes;
