// Core
const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});


module.exports = async () => {
  global.console.log('Init tests');
};
