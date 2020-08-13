'use strict';

const { readdirSync } = require('fs');
const { resolve, join } = require('path');

function readViews(dataPath, filePath) {
  let views = [];
  const readPath = join(dataPath, filePath);
  const files = readdirSync(readPath, {withFileTypes: true});
  files.forEach(item => {
    const nextFilePath = join(filePath, item.name);
    if (item.isFile()) {
      views.push(nextFilePath);
    } else {
      views = views.concat(readViews(dataPath, nextFilePath));
    }
  });
  return views;
}

module.exports = function(hexo, config) {
  const dataPath = resolve(hexo.base_dir, config.custom_path);
  let files = [];
  try {
    files = readViews(dataPath, '');
  } catch (error) {
    if (error.code === 'ENOENT') {
      hexo.log.debug(`不存在 '${dataPath}' !`);
    } else {
      hexo.log.debug(error);
    }
  }
  return files.map(item => {
    return {
      path: item,
      file: resolve(dataPath, item)
    };
  });
};
