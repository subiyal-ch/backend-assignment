const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbConnections");
const { v4: uuid } = require("uuid");
class users extends Model {}

users.init(
  {
    userId: {
      type: DataTypes.STRING(80),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(34),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
  },
  {
    // it is bydefault true so we not mentioned it seperatly for created at and updated at
    // timestamps:true
    // for creating additional table deleted at
    paranoid: true,
    sequelize,
  }
);

users.beforeCreate((user) => {
  user.userId = uuid();
});
module.exports = users;
