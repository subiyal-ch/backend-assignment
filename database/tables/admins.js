const { Model, DataTypes } = require("sequelize");
const sequelize = require("../dbConnections");
const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");

class admins extends Model {}

admins.init(
  {
    adminId: {
      type: DataTypes.STRING(80),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    adminname: {
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

admins.beforeCreate(async (admin) => {
  admin.adminId = uuid();
  admin.password = await hash(admin.password, 10);
});
admins.afterCreate(async (admin) => {
  delete admin.password;
});
module.exports = admins;
