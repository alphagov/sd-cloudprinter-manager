const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const keys = require('../../config/keys');

const basename = path.basename(module.filename);
const mysqldb = {};

const { dbName, dbUser, dbPassword } = keys.mysql;

let sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: 'googlecloudprint_token_1',
  port: 3306,
  dialect: 'mysql'
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    mysqldb[model.name] = model;
  });

Object.keys(mysqldb).forEach(function(modelName) {
  if (mysqldb[modelName].associate) {
    mysqldb[modelName].associate(mysqldb);
  }
});

mysqldb.sequelize = sequelize;
mysqldb.Sequelize = Sequelize;

module.exports = mysqldb;
