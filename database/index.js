const sequelize = require("./dbConnections");
const users = require("./tables/user");
const models = { users };

sequelize.models = models;
module.exports = { sequelize, models };
