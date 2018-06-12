const TokenCode = require('../models/sql').TokenCode;

module.exports = {
  list(req, res) {
    return TokenCode.findAll({})
      .then(tokencode => res.status(200).send(tokencode[0]))
      .catch(error => {
        console.log(error);
        return res.status(400).send(error);
      });
  },
  create(req, res) {
    return TokenCode.create({
      tokenname: req.body.tokenname,
      token: req.body.token
    })
      .then(tokencode => res.status(200).send(tokencode))
      .catch(error => {
        console.log(error);
        return res.status(400).send(error);
      });
  },
  fetchToken() {
    return TokenCode.findAll({})
      .then(tokencode => {
        return tokencode[0].dataValues;
      })
      .catch(error => error);
  },
  rotateToken(req, res) {
    console.log(req.body);
    // google OAuth get token
    // update token in db
    // return result
  }
};
