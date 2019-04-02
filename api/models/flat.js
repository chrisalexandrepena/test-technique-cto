'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flat = sequelize.define('Flat', {
      url: DataTypes.STRING,
      price: DataTypes.INTEGER,
      size: DataTypes.FLOAT,
      nbrooms: DataTypes.INTEGER,
      place: DataTypes.STRING,
  }, {});
  Flat.associate = function(models) {
    // associations can be defined here
  };
  return Flat;
};
