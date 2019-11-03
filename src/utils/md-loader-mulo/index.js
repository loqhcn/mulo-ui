const {
  compiler,
  compileTemplate
} = require('./util');
const md = require('./config');

module.exports = function(source) {
  const content = md.render(source);

 return source;
};
