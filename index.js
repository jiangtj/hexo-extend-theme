const fs = require('fs');
const {log} = require('./uitl');

hexo.extend.filter.register('before_generate', function (data) {

    // default config
    let config = Object.assign({
        debug: false,
        custom_path: 'custom/theme',
        views: []
    }, hexo.config.theme_plus);

    // views
    let views = []

    // read views from custom path
    if (config.custom_path) {
        views = views.concat(require('./readDataFile')(config));
    }

    // read views from config file
    views = views.concat(config.views);

    // setView
    views.forEach(view => {
        let viewFile = fs.readFileSync(view.file).toString();
        view.path = view.path.replace(/\\/g, "/");
        hexo.theme.setView(view.path, viewFile);
        log(config, `Replace ${view.path} to ${view.file}, success!`);
    });

});
