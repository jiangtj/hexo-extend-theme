const fs = require('fs');
const path = require('path');
const {log} = require('./uitl');

function readViews(dataPath, filePath) {
    let views = [];
    let readPath = path.join(dataPath, filePath);
    let files = fs.readdirSync(readPath,{withFileTypes: true});
    files.forEach(item => {
        let nextFilePath = path.join(filePath, item.name);
        if(item.isFile()) {
            views.push(nextFilePath);
        } else {
            views = views.concat(readViews(dataPath, nextFilePath));
        }
    })
    return views;
}

module.exports = function (hexo,config) {
    let dataPath = path.resolve(hexo.base_dir, config.custom_path);
    let files = [];
    try {
        files = readViews(dataPath, '');
    } catch (error) {
        if (error.code === 'ENOENT') {
            log(config, `不存在 '${dataPath}' !`)
        } else {
            log(config, error)
        }
    }
    return files.map(item => {
        return {
            path: item,
            file: path.resolve(dataPath, item)
        }
    });
}
