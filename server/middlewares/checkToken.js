const tokenCheck = require('../controllers').tokencode;

module.exports = async fetchToken => {
  const aToken = await tokenCheck.fetchToken();
  //   console.log(aToken);
  // need to do some extra time checks here to check the age of the token
  // this is not an issue now.....but when it comes to automation
  // will need a routine that if it is older than a given date will rotate it.
  // atm the user is forced to rotate
  return aToken.token;
};
