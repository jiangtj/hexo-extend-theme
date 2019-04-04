module.exports = {
    log: function(config, txt) {
        if (config.debug) {
            console.log(txt)
        }
    }
}