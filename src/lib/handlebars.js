const {
  format
} = require('timeago.js');

const helpers = {};

helpers.timeago = timestamp => {
  return format(timestamp);
};

helpers.prettifyDate = timestamp => {
  console.log(timestamp);
  return new Date(timestamp).toString('yyyy-MM-dd');
  
};



module.exports = helpers;