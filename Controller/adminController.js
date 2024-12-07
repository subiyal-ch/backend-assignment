module.exports = {
  create: (req, res) => {
    try {
      return res.send({
        status: 200,
        message: "Admin Created",
        data: { value: 1 },
        error: {},
      });
    } catch (error) {
      return res.send({
        status: 404,
        message: "Unable to create admin",
        data: {},
        error: error,
      });
    }
  },

  get: (req, res) => {
    try {
      return res.send({
        status: 200,
        message: "Admin found",
        data: { value: 1 },
        error: {},
      });
    } catch (error) {
      return res.send({
        status: 404,
        message: "Unable to get admin",
        data: {},
        error: error,
      });
    }
  },
};
