'use strict';

const crypto = require('crypto');
let ctr = {
  algorithm: 'aes-256-ctr',
  password: 'd6F3Efeq'
};

module.exports = (text) => {

  return _decrypt();

  function _decrypt() {
    return new Promise((resolve, reject) => {
      try {
        let decipher = crypto.createDecipher(ctr.algorithm, ctr.password);
        let dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        dec = JSON.parse(dec);
        return resolve(dec);
      }
      catch (err) {
        return reject({ message: 'Invalid token', error: err });
      }
    });
  }

};
