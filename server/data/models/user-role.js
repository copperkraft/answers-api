module.exports = (sequelize, DataTypes) => {
  const userRole = sequelize.define('userRole', {
    name: {
      type: DataTypes.STRING
    }
  });
  
  return userRole;
};
