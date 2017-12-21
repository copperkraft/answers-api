const Sequelize = require('sequelize');
const databaseConnection = require('./db-connetction');

const userRole = require('./models/user-role')(databaseConnection, Sequelize.DataTypes);
const user = require('./models/user')(databaseConnection, Sequelize.DataTypes);
const question = require('./models/question')(databaseConnection, Sequelize.DataTypes);
const answer = require('./models/answer')(databaseConnection, Sequelize.DataTypes);

user.associate(userRole);
question.associate(user);
answer.associate(question);

module.exports.userRole = userRole;
module.exports.user = user;
module.exports.question = question;
module.exports.answer = answer;