var express = require("express");
var router = express.Router();
const {
  create,
  getAll,
  update,
  remove,
} = require("../Controller/userController");

/* GET users listing. */
router.post("/create", create);
router.get("/get-all", getAll);
router.put("/update", update);
router.delete("/delete", remove);

module.exports = router;
