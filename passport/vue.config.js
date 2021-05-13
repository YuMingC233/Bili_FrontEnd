const webpack_config = require("../webpack.config");
module.exports = {
    configureWebpack: webpack_config,
    devServer:{
        port: 9006,
        disableHostCheck: true,
    }
}