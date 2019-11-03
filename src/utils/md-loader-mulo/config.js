const Config = require('markdown-it-chain');
// const anchorPlugin = require('markdown-it-anchor');
const slugify = require('transliteration').slugify;
// const containers = require('./containers');
// const overWriteFenceRule = require('./fence');
const tocPlugin = require('markdown-it-table-of-contents')

const config = new Config(); 

config
  .options.html(true).end()

  // //生成文章内导航
  .plugin('toc')
  .use(tocPlugin, [{
    includeLevel: [2, 3],
    slugify: slugify,
  }])
  .end()

  // .plugin('anchor').use(anchorPlugin, [
  //   {
  //     level: 2,
  //     slugify: slugify,
  //     permalink: true,
  //     permalinkBefore: true
  //   }
  // ]).end()

  // .plugin('containers').use(containers).end();

const md = config.toMd();
// overWriteFenceRule(md);

module.exports = Config
