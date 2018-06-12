module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('TokenCode', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tokenname: Sequelize.STRING,
      token: Sequelize.STRING
    });
  },
  down: queryInterface => queryInterface.dropTable('TokenCode')
};
