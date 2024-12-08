const sequelize = require("./dbConnections");

const users = require("./tables/users");
const admins = require("./tables/admins");

const models = { users };

sequelize.models = models;
module.exports = { sequelize, models };
