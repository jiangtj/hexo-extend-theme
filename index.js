/* global hexo */

'use strict';

const { readFileSync } = require('fs');
const { sep } = require('path');

hexo.extend.filter.register('before_generate', () => {

  hexo.log.debug('Theme plus: processing');

  // default config
  const config = Object.assign({
    custom_path: 'custom/theme',
    views: []
  }, hexo.config.theme_plus);

  // views
  let views = [];

  // read views from custom path
  if (config.custom_path) {
    views = views.concat(require('./readDataFile')(hexo, config));
  }

  // read views from config file
  views = views.concat(config.views);

  // setView
  views.forEach(view => {
    const viewFile = readFileSync(view.file).toString();
    if (sep !== '/') {
      hexo.log.debug(`Win: ${view.path}`);
      hexo.log.debug(`Replace ${sep} to / ...`);
      view.path = view.path.split(sep).join('/');
      hexo.log.debug(`Replaced: ${view.path}`);
    }
    hexo.theme.setView(view.path, viewFile);
    hexo.log.debug(`Replace ${view.path} to ${view.file}, success!`);
  });

  hexo.log.debug('Theme plus: processed');
});
