const fs = require("fs").promises;

const getSecretKey = () => {
  return fs.readFile(`${__dirname}/secret_key.key`);
};

module.exports = { getSecretKey };
