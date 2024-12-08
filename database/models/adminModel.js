const { models } = require("../index");

module.exports = {
  createAdmin: async (body) => {
    try {
      const data = await models.users.create({ ...body });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },

  getAllAdmin: async (query) => {
    try {
      const data = await models.users.findAndCountAll({
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

  getAdmin: async ({ username, userId }) => {
    try {
      const data = await models.users.findOne({
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

  updateAdmin: async ({ userId, ...body }) => {
    try {
      const data = await models.users.destroy({ where: { userId: userId } });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },

  removeAdmin: async ({ userId }) => {
    try {
      const data = await models.users.destroy({ where: { userId: userId } });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },
};
