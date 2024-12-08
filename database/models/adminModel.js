const { models } = require("../index");

module.exports = {
  createAdmin: async (body) => {
    try {
      const data = await models.admin.create({ ...body });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },

  getAllAdmins: async (query) => {
    try {
      const data = await models.admin.findAndCountAll({
        attributes: {
          exclude: ["password", "deletedAt"],
        },
        paranoid: false,
      });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },

  getAdmin: async (query) => {
    try {
      const data = await models.admin.findOne({
        where: {
          ...(username == "false"
            ? { userId: userId }
            : { username: username }),
        },
        attributes: {
          exclude: ["password", "deletedAt"],
        },
        paranoid: false,
      });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },

  updateAdmin: async (body) => {
    try {
      const data = await models.admin.update({ ...body });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },

  removeAdmin: async (query) => {
    try {
      const data = await models.admin.remove({ ...body });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },
};
