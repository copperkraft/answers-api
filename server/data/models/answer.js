module.exports = (sequelize, DataTypes) => {
  const answer = sequelize.define('answer', {
    name: {
      type: DataTypes.STRING
    }
  });

  answer.associate = (question) => {
    answer.belongsTo(question, {
      through: 'TagPost'
    });
  };
  
  return answer;
};
