const Sequelize = require('sequelize');
const config = require('config');

const databaseConnection = new Sequelize(config.get('databaseUrl'), {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: config.get('usingSsl')
  }
});

console.log('database connection with ' + config.get('databaseUrl'));

databaseConnection
  .authenticate()
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

databaseConnection.sync({force: true})
  .catch(err => {
    console.error('Unable to sync the database:', err);
  });

module.exports = databaseConnection;
