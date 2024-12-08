require("dotenv").config();
const { Sequelize } = require("sequelize");
// instance of database
const sequelize = new Sequelize({
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Error connecting to database: ", error);
  });


  module.exports = sequelize