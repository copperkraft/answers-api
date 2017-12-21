module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
      type: DataTypes.STRING
    }
  });


  user.associate = (role) => {
    user.belongsTo(role);
  };
  
  return user;
};
