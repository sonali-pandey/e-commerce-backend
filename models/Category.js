
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define an id column
    id: {
        // use the special Sequelize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        // this is the equivalent of SQL's `NOT NULL` option
        allowNull: false,
        // instruct that this is the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
    },
    // define and category name column
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // there cannot be any duplicate category names in this table
      unique: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;