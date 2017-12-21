module.exports = (sequelize, DataTypes) => {
  const question = sequelize.define('question', {
    name: {
      type: DataTypes.STRING
    }
  });

  
  question.associate = (user) => {
    question.belongsTo(user);
  };
  
  return question;
};
