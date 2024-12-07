const create = (req, res) => {
  // for seeing data in the console of the editor
  console.log(req.body);

  return res.send({
    message: "Create method is working sucessfully",
    // for receive data in the response of the postman

    data: req.body,
  });
};

const getAll = (req, res) => {
  const { query } = req;
  return res.send({
    message: "Get method is working sucessfully",
    data: query,
  });
};

const update = (req, res) => {
  return res.send({
    message: " Update method is working sucessfully",
    data: "Update path request",
  });
};

const remove = (req, res) => {
  return res.send({
    message: " Delete method is working sucessfully",
    data: "Remove path request",
  });
};

module.exports = { create, getAll, update, remove };
