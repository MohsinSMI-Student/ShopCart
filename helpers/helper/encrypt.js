'use strict';

const crypto = require('crypto');

let ctr = {
  algorithm: 'aes-256-ctr',
  password: 'd6F3Efeq'
};

module.exports = (text) => {

  return _encrypt();

  function _encrypt() {
    return new Promise((resolve) => {
      let cipher = crypto.createCipher(ctr.algorithm, ctr.password);
      let crypted = cipher.update(text, 'utf8', 'hex');
      crypted += cipher.final('hex');
      return resolve(crypted);
    });
  }

};
