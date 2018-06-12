module.exports = (sequelize, dataTypes) => {
  let TokenCode = sequelize.define('TokenCode', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tokenname: dataTypes.STRING,
    token: dataTypes.STRING
  });
  // this is for dev only
  sequelize
    .sync()
    .then(() => {
      console.log('MYSQL vouchercode table created/synced successfully');
    })
    .catch(err => {
      console.log('An error occur while creating MYSQL table');
    });
  return TokenCode;
};

// add a note
