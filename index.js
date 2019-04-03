const path = require('path');
const fs = require('fs');

hexo.extend.filter.register('before_generate', function (data) {

    let config = hexo.config.theme_plus;
    let views = Array.isArray(config.views) ? config.views : [config.views];

    views.forEach(view => {
        let viewFile = fs.readFileSync(view.file).toString();
        hexo.theme.setView(view.path, viewFile);
        logInfo(`Replace ${view.path} to ${view.file}, success!`);
    });

});

function logInfo(txt) {
    if (hexo.config.theme_plus.debug) {
        console.log(txt)
    }
}
